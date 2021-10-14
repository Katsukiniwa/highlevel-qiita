class CreateReplyToReplies < ActiveRecord::Migration[6.1]
  def change
    create_table :reply_to_replies do |t|
      t.references :question, null: false, foreign_key: true
      t.references :reply, null: false, foreign_key: true

      t.timestamps
    end
  end
end
