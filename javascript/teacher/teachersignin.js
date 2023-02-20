import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
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


//  Reference

const stdNo = document.getElementById('usernameInp');
const password = document.getElementById('passInp');
const submit = document.getElementById('submit');

// AuthenticatorAttestationResponse

function AuthenticateUser() {
    const dbRef = ref(db);

    let passwordregex = /[a-zA-Z0-9]{8,}/;
    let stdNoregex = /[a-zA-Z0-9]{5,}/;

    // Validate username and password input
    if (!stdNoregex.test(stdNo.value)) {
        alert("Please enter a valid username (minimum 5 characters, alphanumeric only).");
        return;
    }
    if (!passwordregex.test(password.value)) {
        alert("Please enter a valid password (minimum 8 characters, alphanumeric only).");
        return;
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

function decPass(dbpass) {
    var pass12 = CryptoJS.AES.decrypt(dbpass, password.value);
    return pass12.toString(CryptoJS.enc.Utf8);
}

// LOGIN

function login(user) {
    let keepLoggedIn = document.getElementById('customSwitch1').checked;
    if (!keepLoggedIn) {
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location = "teacherhome.html";
    }
    else {
        localStorage.setItem('KeepLogin', 'yes');
        localStorage.setItem('user', JSON.stringify(user));
        window.location = "teacherhome.html";
    }
}

submit.addEventListener('click', AuthenticateUser);



