function updateGraphFilterUspop(choosers){
	readyWeightsToBeShown();
	$("#usPop-weight, #arrests-weight, #age-weight, #illness-weight").css({"display":"block"});
	if (choosers.weight === "none"){
		updateGraphFilterUspopWeightNone();
	} else if (choosers.weight === "usPop"){
		updateGraphFilterUspopWeightUspop();
	} else if (choosers.weight === "arrests"){
		updateGraphFilterUspopWeightArrests();
	} else if (choosers.weight === "age"){
		updateGraphFilterUspopWeightAge();
	} else if (choosers.weight === "illness"){
		updateGraphFilterUspopWeightIllness();
	};
};
