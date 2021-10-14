class FavoriteQuestionSerializer < ActiveModel::Serializer
  attributes :id, :user, :question
end
