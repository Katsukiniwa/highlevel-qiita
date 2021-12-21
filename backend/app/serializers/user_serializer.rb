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
class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :hashed_password, :icon, :remember_digest
end
