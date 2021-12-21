# == Schema Information
#
# Table name: answers
#
#  id          :bigint           not null, primary key
#  user_id     :bigint
#  question_id :bigint
#  content     :text(65535)      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'rails_helper'

RSpec.describe Answer, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
