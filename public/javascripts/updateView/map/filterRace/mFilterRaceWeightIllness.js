function updateMapFilterRaceWeightIllness(){
	filterIllnessLegendAltStyle($("#illness-weight-form").children(".legend"));
	var data = dataFilterRaceWeightIllness();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: raceColors[obj.victim_race],
	    color: 'black',
	    radius: illnessRadius[obj.symptoms_of_mental_illness],
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($('#popup-template').html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = "<p class='program-text two-line'>A map of police shootings by race,<br>scaled by US population.</p>";
	$('#program').html(program);
};

function dataFilterRaceWeightIllness(){
	var checkedRaces = checkRaces($("#race-filter-form"));
	checkedRaces = reorderRaces(checkedRaces);
	var checkedIllness = checkIllness($("#illness-weight-form"));
  formattedIllness = $.map(checkedIllness, function(val){
  	return formatCI[val];
  });
	var arr = [];
	$.each(checkedRaces, function(i,race){
    var filtered = allKillings.filter(function(el){
			if (_.contains(formattedIllness, el.symptoms_of_mental_illness)){
    		return el.victim_race === race;
    	};
    });
    arr = arr.concat(filtered);
  });
  return arr;
};