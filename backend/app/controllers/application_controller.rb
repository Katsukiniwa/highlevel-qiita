class ApplicationController < ActionController::API
  protect_from_forgery with: :exception
  include SessionsHelper

  # ログイン済みユーザーかどうか確認
  def logged_in_user
    return if logged_in?

    render status: :bad_request, json: { message: 'Please login' }
  end
end
