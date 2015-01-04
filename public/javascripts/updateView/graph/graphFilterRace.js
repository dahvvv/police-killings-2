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

function updateGraphFilterRaceWeightNone(){
	var data = dataFilterRaceWeightNone();
	var graphInfo = infoGraphFilterRaceWeightNone();
	var graphStyle = styleGraphFilterRaceWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Police deaths by race, measured in percentage.</p>";
	$('#program').html(program);
};

function updateGraphFilterRaceWeightUspop(){
	var data = dataFilterRaceWeightNone();
	var graphInfo = infoGraphFilterRaceWeightUspop();
	var graphStyle = styleGraphFilterRaceWeightUspop();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>When races are compared in terms of deaths per capita,<br>as opposed to deaths total, the portion of white victims drops from 49% to 10%.</p>";
	$('#program').html(program);
};

function updateGraphFilterRaceWeightArrests(){
	var data = dataFilterRaceWeightNone();
	var graphInfo = infoGraphFilterRaceWeightArrests();
	var graphStyle = styleGraphFilterRaceWeightArrests();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>The broad likelihood of a single arrest resulting in death, by race.</p>";
	$('#program').html(program);
};

function updateGraphFilterRaceWeightAge(){
	var data = dataFilterRaceWeightNone();
	var graphInfo = infoGraphFilterRaceWeightAge();
	var graphStyle = styleGraphFilterRaceWeightAge();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text four-line'>Dark purple represents victims of near-average age.<br>Bright colors to the left represent younger victims.<br>Older victims are represented by bright colors to the right.<br>You can see that black victims skew much younger than white victims.</p>";
	$('#program').html(program);
};

function updateGraphFilterRaceWeightIllness(){
	var data = dataFilterRaceWeightNone();
	var graphInfo = infoGraphFilterRaceWeightIllness();
	var graphStyle = styleGraphFilterRaceWeightIllness();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>Over 35% of asian people killed by police<br>were exhibiting clear signs of mental illness.</p>";
	$('#program').html(program);
};
