
function plotdatapoints(  studentname , mid1score, finalscore,mid2score)
{
object={};


 object.showInLegend=true;
 object.name=studentname;
 object.type="spline";
 object.dataPoints=[];


    object.dataPoints.object1={};
    object.dataPoints.object1.label="Midterm 1";
    object.dataPoints.object1.y=mid1score;

    object.dataPoints.push(object.dataPoints.object1);


    object.dataPoints.object3={};
    object.dataPoints.object3.label="Midterm 2";
    object.dataPoints.object3.y=mid2score;

    object.dataPoints.push(object.dataPoints.object3);

    object.dataPoints.object2={};
    object.dataPoints.object2.label="Final";
    object.dataPoints.object2.y=finalscore;

    object.dataPoints.push(object.dataPoints.object2);

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
   // await averagesum=0;

    database.collection("Student").get().then(function(StudentSnapshot) {

        StudentSnapshot.forEach(function (Student) {
            var midterm1 = Student.data().Midterm1;
            var final = Student.data().Final;
            var stuname = Student.data().Name;
            var midterm2=Student.data().Midterm2;

           // averagesum=averagesum+Student.data().Midterm1 + Student.data().Midterm2+ Student.data().Final;

            studata.push([]);
            studata[length][0] = stuname;
            studata[length][1] = midterm1;
            studata[length][2] = final;
            studata[length][3] = midterm2;
            length++;

        });

        for(var i=0;i<length;i++)
            makearray(finalarray,plotdatapoints(studata[i][0],studata[i][1],studata[i][2],studata[i][3]));


    });

  //  array.second=finalarray;
  //  console.log("sssss");
    console.log(finalarray.valueOf());
  //  console.log(averagesum);

plotgraph(finalarray);

}


function calcaverage(finalarray)
{
    var averagesum = 0;
    console.log();
   // Object.keys(finalarray).length;
    console.log(Object.keys(finalarray).length);

    for(var i=0;i<finalarray.length;i++)
    {
        console.log(finalarray[i].dataPoints.object1.y);
        console.log(finalarray[i].dataPoints.object2.y);
        console.log(finalarray[i].dataPoints.object1.y);
        console.log(finalarray[i].dataPoints.object1.y);
        averagesum = averagesum + finalarray[i].dataPoints.object1.y + finalarray[i].dataPoints.object2.y +finalarray[i].dataPoints.object3.y;
    }

    var average = (averagesum) / (3 * finalarray.length);
    console.log(average);

return average;
}


function plotgraph(finalarray)
{
    var average=calcaverage(finalarray);

  // window.onload = function () {
        var chart = new CanvasJS.Chart("chartContainer",
            {
            theme:"light2",
            animationEnabled: true,
            title:{
                text: "Performance Chart"
            },
            axisY: {
                title: "Grades",
                stripLines:[
                    {
                        value: average,
                        label: "Average",
                        thickness:3,
                        labelFontWeight:"bold"
                    }
                ]
            },
            data: finalarray
        });
        chart.render();
   // }



}