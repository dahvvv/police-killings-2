function shotsRange(){
  var min = $('#shots-min').val();
  min = min === "" ? 0 : min;
  var max = $('#shots-max').val();
  max = max === "" ? 999 : max;
  return {min: parseInt(min), max: parseInt(max)};
};

function shotsWRange(){
  var min = $('#shots-w-min').val();
  min = min === "" ? 0 : min;
  var max = $('#shots-w-max').val();
  max = max === "" ? 999 : max;
  return {min: parseInt(min), max: parseInt(max)};
};

function dataFilterShotsWeightNone(){
  var stateView = ($("#state-filter").val());
  arr = allKillings.filter(function(el){
    if (stateView === null || stateView === "USA"){
      return el.shots_fired >= shotsRange().min 
      && el.shots_fired <= shotsRange().max;
    } else {
      return el.shots_fired >= shotsRange().min 
      && el.shots_fired <= shotsRange().max
      && el.location_of_killing_state === stateView;
    };
  });
  return arr;
};
