function updateHeatmapFilterShots(choosers){
	if ($('#shots-range').css('display') === "none"){
		$('#shots-range').css({"display":"block"});
	};
	removeAllWeights();
	if (choosers.weight === "none"){
		updateHeatmapFilterShotsWeightNone();
	}
};

function updateHeatmapFilterShotsWeightNone(){
	var data = dataFilterShotsWeightNone();
	makeHeatmap(data);
	var program = "<p class='program-text one-line'>Shots Heatmap</p>";
	$('#program').html(program);
};
