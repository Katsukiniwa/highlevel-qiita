class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :hashed_password, :icon, :remember_digest
end
