class Movie < ApplicationRecord
  validates :title, presence: true

  has_many :movie_actors
  has_many :actors, through: :movie_actors

  has_many :movie_directors
  has_many :directors, through: :movie_directors

  has_many :movie_producers
  has_many :producers, through: :movie_producers

  accepts_nested_attributes_for :movie_actors, :movie_directors, :movie_producers, allow_destroy: true
end
