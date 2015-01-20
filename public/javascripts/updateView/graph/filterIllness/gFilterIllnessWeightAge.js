function updateGraphFilterIllnessWeightAge(){
  var labels = labelsGraphFilterIllnessWeightAge();
  labels = dataGraphFilterIllnessWeightAge(labels);
  $(".graph-legend-container").empty()
  .css({"top":"44%"})
  .show();
  $(graphLegendAge).appendTo($(".graph-legend-container"));
  var data = labelsToData(labels);
  var style = styleGraphFilterIllnessWeightAge;
  createGraph(data, style);
  var program = programs.graph.illness.age;
  $('#program').html(program);
  $(".graph-img").on("click", function(e){
    e.preventDefault();
    var elem = {name: 21};
    elem["label"] = this.id;
    graphFilterIllnessWeightAgeTipSample(elem);
  });
  $(".top").on("click", function(){
    window.scrollTo(0, 0);
  });
};

function labelsGraphFilterIllnessWeightAge(){
  var ageArr = allAgesArr();
  var length = ageArr.length;
  return {
    colorArr : ageFilterColorArr(),
    labelArrUpGraph : ageArr,
    labelObjCrossGraph : {
      "no symptoms" : zeroFillArr(length),
      "symptoms" : zeroFillArr(length)
    }
  };
};

function dataGraphFilterIllnessWeightAge(labels){
  $.each(allKillings, function(i,obj){
    var age = obj.victim_age;
    if (obj.symptoms_of_mental_illness === "no"){
      var illness = "no symptoms";
      labels["labelObjCrossGraph"][illness][labels["labelArrUpGraph"].indexOf(age)]++;
    } else if (obj.symptoms_of_mental_illness === "yes"){
      var illness = "symptoms";
      labels["labelObjCrossGraph"][illness][labels["labelArrUpGraph"].indexOf(age)]++;
    };
  });
  $.each(labels["labelObjCrossGraph"], function(illness, deathsArr){
    var totalKilledIllness = deathsArr.reduce(function(prev,current){
      return prev + current;
    });
    labels["labelObjCrossGraph"][illness] = $.map(deathsArr, function(totalKilled){
      var percentKilledTimesHun = Math.ceil((totalKilled/totalKilledIllness) * 10000);
      return percentKilledTimesHun;
    });
  });
  return labels;
};

var styleGraphFilterIllnessWeightAge = {
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
      var age = elem.name;
      var illness = elem.label === "symptoms" ? "yes" : "no";
      var totalIllness = allKillings.filter(function(el){
        return el.symptoms_of_mental_illness === illness;
      });
      var totalAgeIllness = allKillings.filter(function(el){
        return el.victim_age === age 
        && el.symptoms_of_mental_illness === illness;
      });
      var percent = ((totalAgeIllness.length/totalIllness.length) * 100).toFixed(1);
      tip.innerHTML = percent + " percent of people<br />who were killed by the police<br />and who showed " + elem.label + " of mental illness<br />were " + elem.name + " years old.<br />Click for a random example.";
    }
  },
  Events: {
    enable: true,
    type: 'Native',
    onClick: function(node, eventInfo, e){
      graphFilterIllnessWeightAgeTipSample(node);
    }
  }
};

function graphFilterIllnessWeightAgeTipSample(elem){
  if (elem.label === "symptoms"){
    var illness = "yes";
  } else if (elem.label === "no symptoms"){
    var illness = "no";
  };
  var age = parseInt(elem.name);
  var collection = allKillings.filter(function(el){
    return el.victim_age === age 
    && el.symptoms_of_mental_illness === illness;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};
