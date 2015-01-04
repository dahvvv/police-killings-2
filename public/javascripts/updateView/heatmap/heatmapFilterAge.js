function updateHeatmapFilterAge(choosers){
	if ($('#age-range').css('display') === "none"){
		$('#age-range').css({"display":"block"});
	};
	removeAllWeights();
	if (choosers.weight === "none"){
		updateHeatmapFilterAgeWeightNone();
	};
};

function updateHeatmapFilterAgeWeightNone(){
	var data = filterByAge();
	makeHeatmap(data);
	var program = "<p class='program-text two-line'>This heatmap is scaled to show similar total heat for any age range,<br>in order to emphasize changes in locations.</p>";
	$('#program').html(program);
};
