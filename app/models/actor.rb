class Actor < Person
  has_many :movie_actors, foreign_key: :person_id
  has_many :movies, through: :movie_actors
end