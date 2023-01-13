import React from "react";
import Output from "./Output";
import { useState, useEffect } from "react";

import { db } from "./firebaseConfig";
import { auth } from "./firebaseConfig";

import {
   doc,
   collection,
   setDoc,
   onSnapshot,
   addDoc,
   getDoc,
   updateDoc,
   arrayUnion,
} from "firebase/firestore";

import {
   createUserWithEmailAndPassword,
   signOut,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithPopup,
   onAuthStateChanged,
} from "firebase/auth";

const Main = () => {
   const [data, setData] = useState("Welcome to the website");
   const [user, setUser] = useState()
   let logginStatus

   const ttsCall =  () => {

    const TxtData = document.getElementById('editor').value;
    setData(TxtData)    
    if (logginStatus==true){
        console.log(auth.currentUser.uid);
        const loggedInUserId = auth.currentUser.uid
        updateDoc(doc(db,'user',loggedInUserId),{
            recent:arrayUnion(TxtData)
        })
        
    }
    
}

   // firebase code:
    function fetchDoc(user){
        getDoc(doc(db,'user',user.uid)).then((response)=>{
            console.log(response.data());
        })

    }
   onAuthStateChanged(auth,(user)=>{
    console.log(user)
    if(user){
        logginStatus=true
        fetchDoc(user)
    }
   })

   async function handelSignUp(e) {
      e.preventDefault();
      const signUpForm = document.getElementById("signUp");
      const email = signUpForm.email.value;
      const password = signUpForm.password.value;
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, "user", user.user.uid), {
         email: email,
         recent: [],
      });
      signUpForm.reset(); 
   }

   async function handelSignIn(e) {
      e.preventDefault();
      const signInForm = document.getElementById("signIn");
      const email = signInForm.email.value;
      const password = signInForm.password.value;
      signInWithEmailAndPassword(auth, email, password);
      signInForm.reset();
   }

   return (
      <div>
         <h1>---SignUp section---</h1>
         <form
            onSubmit={(e) => {
               handelSignUp(e);
            }}
            id="signUp"
         >
            <label>Enter Email:</label>
            <input type="email" name="email" />
            <br />
            <label>Enter Password</label>
            <input type="password" name="password" />
            <br />
            <button className="bg-secondary p-2">SignUp</button>
         </form>
         <br />
         <br />

         <h1>---SignIn section---</h1>
         <form
            onSubmit={(e) => {
               handelSignIn(e);
            }}
            id="signIn"
         >
            <label>Enter Email:</label>
            <input type="email" name="email" />
            <br />
            <label>Enter Password</label>
            <input type="password" name="password" />
            <br />
            <button className="bg-secondary p-2">SignIn</button>
         </form>

         

         <div className="flex justify-center items-center pb-3">
            <button
               onClick={() => {
                  signOut(auth).then(()=>{
                    console.log("user logged out:")
                    logginStatus=false
                  });
               }}
               className="  bg-secondary p-2"
            >
               SignOut
            </button>
         </div>

         <div className="object-contain flex flex-col items-center  ">
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-sec dark:bg-gray-700 dark:border-gray-600  w-3/4">
               <div className="px-4 py-2 bg-sec rounded-b-lg dark:bg-gray-800">
                  <textarea
                     id="editor"
                     rows="8"
                     className="block w-full px-0 text-sm text-gray-800 bg-sec border-0 dark:bg-gray-800 focus:ring-0 dark:text-sec dark:placeholder-gray-400 "
                     placeholder="Write your text..."
                     required
                  ></textarea>
               </div>
               <div className="flex flex-col items-center py-4">
                  <button
                     type="button"
                     className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-secondary rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-secondary  md:text-2xl"
                     onClick={()=>ttsCall()}
                  >
                     Convert
                  </button>
               </div>
            </div>
         </div>
         <Output data={data} />

         <div id="recent">
            {user ? <h1>user is found</h1> : <h1>no user is found</h1>}
         </div>
      </div>
   );
};

export default Main;
