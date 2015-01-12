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
		obj["template"] = _.template($("#shots-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = programs.map.unarmed.shots;
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
