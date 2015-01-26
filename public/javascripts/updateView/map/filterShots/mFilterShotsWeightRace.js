function updateMapFilterShotsWeightRace(){
	var data = dataFilterShotsWeightRace();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: raceColors[obj.victim_race],
	    color: "black",
	    radius: 9,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = setMapTemplate(obj, true);
	});
	var geoData = dataToGeoData(data);
	var stateView = $("#state-filter").val();
	setMapView(stateView, addGeoLayer, geoData);
	var program = programs.map.shots.race;
	setProgram(program, stateView);
};

function dataFilterShotsWeightRace(){
	var stateView = $("#state-filter").val();
 	var checkedRaces = checkRaces($("#race-weight-form"));
  checkedRaces = reorderRaces(checkedRaces);
  var arr = [];
  $.each(checkedRaces, function(i,race){
    var filtered = allKillings.filter(function(el){
    	if (el.shots_fired){
    		if (el.shots_fired >= shotsRange().min 
	    	&& el.shots_fired <= shotsRange().max){
	    		if (stateView === null 
	    		|| stateView === "USA"){
	    			return el.victim_race === race;
	    		} else {
		    		return el.victim_race === race 
		    		&& el.location_of_killing_state === stateView;
		    	};
	    	};
    	};
    });
    arr = arr.concat(filtered);
  });
  return arr;
};
