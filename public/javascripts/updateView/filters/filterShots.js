function shotsRange(){
  var min = $('#shots-min').val();
  min = min === "" ? 0 : min;
  var max = $('#shots-max').val();
  max = max === "" ? 999 : max;
  return {min: min, max: max};
};

function dataFilterShotsWeightNone(){
  arr = allKillings.filter(function(el){
    return el.shots_fired >= shotsRange().min 
    && el.shots_fired <= shotsRange().max;
  });
  return arr;
};
