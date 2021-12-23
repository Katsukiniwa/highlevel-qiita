# == Schema Information
#
# Table name: draft_questions
#
#  id         :bigint           not null, primary key
#  content    :text
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
# Indexes
#
#  index_draft_questions_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class DraftQuestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
end
