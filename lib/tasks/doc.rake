namespace :doc do
  desc "Generate Api Doc"
  task generate: :environment do
    OpenApi.write_docs generate_files: !Rails.env.production?
  end

end
