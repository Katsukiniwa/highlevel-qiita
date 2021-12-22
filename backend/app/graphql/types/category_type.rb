module Types
  class CategoryType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :name_en, String, null: false
    field :icon, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :questions, [QuestionType], null: false
  end
end
