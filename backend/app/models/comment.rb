# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  content     :text(65535)      not null
#  user_id     :bigint
#  question_id :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :question
end
