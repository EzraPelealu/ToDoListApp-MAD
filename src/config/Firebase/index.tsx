// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAfW-Pgh3K7_iR2wSI_NGugHVVflk4z6ns',
  authDomain: 'todolist-7f58a.firebaseapp.com',
  projectId: 'todolist-7f58a',
  storageBucket: 'todolist-7f58a.appspot.com',
  messagingSenderId: '943616538453',
  appId: '1:943616538453:web:e6605ae55809b7875a21dc',
  measurementId: 'G-6WMPLB6L8K',
  databaseURL: 'https://todolist-7f58a-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
