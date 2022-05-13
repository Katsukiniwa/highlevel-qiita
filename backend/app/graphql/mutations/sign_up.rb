module Mutations
  class SignUp < BaseMutation
    # often we will need input for specific mutation
    # in those cases we can define those types in the mutation class itself
    class EmailAuthProviderSignUpData < Types::BaseInputObject
      argument :credentials, Types::EmailAuthProviderCredentialsInput, required: false
    end

    argument :name, String, required: true
    argument :auth_provider, EmailAuthProviderSignUpData, required: false

    type Types::UserType

    def resolve(name:, auth_provider:)
      user = User.create!(
        name: name,
        email: auth_provider.credentials.email,
        password: auth_provider.credentials.password
      )

      # TODO: signInUserと重複しているので切り出す
      # use Ruby on Rails - ActiveSupport::MessageEncryptor, to build a token
      crypt = ActiveSupport::MessageEncryptor.new(Rails.application.secret_key_base.byteslice(0..31))
      token = crypt.encrypt_and_sign("user-id:#{user.id}")

      context[:session][:user_id] = token

      icon = user.icon.url.nil? ? "https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" : user.icon.url
      
      {
        id: user.id,
        name: user.name,
        icon: icon,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at,
        votes: user.votes,
        links: user.links,
      }
    end
  end
end
