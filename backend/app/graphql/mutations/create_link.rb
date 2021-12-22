module Mutations
  class CreateLink < BaseMutation
    # arguments passed to the 'resolve' method
    argument :url, String, required: true
    argument :description, String, required: true

    # return type from the mutation
    type Types::LinkType

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
        description: description
      )
    end
  end
end
