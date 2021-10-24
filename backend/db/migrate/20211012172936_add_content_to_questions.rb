class AddContentToQuestions < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :remember_digest, :string
    add_column :questions, :content, :text, null: false
    add_reference :questions, :user, foreign_key: true
  end
end
