import HomeIcon from '@/assets/icons/HomeIcon'
import OrderIcon from '@/assets/icons/OrderIcon'
import ProductIcon from '@/assets/icons/ProductIcon'
import StoreIcon from '@/assets/icons/StoreIcon'
import WalletIcon from '@/assets/icons/WalletIcon'
import React from 'react'

export default function MobileBottomNav() {
  return ( <div className="fixed bottom-0 w-full px-3 lg:hidden shadow-xl">
  <ul className="w-full text-sm flex bg-white opacity-100 justify-between  text-black">
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
  )
}
