let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
let studentNo = document.getElementById('studentNo');
let text = document.getElementById("text")
let header = document.getElementById('hh');
// let picture = document.getElementById('image');
var currentUser = null;

function getUsername(){
    let KeepLogin = localStorage.getItem("KeepLogin");

    if (KeepLogin == "yes"){
        currentUser = JSON.parse(localStorage.getItem('user'));
    }
    else{
        currentUser = JSON.parse(sessionStorage.getItem('user'));
    }
}

function Signout(){
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('KeepLogin');
    window.location = "studentlogin.html";
}

window.onload = function(){
    getUsername();
    if(currentUser == null){
        userlink.innerText="create New Account";
        userlink.classList.replace("nav-link","btn");
        userlink.classList.add("btn-primary");
        userlink.href = "signup.html";

        signoutlink.innerText="Login";
        signoutlink.classList.replace("nav-link","btn");
        signoutlink.classList.add("btn-info");
        signoutlink.href = "studentlogin.html";
    }
    else{
        text.value = currentUser.name;
        userlink.innerText = currentUser.stdNo ;
        header.innerText = currentUser.name +", "+ currentUser.FirstName +", " + currentUser.MiddleName;
        studentNo.value = currentUser.stdNo;
        // picture.innerHTML ='<img src="/img/ico.png" alt="" style="width: 150px">';
        userlink.classList.replace("nav-link","btn");
        userlink.classList.add("btn-primary");
        // userlink.href = "profile.html";

        signoutlink.innerText="Sign Out";
        signoutlink.classList.replace("nav-link","btn");
        signoutlink.classList.add("btn-info");
        signoutlink.href = "javascript:Signout()";
    }
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const fileInput = document.querySelector('#image');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('image', file);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload-image');
    xhr.send(formData);
  });

  const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.post('/upload-image', upload.single('image'), (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(400).send('No file uploaded.');
    return;
  }
  // Do something with the uploaded file here.
  res.send('File uploaded.');
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});

  