
function plotdatapoints(  studentname , midscore, finalscore)
{
object={};


 object.showInLegend=true;
 object.name=studentname;
 object.type="spline";
 object.dataPoints=[];


    object.dataPoints.object1={};
    object.dataPoints.object1.label="Midterm";
    object.dataPoints.object1.y=midscore;

    object.dataPoints.object2={};
    object.dataPoints.object2.label="Final";
    object.dataPoints.object2.y=finalscore;




return object;

}

function makearray ( finalarray,object)
{
    finalarray.push(object);
}


function getdata(database)
{
     var studata = [];
    var length = 0;
    var finalarray=[];


    database.collection("Student").get().then(function(StudentSnapshot) {

        var averagesum = 0;

        StudentSnapshot.forEach(function (Student) {
            averagesum = averagesum + Student.data().Midterm1 + Student.data().Final;
            var midterm = Student.data().Midterm1;
            var final = Student.data().Final;
            var stuname = Student.data().Name;

            studata.push([]);
            studata[length][0] = stuname;
            studata[length][1] = midterm;
            studata[length][2] = final;
            length++;

        });

        for(var i=0;i<length;i++)
            makearray(finalarray,plotdatapoints(studata[i][0],studata[i][1],studata[i][2]));


        var average = (averagesum) / (200 * StudentSnapshot.size);

    });

return finalarray;

}

function plotgraph(finalarray)
{

   window.onload = function () {

       console.log("sssß");
        console.log(finalarray.valueOf());

        var chart = new CanvasJS.Chart("chartContainer",
            {
            theme:"light2",
            animationEnabled: true,
            title:{
                text: "Performance Chart"
            },
            axisY: {
                title: "Grades"
                // showInLegend: true,
                // stripLines: [{
                //  color:"red",
                //   value: average,
                //  label: "Average"
                // }]
            },
            data: finalarray

        });
        chart.render();
    }
}