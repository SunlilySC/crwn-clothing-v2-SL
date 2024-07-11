
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore, doc, getDoc, setDoc 
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCXdaYt7QlOz3UhS1a6UwAry9PPfbzzrg0",
  authDomain: "crwn-clothing-db-5cbf7.firebaseapp.com",
  projectId: "crwn-clothing-db-5cbf7",
  storageBucket: "crwn-clothing-db-5cbf7.appspot.com",
  messagingSenderId: "553179858557",
  appId: "1:553179858557:web:e9ee6db54fd65eca71d314"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      }); 
    } catch (error) {
      console.log('error creating the user', error.mesage);
    }
  }

  return userDocRef;
};