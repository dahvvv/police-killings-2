function updateMapFilterIllnessWeightNone(){
	filterIllnessLegendRegStyle();
	$("#illness-filter-form").show();
	var data = dataFilterIllnessWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: illnessColors[obj.symptoms_of_mental_illness],
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
  var program = _.contains([null, "USA"], stateView) ? programs.map.illness.none : "";
	$("#program").html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

