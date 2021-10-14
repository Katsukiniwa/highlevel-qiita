class Tag < ApplicationRecord
  has_many :questions, through: :tagging
end
