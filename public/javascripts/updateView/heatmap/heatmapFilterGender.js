function updateHeatmapFilterGender(choosers){
	if ($('#gender-selection').css('display') === "none"){
		$('#gender-selection').css({"display":"block"});
	};
	readyWeightsToBeShown();
	$('#unarmed-weight, #illness-weight').css({'display':'block'});
	var checkedGenders = checkGenders();
	if (choosers.weight === "none"){
		updateHeatmapFilterAgeWeightNone();
	};
	if (choosers.weight === "none"){
		updateHeatmapFilterGenderWeightNone(checkedGenders);
	} else if (choosers.weight === "unarmed"){
		updateHeatmapFilterGenderWeightUnarmed(checkedGenders);
	} else if (choosers.weight === "illness"){
		updateHeatmapFilterGenderWeightIllness(checkedGenders);
	}	
};

function updateHeatmapFilterGenderWeightNone(checkedGenders){
	var data = dataFilterGenderWeightNone(checkedGenders);
	makeHeatmap(data);
	var program = "<p class='program-text one-line'>Gender Heatmap</p>";
	$('#program').html(program);
};

function updateHeatmapFilterGenderWeightUnarmed(checkedGenders){};

function updateHeatmapFilterGenderWeightIllness(checkedGenders){};
