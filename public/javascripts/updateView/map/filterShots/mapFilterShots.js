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
	"race-weight" : function(){
		updateMapFilterShotsWeightRace();
	},
	"unarmed-weight" : function(){
		updateMapFilterShotsWeightUnarmed();
	},
};

function programIntroMapShots(data){
	var min = shotsRange().min;
	var max = shotsRange().max;
	var timeTimes = max === 1 ? "time" : "times";
	if (min === 0){
		if (max === 999){
			return "<p>All cases in which the number of shots fired by police was recorded.</p>";
		} else {
			return "<p class='three-line-opener'>Police have killed someone<br />by shooting " + max + " " + timeTimes + " or fewer<br />in " + data.length + " recorded cases.</p>";
		};
	} else {
		if (max === 999){
			return "<p class='three-line-opener'>Police have killed someone<br />by shooting " + min + " or more times<br />in " + data.length + " recorded cases.</p>";
		} else {
			return "<p class='three-line-opener'>Police have killed someone<br />by shooting between " + min + " and " + max + " times<br />in " + data.length + " recorded cases.</p>";
		};
	};
};

