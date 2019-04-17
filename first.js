

// TODO: Replace the following with your app's Firebase project configuration
var config = {
    apiKey: "AIzaSyDV4KONXTatyPfcgrz3SPpPR4_Rapu9VEI",
    authDomain: "user-pass-5e091.firebaseapp.com",
    databaseURL: "https://user-pass-5e091.firebaseio.com",
    projectId: "user-pass-5e091",
    storageBucket: "user-pass-5e091.appspot.com",
    messagingSenderId: "186452576166"
};

firebase.initializeApp(config);
database=firebase.firestore();

// Initialize Firebase
function credentialchecker() {

    var arr = [[],2];
    var length=0;

    database.collection("users").get().then(function(usersSnapshot) {
     //   var BreakException = {};
    //     try {
             usersSnapshot.forEach(function (user) {
                 // doc.data() is never undefined for query doc snapshots
                 // console.log(user.id, " => ", user.data());
                 var usr = user.data().username;
                 var passw = user.data().password;
                 console.log(usr);
                 console.log(passw);
                 arr[length][0] = usr;
                 arr[length][1] = passw;
                 length++;
             });


                 var cname = document.getElementById("gta_name").value;
                 var sname = document.getElementById("pass").value;

        console.log(cname);
        console.log(sname);


        for(var i=0;i<length;i++)
        {
            if(arr[i][0]==cname && arr[i][1]==sname)
            {
                alert("Yay!");
                window.location.href = "https://docs.google.com/document/d/1IVa_auUn0vAn8BSRM0xh--tZRXdsgtGUdF0Een7vBNM/edit";
                break;
            }
            else
                alert("NOT A GTA!!");
                 break;
        }

    });

}
