Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: :auth }

  root to: "pages#home"

  get "/other" => "pages#other"

  get "/api/activity" => "activity#feed"
end
