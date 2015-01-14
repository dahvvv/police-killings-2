function updateMapFilterIllnessWeightRace(){
	filterIllnessLegendAltStyle($("#illness-filter-form").children(".legend"));
	$("#illness-filter-form").show();
	var data = dataFilterIllnessWeightRace();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: raceColors[obj.victim_race],
	    color: "black",
	    radius: illnessRadius[obj.symptoms_of_mental_illness],
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($("#popup-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
  var stateView = $("#state-filter").val();
  var program = _.contains([null, "USA"], stateView) ? programs.map.illness.race : "";
	$("#program").html(program);
  $(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function dataFilterIllnessWeightRace(){
	var stateView = ($("#state-filter").val());
  var checkedRaces = checkRaces($("#race-weight-form"));
  checkedRaces = reorderRaces(checkedRaces);
  var checkedIllness = checkIllness($("#illness-filter-form"));
  var formattedIllness = $.map(checkedIllness, function(val){
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
