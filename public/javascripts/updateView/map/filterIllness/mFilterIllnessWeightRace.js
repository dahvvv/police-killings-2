function updateMapFilterIllnessWeightRace(){
	filterWeightLegendToWeightRace($("#illness-filter-form").children(".legend"));
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
	var program = "<p class='program-text two-line'>People killed by the police while exhibiting clear signs of mental illness.<br>(select boxes on the left to see no signs, or both).</p>";
	$("#program").html(program);
};

function filterWeightLegendToWeightRace(legend){
	var illR = Math.ceil(illnessRadius["yes"]*1.5) + "px";
	var notIllR = Math.ceil(illnessRadius["no"]*1.5) + "px";
	legend.css({"background":"transparent"});
	$(legend[0]).css({"width":illR,"height":illR});
	$(legend[1]).css({"width":notIllR,"height":notIllR});
	$("button").on("click", filterWeightLegendFromWeightRace);
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

// var illnessBorderColors = {
//   "yes" : "black",
//   "no"  : "black", 
// };

var illnessRadius = {
  "yes" : 14,
  "no"  : 6, 
};

// var illnessWeight = {
//   "yes" : 4,
//   "no"  : 1, 
// };
