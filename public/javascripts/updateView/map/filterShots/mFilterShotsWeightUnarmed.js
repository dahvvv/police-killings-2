function updateMapFilterShotsWeightUnarmed(){
	var data = dataFilterShotsWeightUnarmed();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: unarmedColors[obj.victim_unarmed],
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
  var program = programs.map.shots.unarmed;
  setProgram(program, stateView);
};

function dataFilterShotsWeightUnarmed(){
	var stateView = $("#state-filter").val();
  var checkedUnarmed = checkUnarmed($("#unarmed-weight-form"));
  var formattedUnarmed = $.map(checkedUnarmed, function(val){
  	return val === "unarmed";
  });
  var arr = [];
  $.each(formattedUnarmed, function(i,unarmed){
    var filtered = allKillings.filter(function(el){
      if (el.shots_fired 
      && el.shots_fired >= shotsRange().min 
      && el.shots_fired <= shotsRange().max){
      	if (stateView === null 
    		|| stateView === "USA"){
    			return el.victim_unarmed === unarmed;
    		} else {
	    		return el.victim_unarmed === unarmed 
	    		&& el.location_of_killing_state === stateView;
	    	};
      };
    });
    arr = arr.concat(filtered);
  });
  return arr;
};
