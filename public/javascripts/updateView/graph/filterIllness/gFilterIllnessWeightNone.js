function updateGraphFilterIllnessWeightNone(){
	var labels = labelsGraphFilterIllnessWeightNone;
	labels = dataGraphFilterIllnessWeightNone(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterIllnessWeightNone;
	createGraph(data, style);
	var program = "<p class='program-text two-line'>Victims of police shootings exhibited signs of mental illness<br>in over 20% of recorded cases.</p>";
	$('#program').html(program);
};

function dataGraphFilterIllnessWeightNone(labels){
	$.each(allKillings, function(i,obj){
		if (obj.symptoms_of_mental_illness === null){
			return true;
		} else if (obj.symptoms_of_mental_illness === "no"){
			var illness = "no symptoms";
		} else if (obj.symptoms_of_mental_illness === "yes"){
			var illness = "symptoms";
		};
		labels["labelObjCrossGraph"][illness][0]++;
	});
	return labels;
};

var labelsGraphFilterIllnessWeightNone = {
	colorArr : [baseColor],
  labelArrUpGraph : ['symptoms of mental illness'],
  labelObjCrossGraph : {
  	"no symptoms" : [0],
  	"symptoms" : [0]
  }
};

var styleGraphFilterIllnessWeightNone = {
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
      tip.innerHTML =  elem.value + " recorded victims of police shootings exhibited " + elem.label + " of mental illness";
    }
  }
};
