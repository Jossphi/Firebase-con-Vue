// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoDpn93ftMbwAURBGKWH_ErrRDqemLTLY",
  authDomain: "notas-pro-peru.firebaseapp.com",
  projectId: "notas-pro-peru",
  storageBucket: "notas-pro-peru.appspot.com",
  messagingSenderId: "59178608910",
  appId: "1:59178608910:web:91d986d7dc51058b570f5f",
  measurementId: "G-0Q0J5XBKMP"
};

// Initialize Firebase

const inicializarFirebase = () => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}

export {
    inicializarFirebase
}