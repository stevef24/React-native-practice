// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD0hoGM7Q9OgwquWQfWN3OyNnB4zvBXZU0",
	authDomain: "newtest-e3340.firebaseapp.com",
	projectId: "newtest-e3340",
	storageBucket: "newtest-e3340.appspot.com",
	messagingSenderId: "319583000600",
	appId: "1:319583000600:web:aaef0c8c6bc37c7b060b6d",
	measurementId: "G-Z2FB46NEVW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
