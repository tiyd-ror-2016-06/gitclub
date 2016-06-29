Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: :auth }

  get "/api/activity" => "activity#feed"
end
