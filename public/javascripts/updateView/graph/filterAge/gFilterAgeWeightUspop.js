function updateGraphFilterAgeWeightUspop(){
	var labels = labelsGraphFilterAgeWeightUspop;
	var min = ageRange()[0];
	var max = ageRange()[1];
	for (var age = min; age <= max; age++){
		labels["labelObjCrossGraph"][age] = [0];
	};
	labels = dataGraphFilterAgeWeightUspop(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterAgeWeightUspop;
	createGraph(data, style);
	var program = "<p class='program-text one-line'>Age Population Graph</p>";
	$('#program').html(program);
};

function dataGraphFilterAgeWeightUspop(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_age === null){
			return true;
		} else {
			var age = obj.victim_age;
		};
		labels["labelObjCrossGraph"][age][0]++;
	});
	$.each(labels["labelObjCrossGraph"], function(age, deaths){
		var totalKilledPerCap = deaths[0] / populationByAge[age];
		var adjustedPerCap = Math.ceil(totalKilledPerCap * 100000000);
		labels["labelObjCrossGraph"][age] = [adjustedPerCap];
	});
	return labels;
};

var labelsGraphFilterAgeWeightUspop = {
	colorArr : [baseColor],
  labelArrUpGraph : ["age"],
  labelObjCrossGraph : {}
};

var styleGraphFilterAgeWeightUspop = {
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
  showLabels: function(i){
    if (i%10===0) {
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
      tip.innerHTML = "<p>Age: " + elem.label + "</p><p>Total: " + elem.value;
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterAgeWeightUspopTipSample(node);
    }
  }
};

function graphFilterAgeWeightUspopTipSample(elem){
  var age = parseInt(elem.label);
  var collection = allKillings.filter(function(el){
    return el.victim_age === age;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
