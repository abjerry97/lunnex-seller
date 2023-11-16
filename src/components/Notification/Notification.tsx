"use client"
// import { onMessageListener, requestPermission } from '@/app/firebase'
// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'

// export default function Notification() {
//     const [notification, setnotification] = useState({title:"",body:""})

//     useEffect(() => {
//       requestPermission()

//       const unsubscribe= onMessageListener().then((payload:any) =>{
//         setnotification({
//             title:payload?.notification?.title,
//             body:payload?.notification?.body
//         })
//       })
    
//      toast(JSON.stringify(notification))

//       return () => {
//         unsubscribe.catch((err: any) => console.log("failed: ",err))
//      }
//     }, [notification])
    
//   return (
//     <div>Notification</div>
//   )
// }



import React, { useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/messaging";
// import { firebaseCloudMessaging } from "../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { firebaseCloudMessaging } from "@/app/firebase";
import { Url } from "next/dist/shared/lib/router/router";
import { getMessaging, onMessage } from "firebase/messaging";

function PushNotificationLayout({ children }:any) {
  const router = useRouter();
  useEffect(() => {
    setToken();

    // Event listener that listens for the push notification event in the background 
    if (typeof navigator !== 'undefined'  && "serviceWorker" in navigator) {
      navigator?.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
        console.log(event.data.firebaseMessaging.payload.notification);
        const message = event.data.firebaseMessaging.payload;
        toast(
            <div onClick={() => handleClickPushNotification(message?.data?.url)}>
              <h5>{message?.notification?.title}</h5>
              <h6>{message?.notification?.body}</h6>
            </div>,
            {
              closeOnClick: false,
            }
        );
      });
    }

    // Calls the getMessage() function if the token is there
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          console.log("token", token);

          getMessage();

          toast(
              <div onClick={() => {
                copiedMessageToast(token as string)}} style={{cursor: 'pointer'}}>
                <h5>Token</h5>
                <h6>{token as string}</h6>
              </div>,
              {
                closeOnClick: false,
              }
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  function copiedMessageToast(token: string){
    // if(navigator)
    // navigator?.clipboard.writeText(token);
    toast(
        <div>
          <h5>copied to clipboard!</h5>
        </div>,
        {
          closeOnClick: false,
        }
    );
  }

  // Handles the click function on the toast showing push notification
  const handleClickPushNotification = (url: any) => {
    router.push(url);
  };

 


  function getMessage() {
    const messaging = getMessaging();
     onMessage(messaging,(message:any) => {
      console.log("message",{message});
      toast(
        <div onClick={() => handleClickPushNotification(message?.data?.url)}>
          <h5>{message?.notification?.title}</h5>
          <h6>{message?.notification?.body}</h6>
        </div>,
        {
          closeOnClick: false,
        }
      );
    });
  }


  // export const onMessageListener = () => {
//  return new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       resolve(payload);
//     });
//   });
// };

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}

export default PushNotificationLayout;