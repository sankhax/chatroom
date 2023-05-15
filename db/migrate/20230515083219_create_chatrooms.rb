class CreateChatrooms < ActiveRecord::Migration[7.0]
  def change
    create_table :chatrooms do |t|
      t.string :room
      t.string :sender
      t.text :message

      t.timestamps
    end
  end
end
