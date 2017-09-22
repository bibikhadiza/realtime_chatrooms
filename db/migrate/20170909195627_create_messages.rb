class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :content
      t.integer :chatroom_id
      t.integer :user_id
    end
  end
end
