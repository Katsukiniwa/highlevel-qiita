# == Schema Information
#
# Table name: favorite_questions
#
#  id          :bigint           not null, primary key
#  user_id     :bigint
#  question_id :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class FavoriteQuestionSerializer < ActiveModel::Serializer
  attributes :id, :user, :question
end
