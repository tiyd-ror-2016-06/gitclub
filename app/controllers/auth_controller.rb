class AuthController < Devise::OmniauthCallbacksController
  def github
    data = request.env["omniauth.auth"]

    user = User.where(github_id: data.uid).first_or_create! do |u|
      u.email       = data.info.email
      u.password    = SecureRandom.hex 64
      u.github_data = data.to_h
    end

    sign_in user
    redirect_to "/", notice: "Signed in with Github"
  end
end
