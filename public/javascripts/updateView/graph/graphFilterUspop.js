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

function updateGraphFilterUspopWeightNone(){
	var data = allKillings;
	var graphInfo = infoGraphFilterUspopWeightNone();
	var graphStyle = styleGraphFilterUspopWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>New York and Las Vegas have far more deaths by police<br>than any other city.  If it were its own city, Brooklyn would be third.</p>";
	$('#program').html(program);
};

function updateGraphFilterUspopWeightUspop(){
	var data = allKillings;
	var graphInfo = infoGraphFilterUspopWeightUspop();
	var graphStyle = styleGraphFilterUspopWeightUspop();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>When the same cities are scaled by their populations,<br>the degree to which Las Vegas is an outlier becomes clear.</p>";
	$('#program').html(program);
};
