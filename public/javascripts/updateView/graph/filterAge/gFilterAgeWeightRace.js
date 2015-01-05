function updateGraphFilterAgeWeightRace(){
	var labels = labelsGraphFilterAgeWeightRace;
	var min = ageRange()[0];
	var max = ageRange()[1];
	for (var age = min; age <= max; age++){
		labels["labelObjCrossGraph"][age] = [0,0,0,0,0];
	};
	labels = dataGraphFilterAgeWeightRace(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterAgeWeightRace;
	createGraph(data, style);
	var program = "<p class='program-text one-line'>Age race Graph</p>";
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
      tip.innerHTML = elem.name + " " + elem.label + "-year-olds<br>who were killed by the police:<br>" + elem.value;
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
