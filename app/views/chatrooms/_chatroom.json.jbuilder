json.extract! chatroom, :id, :room, :sender, :message, :created_at, :updated_at
json.url chatroom_url(chatroom, format: :json)
