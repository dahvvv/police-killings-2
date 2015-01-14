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
		obj["template"] = _.template($("#shots-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
  var stateView = $("#state-filter").val();
  var program = _.contains([null, "USA"], stateView) ? programs.map.shots.unarmed : "";
	$("#program").html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
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
