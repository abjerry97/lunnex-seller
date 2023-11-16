// importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    });
  }
//   import { initializeApp } from "firebase/app";
//   import { getMessaging } from "firebase/messaging/sw";

//   // Initialize the Firebase app in the service worker by passing in
//   // your app's Firebase config object.
//   // https://firebase.google.com/docs/web/setup#config-object
//   // const firebaseApp = initializeApp({
//   //       apiKey: "AIzaSyDPtpEIiYd5a8Og1KaD6wq-OBPhjW04gS8",
//   //       authDomain: "avid-infinity-245609.firebaseapp.com",
//   //       projectId: "avid-infinity-245609",
//   //       storageBucket: "avid-infinity-245609.appspot.com",
//   //       messagingSenderId: "924884594067",
//   //       appId: "G-5VL7P7C8DP",
//   // //   measurementId: 'G-measurement-id',
//   // });

//   // Retrieve an instance of Firebase Messaging so that it can handle background
//   // messages.
//   const messaging = getMessaging(firebaseApp);

// // const firebaseConfig = {
// //   apiKey: "AIzaSyDPtpEIiYd5a8Og1KaD6wq-OBPhjW04gS8",
// //   authDomain: "avid-infinity-245609.firebaseapp.com",
// //   projectId: "avid-infinity-245609",
// //   storageBucket: "avid-infinity-245609.appspot.com",
// //   messagingSenderId: "924884594067",
// //   appId: "G-5VL7P7C8DP",
// // };

// messaging.onBackgroundMessage(function(payload) {
//   console.log("Received background message ", payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

// // importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
// // importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

// // firebase.initializeApp(
// //  {
// //   apiKey: "AIzaSyDPtpEIiYd5a8Og1KaD6wq-OBPhjW04gS8",
// //   authDomain: "avid-infinity-245609.firebaseapp.com",
// //   projectId: "avid-infinity-245609",
// //   storageBucket: "avid-infinity-245609.appspot.com",
// //   messagingSenderId: "924884594067",
// //   appId: "1:924884594067:web:fbc2b6ef3300fa87b94c66",
// //   measurementId: "G-5VL7P7C8DP"

// // });

// // const messaging = firebase.messaging();

// // // eslint-disable-next-line no-undef
// // importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// // // eslint-disable-next-line no-undef
// // importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

// // const firebaseConfig = {
// //   apiKey: 'your_keys',
// //   authDomain: 'your_keys',
// //   projectId: 'your_keys',
// //   storageBucket: 'your_keys',
// //   messagingSenderId: 'your_keys',
// //   appId: 'your_keys',
// //   measurementId: 'your_keys',
// // };
// // // eslint-disable-next-line no-undef

// // const app = initializeApp(firebaseConfig);
// // // eslint-disable-next-line no-undef
// // const messaging = getMessaging(app);

// // messaging.onBackgroundMessage((payload) => {
// //   console.log(
// //     '[firebase-messaging-sw.js] Received background message ',
// //     payload
// //   );
// //   const notificationTitle = payload.notification.title;
// //   const notificationOptions = {
// //     body: payload.notification.body,
// //     icon: './logo.png',
// //   };
// //   self.registration.showNotification(notificationTitle, notificationOptions);
// // });

// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// importScripts('/__/firebase/9.2.0/firebase-app-compat.js');
// importScripts('/__/firebase/9.2.0/firebase-messaging-compat.js');
// importScripts('/__/firebase/init.js');

// const messaging = firebase.messaging();

/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.

 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.
 
 **/

importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// firebase.initializeApp({
//   apiKey: "AIzaSyDPtpEIiYd5a8Og1KaD6wq-OBPhjW04gS8",
//   authDomain: "avid-infinity-245609.firebaseapp.com",
//   projectId: "avid-infinity-245609",
//   storageBucket: "avid-infinity-245609.appspot.com",
//   messagingSenderId: "924884594067",
//   appId: "1:924884594067:web:fbc2b6ef3300fa87b94c66",
//   measurementId: "G-5VL7P7C8DP",
//   //  measurementId: 'G-measurement-id',
// });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically
// and you should use data messages for custom notifications.
// For more info see:
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    // icon: "/nrxt..png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

if (navigator && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}
