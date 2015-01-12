function updateMapFilterIllnessWeightAge(){
	filterIllnessLegendRegStyle();
	$("#illness-filter-form").show();
	var data = dataFilterIllnessWeightAge();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: illnessColors[obj.symptoms_of_mental_illness],
	    color: "black",
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($("#popup-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = "<p class='program-text two-line'>Illness!<br>Age!</p>";
	$("#program").html(program);
};

function dataFilterIllnessWeightAge(){
	var checkedIllness = checkIllness($("#illness-filter-form"));
  formattedIllness = $.map(checkedIllness, function(val){
  	return formatCI[val];
  });
  var arr = [];
  $.each(formattedIllness, function(i,illness){
    var filtered = allKillings.filter(function(el){
    	if (el.victim_age >= enteredAgeWRange().min 
    	&& el.victim_age <= enteredAgeWRange().max){
    		return el.symptoms_of_mental_illness === illness;
    	};
    });
    arr = arr.concat(filtered);
  });
  return arr;
};
