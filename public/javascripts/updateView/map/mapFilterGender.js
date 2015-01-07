function updateMapFilterGender(choosers){
	if ($('#gender-selection').css('display') === "none"){
		$('#gender-selection').css({"display":"block"});
	};
	readyWeightsToBeShown();
	$('#unarmed-weight, #illness-weight').css({'display':'block'});
	var checkedGenders = checkGenders();
	if (choosers.weight === "none"){
		updateMapFilterGenderWeightNone(checkedGenders);
	} else if (choosers.weight === "unarmed"){
		updateMapFilterGenderWeightUnarmed(checkedGenders);
	} else if (choosers.weight === "illness"){
		updateMapFilterGenderWeightIllness(checkedGenders);
	}	
};

function updateMapFilterGenderWeightNone(checkedGenders){
	var data = dataFilterGenderWeightNone(checkedGenders);
	$.each(data, function(i,obj){
		obj["geoStyle"] = {
			fillColor: genderColors[obj.victim_gender],
	    color: 'black',
	    radius: 7,
	    fillOpacity: 1,
	    opacity: 1,
		};
		obj["template"] = _.template($('#popup-template').html());
	});
	var geoData = dataToGeoData(data);
	makeMap(geoData);
	var program = "<p class='program-text one-line'>Gender map.</p>";
	$('#program').html(program);
};

function updateMapFilterGenderWeightUnarmed(checkedGenders){
	var data = dataFilterGenderWeightUnarmed(checkedGenders);
};

function updateMapFilterGenderWeightIllness(checkedGenders){
	var data = dataFilterGenderWeightIllness(checkedGenders);
};
