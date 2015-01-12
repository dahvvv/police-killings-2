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
	var program = "<p>This graph shows how many people<br>have been killed by police,<br>sorted by how many shots the police fired.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/eRhGiHh.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see the source article for a new person.</p><a style='cursor:pointer' href='http://en.wikipedia.org/wiki/Tyisha_Miller' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/oWbc32y.png' /></a><a style='cursor:pointer' href='http://en.wikipedia.org/wiki/Jose_Guerena_shooting' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/3rGAbbO.png' /></a><p>Most reports of people killed by police don't include how many shots were fired.<br>But of the 502 reports that do include that information,<br>74 of them report ten shots or more.<br>That's ten shots or more in 14.7% of all reported cases.</p>";
	$('#program').html(program);
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
