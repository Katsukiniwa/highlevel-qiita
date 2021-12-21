# == Schema Information
#
# Table name: questions
#
#  id          :bigint           not null, primary key
#  content     :text(65535)      not null
#  title       :string(255)      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint
#  user_id     :bigint
#
# Indexes
#
#  index_questions_on_category_id  (category_id)
#  index_questions_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (user_id => users.id)
#
class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
end
