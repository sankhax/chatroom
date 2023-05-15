import React from "react";
import { TbError404 } from "react-icons/tb";

const Error = () => {
    return (<div className="p-6 h-screen bg-gray-400">
		<div className="h-full bg-gray-200 rounded-lg grid place-items-center">
			<div className="grid justify-items-center" style={{color: 'rgb(156 163 175)'}}>
				<TbError404 size={100}/>
				<p className="text-lg font-bold"> Sorry, Page Not Found </p>
			</div>
		</div>
	</div>
);
};

export default Error;