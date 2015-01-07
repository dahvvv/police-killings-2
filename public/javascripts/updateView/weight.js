function readyWeightsToBeShown(){
  $(".weight").hide();
	$("#weight-header").show();
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
  return $(".weight-type").length === 0 ? "none" : $(".weight-type").attr("id");
};

function removeAllWeightListviews(){
  $('.weight-checkbox-form, .weight-range-form').css({"display":"none"});
};
