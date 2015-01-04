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
			// readyWeightsToBeShown();
			// $('#usPop-weight').css({'display':'block'});
			// $('#arrests-weight').css({'display':'block'});
		} else if (choosers['filter'] === "gender") {
			readyWeightsToBeShown();
			$('#unarmed-weight').css({'display':'block'});
			$('#illness-weight').css({'display':'block'});
		} else {
			removeAllWeights();
		}
	// } else if (choosers['displaySelector'] === "graph"){
	// 	if (choosers['filter'] === "usPop"){
	// 		readyWeightsToBeShown();
	// 		$('#usPop-weight').css({'display':'block'});
	// 		$('#arrests-weight').css({'display':'block'});
	// 		$('#age-weight').css({'display':'block'});
	// 		$('#illness-weight').css({'display':'block'});
		// } else if (choosers['filter'] === "race"){
		// 	readyWeightsToBeShown();
		// 	$('#usPop-weight').css({'display':'block'});
		// 	$('#arrests-weight').css({'display':'block'});
		// 	$('#age-weight').css({'display':'block'});
		// 	$('#illness-weight').css({'display':'block'});
		// } else if (choosers['filter'] === "age"){
		// 	readyWeightsToBeShown();
		// 	$('#usPop-weight').css({'display':'block'});
		// 	$('#arrests-weight').css({'display':'block'});
		// 	$('#race-weight').css({'display':'block'});
		// 	$('#illness-weight').css({'display':'block'});
		// } else if (choosers['filter'] === "gender"){
		// 	readyWeightsToBeShown();
		// 	$('#unarmed-weight').css({'display':'block'});
		// 	$('#illness-weight').css({'display':'block'});
		// } else if (choosers['filter'] === "unarmed"){
		// 	readyWeightsToBeShown();
		// 	$('#shots-weight').css({'display':'block'});
		// } else if (choosers['filter'] === "illness"){
		// 	readyWeightsToBeShown();
		// 	$('#race-weight').css({'display':'block'});
		// 	$('#age-weight').css({'display':'block'});
		// } else if (choosers['filter'] === "shots"){
		// 	readyWeightsToBeShown();
		// 	$('#race-weight').css({'display':'block'});
		// 	$('#unarmed-weight').css({'display':'block'});
		// } else {
		// 	removeAllWeights();
		// }
	} else {
		removeAllWeights();
	}
};

function removeAllWeights(){
	$('.button-header, .button-weight').css({'display':'none'});
	// $('.button-weight').css({'display':'none'});
};

// function readyWeightsToBeShown(){
// 	$(".button-header").css({"display":"block"});
// 	$(".button-weight").css({"display":"none"});
// };
