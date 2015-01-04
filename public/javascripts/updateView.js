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
	}
};










function updateGraphFilterUspop(choosers){
	readyWeightsToBeShown();
	$("#usPop-weight, #arrests-weight, #age-weight, #illness-weight").css({"display":"block"});
	if (choosers.weight === "none"){
		updateGraphFilterUspopWeightNone();
	} else if (choosers.weight === "usPop"){
		updateGraphFilterUspopWeightUspop();
	} else if (choosers.weight === "arrests"){
		updateGraphFilterUspopWeightArrests();
	} else if (choosers.weight === "age"){
		updateGraphFilterUspopWeightAge();
	} else if (choosers.weight === "illness"){
		updateGraphFilterUspopWeightIllness();
	};
};

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

function updateGraphFilterAge(choosers){
	readyWeightsToBeShown();
	$('#usPop-weight, #arrests-weight, #race-weight, #illness-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateGraphFilterAgeWeightNone();
	} else if (choosers.weight === "usPop"){
		updateGraphFilterAgeWeightUspop();
	} else if (choosers.weight === "arrests"){
		updateGraphFilterAgeWeightArrests();
	} else if (choosers.weight === "race"){
		updateGraphFilterAgeWeightRace();
	} else if (choosers.weight === "illness"){
		updateGraphFilterAgeWeightIllness();
	}
};

function updateGraphFilterGender(choosers){
	readyWeightsToBeShown();
	$('#unarmed-weight, #illness-weight').css({'display':'block'});
	var checkedBoxes = $('#gender-selection').children('input:checked');
  var checkedGenders = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
	if (choosers.weight === "none"){
		updateGraphFilterGenderWeightNone(checkedGenders);
	} else if (choosers.weight === "unarmed"){
		updateGraphFilterGenderWeightUnarmed(checkedGenders);
	} else if (choosers.weight === "illness"){
		updateGraphFilterGenderWeightIllness(checkedGenders);
	}
};

function updateGraphFilterUnarmed(choosers){
	readyWeightsToBeShown();
	$('#shots-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateGraphFilterUnarmedWeightNone();
	} else if (choosers.weight === "shots"){
		updateGraphFilterUnarmedWeightShots();
	}
};


function updateGraphFilterIllness(choosers){
	readyWeightsToBeShown();
	$('#race-weight, #age-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateGraphFilterIllnessWeightNone();
	} else if (choosers.weight === "race"){
		updateGraphFilterIllnessWeightRace();
	} else if (choosers.weight === "age"){
		updateGraphFilterIllnessWeightAge();
	}
};

function updateGraphFilterShots(choosers){
	readyWeightsToBeShown();
	$('#race-weight, #unarmed-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateGraphFilterShotsWeightNone();
	} else if (choosers.weight === "race"){
		updateGraphFilterShotsWeightRace();
	} else if (choosers.weight === "unarmed"){
		updateGraphFilterShotsWeightUnarmed();
	}
};


function updateGraphFilterUspopWeightNone(){
	var data = allKillings;
	var graphInfo = infoGraphFilterUspopWeightNone();
	var graphStyle = styleGraphFilterUspopWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>New York and Las Vegas have far more deaths by police<br>than any other city.  If it were its own city, Brooklyn would be third.</p>";
	$('#program').html(program);
};

function updateGraphFilterUspopWeightUspop(){
	var data = allKillings;
	var graphInfo = infoGraphFilterUspopWeightUspop();
	var graphStyle = styleGraphFilterUspopWeightUspop();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>When the same cities are scaled by their populations,<br>the degree to which Las Vegas is an outlier becomes clear.</p>";
	$('#program').html(program);
};

function updateGraphFilterRaceWeightNone(){
	var data = dataFilterRaceWeightNone();
	var graphInfo = infoGraphFilterRaceWeightNone();
	var graphStyle = styleGraphFilterRaceWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Police deaths by race, measured in percentage.</p>";
	$('#program').html(program);
};

function updateGraphFilterAgeWeightNone(){
	var data = filterAgeNotNil();
	var graphInfo = infoGraphFilterAgeWeightNone();
	var graphStyle = styleGraphFilterAgeWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>The oldest recorded person killed by a police officer was <a href='http://www.huffingtonpost.com/2013/09/08/monroe-isadore-shootout_n_3889826.html' target='_blank'>107</a> years old.<br>The youngest <a href='http://newyork.cbslocal.com/2013/04/15/police-3-dead-in-brooklyn-shooting/' target='_blank'>have</a> <a href='http://articles.latimes.com/2005/jul/15/local/me-shooting15' target='_blank'>been</a> <a href='https://www.oxnardpd.org/pressreleases/1537/' target='_blank'>1</a>.</p>";
	$('#program').html(program);
};

