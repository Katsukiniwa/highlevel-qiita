class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user&.authenticate(params[:session][:password])
      log_in user
      params[:session][:remember_me] == '1' ? remember(user) : forget(user)
      render status: :ok
    else
      render status: :bad_request, json: { message: 'Bad Request' }
    end
  end
end
