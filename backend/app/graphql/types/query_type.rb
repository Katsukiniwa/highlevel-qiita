module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    description 'The query root of this schema'

    # First describe the field signature:
    field :post, PostType, 'Find a post by ID' do
      argument :id, ID
    end

    # Then provide an implementation
    def post(id:)
      Post.find(id)
    end

    field :user, UserType, null: false do
      description 'ユーザ情報を1件取得する'
      argument :id, Int, required: true, description: 'ユーザID'
    end

    def user(id:)
      User.find(id)
    end
  end
end
