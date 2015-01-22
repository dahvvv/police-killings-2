function updateHeatmapFilterShots(){
	$("#shots-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterShotsWeight[weight]();
};

function updateHeatmapFilterShotsWeightNone(){
	var data = dataFilterShotsWeightNone();
	var stateView = $('#state-filter').val();
	makeHeatmap(data, stateView);
	var program = programs.heatmap.shots.none;
	setProgram(program, stateView);
};

var selectHeatmapFilterShotsWeight = {
	"none" : function(){
		updateHeatmapFilterShotsWeightNone();
	},
};
