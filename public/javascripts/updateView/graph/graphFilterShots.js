function updateGraphFilterShots(choosers){
	readyWeightsToBeShown();
	$('#race-weight, #unarmed-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateGraphFilterShotsWeightNone();
	} else if (choosers.weight === "race"){
		updateGraphFilterShotsWeightRace();
	} else if (choosers.weight === "unarmed"){
		updateGraphFilterShotsWeightUnarmed();
	}
};

function updateGraphFilterShotsWeightNone(){
	var data = dataFilterShotsWeightNone();
	var graphInfo = infoGraphFilterShotsWeightNone();
	var graphStyle = styleGraphFilterShotsWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>Police fired at a victim 20 times or more<br>in over 30 recorded cases.</p>";
	$('#program').html(program);
};

function updateGraphFilterShotsWeightRace(){
	var data = dataFilterShotsWeightNone();
	var graphInfo = infoGraphFilterShotsWeightRace();
	var graphStyle = styleGraphFilterShotsWeightRace();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>There does not appear to be a significant relationship<br>between the number of shots fired by police and the victim's race.</p>";
	$('#program').html(program);
};

function updateGraphFilterShotsWeightUnarmed(){
	var data = dataFilterShotsWeightNone();
	var graphInfo = infoGraphFilterShotsWeightUnarmed();
	var graphStyle = styleGraphFilterShotsWeightUnarmed();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>Whether the victim was armed or not, the average number of shots fired<br>by police remains about the same:  between 5.5 and 6.2 shots.</p>";
	$('#program').html(program);
};
