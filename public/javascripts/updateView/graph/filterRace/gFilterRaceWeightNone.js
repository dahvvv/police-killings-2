function updateGraphFilterRaceWeightNone(){
	var labels = labelsGraphFilterRaceWeightNone;
	labels = dataGraphFilterRaceWeightNone(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterRaceWeightNone;
	createGraph(data, style);
	var program = "<p>This graph shows how many people have been killed by police, by race.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/Vo28qyh.png' /><p>Click on a bar to see the source for a randomly selected person of that race.</p><img src='http://i.imgur.com/KLzted8.png' /><p>Significantly more white people have been killed by police than any other race.  However, white people make up over 75% of the US population.  To see the data scaled by population, click 'population' on the righthand column.</p><img src='http://i.imgur.com/XaK8FrK.png' />";
	$('#program').html(program);
};

function dataGraphFilterRaceWeightNone(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_race === null || obj.victim_race === "other"){
			return true;
		} else {
			var race = abbreviateRace(obj.victim_race, "vertical");
		};
		labels["labelObjCrossGraph"][race][0]++;
	});
	return labels;
};

var labelsGraphFilterRaceWeightNone = {
	colorArr : [baseColor],
  labelArrUpGraph : ["people killed by police"],
  labelObjCrossGraph : {
  	"white" : [0],
  	"black" : [0],
  	"hispanic/latin" : [0],
  	"asian" : [0],
  	"alaskan/p.i." : [0],
  }
};

var styleGraphFilterRaceWeightNone = {
	injectInto: 'display-container',
  animate: true,
  orientation: 'vertical',
  barsOffset: 10,
  Margin: {
    top:5,
    left: 15,
    right: 15,
    bottom:5
  },
  labelOffest:5,
  type: 'stacked:gradient',
  showAggregates: true,
  showLabels: true,
  Label: {
    type: 'HTML',
    size: 16,
    family: 'Helvetica',
    color: '#c8cdcf',
    // weight: 'bold'
  },
  Tips: {
    enable: true,
    onShow: function(tip, elem) {
      var race = expandRace(elem.label, "vertical");
      tip.innerHTML = "In the United States,<br>" + elem.value + " " + race + " people<br>have been killed by police.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterRaceWeightNoneTipSample(node);
    }
  }
};

function graphFilterRaceWeightNoneTipSample(elem){
  var race = expandRace(elem.label,"vertical");
  var collection = allKillings.filter(function(el){
    return el.victim_race === race;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
