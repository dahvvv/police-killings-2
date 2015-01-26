function updateMapFilterShotsWeightNone(){
	var data = dataFilterShotsWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: "red",
	    color: "black",
	    radius: 9,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = setMapTemplate(obj, true);
	});
	var geoData = dataToGeoData(data);
	var stateView = $("#state-filter").val();
	setMapView(stateView, addGeoLayer, geoData);
	var programIntro = programIntroMapShots(data);
  var programBody = programs.map.shots.none;
  var program = programIntro + programBody;
	setProgram(program, stateView);
};
