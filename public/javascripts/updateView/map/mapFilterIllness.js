function updateMapFilterIllness(){
	$("#illness-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectMapFilterIllnessWeight[weight]();
};

function updateMapFilterIllnessWeightNone(){
	var data = dataFilterIllnessWeightNone();
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: illnessColors[obj.symptoms_of_mental_illness],
	    color: "black",
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($("#popup-template").html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = "<p class='program-text two-line'>People killed by the police while exhibiting clear signs of mental illness.<br>(select boxes on the left to see no signs, or both).</p>";
	$("#program").html(program);
};

var selectMapFilterIllnessWeight = {
	"none" : function(){
		updateMapFilterIllnessWeightNone();
	},
};