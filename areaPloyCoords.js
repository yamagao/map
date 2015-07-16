/** County Area Coords, recommend tool for getting coords: http://www.birdtheme.org/useful/v3tool.html 
*** Author: Yiqi Gao
*** Date: July 16, 2015
**/
// Define the LatLng coordinates for the polygon's path.
var FloridaCoords = [
	new google.maps.LatLng(30.9988, -87.6050),
	new google.maps.LatLng(30.9964, -86.5613),
	new google.maps.LatLng(31.0035, -85.5313),
	new google.maps.LatLng(31.0012, -85.1193),
	new google.maps.LatLng(31.0023, -85.0012),
	new google.maps.LatLng(30.9364, -84.9847),
	new google.maps.LatLng(30.8845, -84.9367),
	new google.maps.LatLng(30.8409, -84.9271),
	new google.maps.LatLng(30.7902, -84.9257),
	new google.maps.LatLng(30.7489, -84.9147),
	new google.maps.LatLng(30.6993, -84.8611),
	new google.maps.LatLng(30.6911, -84.4272),
	new google.maps.LatLng(30.6509, -83.5991),
	new google.maps.LatLng(30.5895, -82.5595),
	new google.maps.LatLng(30.5682, -82.2134),
	new google.maps.LatLng(30.5315, -82.2134),
	new google.maps.LatLng(30.3883, -82.1997),
	new google.maps.LatLng(30.3598, -82.1544),
	new google.maps.LatLng(30.3598, -82.0638),
	new google.maps.LatLng(30.4877, -82.0226),
	new google.maps.LatLng(30.6308, -82.0473),
	new google.maps.LatLng(30.6757, -82.0514),
	new google.maps.LatLng(30.7111, -82.0377),
	new google.maps.LatLng(30.7371, -82.0514),
	new google.maps.LatLng(30.7678, -82.0102),
	new google.maps.LatLng(30.7914, -82.0322),
	new google.maps.LatLng(30.7997, -81.9717),
	new google.maps.LatLng(30.8244, -81.9608),
	new google.maps.LatLng(30.8056, -81.8893),
	new google.maps.LatLng(30.7914, -81.8372),
	new google.maps.LatLng(30.7796, -81.7960),
	new google.maps.LatLng(30.7536, -81.6696),
	new google.maps.LatLng(30.7289, -81.6051),
	new google.maps.LatLng(30.7324, -81.5666),
	new google.maps.LatLng(30.7229, -81.5295),
	new google.maps.LatLng(30.7253, -81.4856),
	new google.maps.LatLng(30.7111, -81.4609),
	new google.maps.LatLng(30.7088, -81.4169),
	new google.maps.LatLng(30.7064, -81.2274),
	new google.maps.LatLng(30.4345, -81.2357),
	new google.maps.LatLng(30.3160, -81.1725),
	new google.maps.LatLng(29.7763, -81.0379),
	new google.maps.LatLng(28.8603, -80.5861),
	new google.maps.LatLng(28.4771, -80.3650),
	new google.maps.LatLng(28.1882, -80.3815),
	new google.maps.LatLng(27.1789, -79.9255),
	new google.maps.LatLng(26.8425, -79.8198),
	new google.maps.LatLng(26.1394, -79.9118),
	new google.maps.LatLng(25.5115, -79.9997),
	new google.maps.LatLng(24.8802, -80.3815),
	new google.maps.LatLng(24.5384, -80.8704),
	new google.maps.LatLng(24.3959, -81.9250),
	new google.maps.LatLng(24.4496, -82.2066),
	new google.maps.LatLng(24.5484, -82.3137),
	new google.maps.LatLng(24.6982, -82.1997),
	new google.maps.LatLng(25.2112, -81.3977),
	new google.maps.LatLng(25.6019, -81.4622),
	new google.maps.LatLng(25.9235, -81.9456),
	new google.maps.LatLng(26.3439, -82.2876),
	new google.maps.LatLng(26.9098, -82.5307),
	new google.maps.LatLng(27.3315, -82.8342),
	new google.maps.LatLng(27.7565, -83.0182),
	new google.maps.LatLng(28.0574, -83.0017),
	new google.maps.LatLng(28.6098, -82.8548),
	new google.maps.LatLng(28.9697, -83.0264),
	new google.maps.LatLng(29.0478, -83.2050),
	new google.maps.LatLng(29.4157, -83.5318),
	new google.maps.LatLng(29.9133, -83.9767),
	new google.maps.LatLng(29.8930, -84.1072),
	new google.maps.LatLng(29.6940, -84.4409),
	new google.maps.LatLng(29.4551, -85.0465),
	new google.maps.LatLng(29.4946, -85.3610),
	new google.maps.LatLng(29.7262, -85.5807),
	new google.maps.LatLng(30.1594, -86.1946),
	new google.maps.LatLng(30.2175, -86.8510),
	new google.maps.LatLng(30.1499, -87.5171),
	new google.maps.LatLng(30.3006, -87.4429),
	new google.maps.LatLng(30.4256, -87.3750),
	new google.maps.LatLng(30.4830, -87.3743),
	new google.maps.LatLng(30.5658, -87.3907),
	new google.maps.LatLng(30.6344, -87.4004),
	new google.maps.LatLng(30.6763, -87.4141),
	new google.maps.LatLng(30.7702, -87.5253),
	new google.maps.LatLng(30.8527, -87.6256),
	new google.maps.LatLng(30.9470, -87.5912),
	new google.maps.LatLng(30.9682, -87.5912),
	new google.maps.LatLng(30.9964, -87.6050)
];
var countyCoords = {	
	"counties": [
		{"name": "Alachua", "coords": [
			new google.maps.LatLng(29.821583,-82.647400),
			new google.maps.LatLng(29.933515,-82.534790),
			new google.maps.LatLng(29.835879,-82.114563),
			new google.maps.LatLng(29.709525,-82.051392),
			new google.maps.LatLng(29.444381,-82.062378),
			new google.maps.LatLng(29.499378,-82.196960),
			new google.maps.LatLng(29.504159,-82.551270),
			new google.maps.LatLng(29.547177,-82.556763),
			new google.maps.LatLng(29.547177,-82.655640)
		]}
		,
		{"name": "Bradford", "coords": [
			new google.maps.LatLng(30.143940,-82.142029),
			new google.maps.LatLng(29.931135,-82.415314),
			new google.maps.LatLng(29.907329,-82.408447),
			new google.maps.LatLng(29.838261,-82.114563),
			new google.maps.LatLng(29.714296,-82.048645),
			new google.maps.LatLng(30.147502,-82.048645),
			new google.maps.LatLng(30.145127,-82.139282)
		]}
	]
}

// Construct the polygon.
var Florida = new google.maps.Polygon({
	paths: FloridaCoords,
	strokeColor: '#D4886A',
	strokeOpacity: 0.8,
	strokeWeight: 4,
	fillColor: '#FFC2AA',
	fillOpacity: 0.1
});
var Alachua = new google.maps.Polygon({
	paths: countyCoords.counties[0].coords,
	strokeColor: '#D4886A',
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: '#FFC2AA',
	fillOpacity: 0.2
});
var Bradford = new google.maps.Polygon({
	paths: countyCoords.counties[1].coords,
	strokeColor: '#D4886A',
	strokeOpacity: 0.8,
	strokeWeight: 2,
	fillColor: '#FFC2AA',
	fillOpacity: 0.2
});