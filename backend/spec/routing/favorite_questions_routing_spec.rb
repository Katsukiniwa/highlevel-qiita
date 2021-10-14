require "rails_helper"

RSpec.describe FavoriteQuestionsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/favorite_questions").to route_to("favorite_questions#index")
    end

    it "routes to #show" do
      expect(get: "/favorite_questions/1").to route_to("favorite_questions#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/favorite_questions").to route_to("favorite_questions#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/favorite_questions/1").to route_to("favorite_questions#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/favorite_questions/1").to route_to("favorite_questions#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/favorite_questions/1").to route_to("favorite_questions#destroy", id: "1")
    end
  end
end
