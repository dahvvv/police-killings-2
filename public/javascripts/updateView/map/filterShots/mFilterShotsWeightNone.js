function updateMapFilterShotsWeightNone(){
	var data = dataFilterShotsWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: "red",
	    color: "black",
	    radius: 9,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($("#shots-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var programIntro = programIntroMapShotsNone(data);
	var programBody = programs.map.shots.none;
	$("#program").html(programIntro + programBody);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function programIntroMapShotsNone(data){
	var min = shotsRange().min;
	var max = shotsRange().max;
	var timeTimes = max === 1 ? "time" : "times";
	if (min === 0){
		if (max === 999){
			return "<p>All cases in which the number of shots fired by police was recorded.</p>";
		} else {
			return "<p class='three-line-opener'>Police have killed someone<br />by shooting " + max + " " + timeTimes + " or fewer<br />in " + data.length + " recorded cases.</p>";
		};
	} else {
		if (max === 999){
			return "<p class='three-line-opener'>Police have killed someone<br />by shooting " + min + " or more times<br />in " + data.length + " recorded cases.</p>";
		} else {
			return "<p class='three-line-opener'>Police have killed someone<br />by shooting between " + min + " and " + max + " times<br />in " + data.length + " recorded cases.</p>";
		};
	};
};
