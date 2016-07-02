function changeDirection(top, left){
  var oldq = $('#dragon').offset();
  //why 64 59?
  var y1 = oldq.top + 64;
  var x1 = oldq.left + 59;
  var y2 = top;
  var x2 = left;
  var distance = Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
  if(distance <= 100){
    return true;
  }
  return false;
}