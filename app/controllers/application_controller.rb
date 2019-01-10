class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  rescue_from ActiveRecord::RecordNotFound do |exception|
    render plain: 'Not Found', status: 404
  end


  def authenticate!
    authenticate_or_request_with_http_token do |token|
      AuthToken.authenticate!(token)
    end
  end
end
