function replaceFilter(filter, callback){
  if ($(filter).hasClass('race-selection-submit')) {
    var filter = $('#race-filter');
  } else {
  	$('#race-selection').css({"display":"none"});
  };
  if ($(filter).hasClass('age-range-submit')) {
    var filter = $('#age-filter');
  } else {
    $('#age-range').css({"display":"none"});
  };
  if ($(filter).hasClass('gender-selection-submit')) {
    var filter = $('#gender-filter');
  } else {
    $('#gender-selection').css({"display":"none"});
  };
  if ($(filter).hasClass('unarmed-selection-submit')) {
    var filter = $('#unarmed-filter');
  } else {
    $('#unarmed-selection').css({"display":"none"});
  };
  if ($(filter).hasClass('illness-selection-submit')) {
    var filter = $('#illness-filter');
  } else {
    $('#illness-selection').css({"display":"none"});
  };
  if ($(filter).hasClass('shots-range-submit')) {
    var filter = $('#shots-filter');
  } else {
    $('#shots-range').css({"display":"none"});
  };
  
  $('.button-filter').removeClass('filter-type');
  $(filter).addClass('filter-type');
  callback();
};

function detectFilter(){
  var filter = $('.filter-type').attr('id');
  if (filter==="usPop-filter") {
    return "usPop";
  } else if (filter==="race-filter") {
    return "race";
  } else if (filter==="age-filter") {
    return "age";
  } else if (filter==="state-filter") {
    return "state";
  } else if (filter==="gender-filter") {
    return "gender";
  } else if (filter==="unarmed-filter") {
    return "unarmed";
  } else if (filter==="illness-filter") {
    return "illness";
  } else if (filter==="shots-filter") {
    return "shots";
  }
};

function removeAllListviews(){
  $('.filter-checkbox-form, .filter-range-form').css({"display":"none"});
};
