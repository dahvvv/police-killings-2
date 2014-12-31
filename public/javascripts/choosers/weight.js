function replaceWeight(weight, callback){
  if ($(weight).hasClass('weight-type')) {
    $(weight).removeClass('weight-type');
  } else {
    $('.button-weight').removeClass('weight-type');
    $(weight).addClass('weight-type');
  };  
  callback();
};

function updateWeightVisibility(choosers){
	if (choosers['displaySelector'] === "marker"){
		if (choosers['filter'] === "race"){
			$('.button-header').css({'display':'block'});
			$('.button-weight').css({'display':'none'});
			$('#usPop-weight').css({'display':'block'});
			$('#arrests-weight').css({'display':'block'});
		} else {
			removeAllWeights();
		}
	} else if (choosers['displaySelector'] === "graph"){
		if (choosers['filter'] === "usPop"){
			$('.button-header').css({'display':'block'});
			$('.button-weight').css({'display':'none'});
			$('#usPop-weight').css({'display':'block'});
		} else if (choosers['filter'] === "race"){
			$('.button-header').css({'display':'block'});
			$('.button-weight').css({'display':'none'});
			$('#usPop-weight').css({'display':'block'});
			$('#arrests-weight').css({'display':'block'});
		} else if (choosers['filter'] === "shots"){
			$('.button-header').css({'display':'block'});
			$('.button-weight').css({'display':'none'});
			$('#race-weight').css({'display':'block'});
			if (choosers['weight'] === "race"){
				$('#race-percentage-weight').css({'display':'block'});
			};
		} else {
			removeAllWeights();
		}
	} else {
		removeAllWeights();
	}
};

function removeAllWeights(){
	$('.button-header').css({'display':'none'});
	$('.button-weight').css({'display':'none'});
};