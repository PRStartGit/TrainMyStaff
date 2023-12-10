import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChzmoXii9ivE4SklGE_3iZIH7jNecppnU",
  authDomain: "trainmystaff-6e604.firebaseapp.com",
  projectId: "trainmystaff-6e604",
  storageBucket: "trainmystaff-6e604.appspot.com",
  messagingSenderId: "114449661089897027245",
  appId: "1:114449661089897027245:web:3b16e0660ab9991f42b3e1",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

export { auth, db, firebaseApp, signInWithGoogle, initializeApp };