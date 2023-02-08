import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {getFirestore, setDoc, collection, addDoc,doc,getDoc,updateDoc,deleteDoc} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

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
  const db = getFirestore();

const LN = document.getElementById("LN")
const FN = document.getElementById("FN");
const MN = document.getElementById("MN");
const POB = document.getElementById("POB");
const DOB = document.getElementById("DOB");
const CN = document.getElementById("CN");
const SN = document.getElementById("STN");
const GS = document.getElementById("GS");
const Address = document.getElementById("Address");
const LRN = document.getElementById("LRN");
const RS = document.getElementById("RS");
const TF = document.getElementById("TF");
const submit = document.getElementById("submit");
const Certification = document.getElementById("Certification");
const Registration= document.getElementById("Registeration");
const Enrollment = document.getElementById("Enrollment");
const GM = document.getElementById("GM");
const Others = document.getElementById("Others");
const F137 = document.getElementById("F137");
const F138 = document.getElementById("F138");
const G11Sem1 = document.getElementById("G11-sem1");
const G11Sem2 = document.getElementById("G11-sem2");
const G12Sem1 = document.getElementById("G12-sem1");
const G12Sem2 = document.getElementById("G12-sem2");

 function SaveURLtoFirestore(){
    var ref = doc(db, "StudentInfo" , FN.value);

   setDoc(ref,{
        FirstName: FN.value,
        LastName: LN.value,
        MiddleName: MN.value,
        PlaceOfBirth: POB.value,
        DateOfBirth: DOB.value,
        ContactNo: CN.value,
        StudentNumber: SN.value,
        GradeSection: GS.value,
        Adress: Address.value,
        LRN: LRN.value,
        Certification: Certification.value,
        Registration: Registration.value,
        Enrollment: Enrollment.value,
        GoodMoral: GM.value,
        Others: Others.value,
        F137: F137.value,
        F138: F138.value,
        G11Sem1: G11Sem1.value,
        G11Sem2: G11Sem2.value,
        G12Sem1: G12Sem1.value,
        G12Sem2: G12Sem2.value,
        Regular: RS.value,
        Transferee: TF.value
     
    })
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
    


submit.addEventListener('click', SaveURLtoFirestore);