"use client";
import Logo from "@/assets/icons/Logo";
import Person from "@/assets/icons/Person";
import { navLinks } from "@/assets/icons/data/Navlinks";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";

export default function DestopSideNav() {
  const router = useRouter();
  const pathname = usePathname();

  const SideNavLink = (props: any) => {
    const { name, to, icon, active, children } = props;

    const [isHovered, setisHovered] = useState(false);
    return (
      <li
        className={` cursor-pointer hover:text-[#FF3365] ${
          active && "text-[#FF3365]"
        }`}
        onClick={() => router.push(to)}
      >
        {" "}
        <div className="p-2 flex gap-2 items-center">
          {icon({ active: isHovered || active })} <div>{name}</div>
        </div>

        {active && children &&
          children.map((data: any, index: any) => {
            return (
              <div className=" ms-4 p-2 flex gap-2 items-center text-xs" key={index}>
                {data.icon({ active: isHovered || active })} <div>{data.name}</div>
              </div>
            );
          })}
      </li>
    );
  };

  return (
    <div className="w-full lg:w-2/12 bg-[#F8F8F8] h-full p-4 hidden lg:block z-[100]">
      <div className="logo p-3 h-1/6">
        <Logo />
      </div>
      <div className=" flex flex-col justify-between h-5/6">
        <ul className="text-sm font-semibold  text-black">
          {navLinks?.map((data: any, index) => {
            if (data.to.includes(pathname)) data = { ...data, active: true };

            return <SideNavLink key={index} {...data} />;
          })}
        </ul>

        <div className="flex flex-col items-center justify-center py-4">
          <a
            className="bg-[#FF3365] text-white py-2 px-10 w-full mb-2 flex items-center text-xs"
            href="/profile"
          >
            <Person /> <span> Profile</span>
          </a>
          <h4 className="text-sm font-semibold">CONTACT SUPPORT</h4>
          <p className="text-xs font-semibold">support@lunnex.ng</p>
        </div>
      </div>
    </div>
  );
}
