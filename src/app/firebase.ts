import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyDPtpEIiYd5a8Og1KaD6wq-OBPhjW04gS8",
//   authDomain: "avid-infinity-245609.firebaseapp.com",
//   projectId: "avid-infinity-245609",
//   storageBucket: "avid-infinity-245609.appspot.com",
//   messagingSenderId: "924884594067",
//   appId: "G-5VL7P7C8DP",
// };


const firebaseConfig = {
  apiKey: "AIzaSyDPtpEIiYd5a8Og1KaD6wq-OBPhjW04gS8",
  authDomain: "avid-infinity-245609.firebaseapp.com",
  projectId: "avid-infinity-245609",
  storageBucket: "avid-infinity-245609.appspot.com",
  messagingSenderId: "924884594067",
  appId: "1:924884594067:web:fbc2b6ef3300fa87b94c66",
  measurementId: "G-5VL7P7C8DP"
};
// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const messaging = getMessaging(app);
// export const requestPermission = () => {
//   console.log("Requesting Permission");
//   Notification.requestPermission().then((permission) => {
//     console.log("permission1", permission)
//     if (permission === "granted") {
//       console.log("Notification User Permission granted");

//        getToken(messaging, {
//         vapidKey: "dhQx6jECyli9USQYBYtN_yeO4JskDEeyOv1bQilJPzE",
//       })
//         .then((currentToken) => {
//           if (currentToken) {
//             console.log("Client Token: ", currentToken);
//           } else {
//             console.log("Failed to generate app regestration token");
//           }
//         })
//         .catch((err) => {
//           console.log(
//             "An error occured when requesting to receive the token",
//             err
//           );
//         });
//     } else {
//       console.log("permission denied");
//     }
//   });
// };

// requestPermission();

// export const onMessageListener = () => {
//  return new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       resolve(payload);
//     });
//   });
// };




import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";
import { getMessaging, getToken } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

const firebaseCloudMessaging = {
  init: async () => {
    if (true) {
      // Initialize the Firebase app with the credentials
      // firebase?.initializeApp({
      //   apiKey: "AIzaSyBHHy68eC-VlbKwc5C853k7GrkvrbjXfx0",
      //   authDomain: "csharp-firestore-2022.firebaseapp.com",
      //   projectId: "csharp-firestore-2022",
      //   storageBucket: "csharp-firestore-2022.appspot.com",
      //   messagingSenderId: "331246389959",
      //   appId: "1:331246389959:web:5767805a19cb971e2a8ce2",
      //   measurementId: "G-PKS62DN4ED"
      // });

      try {
        const messaging = getMessaging(app);
        const tokenInLocalForage = await localforage.getItem("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          const fcm_token = await getToken(messaging,{
            vapidKey: "BPOVlX8egoygc6-h6sBwyzSyZ3B13sz7zmGEsa7V2vGRWs6_cyTdPM-WwhkSz3H3VzBHY7EOqOOkcB3A_caaLUU",
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };


  