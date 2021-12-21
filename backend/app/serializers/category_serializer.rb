# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string(255)      not null
#  name_en    :string(255)      not null
#  icon       :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :name_en, :icon
end
