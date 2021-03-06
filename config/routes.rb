Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:index, :show, :create]
  end

  root to: 'static_pages#root'
end
