function updateMapFilterShots(){
	$("#shots-filter-form").show();
	readyWeightsToBeShown();
	$('#race-weight, #unarmed-weight').show();
	var weight = detectWeight();
	selectMapFilterShotsWeight[weight]();
};

var selectMapFilterShotsWeight = {
	"none" : function(){
		updateMapFilterShotsWeightNone();
	},
	"race" : function(){
		updateMapFilterShotsWeightRace();
	},
	"unarmed" : function(){
		updateMapFilterShotsWeightUnarmed();
	},
};
