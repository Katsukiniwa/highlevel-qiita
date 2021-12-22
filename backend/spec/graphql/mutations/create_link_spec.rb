# require 'test_helper'
require 'rails_helper'

RSpec.describe Mutations::CreateLink do
  it "CreateLink mutationでlinkが作成されること" do
    link = Mutations::CreateLink.new(object: nil, field: nil, context: {}).resolve(
      url: 'http://example.com',
      description: 'description',
    )
    
    expect(link.url).to eq("http://example.com")
    expect(link).to be_persisted
  end

  it "CreateLink mutationでlinkが作成されないこと" do    
    expect {
      Mutations::CreateLink
        .new(object: nil, field: nil, context: {})
        .resolve(url: 'http://example2.com', description: nil)
    }.to raise_error(ActiveRecord::RecordInvalid)
  end
end
