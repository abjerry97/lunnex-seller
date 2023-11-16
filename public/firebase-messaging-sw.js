function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      }
    });
  }


//   importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");
const firebaseConfig = {
  apiKey: "AIzaSyDPtpEIiYd5a8Og1KaD6wq-OBPhjW04gS8",
  authDomain: "avid-infinity-245609.firebaseapp.com",
  projectId: "avid-infinity-245609",
  storageBucket: "avid-infinity-245609.appspot.com",
  messagingSenderId: "924884594067",
  appId: "G-5VL7P7C8DP",
};
 

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//   console.log("Received background message ", payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}



// importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

// firebase.initializeApp( 
//  {
//   apiKey: "AIzaSyDPtpEIiYd5a8Og1KaD6wq-OBPhjW04gS8",
//   authDomain: "avid-infinity-245609.firebaseapp.com",
//   projectId: "avid-infinity-245609",
//   storageBucket: "avid-infinity-245609.appspot.com",
//   messagingSenderId: "924884594067",
//   appId: "1:924884594067:web:fbc2b6ef3300fa87b94c66",
//   measurementId: "G-5VL7P7C8DP"
 
// });

// const messaging = firebase.messaging();

// // eslint-disable-next-line no-undef
// importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// // eslint-disable-next-line no-undef
// importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

// const firebaseConfig = {
//   apiKey: 'your_keys',
//   authDomain: 'your_keys',
//   projectId: 'your_keys',
//   storageBucket: 'your_keys',
//   messagingSenderId: 'your_keys',
//   appId: 'your_keys',
//   measurementId: 'your_keys',
// };
// // eslint-disable-next-line no-undef 

// const app = initializeApp(firebaseConfig); 
// // eslint-disable-next-line no-undef
// const messaging = getMessaging(app);

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     '[firebase-messaging-sw.js] Received background message ',
//     payload
//   );
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: './logo.png',
//   };
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });