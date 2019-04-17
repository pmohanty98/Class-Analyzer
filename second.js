
function plotdatapoints(  studentname,midscore,finalscore)
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