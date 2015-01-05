function updateGraphFilterAgeWeightArrests(){
	var labels = labelsGraphFilterAgeWeightArrests;
	 // age min is 10 and age max is 64 because those are the limits of reliable data
	for (var age = 10; age <= 64; age++){
		labels["labelObjCrossGraph"][age] = [0];
	};
	labels = dataGraphFilterAgeWeightArrests(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterAgeWeightArrests;
	createGraph(data, style);
	var program = "<p class='program-text one-line'>Age arrests Graph</p>";
	$('#program').html(program);
};

function dataGraphFilterAgeWeightArrests(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_age === null){
			return true;
		} else if (obj.victim_age < 10 || obj.victim_age > 64){
			return true;
		} else {
			var age = obj.victim_age;
		};
		labels["labelObjCrossGraph"][age][0]++;
	});
	$.each(labels["labelObjCrossGraph"], function(age, deaths){
		var totalKilledPerCap = deaths[0] / arrestsByAge[age];
		var adjustedPerCap = Math.ceil(totalKilledPerCap * 100000);
		labels["labelObjCrossGraph"][age] = [adjustedPerCap];
	})
	return labels;
};

var labelsGraphFilterAgeWeightArrests = {
	colorArr : [baseColor],
  labelArrUpGraph : ["deaths per 100,000 arrests"],
  labelObjCrossGraph : {}
};

var styleGraphFilterAgeWeightArrests = {
	injectInto: 'display-container',
  animate: true,
  orientation: 'vertical',
  barsOffset: 5,
  Margin: {
    top:2,
    left: 5,
    right: 5,
    bottom:2
  },
  labelOffest: 0,
  type: 'stacked:gradient',
  showAggregates: false,
  showLabels: function(i){
    if (i%2===0) {
      return true
    } else {
      return false
    }
  },
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
      tip.innerHTML = "For every hundred thousand arrests<br>made on a " + elem.label + "-year-old person<br>in the United States,<br>" + elem.value + " of them have resulted in death.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterAgeWeightArrestsTipSample(node);
    }
  }
};

function graphFilterAgeWeightArrestsTipSample(elem){
  var age = parseInt(elem.label);
  var collection = allKillings.filter(function(el){
    return el.victim_age === age;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
