# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_17_135818) do

  create_table "answers", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "question_id"
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["question_id"], name: "index_answers_on_question_id"
    t.index ["user_id"], name: "index_answers_on_user_id"
  end

  create_table "categories", charset: "utf8mb4", force: :cascade do |t|
    t.string "name"
    t.string "name_en"
    t.string "icon"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "draft_questions", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_draft_questions_on_user_id"
  end

  create_table "favorite_questions", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "question_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["question_id"], name: "index_favorite_questions_on_question_id"
    t.index ["user_id"], name: "index_favorite_questions_on_user_id"
  end

  create_table "questions", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "content"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_questions_on_user_id"
  end

  create_table "replies", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "question_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["question_id"], name: "index_replies_on_question_id"
  end

  create_table "reply_to_anaswers", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "question_id", null: false
    t.bigint "answer_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["answer_id"], name: "index_reply_to_anaswers_on_answer_id"
    t.index ["question_id"], name: "index_reply_to_anaswers_on_question_id"
  end

  create_table "reply_to_replies", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "question_id", null: false
    t.bigint "reply_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["question_id"], name: "index_reply_to_replies_on_question_id"
    t.index ["reply_id"], name: "index_reply_to_replies_on_reply_id"
  end

  create_table "taggings", charset: "utf8mb4", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tags", charset: "utf8mb4", force: :cascade do |t|
    t.string "name"
    t.string "name_en"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", charset: "utf8mb4", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
    t.string "icon"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "remember_digest"
    t.string "email"
  end

  add_foreign_key "answers", "questions"
  add_foreign_key "answers", "users"
  add_foreign_key "draft_questions", "users"
  add_foreign_key "favorite_questions", "questions"
  add_foreign_key "favorite_questions", "users"
  add_foreign_key "questions", "users"
  add_foreign_key "replies", "questions"
  add_foreign_key "reply_to_anaswers", "answers"
  add_foreign_key "reply_to_anaswers", "questions"
  add_foreign_key "reply_to_replies", "questions"
  add_foreign_key "reply_to_replies", "replies"
end
