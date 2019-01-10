class ActorsDoc < ApiDoc
  route_base 'api/v1/actors'

  api :index, 'GET all actors' do
    response(200, 'All actors', :json, data:
      [
        id: Integer,
        first_name: String,
        last_name: String,
        alias: String,
        movies: [
          { title: String, release_year: String }
        ]
      ]
    )
  end
end