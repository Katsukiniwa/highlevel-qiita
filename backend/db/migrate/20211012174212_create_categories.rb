class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :name, null: false
      t.string :name_en, null: false
      t.string :icon, null: false

      t.timestamps
    end

    add_reference :questions, :category, foreign_key: true
  end
end
