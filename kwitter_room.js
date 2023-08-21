

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyADbXD_txVWllDUTYNU5qWDAb2P_zSUmRw",
      authDomain: "lets-chat-web-app-7f091.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-7f091-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-7f091",
      storageBucket: "lets-chat-web-app-7f091.appspot.com",
      messagingSenderId: "692173405677",
      appId: "1:692173405677:web:2453d73c2d3b5a1c34bbe4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = " <div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();