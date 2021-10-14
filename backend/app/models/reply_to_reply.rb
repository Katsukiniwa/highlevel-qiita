class ReplyToReply < ApplicationRecord
  belongs_to :question
  belongs_to :reply
end
