function replaceChooser(chooser, callback){
  if ($(chooser).hasClass('button-filter')) {
    replaceFilter(chooser, callback);
  } else if ($(chooser).hasClass('display-selector')) {
    replaceSelector(chooser, callback);
  } else if ($(chooser).hasClass('button-weight')) {
    replaceWeight(chooser, callback);
  };
};

function detectChoosers(){
	var filter = detectFilter();
	var displaySelector = detectDisplaySelector();
	var weight = detectWeight();
	return {
		filter: filter,
		displaySelector: displaySelector,
		weight: weight
	};
};

function detectFilter(){
  var filter = $('.filter-type').attr('id');
  if (filter==="usPop-filter") {
    return "usPop";
  } else if (filter==="race-filter") {
    return "race";
  } else if (filter==="age-filter") {
    return "age";
  } else if (filter==="state-filter") {
    return "state";
  };
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

function detectWeight(){
  var weight = $('.weight-type').attr('id');
  if (weight===undefined) {
    return "none";
  } else if (weight==="usPop-weight") {
    return "usPop";
  } else if (weight==="arrests-weight") {
    return "arrests";
  };
};

function filterData(choosers){
	if (choosers.displaySelector === "heatmap"){
		return filterHeatmap(choosers);
	} else if (choosers.displaySelector === "marker"){
		return filterMarkermap(choosers);
	} else if (choosers.displaySelector === "graph"){
		return filterGraph(choosers);
	}
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
