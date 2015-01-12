function updateMapFilterRaceWeightAge(){
	var data = dataFilterRaceWeightAge();
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
	makeMap(geoData);
	var program = "<p class='program-text two-line'>A map of police shootings by race,<br>scaled by US population.</p>";
	$('#program').html(program);
};

function dataFilterRaceWeightAge(){
	var checkedRaces = checkRaces($("#race-filter-form"));
	checkedRaces = reorderRaces(checkedRaces);
	var arr = [];
	$.each(checkedRaces, function(i,race){
    var filtered = allKillings.filter(function(el){
    	if (el.victim_age >= enteredAgeWRange().min 
    	&& el.victim_age <= enteredAgeWRange().max){
    		return el.victim_race === race;
    	};
    });
    arr = arr.concat(filtered);
  });
  return arr;
};
