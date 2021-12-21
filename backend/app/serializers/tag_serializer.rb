# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  name       :string(255)      not null
#  name_en    :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class TagSerializer < ActiveModel::Serializer
  attributes :id, :name, :name_en
end
