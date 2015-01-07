// function updateHeatmapFilterUspop(choosers){
// 	removeAllWeights();
// 	if (choosers.weight === "none"){
// 		updateHeatmapFilterUspopWeightNone();
// 	};
// };

function updateHeatmapFilterUspop(){
	removeAllWeights();
	if (choosers.weight === "none"){
		updateHeatmapFilterUspopWeightNone();
	};
};

function updateHeatmapFilterUspopWeightNone(){
	var data = allKillings;
	makeHeatmap(data);
	var program = "<p class='program-text one-line'>People killed by police officers in the united states.</p>";
	$('#program').html(program);
};
