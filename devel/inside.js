function lookup_location(){
	if(navigator.geolocation){
		document.getElementById("support").innerHTML = "HTML5 Geolocation supported.";
		navigator.geolocation.getCurrentPosition(show_map, show_map_error, {timeout: 5000});
		//navigator.geolocation.watchPosition(show_map, show_map_error, {timeout: 5000});
		
		}
	else {
		document.getElementById("support").innerHTML = "HTML5 Geolocation is not suppoerted in your browser.";
	}
}
		
function show_map(loc){
	var latitude = loc.coords.latitude;
	var longitude = loc.coords.longitude;
	var accuracy = loc.coords.accuracy;
	
	document.getElementById("latitude").innerHTML = latitude;
	document.getElementById("longitude").innerHTML = longitude;
	document.getElementById("accuracy").innerHTML = "This location is accurate within " + accuracy + " meters."
	//navigator.geolocation.watchPosition(refres);
}
		
function show_map_error(err){
	if (err.code == 1){
		alert("Permission denied");
		// PERMISSION_DENIED
		// user said no
	}
	else if (err.code == 2){
		alert("Position unavailable");
		// POSITION_UNAVAILABLE
		// position is unknown
	}
	else if (err.code == 3){
		alert("Time out");
		// TIMEOUT
		// the connection time is out
	}
	else if (err.code == 0){
		alert("Unknow error");
		// UNKNOWN_ERROR
		// if anything else goes wrong
	}
}	
//function refreshPosition(){
			
		//}