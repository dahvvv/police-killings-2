function filterData(choosers){
	if (choosers.displaySelector === "heatmap"){
		return filterHeatmap(choosers);
	} else if (choosers.displaySelector === "marker"){
		return filterMarkermap(choosers);
	} else if (choosers.displaySelector === "graph"){
		return filterGraph(choosers);
	}
};

function filterByRace(){
  var checkedBoxes = $('#race-selection').children('input:checked');
  var races = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  var arr = [];
  $.each(races, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_race === val;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function filterHeatmap(choosers){
  if (choosers.weight === "none"){
    return filterHeatmapWeightNone(choosers);
  }
};

function filterHeatmapWeightNone(choosers){
  if (choosers.filter === "usPop"){
    return allKillings;
  } else if (choosers.filter === "race"){
    return filterByRace();
  }
};

function filterMarkermap(choosers){
	if (choosers.weight === "none"){
		return filterMarkermapWeightNone(choosers);
	}
};

function filterMarkermapWeightNone(choosers){
	if (choosers.filter === "usPop"){
		return allKillings;
	}
};