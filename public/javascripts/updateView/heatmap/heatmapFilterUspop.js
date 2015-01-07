function updateHeatmapFilterUspop(){
	$(".weight, #weight-header").hide();
	var weight = detectWeight();
	selectHeatmapFilterUspopWeight[weight]();
};

function updateHeatmapFilterUspopWeightNone(){
	var data = allKillings;
	makeHeatmap(data);
	var program = "<p class='program-text one-line'>People killed by police officers in the united states.</p>";
	$('#program').html(program);
};

var selectHeatmapFilterUspopWeight = {
	"none" : function(){
		updateHeatmapFilterUspopWeightNone();
	},
};
