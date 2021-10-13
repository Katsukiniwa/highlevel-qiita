class Question < ApplicationRecord
  # belongs_to: user

  validates :title, presence: true, length: { maximum: 200 }
  validates :content, presence: true
end
