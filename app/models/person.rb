class Person < ApplicationRecord
  validates :first_name, :last_name, presence: true

  has_many :movie_actors,    foreign_key: :person_id
  has_many :movie_directors, foreign_key: :person_id
  has_many :movie_producers, foreign_key: :person_id

  has_many :movies_as_actors, through: :movie_actors
  has_many :movies_as_directors, through: :movie_directors
  has_many :movies_as_producers, through: :movie_producers
end
