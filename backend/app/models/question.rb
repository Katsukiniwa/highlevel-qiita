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
class Question < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :tag, through: :tagging
  has_many :answers, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :user_id, presence: true
  validates :title, presence: true, length: { maximum: 200 }
  validates :content, presence: true
end
