function dataFilterShots(choosers){
  if (choosers.weight === "none"){
    return dataFilterShotsWeightNone();
  } else if (choosers.weight === "race"){
    return dataFilterShotsWeightRace(choosers);
  }
};

// function dataFilterShotsWeightNone(){
//   arr = allKillings.filter(function(el){
//     return el.shots_fired >= shotsRange().min && el.shots_fired <= shotsRange().max;
//   });
//   return arr;
// };

function dataFilterShotsWeightRace(choosers){
  if (choosers.displaySelector === "heatmap"){
    return filterByShots();
  } else if (choosers.displaySelector === "marker"){
    return filterShots20Plus();
  }
};

// function shotsRange(){
//   var min = $('#shots-min').val();
//   min = min === "" ? 0 : min;
//   var max = $('#shots-max').val();
//   max = max === "" ? 999 : max;
//   return {min: min, max: max};
// };
