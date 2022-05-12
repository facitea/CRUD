import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"

import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU5hIzUSfHwHgPxsvRdH6QkLM-_8jaekU",
  authDomain: "hawktalk-b0a71.firebaseapp.com",
  projectId: "hawktalk-b0a71",
  storageBucket: "hawktalk-b0a71.appspot.com",
  messagingSenderId: "537777830041",
  appId: "1:537777830041:web:1b5ce3e943d55c09d1e008",
  measurementId: "G-7T0M3EK19Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

const app = createApp(App) 
app.config.globalProperties.$axios = axios; 

createApp(App).use(router).mount('#app');