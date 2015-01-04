function updateMarkermapFilterGender(choosers){
	if ($('#gender-selection').css('display') === "none"){
		$('#gender-selection').css({"display":"block"});
	};
	readyWeightsToBeShown();
	$('#unarmed-weight, #illness-weight').css({'display':'block'});
	var checkedGenders = checkGenders();
	if (choosers.weight === "none"){
		updateMarkermapFilterGenderWeightNone(checkedGenders);
	} else if (choosers.weight === "unarmed"){
		updateMarkermapFilterGenderWeightUnarmed(checkedGenders);
	} else if (choosers.weight === "illness"){
		updateMarkermapFilterGenderWeightIllness(checkedGenders);
	}	
};

function updateMarkermapFilterGenderWeightNone(checkedGenders){
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
	makeMarkermap(geoData);
	var program = "<p class='program-text one-line'>Gender markermap.</p>";
	$('#program').html(program);
};

function updateMarkermapFilterGenderWeightUnarmed(checkedGenders){
	var data = dataFilterGenderWeightUnarmed(checkedGenders);
};

function updateMarkermapFilterGenderWeightIllness(checkedGenders){
	var data = dataFilterGenderWeightIllness(checkedGenders);
};
