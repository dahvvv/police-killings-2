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
	var program = "<p>This graph shows how many people of different races have been killed by police,<br>sorted by how many shots the police fired.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/vhSMmlW.png' /><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/oZl0w6R.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see the source article for a new person.</p><a style='cursor:pointer' href='http://www.dailynews.com/general-news/20130207/police-confuse-truck-for-christopher-dorners-shoot-at-3-people-in-torrance-in-case-of-mistaken-identity' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/OMrfb6k.png' /></a><a style='cursor:pointer' href='http://en.wikipedia.org/wiki/Shooting_of_Amadou_Diallo' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/DGbR6zB.png' /></a><p>Most reports of people killed by police don't include how many shots were fired.<br>But of the 502 reports that do include that information,<br>74 of them report ten shots or more.<br>That's ten shots or more in 14.7% of all reported cases.</p>";
	$('#program').html(program);
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

