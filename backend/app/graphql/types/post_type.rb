module Types
  class PostType < Types::BaseObject
    field :title, String, null: true
    field :rating, Integer, null: true
    field :Content, String, null: true
  end
end
