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

function updateGraphFilterAgeWeightRace(){
	var data = filterAgeNotNil();
	var graphInfo = infoGraphFilterAgeWeightRace();
	var graphStyle = styleGraphFilterAgeWeightRace();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Age race Graph</p>";
	$('#program').html(program);
};

function updateGraphFilterAgeWeightIllness(){
	var data = filterAgeNotNil();
	var graphInfo = infoGraphFilterAgeWeightIllness();
	var graphStyle = styleGraphFilterAgeWeightIllness();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Age illness Graph</p>";
	$('#program').html(program);
};
