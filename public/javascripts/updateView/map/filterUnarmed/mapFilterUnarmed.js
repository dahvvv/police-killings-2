function updateMapFilterUnarmed(){
	$("#unarmed-filter-form").show();
	readyWeightsToBeShown();
	$('#shots-weight').show();
	var weight = detectWeight();
	selectMapFilterUnarmedWeight[weight]();
};

var selectMapFilterUnarmedWeight = {
	"none" : function(){
		updateMapFilterUnarmedWeightNone();
	},
	"shots-weight" : function(){
		updateMapFilterUnarmedWeightShots();
	},
};
