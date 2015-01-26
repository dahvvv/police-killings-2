function updateMapFilterUnarmedWeightShots(){
	var data = dataFilterUnarmedWeightShots();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: unarmedColors[obj.victim_unarmed],
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
	var program = programs.map.unarmed.shots;
	setProgram(program, stateView);
};

function dataFilterUnarmedWeightShots(){
	var stateView = ($("#state-filter").val());
	var checkedUnarmed = checkUnarmed($("#unarmed-filter-form"));
	var formattedUnarmed = $.map(checkedUnarmed, function(val){
    return val === "unarmed";
  });
	var arr = [];
  $.each(formattedUnarmed, function(i,val){
    var filtered = allKillings.filter(function(el){
    	if (el.shots_fired >= shotsWRange().min 
    	&& el.shots_fired <= shotsWRange().max){
    		if (stateView === null 
    		|| stateView === "USA"){
    			return el.victim_unarmed === val;
    		} else {
    			return el.victim_unarmed === val && el.location_of_killing_state === stateView;
    		};
    	};
    });
    arr = arr.concat(filtered);
  });
  return arr;
};
