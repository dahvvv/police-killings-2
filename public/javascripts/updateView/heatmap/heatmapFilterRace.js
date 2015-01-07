// function updateHeatmapFilterRace(choosers){
// 	if ($('#race-selection').css('display') === "none"){
// 		$('#race-selection').css({"display":"block"});
// 	};
// 	readyWeightsToBeShown();
// 	$('#usPop-weight, #arrests-weight').css({'display':'block'});
// 	if (choosers.weight === "none"){
// 		updateHeatmapFilterRaceWeightNone();
// 	} else if (choosers.weight === "usPop"){
// 		updateHeatmapFilterRaceWeightUspop();
// 	} else if (choosers.weight === "arrests"){
// 		updateHeatmapFilterRaceWeightArrests();
// 	}
// };

function updateHeatmapFilterRace(){
	debugger;
	$("#race-filter-form").show();
	readyWeightsToBeShown();
	$('#usPop-weight, #arrests-weight').show();
	if (choosers.weight === "none"){
		updateHeatmapFilterRaceWeightNone();
	} else if (choosers.weight === "usPop"){
		updateHeatmapFilterRaceWeightUspop();
	} else if (choosers.weight === "arrests"){
		updateHeatmapFilterRaceWeightArrests();
	}
};

function updateHeatmapFilterRaceWeightNone(){
	var data = dataFilterRaceWeightNone();
	makeHeatmap(data);
	var program = "<p class='program-text two-line'>This heatmap is scaled to present a constant population size,<br>in order to emphasize differences in location.</p>";
	$('#program').html(program);
};

function updateHeatmapFilterRaceWeightUspop(){
	var data = dataFilterRaceWeightNone();
};

function updateHeatmapFilterRaceWeightArrests(){
	var data = dataFilterRaceWeightNone();
};
