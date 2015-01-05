function updateGraphFilterGenderWeightUnarmed(){
  var labels = labelsGraphFilterGenderWeightUnarmed;
	labels = dataGraphFilterGenderWeightUnarmed(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterGenderWeightUnarmed;
	createGraph(data, style);
  var program = "<p class='program-text two-line'>21% of men killed by police were unarmed.<br>37% of women killed by police were unarmed.</p>";
  $('#program').html(program);
};

function dataGraphFilterGenderWeightUnarmed(labels){
	$.each(allKillings, function(i,obj){
		if ((obj.victim_gender != "male" && obj.victim_gender != "female") || obj.victim_unarmed === null){
			return true;
		} else {
			var gender = obj.victim_gender;
		};
		var unarmed = obj.victim_unarmed ? "unarmed" : "armed";
		labels["labelObjCrossGraph"][gender][labels["labelArrUpGraph"].indexOf(unarmed)]++;
	});
	return labels;
};

var labelsGraphFilterGenderWeightUnarmed = {
	colorArr : [baseColor,"#FF0000"],
  labelArrUpGraph : ["armed","unarmed"],
  labelObjCrossGraph : {
  	"male" : [0,0],
  	"female" : [0,0]
  }
};

var styleGraphFilterGenderWeightUnarmed = {
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
