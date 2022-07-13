// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCCcGsC8F2N2po-h4B4aOxTk96gozLDUZU',
  authDomain: 'da-pips2022.firebaseapp.com',
  projectId: 'da-pips2022',
  storageBucket: 'da-pips2022.appspot.com',
  messagingSenderId: '730432979211',
  appId: '1:730432979211:web:19f0294f369c2af6dfe20e',
  measurementId: 'G-EK3EYY302M'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const analytics = getAnalytics(app);
