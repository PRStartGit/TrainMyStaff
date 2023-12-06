import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQD6TMwpJDRpj3yH" +
    "eWcCdL2WvYyI44IfEB9sNkLo5RKLYbsMvvP+6cZC2F1QTL97nxcfeCibMpUe89BQ",
  authDomain: "trainmystaff-6e604.firebaseapp.com",
  projectId: "trainmystaff-6e604",
  storageBucket: "trainmystaff-6e604.appspot.com",
  messagingSenderId: "114449661089897027245",
  appId: "1:114449661089897027245:web:3b16e0660ab9991f42b3e1",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db, firebaseApp };
