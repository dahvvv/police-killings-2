function updateHeatmapFilterIllness(choosers){
	if ($('#illness-selection').css('display') === "none"){
		$('#illness-selection').css({"display":"block"});
	};
	removeAllWeights();
	var checkedIllness = checkIllness();
	if (choosers.weight === "none"){
		updateHeatmapFilterIllnessWeightNone(checkedIllness);
	}
};

function updateHeatmapFilterIllnessWeightNone(checkedIllness){
	var data = dataFilterIllnessWeightNone(checkedIllness);
	makeHeatmap(data);
	var program = "<p class='program-text one-line'>Illness Heatmap</p>";
	$('#program').html(program);
};
