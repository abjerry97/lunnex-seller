import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPtpEIiYd5a8Og1KaD6wq-OBPhjW04gS8",
  authDomain: "avid-infinity-245609.firebaseapp.com",
  projectId: "avid-infinity-245609",
  storageBucket: "avid-infinity-245609.appspot.com",
  messagingSenderId: "924884594067",
  appId: "G-5VL7P7C8DP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
