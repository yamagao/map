/** County Area Coords, recommend tool for getting coords: http://www.birdtheme.org/useful/v3tool.html 
*** Author: Yiqi Gao
*** Date: July 16, 2015
**/
// Define the LatLng coordinates for the polygon's path.
var AlachuaCoords = [
	new google.maps.LatLng(29.821583,-82.647400),
	new google.maps.LatLng(29.933515,-82.534790),
	new google.maps.LatLng(29.835879,-82.114563),
	new google.maps.LatLng(29.709525,-82.051392),
	new google.maps.LatLng(29.444381,-82.062378),
	new google.maps.LatLng(29.499378,-82.196960),
	new google.maps.LatLng(29.504159,-82.551270),
	new google.maps.LatLng(29.547177,-82.556763),
	new google.maps.LatLng(29.547177,-82.655640)
];
var BradfordCoords = [
	new google.maps.LatLng(30.143940,-82.142029),
	new google.maps.LatLng(29.931135,-82.415314),
	new google.maps.LatLng(29.907329,-82.408447),
	new google.maps.LatLng(29.838261,-82.114563),
	new google.maps.LatLng(29.714296,-82.048645),
	new google.maps.LatLng(30.147502,-82.048645),
	new google.maps.LatLng(30.145127,-82.139282)
];

// Construct the polygon.
var Alachua = new google.maps.Polygon({
	paths: AlachuaCoords,
	strokeColor: '#D4886A',
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: '#FFC2AA',
	fillOpacity: 0.35
});
var Bradford = new google.maps.Polygon({
	paths: BradfordCoords,
	strokeColor: '#D4886A',
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: '#FFC2AA',
	fillOpacity: 0.35
});