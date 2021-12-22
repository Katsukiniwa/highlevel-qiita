# == Schema Information
#
# Table name: links
#
#  id          :bigint           not null, primary key
#  description :text(65535)
#  url         :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Link < ApplicationRecord
  validates :description, presence: true, length: { maximum: 500 }
end
