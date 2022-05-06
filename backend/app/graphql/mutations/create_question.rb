module Mutations
  class CreateQuestion < BaseMutation
    # arguments passed to the 'resolve' method
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
    def resolve(category_id:, title:, content:)
      category = Category.find(category_id)
      category.questions.create!(
        title: title,
        content: content,
        user: context[:current_user]
      )
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid input: #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
