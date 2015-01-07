function updateGraphFilterUspopWeightIllness(){
	var labels = labelsGraphFilterUspopWeightIllness();
	labels = dataGraphFilterUspopWeightIllness(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUspopWeightIllness;
	createGraph(data, style);
	var program = "<p class='program-text four-line'>This graph shows the top ten cities<br>with the most recorded people killed by police<br>while exhibiting signs of mental illness.<br>In Portland, half of all victims were mentally ill.</p>";
	$('#program').html(program);
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
      tip.innerHTML = "elem.label:  " + elem.label + "<br>elem.name:  " + elem.name + "<br>elem.value:  " + elem.value;
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
  var illness = obj.symptoms_of_mental_illness === "yes" ? "symptoms" : "no symptoms";
  var city = lowercaseCity(elem.label);
  var collection = allKillings.filter(function(el){
    return el.symptoms_of_mental_illness === illness && el.location_of_killing_city === city;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};