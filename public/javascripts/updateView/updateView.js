function updateView(choosers){
	if (choosers.displaySelector === "heatmap"){
		updateHeatmap(choosers);
	} else if (choosers.displaySelector === "marker"){
		updateMarkermap(choosers);
	} else if (choosers.displaySelector === "graph"){
		updateGraph(choosers);
	};
};

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
