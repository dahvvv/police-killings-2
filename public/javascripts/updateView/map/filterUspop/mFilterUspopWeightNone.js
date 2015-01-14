function updateMapFilterUspopWeightNone(){
	var data = dataFilterUspopWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: "red",
	    color: "black",
	    radius: basicRadius(),
	    fillOpacity: 1,
	    opacity: 1,
		};
		var templateContent = obj.url_victim_image === null ? $("#popup-template-no-pic").html() : $("#popup-template").html();
		obj["template"] = _.template(templateContent);
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var stateView = $("#state-filter").val();
	var program = _.contains([null, "USA"], stateView) ? programs.map.usPop.none : "";
	$("#program").html(program);
	$("#up-arrow").on("click", function(){
    window.scrollTo(0, 0);
  });
};
