function updateGraphFilterAge(choosers){
	readyWeightsToBeShown();
	$('#usPop-weight, #arrests-weight, #race-weight, #illness-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateGraphFilterAgeWeightNone();
	} else if (choosers.weight === "usPop"){
		updateGraphFilterAgeWeightUspop();
	} else if (choosers.weight === "arrests"){
		updateGraphFilterAgeWeightArrests();
	} else if (choosers.weight === "race"){
		updateGraphFilterAgeWeightRace();
	} else if (choosers.weight === "illness"){
		updateGraphFilterAgeWeightIllness();
	}
};
