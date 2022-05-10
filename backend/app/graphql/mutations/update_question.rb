module Mutations
  class UpdateQuestion < BaseMutation
    # arguments passed to the 'resolve' method
    argument :question_id, ID, required: true
    argument :category_id, ID, required: true
    argument :title, String, required: true
    argument :content, String, required: true

    # return type from the mutation
    type Types::QuestionType

    # you must run sign_in_user mutation!!!!
    # run this mutation on GraphiQL
    # =============================
    # mutation {
    #   createQuestion(
    #     input:{
    #       title: "how to learn programming"
    #       content: "I am beginner"
    #     }
    #   ){
    #     id
    #     title
    #     user {
    #      id
    #      name
    #     }
    #   }
    # }
    # =============================
    def resolve(question_id:, category_id:, title:, content:)
      question = context[:current_user].questions.find(question_id)
      question.update!(
        category_id: category_id,
        title: title,
        content: content,
      )
      question
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
