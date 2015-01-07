function updateMapFilterIllness(){
	$("#illness-filter-form").show();
	readyWeightsToBeShown();
	$('#race-weight, #age-weight').show();
	var weight = detectWeight();
	selectMapFilterIllnessWeight[weight]();
};

var selectMapFilterIllnessWeight = {
	"none" : function(){
		updateMapFilterIllnessWeightNone();
	},
	"race-weight" : function(){
		updateMapFilterIllnessWeightRace();
	},
	"age-weight" : function(){
		updateMapFilterIllnessWeightAge();
	},
};

function filterWeightLegendFromWeightRace(){
	alert('u did it!');
	var legend = ($("#illness-filter-form").children(".legend"));
	$.each(legend, function(i,el){
		var color = el.id === "ill" ? illnessColors["yes"] : illnessColors["no"];
		$(el).css({"width":"11px","height":"11px","background-color":color});
	});
	$("button").off("click", filterWeightLegendFromWeightRace);
};
