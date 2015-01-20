function updateGraphFilterAgeWeightNone(){
	var labels = labelsGraphFilterAgeWeightNone;
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var min = ageRange()[0];
	var max = ageRange()[1];
	for (var age = min; age <= max; age++){
		labels["labelObjCrossGraph"][age] = [0];
	};
	labels = dataGraphFilterAgeWeightNone(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterAgeWeightNone;
	createGraph(data, style);
	var program = programs.graph.age.none;
	$('#program').html(program);
  $(".graph-img").on("click", function(e){
    e.preventDefault();
    var elem = {label: 21};
    graphFilterAgeWeightNoneTipSample(elem);
  });
  $(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function dataGraphFilterAgeWeightNone(labels){
	$.each(allKillings, function(i,obj){
		if (obj.victim_age === null){
			return true;
		} else {
			var age = obj.victim_age;
		};
		labels["labelObjCrossGraph"][age][0]++;
	});
	return labels;
};

var labelsGraphFilterAgeWeightNone = {
	colorArr : [baseColor],
  labelArrUpGraph : ["people killed by police"],
  labelObjCrossGraph : {}
};

var styleGraphFilterAgeWeightNone = {
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
      var yearYears = elem.label === "1" ? "year" : "years";
      tip.innerHTML = "The police have killed " + elem.value + " people<br>who were " + elem.label + " " + yearYears + " old.<br />Click for a random example."
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterAgeWeightNoneTipSample(node);
    }
  }
};

function graphFilterAgeWeightNoneTipSample(elem){
  var age = parseInt(elem.label);
  var collection = allKillings.filter(function(el){
    return el.victim_age === age;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
