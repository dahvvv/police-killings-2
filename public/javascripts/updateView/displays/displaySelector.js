function replaceSelector(selector, callback){
  $('.display-selector').removeClass('display-type');
  $(selector).addClass('display-type');
  callback();
};

function detectDisplaySelector(){
  var displayStyle = $('.display-type').attr('id');
  if (displayStyle==="heatmaps-selector") {
    return "heatmap";
  } else if (displayStyle==="markers-selector") {
    return "marker";
  } else {
    return "graph";
  };
};
