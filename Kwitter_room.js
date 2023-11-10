

const firebaseConfig = {
    apiKey: "AIzaSyCNJMoKNCwWUi4x8EI8Te9cZApbHlFpbdQ",
    authDomain: "twitter-1709.firebaseapp.com",
    databaseURL: "https://twitter-1709-default-rtdb.firebaseio.com",
    projectId: "twitter-1709",
    storageBucket: "twitter-1709.appspot.com",
    messagingSenderId: "797862101289",
    appId: "1:797862101289:web:4764e242a688da4f61b738"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML - "Welcome"+ user_name +"!";

  function addRoom()

{
    room_name = document.getElementById("room_name").ariaValueMax;
    firebase.database().ref("/").child("room_name").update ({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Name - " + Room_names);
   row="<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
   });});}
   getData();

   function redirectToRoomName(name)
   {
    console.log(name);
    locatStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
   }

   function logout()
   {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
   }