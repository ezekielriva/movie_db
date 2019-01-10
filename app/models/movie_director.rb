class MovieDirector < ApplicationRecord
  belongs_to :movie
  belongs_to :director, foreign_key: :person_id

  validates :movie, uniqueness: { scope: :director }
end
