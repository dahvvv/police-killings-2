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
  $('.button-filter').removeClass('filter-type');
  $(filter).addClass('filter-type');
  callback();
};