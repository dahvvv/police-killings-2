function updateHeatmapFilterUnarmed(){
	$("#unarmed-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterUnarmedWeight[weight]();
};

function updateHeatmapFilterUnarmedWeightNone(){
	var data = dataFilterUnarmedWeightNone();
	makeHeatmap(data);
	var program = "<p class='program-text one-line'>Unarmed Heatmap</p>";
	$('#program').html(program);
};

var selectHeatmapFilterUnarmedWeight = {
	"none" : function(){
		updateHeatmapFilterUnarmedWeightNone();
	},
};
