module Mutations
  class CreateVote < BaseMutation
    argument :link_id, ID, required: false

    type Types::VoteType

    # run this mutation on GraphiQL
    # =============================
    # mutation {
    #   createVote(
    #     input: {
    #       linkId: "3"
    #     }
    #   ) {
    #     link {
    #       description
    #     }
    #   }
    # }
    # =============================
    def resolve(link_id: nil)
      Vote.create!(
        link: Link.find(link_id),
        user: context[:current_user]
      )
    end
  end
end
