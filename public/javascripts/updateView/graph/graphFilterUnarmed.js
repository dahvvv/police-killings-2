function updateGraphFilterUnarmed(choosers){
	readyWeightsToBeShown();
	$('#shots-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateGraphFilterUnarmedWeightNone();
	} else if (choosers.weight === "shots"){
		updateGraphFilterUnarmedWeightShots();
	}
};

function updateGraphFilterUnarmedWeightNone(){
	var data = dataFilterUnarmedWeightNone();
	var graphInfo = infoGraphFilterUnarmedWeightNone();
	var graphStyle = styleGraphFilterUnarmedWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Victims of police shootings were unarmed in over 20% of recorded cases.</p>";
	$('#program').html(program);
};

function updateGraphFilterUnarmedWeightShots(){
	var data = dataFilterUnarmedWeightNone();
	var graphInfo = infoGraphFilterUnarmedWeightShots();
	var graphStyle = styleGraphFilterUnarmedWeightShots();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text three-line'>Twenty times,<br>the police have killed someone by firing at least ten shots,<br>and the victim was unarmed.</p>";
	$('#program').html(program);
};
