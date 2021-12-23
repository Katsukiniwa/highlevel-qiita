module Types
  class MutationType < Types::BaseObject
    field :create_link, mutation: Mutations::CreateLink
    field :sign_up, mutation: Mutations::SignUp
    field :sign_in_user, mutation: Mutations::SignInUser
  end
end
