function updateGraphFilterRaceWeightArrests(){
	var labels = labelsGraphFilterRaceWeightArrests;
	labels = dataGraphFilterRaceWeightArrests(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterRaceWeightArrests;
	createGraph(data, style);
	var program = "<p class='program-text one-line'>The broad likelihood of a single arrest resulting in death, by race.</p>";
	$('#program').html(program);
};

function dataGraphFilterRaceWeightArrests(labels){
	$.each(allKillings, function(i,obj){
		if (_.contains([null,"other","hispanic and/or latin"], obj.victim_race)){
			return true;
		} else {
			var abbrRace = abbreviateRace(obj.victim_race, "vertical");
		};
		labels["labelObjCrossGraph"][abbrRace][0]++;
	});
	$.each(labels["labelObjCrossGraph"], function(abbrRace, deaths){
		var race = expandRace(abbrRace, "vertical");
		var totalKilledPerCap = deaths[0] / arrestsByRace[race];
		var adjustedPerCap = Math.ceil(totalKilledPerCap * 100000);
		labels["labelObjCrossGraph"][abbrRace] = [adjustedPerCap];
	});
	return labels;
};

var labelsGraphFilterRaceWeightArrests = {
	colorArr : [baseColor],
  labelArrUpGraph : ["police deaths per hundred thousand arrests, by race"],
  labelObjCrossGraph : {
  	"white" : [0],
  	"black" : [0],
  	"asian" : [0],
  	"alaskan/p.i." : [0],
  }
};

var styleGraphFilterRaceWeightArrests = {
	injectInto: 'display-container',
  animate: true,
  orientation: 'vertical',
  barsOffset: 50,
  Margin: {
    top:25,
    left: 50,
    right: 50,
    bottom:10
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
      var race = expandRace(elem.label,"vertical");
      tip.innerHTML = "For every hundred thousand arrests<br>made on " + race + " people<br>in the United States,<br>" + elem.value + " " + race + " people<br>have been killed by the police.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterRaceWeightArrestsTipSample(node);
    }
  }
};

function graphFilterRaceWeightArrestsTipSample(elem){
  var race = expandRace(elem.label,"vertical");
  var collection = allKillings.filter(function(el){
    return el.victim_race === race;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
