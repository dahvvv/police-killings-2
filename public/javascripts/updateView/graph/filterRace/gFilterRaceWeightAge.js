function updateGraphFilterRaceWeightAge(){
	var labels = labelsGraphFilterRaceWeightAge();
	labels = dataGraphFilterRaceWeightAge(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterRaceWeightAge;
	createGraph(data, style);
	var program = "<p class='program-text four-line'>Dark purple represents victims of near-average age.<br>Bright colors to the left represent younger victims.<br>Older victims are represented by bright colors to the right.<br>You can see that black victims skew much younger than white victims.</p>";
	$('#program').html(program);
};

function dataGraphFilterRaceWeightAge(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_race === null || obj.victim_race === "other" || obj.victim_age === null){
			return true;
		} else {
			var race = abbreviateRace(obj.victim_race, "horizontal");
		};
		var age = obj.victim_age;
		labels["labelObjCrossGraph"][race][labels["labelArrUpGraph"].indexOf(age)]++;
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

function labelsGraphFilterRaceWeightAge(){
	var ageRangeArr = Array.apply(null, Array(ageRange()[1])).map(function (_, i) {
		return i+1;
	});
	var length = ageRangeArr.length;
	return {
		colorArr : hexScaler("#FFFFFF","#FFFF00",9)
	  .slice(0,8)
	  .concat(hexScaler("#FFFF00","#FF6600",7))
	  .slice(0,14)
	  .concat(hexScaler("#FF6600","#FF0000",7))
	  .slice(0,20)
	  .concat(hexScaler("#FF0000","#551A8B",7))
	  .concat(hexScaler("#551A8B","#551A8B",14))
	  .concat(hexScaler("#551A8B","#FF0000",8))
	  .slice(0,48)
	  .concat(hexScaler("#FF0000","#FF6600",7))
	  .slice(0,54)
	  .concat(hexScaler("#FF6600","#FFFF00",8))
	  .slice(0,61)
	  .concat(hexScaler("#FFFF00","#FFFFFF",46)),
	  labelArrUpGraph : ageRangeArr,
	  labelObjCrossGraph : {
	  	"white": zeroFillArr(length),
	  	"black": zeroFillArr(length),
	  	"hispanic": zeroFillArr(length),
	  	"asian": zeroFillArr(length),
	  	"ak / p.i.": zeroFillArr(length)
	  }
	};
};

function zeroFillArr(length){
	var arr = [];
	for (i = 0; i < length; i++){
		arr.push(0);
	};
	return arr;
};

var styleGraphFilterRaceWeightAge = {
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
      elem.label = expandRace(elem.label,"horizontal");
      var age = elem.name;
      var race = elem.label;
      var totalRace = allKillings.filter(function(el){
        return el.victim_race === race;
      });
      var totalAgeRace = allKillings.filter(function(el){
        return el.victim_age === age && el.victim_race === race;
      });
      var percent = ((totalAgeRace.length/totalRace.length) * 100).toFixed(1);
      tip.innerHTML = elem.label + " " + elem.name + "-year-olds<br>make up " + percent + " percent<br>of " + elem.label + " people who were killed by police";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterRaceWeightAgeTipSample(node);
    }
  }
};

function graphFilterRaceWeightAgeTipSample(elem){
  var age = parseInt(elem.name);
  var race = expandRace(elem.label,"horizontal");
  var collection = allKillings.filter(function(el){
    return el.victim_age === age && el.victim_race === race;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
