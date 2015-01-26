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
		obj["template"] = setMapTemplate(obj);
	});
	var geoData = dataToGeoData(data);
	var stateView = $("#state-filter").val();
	setMapView(stateView, addGeoLayer, geoData);
	var program = programs.map.race.illness;
	setProgram(program, stateView);
};

function dataFilterRaceWeightIllness(){
	var stateView = $("#state-filter").val();
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
    		if (stateView === null || stateView === "USA"){
	        return el.victim_race === race;
	      } else {
	        return el.victim_race === race && el.location_of_killing_state === stateView;
	      };
    	};
    });
    arr = arr.concat(filtered);
  });
  return arr;
};
