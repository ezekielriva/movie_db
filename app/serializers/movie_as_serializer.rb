class MovieAsSerializer < ActiveModel::Serializer
  attributes :title, :release_year

  def title
    object.movie.title
  end

  def release_year
    NumberToRoman.transform object.movie.release_year
  end
end
