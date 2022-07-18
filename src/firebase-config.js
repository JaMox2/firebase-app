/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyBb3xD4k4VzvINOvbRGyQar0Gd45vBGYMk",
  authDomain: "friendlychat-9bf15.firebaseapp.com",
  projectId: "friendlychat-9bf15",
  storageBucket: "friendlychat-9bf15.appspot.com",
  messagingSenderId: "156642385142",
  appId: "1:156642385142:web:76913217f58926d101e0d7",
  measurementId: "G-DP3FM2L2WS"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}