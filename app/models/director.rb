class Director < Person
  has_many :movie_directors, foreign_key: :person_id
  has_many :movies, through: :movie_directors
end