import LogoSm from '@/assets/icons/LogoSm'
import NotificationIcon from '@/assets/icons/NotificationIcon'
import SearchIcon from '@/assets/icons/SearchIcon'
import Image from 'next/image'
import React from 'react'

export default function MobileTopNav() {
  return ( <div className="flex justify-between p-3 lg:hidden sticky top-0 bg-white z-[100] shadow">
  <div className="logosm p-1 h-1/6">
    <LogoSm/>
  </div>

  <div className="flex gap-3 items-center ">
    <SearchIcon /> <NotificationIcon />
    <div className="flex items-center">
      <Image src="/images/avatar.png" alt="" width={40} height={40} />
    </div>
  </div>
</div>
  )
}
