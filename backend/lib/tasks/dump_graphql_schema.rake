# rake graphql:dump_schema
namespace :graphql do
  task dump_schema: :environment do
    schema_definition = BackendSchema.to_definition
    # ルートディレクトリにschema.graphqlを生成する
    schema_path = 'schema.graphql'
    File.write(Rails.root.join(schema_path), schema_definition)
    puts "#{schema_path} を生成しました!"
  end
end
