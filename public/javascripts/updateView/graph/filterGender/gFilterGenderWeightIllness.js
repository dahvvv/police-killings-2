function updateGraphFilterGenderWeightIllness(){
  var labels = labelsGraphFilterGenderWeightIllness;
	labels = dataGraphFilterGenderWeightIllness(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterGenderWeightIllness;
	createGraph(data, style);
  var program = "<p class='program-text two-line'>21% of men killed by police were exhibiting signs of mental illness.<br>28% of women killed by police were exhibiting signs of mental illness.</p>";
  $('#program').html(program);
};

function dataGraphFilterGenderWeightIllness(labels){
	$.each(allKillings, function(i,obj){
		if ((obj.victim_gender != "male" && obj.victim_gender != "female") || obj.symptoms_of_mental_illness === null){
			return true;
		} else {
			var gender = obj.victim_gender;
		};
		var illness = obj.symptoms_of_mental_illness === "yes" ? "symptoms" : "no symptoms";
		labels["labelObjCrossGraph"][gender][labels["labelArrUpGraph"].indexOf(illness)]++;
	});
	return labels;
};

var labelsGraphFilterGenderWeightIllness = {
	colorArr : [baseColor,"#FF0000"],
  labelArrUpGraph : ["no symptoms","symptoms"],
  labelObjCrossGraph : {
  	"male" : [0,0],
  	"female" : [0,0]
  }
};

var styleGraphFilterGenderWeightIllness = {
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
      tip.innerHTML =  "elem.value:  " + elem.value + "<br>elem.label:  " + elem.label + "<br>elem.name:  " + elem.name;
    }
  },
};
