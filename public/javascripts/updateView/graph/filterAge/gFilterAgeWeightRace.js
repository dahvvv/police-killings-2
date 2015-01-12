function updateGraphFilterAgeWeightRace(){
	var labels = labelsGraphFilterAgeWeightRace;
	var min = ageRange()[0];
	var max = ageRange()[1];
	for (var age = min; age <= max; age++){
		labels["labelObjCrossGraph"][age] = [0,0,0,0,0];
	};
	labels = dataGraphFilterAgeWeightRace(labels);
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
	var style = styleGraphFilterAgeWeightRace;
	createGraph(data, style);
	var program = "<p>This graph shows how many people of different races have been killed by police, for each year of age.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/GkY1nCi.png' /><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/JRaoZ76.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see the source article for a new person.</p><a style='cursor:pointer' href='http://www.nytimes.com/2009/11/23/nyregion/23shoot.html?_r=0' target='_blank'><img src='http://i.imgur.com/UlNpidf.png' /></a>";
	$('#program').html(program);
};

function dataGraphFilterAgeWeightRace(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_age === null || obj.victim_race === null){
			return true;
		} else {
			var age = obj.victim_age;
		};
		var race = obj.victim_race;
		labels["labelObjCrossGraph"][age][labels["labelArrUpGraph"].indexOf(race)]++;
	});
	return labels;
};

var labelsGraphFilterAgeWeightRace = {
	colorArr : [
      "#3366FF",
      "#5200A3",
      "#FF0000",
      "#FF6600",
      "#FFFF00",
      // "#33CC33"
    ],
  labelArrUpGraph : races,
  labelObjCrossGraph : {}
};

var styleGraphFilterAgeWeightRace = {
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
  showLabels: function(i){
    if (i%10===0) {
      return true
    } else {
      return false
    }
  },
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
      var yearYears = elem.label === "1" ? "year" : "years";
      tip.innerHTML = "The police have killed " + elem.value + " people<br>who were " + elem.label + " " + yearYears + " old<br>and " + elem.name + "."
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterAgeWeightRaceTipSample(node);
    }
  }
};

function graphFilterAgeWeightRaceTipSample(elem){
  var race = elem.name;
  var age = parseInt(elem.label);
  var collection = allKillings.filter(function(el){
    return el.victim_age === age && el.victim_race === race;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
