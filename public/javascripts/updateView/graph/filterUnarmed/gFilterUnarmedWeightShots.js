function updateGraphFilterUnarmedWeightShots(){
	var labels = labelsGraphFilterUnarmedWeightShots;
	for (i = 0; i < 20; i++){
		labels["labelObjCrossGraph"]["armed"].push(0);
		labels["labelObjCrossGraph"]["unarmed"].push(0);
	};
	labels = dataGraphFilterUnarmedWeightShots(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUnarmedWeightShots;
	createGraph(data, style);
	var program = "<p class='program-text three-line'>Twenty times,<br>the police have killed someone by firing at least ten shots,<br>and the victim was unarmed.</p>";
	$('#program').html(program);
};

function dataGraphFilterUnarmedWeightShots(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_unarmed === null || obj.shots_fired === null){
			return true;
		} else {
			var unarmed = obj.victim_unarmed ? "unarmed" : "armed";
		};
		var shots = obj.shots_fired >= 20 ? "20+" : obj.shots_fired
		labels["labelObjCrossGraph"][unarmed][labels["labelArrUpGraph"].indexOf(shots)]++;
	});
	return labels;
};

var labelsGraphFilterUnarmedWeightShots = {
	colorArr : hexScaler("#0000B2","#7F0059",5)
  .slice(0,4)
  .concat(hexScaler("#7F0059","#FF0000",16)),
  labelArrUpGraph : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,"20+"],
  labelObjCrossGraph : {
  	"armed": [],
  	"unarmed" : []
  }
};

var styleGraphFilterUnarmedWeightShots = {
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
  showAggregates: false,
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
      tip.innerHTML =  elem.value + " people were killed by the police<br>where the victim was " + elem.label + "<br>and the police fired " + elem.name + " times";
    }
  },
};
