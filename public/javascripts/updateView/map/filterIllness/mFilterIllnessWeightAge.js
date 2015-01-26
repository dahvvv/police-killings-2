function updateMapFilterIllnessWeightAge(){
	filterIllnessLegendRegStyle();
	$("#illness-filter-form").show();
	var data = dataFilterIllnessWeightAge();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: illnessColors[obj.symptoms_of_mental_illness],
	    color: "black",
	    radius: basicRadius(),
	    fillOpacity: 1,
	    opacity: 1,
		};
    obj["template"] = setMapTemplate(obj);
	});
	var geoData = dataToGeoData(data);
	var stateView = $("#state-filter").val();
  setMapView(stateView, addGeoLayer, geoData);
  var program = programs.map.illness.age;
  setProgram(program, stateView);
};

function dataFilterIllnessWeightAge(){
	var stateView = ($("#state-filter").val());
	var checkedIllness = checkIllness($("#illness-filter-form"));
  var formattedIllness = $.map(checkedIllness, function(val){
  	return formatCI[val];
  });
  var arr = [];
  $.each(formattedIllness, function(i,illness){
    var filtered = allKillings.filter(function(el){
    	if (el.victim_age >= enteredAgeWRange().min 
    	&& el.victim_age <= enteredAgeWRange().max){
    		if (stateView === null || stateView === "USA"){
    			return el.symptoms_of_mental_illness === illness;
    		} else {
    			return el.symptoms_of_mental_illness === illness && el.location_of_killing_state === stateView;
    		};    		
    	};
    });
    arr = arr.concat(filtered);
  });
  return arr;
};
