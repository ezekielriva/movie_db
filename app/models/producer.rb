class Producer < Person
  has_many :movie_producers, foreign_key: :person_id
  has_many :movies, through: :movie_producers
end