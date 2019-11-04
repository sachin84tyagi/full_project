importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");
firebase.initializeApp({
  // messagingSenderId: "483892609279",
  //messagingSenderId: "1035861766649"
  apiKey: "AIzaSyAw5WdX6Amn14Lz1wmaV1FgNVhVkcqKiQs",
  authDomain: "test-database-a9da5.firebaseapp.com",
  databaseURL: "https://test-database-a9da5.firebaseio.com",
  projectId: "test-database-a9da5",
  storageBucket: "",
  messagingSenderId: "180445934837",
  appId: "1:180445934837:web:80de00502dd505453581bc"
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log("setBackgroundMessageHandler Message Payload");
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
