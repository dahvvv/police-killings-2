function updateGraphFilterShots(choosers){
	readyWeightsToBeShown();
	$('#race-weight, #unarmed-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateGraphFilterShotsWeightNone();
	} else if (choosers.weight === "race"){
		updateGraphFilterShotsWeightRace();
	} else if (choosers.weight === "unarmed"){
		updateGraphFilterShotsWeightUnarmed();
	}
};

function updateGraphFilterShotsWeightUnarmed(){
	var data = dataFilterShotsWeightNone();
	var graphInfo = infoGraphFilterShotsWeightUnarmed();
	var graphStyle = styleGraphFilterShotsWeightUnarmed();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>Whether the victim was armed or not, the average number of shots fired<br>by police remains about the same:  between 5.5 and 6.2 shots.</p>";
	$('#program').html(program);
};
