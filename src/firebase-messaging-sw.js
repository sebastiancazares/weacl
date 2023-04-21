// Import the functions you need from the SDKs you need
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Rf70BoXlF9Y9OuGfGpHxYkZzEIaxLWg",
  authDomain: "pwaproyecto.firebaseapp.com",
  projectId: "pwaproyecto",
  storageBucket: "pwaproyecto.appspot.com",
  messagingSenderId: "976591203473",
  appId: "1:976591203473:web:8b188be689e110dfdba330"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload=>{
    console.log("Recibiste un mensaje mientras estabas ausente");
    console.log(payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: "./logo192.png"  
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})