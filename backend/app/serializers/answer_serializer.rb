# == Schema Information
#
# Table name: answers
#
#  id          :bigint           not null, primary key
#  user_id     :bigint
#  question_id :bigint
#  content     :text(65535)      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class AnswerSerializer < ActiveModel::Serializer
  attributes :id
end
