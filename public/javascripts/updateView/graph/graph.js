function updateGraph(choosers){
	$(".filter-checkbox-form, #age-range, #shots-range").css({"display":"none"});
	emptyGraph(selectGraphFilter, choosers);
};

function emptyGraph(callback, choosers){
  if ($("#map-one").css("display") != "none") {
    $("#map-one").slideToggle(750, function(){
    	callback(choosers);
    });
  } else {
    $("#display-container-canvaswidget").remove();
    callback(choosers);
  }
};

function selectGraphFilter(choosers){
	if (choosers.filter === "usPop"){
		updateGraphFilterUspop(choosers);
	} else if (choosers.filter === "race"){
		updateGraphFilterRace(choosers);
	} else if (choosers.filter === "age"){
		updateGraphFilterAge(choosers);
	} else if (choosers.filter === "gender"){
		updateGraphFilterGender(choosers);
	} else if (choosers.filter === "unarmed"){
		updateGraphFilterUnarmed(choosers);
	} else if (choosers.filter === "illness"){
		updateGraphFilterIllness(choosers);
	} else if (choosers.filter === "shots"){
		updateGraphFilterShots(choosers);
	};
};

function makeGraph(data, style){
	var graph = new $jit.BarChart(style);
	graph.loadJSON(data);
};
