class DirectorsController < ApplicationController

  # GET /actors
  def index
    @directors = Director.distinct.joins(:movie_directors)

    render json: @directors
  end

end