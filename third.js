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

    var stuname = document.getElementById("stu_name").value;
    var newscore = document.getElementById("newscore").value;
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


    database.collection("Student").get().then(function (StudentSnapshot) {

        var i = 0;

        StudentSnapshot.forEach(  function (Student) {

            var midterm1 = Student.data().Midterm1;
            var final = Student.data().Final;
            var RETRIEVEDname = Student.data().Name;
          //  console.log(RETRIEVEDname);
            var midterm2 = Student.data().Midterm2;


            if (stuname != RETRIEVEDname && i == StudentSnapshot.size - 1)
            {
              //  alert("NO SUCH STUDENT REGISTERED!!" + "\n" + "TRY AGAIN" + "\n");
            }

           if (stuname == RETRIEVEDname) {
               // console.log("zxx");
              //  console.log(examentry);

                if (examentry == "Midtrem1") {

                    console.log(examentry);

                    database.collection("Student").doc(stuname).update({

                        "Midterm1": newscore
                    }).then(  function () {
                        console.log("Document successfully updated!");
                        alert("SUCCESS");
                    });

                    console.log("zxx");

                } else if (examentry == "Midtrem2") {

                    database.collection("Student").doc(stuname).update({
                        "Midterm2": newscore
                    }).then(function () {
                        console.log("Document successfully updated!");
                        alert("SUCCESS");
                    });

                } else if (examentry == "Final") {

                    database.collection("Student").doc(stuname).update({
                        "Final": newscore
                    }).then(function () {
                        console.log("Document successfully updated!");
                        alert("SUCCESS");
                    });

                }
            }

            i++;

        });

    });


}
