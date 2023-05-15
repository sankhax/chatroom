class ChatsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "ChatsChannel"
  end

  def unsubscribed
    stop_all_streams
  end
end
