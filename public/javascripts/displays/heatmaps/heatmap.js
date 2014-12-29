function setMapToStateView(state){
	alert('make setMapToStateView');
};

function makeHeatmap(data, choosers){
	var coords = [];
	var numDatapoints = data.length;
	data.forEach(function(elem, i){
    var lat = elem.lat;
    var lng = elem.lng;
    coords.push([lat,lng]);
  });
  while (map.hasLayer(geoLayer)) {
    map.removeLayer(geoLayer);
  };
  while (map.hasLayer(heatLayer)) {
    map.removeLayer(heatLayer);
  };
  var stateView = $('#state-filter').val();
  if (stateView === null || stateView === "USA"){
  	$('#display-and-selectors').animate({"height":"31em"},100);
    $('#program').animate({"height":"17%"},100);   
    map.setView([defaultLat,defaultLon],defaultZoom);
  } else {
  	$('#display-and-selectors').animate({"height":"31em"},100);
    $('#program').animate({"height":"17%"},500);   
    setMapToStateView(stateView);
  };
  heatLayer = L.heatLayer(coords, {
    radius: 27,
    gradient: selectGradient(stateView),
    maxZoom: setMaxZoom(numDatapoints,stateView),
    max: 1
  });
  if ($('#map-one').css('display') === "none") {
    // $('#infovis-canvaswidget').remove();
    // $('#map-one').slideToggle(750, function(e){
    //   heatLayer.addTo(map);
    // });
		alert('see commented out stuff and learn to replace graph with map');
  } else {
    heatLayer.addTo(map);
  }
};