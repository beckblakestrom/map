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

// clusters
var map = L.mapbox
	.map("map")
	.setView([41.873941, -87.624225], 12)
	.addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v11"));

const markers = new L.MarkerClusterGroup();
const data = chicago.data;
const length = data.length;

for (let i = 0; i < length; i++) {
	const a = chicago.data[i];
	const title = a[13];
	const marker = L.marker(new L.LatLng(a[26], a[28]), {
		icon: L.mapbox.marker.icon({
			"marker-symbol": "post",
			"marker-color": "0044FF",
		}),
		title: title,
	});
	marker.bindPopup(title);
	markers.addLayer(marker);
}
map.addLayer(markers);
