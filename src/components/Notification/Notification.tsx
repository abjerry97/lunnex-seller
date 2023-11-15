"use client"
import { onMessageListener, requestPermission } from '@/app/firebase'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function Notification() {
    const [notification, setnotification] = useState({title:"",body:""})

    useEffect(() => {
      requestPermission()

      const unsubscribe= onMessageListener().then((payload:any) =>{
        setnotification({
            title:payload?.notification?.title,
            body:payload?.notification?.body
        })
      })
    
     toast(JSON.stringify(notification))

      return () => {
        unsubscribe.catch((err: any) => console.log("failed: ",err))
     }
    }, [notification])
    
  return (
    <div>Notification</div>
  )
}
