function updateGraphFilterRaceWeightIllness(){
	var labels = labelsGraphFilterRaceWeightIllness();
	labels = dataGraphFilterRaceWeightIllness(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterRaceWeightIllness;
	createGraph(data, style);
	var program = "<p class='program-text two-line'>Over 35% of asian people killed by police<br>were exhibiting clear signs of mental illness.</p>";
	$('#program').html(program);
};

function dataGraphFilterRaceWeightIllness(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_race === null || obj.victim_race === "other" || obj.symptoms_of_mental_illness === null){
			return true;
		} else {
			var race = abbreviateRace(obj.victim_race, "horizontal");
		};
		var illness = obj.symptoms_of_mental_illness === "yes" ? "symptoms" : "no symptoms";
		labels["labelObjCrossGraph"][race][labels["labelArrUpGraph"].indexOf(illness)]++;
	});
	$.each(labels["labelObjCrossGraph"], function(race, deathsArr){
		var totalKilledRace = deathsArr.reduce(function(prev,current){
			return prev + current;
		});
		labels["labelObjCrossGraph"][race] = $.map(deathsArr, function(totalKilled){
			var percentKilledTimesHun = Math.ceil((totalKilled/totalKilledRace) * 10000);
			return percentKilledTimesHun;
		});
	});
	return labels;
};

function labelsGraphFilterRaceWeightIllness(){
	return {
		colorArr : [secondColor, baseColor],
	  labelArrUpGraph : ["symptoms", "no symptoms"],
	  labelObjCrossGraph : {
	  	"white": [0,0],
	  	"black": [0,0],
	  	"hispanic": [0,0],
	  	"asian": [0,0],
	  	"ak / p.i.": [0,0]
	  }
	};
};

// function zeroFillArr(length){
// 	var arr = [];
// 	for (i = 0; i < length; i++){
// 		arr.push(0);
// 	};
// 	return arr;
// };

var styleGraphFilterRaceWeightIllness = {
	injectInto: 'display-container',
  animate: true,
  orientation: 'horizontal',
  barsOffset: 10,
  Margin: {
    top:15,
    left: 25,
    right: 25,
    bottom:15
  },
  labelOffest:5,
  type: 'stacked:gradient',
  showAggregates: false,
  showLabels: true,
  Label: {
    type: 'Native',
    size: 16,
    family: 'Helvetica',
    color: '#c8cdcf',
    // weight: 'bold'
  },
  Tips: {
    enable: true,
    onShow: function(tip, elem) {
      elem.label = expandRace(elem.label, "horizontal");
      tip.innerHTML = elem.value + " percent<br>of " + elem.label + " people killed by police<br>were exhibiting " + elem.name + " of mental illness.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterRaceWeightIllnessTipSample(node);
    }
  }
};

function graphFilterRaceWeightIllnessTipSample(elem){
  if (elem.name === "symptoms"){
    var symptoms = "yes";
  } else if (elem.name === "no symptoms"){
    var symptoms = "no";
  };
  var race = expandRace(elem.label,"horizontal");
  var collection = allKillings.filter(function(el){
    return el.symptoms_of_mental_illness === symptoms && el.victim_race === race;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
