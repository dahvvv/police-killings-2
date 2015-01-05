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

function updateGraphFilterIllnessWeightRace(){
	var gLabels = graphLabels["illness"]["race"];
	gLabels = dataGraphFilterIllnessWeightRace(gLabels);
	var data = labelsToData(gLabels);
	var style = graphStyles["illness"]["race"];
	createGraph(data, style);
	var program = "<p class='program-text four-line'>White and asian people who are killed by the police<br>are the victims most likely to have been mentally ill.<br>Over 30% of white and asian people killed by police<br>were exhibiting clear signs of mental illness.</p>";
	$('#program').html(program);
};

function dataGraphFilterIllnessWeightRace(graphLabels){
	$.each(allKillings, function(i,obj){
		if (obj.symptoms_of_mental_illness === null || obj.victim_race === null){
			return true;
		} else if (obj.symptoms_of_mental_illness === "no"){
			var illness = "no symptoms";
		} else if (obj.symptoms_of_mental_illness === "yes"){
			var illness = "symptoms";
		};
		var race = obj.victim_race;
		graphLabels["labelObjCrossGraph"][illness][graphLabels["labelArrUpGraph"].indexOf(race)]++;
	});
	return graphLabels;
};

function updateGraphFilterIllnessWeightAge(checkedIllness){
	var data = dataFilterIllnessWeightNone(checkedIllness);
	var graphInfo = infoGraphFilterIllnessWeightAge();
	var graphStyle = styleGraphFilterIllnessWeightAge();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text four-line'>People killed by police while showing clear signs of mental illness<br>tend to be older than people with no signs of mental illness.<br>The average age of a victim with no signs of illness is 33.4 years old.<br>For those victims with mental illness, the average age is 38.5 years old.</p>";
	$('#program').html(program);
};
