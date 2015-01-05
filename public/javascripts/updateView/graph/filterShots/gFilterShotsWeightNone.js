function updateGraphFilterShotsWeightNone(){
	var labels = labelsGraphFilterShotsWeightNone;
	for (i = 1; i < 20; i++){
		labels["labelObjCrossGraph"][i] = [0]
	};
	labels["labelObjCrossGraph"]["20+"] = [0];
	labels = dataGraphFilterShotsWeightNone(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterShotsWeightNone;
	createGraph(data, style);
	var program = "<p class='program-text two-line'>Police fired at a victim 20 times or more<br>in over 30 recorded cases.</p>";
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
  labelArrUpGraph : ['shots fired'],
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
      tip.innerHTML = "<p>Number of shots fired by police: " + elem.label + "</p><p>Total victims: " + elem.value;
    }
  },
};
