function updateMapFilterUnarmedWeightShots(){
	var data = dataFilterUnarmedWeightShots();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: unarmedColors[obj.victim_unarmed],
	    color: "black",
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($("#shots-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = "<p class='program-text one-line'>Unarmed weight shots.</p>";
	$("#program").html(program);
};

function dataFilterUnarmedWeightShots(){
	var checkedUnarmed = checkUnarmed($("#unarmed-filter-form"));
	var arr = [];
  $.each(checkedUnarmed, function(i,val){
    var filtered = allKillings.filter(function(el){
      if (val === "armed"){
        if (el.victim_unarmed === false){
        	return el.shots_fired >= shotsRange().min 
        	&& el.shots_fired <= shotsRange().max;
        };
      } else if (val === "unarmed"){
        if (el.victim_unarmed === true){
        	return el.shots_fired >= shotsRange().min 
        	&& el.shots_fired <= shotsRange().max;
        };
      }
    });
    arr = arr.concat(filtered);
  });
  return arr;
};
