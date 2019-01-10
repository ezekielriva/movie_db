class PersonSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :alias, :created_at, :updated_at

  has_many :movie_actors, key: :movies_as_actor, serializer: MovieAsSerializer
  has_many :movie_directors, key: :movies_as_director, serializer: MovieAsSerializer
  has_many :movie_producers, key: :movies_as_producer, serializer: MovieAsSerializer
end
