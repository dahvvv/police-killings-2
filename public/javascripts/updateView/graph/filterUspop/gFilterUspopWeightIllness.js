function updateGraphFilterUspopWeightIllness(){
	var labels = labelsGraphFilterUspopWeightIllness();
	labels = dataGraphFilterUspopWeightIllness(labels);
  $(".graph-legend-container").empty()
  .show();
  makeGraphLegend(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUspopWeightIllness;
	createGraph(data, style);
	var program = programs.graph.usPop.illness;
	$('#program').html(program);
  $(".graph-img").on("click", function(e){
    e.preventDefault();
    var elem = {name: "symptoms"};
    elem["label"] = this.id;
    graphFilterUspopWeightIllnessTipSample(elem);
  });
  $(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function dataGraphFilterUspopWeightIllness(labels){
	var lowercaseCities = $.map(citiesByIllness, function(city){
		return lowercaseCity(city);
	});
	$.each(allKillings, function(i,obj){
		if (_.contains(lowercaseCities, obj.location_of_killing_city) === false || obj.symptoms_of_mental_illness === null){
			return true;
		} else {
			var city = obj.location_of_killing_city;
			var capCity = capitaliseCity(city);
		};
		var illness = obj.symptoms_of_mental_illness === "yes" ? "symptoms" : "no symptoms";
		labels["labelObjCrossGraph"][capCity][labels["labelArrUpGraph"].indexOf(illness)]++;
	});
	return labels;
};

function labelsGraphFilterUspopWeightIllness(){
	var labelsAcross = {};
	$.each(citiesByIllness, function(i,city){
		labelsAcross[city] = [0,0];
	});
	return {
		colorArr : [secondColor, baseColor],
	  labelArrUpGraph : ["symptoms", "no symptoms"],
	  labelObjCrossGraph : labelsAcross
	};
};

var styleGraphFilterUspopWeightIllness = {
	injectInto: 'display-container',
  animate: true,
  orientation: 'vertical',
  barsOffset: 10,
  Margin: {
    top:5,
    left: 15,
    right: 15,
    bottom:5
  },
  labelOffest:0,
  type: 'stacked:gradient',
  showAggregates: false,
  showLabels: true,
  Label: {
    type: 'HTML',
    size: 14,
    family: 'Helvetica',
    color: '#c8cdcf',
    // weight: 'bold'
  },
  Tips: {
    enable: true,
    onShow: function(tip, elem) {
    	// var age = elem.name;
     //  var city = lowercaseCity(elem.label);
    	// var capCity = elem.label === "N Orleans" ? "New Orleans" : elem.label;
    	// capCity = capCity === "DC" ? "Washington DC" : capCity;
     //  var totalCity = allKillings.filter(function(el){
     //    return el.location_of_killing_city === city;
     //  });
     //  var totalAgeCity = allKillings.filter(function(el){
     //    return el.victim_age === age && el.location_of_killing_city === city;
     //  });
     //  var percent = ((totalAgeCity.length/totalCity.length) * 100).toFixed(1);
      tip.innerHTML = "In " + elem.label + ",<br>the police have killed " + elem.value + " people<br>who were exhibiting " + elem.name + "<br />of mental illness.<br />Click for a random example.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterUspopWeightIllnessTipSample(node);
    }
  }
};

function graphFilterUspopWeightIllnessTipSample(elem){
  var illness = elem.name === "symptoms" ? "yes" : "no";
  var city = lowercaseCity(elem.label);
  var collection = allKillings.filter(function(el){
    return el.symptoms_of_mental_illness === illness && el.location_of_killing_city === city;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
