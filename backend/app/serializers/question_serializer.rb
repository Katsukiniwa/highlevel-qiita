# == Schema Information
#
# Table name: questions
#
#  id          :bigint           not null, primary key
#  title       :string(255)      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  content     :text(65535)      not null
#  user_id     :bigint
#  category_id :bigint
#
class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
end
