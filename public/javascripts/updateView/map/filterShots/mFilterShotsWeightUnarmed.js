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
	var program = function(){
		var min = shotsRange().min;
		var max = shotsRange().max;
		if (min === 0){
			if (max === 999){
				return "<p class='program-text one-line'>All cases in which the number of shots fired by police was recorded.</p>";
			} else {
				return "<p class='program-text two-line'>Police fired at a victim " + max + " times or fewer<br>in " + data.length + " recorded cases.</p>";
			};
		} else {
			if (max === 999){
				return "<p class='program-text two-line'>Police fired at a victim " + min + " times or more<br>in " + data.length + " recorded cases.</p>";
			} else {
				return "<p class='program-text two-line'>Police fired at a victim between " + min + " and " + max + " times<br>in " + data.length + " recorded cases.</p>";
			};
		};
	};
	$("#program").html(program);
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
