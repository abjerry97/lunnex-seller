"use client" 
import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { useRouter } from 'next/navigation'

export default function Store() {
  const router = useRouter()
  return (
    <DashboardLayout>
    <div className='flex  justify-center h-full w-full'>
        <div className="h-32 shadow text-sm p-4 px-10 bg-[#FF3365] rounded-xl flex flex-col items-center justify-center mt-40">
       <p className='text-white mb-3'> You don’t have a Store yet</p>
       <button className='bg-white rounded shadow px-4 py-2' onClick={()=>router.push("/create-store")}>Create Store</button>
        </div>
    </div>
    </DashboardLayout>
  )
}
