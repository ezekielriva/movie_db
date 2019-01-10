class PeopleDoc < ApiDoc
  route_base 'people'

  components do
    bearer_auth :Token
  end

  api :index, 'GET all people' do
    response(200, 'All people', :json, data:
      [
        id: Integer,
        first_name: String,
        last_name: String,
        alias: String,
        movies_as_actor: [
          { title: String, release_year: String }
        ],
        movies_as_director: [
          { title: String, release_year: String }
        ],
        movies_as_producer: [
          { title: String, release_year: String }
        ]
      ]
    )
  end

  api :show, 'GET a person' do
    param(:path, :id, Integer, :req)

    response(200, 'The person', :json, data: {
      id: Integer,
      first_name: String,
      last_name: String,
      alias: String,
      movies_as_actor: [
        { title: String, release_year: String }
      ],
      movies_as_director: [
        { title: String, release_year: String }
      ],
      movies_as_producer: [
        { title: String, release_year: String }
      ]
    })
  end

  api :create, 'Create a person' do
    need_auth :Token

    request_body(:req, :json, data: {
      first_name: String,
      last_name: String,
      alias: String
    })

    response(200, 'Created person', :json, data: {
      id: Integer,
      first_name: String,
      last_name: String,
      alias: String,
      movies_as_actor: [
        { title: String, release_year: String }
      ],
      movies_as_director: [
        { title: String, release_year: String }
      ],
      movies_as_producer: [
        { title: String, release_year: String }
      ]
    })

    response(401, 'Unauthorized', :text, data: String)
  end

  api :update, 'Update a person' do
    need_auth :Token

    param(:path, :id, Integer, :req)

    request_body(:opt, :json, data: {
      title: String,
      release_year: Integer
    })

    response(200, 'Updated person', :json, data: {
      id: Integer,
      first_name: String,
      last_name: String,
      alias: String,
      movies_as_actor: [
        { title: String, release_year: String }
      ],
      movies_as_director: [
        { title: String, release_year: String }
      ],
      movies_as_producer: [
        { title: String, release_year: String }
      ]
    })

    response(401, 'Unauthorized', :text, data: String)
  end

  api :destroy, 'Delete a person' do
    need_auth :Token

    param(:path, :id, Integer, :req)

    response(401, 'Unauthorized', :plain, data: String)
    response(204, 'Deleted', :plain, data: String)
    response(404, 'Person Not Found', :plain, data: String)
  end
end