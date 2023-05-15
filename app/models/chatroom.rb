class Chatroom < ApplicationRecord
	after_create_commit { broadcast_message }
	
	def broadcast_message
		ActionCable.server.broadcast('ChatsChannel', {
			id:,
			room:,
			sender:,
			message:
		})
	end
end
