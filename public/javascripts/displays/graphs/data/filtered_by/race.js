var races = ["white","black","hispanic and/or latin","asian","alaskan and/or pacific islander"];

var populationByRace = {
  "white":                            253005657,
  "black":                            45288730,
  "hispanic and/or latin":            54634554,
  "asian":                            19718930,
  "alaskan and/or pacific islander":  1447321
};

function dataGraphFilterRaceWeightNone(){
  var data = {
    'color': [baseColor],
    'label': ['race'],
    'values': graphFilterRaceWeightNoneValues()
  };
  return data;
};

function graphFilterRaceWeightNoneValues(){
  var values = [];
  $.each(races, function(i,race){
    var totalKilled = allKillings.filter(function(el){
      return el.victim_race === race;
    });
    race = abbreviateRace(race,"vertical");
    var value = {
      'label': race,
      'values': totalKilled.length
    };
    values.push(value);
  });
  return values;
};

function dataGraphFilterRaceWeightUspop(){
  var data = {
    'color': [baseColor],
    'label': ['race'],
    'values': graphFilterRaceWeightUspopValues()
  };
  return data;
};

function graphFilterRaceWeightUspopValues(){
  var values = [];
  $.each(races, function(i,race){
    var totalKilled = allKillings.filter(function(el){
      return el.victim_race === race;
    });
    var totalKilledPerCap = totalKilled.length / populationByRace[race];
    var adjustedPerCap = Math.ceil(totalKilledPerCap * 10000000);
    race = abbreviateRace(race,"vertical");
    var value = {
      'label': race,
      'values': adjustedPerCap
    };
    values.push(value);
  });
  return values;
};

// function dataGraphFilterRaceWeightUspop(){
//   var data = {
//     'color': [baseColor,addColor,subColor],
//     'label': ['unweighted portion','additional portion gained by weighting against us population','portion lost by weighting against us population'],
//     'values': [
//       {
//         'label': 'white', //1252, total weight 10.6, -38.7
//         'values': [10.6,0,38.7], // add extra 38.7 to all
//       },
//       {
//         'label': 'black', //889, total weight 44.2
//         'values': [35.0,9.2],
//       },
//       {
//         'label': 'hispanic/latin', //302, total weight 11.6
//         'values': [11.6,0,0.3],
//       },
//       {
//         'label': 'asian',
//         'values': [1.7,3.6], //44, total weight 5.3%
//       },
//       {
//         'label': 'alaskan/p.i.', //29, total weight 15.3%
//         'values': [1.1,14.2],
//       },
//       {
//         'label': 'other',
//         'values': [0.9,5.4], //24, total weighted percent 6.3
//       },
//     ]
//   };
//   return data;
// };

function dataGraphFilterRaceWeightArrests(){
  var data = {
    'color': [baseColor,addColor,subColor],
    'label': ['unweighted portion','additional portion gained by weighting against us population','portion lost by weighting against us population'],
    'values': [
      {
        'label': 'white', //arrest rate 68.9%, cop kill rate 49.3%, total weight 11.9, 
        'values': [10.6,1.3], // add extra 38.7 to all
      },
      {
        'label': 'black', //arrest rate 28.3%, cop kill rate 35%, total weight 44.2
        'values': [35.0,9.2],
      },
      {
        'label': 'asian',
        'values': [1.7,21.9], //arrest rate 1.2%, cop kill rate 1.7%, total weight 23.6%
      },
      {
        'label': 'alaskan/p.i.', //arrest rate 1.7%, cop kill rate 1.1%, total weight 10.8%
        'values': [1.1,9.7],
      },
    ]
  };
  return data;
};

function dataGraphFilterRaceWeightAge(){
  var data = {
    'color': hexScaler("#FFFFFF","#FFFF00",9)
    .slice(0,8)
    .concat(hexScaler("#FFFF00","#FF6600",7))
    .slice(0,14)
    .concat(hexScaler("#FF6600","#FF0000",7))
    .slice(0,20)
    .concat(hexScaler("#FF0000","#551A8B",7))
    .concat(hexScaler("#551A8B","#551A8B",14))
    .concat(hexScaler("#551A8B","#FF0000",8))
    .slice(0,48)
    .concat(hexScaler("#FF0000","#FF6600",7))
    .slice(0,54)
    .concat(hexScaler("#FF6600","#FFFF00",8))
    .slice(0,61)
    .concat(hexScaler("#FFFF00","#FFFFFF",47)),
    'label': Array.apply(null, Array(ageRange()[1])).map(function (_, i) {return i;}),
    'values': graphFilterRaceWeightAgeValues()
  };
  return data;
};

function graphFilterRaceWeightAgeValues(){
  var values = [];
  $.each(races, function(i,race){
    var totalKilled = 0;
    var totalKilledLengthForEachAge = [];
    for (var age = ageRange()[0]; age <= ageRange()[1]; age++){
      var killedAtAge = allKillings.filter(function(el){
        return el.victim_race === race && el.victim_age === age;
      });
      totalKilled += killedAtAge.length;
      totalKilledLengthForEachAge.push(killedAtAge.length);
    };
    percentKilledForEachAge = $.map(totalKilledLengthForEachAge, function(val,i){
      var percentTimesHun = Math.ceil((val / totalKilled) * 10000);
      return percentTimesHun;
    });
    race = abbreviateRace(race,"horizontal");
    var value = {
      'label': race,
      'values': percentKilledForEachAge
    };
    values.push(value);
  });
  return values;
};

function dataGraphFilterRaceWeightIllness(){
  var data = {
    'color': [secondColor, baseColor],
    'label': ["symptoms", "no symptoms"],
    'values': graphFilterRaceWeightIllnessValues()
  };
  return data;
};

function graphFilterRaceWeightIllnessValues(){
  var values = [];
  $.each(races, function(i,race){
    var raceIll = allKillings.filter(function(el){
      return el.symptoms_of_mental_illness === "yes" && el.victim_race === race;
    });
    var raceNotIll = allKillings.filter(function(el){
      return el.symptoms_of_mental_illness === "no" && el.victim_race === race;
    });
    var totalKilled = raceIll.length + raceNotIll.length;
    var percentRaceIll = ((raceIll.length / totalKilled) * 100).toFixed(1);
    var percentRaceNotIll = 100 - percentRaceIll;
    race = abbreviateRace(race,"horizontal");
    var value = {
      'label': race,
      'values': [percentRaceIll, percentRaceNotIll]
    };
    values.push(value);
  });
  return values;
};


function graphFilterRaceWeightAgeTipSample(elem){
  var age = elem.name;
  var race = expandRace(elem.label,"horizontal");
  var collection = allKillings.filter(function(el){
    return el.victim_age === age && el.victim_race === race;
  });
  var sample = collection[Math.floor(Math.random()*collection.length)];
  window.open(sample.source);
};