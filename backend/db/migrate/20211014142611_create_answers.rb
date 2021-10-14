class CreateAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :answers do |t|
      t.reference :user
      t.text :content

      t.timestamps
    end
  end
end
