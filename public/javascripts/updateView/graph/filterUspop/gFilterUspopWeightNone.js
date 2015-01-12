function updateGraphFilterUspopWeightNone(){
	var labels = labelsGraphFilterUspopWeightNone;
	$.each(topCities, function(i,city){
		labels["labelObjCrossGraph"][city] = [0];
	});
	labels = dataGraphFilterUspopWeightNone(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUspopWeightNone;
	createGraph(data, style);
	var program = programs.graph.usPop.none;
	$('#program').html(program);
  $(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
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
  labelArrUpGraph : ["people killed by police"],
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
