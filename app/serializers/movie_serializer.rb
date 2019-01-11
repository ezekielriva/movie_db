class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_year

  has_many :actors, key: :casting
  has_many :directors
  has_many :producers

  def release_year
    NumberToRoman.transform object.release_year
  end
end