function updateChooserListviews(choosers){
	var raceDisplay = $('#race-selection').css('display');
	var ageDisplay = $('#age-range').css('display');
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

	// if the selector is on graph, hide all displays
	if (choosers['displaySelector'] === "graph"){
		$('.filter-checkbox-form, #age-range').css({"display":"none"});
	};
};

$(function(){
	$('#race-filter').on('click', function(e){
		e.preventDefault();
		$('#race-selection').css({"display":"block"});
		$('#age-range').css({"display":"none"});
		$('#gender-selection').css({"display":"none"});
	});

	$('#age-filter').on('click', function(e){
		e.preventDefault();
		$('#age-range').css({"display":"block"});
		$('#race-selection').css({"display":"none"});
		$('#gender-selection').css({"display":"none"});
	});

	$('#gender-filter').on('click', function(e){
		e.preventDefault();
		$('#gender-selection').css({"display":"block"});
		$('#race-selection').css({"display":"none"});
		$('#age-range').css({"display":"none"});
	});
});