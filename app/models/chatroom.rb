class Chatroom < ActiveRecord::Base
  has_many :messsages
  has_many :users, through: :messages
end
