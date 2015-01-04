function updateMarkermapFilterUnarmed(choosers){
	if ($('#unarmed-selection').css('display') === "none"){
		$('#unarmed-selection').css({"display":"block"});
	};
	removeAllWeights();
	var checkedUnarmed = checkUnarmed();
	if (choosers.weight === "none"){
		updateMarkermapFilterUnarmedWeightNone(checkedUnarmed);
	}
};

function updateMarkermapFilterUnarmedWeightNone(checkedUnarmed){
	var data = dataFilterUnarmedWeightNone(checkedUnarmed);
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: unarmedColors[obj.victim_unarmed],
	    color: 'black',
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($('#popup-template').html());
	});
	var geoData = dataToGeoData(data);
	makeMarkermap(geoData);
	var program = "<p class='program-text two-line'>People killed by the police while they were unarmed<br>(select boxes on the left to see armed, or both).</p>";
	$('#program').html(program);
};
