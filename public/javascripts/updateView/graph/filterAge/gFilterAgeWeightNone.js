function updateGraphFilterAgeWeightNone(){
	var labels = labelsGraphFilterAgeWeightNone;
	var min = ageRange()[0];
	var max = ageRange()[1];
	for (var age = min; age <= max; age++){
		labels["labelObjCrossGraph"][age] = [0];
	};
	labels = dataGraphFilterAgeWeightNone(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterAgeWeightNone;
	createGraph(data, style);
	var program = "<p class='program-text two-line'>The oldest recorded person killed by a police officer was <a href='http://www.huffingtonpost.com/2013/09/08/monroe-isadore-shootout_n_3889826.html' target='_blank'>107</a> years old.<br>The youngest <a href='http://newyork.cbslocal.com/2013/04/15/police-3-dead-in-brooklyn-shooting/' target='_blank'>have</a> <a href='http://articles.latimes.com/2005/jul/15/local/me-shooting15' target='_blank'>been</a> <a href='https://www.oxnardpd.org/pressreleases/1537/' target='_blank'>1</a>.</p>";
	$('#program').html(program);
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
  labelArrUpGraph : ["age"],
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
      tip.innerHTML = "<p>Age: " + elem.label + "</p><p>Total: " + elem.value;
    }
  },
};
