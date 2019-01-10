class MoviesDoc < ApiDoc
  route_base 'api/v1/movies'

  components do
    bearer_auth :Token
  end

  api :index, 'GET all movies' do
    response(200, 'All movies', :json, data:
      [
        title: String,
        release_year: String,
        casting: [
          { id: Integer, first_name: String, last_name: String }
        ],
        directors: [
          { id: Integer, first_name: String, last_name: String }
        ],
        producers: [
          { id: Integer, first_name: String, last_name: String }
        ]
      ]
    )
  end

  api :show, 'GET a movie' do
    param(:path, :id, Integer, :req)

    response(200, 'The movie', :json, data: {
      title: String,
      release_year: String,
      casting: [
        { id: Integer, first_name: String, last_name: String }
      ],
      directors: [
        { id: Integer, first_name: String, last_name: String }
      ],
      producers: [
        { id: Integer, first_name: String, last_name: String }
      ]
    })
  end

  api :create, 'Create a movie' do
    need_auth :Token

    request_body(:req, :json, data: {
      title: String,
      release_year: Integer
    })

    response(200, 'Created movie', :json, data: {
      title: String,
      release_year: String,
      casting: [
        { id: Integer, first_name: String, last_name: String }
      ],
      directors: [
        { id: Integer, first_name: String, last_name: String }
      ],
      producers: [
        { id: Integer, first_name: String, last_name: String }
      ]
    })

    response(401, 'Unauthorized', :text, data: String)
  end

  api :update, 'Update a movie' do
    need_auth :Token

    param(:path, :id, Integer, :req)

    request_body(:opt, :json, data: {
      title: String,
      release_year: Integer
    })

    response(200, 'Updated movie', :json, data: {
      title: String,
      release_year: String,
      casting: [
        { id: Integer, first_name: String, last_name: String }
      ],
      directors: [
        { id: Integer, first_name: String, last_name: String }
      ],
      producers: [
        { id: Integer, first_name: String, last_name: String }
      ]
    })

    response(401, 'Unauthorized', :text, data: String)
  end

  api :destroy, 'Delete a movie' do
    need_auth :Token

    param(:path, :id, Integer, :req)

    response(401, 'Unauthorized', :plain, data: String)
    response(204, 'Deleted', :plain, data: String)
    response(404, 'Movie Not Found', :plain, data: String)
  end
end