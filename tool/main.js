/** Map with florida and county areas: hover to show county name, click to show marker and infoWindow with extension info 
*** Author: Yiqi Gao
*** Last Modified: July 20, 2015
**/
var Center = new google.maps.LatLng(0,0);
var map;
var markerF = null;
var poly;
function initialize() {
	// Create the map
	var mapOptions = {
		zoom: 3,
		center: Center,
		draggableCursor: 'crosshair',
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	//ploy setting
	var polyOptions = {
		strokeColor: '#ff0000',
		strokeOpacity: 0.8,
		strokeWeight: 2
	  };
	poly = new google.maps.Polyline(polyOptions);
	poly.setMap(map);
	
	//click on the map to pop "new google.maps.LatLng(,)" on the right
	google.maps.event.addListener(map, 'click', function(event){
		var path = poly.getPath();

		// Because path is an MVCArray, we can simply append a new coordinate
		// and it will automatically appear.
		path.push(event.latLng);

		// Add a new marker at the new plotted point on the polyline.
		var marker = new google.maps.Marker({
			position: event.latLng,
			title: '#' + path.getLength()
		});
		if(markerF == null){
			markerF = marker;
			markerF.setMap(map);
		}
		
		//show code on clipboard
		var div = document.getElementById('clipboard');
		var pre = document.getElementById('pre').value;
		div.innerHTML = div.innerHTML + "new google.maps.LatLng(" + event.latLng.lat().toFixed(pre) + ',' + event.latLng.lat().toFixed(pre) + '),<br>';
		document.getElementById('pre').value = pre;
	});	
}
function reset(){
	document.getElementById('clipboard').innerHTML='';
	var path = poly.getPath();
	while(path.length > 0) {
		path.pop();
	}
	markerF.setMap(null);
	markerF = null;	
}
google.maps.event.addDomListener(window, 'load', initialize);