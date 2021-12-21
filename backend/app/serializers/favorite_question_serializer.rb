# == Schema Information
#
# Table name: favorite_questions
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  question_id :bigint
#  user_id     :bigint
#
# Indexes
#
#  index_favorite_questions_on_question_id  (question_id)
#  index_favorite_questions_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (question_id => questions.id)
#  fk_rails_...  (user_id => users.id)
#
class FavoriteQuestionSerializer < ActiveModel::Serializer
  attributes :id, :user, :question
end
