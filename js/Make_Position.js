var goForword = true;   // why set it as true default
var dest_x;
var dest_y;
var slope_cos = 0.866;
var slope_sin = 0.5;

function makeNewPosition(top, left,flag){ 
  //if it doesn't change the direction
  
  var len=10;
  if(flag === true){
    slope_sin = slope_sin>0? slope_sin-1:slope_sin+1;
  //alert(slope_cos);
  slope_cos = slope_cos>0? slope_cos-1:slope_cos+1;
  len=50;
    }
    
    
  
  var nh = top + len * slope_sin;
  var nw = left + len * slope_cos;
  return [nh, nw];
}