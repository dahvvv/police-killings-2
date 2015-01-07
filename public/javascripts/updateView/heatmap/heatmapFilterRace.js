function updateHeatmapFilterRace(){
	$("#race-filter-form").show();
	readyWeightsToBeShown();
	$('#usPop-weight, #arrests-weight').show();
	var weight = detectWeight();
	selectHeatmapFilterRaceWeight[weight]();
};

var selectHeatmapFilterRaceWeight = {
	"none" : function(){
		updateHeatmapFilterRaceWeightNone();
	},
	"usPop" : function(){
		updateHeatmapFilterRaceWeightUspop();
	},
	"arrests" : function(){
		updateHeatmapFilterRaceWeightArrests();
	},
};

function updateHeatmapFilterRaceWeightNone(){
	var data = dataFilterRaceWeightNone();
	makeHeatmap(data);
	var program = "<p class='program-text two-line'>This heatmap is scaled to present a constant population size,<br>in order to emphasize differences in location.</p>";
	$('#program').html(program);
};

function updateHeatmapFilterRaceWeightUspop(){
	var data = dataFilterRaceWeightNone();
};

function updateHeatmapFilterRaceWeightArrests(){
	var data = dataFilterRaceWeightNone();
};
