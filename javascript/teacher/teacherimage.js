
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
        import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";

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
        const analytics = getAnalytics(app);
        const clouddb = getFirestore();
        const storage = getStorage();

        let files = [];
        const reader = new FileReader();

        // Reference
        const namebox = document.getElementById("namebox");
        const myimg = document.getElementById("myimg");
        const select = document.getElementById("select");
        const upload = document.getElementById("upload");
        const extlab = document.getElementById("extlab");
        const proglab = document.getElementById("progress");
        const Yname = document.getElementById("youranme")
        var input = document.createElement('input')
        input.type = "file";

        input.onchange = (e) => {
            files = e.target.files;

            const extension = getFileExt(files[0]);
            const name = getFileName(files[0]);

            namebox.value = name;
            extlab.innerHTML = extension;
            reader.readAsDataURL(files[0]);
        };
        reader.onload = function () {
            myimg.src = reader.result;
        };

        // selection

        select.onclick = function () {
            input.click();
        };

        function getFileExt(file) {
            const temp = file.name.split(".");
            const ext = temp.slice(temp.length - 1, temp.length);
            return "." + ext[0];
        }
        function getFileName(file) {
            const temp = file.name.split(".");
            const fname = temp.slice(0, -1).join(".");
            return fname;
        }
        //   uplaod process
        async function UploadProcess() {
            var ImgToUpload = files[0];
            var ImgNAme = namebox.value + extlab.innerHTML;

            const  metaData = {
                contentType: ImgToUpload.type
            }
            const storage = getStorage();

            const StorageRef = sRef(storage, "Image/" + ImgNAme);

            const uploadTask = uploadBytesResumable(StorageRef, ImgToUpload, metaData);

            uploadTask.on('state-change', (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                proglab.innerHTML = "upload" + progress + "%";
            },
                (error) => {
                    alert("image not uploaded");
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        SaveURLRealtimeDB(downloadURL);
                    });
                }
            )
        }
        // Firestore
        import { getFirestore, doc, getDoc, setDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
        import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

        async function SaveURLRealtimeDB(url) {
            var name = namebox.value;
            var ext = extlab.innerHTML;

            var db = getDatabase();
            var imageRef = ref(db, "teacherlist/" + Yname.value);

            await update(imageRef, {
                ImageName: (name + ext),
                ImageURL: url,
                Yname: Yname.value,
            });
        }
upload.onclick = UploadProcess;