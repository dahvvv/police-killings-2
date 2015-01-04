function updateMarkermapFilterUspop(choosers){
	if (choosers.weight === "none"){
		updateMarkermapFilterUspopWeightNone();
	};
	removeAllWeights();
};

function updateMarkermapFilterUspopWeightNone(){
	var data = allKillings;
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: 'red',
	    color: 'black',
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($('#popup-template').html());
	});
	var geoData = dataToGeoData(data);
	makeMarkermap(geoData);
	var program = "<p class='program-text one-line'>Click on a dot or zoom in for more information.</p>";
	$('#program').html(program);
};
