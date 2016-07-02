function Edge() {
		this.Point_List = new Array();
	}
function Point(top,left) {
		this.top = top;
		this.left = left;
}  
var hitLine = new Edge();
var dragonTurn = new Edge();
var count=0;
function animateDiv(){
	//alert(window.innerWidth);
  var oldq = $('#dragon').offset();
  //why 64 59?
  var center_top = oldq.top + 64;
  var center_left = oldq.left + 59;
  var flag=crackDetection(center_top, center_left);
  if (count>18) {document.getElementById("scoreboard").innerHTML = 200; alert("Y catch it.");
    window.location.href='./Setting3.html';};
  if( flag=== true)
  {
  	count=count+5;
    //alert(count);
	//store the positions and change direction
	storePosition(center_top, center_left);
	//changeangle();
	//alert(slope_cos);
	//dest_y = center_top + 500 * slope_sin;
	//dest_x = center_left + 500 * slope_cos;	
	//animateDiv();
	//computeArea();
	//compute the region space where the dragon changes positions in recent 5 times
  }

	var newq = makeNewPosition(oldq.top, oldq.left,flag);
	count= count>1?(count-1):1;
	if (oldq.top<0||oldq.left<0) {slope_sin = slope_sin<0? slope_sin+0.8:slope_sin-0.8;
		slope_cos = slope_cos<0? slope_cos+0.8:(-1)*slope_cos;
		newq[1]=oldq.left+80*slope_cos;
		newq[0]=oldq.top+80*slope_sin;}
		if (oldq.top>700||oldq.left>1300) {slope_sin = slope_sin>0? (-1)*slope_sin+0.1:slope_sin+0.8;
		slope_cos = slope_cos>0? (-1)*slope_cos+0.1:slope_cos+0.8;
		newq[1]=oldq.left+80*slope_cos;
		newq[0]=oldq.top+80*slope_sin;}
  //alert(slope_cos);
    
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $('#dragon').animate({left: newq[1] ,  top: newq[0]}, speed,
    function(){
      animateDiv();
    });
};
        
function calcSpeed(prev, next) {
  var y = Math.abs(prev[0] - next[0]);
  var x = Math.abs(prev[1] - next[1]);
  var greatest = x > y ? x : y;
  var speedModifier = 0.5;
  var speed = Math.ceil(greatest/speedModifier);
  return speed;
};

function storePosition(center_top, center_left){
	var turnPosition = new Point(center_top, center_left);
	dragonTurn.Point_List.push(turnPosition);
};
function changeangle(){
	var tanofDragon = slope_sin/slope_cos;
	var tanofLine = (hitLine.Point_List[1].top - hitLine.Point_List[0].top)/(hitLine.Point_List[1].left - hitLine.Point_List[0].left);
	var atanofDragon = Math.atan(tanofDragon);
	var atanofLine = Math.atan(tanofLine);
	//There is a bug here.
	var newatan = 2 * atanofLine - atanofDragon;
	//pop out the latest 2 points, in order to store new hit line
	hitLine.Point_List.pop();
	hitLine.Point_List.pop();
	//
	//slope_cos = Math.cos(newatan);
};