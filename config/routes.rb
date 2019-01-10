Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :auth_tokens, only: [:create]
      resources :movies
      resources :people
      resources :actors, only: [:index]
      resources :producers, only: [:index]
      resources :directors, only: [:index]
    end
  end
end
