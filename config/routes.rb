Rails.application.routes.draw do
  resources :auth_tokens
  resources :movies
  resources :people
  resources :actors, only: [:index]
  resources :producers, only: [:index]
  resources :directors, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
