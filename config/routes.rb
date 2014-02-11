Snowschoolers::Application.routes.draw do

  resources :dashboard

  devise_for :users

  root 'application#home'
  get 'home' => 'application#home'
  get 'instructor_profiles' => 'application#instructor_profiles'
  get 'pricing' => 'application#pricing'

end
