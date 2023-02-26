
let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
let header = document.getElementById('hh');
let name = document.getElementById('name')


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
        name.innerText = currentUser.name;
        userlink.classList.replace("nav-link", "btn");
        // userlink.classList.add("");
        // userlink.href = "profile.html";



        // signoutlink.innerText = '<i class="fa fa-sign-out" style="width: 25px;" aria-hidden="true"></i>';
        signoutlink.classList.replace("nav-link", "btn");
        // signoutlink.classList.add("btn-info");
        signoutlink.href = "javascript:Signout()";
    }

}