class MovieProducer < ApplicationRecord
  belongs_to :movie
  belongs_to :producer, foreign_key: :person_id

  validates :movie, uniqueness: { scope: :producer }
end
