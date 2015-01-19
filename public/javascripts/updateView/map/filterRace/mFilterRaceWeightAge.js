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
		var name = obj.victim_name;
		var age = obj.victim_age;
		var source = obj.source;
		var img = obj.url_victim_image;
		var description = obj.description;
		obj["template"] = img === null ? templateMapNoPic(name, age, source, description) : templateMap(name, age, source, img, description);
	});
	var geoData = dataToGeoData(data);
	var stateView = $("#state-filter").val();
	setMapView(stateView, addGeoLayer, geoData);
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
