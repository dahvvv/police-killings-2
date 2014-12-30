function updateChooserListviews(choosers){
	var raceDisplay = $('#race-selection').css('display');
	var ageDisplay = $('#age-range').css('display');
	if (ageDisplay != "none"){
		if (choosers['displaySelector'] === "marker"){
			$('#age-range').css({"display":"none"});
		}
	} else {
		if (choosers['filter'] === "age"){
			if (choosers['displaySelector'] === "heatmap"){
				$('#age-range').css({"display":"block"});
			}
		}
	}
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