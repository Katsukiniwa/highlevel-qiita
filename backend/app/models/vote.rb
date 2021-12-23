# == Schema Information
#
# Table name: votes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  link_id    :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_votes_on_link_id  (link_id)
#  index_votes_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (link_id => links.id)
#  fk_rails_...  (user_id => users.id)
#
class Vote < ApplicationRecord
  belongs_to :link, validate: true
  belongs_to :user, validate: true
end
