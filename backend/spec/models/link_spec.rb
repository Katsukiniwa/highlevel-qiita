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
require 'rails_helper'

RSpec.describe Link, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
