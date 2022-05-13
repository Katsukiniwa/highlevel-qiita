puts "seed start"

hashed_password = User.digest('password')

User.create(
  name: 'Katsukiniwa',
  password: 'password',
  password_digest: hashed_password,
  email: 'katsukiniwa@test.com',
  # icon: "https://example.com/katsukiniwa.png"
)

50.times do |i|
  User.create(
    name: Faker::Name.name,
    password: 'password',
    password_digest: hashed_password,
    email: Faker::Internet.email,
    # icon: "https://example.com/#{Faker::Internet.email}.png"
  )
end

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
Category.create(
  name: 'アーキテクチャ',
  name_en: 'architecture',
  icon: 'https://example.com/architecture.png'
)
Category.create(
  name: 'クリーンアーキテクチャ',
  name_en: 'clean-architecture',
  icon: 'https://example.com/clean-architecture.png'
)
Category.create(
  name: 'アジャイル',
  name_en: 'agile',
  icon: 'https://example.com/agile.png'
)
Category.create(
  name: 'マネジメント',
  name_en: 'management',
  icon: 'https://example.com/management.png'
)
Category.create(
  name: 'テックリード',
  name_en: 'tech-lead',
  icon: 'https://example.com/tech-lead.png'
)
Category.create(
  name: '関数型',
  name_en: 'functional-programming',
  icon: 'https://example.com/functional-programming.png'
)

Tag.create(
  name: 'Ruby',
  name_en: 'ruby'
)
Tag.create(
  name: 'Python',
  name_en: 'python'
)
Tag.create(
  name: 'PHP',
  name_em: 'php'
)
Tag.create(
  name: 'ポエム',
  name_en: 'poem'
)


Category.all.each do |category|
  100.times do |i|
    Question.create(
      title: Faker::Lorem.sentence,
      content: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false),
      category_id: category.id,
      user_id: (i % 3) + 1,
    )
  end
end

Question.all.each do |q|
  2.times do |i|
    q.answers.create(
      user_id: (i % 5) + 1,
      content: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false),
    )
  end

  5.times do |i|
    q.comments.create(
      user_id: (i % 5) + 1,
      content: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false),
    )
  end
end

Link.create(url: 'http://graphql.org/', description: 'The Best Query Language')
Link.create(url: 'http://dev.apollodata.com/', description: 'Awesome GraphQL Client')

puts "end seed"
