class User < ActiveRecord::Base
  has_many :messages
  has_many :chatrooms, through: :messages 

end
