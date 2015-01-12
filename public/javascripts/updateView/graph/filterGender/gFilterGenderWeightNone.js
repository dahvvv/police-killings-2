function updateGraphFilterGenderWeightNone(){
  var labels = labelsGraphFilterGenderWeightNone;
	labels = dataGraphFilterGenderWeightNone(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterGenderWeightNone;
	createGraph(data, style);
  var program = "<p class='program-text two-line'>92.5% of people killed by police are male.<br>7.5% of people killed by police are female.</p>";
  $('#program').html(program);
};

function dataGraphFilterGenderWeightNone(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_gender != "male" && obj.victim_gender != "female"){
			return true;
		} else {
			var gender = obj.victim_gender;
		};
		labels["labelObjCrossGraph"][gender][0]++;
	});
	return labels;
};

var labelsGraphFilterGenderWeightNone = {
	colorArr : [baseColor],
  labelArrUpGraph : ["people killed by police"],
  labelObjCrossGraph : {
  	"male" : [0],
  	"female" : [0]
  }
};

var styleGraphFilterGenderWeightNone = {
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
      tip.innerHTML =  elem.value + " victims of police shootings are " + elem.label;
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterGenderWeightNoneTipSample(node);
    }
  }
};

function graphFilterGenderWeightNoneTipSample(elem){
  var gender = elem.label;
  var collection = allKillings.filter(function(el){
    return el.victim_gender === gender;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
