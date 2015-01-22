function updateHeatmapFilterUnarmed(){
	$("#unarmed-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterUnarmedWeight[weight]();
};

function updateHeatmapFilterUnarmedWeightNone(){
	var data = dataFilterUnarmedWeightNone();
	var stateView = $('#state-filter').val();
	makeHeatmap(data, stateView);
	var program = programs.heatmap.unarmed.none;
	setProgram(program, stateView);
};

var selectHeatmapFilterUnarmedWeight = {
	"none" : function(){
		updateHeatmapFilterUnarmedWeightNone();
	},
};
