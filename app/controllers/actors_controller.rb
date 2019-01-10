class ActorsController < ApplicationController

  # GET /actors
  def index
    @actors = Actor.distinct.joins(:movie_actors)

    render json: @actors
  end

end