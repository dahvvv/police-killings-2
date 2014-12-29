function replaceFilter(filter, callback){
  if (filter.id != "age-filter") {
    $('#age-range').children().css({"display":"none"});
  };
  if (filter.id != "race-filter") {
    $('#race-selection').css({"display":"none"});
  };
  $('.button-filter').removeClass('filter-type');
  $(filter).addClass('filter-type');
  callback();
};