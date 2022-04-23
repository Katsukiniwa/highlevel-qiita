module Resolvers
  class QuestionsPerPageResolver < Resolvers::BaseResolver
    description 'Get questions per page'

    type Types::QuestionListPageType, null: false

    argument :page, Int, required: true

    def resolve(page:)
      count = page - 1
      questions = Question.all.offset(10 * count).limit(10)

      {
        questions: questions,
        last_page: Question.count / 10,
        current_page: page,
        page_size: 10,
      }
    end
  end
end
