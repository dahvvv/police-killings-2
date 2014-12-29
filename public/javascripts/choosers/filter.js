function replaceFilter(filter, callback){
  if (filter.id != "age-filter") {
    $('#age-range').children().css({"display":"none"});
  };
  if ($(filter).hasClass('race-selection-submit')) {
    var filter = $('#race-filter');
  } else {
  	$('#race-selection').css({"display":"none"});
  };
  $('.button-filter').removeClass('filter-type');
  $(filter).addClass('filter-type');
  callback();
};