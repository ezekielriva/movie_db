class AuthTokenSerializer < ActiveModel::Serializer
  attributes :id, :token, :iat, :exp
end
