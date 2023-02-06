
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

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
       alert("user");
       return false;
   }

   return true;

}

// REGISTER USER TO FIREBASE

function RegisterUser(){
  if(!Validation()){
   return;
  };
   const dbRef = ref(db);
   
   get(child(dbRef, "StudentList/" + stdNo.value))
   .then((snapshot)=>{
       if(snapshot.exists()){
           alert("account already exist");
       }
       else{
           set(ref(db, "StudentList/"+ stdNo.value),
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