function updateGraphFilterRaceWeightIllness(){
	var labels = labelsGraphFilterRaceWeightIllness();
	labels = dataGraphFilterRaceWeightIllness(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterRaceWeightIllness;
	createGraph(data, style);
	var program = "<p>This graph shows people who were killed by police while exhibiting clear signs of mental illness, by race.</p><p><div id='down-arrow'></div></p><p>In many of these cases, mental illness refers <a style='cursor:pointer' href='http://www.pasadenastarnews.com/general-news/20140218/county-approves-18-million-settlement-in-shooting-of-mentally-ill-rosemead-woman' target='_blank'>to</a> <a style='cursor:pointer' href='http://newjersey.news12.com/news/police-shoot-kill-man-during-standoff-in-south-brunswick-1.6473615' target='_blank'>either</a> <a style='cursor:pointer' href='http://thefreethoughtproject.com/cop-shoots-dead-unarmed-tased-subdued-teen-we-time-this-bang/' target='_blank'>schizophrenia</a>, or that the victim <a style='cursor:pointer' href='http://www.cbs46.com/story/19917831/teen-shot-by-police-sniper-parents-talk-only-to-cbs-atlanta-news' target='_blank'>was</a> <a style='cursor:pointer' href='https://drive.google.com/file/d/0B-l9Ys3cd80fT2hub1pENmhwSEk/edit?usp=sharing' target='_blank'>threatening</a> <a style='cursor:pointer' href='http://www.newspressnow.com/news/local_news/article_f508d924-5208-5a01-a84a-57631e99e732.html' target='_blank'>suicide</a>.</p><p>The red areas represent people who were showing signs of mental illness when they were killed by the police.  Hover over the graph for more information.</p><img src='http://i.imgur.com/p3eFe7h.png' /><p>Click on any part of the graph to see the source for a randomly selected person who falls within that part of the graph. Clicking multiple times will produce new sources.<br>Three example sources for asian people who showed signs of mental illness before being killed, click to read the articles:</p><a style='cursor:pointer' href='http://www.nbcwashington.com/news/local/Deputy-Shot-at-Costco-in-Sterling-209389621.html' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/T9d5inq.png' /></a><a style='cursor:pointer' href='http://www.sfgate.com/bayarea/article/SAN-JOSE-1-8-million-settlement-in-killing-by-2558796.php' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/QTy7HLE.png' /></a><a style='cursor:pointer' href='http://sacramento.cbslocal.com/2014/05/05/911-call-released-in-lodi-police-shooting-of-gulf-war-veteran/' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/r92q3w5.png' /></a>";
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
      elem.label = expandRace(elem.label,"horizontal");
      var illness = elem.name === "symptoms" ? "yes" : "no";
      var race = elem.label;
      var totalRace = allKillings.filter(function(el){
        return el.victim_race === race && _.contains(["yes","no"], el.symptoms_of_mental_illness);
      });
      var totalIllnessRace = allKillings.filter(function(el){
        return el.symptoms_of_mental_illness === illness && el.victim_race === race;
      });
      var percent = ((totalIllnessRace.length/totalRace.length) * 100).toFixed(1);

      tip.innerHTML = percent + " percent<br>of " + race + " people killed by police<br>were exhibiting " + elem.name + " of mental illness.";
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
