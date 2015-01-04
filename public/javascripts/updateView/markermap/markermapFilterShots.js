function updateMarkermapFilterShots(choosers){
	if ($('#shots-range').css('display') === "none"){
		$('#shots-range').css({"display":"block"});
	};
	removeAllWeights();
	if (choosers.weight === "none"){
		updateMarkermapFilterShotsWeightNone();
	}
};

function updateMarkermapFilterShotsWeightNone(){
	var data = dataFilterShotsWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: 'red',
	    color: 'black',
	    radius: 9,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($('#shots-template').html());
	});
	var geoData = dataToGeoData(data);
	makeMarkermap(geoData);
	var program = "<p class='program-text one-line'>People who were shot at by the police twenty times or more.</p>";
	$('#program').html(program);
};
