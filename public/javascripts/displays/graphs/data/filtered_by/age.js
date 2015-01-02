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
  var races = [
    "white",
    "black",
    "hispanic and/or latin",
    "asian",
    "alaskan and/or pacific islander",
    "other"
  ];
  var data = {
    'color': [
      "#3366FF",
      "#5200A3",
      "#FF0000",
      "#FF6600",
      "#FFFF00",
      "#33CC33"
    ],
    'label': races,
    'values': graphFilterAgeWeightRaceValues()
  };
  return data;
};

function graphFilterAgeWeightRaceValues(){
  var values = [];
  for (var age = ageRange()[0]; age <= ageRange()[1]; age++){
    var totalKilledWhite = allKillings.filter(function(el){
      return el.victim_age === age && el.victim_race === "white";
    });
    var totalKilledBlack = allKillings.filter(function(el){
      return el.victim_age === age && el.victim_race === "black";
    });
    var totalKilledHispanic = allKillings.filter(function(el){
      return el.victim_age === age && el.victim_race === "hispanic and/or latin";
    });
    var totalKilledAsian = allKillings.filter(function(el){
      return el.victim_age === age && el.victim_race === "asian";
    });
    var totalKilledAlaskan = allKillings.filter(function(el){
      return el.victim_age === age && el.victim_race === "alaskan and/or pacific islander";
    });
    var totalKilledOther = allKillings.filter(function(el){
      return el.victim_age === age && el.victim_race === "other";
    });
    var value = {
      'label': age,
      'values': [
        totalKilledWhite.length,
        totalKilledBlack.length,
        totalKilledHispanic.length,
        totalKilledAsian.length,
        totalKilledAlaskan.length,
        totalKilledOther.length
      ]
    };
    values.push(value);
  };
  return values;
};

function dataGraphFilterAgeWeightIllness(){
  var data = {
    'color': [secondColor, baseColor],
    'label': ['symptoms', 'no symptoms'],
    'values': graphFilterAgeWeightIllnessValues()
  };
  return data;
};

function graphFilterAgeWeightIllnessValues(){
  var values = [];
  for (var age = ageRange()[0]; age <= ageRange()[1]; age++){
    var totalKilledNotIll = allKillings.filter(function(el){
      return el.victim_age === age && el.symptoms_of_mental_illness === "no";
    });
    var totalKilledIll = allKillings.filter(function(el){
      return el.victim_age === age && el.symptoms_of_mental_illness === "yes";
    });
    var value = {
      'label': age,
      'values': [
        totalKilledIll.length,
        totalKilledNotIll.length
      ]
    };
    values.push(value);
  };
  return values;
};
