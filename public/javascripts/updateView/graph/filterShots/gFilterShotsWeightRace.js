function updateGraphFilterShotsWeightRace(){
	var labels = labelsGraphFilterShotsWeightRace;
	for (i = 1; i < 20; i++){
		labels["labelObjCrossGraph"][i] = [0,0,0,0,0]
	};
	labels["labelObjCrossGraph"]["20+"] = [0,0,0,0,0];
	labels = dataGraphFilterShotsWeightRace(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
  $.each($(".graph-legend-container").children(".legend-text"), function(i,span){
    var race = span.innerHTML
    .split("<")[0]
    .toLowerCase();
    race = capitalize(abbreviateRace(race, "vertical"));
    this.innerHTML = race + "<br>";
  });
	var data = labelsToData(labels);
	var style = styleGraphFilterShotsWeightRace;
	createGraph(data, style);
	var program = programs.graph.shots.race;
	$('#program').html(program);
  $(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function dataGraphFilterShotsWeightRace(labels){
	$.each(allKillings, function(i,obj){
		if (obj.shots_fired === null || obj.victim_race === null){
			return true;
		} else if (obj.shots_fired < 20){
			var shots = obj.shots_fired;
		} else if (obj.shots_fired >= 20){
			var shots = "20+";
		};
		var race = obj.victim_race;
		labels["labelObjCrossGraph"][shots][labels["labelArrUpGraph"].indexOf(race)]++;
	});
	return labels;
};

var labelsGraphFilterShotsWeightRace = {
	colorArr : [
    "#3366FF",
    "#5200A3",
    "#FF0000",
    "#FF6600",
    "#FFFF00",
  ],
  labelArrUpGraph : [
    "white",
    "black",
    "hispanic and/or latin",
    "asian",
    "alaskan and/or pacific islander",
  ],
  labelObjCrossGraph : {}
};

var styleGraphFilterShotsWeightRace = {
	injectInto: 'display-container',
  animate: true,
  orientation: 'vertical',
  barsOffset: 0,
  Margin: {
    top:2,
    left: 0,
    right: 0,
    bottom:2
  },
  labelOffest: 0,
  type: 'stacked:gradient',
  showAggregates: false,
  showLabels: true,
  Label: {
    type: 'HTML',
    size: 13,
    family: 'Helvetica',
    color: 'white',
    weight: 'bold'
  },
  Tips: {
    enable: true,
    onShow: function(tip, elem) {
      var isAre = elem.value === 1 ? "is" : "are";
      var caseCases = elem.value === 1 ? "case" : "cases";
      tip.innerHTML = "<p>There " + isAre + " " + elem.value + " recorded " + caseCases + " in which the police shot " + elem.label + " times, and the victim was " + elem.name + ".";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterShotsWeightRaceTipSample(node);
    }
  }
};

function graphFilterShotsWeightRaceTipSample(elem){
  var race = elem.name;
  var shots = elem.label;
  var collection = allKillings.filter(function(el){
    if (shots === "20+"){
      return el.shots_fired > 20 && el.victim_race === race;
    } else {
      return el.shots_fired === parseInt(shots) && el.victim_race === race;
    };
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};

