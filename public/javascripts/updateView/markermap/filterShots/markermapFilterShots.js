function updateMapFilterShots(choosers){
	if ($('#shots-range').css('display') === "none"){
		$('#shots-range').css({"display":"block"});
	};
	readyWeightsToBeShown();
	$('#race-weight, #unarmed-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateMapFilterShotsWeightNone();
	} else if (choosers.weight === "race"){
		updateMapFilterShotsWeightRace();
	} else if (choosers.weight === "unarmed"){
		updateMapFilterShotsWeightUnarmed();
	};
};
