function updateGraphFilterUspopWeightNone(){
	var labels = labelsGraphFilterUspopWeightNone;
	$.each(topCities, function(i,city){
		labels["labelObjCrossGraph"][city] = [0];
	});
	labels = dataGraphFilterUspopWeightNone(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUspopWeightNone;
	createGraph(data, style);
	var program = "<p class='program-text two-line'>New York and Las Vegas have far more deaths by police<br>than any other city.  If it were its own city, Brooklyn would be third.</p>";
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
      tip.innerHTML = elem.label + ":  " + elem.value + " deaths by police.";
    }
  },
};
