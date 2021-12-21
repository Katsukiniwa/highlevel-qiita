# == Schema Information
#
# Table name: questions
#
#  id          :bigint           not null, primary key
#  title       :string(255)      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  content     :text(65535)      not null
#  user_id     :bigint
#  category_id :bigint
#
require 'rails_helper'

RSpec.describe Question, type: :model do
  it "empty title throw error" do
    question = Question.new(title: nil, content: 'sample text')
    expect{ question.save! }.to raise_error(ActiveRecord::RecordInvalid)
  end
end
