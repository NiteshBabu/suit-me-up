import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC95VLVAUzGoZTrFtoNi1yE1v8HQT3v8Nk",
  authDomain: "suit-me-up.firebaseapp.com",
  databaseURL: "https://suit-me-up.firebaseio.com",
  projectId: "suit-me-up",
  storageBucket: "suit-me-up.appspot.com",
  messagingSenderId: "714306735903",
  appId: "1:714306735903:web:21b898d94376224b5f6a2a",
  measurementId: "G-QT67XFJHK8",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists){
   
    const {displayName, email} = userAuth
    const createdOn = new Date()
   
    try {
      await userRef.set({
        displayName,
        email,
        createdOn,
        ...additionalData,
      })
    }catch(error){
      console.log(error.message)
    } 
  }
  return userRef
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;