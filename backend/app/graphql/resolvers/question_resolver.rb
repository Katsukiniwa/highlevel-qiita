module Resolvers
  class QuestionResolver < Resolvers::BaseResolver
    description 'Find a question by ID'
    type Types::QuestionType, null: false

    argument :id, ID, required: true

    def resolve(id:)
      question = Question.find(id)

      {
        id: question.id,
        title: question.title,
        content: question.content,
        user: question.user,
        created_at: question.created_at,
        updated_at: question.updated_at,
        comments: question.comments,
        postedByMe: question.user.id == context[:current_user].id
      }
    end
  end
end
