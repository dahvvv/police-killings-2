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
      tip.innerHTML = "from " + elem.name + ",<br>" + elem.value + " people were killed by police while exhibiting " + elem.label + " of mental illness.";
    }
  }
};
