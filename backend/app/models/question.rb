class Question < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :tag, through: :tagging

  validates :user_id, presence: true
  validates :title, presence: true, length: { maximum: 200 }
  validates :content, presence: true
end
