// check whether the web browser support the geolocation
function lookup_location(){
	if(navigator.geolocation){
		document.getElementById("support").innerHTML = "HTML5 Geolocation supported.";
		navigator.geolocation.getCurrentPosition(show_map, show_map_error, {enableHighAccuracy:true, timeout: 100000, maximumAge: 5000}); 
		// in order to keep GPS used only: enableHighAccuracy: true
		// whether to keep the user's location for a long time, or just to update the location every time: adjust "maximumAge", now: every 5 seconds, the location of the user will be kept for 5 seconds
		}
	else {
		document.getElementById("support").innerHTML = "HTML5 Geolocation is not suppoerted in your browser.";
	}
}
		
/*
The heading and speed properties are calculated based on the user’s previous position, I think it is related to the value of maximumAge
*/
function show_map(loc){
	var latitude = loc.coords.latitude;
	var longitude = loc.coords.longitude;
	var accuracy = loc.coords.accuracy;
	var heading = loc.coords.heading;
	var speed = loc.coords.speed;
	var altitude = loc.coords.altitude;
	var altitudeAccuracy = loc.coords.altitudeAccuracy;	

	document.getElementById("latitude").innerHTML = latitude;
	document.getElementById("longitude").innerHTML = longitude;
	document.getElementById("accuracy").innerHTML = "This location is accurate within " + accuracy + " meters.";
	document.getElementById("heading").innerHTML = "The direction is " + heading + " degrees clockwise from true north";
	document.getElementById("speed").innerHTML = "The speed is " + speed + " meters/second";
	document.getElementById("altitude").innerHTML = "The altitude is " + altitude + " meters above the reference ellipsoid";			
	document.getElementById("altitudeAccuracy").innerHTML = "The altitude accuracy is " + altitudeAccuracy + " meters";
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
