


//alert("Have a nice day");



var piclist = new Array(6);
var locationlist = new Array(6);
var captionlist = new Array(6);

var fButtonListener;
var bButtonListener;

var whichPic = 0;
var numberOfPictures = 6;
var myVar;





window.onload = function() {

	

	piclist[0] = "images/service1.jpg";
	piclist[1] = "images/service2.jpg";
	piclist[2] = "images/service3.jpg";
	piclist[3] = "images/service4.jpg";
	piclist[4] = "images/service5.jpg";
	piclist[5] = "images/service6.jpg";
	


	locationlist[0] = "Location: Southborough,MA ";
	locationlist[1] = "Location: Southborough,MA";
	locationlist[2] = "Location: Southborough,MA";
	locationlist[3] = "Location: Southborough,MA";
	locationlist[4] = "Location: Dominican Republic";
	locationlist[5] = "Location: Southborough,MA";


	captionlist[0] = "St. Markers raking leaves for a local family";
	captionlist[1] = "St. Marker storing food for the homeless";
	captionlist[2] = "Past St. Markers, leaders and servicemen";
	captionlist[3] = "St. Markers working the Annual Special Olympics";
	captionlist[4] = "St. Markers prividing service beyond borders";
	captionlist[5] = "St. Markers in the classroom";

	whichPic = 0;



	document.getElementById("cap").innerHTML = captionlist[whichPic];
	document.getElementById("loc").innerHTML = locationlist[whichPic];
	document.getElementById("ImgBox").src = piclist[whichPic];


	fButtonListener = document.getElementById("forwardButton");
	bButtonListener = document.getElementById("backButton");




	fButtonListener.addEventListener('click', function(event) {
			
			
			++whichPic;
			if (whichPic >= piclist.length ){
				whichPic = 0;
			}
			document.getElementById("cap").innerHTML = captionlist[whichPic];
			document.getElementById("loc").innerHTML = locationlist[whichPic];
			document.getElementById("ImgBox").src = piclist[whichPic];
 
	});



	bButtonListener.addEventListener('click', function(event) {
			
			whichPic = whichPic - 1;
			if(whichPic < 0){
				whichPic = piclist.length-1;
			}
		document.getElementById("cap").innerHTML = captionlist[whichPic];
		document.getElementById("loc").innerHTML = locationlist[whichPic];
		document.getElementById("ImgBox").src = piclist[whichPic];
	});


};




function setPicture(){

	var rndNum = Math.floor(Math.random()*numberOfPictures);
	var picName = "images/service" + rndNum + ".jpg"

	$('#ImgBox').attr("src", picName );

	
}

$(document).ready(function(){
   
     

	myVar = setInterval(setPicture, 3000);


});



