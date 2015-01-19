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
	var program = _.contains([null, "USA"], stateView) ? programs.map.unarmed.shots : "";
	$("#program").html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
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
