module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    description 'The query root of this schema'

    field :question, resolver: Resolvers::QuestionResolver

    field :category, resolver: Resolvers::CategoryResolver

    field :categories, [CategoryType], null: false do
      description '全カテゴリを取得する'
    end

    def categories
      Category.all.includes(questions: :user)
    end

    field :categories_with_ten_questions, [CategoryType], null: false do
      description '全カテゴリを各カテゴリ10件の質問と一緒に取得する'
    end

    def categories_with_ten_questions
      Category.all.map do |category|
      end
    end

    field :all_links, [LinkType], null: false

    def all_links
      Link.all
    end
  end
end
