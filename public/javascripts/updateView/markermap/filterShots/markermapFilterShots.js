function updateMarkermapFilterShots(choosers){
	if ($('#shots-range').css('display') === "none"){
		$('#shots-range').css({"display":"block"});
	};
	readyWeightsToBeShown();
	$('#race-weight, #unarmed-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateMarkermapFilterShotsWeightNone();
	} else if (choosers.weight === "race"){
		updateMarkermapFilterShotsWeightRace();
	} else if (choosers.weight === "unarmed"){
		updateMarkermapFilterShotsWeightUnarmed();
	};
};
