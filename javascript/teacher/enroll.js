     // Import the functions you need from the SDKs you need
     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
     import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
     import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
     const firebaseConfig = {
       apiKey: "AIzaSyD1GxCsUNfVYuE8vq5Z9u3kj8dHFval7Hc",
       authDomain: "firestore-9d6f3.firebaseapp.com",
       databaseURL: "https://firestore-9d6f3-default-rtdb.firebaseio.com",
       projectId: "firestore-9d6f3",
       storageBucket: "firestore-9d6f3.appspot.com",
       messagingSenderId: "937341367464",
       appId: "1:937341367464:web:a58d03272b5be0a0247e9d",
       measurementId: "G-9J07C0PJZ7"
     };
   
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);
   
   
   const email = document.getElementById('email');
   const password = document.getElementById('password');
   const studentC = document.getElementById("create")
   const button = document.getElementById('button')

   function validateForm() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const studentC = document.getElementById("create");
  
    const emailRegex = /^[a-zA-Z0-9]{5,}$/;
    const passwordRegex = /^[a-zA-Z0-9]{5,}$/;
  
    let isValid = true;
  
    if (!emailRegex.test(email.value)) {
      email.classList.add("invalid");
      isValid = false;
    }
  
    if (!passwordRegex.test(password.value)) {
      password.classList.add("invalid");
      isValid = false;
    }
  
    if (studentC.value.length < 5) {
      studentC.classList.add("invalid");
      isValid = false;
    }
  
    if (!isValid) {
      alert("Please enter valid input");
      return false;
    }
  
    return true;
  }
   
   
   function addButton(){
    if(!validateForm()){
      return;
     }
   const db = getDatabase();
   update(ref(db, 'teacherlist/' + studentC.value + password.value), {
     fullname: email.value,
     studentNumber: password.value,
     stdNo: studentC.value
   })
   .then(() => {
     alert("Student is now enroll")
   })
   .catch((error) => {
    alert("data error" + error)
   });
   }
   
   button.addEventListener('click', addButton);

   
let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
let header = document.getElementById('hh');


var currentUser = null;

function getUsername() {
    let KeepLogin = localStorage.getItem("KeepLogin");

    if (KeepLogin == "yes") {
        currentUser = JSON.parse(localStorage.getItem('user'));
    }
    else {
        currentUser = JSON.parse(sessionStorage.getItem('user'));
    }
}

function Signout() {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('KeepLogin');
    window.location = "teacherlogin.html";
}

window.onload = function () {
    getUsername();
    if (currentUser == null) {
        userlink.innerText = "create New Account";
        userlink.classList.replace("nav-link", "btn");
        userlink.classList.add("btn-primary");
        userlink.href = "signup.html";

        signoutlink.innerText = "Login";
        signoutlink.classList.replace("nav-link", "btn");
        signoutlink.classList.add("btn-info");
        signoutlink.href = "teacherlogin.html";
    }
    else {
        userlink.innerText = currentUser.stdNo;
        header.innerText = currentUser.name;
        studentC.value = currentUser.stdNo;
        userlink.classList.replace("nav-link", "btn");
        userlink.classList.add("btn-primary");
        // userlink.href = "profile.html";



        signoutlink.innerText = "Sign Out";
        signoutlink.classList.replace("nav-link", "btn");
        signoutlink.classList.add("btn-info");
        signoutlink.href = "javascript:Signout()";
    }

}


   