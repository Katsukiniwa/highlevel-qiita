# == Schema Information
#
# Table name: links
#
#  id          :bigint           not null, primary key
#  description :text
#  url         :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :bigint
#
# Indexes
#
#  index_links_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Link < ApplicationRecord
  belongs_to :user, optional: true # Prevent ActiveRecord::RecordInvalid
  has_many :votes, dependent: :destroy

  validates :description, presence: true, length: { maximum: 500 }
end
