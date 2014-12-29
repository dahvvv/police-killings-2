$(function(){
	$('#race-filter').on('click', function(e){
		e.preventDefault();
		$('#race-selection').css({"display":"block"});
		$('#age-range').css({"display":"none"});
	});

	$('#age-filter').on('click', function(e){
		e.preventDefault();
		$('#age-range').css({"display":"block"});
		$('#race-selection').css({"display":"none"});
	});
});