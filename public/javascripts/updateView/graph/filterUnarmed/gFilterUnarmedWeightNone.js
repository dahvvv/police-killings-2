function updateGraphFilterUnarmedWeightNone(){
	var labels = labelsGraphFilterUnarmedWeightNone;
	labels = dataGraphFilterUnarmedWeightNone(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUnarmedWeightNone;
	createGraph(data, style);
	var program = "<p class='program-text one-line'>Victims of police shootings were unarmed in over 20% of recorded cases.</p>";
	$('#program').html(program);
};

function dataGraphFilterUnarmedWeightNone(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_unarmed === null){
			return true;
		} else {
			var unarmed = obj.victim_unarmed ? "unarmed" : "armed";
		};
		labels["labelObjCrossGraph"][unarmed][0]++;
	});
	return labels;
};

var labelsGraphFilterUnarmedWeightNone = {
	colorArr : [baseColor],
  labelArrUpGraph : ["victims"],
  labelObjCrossGraph : {
  	"armed": [0],
  	"unarmed" : [0]
  }
};

var styleGraphFilterUnarmedWeightNone = {
	injectInto: 'display-container',
  animate: true,
  orientation: 'horizontal',
  barsOffset: 50,
  Margin: {
    top:50,
    left: 25,
    right: 75,
    bottom:50
  },
  labelOffest:5,
  type: 'stacked:gradient',
  showAggregates: true,
  showLabels: true,
  Label: {
    type: 'Native',
    size: 16,
    family: 'Helvetica',
    color: '#c8cdcf',
    // weight: 'bold'
  },
  Tips: {
    enable: true,
    onShow: function(tip, elem) {
      tip.innerHTML =  elem.value + " recorded victims of police shootings were " + elem.label;
    }
  },
};
