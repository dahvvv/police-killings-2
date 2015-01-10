function updateGraphFilterUspopWeightAge(){
	var labels = labelsGraphFilterUspopWeightAge();
	labels = dataGraphFilterUspopWeightAge(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUspopWeightAge;
	createGraph(data, style);
	var program = "<p>This graph shows how, in different cities,<br>the police kill people of different ages.</p><p><div id='down-arrow'></div></p><p>For each city, the dark purple area represents people<br>who fall within one standard deviation<br>of the national average victim age<br>(meaning people who were 27 to 42 years old when killed).</p><p>(image here)</p><p>The farther away you get from the dark purple area,<br>the farther away the victim's age was from the national average.<br>Very light colors on the bottom represent very young victims.<br>Very light colors on the top represent very old victims.</p><p>You can see how this changes from city to city.<br>New Orleans, Orlando, Oakland, Houston, and DC are all nationally unusual,<br>in that their police forces kill mostly young people.</p><p>The cities on the right have police forces<br>who kill an unusual proportion of older people.</p>";
	$('#program').html(program);
};

function dataGraphFilterUspopWeightAge(labels){
	var lowercaseCities = $.map(citiesByAge, function(city){
		return lowercaseCity(city);
	});
	$.each(allKillings, function(i,obj){
		if (_.contains(lowercaseCities, obj.location_of_killing_city) === false || obj.victim_age === null){
			return true;
		} else {
			var city = obj.location_of_killing_city;
			var capCity = capitaliseCity(city);
		};
		var age = obj.victim_age;
		labels["labelObjCrossGraph"][capCity][labels["labelArrUpGraph"].indexOf(age)]++;
	});
	$.each(labels["labelObjCrossGraph"], function(capCity, deathsArr){
		var totalKilledAge = deathsArr.reduce(function(prev,current){
			return prev + current;
		});
		labels["labelObjCrossGraph"][capCity] = $.map(deathsArr, function(totalKilled){
			var percentKilledTimesHun = Math.ceil((totalKilled/totalKilledAge) * 10000);
			return percentKilledTimesHun;
		});
	});
	return labels;
};

function labelsGraphFilterUspopWeightAge(){
	var ageArr = allAgesArr();
	var length = ageArr.length;
	var labelsAcross = {};
	$.each(citiesByAge, function(i,city){
		labelsAcross[city] = zeroFillArr(length);
	});
	return {
		colorArr : ageFilterColorArr2(),
	  labelArrUpGraph : ageArr,
	  labelObjCrossGraph : labelsAcross
	};
};

var styleGraphFilterUspopWeightAge = {
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
    	var age = elem.name;
      var city = lowercaseCity(elem.label);
    	var capCity = elem.label === "N Orleans" ? "New Orleans" : elem.label;
    	capCity = capCity === "DC" ? "Washington DC" : capCity;
      var totalCity = allKillings.filter(function(el){
        return el.location_of_killing_city === city;
      });
      var totalAgeCity = allKillings.filter(function(el){
        return el.victim_age === age && el.location_of_killing_city === city;
      });
      var percent = ((totalAgeCity.length/totalCity.length) * 100).toFixed(1);
      tip.innerHTML = "In " + capCity + ",<br>" + percent + " percent of<br>all people killed by the police<br>were " + elem.name + " years old.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterUspopWeightAgeTipSample(node);
    }
  }
};

function graphFilterUspopWeightAgeTipSample(elem){
  var age = parseInt(elem.name);
  var city = lowercaseCity(elem.label);
  var collection = allKillings.filter(function(el){
    return el.victim_age === age && el.location_of_killing_city === city;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
