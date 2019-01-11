class Movie < ApplicationRecord
  validates :title, :release_year, presence: true

  has_many :movie_actors, dependent: :destroy
  has_many :actors, through: :movie_actors

  has_many :movie_directors, dependent: :destroy
  has_many :directors, through: :movie_directors

  has_many :movie_producers, dependent: :destroy
  has_many :producers, through: :movie_producers

  accepts_nested_attributes_for :movie_actors, :movie_directors, :movie_producers, allow_destroy: true
end
