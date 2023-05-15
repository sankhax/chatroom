import React from "react";
import { BsFillSendFill } from "react-icons/bs";

const Test = (props) => {
    return <div className="p-6 h-screen bg-gray-400">
		<div className="h-full bg-gray-200 rounded-lg">
			<div className="overflow-auto h-5/6 py-2 pt-6 px-8 flex flex-col-reverse">
				<div className="w-fit mb-3 py-2 px-4 rounded-md bg-gray-300"> 
					<p class="text-sm"> <b> Anonym </b> <i>send a massage : </i></p>
					{props.quote}
				</div>
				<div className="w-fit mb-3 py-2 px-4 rounded-md bg-gray-300"> 
					<p class="text-sm"> <b> Anonym </b> <i>send a massage : </i></p>
					This is Blank page {props.quote}
				</div>
				<div class="text-center"> -- May 5, 2020 -- </div>
			</div>
			<div className="sticky md:flex bottom-0 w-full bg-gray-300 rounded-b-lg md:p-5">
				<div class="w-full md:w-1/4 px-3">
				  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
					Name
				  </label>
				  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Your Name" />
				</div>
				<div class="w-full md:w-3/4 px-3">
				  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
					Message 
				  </label>
				  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message " type="text" placeholder="Your Message " />
				</div>
				<div class="w-full md:w-auto flex grid justify-items-end md:items-end px-3 py-2 md:p-0 md:px-1">
					<button class="rounded-full bg-gray-200 p-1 px-3 text-center"><BsFillSendFill size={22}/></button>
				</div>
			</div>
		</div>
	</div>;
};

export default Test;