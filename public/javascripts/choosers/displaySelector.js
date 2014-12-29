function replaceSelector(selector, callback){
  if (selector.id != "heatmaps-selector"){
    $('#age-range').children().css({"display":"none"});
  };
  $('.display-selector').removeClass('display-type');
  $(selector).addClass('display-type');
  callback();
};