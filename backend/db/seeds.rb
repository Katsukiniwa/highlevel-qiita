hashed_password = User.digest('password')
user = User.new(
  name: 'Katsukiniwa',
  password: 'password',
  password_confirmation: 'password',
  email: 'katsukiniwa@test.com',
  icon: 'https://example.com/katsukiniwa-icon.png'
)
user.save!
User.create(
  name: 'Eric Evans',
  password: 'password',
  password_digest: hashed_password,
  email: 'ericevans@test.com',
  icon: 'https://example.com/katsukiniwa-icon.png'
)
Category.create(
  name: 'DDD',
  name_en: 'ddd',
  icon: 'https://example.com/ddd-icon.png'
)
Category.create(
  name: 'オブジェクト指向',
  name_en: 'object-oriendted-programming',
  icon: 'https://example.com/object-oriendted-programming.png'
)
user = User.find(1)
eric = User.find(2)

category = Category.find(1)

20.times do |i|
  user.questions.create(
    title: "#{i} What is Aggregate?",
    content: "#{i}I don't understand what aggregate is.",
    category_id: category.id
  )
end

question = Question.find(1)

question.answers.create(
  user_id: 2,
  content: 'Aggregate is root entity for domain object.'
)
