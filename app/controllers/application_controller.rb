class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  def home
    if session[:username]
      render "home"
    else
      redirect_to controller: 'sessions', action: 'new'
    end
  end


  def current_user
    session[:id]
  end

  private

  def require_logged_in
    redirect_to controller: 'sessions', action: 'new' unless current_user
  end


end
