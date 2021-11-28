mapboxgl.accessToken =
	"pk.eyJ1IjoiYmxha2ViZWNrc3Ryb20iLCJhIjoiY2t3aW9rb29zMWFpbDJvcWo5cTNvejN5YSJ9.7Ih28TwCOPbgypr8Y1NY0A";
var map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/dark-v10",
	center: [-79.931053, 32.776474],
	zoom: 10,
});

var marker = new mapboxgl.Marker()
	.setLngLat([-79.931053, 32.776474])
	.addTo(map);
