# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string(255)      not null
#  icon            :string(255)
#  name            :string(255)
#  password_digest :string(255)
#  remember_digest :string(255)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#
require 'rails_helper'

RSpec.describe User, type: :model do
  it "adds 2 and 1 to make 3" do
    expect(1 + 2).to eq 3
  end
end
