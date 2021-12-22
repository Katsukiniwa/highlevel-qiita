module Types
  class MutationType < Types::BaseObject
    field :create_link, mutation: Mutations::CreateLink
    field :sign_up, mutation: Mutations::SignUp
  end
end
