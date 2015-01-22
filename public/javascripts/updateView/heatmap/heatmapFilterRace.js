function updateHeatmapFilterRace(){
	$("#race-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterRaceWeight[weight]();
};

var selectHeatmapFilterRaceWeight = {
	"none" : function(){
		updateHeatmapFilterRaceWeightNone();
	},
};

function updateHeatmapFilterRaceWeightNone(){
	var data = dataFilterRaceWeightNone();
	var stateView = $('#state-filter').val();
	makeHeatmap(data, stateView);
	var program = programs.heatmap.race.none;
	setProgram(program, stateView);
};

function updateHeatmapFilterRaceWeightUspop(){
	var data = dataFilterRaceWeightNone();
};

function updateHeatmapFilterRaceWeightArrests(){
	var data = dataFilterRaceWeightNone();
};
