function updateHeatmapFilterShots(){
	$("#shots-filter-form").show();
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterShotsWeight[weight]();
};

function updateHeatmapFilterShotsWeightNone(){
	var data = dataFilterShotsWeightNone();
	makeHeatmap(data);
	var program = "<p class='program-text one-line'>Shots Heatmap</p>";
	$('#program').html(program);
};

var selectHeatmapFilterShotsWeight = {
	"none" : function(){
		updateHeatmapFilterShotsWeightNone();
	},
};
