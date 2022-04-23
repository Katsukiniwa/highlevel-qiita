module Types
  class QuestionType < Types::BaseObject
    field :id, Int, null: false
    field :title, String, null: false
    field :content, String, null: false
    field :user, UserType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :comments, [CommentType], null: false
  end

  class QuestionListPageType < Types::BaseObject
    field :questions, [QuestionType], null: false
    field :last_page, Int, null: false
    field :current_page, Int, null: false
    field :page_size, Int, null: false
  end
end
