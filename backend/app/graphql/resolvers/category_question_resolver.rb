module Resolvers
  class CategoryQuestionResolver < Resolvers::BaseResolver
    description 'Get questions per category'

    type Types::CategoryQuestionListPageType, null: false

    argument :category_id, ID, required: true
    argument :page, Int, required: true

    def resolve(category_id:, page:)
      category = Category.find(category_id)
      all_category_questions = category.questions
      questions = all_category_questions.order(created_at: "DESC").offset(10 * (page - 1)).limit(10)

      {
        category: category,
        questions: questions,
        last_page: all_category_questions.size / 10,
        current_page: page,
        page_size: 10,
      }
    end
  end
end
