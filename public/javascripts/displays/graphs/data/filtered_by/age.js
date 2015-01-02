function ageRange(){
  var ages = [];
  $.each(allKillings, function(i,obj){
    ages.push(obj.victim_age);
  });
  var ageMin = Math.min.apply(Math, ages);
  var ageMax = Math.max.apply(Math, ages);
  return [ageMin, ageMax];
};

function dataGraphFilterAgeWeightNone(){
  var data = {
    'color': [baseColor],
    'label': ['age'],
    'values': graphFilterAgeWeightNoneValues()
  };
  return data;
};

function graphFilterAgeWeightNoneValues(){
  var values = [];
  for (var age = ageRange()[0]; age <= ageRange()[1]; age++){
    var totalKilled = allKillings.filter(function(el){
      return el.victim_age === age;
    });
    var value = {
      'label': age,
      'values': totalKilled.length
    };
    values.push(value);
  };
  return values;
};

function dataGraphFilterAgeWeightUspop(){

};

function dataGraphFilterAgeWeightArrests(){

};

function dataGraphFilterAgeWeightRace(){

};

function dataGraphFilterAgeWeightIllness(){

};
