# == Schema Information
#
# Table name: taggings
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  question_id :bigint
#  tag_id      :bigint
#
# Indexes
#
#  index_taggings_on_question_id  (question_id)
#  index_taggings_on_tag_id       (tag_id)
#
# Foreign Keys
#
#  fk_rails_...  (question_id => questions.id)
#  fk_rails_...  (tag_id => tags.id)
#
require 'rails_helper'

RSpec.describe Tagging, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
