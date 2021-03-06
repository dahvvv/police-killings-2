function updateGraphFilterRaceWeightAge(){
	var labels = labelsGraphFilterRaceWeightAge();
	labels = dataGraphFilterRaceWeightAge(labels);
  $(".graph-legend-container").empty()
  .css({"top":"44%"})
  .show();
  $(graphLegendAge).appendTo($(".graph-legend-container"));
	var data = labelsToData(labels);
	var style = styleGraphFilterRaceWeightAge;
	createGraph(data, style);
  var program = programs.graph.race.age;
  setProgram(program, null);
  $(".graph-img").on("click", function(e){
    e.preventDefault();
    if (this.id === "black"){
      var elem = {name: 19, label: "black"};
    } else {
      var elem = {name: 35, label: "white"};
    };
    graphFilterRaceWeightAgeTipSample(elem);
  });
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
	var ageArr = allAgesArr();
	var length = ageArr.length;
	return {
	  colorArr: ageFilterColorArr(),
	  labelArrUpGraph : ageArr,
	  labelObjCrossGraph : {
	  	"white": zeroFillArr(length),
	  	"black": zeroFillArr(length),
	  	"hispanic": zeroFillArr(length),
	  	"asian": zeroFillArr(length),
	  	"ak / p.i.": zeroFillArr(length)
	  }
	};
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
      tip.innerHTML = percent + "% of " + elem.label + " people<br>killed by the police<br>were " + elem.name + " years old.<br />Click for a random example.";
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
