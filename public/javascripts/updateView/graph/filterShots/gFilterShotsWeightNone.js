function updateGraphFilterShotsWeightNone(){
	var labels = labelsGraphFilterShotsWeightNone;
	for (i = 1; i < 20; i++){
		labels["labelObjCrossGraph"][i] = [0]
	};
	labels["labelObjCrossGraph"]["20+"] = [0];
	labels = dataGraphFilterShotsWeightNone(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterShotsWeightNone;
	createGraph(data, style);
	var program = programs.graph.shots.none;
	$('#program').html(program);
  $("#up-arrow").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function dataGraphFilterShotsWeightNone(labels){
	$.each(allKillings, function(i,obj){
		if (obj.shots_fired === null){
			return true;
		} else if (obj.shots_fired < 20){
			var shots = obj.shots_fired;
		} else if (obj.shots_fired >= 20){
			var shots = "20+";
		};
		labels["labelObjCrossGraph"][shots][0]++;
	});
	return labels;
};

var labelsGraphFilterShotsWeightNone = {
	colorArr : [baseColor],
  labelArrUpGraph : ["people killed by police"],
  labelObjCrossGraph : {}
};

var styleGraphFilterShotsWeightNone = {
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
  showAggregates: true,
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
      var shotShots = elem.label === "1" ? "shot" : "shots";
      tip.innerHTML = elem.value + " times on record,<br>the police have killed someone<br>by firing " + elem.label + " " + shotShots + ".";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterShotsWeightNoneTipSample(node);
    }
  }
};

function graphFilterShotsWeightNoneTipSample(elem){
  var shots = elem.label;
  var collection = allKillings.filter(function(el){
    if (shots === "20+"){
      return el.shots_fired > 20;
    } else {
      return el.shots_fired === parseInt(shots);
    };
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
