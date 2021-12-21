module Resolvers
  class QuestionResolver < Resolvers::BaseResolver
    description 'Find a question by ID'
    type Types::QuestionType, null: false

    argument :id, ID, required: true

    def resolve(id:)
      Question.find(id)
    end
  end
end
