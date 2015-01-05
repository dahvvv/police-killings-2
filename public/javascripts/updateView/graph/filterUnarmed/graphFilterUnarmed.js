function updateGraphFilterUnarmed(choosers){
	readyWeightsToBeShown();
	$('#shots-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateGraphFilterUnarmedWeightNone();
	} else if (choosers.weight === "shots"){
		updateGraphFilterUnarmedWeightShots();
	}
};
