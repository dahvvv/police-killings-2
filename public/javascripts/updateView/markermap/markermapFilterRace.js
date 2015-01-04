function updateMarkermapFilterRace(choosers){
	if ($('#race-selection').css('display') === "none"){
		$('#race-selection').css({"display":"block"});
	};
	readyWeightsToBeShown();
	$('#usPop-weight, #arrests-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateMarkermapFilterRaceWeightNone();
	} else if (choosers.weight === "usPop"){
		updateMarkermapFilterRaceWeightUspop();
	} else if (choosers.weight === "arrests"){
		updateMarkermapFilterRaceWeightArrests();
	}
};

function updateMarkermapFilterRaceWeightNone(){
	var data = dataFilterRaceWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: raceColors[obj.victim_race],
	    color: 'black',
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($('#popup-template').html());
	});
	var geoData = dataToGeoData(data);
	makeMarkermap(geoData);
	var program = "<p class='program-text two-line'>The racial distribution of people killed by police<br>in the United States.</p>";
	$('#program').html(program);
};

function updateMarkermapFilterRaceWeightUspop(){
	var data = dataFilterRaceWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: raceColors[obj.victim_race],
	    color: 'black',
	    radius: racePopweightToRadius(obj.victim_race),
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($('#popup-template').html());
	});
	var geoData = dataToGeoData(data);
	makeMarkermap(geoData);
	var program = "<p class='program-text two-line'>A map of police shootings by race,<br>scaled by US population.</p>";
	$('#program').html(program);
};

function updateMarkermapFilterRaceWeightArrests(){
	alert('where the fuck did this method go?');
};
