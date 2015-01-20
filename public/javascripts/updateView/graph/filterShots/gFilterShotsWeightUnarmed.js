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
	var program = programs.graph.shots.unarmed;
	$('#program').html(program);
  $(".graph-img").on("click", function(e){
    e.preventDefault();
    var elem = {label: "20+", name: "unarmed"};
    graphFilterShotsWeightUnarmedTipSample(elem);
  });
  $(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
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
      tip.innerHTML = "<p>There " + isAre + " " + elem.value + " recorded " + caseCases + " in which the police shot " + elem.label + " " + timeTimes + ", and the victim was " + elem.name + ".<br />Click for a random example.";
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
