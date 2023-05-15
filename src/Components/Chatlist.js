
import React from "react";
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbMessages } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import './Chatlist.css';

const Layout =({children}) =>{
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-gray-200 shadow w-80">
                <div className="space-y-3">
                    <div className="flex pl-4 items-center">
                        <h2 className="text-xl font-bold"><TbMessages size={50}/> Simple Chatroom</h2>
                    </div>
					<hr/>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1">
                            <li className="rounded-sm">
                                <NavLink to={"/chat/room1"}className="flex items-center p-2 space-x-3" >
                                    <h1> <TbHexagonNumber1 size={20}/> </h1>
                                    <span>Chatroom 1</span>
                                </NavLink>
                            </li>
                            <li className="rounded-sm">
                                <NavLink to={"/chat/room2"} className="flex items-center p-2 space-x-3" >
                                    <h1> <TbHexagonNumber2 size={20}/> </h1>
                                    <span>Chatroom 2</span>
                                </NavLink>
                            </li>
							<li className="rounded-sm">
                                <NavLink to={"/chat/room3"} className="flex items-center p-2 space-x-3" >
                                    <h1> <TbHexagonNumber3 size={20}/> </h1>
                                    <span>Chatroom 3</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto bg-gray-400">
                <main>{children}</main>
            </div>
        </div>
    );
}

export default Layout;