class CreateFavoriteQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_questions do |t|
      t.reference :user
      t.reference :question

      t.timestamps
    end
  end
end
