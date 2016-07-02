function crackDetection(top, left){
  var signal = false;
  for(var i = 0; i < Crack_List.length; i++){
    for(var j = 0; j < Crack_List[i].Edge_List.length; j++){
      var point_1 = Crack_List[i].Edge_List[j].Point_List[0];
      var point_2 = Crack_List[i].Edge_List[j].Point_List[1];
	  var safetyDistance = 10;
	  var x2 = point_2.left;
	  var y2 = point_2.top;
	  var x1 = point_1.left;
	  var y1 = point_1.top;
	  var x0 = left;
	  var y0 = top;
	  var distance = (Math.abs((y2 - y1) * x0 +(x1 - x2) * y0 + ((x2 * y1) -(x1 * y2)))) / (Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x1 - x2, 2)));
	  if((distance <= (safetyDistance + 30))
		&&Math.abs((Math.abs(x1-x0)+Math.abs(x2-x0) - Math.abs(x2-x1))) <= 30 
		&&Math.abs((Math.abs(y1-y0)+Math.abs(y2-y0) - Math.abs(y2-y1))) <= 30){
		signal = true;
		hitLine.Point_List.push(point_1);
		hitLine.Point_List.push(point_2);
		return signal;
	  }
	}
  }
  if(Crack_List.length <= 0){
    return signal;
  }
}