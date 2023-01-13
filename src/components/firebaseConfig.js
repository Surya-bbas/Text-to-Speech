import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBp9maXAuDp_e75kbhRKruXBipvcZIraaw",
    authDomain: "text-to-speech-8e973.firebaseapp.com",
    projectId: "text-to-speech-8e973",
    storageBucket: "text-to-speech-8e973.appspot.com",
    messagingSenderId: "611341945331",
    appId: "1:611341945331:web:30edbbfdd0a11631552a86"
};

initializeApp(firebaseConfig)

export const db = getFirestore()
export const auth = getAuth()