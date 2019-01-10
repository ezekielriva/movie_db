class AuthTokenDoc < ApiDoc
  route_base 'api/v1/auth_tokens'

  api :create, 'Create a auth token' do
    response(200, 'Token created', :json, data: {
      id: Integer,
      token: String,
      iat: String,
      exp: String
    })
  end
end