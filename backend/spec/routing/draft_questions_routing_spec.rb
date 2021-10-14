require "rails_helper"

RSpec.describe DraftQuestionsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/draft_questions").to route_to("draft_questions#index")
    end

    it "routes to #show" do
      expect(get: "/draft_questions/1").to route_to("draft_questions#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/draft_questions").to route_to("draft_questions#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/draft_questions/1").to route_to("draft_questions#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/draft_questions/1").to route_to("draft_questions#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/draft_questions/1").to route_to("draft_questions#destroy", id: "1")
    end
  end
end
