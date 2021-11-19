Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do

    namespace :v1 do
      resources :auctions
        resource :session, only: [:create, :destroy]
      #   get('users/current',{to: 'users#current'})
            resources :users, only: [:create] do
                  #get :current -> api/v1/users/:user_id/current
                  get :current, on: :collection # -> api/v1/users/current
            end
    end
  end
end
