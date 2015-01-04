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
	} else if (choosers.weight === "age"){
		updateGraphFilterRaceWeightAge();
	} else if (choosers.weight === "illness"){
		updateGraphFilterRaceWeightIllness();
	};
};


function updateGraphFilterRaceWeightUspop(){
	var data = dataFilterRaceWeightNone();
	var graphData = dataGraphFilterRaceWeightUspop();
	var graphStyle = styleGraphFilterRaceWeightUspop();
	makeGraph(graphData, graphStyle);
	var program = "<p class='program-text two-line'>When races are compared in terms of deaths per capita,<br>as opposed to deaths total, the portion of white victims drops from 49% to 10%.</p>";
	$('#program').html(program);
};

function updateGraphFilterRaceWeightArrests(){
	var data = dataFilterRaceWeightNone();
	var graphData = dataGraphFilterRaceWeightArrests();
	var graphStyle = styleGraphFilterRaceWeightArrests();
	makeGraph(graphData, graphStyle);
	var program = "<p class='program-text one-line'>The broad likelihood of a single arrest resulting in death, by race.</p>";
	$('#program').html(program);
};

function updateGraphFilterRaceWeightAge(){
	var data = dataFilterRaceWeightNone();
	var graphData = dataGraphFilterRaceWeightAge();
	var graphStyle = styleGraphFilterRaceWeightAge();
	makeGraph(graphData, graphStyle);
	var program = "<p class='program-text four-line'>Dark purple represents victims of near-average age.<br>Bright colors to the left represent younger victims.<br>Older victims are represented by bright colors to the right.<br>You can see that black victims skew much younger than white victims.</p>";
	$('#program').html(program);
};

function updateGraphFilterRaceWeightIllness(){
	var data = dataFilterRaceWeightNone();
	var graphData = dataGraphFilterRaceWeightIllness();
	var graphStyle = styleGraphFilterRaceWeightIllness();
	makeGraph(graphData, graphStyle);
	var program = "<p class='program-text two-line'>Over 35% of asian people killed by police<br>were exhibiting clear signs of mental illness.</p>";
	$('#program').html(program);
};


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
