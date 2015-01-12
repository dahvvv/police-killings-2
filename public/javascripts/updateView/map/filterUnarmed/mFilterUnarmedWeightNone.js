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
		obj["template"] = _.template($("#popup-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = programs.map.unarmed.none;
	$("#program").html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

