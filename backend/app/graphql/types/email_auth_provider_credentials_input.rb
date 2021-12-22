module Types
  class EmailAuthProviderCredentialsInput < BaseInputObject
    # the name is usually inferred by class name but can be overwritten
    graphql_name 'EMAIL_AUTH_CREDENTIALS'

    argument :email, String, required: true
    argument :password, String, required: true
  end
end
