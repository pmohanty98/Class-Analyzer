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

    var found=0;
    var stuID;
    database.collection("Student").get().then(function (StudentSnapshot) {




        StudentSnapshot.forEach(  function (Student) {

            var RETRIEVEDname = Student.data().Name;

            if (stuname == RETRIEVEDname) {
                found = 1;
                stuID = Student.id;
            }
        });


              if(found==1) {

                  console.log(stuID);
                  console.log(found);
                  var ref = database.collection("Student").doc(stuID);
                  console.log(ref);

                  if (examentry == "Midtrem1") {

                      ref.update({
                          "Midterm1": newscore
                      }).then(function () {
                          console.log("Document successfully updated!");
                          alert("SUCCESS");
                      });

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

        });



}
