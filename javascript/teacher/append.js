
import { getFirestore, doc, getDoc, getDocs, onSnapshot, collection } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-analytics.js";
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
  appId: "1:937341367464:web:88c8c27805555c97247e9d",
  measurementId: "G-8XR09PF58C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();
const db = getFirestore();



export function answer() {
  return 'module';
}

var stdNo = 0;
var tbody = document.getElementById('tbody1')
function AddItemToTable(name, roll, Times) {
  let trow = document.createElement("tr");
  
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let td1 = document.querySelector('.cusor.present');
  td1.innerHTML = ++stdNo;

  td2.innerHTML = name;
  td3.innerHTML = roll;
  td2.colSpan = "3";
  td3.colSpan = "3";
  td3.setAttribute('data-time', Times);

  const timeParts = Times.split(':');
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);

  if (hours === 4 && minutes >= 30 && minutes <= 32) {
    trow.classList.add('present');
    
  } else if (hours === 4 && minutes >= 33 && minutes <= 50) {
    trow.classList.add('late');
  }

  

  trow.appendChild(td2);
  trow.appendChild(td3);
  
  tbody.insertBefore(trow, tbody.firstChild); // insert the new row at the beginning of the table
}

function AddAllItemToTable(TheStudent) {
  stdNo = 0;
  tbody.innerHTML = "";
  TheStudent.forEach(element => {
    AddItemToTable(element.NameOfStd, element.RollNo, element.Times);
  });
}

async function GetAllDataOnce() {
  const querySnapshot = await getDocs(collection(db, "books"));

  var students = [];

  querySnapshot.forEach(doc => {
    students.push(doc.data());
  });
  AddAllItemToTable(students);
}

window.onload = GetAllDataOnce;