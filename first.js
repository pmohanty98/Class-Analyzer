

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

    database.collection("users").get().then(function(usersSnapshot) {

        var arr = [[],[]];

        var length=0;
     //   var BreakException = {};
    //     try {
             usersSnapshot.forEach(function (user) {
                 // doc.data() is never undefined for query doc snapshots
                 // console.log(user.id, " => ", user.data());
                 var usr = user.data().username;
                 var passw = user.data().password;
                 arr[length][0] = usr;
                 arr[length][1] = passw;
                 console.log(usr);
                 console.log(passw);
                 console.log(length);
                 console.log(arr[length][0]);
                 console.log(arr[length][1]);
                 length++;
             });


                 var cname = document.getElementById("gta_name").value;
                 var sname = document.getElementById("pass").value;
         console.log("input");
        console.log(cname);
        console.log(sname);


        console.log("array entries");
        console.log(arr[0][0]);
        console.log(arr[0][1]);
        console.log(arr[1][0]);
        console.log(arr[1][1]);


        for(var i=0;i<length;i++)
        {
            if(arr[i][0]==cname && arr[i][1]==sname)
            {
                alert("Yay!");
                window.location.href = "https://docs.google.com/document/d/1IVa_auUn0vAn8BSRM0xh--tZRXdsgtGUdF0Een7vBNM/edit";
                break;
            }
            else if(i==length-1)
                alert("NOT A GTA!!");

        }

    });

}
