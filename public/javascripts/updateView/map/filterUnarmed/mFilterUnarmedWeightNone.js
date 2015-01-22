function updateMapFilterUnarmedWeightNone(){
	var data = dataFilterUnarmedWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: unarmedColors[obj.victim_unarmed],
	    color: "black",
	    radius: basicRadius(),
	    fillOpacity: 1,
	    opacity: 1,
		};
		var name = obj.victim_name;
		var age = obj.victim_age;
		var source = obj.source;
		var img = obj.url_victim_image;
		var description = obj.description;
		obj["template"] = img === null ? templateMapNoPic(name, age, source, description) : templateMap(name, age, source, img, description);
	});
	var geoData = dataToGeoData(data);
	var stateView = $("#state-filter").val();
	setMapView(stateView, addGeoLayer, geoData);
	var program = programs.map.unarmed.none;
	setProgram(program, stateView);
};

