class MovieActor < ApplicationRecord
  belongs_to :movie
  belongs_to :actor, foreign_key: :person_id
end
