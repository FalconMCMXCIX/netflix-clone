// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzk3MnuomAVoUEA-QI04MkuYy1pQ7JwCs",
    authDomain: "netflix-clone-8bb62.firebaseapp.com",
    projectId: "netflix-clone-8bb62",
    storageBucket: "netflix-clone-8bb62.appspot.com",
    messagingSenderId: "281071821061",
    appId: "1:281071821061:web:bf8775a69901ee4e7f976c",
    measurementId: "G-9JV57RE7DQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }