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
	var stateView = $("#state-filter").val();
	var programIntro = programIntroMapShots(data);
  var programBody = programs.map.shots.none;
  var program = _.contains([null, "USA"], stateView) ? (programIntro + programBody) : "";
	$("#program").html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};
