"use client";
import HomeIcon from "@/assets/icons/HomeIcon";
import OrderIcon from "@/assets/icons/OrderIcon";
import ProductIcon from "@/assets/icons/ProductIcon";
import StoreIcon from "@/assets/icons/StoreIcon";
import WalletIcon from "@/assets/icons/WalletIcon";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { navLinks } from "@/assets/icons/data/Navlinks";

export default function MobileBottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const MobileNavLinks = (props: any) => {
    const { name, to, icon, active } = props;

    const [isHovered, setisHovered] = useState(false);
    return (
      <li onClick={() => router.push(to)}>
        <div 
         className={`p-2 flex flex-col items-center gap-1 cursor-pointer hover:text-[#FF3365] ${
          active && "text-[#FF3365]"
        }`}>
          {icon({ active: isHovered || active, mobile: true })}{" "}
          <div className="text-xs">{name}</div>
        </div>
      </li>
    );
  };

  return (
    <div className="bg-white fixed bottom-0 w-full px-3 lg:hidden shadow h-fit">
      <ul className="w-full text-sm flex  opacity-100 justify-between  text-black">
        {navLinks?.map((data: any, index) => {
          if (data.to.includes(pathname)) data = { ...data, active: true };
          if (data.mobile) return <MobileNavLinks key={index} {...data} />;
        })}
      </ul>
    </div>
  );
}
