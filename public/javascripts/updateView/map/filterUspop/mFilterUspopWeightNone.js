function updateMapFilterUspopWeightNone(){
	var data = dataFilterUspopWeightNone();
	// var data = dataMapFilterUspopWeightNone();
	// var templateContent = obj.url_victim_image === null ? $("#popup-template-no-pic").html() : $("#popup-template").html();
	// var templateContent = $("#popup-template").html();
	// var templateContentNoPics = $("#popup-template-no-pic").html();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: "red",
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
		// obj["template"] = _.template(templateContent);
		obj["template"] = templateMapFilterUspopWeightNone(name, age, source, img, description);
	});
	console.log(".each performed");
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var stateView = $("#state-filter").val();
	var program = _.contains([null, "USA"], stateView) ? programs.map.usPop.none : "";
	$("#program").html(program);
	$(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function templateMapFilterUspopWeightNone(name,age,source,img,description){
	return "<div class='popup-container'><h4>" + name + "</h4><h4>Age:  " + age + "</h4><h4><a href='" + source + "' target=_blank>Source</a></h4><img class='popup-img' src='" + img + "' alt=''><p><strong>" + description + "</strong></p></div>"
};

// function dataMapFilterUspopWeightNone(){
// 	var stateView = $("#state-filter").val();
//   var arr = allKillings.filter(function(el){
//     if (stateView === null || stateView === "USA"){
//       return el;
//     } else {
//       return el.location_of_killing_state === stateView;
//     };
//   });
//   return arr;
// };
