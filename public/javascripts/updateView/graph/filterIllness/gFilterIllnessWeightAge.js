function updateGraphFilterIllnessWeightAge(){
  var labels = labelsGraphFilterIllnessWeightAge();
  labels = dataGraphFilterIllnessWeightAge(labels);
  var data = labelsToData(labels);
  var style = styleGraphFilterIllnessWeightAge;
  createGraph(data, style);
  var program = "<p class='program-text four-line'>People killed by police while showing clear signs of mental illness<br>tend to be older than people with no signs of mental illness.<br>The average age of a victim with no signs of illness is 33.4 years old.<br>For those victims with mental illness, the average age is 38.5 years old.</p>";
  $('#program').html(program);
};

function labelsGraphFilterIllnessWeightAge(){
  var ageRangeArr = Array.apply(null, Array(ageRange()[1])).map(function (_, i) {
    return i+1;
  });
  var agesAllZero = [];
  for (i = 0; i < ageRangeArr.length; i++){
    agesAllZero.push(0);
  };
  return {
    colorArr : hexScaler("#FF3300","#0000FF",(ageRangeArr.length)),
    labelArrUpGraph : ageRangeArr,
    labelObjCrossGraph : {
      "no symptoms" : agesAllZero,
      "symptoms" : agesAllZero
    }
  };
};

function dataGraphFilterIllnessWeightAge(labels){
  $.each(allKillings, function(i,obj){
    if (obj.symptoms_of_mental_illness === null || obj.victim_age === null){
      return true;
    } else if (obj.symptoms_of_mental_illness === "no"){
      var illness = "no symptoms";
    } else if (obj.symptoms_of_mental_illness === "yes"){
      var illness = "symptoms";
    };
    var age = obj.victim_age;
    labels["labelObjCrossGraph"][illness][labels["labelArrUpGraph"].indexOf(age)]++;
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
