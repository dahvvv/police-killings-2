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
		var name = obj.victim_name;
		var age = obj.victim_age;
		var source = obj.source;
		var img = obj.url_victim_image;
		var description = obj.description;
		var shots = obj.shots_fired;
		obj["template"] = img === null ? templateMapShotsNoPic(name, age, source, description, shots) : templateMapShots(name, age, source, img, description, shots);
	});
	var geoData = dataToGeoData(data);
	var stateView = $("#state-filter").val();
	setMapView(stateView, addGeoLayer, geoData);
  var program = _.contains([null, "USA"], stateView) ? programs.map.shots.race : "";
	$("#program").html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
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
