module SessionsHelper
  def log_in(user)
    session[:user_id] = user.id
  end

  # ユーザーのセッションを永続的にする
  def remember(user)
    user.remember
    cookies.permanent.signed[:user_id] = user.id
    cookies.permanent[:remember_token] = user.remember_token
  end

  def current_user
    crypt = ActiveSupport::MessageEncryptor.new(Rails.application.secret_key_base.byteslice(0..31))
    token = crypt.decrypt_and_verify session[:user_id]
    user_id = token.gsub('user-id:', '').to_i
    User.find(user_id)
  end

  # 記憶トークンcookieに対応するユーザーを返す
  # def current_user
  #   if (user_id = session[:user_id])
  #     @current_user ||= User.find_by(id: user_id)
  #   elsif (user_id = cookies.signed[:user_id])
  #     user = User.find_by(id: user_id)
  #     if user&.authenticated?(cookies[:remember_token])
  #       log_in user
  #       # @current_user = user
  #       user
  #     end
  #   end
  # end

  # ユーザーがログインしていればtrue、その他ならfalseを返す
  def logged_in?
    !current_user.nil?
  end

  def log_out
    session.delete(:user_id)
    # @current_user = nil
  end
end
