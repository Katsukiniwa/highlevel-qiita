module Mutations
  class CreateLink < BaseMutation
    # arguments passed to the 'resolve' method
    argument :url, String, required: true
    argument :description, String, required: true

    # return type from the mutation
    type Types::LinkType

    # you must run sign_in_user mutation!!!!
    # run this mutation on GraphiQL
    # =============================
    # mutation {
    #   createLink(
    #     input:{
    #       url: "https://www.howtographql.com/graphql-ruby/3-mutations/"
    #       description: "description1"
    #     }
    #   ){
    #     id
    #     url
    #   }
    # }
    # =============================
    def resolve(url:, description:)
      Link.create!(
        url: url,
        description: description,
        user: context[:current_user]
      )
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
