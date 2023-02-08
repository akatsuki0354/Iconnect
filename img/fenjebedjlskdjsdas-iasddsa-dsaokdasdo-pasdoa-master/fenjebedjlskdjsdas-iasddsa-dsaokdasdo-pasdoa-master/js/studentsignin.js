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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

const stdNo = document.getElementById('usernameInp');
const password = document.getElementById('passInp');
const submit = document.getElementById('submit');

function AuthenticateUser(){
const dbRef = ref(db);


get(child(dbRef, "StudentList/" + stdNo.value))
   .then((snapshot)=>{
       if(snapshot.exists()){
        alert()
           let dbpass = decPass(snapshot.val().password);
           if(dbpass == password.value){
            login(snapshot.val());
           }
           else{
             alert("username or password invalid");
           }
       }

       else{
            alert("username or password invalid");
           }
      
    });
}

function decPass(dbpass){
    var pass12 = CryptoJS.AES.decrypt(dbpass, password.value);
    return pass12.toString(CryptoJS.enc.Utf8);
}
function login(user){
    let keepLoggedIn = document.getElementById('customSwitch1').checked;
    if(!keepLoggedIn){
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location="home.html";
    }
    else{
        localStorage.setItem('KeepLogin', 'yes');
        localStorage.setItem('user', JSON.stringify(user));
        window.location="home.html";
    }
}
submit.addEventListener('click', AuthenticateUser);