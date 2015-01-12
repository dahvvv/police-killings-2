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
	// var program = "<p>This graph shows the age distribution of people killed by police, by race.</p><p><div id='down-arrow'></div></p><p>The dark purple areas on the graph represent people who were between 27 and 42 years old when they were killed.<br>(27 to 42 is one total standard deviation from the national average, 34.5)</p><p>(image here)</p><p>The farther away you get from the dark purple area,<br>the farther away the victim's age was from the national average.<br>Very light colors on the left represent very young victims.<br>Very light colors on the right represent very old victims.</p><p>You can see that when police kill black people,<br>the victims tend to be much younger<br>than when the police kill white people.</p><p>(image here)</p><p>Hover over any section of the graph to see relevant information.</p><p>(image here)</p><p>Click on any section of the graph to see the source for a randomly selected person within that race and age-range.  Click again to see another sample.  I think that the best way to use this site is to find sections that you want to learn about, and click on them many times.</p><p>(image here)</p>";
  var program = programs.graph.race.age;
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
