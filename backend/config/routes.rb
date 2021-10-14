Rails.application.routes.draw do
  resources :draft_questions
  resources :tags
  resources :categories
  resources :users
  resources :questions

  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
end
