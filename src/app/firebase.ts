import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDPtpEIiYd5a8Og1KaD6wq-OBPhjW04gS8",
  authDomain: "avid-infinity-245609.firebaseapp.com",
  projectId: "avid-infinity-245609",
  storageBucket: "avid-infinity-245609.appspot.com",
  messagingSenderId: "924884594067",
  appId: "1:924884594067:web:fbc2b6ef3300fa87b94c66",
  measurementId: "G-5VL7P7C8DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
const messaging = getMessaging(app);
export const requestPermission = () => {
  console.log("Requesting Permission");
  Notification.requestPermission().then((permission) => {
    console.log("permission1", permission)
    if (permission === "granted") {
      console.log("Notification User Permission granted");

      return getToken(messaging, {
        vapidKey: "BPOVlX8egoygc6-h6sBwyzSyZ3B13sz7zmGEsa7V2vGRWs6_cyTdPM-WwhkSz3H3VzBHY7EOqOOkcB3A_caaLUU",
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log("Client Token: ", currentToken);
          } else {
            console.log("Failed to generate app regestration token");
          }
        })
        .catch((err) => {
          console.log(
            "An error occured when requesting to receive the token",
            err
          );
        });
    } else {
      console.log("permission denied");
    }
  });
};

requestPermission();

export const onMessageListener = () => {
 return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
};
