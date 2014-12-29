function replaceSelector(selector, callback){
  $('.display-selector').removeClass('display-type');
  $(selector).addClass('display-type');
  callback();
};

