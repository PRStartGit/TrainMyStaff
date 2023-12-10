import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyChzmoXii9ivE4SklGE_3iZIH7jNecppnU",
  authDomain: "trainmystaff-6e604.firebaseapp.com",
  projectId: "trainmystaff-6e604",
  storageBucket: "trainmystaff-6e604.appspot.com",
  messagingSenderId: "114449661089897027245",
  appId: "1:114449661089897027245:web:3b16e0660ab9991f42b3e1",
};

// Initialize Firebase with the configuration
const firebaseApp = initializeApp(firebaseConfig);

// Get Firebase authentication and Firestore instances
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Create a GoogleAuthProvider instance for Google sign-in
const googleAuthProvider = new GoogleAuthProvider();

// Function to sign in with Google
const signInWithGoogle = () => {
  return auth.signInWithPopup(googleAuthProvider);
};

// Function to sign out
const signOut = () => {
  return auth.signOut();
};

// Function to check if a user is authenticated
const checkAuthStatus = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

export { auth, db, firebaseApp, signInWithGoogle, signOut, checkAuthStatus };