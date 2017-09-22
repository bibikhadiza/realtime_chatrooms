class Chatrooms < ApplicationController

  def new
    @chatroom = Chatroom.new
    binding.pry
  end

  def create
  end

end
