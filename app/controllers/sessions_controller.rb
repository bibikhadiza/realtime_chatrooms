class SessionsController < ApplicationController

  def new
    render "new"
  end

  def create
    return redirect_to(controller: 'sessions',
      action: 'new') if !params[:username] || params[:username].empty?

    if User.find_by(username: params[:username])
      session[:username] = params[:username]
    else
      User.create(username: params[:username])
      session[:username] = params[:username]
    end
    redirect_to controller: 'application', action: 'home'
  end

  def destroy
    session.delete :name
    redirect_to controller: 'application', action: 'home'
  end

end
