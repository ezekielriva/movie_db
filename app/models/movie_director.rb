class MovieDirector < ApplicationRecord
  belongs_to :movie
  belongs_to :director, foreign_key: :person_id
end
