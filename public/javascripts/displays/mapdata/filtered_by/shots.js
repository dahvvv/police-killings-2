function dataFilterShots(choosers){
	if (choosers.weight === "none"){
		return dataFilterShotsWeightNone(choosers);
	} else if (choosers.weight === "race"){
		return dataFilterShotsWeightRace(choosers);
	}
};

function dataFilterShotsWeightNone(choosers){
  if (choosers.displaySelector === "heatmap"){
    return filterByShots();
  } else if (choosers.displaySelector === "marker"){
    return filterShots20Plus();
  }
};

function filterByShots(){
  var min = $('#shots-min').val();
  min = min === "" ? 0 : min;
  var max = $('#shots-max').val();
  max = max === "" ? 999 : max;
  arr = allKillings.filter(function(el){
    return el.shots_fired >= min && el.shots_fired <= max;
  });
  return arr;
};

function filterShots20Plus(){
  arr = allKillings.filter(function(el){
    return el.shots_fired >= 20;
  });
  return arr;
};

function dataFilterShotsWeightRace(choosers){
  if (choosers.displaySelector === "heatmap"){
    return filterByShots();
  } else if (choosers.displaySelector === "marker"){
    return filterShots20Plus();
  }
};
