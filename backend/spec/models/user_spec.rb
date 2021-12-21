# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string(255)
#  password_digest :string(255)
#  icon            :string(255)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  remember_digest :string(255)
#  email           :string(255)      not null
#
require 'rails_helper'

RSpec.describe User, type: :model do
  it "adds 2 and 1 to make 3" do
    expect(1 + 2).to eq 3
  end
end
