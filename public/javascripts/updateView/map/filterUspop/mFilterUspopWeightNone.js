function updateMapFilterUspopWeightNone(){
	var data = allKillings;
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: "red",
	    color: "black",
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($("#popup-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = "<p>Every dot on this map represents a person who was killed by police.</p><p><div id='down-arrow' style='margin-top:5%'></div></p><p>You can click on a dot to learn more about that person.</p><img src='http://i.imgur.com/A9aRIgN.png' /><p>Once you've clicked a dot,<br>then clicking on the blue 'source' link<br>will lead to an article about that person.<p><img src='http://i.imgur.com/sg6atKn.png' />";
	$("#program").html(program);
};
