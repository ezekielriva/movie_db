class ProducersDoc < ApiDoc
  route_base 'producers'

  api :index, 'GET all producers' do
    response(200, 'All producers', :json, data:
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