
let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
let header = document.getElementById('hh');
let name = document.getElementById('name')
let Teacher = document.getElementById("teacherName");
let Yname = document.getElementById("youranme")
let Retrive = document.getElementById("myimg")



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

// async function retrieveImage() {
//     // Retrieve the download URL for the image
//     const storageRef = sRef(storage, "Image/" + currentUser.stdNo + ".jpg");
//     const downloadURL = await getDownloadURL(storageRef);

//     // Set the download URL as the source of the image
//     const imgElement = document.getElementById("myimg");
//     imgElement.src = downloadURL;
// }

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
        Teacher.innerHTML = currentUser.name;
        Yname.value = currentUser.stdNo;
        Retrive.src = currentUser.ImageURL;
      
        userlink.classList.replace("nav-link", "btn");
        // userlink.classList.add("");
        // userlink.href = "profile.html";



        // signoutlink.innerText = '<i class="fa fa-sign-out" style="width: 25px;" aria-hidden="true"></i>';
        signoutlink.classList.replace("nav-link", "btn");
        // signoutlink.classList.add("btn-info");
        signoutlink.href = "javascript:Signout()";
    }

}