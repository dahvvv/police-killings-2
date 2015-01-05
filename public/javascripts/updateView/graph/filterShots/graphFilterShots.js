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
