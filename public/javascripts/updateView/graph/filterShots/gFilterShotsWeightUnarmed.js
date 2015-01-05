function updateGraphFilterShotsWeightUnarmed(){
	var labels = labelsGraphFilterShotsWeightUnarmed;
	for (i = 1; i < 20; i++){
		labels["labelObjCrossGraph"][i] = [0,0]
	};
	labels["labelObjCrossGraph"]["20+"] = [0,0];
	labels = dataGraphFilterShotsWeightUnarmed(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterShotsWeightUnarmed;
	createGraph(data, style);
	var program = "<p class='program-text two-line'>Whether the victim was armed or not, the average number of shots fired<br>by police remains about the same:  between 5.5 and 6.2 shots.</p>";
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
      tip.innerHTML = "<p>There are " + elem.value + " recorded cases in which the police shot " + elem.label + " times, and the victim victim was " + elem.name + ".";
    }
  },
};
