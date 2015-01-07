function updateHeatmapFilterIllness(){
	$("#illness-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterIllnessWeight[weight]();
};

function updateHeatmapFilterIllnessWeightNone(){
	var data = dataFilterIllnessWeightNone();
	makeHeatmap(data);
	var program = "<p class='program-text one-line'>Illness Heatmap</p>";
	$('#program').html(program);
};

var selectHeatmapFilterIllnessWeight = {
	"none" : function(){
		updateHeatmapFilterIllnessWeightNone();
	},
};
