module Types
  class MutationType < Types::BaseObject
    field :create_link, mutation: Mutations::CreateLink
    field :create_question, mutation: Mutations::CreateQuestion
    field :update_question, mutation: Mutations::UpdateQuestion
    field :sign_up, mutation: Mutations::SignUp
    field :sign_in_user, mutation: Mutations::SignInUser
    field :create_vote, mutation: Mutations::CreateVote
  end
end
