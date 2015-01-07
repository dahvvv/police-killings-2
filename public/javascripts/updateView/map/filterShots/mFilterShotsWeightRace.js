function updateMapFilterShotsWeightRace(){
	var data = dataFilterShotsWeightRace();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: 'red',
	    color: 'black',
	    radius: 9,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($('#shots-template').html());
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
	$('#program').html(program);
};
