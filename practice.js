const firebaseConfig = {
    apiKey: "AIzaSyAVfmXZ1rMoRWJtwvSYujrZVuF_QTYupto",
    authDomain: "practise-class-a6abd.firebaseapp.com",
    databaseURL: "https://practise-class-a6abd-default-rtdb.firebaseio.com",
    projectId: "practise-class-a6abd",
    storageBucket: "practise-class-a6abd.appspot.com",
    messagingSenderId: "727305057145",
    appId: "1:727305057145:web:4f170f07287035567575a8"
  };
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}