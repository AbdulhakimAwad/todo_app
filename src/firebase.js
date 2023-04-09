// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbLMS7EfPXGuZ59sOnXlX7xjg2MQ9r1so",
  authDomain: "todo-app-220f3.firebaseapp.com",
  projectId: "todo-app-220f3",
  storageBucket: "todo-app-220f3.appspot.com",
  messagingSenderId: "592849027635",
  appId: "1:592849027635:web:458f000c106d09e0a79946",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
