require 'rails_helper'

RSpec.describe Question, type: :model do
  it "empty title throw error" do
    question = Question.new(title: nil, content: 'sample text')
    expect{ question.save! }.to raise_error(ActiveRecord::RecordInvalid)
  end
end
