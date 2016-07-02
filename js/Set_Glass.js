var glasstype;

function setglass1(){
	glasstype = 1;
	$("#choose_fence").remove();
	//$("#choose_crack").show();
	dragonStartMove();
}
function setglass2(){
	glasstype = 2;
	$("#choose_fence").remove();
	$("#cover_content").attr("src", "images/glass2.png");
	//$("#choose_crack").show();
	dragonStartMove();
}
function dragonStartMove(){
	$("#cover").fadeIn();
	$("#dragon").show();
	//alert("ddd");
	if (glasstype==1) {
	window.location.href='./GamePlaying2.html'};
	if (glasstype==2) {window.location.href='./GamePlaying3.html'};
	//animateDiv();
}