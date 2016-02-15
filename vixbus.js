window.onload = function() {
	// Configure map layer from open street map
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 20, attribution: osmAttrib});		

	// Instanciate map object and add map layer from osm
	var map = L.map('map');
	map.addLayer(osm);

	// Centralize map to city view
	var zoom = 14;
	var latitude = -20.3010;
	var longitude = -40.2934;
	map.setView(new L.LatLng(latitude,longitude),zoom);	
}


