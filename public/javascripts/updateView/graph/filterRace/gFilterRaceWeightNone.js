function updateGraphFilterRaceWeightNone(){
	var labels = labelsGraphFilterRaceWeightNone;
	labels = dataGraphFilterRaceWeightNone(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterRaceWeightNone;
	createGraph(data, style);
	var program = "<p class='program-text one-line'>Police deaths by race, measured in percentage.</p>";
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
  labelArrUpGraph : ["deaths per race"],
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
      tip.innerHTML = "In the United States,<br>" + elem.value + " " + elem.label + " people<br>have been killed by police.";
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
