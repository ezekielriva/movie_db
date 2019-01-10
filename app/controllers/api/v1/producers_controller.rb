class Api::V1::ProducersController < ApplicationController

  # GET /producers
  def index
    @producers = Producer.distinct.joins(:movie_producers)

    render json: @producers
  end

end