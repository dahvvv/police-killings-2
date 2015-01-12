function updateMapFilterUnarmedWeightNone(){
	var data = dataFilterUnarmedWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: unarmedColors[obj.victim_unarmed],
	    color: "black",
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($("#popup-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = "<p class='program-text two-line'>People killed by the police while they were unarmed<br>(select boxes on the left to see armed, or both).</p>";
	$("#program").html(program);
};