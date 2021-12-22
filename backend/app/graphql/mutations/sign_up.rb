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
      User.create!(
        name: name,
        email: auth_provider.credentials.email,
        password: auth_provider.credentials.password
      )
    end
  end
end
