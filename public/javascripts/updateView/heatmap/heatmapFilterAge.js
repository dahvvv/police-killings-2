function updateHeatmapFilterAge(){
	$("#age-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterAgeWeight[weight]();
};

function updateHeatmapFilterAgeWeightNone(){
	var stateView = $('#state-filter').val();
	var data = dataFilterAgeWeightNone();
	makeHeatmap(data, stateView);
	var program = programs.heatmap.age.none;
	setProgram(program, stateView);
};

var selectHeatmapFilterAgeWeight = {
	"none" : function(){
		updateHeatmapFilterAgeWeightNone();
	},
};
