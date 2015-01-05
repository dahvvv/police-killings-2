function updateGraphFilterGender(choosers){
	readyWeightsToBeShown();
	$('#unarmed-weight, #illness-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateGraphFilterGenderWeightNone();
	} else if (choosers.weight === "unarmed"){
		updateGraphFilterGenderWeightUnarmed();
	} else if (choosers.weight === "illness"){
		updateGraphFilterGenderWeightIllness();
	}
};
