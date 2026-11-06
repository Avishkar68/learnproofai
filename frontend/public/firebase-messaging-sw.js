// ==============================================================================
// LearnProof AI - Service Worker (Sanitized Template)
// All sensitive keys replaced with localhost placeholders.
// ==============================================================================

importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDummyKeyForCompetitionSubmissionOnly",
  authDomain: "localhost",
  projectId: "learnproof-localhost-submission",
  storageBucket: "localhost.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:dummyappid00000"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Notification payload received (Development mode).');
});

