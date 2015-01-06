function readyWeightsToBeShown(){
	$(".button-header").css({"display":"block"});
	$(".button-weight").css({"display":"none"});
};

function removeAllWeights(){
	$('.button-header, .button-weight').css({'display':'none'});
};

function replaceWeight(weight, callback){
  if ($(weight).hasClass('weight-type')) {
    $(weight).removeClass('weight-type');
  } else {
    $('.button-weight').removeClass('weight-type');
    $(weight).addClass('weight-type');
  };  
  callback();
};

function detectWeight(){
  var weight = $('.weight-type').attr('id');
  if (weight===undefined) {
    return "none";
  } else if (weight==="usPop-weight") {
    return "usPop";
  } else if (weight==="arrests-weight") {
    return "arrests";
  } else if (weight==="race-weight") {
    return "race";
  } else if (weight==="age-weight") {
    return "age";
  } else if (weight==="unarmed-weight") {
    return "unarmed";
  } else if (weight==="illness-weight") {
    return "illness";
  } else if (weight==="shots-weight") {
    return "shots";
  }
};

function removeAllWeightListviews(){
  $('.weight-checkbox-form, .weight-range-form').css({"display":"none"});
};
