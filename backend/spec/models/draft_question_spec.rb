# == Schema Information
#
# Table name: draft_questions
#
#  id         :bigint           not null, primary key
#  title      :string(255)
#  content    :text(65535)
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'rails_helper'

RSpec.describe DraftQuestion, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
