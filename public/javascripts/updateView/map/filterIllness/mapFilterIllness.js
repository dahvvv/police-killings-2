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
