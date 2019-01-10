class MovieActor < ApplicationRecord
  belongs_to :movie
  belongs_to :actor, foreign_key: :person_id

  validates :movie, uniqueness: { scope: :actor }
end
