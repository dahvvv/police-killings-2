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
  } else if (filter==="gender-filter") {
    return "gender";
  } else if (filter==="unarmed-filter") {
    return "unarmed";
  } else if (filter==="illness-filter") {
    return "illness";
  } else if (filter==="shots-filter") {
    return "shots";
  }
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
  } else if (weight==="race-weight") {
    return "race";
  } else if (weight==="age-weight") {
    return "age";
  } else if (weight==="unarmed-weight") {
    return "unarmed";
  } else if (weight==="illness-weight") {
    return "illness";
  } else if (weight==="shots-weight") {
    return "shots";
  }
};
