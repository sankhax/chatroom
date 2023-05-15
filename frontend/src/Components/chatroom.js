import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { useParams, Navigate } from "react-router-dom"
import axios from "axios";
import {useState, useEffect, useRef} from 'react'

const API_URL = "http://localhost:3000/api/v1/chatrooms/"
const ws = new WebSocket("ws://127.0.0.1:3000/cable");

const Chat =(props) =>{
	
	const allowed_params = ["room1", "room2", "room3" ];
	
	let { room } = useParams();
	
	const [chat, setChat] = useState([]);
	
	const chatCont = document.getElementById("chatCont");
	
	useEffect(() => {
		fetchMessages();
	}, []);
	
	useEffect(() => {
		resetScroll();
	  }, [chat]);
	  
	ws.onopen = () => {
		console.log("Connected to websocket server");
		ws.send(
		  JSON.stringify({
			command: "subscribe",
			identifier: JSON.stringify({
			  channel: "ChatsChannel",
			}),
		  })
		);
	  };
	  
	const fetchMessages = async () => {
		const response = await fetch(API_URL + room);
		const data = await response.json();
		setMessagesAndScrollDown(data);
	};
	
	ws.onmessage = (e) => {
		const data = JSON.parse(e.data);
		if (data.type === "ping") return;
		if (data.type === "welcome") return;
		if (data.type === "confirm_subscription") return;

		const message = data.message;
		setMessagesAndScrollDown([...chat, message]);
	};
	
	const setMessagesAndScrollDown = (data) => {
		setChat(data);
		resetScroll();
	};
	
	const [sender, setSender] = useState("");
	const [message, setMessage] = useState("");
	const [notif, setNotif] = useState("");
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		axios({
		  method: "post",
		  url: "http://localhost:3000/api/v1/chatrooms",
		  data: JSON.stringify({
			chatroom:{
			  room: room ,
			  sender: sender,
			  message: message,
		}}),
		  headers: { "Content-Type": "application/json" },
		}).then(function (response) {
			setSender("")
			setMessage("")
			e.target.reset();
			console.log(response);
		  })
		  .catch(function (response) {
			console.log(response);
		 });
	};
	
	const resetScroll = () => {
		if (!chatCont) return;
		chatCont.scrollTop = chatCont.scrollHeight;
	};
	
	if (!allowed_params.includes(room)) {
		return <Navigate to="/404" />;
	}
	
    return <div className="p-6 h-screen bg-gray-400">
		<div className="h-full bg-gray-200 rounded-lg">
			<div className="overflow-auto h-5/6 py-2 pt-6 px-8" id="chatCont">
			{chat.map((chat) => {
				return (
				<div key={chat.id}>
				<div className="w-fit mb-3 py-2 px-4 rounded-md bg-gray-300"> 
					<p className="text-sm"> <b> {chat.sender} </b> <i>send a massage : </i></p>
					{chat.message}
				</div>
				</div>
				)
			})}
			</div>
			<form onSubmit={handleSubmit}>
			<div className="sticky md:flex bottom-0 w-full bg-gray-300 rounded-b-lg md:p-5">
				<div className="w-full md:w-1/4 px-3">
				  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
					Name
				  </label>
				  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
				  id="inputsender" type="text" placeholder="Your Name" onChange={(e) => setSender(e.target.value)} />
				</div>
				<div className="w-full md:w-3/4 px-3">
				  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
					Message 
				  </label>
				  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
				  id="inputmessage " type="text" placeholder="Your Message " onChange={(e) => setMessage(e.target.value)} />
				</div>
				<div className="w-full md:w-auto flex grid justify-items-end md:items-end px-3 py-2 md:p-0 md:px-1">
					<button className="rounded-full bg-gray-200 p-1 px-3 text-center" type="submit"><BsFillSendFill size={22}/></button>
				</div>
			</div>
			</form>
		</div>
	</div>;
};

export default Chat;