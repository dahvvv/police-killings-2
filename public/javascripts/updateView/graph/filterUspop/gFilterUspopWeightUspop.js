function updateGraphFilterUspopWeightUspop(){
	var labels = labelsGraphFilterUspopWeightUspop;
	$.each(topCities, function(i,city){
		labels["labelObjCrossGraph"][city] = [0];
	});
	labels = dataGraphFilterUspopWeightUspop(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUspopWeightUspop;
	createGraph(data, style);
	var program = "<p class='program-text two-line'>When the same cities are scaled by their populations,<br>the degree to which Las Vegas is an outlier becomes clear.</p>";
	$('#program').html(program);
};

function dataGraphFilterUspopWeightUspop(labels){
	var lowercaseCities = $.map(topCities, function(city){
		return lowercaseCity(city);
	});
	$.each(allKillings, function(i,obj){
		if (_.contains(lowercaseCities, obj.location_of_killing_city) === false){
			return true;
		} else {
			var city = obj.location_of_killing_city;
			var capCity = capitaliseCity(city);
		};
		labels["labelObjCrossGraph"][capCity][0]++;
	});
	$.each(labels["labelObjCrossGraph"], function(capCity, deaths){
		var totalKilledPerCap = deaths[0] / populationByCity[capCity];
		var adjustedPerCap = Math.ceil(totalKilledPerCap * 1000000);
		labels["labelObjCrossGraph"][capCity] = [adjustedPerCap];
	});
	return labels;
};

var labelsGraphFilterUspopWeightUspop = {
	colorArr : [baseColor],
  labelArrUpGraph : ["police deaths per one million residents"],
  labelObjCrossGraph : {}
};

var styleGraphFilterUspopWeightUspop = {
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
      tip.innerHTML = elem.label + ": " + elem.value + " " + elem.name;
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterUspopWeightUspopTipSample(node);
    }
  }
};

function graphFilterUspopWeightUspopTipSample(elem){
	var city = lowercaseCity(elem.label);
  var collection = allKillings.filter(function(el){
    return el.location_of_killing_city === city;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
