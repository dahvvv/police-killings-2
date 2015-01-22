function updateHeatmapFilterIllness(){
	$("#illness-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterIllnessWeight[weight]();
};

function updateHeatmapFilterIllnessWeightNone(){
	var data = dataFilterIllnessWeightNone();
	var stateView = $('#state-filter').val();
	makeHeatmap(data, stateView);
	var program = programs.heatmap.illness.none;
	setProgram(program, stateView);
};

var selectHeatmapFilterIllnessWeight = {
	"none" : function(){
		updateHeatmapFilterIllnessWeightNone();
	},
};
