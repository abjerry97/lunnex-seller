import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyDPtpEIiYd5a8Og1KaD6wq-OBPhjW04gS8",
  authDomain: "avid-infinity-245609.app.com",
  projectId: "avid-infinity-245609",
  storageBucket: "avid-infinity-245609.appspot.com",
  messagingSenderId: "924884594067",
  appId: "G-5VL7P7C8DP",
//   measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);


 
// const firebaseConfig = {
//   apiKey: "AIzaSyDPtpEIiYd5a8Og1KaD6wq-OBPhjW04gS8",
//   authDomain: "avid-infinity-245609.app.com",
//   projectId: "avid-infinity-245609",
//   storageBucket: "avid-infinity-245609.appspot.com",
//   messagingSenderId: "924884594067",
//   appId: "G-5VL7P7C8DP",
// };
 
// // Initialize Firebase 
export const auth = getAuth(app);
export default app; 


export const fetchToken = (setTokenFound:any) => {
  return getToken(messaging, {vapidKey: 'BPOVlX8egoygc6-h6sBwyzSyZ3B13sz7zmGEsa7V2vGRWs6_cyTdPM-WwhkSz3H3VzBHY7EOqOOkcB3A_caaLUU'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});