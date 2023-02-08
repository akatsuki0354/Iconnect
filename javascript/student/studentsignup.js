
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1GxCsUNfVYuE8vq5Z9u3kj8dHFval7Hc",
  authDomain: "firestore-9d6f3.firebaseapp.com",
  databaseURL: "https://firestore-9d6f3-default-rtdb.firebaseio.com",
  projectId: "firestore-9d6f3",
  storageBucket: "firestore-9d6f3.appspot.com",
  messagingSenderId: "937341367464",
  appId: "1:937341367464:web:32573b0a9ef70099247e9d",
  measurementId: "G-D9QFV2F1QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth();

//  Reference

const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const stdNo = document.getElementById('usernameInp');
const password = document.getElementById('passInp');
const submit = document.getElementById('submit');

// Validation

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !==null;
}


function Validation(){
   let nameregex = /^[a-zA-Z\s]+$/;
   let emailgerex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
   let stdNoregex = /[a-zA-Z0-9]{5,}/;
   let passwordregex = /[a-zA-Z0-9]{8,}/;



   if(isEmptyOrSpaces(name.value) || isEmptyOrSpaces(email.value) || isEmptyOrSpaces(stdNo.value) || isEmptyOrSpaces(password.value)){
    alert("Please fill the input")
    return false;
   }


   if(!nameregex.test(name.value)){
       alert("number is not allow");
       return false;
   }
   if(!emailgerex.test(email.value)){
       alert("email not avail");
       return false;
   }
   if(!stdNoregex.test(name.value)){
       alert("need atlest 5 character");
       return false;
   }
   if(!passwordregex.test(password.value)){
    alert("need atleast 8 character");
    return false;
}

   return true;

}

// REGISTER USER TO FIREBASE

function RegisterUser(){
  if(!Validation()){
   return;
  }
//   Auth
createUserWithEmailAndPassword(auth, email.value, password.value)
.then((userCredential) => {
    const user = userCredential.user;
  // Add the user to the database
  const dbRef = ref(db);
  set(ref(dbRef, "Studentlist/" + stdNo.value), {
    name: name.value,
    email: email.value,
    stdNo: stdNo.value,
    password: encPass(),
  })
    .then(() => {
      alert("Hello! You are now registered Mr/Mrs " + name.value);
    })
    .catch((error) => {
    //   alert("Error: " + error);
    });
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
//   alert("Error: " + errorMessage);
});
   const dbRef = ref(db);
   
   get(child(dbRef, "Studentlist/" + stdNo.value))
   .then((snapshot)=>{
       if(snapshot.exists()){
           alert("account already exist");
       }
       else{
           set(ref(db, "Studentlist/"+ stdNo.value),
           {
               name: name.value,
               email: email.value,
               stdNo: stdNo.value,
               password: encPass()
           })
           .then(() => {
               alert("Hello! You are now registerd mr/mrs" + name.value)
           })
           .catch((error)=>{
               alert("error"+ error);
           })
       }
   });
}

function encPass(){
    var password12 = CryptoJS.AES.encrypt(password.value, password.value);
    return password12.toString();
}


submit.addEventListener('click', RegisterUser);

