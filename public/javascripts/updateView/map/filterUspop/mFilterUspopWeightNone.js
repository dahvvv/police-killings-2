function updateMapFilterUspopWeightNone(){
	var data = dataFilterUspopWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: "red",
	    color: "black",
	    radius: basicRadius(),
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($("#popup-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = programs.map.usPop.none;
	$("#program").html(program);
	$("#up-arrow").on("click", function(){
    window.scrollTo(0, 0);
  });
};
