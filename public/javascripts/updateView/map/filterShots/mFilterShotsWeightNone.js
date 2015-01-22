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
		var name = obj.victim_name;
		var age = obj.victim_age;
		var source = obj.source;
		var img = obj.url_victim_image;
		var description = obj.description;
		var shots = obj.shots_fired;
		obj["template"] = img === null ? templateMapShotsNoPic(name, age, source, description, shots) : templateMapShots(name, age, source, img, description, shots);
	});
	var geoData = dataToGeoData(data);
	var stateView = $("#state-filter").val();
	setMapView(stateView, addGeoLayer, geoData);
	var programIntro = programIntroMapShots(data);
  var programBody = programs.map.shots.none;
  var program = programIntro + programBody;
	setProgram(program, stateView);
};
