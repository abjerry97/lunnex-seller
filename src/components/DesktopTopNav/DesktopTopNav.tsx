import NotificationIcon from '@/assets/icons/NotificationIcon'
import SearchIcon from '@/assets/icons/SearchIcon'
import Image from 'next/image'
import React from 'react'

export default function DesktopTopNav() {
  return (  <div className="flex gap-3 hidden lg:flex">
  <div className="bg-[#EDF1F4] flex p-2 rounded h-fit">
    <input type="text" className="border bg-[#EDF1F4]" />
    <SearchIcon />
  </div>
  <div className="bg-[#EDF1F4] p-2  h-fit">
    {" "}
    <NotificationIcon />
  </div>
  <div className="flex items-center">
    <Image src="/images/avatar.png" alt=""  width={40} height={40}/>
  </div>
</div>
  )
}
