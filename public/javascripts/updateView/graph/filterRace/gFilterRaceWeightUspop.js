function updateGraphFilterRaceWeightUspop(){
	var labels = labelsGraphFilterRaceWeightUspop;
	labels = dataGraphFilterRaceWeightUspop(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterRaceWeightUspop;
	createGraph(data, style);
	var program = "<p class='program-text two-line'>When races are compared in terms of deaths per capita,<br>as opposed to deaths total, the portion of white victims drops from 49% to 10%.</p>";
	$('#program').html(program);
};

function dataGraphFilterRaceWeightUspop(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_race === null || obj.victim_race === "other"){
			return true;
		} else {
			var abbrRace = abbreviateRace(obj.victim_race, "vertical");
		};
		labels["labelObjCrossGraph"][abbrRace][0]++;
	});
	$.each(labels["labelObjCrossGraph"], function(abbrRace, deaths){
		var race = expandRace(abbrRace, "vertical");
		var totalKilledPerCap = deaths[0] / populationByRace[race];
		var adjustedPerCap = Math.ceil(totalKilledPerCap * 10000000);
		labels["labelObjCrossGraph"][abbrRace] = [adjustedPerCap];
	});
	return labels;
};

var labelsGraphFilterRaceWeightUspop = {
	colorArr : [baseColor],
  labelArrUpGraph : ["police deaths per ten million citizens, by race"],
  labelObjCrossGraph : {
  	"white" : [0],
  	"black" : [0],
  	"hispanic/latin" : [0],
  	"asian" : [0],
  	"alaskan/p.i." : [0],
  }
};

var styleGraphFilterRaceWeightUspop = {
	injectInto: 'display-container',
  animate: true,
  orientation: 'vertical',
  barsOffset: 10,
  Margin: {
    top:5,
    left: 0,
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
      var race = expandRace(elem.label,"vertical");
      tip.innerHTML = "For every ten million<br>" + race + " people<br>in the United States,<br>" + elem.value + " " + race + " people<br>have been killed by the police.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterRaceWeightUspopTipSample(node);
    }
  }
};

function graphFilterRaceWeightUspopTipSample(elem){
  var race = expandRace(elem.label,"vertical");
  var collection = allKillings.filter(function(el){
    return el.victim_race === race;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
