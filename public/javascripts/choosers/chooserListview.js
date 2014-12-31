function updateChooserListviews(choosers){
	var raceDisplay = $('#race-selection').css('display');
	var ageDisplay = $('#age-range').css('display');
	var genderDisplay = $('#gender-selection').css('display');

	// if you can't see the racedisplay, and the filter is on race, and the display is not on graph, then show the racedisplay
	if (raceDisplay === "none"){
		if (choosers['filter'] === "race"){
			if (choosers['displaySelector'] != "graph"){
				$('#race-selection').css({"display":"block"});
			}
		}
	};

	// if you can see the agedisplay, and the selector is on markermap, then hide the agedisplay
	if (ageDisplay != "none"){
		if (choosers['displaySelector'] === "marker"){
			$('#age-range').css({"display":"none"});
		}
	} else {
		// if you can't see the agedisplay, and the filter is on age, and the display is on heatmap, then show the agedisplay
		if (choosers['filter'] === "age"){
			if (choosers['displaySelector'] === "heatmap"){
				$('#age-range').css({"display":"block"});
			}
		}
	};

	// if you can't see the genderdisplay, and the filter is on gender, and the display is not on graph, then show the genderdisplay
	if (genderDisplay === "none"){
		if (choosers['filter'] === "gender"){
			if (choosers['displaySelector'] != "graph"){
				$('#gender-selection').css({"display":"block"});
			}
		}
	};

	// if the selector is on graph, hide all displays
	if (choosers['displaySelector'] === "graph"){
		$('.filter-checkbox-form, #age-range').css({"display":"none"});
	};

};

$(function(){
	$('#race-filter').on('click', function(e){
		e.preventDefault();
		var choosers = detectChoosers();
		if (choosers['displaySelector'] != 'graph'){
			$('#race-selection').css({"display":"block"});
			$('#age-range').css({"display":"none"});
			$('#gender-selection').css({"display":"none"});
		};
	});

	$('#age-filter').on('click', function(e){
		e.preventDefault();
		var choosers = detectChoosers();
		if (choosers['displaySelector'] != 'graph'){
			$('#age-range').css({"display":"block"});
			$('#race-selection').css({"display":"none"});
			$('#gender-selection').css({"display":"none"});
		};
	});

	$('#gender-filter').on('click', function(e){
		e.preventDefault();
		var choosers = detectChoosers();
		if (choosers['displaySelector'] != 'graph'){
			$('#gender-selection').css({"display":"block"});
			$('#race-selection').css({"display":"none"});
			$('#age-range').css({"display":"none"});
		};
	});
});