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
		obj["template"] = _.template($("#shots-race-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	// var program = function(){
	// 	var min = shotsRange().min;
	// 	var max = shotsRange().max;
	// 	if (min === 0){
	// 		if (max === 999){
	// 			return "<p class='program-text one-line'>All cases in which the number of shots fired by police was recorded.</p>";
	// 		} else {
	// 			return "<p class='program-text two-line'>Police fired at a victim " + max + " times or fewer<br>in " + data.length + " recorded cases.</p>";
	// 		};
	// 	} else {
	// 		if (max === 999){
	// 			return "<p class='program-text two-line'>Police fired at a victim " + min + " times or more<br>in " + data.length + " recorded cases.</p>";
	// 		} else {
	// 			return "<p class='program-text two-line'>Police fired at a victim between " + min + " and " + max + " times<br>in " + data.length + " recorded cases.</p>";
	// 		};
	// 	};
	// };
	var program = programs.map.shots.race;
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
