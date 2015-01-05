function updateGraphFilterIllness(choosers){
	readyWeightsToBeShown();
	$('#race-weight, #age-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateGraphFilterIllnessWeightNone();
	} else if (choosers.weight === "race"){
		updateGraphFilterIllnessWeightRace();
	} else if (choosers.weight === "age"){
		updateGraphFilterIllnessWeightAge();
	}
};
