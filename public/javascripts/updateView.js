function updateView(choosers){
	if (choosers.displaySelector === "heatmap"){
		updateHeatmap(choosers);
	} else if (choosers.displaySelector === "markmermap"){
		updateMarkermap(choosers);
	} else if (choosers.displaySelector === "graph"){
		updateGraph(choosers);
	};
};

function readyWeightsToBeShown(){
	$(".button-header").css({"display":"block"});
	$(".button-weight").css({"display":"none"});
};


function updateHeatmap(choosers){};
function updateMarkermap(choosers){};


function updateGraph(choosers){
	$(".filter-checkbox-form, #age-range, #shots-range").css({"display":"none"});
	emptyGraph(selectGraphFilter(choosers));
};

function emptyGraph(callback){
  if ($("#map-one").css("display") != "none") {
    $("#map-one").slideToggle(750, callback);
  } else {
    $("#display-container-canvaswidget").remove();
    callback();
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
	}
};


function updateGraphFilterUspop(choosers){};
function updateGraphFilterAge(choosers){};
function updateGraphFilterGender(choosers){};
function updateGraphFilterUnarmed(choosers){};
function updateGraphFilterIllness(choosers){};
function updateGraphFilterShots(choosers){};




function updateGraphFilterRace(choosers){
	readyWeightsToBeShown();
	$("#usPop-weight, #arrests-weight, #age-weight, #illness-weight").css({"display":"block"});
	if (choosers.weight === "none"){
		updateGraphFilterRaceWeightNone();
	} else if (choosers.weight === "usPop"){
		updateGraphFilterRaceWeightUspop();
	} else if (choosers.weight === "arrests"){
		updateGraphFilterRaceWeightArrests();
	} else if (choosers.weight === "poverty"){
		updateGraphFilterRaceWeightPoverty();
	} else if (choosers.weight === "race"){
		updateGraphFilterRaceWeightRace();
	} else if (choosers.weight === "age"){
		updateGraphFilterRaceWeightAge();
	} else if (choosers.weight === "unarmed"){
		updateGraphFilterRaceWeightUnarmed();
	} else if (choosers.weight === "illness"){
		updateGraphFilterRaceWeightIllness();
	} else if (choosers.weight === "shots"){
		updateGraphFilterRaceWeightShots();
	};
};


function updateGraphFilterRaceWeightUspop(){};
function updateGraphFilterRaceWeightArrests(){};
function updateGraphFilterRaceWeightPoverty(){};
function updateGraphFilterRaceWeightRace(){};
function updateGraphFilterRaceWeightAge(){};
function updateGraphFilterRaceWeightUnarmed(){};
function updateGraphFilterRaceWeightIllness(){};
function updateGraphFilterRaceWeightShots(){};


function updateGraphFilterRaceWeightNone(){
	var data = dataFilterRaceWeightNone();
	var graphData = dataGraphFilterRaceWeightNone();
	var graphStyle = styleGraphFilterRaceWeightNone();
	makeGraph(graphData, graphStyle);
	var program = "<p class='program-text one-line'>Police deaths by race, measured in percentage.</p>";
	$('#program').html(program);
};

function dataFilterRaceWeightNone(){
  var checkedBoxes = $('#race-selection').children('input:checked');
  var checkedRaces = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  checkedRaces = reorderRaces(checkedRaces);
  var arr = [];
  $.each(checkedRaces, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_race === val;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function reorderRaces(raceArr){
  var newOrder = ["white","black","hispanic and/or latin","asian","alaskan and/or pacific islander"];
  var reordered = [];
  $.each(newOrder, function(i,race){
    if ($.inArray(race,raceArr) >= 0){
      reordered.push(race);
    };
  });
  return reordered;
};

function makeGraph(data, style){
	var graph = new $jit.BarChart(style);
	graph.loadJSON(data);
};
