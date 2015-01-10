function updateGraphFilterUspopWeightNone(){
	var labels = labelsGraphFilterUspopWeightNone;
	$.each(topCities, function(i,city){
		labels["labelObjCrossGraph"][city] = [0];
	});
	labels = dataGraphFilterUspopWeightNone(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUspopWeightNone;
	createGraph(data, style);
	var program = "<p>This graph shows the top ten U.S. cities<br>in order of how many of their residents<br>have been killed by police.</p><p><div id='down-arrow'></div></p><p>Hover over any bar on the graph<br>to see relevant information in sentence form.</p><img src='http://i.imgur.com/r6oCkvt.png' /><p>You can see that New York City and Las Vegas have by far the most deaths.<br>If it were its own city, Brooklyn would be third.</p><img src='http://i.imgur.com/bS0GMGj.png' /><p>Click on any bar on the graph,<br>and you will see an article<br>about someone who falls within that bar's demographic.</p><img src='http://i.imgur.com/rN95PvH.png' /><p>If you click the same bar again, you'll get a new article about a different person.</p><img src='http://i.imgur.com/yMPYPgl.png' />";
	$('#program').html(program);
};

function dataGraphFilterUspopWeightNone(labels){
	var lowercaseCities = $.map(topCities, function(city){
		return lowercaseCity(city);
	});
	$.each(allKillings, function(i,obj){
		if (_.contains(lowercaseCities, obj.location_of_killing_city) === false){
			return true;
		} else {
			var city = obj.location_of_killing_city;
		};
		labels["labelObjCrossGraph"][capitaliseCity(city)][0]++;
	});
	return labels;
};

var labelsGraphFilterUspopWeightNone = {
	colorArr : [baseColor],
  labelArrUpGraph : ["deaths per city"],
  labelObjCrossGraph : {}
};

var styleGraphFilterUspopWeightNone = {
	injectInto: 'display-container',
  animate: true,
  orientation: 'vertical',
  barsOffset: 10,
  Margin: {
    top:5,
    left: 15,
    right: 15,
    bottom:5
  },
  labelOffest:5,
  type: 'stacked:gradient',
  showAggregates: true,
  showLabels: true,
  Label: {
    type: 'HTML',
    size: 16,
    family: 'Helvetica',
    color: '#c8cdcf',
    // weight: 'bold'
  },
  Tips: {
    enable: true,
    onShow: function(tip, elem) {
      tip.innerHTML = elem.value + " people have been killed by police in " + elem.label + ".";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterUspopWeightNoneTipSample(node);
    }
  }
};

function graphFilterUspopWeightNoneTipSample(elem){
  var city = lowercaseCity(elem.label);
  var collection = allKillings.filter(function(el){
    return el.location_of_killing_city === city;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
