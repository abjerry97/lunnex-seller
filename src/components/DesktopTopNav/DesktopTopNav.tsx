"use client";
import NotificationIcon from "@/assets/icons/NotificationIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import Image from "next/image";
import React, { useState } from "react";

export default function DesktopTopNav() {
  const [notificationDropdown, setnotificationDropdown] = useState(false);
  return (
    <div className="flex gap-3 hidden lg:flex">
      <div className="bg-[#EDF1F4] flex p-2 rounded h-fit">
        <input type="text" className="border bg-[#EDF1F4]" />
        <SearchIcon />
      </div>
      <div className="bg-[#EDF1F4] p-2  h-fit relative cursor-pointer" onMouseEnter={()=>{setnotificationDropdown(!notificationDropdown)}}>
        {" "}
        <NotificationIcon />
        <div className={`absolute bg-white mt-2 z-100 w-[12rem] right-0 mt-4 shadow ${!notificationDropdown && "hidden"}`}>
          <div className=" flex justify-between items-center p-2">
            {" "}
            <h4 className="font-semibold text-sm">Notifications</h4>
            <a href="" className="border-b text-blue">
              all
            </a>
          </div>
          <ul className="w-full">
            <li className="border-b px-3 py-1 text-xs">
                <h6 className="font-semibold">welcome team</h6>
              welcome to lunnex store, we hope you have a nice experience
            </li>
            <li className="border-b px-3 py-1 text-xs">
                <h6 className="font-semibold">welcome team</h6>
              welcome to lunnex store, we hope you have a nice experience
            </li>
            <li className="border-b px-3 py-1 text-xs">
                <h6 className="font-semibold">welcome team</h6>
              welcome to lunnex store, we hope you have a nice experience
            </li>
            <li className="border-b px-3 py-1 text-xs">
                <h6 className="font-semibold">welcome team</h6>
              welcome to lunnex store, we hope you have a nice experience
            </li> </ul>
        </div>
      </div>
      <div className="flex items-center">
        <Image src="/images/avatar.png" alt="" width={40} height={40} />
      </div>
    </div>
  );
}
