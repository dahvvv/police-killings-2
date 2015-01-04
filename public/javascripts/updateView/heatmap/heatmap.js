function updateHeatmap(choosers){
	$('.legend').css({"display":"none"});
	removeAllWeights();
	selectHeatmapFilter(choosers);
};

function selectHeatmapFilter(choosers){
	if (choosers.filter === "usPop"){
		updateHeatmapFilterUspop(choosers);
	} else if (choosers.filter === "race"){
		updateHeatmapFilterRace(choosers);
	} else if (choosers.filter === "age"){
		updateHeatmapFilterAge(choosers);
	} else if (choosers.filter === "gender"){
		updateHeatmapFilterGender(choosers);
	} else if (choosers.filter === "unarmed"){
		updateHeatmapFilterUnarmed(choosers);
	} else if (choosers.filter === "illness"){
		updateHeatmapFilterIllness(choosers);
	} else if (choosers.filter === "shots"){
		updateHeatmapFilterShots(choosers);
	};
};

function makeHeatmap(data){
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
