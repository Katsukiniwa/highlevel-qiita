class CreateFavoriteQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_questions do |t|
      t.references :user, foreign_key: true
      t.references :question, foreign_key: true

      t.timestamps
    end
  end
end
