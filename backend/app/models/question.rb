# == Schema Information
#
# Table name: questions
#
#  id          :bigint           not null, primary key
#  content     :text             not null
#  title       :string           not null
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
class Question < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :tag, through: :tagging
  has_many :answers, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :user_id, presence: true
  validates :title, presence: true, length: { minimum: 5, maximum: 200 }
  validates :content, presence: true
end
