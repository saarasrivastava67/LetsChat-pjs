

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

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message : msg,
        like : 0
    });
    document.getElementById("msg").value = "";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data ['name'];
    message = message_data ['message'];
    like = message_data ['like'];
    name_with_tag = "<h4>"+ name +"<image class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag ="<h4 class = 'message_h4'>"+ message +"</h4>";
like_button = "<button class = 'btn btn-warning id' = "+ firebase_message_id +"value="+ like +"onclick = 'updateLike(this.id)'>";
span_with_tag = "<span class = 'glypichon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;

      } });  }); }
getData();

function updateLike(message_id)
{
    console.log("clicked on like -" + message_data);
    button_id = message_id;
    likes = document.getElementById("button_id").value;
    update_like = Number(likes) +1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        likes:updated_likes
    });
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.ref("room_name");
    window.location.replace("kwitter.html");
}