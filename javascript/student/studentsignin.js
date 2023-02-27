import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcBP3v9NIg9YyNZbWnuKNcUHUpeYRKBoY",
    authDomain: "iconectstudent.firebaseapp.com",
    databaseURL: "https://iconectstudent-default-rtdb.firebaseio.com",
    projectId: "iconectstudent",
    storageBucket: "iconectstudent.appspot.com",
    messagingSenderId: "592757466358",
    appId: "1:592757466358:web:5fc730b9812d1b6aceb8d7",
    measurementId: "G-WW7M44ENGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();


//  Reference

const stdNo = document.getElementById('usernameInp');
const password = document.getElementById('passInp');
const submit = document.getElementById('submit');

// AuthenticatorAttestationResponse

function AuthenticateUser() {
    const dbRef = ref(db);

    let passwordregex = /[a-zA-Z0-9]{8,}/;
    let stdNoregex = /^[a-zA-Z0-9\-]{5,}$/;

    // Validate username and password input
    if (!stdNoregex.test(stdNo.value)) {
        stdNo.classList.add('invalid');
        alert("Please enter a valid username (minimum 5 characters).");
        return;
    }else {
        stdNo.classList.remove('invalid');
    }
    if (!passwordregex.test(password.value)) {
        stdNo.classList.add('invalid');
        alert("Please enter a valid password (minimum 8 characters).");
        return;
    }else {
        stdNo.classList.remove('invalid');
    }

    get(child(dbRef, "teacherlist/" + stdNo.value))
        .then((snapshot) => {
            if (snapshot.exists()) {
                let dbpass = decPass(snapshot.val().password);
                if (dbpass == password.value) {
                    login(snapshot.val());
                }
                else {
                    alert("Invalid username or password.");
                }
            }
            else {
                alert("Invalid username or password.");
            }
        });
}

function decPass(dbpass){
    var pass12 = CryptoJS.AES.decrypt(dbpass, password.value);
    return pass12.toString(CryptoJS.enc.Utf8);
}

// LOGIN

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
