function updateMapFilterIllnessWeightRace(){
	var data = dataFilterIllnessWeightRace();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: illnessColors[obj.symptoms_of_mental_illness],
	    color: "black",
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
	    // weight: 4,
		};
		obj["template"] = _.template($("#popup-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = "<p class='program-text two-line'>People killed by the police while exhibiting clear signs of mental illness.<br>(select boxes on the left to see no signs, or both).</p>";
	$("#program").html(program);
};

function dataFilterIllnessWeightRace(){
  var checkedRaces = checkRaces($("#race-weight-form"));
  checkedRaces = reorderRaces(checkedRaces);
  var checkedIllness = checkIllness($("#illness-filter-form"));
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

var formatCI = {
	"ill": "yes",
	"not-ill": "no"
};