function updateGraphFilterAgeWeightUspop(){
	var data = filterAgeNotNil();
	var graphInfo = infoGraphFilterAgeWeightUspop();
	var graphStyle = styleGraphFilterAgeWeightUspop();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Age Population Graph</p>";
	$('#program').html(program);
};

function updateGraphFilterAgeWeightArrests(){
	var data = filterAgeNotNil();
	var graphInfo = infoGraphFilterAgeWeightArrests();
	var graphStyle = styleGraphFilterAgeWeightArrests();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Age arrests Graph</p>";
	$('#program').html(program);
};

function updateGraphFilterAgeWeightRace(){
	var data = filterAgeNotNil();
	var graphInfo = infoGraphFilterAgeWeightRace();
	var graphStyle = styleGraphFilterAgeWeightRace();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Age race Graph</p>";
	$('#program').html(program);
};

function updateGraphFilterAgeWeightIllness(){
	var data = filterAgeNotNil();
	var graphInfo = infoGraphFilterAgeWeightIllness();
	var graphStyle = styleGraphFilterAgeWeightIllness();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Age illness Graph</p>";
	$('#program').html(program);
};


function updateGraphFilterGenderWeightNone(checkedGenders){
	var data = dataFilterGenderWeightNone(checkedGenders);
	var graphInfo = infoGraphFilterGenderWeightNone();
	var graphStyle = styleGraphFilterGenderWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>92.5% of people killed by police are male.<br>7.5% of people killed by police are female.</p>";
	$('#program').html(program);
};

function updateGraphFilterGenderWeightUnarmed(checkedGenders){
	var data = dataFilterGenderWeightUnarmed(checkedGenders);
	var graphInfo = infoGraphFilterGenderWeightUnarmed();
	var graphStyle = styleGraphFilterGenderWeightUnarmed();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>21% of men killed by police were unarmed.<br>37% of women killed by police were unarmed.</p>";
	$('#program').html(program);
};

function updateGraphFilterGenderWeightIllness(checkedGenders){
	var data = dataFilterGenderWeightIllness(checkedGenders);
	var graphInfo = infoGraphFilterGenderWeightIllness();
	var graphStyle = styleGraphFilterGenderWeightIllness();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>21% of men killed by police were exhibiting signs of mental illness.<br>28% of women killed by police were exhibiting signs of mental illness.</p>";
	$('#program').html(program);
};

function updateGraphFilterUnarmedWeightNone(){
	var data = dataFilterUnarmedWeightNone();
	var graphInfo = infoGraphFilterUnarmedWeightNone();
	var graphStyle = styleGraphFilterUnarmedWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Victims of police shootings were unarmed in over 20% of recorded cases.</p>";
	$('#program').html(program);
};

function updateGraphFilterUnarmedWeightShots(){
	var data = dataFilterUnarmedWeightNone();
	var graphInfo = infoGraphFilterUnarmedWeightShots();
	var graphStyle = styleGraphFilterUnarmedWeightShots();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text three-line'>Twenty times,<br>the police have killed someone by firing at least ten shots,<br>and the victim was unarmed.</p>";
	$('#program').html(program);
};

function updateGraphFilterIllnessWeightNone(){
	var data = dataFilterIllnessWeightNone();
	var graphInfo = infoGraphFilterIllnessWeightNone();
	var graphStyle = styleGraphFilterIllnessWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>Victims of police shootings exhibited signs of mental illness<br>in over 20% of recorded cases.</p>";
	$('#program').html(program);
};

function updateGraphFilterShotsWeightNone(){
	var data = dataFilterShotsWeightNone();
	var graphInfo = infoGraphFilterShotsWeightNone();
	var graphStyle = styleGraphFilterShotsWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>Police fired at a victim 20 times or more<br>in over 30 recorded cases.</p>";
	$('#program').html(program);
};

function updateGraphFilterIllnessWeightRace(){
	var data = dataFilterIllnessWeightNone();
	var graphInfo = infoGraphFilterIllnessWeightRace();
	var graphStyle = styleGraphFilterIllnessWeightRace();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text four-line'>White and asian people who are killed by the police<br>are the victims most likely to have been mentally ill.<br>Over 30% of white and asian people killed by police<br>were exhibiting clear signs of mental illness.</p>";
	$('#program').html(program);
};

function updateGraphFilterShotsWeightRace(){
	var data = dataFilterShotsWeightNone();
	var graphInfo = infoGraphFilterShotsWeightRace();
	var graphStyle = styleGraphFilterShotsWeightRace();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>There does not appear to be a significant relationship<br>between the number of shots fired by police and the victim's race.</p>";
	$('#program').html(program);
};

