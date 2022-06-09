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
    
    user_name = localStorage.getItem("user_name");

    room_name = localStorage.getItem("room_name");

    function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(Room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
