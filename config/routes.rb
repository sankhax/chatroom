Rails.application.routes.draw do
  
  mount ActionCable.server => "/cable"
  
  namespace :api do
	namespace :v1 do
		resources :chatrooms
	end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
