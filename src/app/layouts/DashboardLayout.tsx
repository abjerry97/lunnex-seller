import HomeIcon from "@/assets/icons/HomeIcon";
import Logo from "@/assets/icons/Logo";
import LogoSm from "@/assets/icons/LogoSm";
import NotificationIcon from "@/assets/icons/NotificationIcon";
import OrderIcon from "@/assets/icons/OrderIcon";
import Person from "@/assets/icons/Person";
import ProductIcon from "@/assets/icons/ProductIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import StoreIcon from "@/assets/icons/StoreIcon";
import WalletIcon from "@/assets/icons/WalletIcon";
import Image from "next/image";
import React from "react";

const LogoDiv = () => {
  return (
    <>
      <Logo />
    </>
  );
};
export default function DashboardLayout(props: any) {
  return (
    <div className="block lg:flex h-screen max-h-screen overflow-hiden">
      <div className="flex justify-between p-3 lg:hidden sticky top-0 bg-white z-[100] shadow">
        <div className="logosm p-3 h-1/6">
          <LogoSm />
        </div>

        <div className="flex gap-1 items-center ">
          <SearchIcon /> <NotificationIcon />
          <div className="flex items-center">
            <Image src="/images/avatar.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/12 bg-[#F8F8F8] h-full p-4 hidden lg:block z-[100]">
        <div className="logo p-3 h-1/6">
          <Logo />
        </div>
        <div className=" flex flex-col justify-between h-5/6">
          <ul className="text-sm font-semibold">
         <a href="/home">      <li className="p-2 flex gap-2 items-center">
           <HomeIcon /> <div>Home</div>
            </li></a>
           <a href="/products"> <li className="p-2 flex gap-2 items-center">
              <ProductIcon /> <div> Product</div>
            </li></a>
            <a href="/wallet">  <li className="p-2 flex gap-2 items-center">
              <WalletIcon />
              <div className=""> Wallet</div>
            </li></a>
            <a href="/store">   <li className="p-2 flex gap-2 items-center">
              <StoreIcon /> <div className=""> Store</div>
            </li></a>
            <a href="/orders"> <li className="p-2 flex gap-2 items-center">
              <OrderIcon />
              <div className=""> Order</div>
            </li></a>
            <a href="/settings">  <li className="p-2 flex gap-2 items-center">
              <SettingsIcon />
              <div className=""> Settings</div>
            </li></a>
          </ul>

          <div className="flex flex-col items-center justify-center py-4">
            <button className="bg-[#FF3365] text-white py-2 px-10 w-full mb-2 flex items-center text-xs">
              <Person /> <span> Profile</span>
            </button>
            <h4 className="text-sm font-semibold">CONTACT SUPPORT</h4>
            <p className="text-xs font-semibold">support@lunnex.ng</p>
          </div>
        </div>
      </div>
    
      <div className="w-full lg:w-10/12 h-full max-h-screen overflow-y-scroll">
        <div className=" mb-2 lg:sticky top-0 bg-white px-8 py-4 lg:shadow opacity-100 " style={{zIndex:100}}>
          <div className="flex lg:justify-between">
            <div className="">
              <h1 className="font-bold">Hi Daramoola,</h1>
              <p className="text-xs">Welcome to your Seller’s Dashboard.</p>
            </div>
            <div className="flex gap-3 hidden lg:flex">
              <div className="bg-[#EDF1F4] flex p-2 rounded h-fit">
                <input type="text" className="border bg-[#EDF1F4]" />
                <SearchIcon />
              </div>
              <div className="bg-[#EDF1F4] p-2  h-fit">
                {" "}
                <NotificationIcon />
              </div>
              <div className="flex items-center">
                <Image src="/images/avatar.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* bg-[#FAFAFA] */}
        <div className=" mx-4 lg:px-8 lg:py-6 rounded-xl h-full">
          {props.children}
        </div>
      </div>

      <div className="sticky bottom-0 w-full px-3 lg:hidden shadow-xl">
        <ul className="w-full text-sm flex bg-white opacity-100 justify-between">
          <a href="/">
            <li className="p-2 flex flex-col items-center gap-1">
              <HomeIcon /> <div>Home</div>
            </li>
          </a>
          <a href="/products">
          <li className="p-2 flex flex-col items-center gap-1">
            <ProductIcon /> <div> Product</div>
          </li>
          </a>
          <a href="/wallet">
          <li className="p-2 flex flex-col items-center gap-1">
            <WalletIcon />
            <div className=""> Wallet</div>
          </li>
          </a>
          <a href="/store">
          <li className="p-2 flex flex-col items-center gap-1">
            <StoreIcon /> <div className=""> Store</div>
          </li>
          </a>
          <a href="/orders">
          <li className="p-2 flex flex-col items-center gap-1">
            <OrderIcon />
            <div className=""> Order</div>
          </li>
          </a>
          {/* <li className="p-2 flex flex-col items-center gap-1">
            <SettingsIcon />
            <div className=""> Settings</div>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
