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
		obj["template"] = _.template($("#shots-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var programIntro = programIntroMapShots(data);
	var programBody = programs.map.shots.none;
	$("#program").html(programIntro + programBody);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};
