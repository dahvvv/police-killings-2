function updateMapFilterRaceWeightAge(){
	var data = dataFilterRaceWeightAge();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: raceColors[obj.victim_race],
	    color: 'black',
	    radius: basicRadius(),
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($('#popup-template').html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var stateView = $("#state-filter").val();
	var program = _.contains([null, "USA"], stateView) ? programs.map.race.age : "";
	$('#program').html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function dataFilterRaceWeightAge(){
	var stateView = $("#state-filter").val();
	var checkedRaces = checkRaces($("#race-filter-form"));
	checkedRaces = reorderRaces(checkedRaces);
	var arr = [];
	$.each(checkedRaces, function(i,race){
    var filtered = allKillings.filter(function(el){
    	if (el.victim_age >= enteredAgeWRange().min 
    	&& el.victim_age <= enteredAgeWRange().max){
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
