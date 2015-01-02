function ageRange(){
  var ages = [];
  $.each(allKillings, function(i,obj){
    if (obj.victim_age != 0 && obj.victim_age != null){
      ages.push(obj.victim_age);
    };
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
  var data = {
    'color': [baseColor],
    'label': ['deaths per xxxxxx???'],
    'values': graphFilterAgeWeightUspopValues()
  };
  return data;
};

function graphFilterAgeWeightUspopValues(){
  var values = [];
  for (var age = ageRange()[0]; age <= ageRange()[1]; age++){
    var totalKilled = allKillings.filter(function(el){
      return el.victim_age === age;
    });
    var totalKilledPerCap = totalKilled.length / populationByAge[age];
    var adjustedPerCap = Math.ceil(totalKilledPerCap * 100000000);
    var value = {
      'label': age,
      'values': adjustedPerCap
    };
    values.push(value);
  };
  return values;
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

var populationByAge = {
  1:    3955905,
  2:    3968965,
  3:    4035833,
  4:    3970884,
  5:    4080640,
  6:    4132464,
  7:    4131828,
  8:    4099464,
  9:    4101858,
  10:   4091146,
  11:   4077417,
  12:   4101758,
  13:   4228720,
  14:   4163896,
  15:   4169853,
  16:   4137140,
  17:   4187601,
  18:   4246671,
  19:   4332315,
  20:   4407732,
  21:   4528069,
  22:   4613499,
  23:   4704965,
  24:   4565768,
  25:   4442611,
  26:   4334922,
  27:   4304223,
  28:   4365759,
  29:   4311602,
  30:   4237509,
  31:   4329883,
  32:   4240707,
  33:   4342416,
  34:   4234183,
  35:   3996996,
  36:   4018982,
  37:   3874447,
  38:   3890817,
  39:   3943336,
  40:   3826111,
  41:   3999338,
  42:   4175636,
  43:   4400166,
  44:   4290490,
  45:   4086516,
  46:   4058118,
  47:   4084439,
  48:   4253106,
  49:   4497896,
  50:   4472489,
  51:   4492789,
  52:   4479242,
  53:   4585173,
  54:   4523071,
  55:   4378466,
  56:   4402900,
  57:   4280468,
  58:   4172096,
  59:   4121432,
  60:   3892827,
  61:   3820445,
  62:   3635203,
  63:   3520715,
  64:   3463316,
  65:   3382492,
  66:   3472965,
  67:   3066297,
  68:   2540744,
  69:   2520656,
  70:   2525026,
  71:   2417105,
  72:   2106691,
  73:   1971424,
  74:   1840266,
  75:   1772048,
  76:   1648285,
  77:   1543454,
  78:   1470925,
  79:   1380806,
  80:   1252850,
  81:   1233753,
  82:   1141516,
  83:   1118198,
  84:   1010317,
  85:   933754,
  86:   858745,
  87:   760085,
  88:   677166,
  89:   601072,
  90:   502620,
  91:   421221,
  92:   358990,
  93:   278466,
  94:   202519,
  95:   159655,
  96:   116335,
  97:   82413,
  98:   58939,
  99:   41626,
  100:  41626,
  101:  41626,
  102:  41626,
  103:  41626,
  104:  41626,
  105:  41626,
  106:  41626,
  107:  41626,
};

// population for all ages 100+ = 70951