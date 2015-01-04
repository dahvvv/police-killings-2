function updateHeatmapFilterUnarmed(choosers){
	if ($('#unarmed-selection').css('display') === "none"){
		$('#unarmed-selection').css({"display":"block"});
	};
	removeAllWeights();
	var checkedUnarmed = checkUnarmed();
	if (choosers.weight === "none"){
		updateHeatmapFilterUnarmedWeightNone(checkedUnarmed);
	}
};

function updateHeatmapFilterUnarmedWeightNone(checkedUnarmed){
	var data = dataFilterUnarmedWeightNone(checkedUnarmed);
	makeHeatmap(data);
	var program = "<p class='program-text one-line'>Unarmed Heatmap</p>";
	$('#program').html(program);
};
