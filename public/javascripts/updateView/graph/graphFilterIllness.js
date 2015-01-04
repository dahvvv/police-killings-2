function updateGraphFilterIllness(choosers){
	readyWeightsToBeShown();
	$('#race-weight, #age-weight').css({'display':'block'});
	var checkedIllness = checkIllness();
	if (choosers.weight === "none"){
		updateGraphFilterIllnessWeightNone(checkedIllness);
	} else if (choosers.weight === "race"){
		updateGraphFilterIllnessWeightRace(checkedIllness);
	} else if (choosers.weight === "age"){
		updateGraphFilterIllnessWeightAge(checkedIllness);
	}
};

function updateGraphFilterIllnessWeightNone(checkedIllness){
	var data = dataFilterIllnessWeightNone(checkedIllness);
	var graphInfo = infoGraphFilterIllnessWeightNone();
	var graphStyle = styleGraphFilterIllnessWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>Victims of police shootings exhibited signs of mental illness<br>in over 20% of recorded cases.</p>";
	$('#program').html(program);
};

function updateGraphFilterIllnessWeightRace(checkedIllness){
	var data = dataFilterIllnessWeightNone(checkedIllness);
	var graphInfo = infoGraphFilterIllnessWeightRace();
	var graphStyle = styleGraphFilterIllnessWeightRace();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text four-line'>White and asian people who are killed by the police<br>are the victims most likely to have been mentally ill.<br>Over 30% of white and asian people killed by police<br>were exhibiting clear signs of mental illness.</p>";
	$('#program').html(program);
};

function updateGraphFilterIllnessWeightAge(checkedIllness){
	var data = dataFilterIllnessWeightNone(checkedIllness);
	var graphInfo = infoGraphFilterIllnessWeightAge();
	var graphStyle = styleGraphFilterIllnessWeightAge();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text four-line'>People killed by police while showing clear signs of mental illness<br>tend to be older than people with no signs of mental illness.<br>The average age of a victim with no signs of illness is 33.4 years old.<br>For those victims with mental illness, the average age is 38.5 years old.</p>";
	$('#program').html(program);
};
