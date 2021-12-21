# == Schema Information
#
# Table name: taggings
#
#  id          :bigint           not null, primary key
#  tag_id      :bigint
#  question_id :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Tagging < ApplicationRecord
end
