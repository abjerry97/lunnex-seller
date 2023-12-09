"use client"
import React, { useEffect, useCallback } from "react";
import * as firebase from "firebase/app";
import "firebase/messaging";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { firebaseCloudMessaging } from "@/app/firebase";
import { getMessaging, onMessage } from "firebase/messaging";

function PushNotificationLayout({ children }: any) {
  const router = useRouter();

  const handleClickPushNotification = useCallback(
    (url: any) => {
      router.push(url);
    },
    [router]  
  );

  useEffect(() => {
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          console.log("token", token);
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }

    function copiedMessageToast(token: string) {
      navigator.clipboard.writeText(token);
      toast(
        <div>
          <h5>copied to clipboard!</h5>
        </div>,
        {
          closeOnClick: false,
        }
      );
    }

    function getMessage() {
      const messaging = getMessaging();
      onMessage(messaging, (message: any) => {
        console.log({ message });
      });
    }

    setToken();

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
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
  }, [handleClickPushNotification]);  

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}

export default PushNotificationLayout;
