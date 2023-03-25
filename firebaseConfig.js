// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAsCEvcK20az_tno83OzJmtF6pUe6Ytc94",
	authDomain: "authentication-test-8b572.firebaseapp.com",
	projectId: "authentication-test-8b572",
	storageBucket: "authentication-test-8b572.appspot.com",
	messagingSenderId: "824551459683",
	appId: "1:824551459683:web:d2a77efc867e9bc5826156",
	measurementId: "G-Q05SEJ53EB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
