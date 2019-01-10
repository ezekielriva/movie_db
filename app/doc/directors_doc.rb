class DirectorsDoc < ApiDoc
  route_base 'api/v1/directors'

  api :index, 'GET all directors' do
    response(200, 'All directors', :json, data:
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