function updateMapFilterRace(){
	$("#race-filter-form").show();
	readyWeightsToBeShown();
	$("#age-weight, #illness-weight").show();
	var weight = detectWeight();
	selectMapFilterRaceWeight[weight]();
};

function updateMapFilterRaceWeightArrests(){
	alert('where the fuck did this method go?');
};

var selectMapFilterRaceWeight = {
	"none" : function(){
		updateMapFilterRaceWeightNone();
	},
	"age-weight" : function(){
		updateMapFilterRaceWeightAge();
	},
	"illness-weight" : function(){
		updateMapFilterRaceWeightIllness();
	},
};
