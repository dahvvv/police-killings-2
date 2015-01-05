function updateGraphFilterRace(choosers){
	readyWeightsToBeShown();
	$("#usPop-weight, #arrests-weight, #age-weight, #illness-weight").css({"display":"block"});
	if (choosers.weight === "none"){
		updateGraphFilterRaceWeightNone();
	} else if (choosers.weight === "usPop"){
		updateGraphFilterRaceWeightUspop();
	} else if (choosers.weight === "arrests"){
		updateGraphFilterRaceWeightArrests();
	} else if (choosers.weight === "age"){
		updateGraphFilterRaceWeightAge();
	} else if (choosers.weight === "illness"){
		updateGraphFilterRaceWeightIllness();
	};
};

function updateGraphFilterRaceWeightIllness(){
	var data = dataFilterRaceWeightNone();
	var graphInfo = infoGraphFilterRaceWeightIllness();
	var graphStyle = styleGraphFilterRaceWeightIllness();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>Over 35% of asian people killed by police<br>were exhibiting clear signs of mental illness.</p>";
	$('#program').html(program);
};
