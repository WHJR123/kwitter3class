
function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";

}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiRJaMaUBQL3LR5QB3TX5nE2_yC8dwCKU",
  authDomain: "kwitter-f57d6.firebaseapp.com",
  projectId: "kwitter-f57d6",
  storageBucket: "kwitter-f57d6.appspot.com",
  messagingSenderId: "161826220724",
  appId: "1:161826220724:web:0ab2282da5d6535ebb45e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}