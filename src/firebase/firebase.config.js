// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB595GmGTOAFt2cTiku1DrbZgynIa4cdL0",
  authDomain: "auth-private-route-dc2ad.firebaseapp.com",
  projectId: "auth-private-route-dc2ad",
  storageBucket: "auth-private-route-dc2ad.appspot.com",
  messagingSenderId: "220905732650",
  appId: "1:220905732650:web:214921e011b3aabe222153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;