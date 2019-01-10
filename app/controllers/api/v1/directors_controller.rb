class Api::V1::DirectorsController < ApplicationController

  # GET /actors
  def index
    @directors = Director.distinct.joins(:movie_directors)

    render json: @directors
  end

end