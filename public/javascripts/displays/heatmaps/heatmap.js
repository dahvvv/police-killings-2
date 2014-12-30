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
  removeExistingMaps();
  var stateView = $('#state-filter').val();
  setMapView(stateView);
  heatLayer = L.heatLayer(coords, {
    radius: 27,
    gradient: selectGradient(stateView),
    maxZoom: setMaxZoom(numDatapoints,stateView),
    max: 1
  });
  if ($('#map-one').css('display') === "none") {
    $('#display-container-canvaswidget').remove();
    $('#map-one').slideToggle(750, function(e){
      heatLayer.addTo(map);
    });
  } else {
    heatLayer.addTo(map);
  };
};