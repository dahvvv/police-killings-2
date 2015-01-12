function updateGraphFilterShotsWeightUnarmed(){
	var labels = labelsGraphFilterShotsWeightUnarmed;
	for (i = 1; i < 20; i++){
		labels["labelObjCrossGraph"][i] = [0,0]
	};
	labels["labelObjCrossGraph"]["20+"] = [0,0];
	labels = dataGraphFilterShotsWeightUnarmed(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterShotsWeightUnarmed;
	createGraph(data, style);
	var program = "<p>This graph shows how many armed and unarmed people<br>have been killed by police,<br>sorted by how many shots the police fired.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/c0Rg69b.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see the source article for a new person.</p><a style='cursor:pointer' href='http://www.dallasnews.com/news/community-news/garland-mesquite/headlines/20120911-garland-police-say-officer-fired-as-many-as-41-shots-at-apparently-unarmed-man-before-he-died.ece' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/PEvNaDr.png' /></a><a style='cursor:pointer' href='http://articles.latimes.com/2013/apr/04/local/la-me--water-nozzle-verdict-20130405' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/zTg0OS0.png' /></a><p>Whether the victim was armed or not, the average number of shots fired<br>by police remains about the same:  between 5.5 and 6.2 shots.</p>";
	$('#program').html(program);
};

function dataGraphFilterShotsWeightUnarmed(labels){
	$.each(allKillings, function(i,obj){
		if (obj.shots_fired === null || obj.victim_unarmed === null){
			return true;
		} else if (obj.shots_fired < 20){
			var shots = obj.shots_fired;
		} else if (obj.shots_fired >= 20){
			var shots = "20+";
		};
		var unarmed = obj.victim_unarmed ? "unarmed" : "armed";
		labels["labelObjCrossGraph"][shots][labels["labelArrUpGraph"].indexOf(unarmed)]++;
	});
	return labels;
};

var labelsGraphFilterShotsWeightUnarmed = {
	colorArr : [secondColor, baseColor],
  labelArrUpGraph : ["unarmed","armed"],
  labelObjCrossGraph : {}
};

var styleGraphFilterShotsWeightUnarmed = {
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
  showLabels: true,
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
      var isAre = elem.value === 1 ? "is" : "are";
      var caseCases = elem.value === 1 ? "case" : "cases";
      var timeTimes = elem.label === "1" ? "time" : "times";
      tip.innerHTML = "<p>There " + isAre + " " + elem.value + " recorded " + caseCases + " in which the police shot " + elem.label + " " + timeTimes + ", and the victim was " + elem.name + ".";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterShotsWeightUnarmedTipSample(node);
    }
  }
};

function graphFilterShotsWeightUnarmedTipSample(elem){
  var unarmed = elem.name === "unarmed";
  var shots = elem.label;
  var collection = allKillings.filter(function(el){
    if (shots === "20+"){
      return el.shots_fired > 20 && el.victim_unarmed === unarmed;
    } else {
      return el.shots_fired === parseInt(shots) && el.victim_unarmed === unarmed;
    };
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
