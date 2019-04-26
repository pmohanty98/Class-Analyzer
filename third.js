var config = {
    apiKey: "AIzaSyBh0U1gENXIsEjB-gnJgjabaVxBSrFa7Qs",
    authDomain: "database-3d971.firebaseapp.com",
    databaseURL: "https://database-3d971.firebaseio.com",
    projectId: "database-3d971",
    storageBucket: "database-3d971.appspot.com",
    messagingSenderId: "223031201948"
};

firebase.initializeApp(config);
database = firebase.firestore();


 function scoreupdation() {

     var pass=0;
     var newscore;

    var stuname = document.getElementById("stu_name").value;
    var text=document.getElementById("newscore").value;
    if(text.length==0)
    { pass=1;
        alert("Enter a valid score.");           //->Null entry
    }
    else if(text=="100")
        newscore = parseInt(text);

     else if (String(text).match("[0-9]+") && (text.length ==2 || text.length==1)) {
          newscore = parseInt(text);
     }
     else{
         pass=1;
         alert("Enter a valid score.");
     }


    var sel = document.getElementById('box1');
    var exam = sel.options[sel.selectedIndex].value;
    //  console.log(exam);

    var examentry;
    if (exam == "m1")
        examentry = "Midterm1";
    else if (exam == "m2")
        examentry = "Midterm2";
    else if (exam == "f")
        examentry = "Final";

    var found=0;
    var stuID;
    database.collection("Student").get().then( function (StudentSnapshot) {

        StudentSnapshot.forEach( function (Student) {

            var RETRIEVEDname = Student.data().Name;

            if (stuname == RETRIEVEDname) {
                found = 1;
                stuID = Student.id;
            }
        });

        if(found==0)
            alert("NO SUCH STUDENT REGISTERED."+"\n"+"Try Again.");

       else if(found==1 && examentry=="Midterm1" && pass==0) {
           var ref = database.collection("Student").doc(stuID);
           console.log(ref);
           ref.update({
               "Midterm1": newscore
           });
            alert("SUCCESS") ;
       }
        else if(found==1 && examentry=="Midterm2" && pass==0) {
            var ref = database.collection("Student").doc(stuID);
            console.log(ref);
            ref.update({
                "Midterm2": newscore
            });
            alert("SUCCESS") ;
        }
        else if(found==1 && examentry=="Final" && pass==0) {
            var ref = database.collection("Student").doc(stuID);
            console.log(ref);
            ref.update({
                "Final": newscore
            });

            alert("SUCCESS") ;
        }

    });

  }




