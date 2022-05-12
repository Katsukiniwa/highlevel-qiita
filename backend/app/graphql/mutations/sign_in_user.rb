module Mutations
  class SignInUser < BaseMutation
    null true

    argument :credentials, Types::EmailAuthProviderCredentialsInput, required: false

    field :token, String, null: true
    field :user, Types::UserType, null: true

    def resolve(credentials: nil)
      # basic validation
      return unless credentials

      user = User.find_by(email: credentials[:email])

      # ensure we have the correct user
      return raise GraphQL::ExecutionError.new('user not found', extensions: { code: 'AUTHENTICATION_ERROR' }) unless user
      return raise GraphQL::ExecutionError.new('invalid email or password', extensions: { code: 'AUTHENTICATION_ERROR' }) unless user.authenticate(credentials[:password])

      # use Ruby on Rails - ActiveSupport::MessageEncryptor, to build a token
      crypt = ActiveSupport::MessageEncryptor.new(Rails.application.secret_key_base.byteslice(0..31))
      token = crypt.encrypt_and_sign("user-id:#{user.id}")

      context[:session][:user_id] = token

      icon = user.icon.url.nil? ? "https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" : user.icon.url

      {
        user: {
          id: user.id,
          name: user.name,
          icon: icon,
          email: user.email,
          created_at: user.created_at,
          updated_at: user.updated_at,
          votes: user.votes,
          links: user.links,
        },
        token: token
      }
    end
  end
end
