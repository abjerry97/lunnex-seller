import HomeIcon from '@/assets/icons/HomeIcon'
import Logo from '@/assets/icons/Logo'
import OrderIcon from '@/assets/icons/OrderIcon'
import Person from '@/assets/icons/Person'
import ProductIcon from '@/assets/icons/ProductIcon'
import SettingsIcon from '@/assets/icons/SettingsIcon'
import StoreIcon from '@/assets/icons/StoreIcon'
import WalletIcon from '@/assets/icons/WalletIcon'
import React from 'react'

export default function DestopSideNav() {
  return ( <div className="w-full lg:w-2/12 bg-[#F8F8F8] h-full p-4 hidden lg:block z-[100]">
  <div className="logo p-3 h-1/6">
    <Logo/>
  </div>
  <div className=" flex flex-col justify-between h-5/6">
    <ul className="text-sm font-semibold  text-black">
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
      <a className="bg-[#FF3365] text-white py-2 px-10 w-full mb-2 flex items-center text-xs" href='/profile'>
        <Person /> <span> Profile</span>
      </a>
      <h4 className="text-sm font-semibold">CONTACT SUPPORT</h4>
      <p className="text-xs font-semibold">support@lunnex.ng</p>
    </div>
  </div>
</div>
  )
}
