module Resolvers
  class CategoryResolver < Resolvers::BaseResolver
    description 'Find a category by name_en'
    type Types::CategoryType, null: false

    argument :name_en, String, required: true

    def resolve(name_en:)
      Category.find_by(name_en: name_en)
    end
  end
end