function updateGraphFilterIllnessWeightAge(){
	var data = dataFilterIllnessWeightNone();
	var graphInfo = infoGraphFilterIllnessWeightAge();
	var graphStyle = styleGraphFilterIllnessWeightAge();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text four-line'>People killed by police while showing clear signs of mental illness<br>tend to be older than people with no signs of mental illness.<br>The average age of a victim with no signs of illness is 33.4 years old.<br>For those victims with mental illness, the average age is 38.5 years old.</p>";
	$('#program').html(program);
};

function updateGraphFilterShotsWeightUnarmed(){
	var data = dataFilterShotsWeightNone();
	var graphInfo = infoGraphFilterShotsWeightUnarmed();
	var graphStyle = styleGraphFilterShotsWeightUnarmed();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>Whether the victim was armed or not, the average number of shots fired<br>by police remains about the same:  between 5.5 and 6.2 shots.</p>";
	$('#program').html(program);
};

function updateGraphFilterRaceWeightUspop(){
	var data = dataFilterRaceWeightNone();
	var graphInfo = infoGraphFilterRaceWeightUspop();
	var graphStyle = styleGraphFilterRaceWeightUspop();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>When races are compared in terms of deaths per capita,<br>as opposed to deaths total, the portion of white victims drops from 49% to 10%.</p>";
	$('#program').html(program);
};

function updateGraphFilterRaceWeightArrests(){
	var data = dataFilterRaceWeightNone();
	var graphInfo = infoGraphFilterRaceWeightArrests();
	var graphStyle = styleGraphFilterRaceWeightArrests();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>The broad likelihood of a single arrest resulting in death, by race.</p>";
	$('#program').html(program);
};

function updateGraphFilterRaceWeightAge(){
	var data = dataFilterRaceWeightNone();
	var graphInfo = infoGraphFilterRaceWeightAge();
	var graphStyle = styleGraphFilterRaceWeightAge();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text four-line'>Dark purple represents victims of near-average age.<br>Bright colors to the left represent younger victims.<br>Older victims are represented by bright colors to the right.<br>You can see that black victims skew much younger than white victims.</p>";
	$('#program').html(program);
};

function updateGraphFilterRaceWeightIllness(){
	var data = dataFilterRaceWeightNone();
	var graphInfo = infoGraphFilterRaceWeightIllness();
	var graphStyle = styleGraphFilterRaceWeightIllness();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>Over 35% of asian people killed by police<br>were exhibiting clear signs of mental illness.</p>";
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


// function dataFilterAgeWeightNone(choosers){
//   if (choosers.displaySelector === "heatmap"){
//     return filterByAge();
//   } else {
//     return filterAgeNotNil();
//   }
// };

function filterByAge(){
  var min = $('#age-min').val();
  var max = $('#age-max').val();
  arr = allKillings.filter(function(el){
    return el.victim_age >= min && el.victim_age <= max;
  });
  return arr;
};

function filterAgeNotNil(){
  arr = allKillings.filter(function(el){
    return el.victim_age != null;
  });
  return arr;
};

function dataFilterGenderWeightNone(checkedGenders){
  var arr = [];
  $.each(checkedGenders, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_gender === val;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function dataFilterGenderWeightUnarmed(checkedGenders){
  var arr = [];
  $.each(checkedGenders, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_gender === val && el.victim_unarmed != null;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function dataFilterGenderWeightIllness(checkedGenders){
  var arr = [];
  $.each(checkedGenders, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_gender === val && el.symptoms_of_mental_illness != null;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function dataFilterUnarmedWeightNone(){
  var checkedBoxes = $('#unarmed-selection').children('input:checked');
  var checkedUnarmed = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  var arr = [];
  $.each(checkedUnarmed, function(i,val){
    var filtered = allKillings.filter(function(el){
      if (val === "armed"){
        return el.victim_unarmed === false;
      } else if (val === "unarmed"){
        return el.victim_unarmed === true;
      }
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function dataFilterIllnessWeightNone(){
  var checkedBoxes = $('#illness-selection').children('input:checked');
  var checkedIllness = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  var arr = [];
  $.each(checkedIllness, function(i,val){
    var filtered = allKillings.filter(function(el){
      if (val === "ill"){
        return el.symptoms_of_mental_illness === "yes";
      } else if (val === "not-ill"){
        return el.symptoms_of_mental_illness === "no";
      }
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function dataFilterShotsWeightNone(){
  arr = allKillings.filter(function(el){
    return el.shots_fired >= shotsRange().min && el.shots_fired <= shotsRange().max;
  });
  return arr;
};

function shotsRange(){
  var min = $('#shots-min').val();
  min = min === "" ? 0 : min;
  var max = $('#shots-max').val();
  max = max === "" ? 999 : max;
  return {min: min, max: max};
};



function makeGraph(data, style){
	var graph = new $jit.BarChart(style);
	graph.loadJSON(data);
};
