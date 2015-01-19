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
  var program = _.contains([null, "USA"], stateView) ? programs.map.illness.age : "";
	$("#program").html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
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
