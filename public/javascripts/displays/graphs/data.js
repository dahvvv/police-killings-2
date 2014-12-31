var baseColor = '#0066CC';
var addColor = '#2f82d5';
var subColor = '#001F3D';

var deathsByAge = 
[0,1,0,0,2,
4,3,4,0,0,
0,2,3,9,5,
28,31,45,86,119,
93,168,158,110,132,
124,145,117,116,106,
93,101,114,83,94,
121,71,94,83,88,
82,65,84,82,50,
61,56,65,55,56,
53,45,43,38,36,
25,25,24,25,23,
21,24,11,9,12,
10,11,10,15,2,
5,7,7,7,3,
6,1,5,5,1,
2,1,0,1,0,
0,2,3,1,1,
0,0,1,2,0,
1,0,1,0,0,
0,0,0,0,0,
0,1,0,0,0];

function dataGraphFilterPopWeightNone(){
  var data = {
    'color': [baseColor],
    'label': [''],
    'values': [
      {
        'label': 'Houston',
        'values': [31]
      },
      {
        'label': 'Baltimore',
        'values': [34]
      },
      {
        'label': 'Cleveland',
        'values': [38]
      },
      {
        'label': 'Oakland',
        'values': [40]
      },
      {
        'label': 'Portland',
        'values': [51] // 44,7
      },
      {
        'label': 'Albuquerque',
        'values': [52] // 44,8
      },
      {
        'label': 'Chicago',
        'values': [53] // 44,9
      },
      {
        'label': 'LA',
        'values': [57] // 44,13
      },
      {
        'label': 'Las Vegas',
        'values': [136] // 44,44,44,4
      },
      {
        'label': 'NYC',
        'values': [220], // 44,44,44,44,44
      },
    ]
  };
  return data;
};

function dataGraphFilterPopWeightUspop(){
  var data = {
    'color': [baseColor],
    'label': ['Deaths Per Ten Thousand'],
    'values': [
      {
        'label': 'Houston',
        'values': [05]
      },
      {
        'label': 'Baltimore',
        'values': [54]
      },
      {
        'label': 'Cleveland',
        'values': [97]
      },
      {
        'label': 'Oakland',
        'values': [98]
      },
      {
        'label': 'Portland',
        'values': [83] // 44,7
      },
      {
        'label': 'Albuquerque',
        'values': [93] // 44,8
      },
      {
        'label': 'Chicago',
        'values': [19] // 44,9
      },
      {
        'label': 'LA',
        'values': [14] // 44,13
      },
      {
        'label': 'Las Vegas',
        'values': [225] // 44,44,44,4
      },
      {
        'label': 'NYC',
        'values': [26], // 2.6 (per hundred thousand)
      }
    ]
  };
  return data;
};

function dataGraphFilterRaceWeightNone(){
  var data = {
    'color': [baseColor],
    'label': ['race'],
    'values': [
      {
        'label': 'other',
        'values': [0.9], //24
      },
      {
        'label': 'alaskan/p.i.',
        'values': [1.1], //29
      },
      {
        'label': 'asian',
        'values': [1.7], //44
      },
      {
        'label': 'hispanic/latin',
        'values': [11.9], //302
      },
      {
        'label': 'black',
        'values': [35.0], //889
      },
      {
        'label': 'white',
        'values': [49.3], //1252
      }
    ]
  };
  return data;
};

function dataGraphFilterRaceWeightUspop(){
  var data = {
    'color': [baseColor,addColor,subColor],
    'label': ['unweighted portion','additional portion gained by weighting against us population','portion lost by weighting against us population'],
    'values': [
      {
        'label': 'other',
        'values': [0.9,5.4], //24, total weighted percent 6.3
      },
      {
        'label': 'alaskan/p.i.', //29, total weight 15.3%
        'values': [1.1,14.2],
      },
      {
        'label': 'asian',
        'values': [1.7,3.6], //44, total weight 5.3%
      },
      {
        'label': 'hispanic/latin', //302, total weight 11.6
        'values': [11.6,0,0.3],
      },
      {
        'label': 'black', //889, total weight 44.2
        'values': [35.0,9.2],
      },
      {
        'label': 'white', //1252, total weight 10.6, -38.7
        'values': [10.6,0,38.7], // add extra 38.7 to all
      }
    ]
  };
  return data;
};

function dataGraphFilterRaceWeightArrests(){
  var data = {
    'color': [baseColor,addColor,subColor],
    'label': ['unweighted portion','additional portion gained by weighting against us population','portion lost by weighting against us population'],
    'values': [
      {
        'label': 'alaskan/p.i.', //arrest rate 1.7%, cop kill rate 1.1%, total weight 10.8%
        'values': [1.1,9.7],
      },
      {
        'label': 'asian',
        'values': [1.7,21.9], //arrest rate 1.2%, cop kill rate 1.7%, total weight 23.6%
      },
      {
        'label': 'black', //arrest rate 28.3%, cop kill rate 35%, total weight 44.2
        'values': [35.0,9.2],
      },
      {
        'label': 'white', //arrest rate 68.9%, cop kill rate 49.3%, total weight 11.9, 
        'values': [10.6,1.3], // add extra 38.7 to all
      }
    ]
  };
  return data;
};

function dataGraphFilterAgeWeightNone(){
  var data = {
    'color': [baseColor],
    'label': ['age'],
    'values': ageGraphValues()
  };
  return data;
};

function ageGraphValues(){
  var values = [];
  for (var age = 0; age < 110; age++) {
    var value = {
      'label': [age],
      'values': deathsByAge[age]
    };
    values.push(value);
  };
  return values;
};

function dataGraphFilterGenderWeightNone(){
  var males = allKillings.filter(function(el){
    return el.victim_gender === "male";
  });
  var females = allKillings.filter(function(el){
    return el.victim_gender === "female";
  });
  var data = {
    'color': [baseColor],
    'label': ['gender'],
    'values': [
      {
        'label': 'male',
        'values': [males.length]
      },
      {
        'label': 'female',
        'values': [females.length]
      },
    ]
  };
  return data;
};

function dataGraphFilterUnarmedWeightNone(){
  var armed = allKillings.filter(function(el){
    return el.victim_unarmed === false;
  });
  var unarmed = allKillings.filter(function(el){
    return el.victim_unarmed === true;
  });
  var data = {
    'color': [baseColor],
    'label': ['unarmed'],
    'values': [
      {
        'label': 'armed',
        'values': [armed.length]
      },
      {
        'label': 'unarmed',
        'values': [unarmed.length]
      },
    ]
  };
  return data;
};

function dataGraphFilterIllnessWeightNone(){
  var ill = allKillings.filter(function(el){
    return el.symptoms_of_mental_illness === "yes";
  });
  var notIll = allKillings.filter(function(el){
    return el.symptoms_of_mental_illness === "no";
  });
  var data = {
    'color': [baseColor],
    'label': ['symptoms of mental illness'],
    'values': [
      {
        'label': 'no symptoms',
        'values': [notIll.length]
      },
      {
        'label': 'symptoms',
        'values': [ill.length]
      },
    ]
  };
  return data;
};

function dataGraphFilterIllnessWeightAge(){
  var notIllTo4 = [];
  var notIllTo9 = [];
  var notIllTo14 = [];
  var notIllTo19 = [];
  var notIllTo24 = [];
  var notIllTo29 = [];
  var notIllTo34 = [];
  var notIllTo39 = [];
  var notIllTo44 = [];
  var notIllTo49 = [];
  var notIllTo54 = [];
  var notIllTo59 = [];
  var notIllTo64 = [];
  var notIllTo69 = [];
  var notIllTo74 = [];
  var notIllTo79 = [];
  var notIllTo84 = [];
  var notIllTo89 = [];
  var notIllTo94 = [];
  var notIllTo99 = [];
  var notIllTo104 = [];
  var notIllTo109 = [];
  var illTo4 = [];
  var illTo9 = [];
  var illTo14 = [];
  var illTo19 = [];
  var illTo24 = [];
  var illTo29 = [];
  var illTo34 = [];
  var illTo39 = [];
  var illTo44 = [];
  var illTo49 = [];
  var illTo54 = [];
  var illTo59 = [];
  var illTo64 = [];
  var illTo69 = [];
  var illTo74 = [];
  var illTo79 = [];
  var illTo84 = [];
  var illTo89 = [];
  var illTo94 = [];
  var illTo99 = [];
  var illTo104 = [];
  var illTo109 = [];
  $.each(allKillings, function(i,obj){
    if (obj.symptoms_of_mental_illness === "yes"){
      if (obj.victim_age < 5){
        illTo4.push(obj);
      } else if (obj.victim_age < 10){
        illTo9.push(obj);
      } else if (obj.victim_age < 15){
        illTo14.push(obj);
      } else if (obj.victim_age < 20){
        illTo19.push(obj);
      } else if (obj.victim_age < 25){
        illTo24.push(obj);
      } else if (obj.victim_age < 30){
        illTo29.push(obj);
      } else if (obj.victim_age < 35){
        illTo34.push(obj);
      } else if (obj.victim_age < 40){
        illTo39.push(obj);
      } else if (obj.victim_age < 45){
        illTo44.push(obj);
      } else if (obj.victim_age < 50){
        illTo49.push(obj);
      } else if (obj.victim_age < 55){
        illTo54.push(obj);
      } else if (obj.victim_age < 60){
        illTo59.push(obj);
      } else if (obj.victim_age < 65){
        illTo64.push(obj);
      } else if (obj.victim_age < 70){
        illTo69.push(obj);
      } else if (obj.victim_age < 75){
        illTo74.push(obj);
      } else if (obj.victim_age < 80){
        illTo79.push(obj);
      } else if (obj.victim_age < 85){
        illTo84.push(obj);
      } else if (obj.victim_age < 90){
        illTo89.push(obj);
      } else if (obj.victim_age < 95){
        illTo94.push(obj);
      } else if (obj.victim_age < 100){
        illTo99.push(obj);
      } else if (obj.victim_age < 105){
        illTo104.push(obj);
      } else if (obj.victim_age < 110){
        illTo109.push(obj);
      }
    } else if (obj.symptoms_of_mental_illness === "no"){
      if (obj.victim_age < 5){
        notIllTo4.push(obj);
      } else if (obj.victim_age < 10){
        notIllTo9.push(obj);
      } else if (obj.victim_age < 15){
        notIllTo14.push(obj);
      } else if (obj.victim_age < 20){
        notIllTo19.push(obj);
      } else if (obj.victim_age < 25){
        notIllTo24.push(obj);
      } else if (obj.victim_age < 30){
        notIllTo29.push(obj);
      } else if (obj.victim_age < 35){
        notIllTo34.push(obj);
      } else if (obj.victim_age < 40){
        notIllTo39.push(obj);
      } else if (obj.victim_age < 45){
        notIllTo44.push(obj);
      } else if (obj.victim_age < 50){
        notIllTo49.push(obj);
      } else if (obj.victim_age < 55){
        notIllTo54.push(obj);
      } else if (obj.victim_age < 60){
        notIllTo59.push(obj);
      } else if (obj.victim_age < 65){
        notIllTo64.push(obj);
      } else if (obj.victim_age < 70){
        notIllTo69.push(obj);
      } else if (obj.victim_age < 75){
        notIllTo74.push(obj);
      } else if (obj.victim_age < 80){
        notIllTo79.push(obj);
      } else if (obj.victim_age < 85){
        notIllTo84.push(obj);
      } else if (obj.victim_age < 90){
        notIllTo89.push(obj);
      } else if (obj.victim_age < 95){
        notIllTo94.push(obj);
      } else if (obj.victim_age < 100){
        notIllTo99.push(obj);
      } else if (obj.victim_age < 105){
        notIllTo104.push(obj);
      } else if (obj.victim_age < 110){
        notIllTo109.push(obj);
      }
    }
  })
  var ill = allKillings.filter(function(el){
    return el.symptoms_of_mental_illness === "yes";
  });
  var notIll = allKillings.filter(function(el){
    return el.symptoms_of_mental_illness === "no";
  });
  var data = {
    'color': [
      "#FF0000",
      "#E70018",
      "#DB0024",
      "#CF0030",
      "#C3003C",
      "#B70048",
      "#AB0054",
      "#9F0060",
      "#93006C",
      "#870078",
      "#7B0084",
      "#6F0090",
      "#63009C",
      "#5700A8",
      "#4B00B4",
      "#3F00C0",
      "#3300CC",
      "#2700D8",
      "#1B00E4",
      "#0F00F0",
      "#0800F7",
      "#0000FF"
    ],
    'label': [
      'ages 0 through 4',
      'ages 5 through 9',
      'ages 10 through 14',
      'ages 15 through 19',
      'ages 20 through 24',
      'ages 25 through 29',
      'ages 30 through 34',
      'ages 35 through 39',
      'ages 40 through 44',
      'ages 45 through 49',
      'ages 50 through 54',
      'ages 55 through 59',
      'ages 60 through 64',
      'ages 65 through 69',
      'ages 70 through 74',
      'ages 75 through 79',
      'ages 80 through 84',
      'ages 85 through 89',
      'ages 90 through 94',
      'ages 95 through 99',
      'ages 100 through 104',
      'ages 105 through 109',
    ],
    'values': [
      {
        'label': 'no symptoms',
        'values': [
          notIllTo4.length,
          notIllTo9.length,
          notIllTo14.length,
          notIllTo19.length,
          notIllTo24.length,
          notIllTo29.length,
          notIllTo34.length,
          notIllTo39.length,
          notIllTo44.length,
          notIllTo49.length,
          notIllTo54.length,
          notIllTo59.length,
          notIllTo64.length,
          notIllTo69.length,
          notIllTo74.length,
          notIllTo79.length,
          notIllTo84.length,
          notIllTo89.length,
          notIllTo94.length,
          notIllTo99.length,
          notIllTo104.length,
          notIllTo109.length,
        ]
      },
      {
        'label': 'symptoms',
        'values': [
          illTo4.length,
          illTo9.length,
          illTo14.length,
          illTo19.length,
          illTo24.length,
          illTo29.length,
          illTo34.length,
          illTo39.length,
          illTo44.length,
          illTo49.length,
          illTo54.length,
          illTo59.length,
          illTo64.length,
          illTo69.length,
          illTo74.length,
          illTo79.length,
          illTo84.length,
          illTo89.length,
          illTo94.length,
          illTo99.length,
          illTo104.length,
          illTo109.length,
        ]
      },
    ]
  };
  return data;
};

function dataGraphFilterShotsWeightNone(){
  var values = [];
  for (var shots = 1; shots < 20; shots++){
    var instances = allKillings.filter(function(el){
      return el.shots_fired === shots;
    });
    var value = {
      'label': [shots],
      'values': [instances.length]
    };
    values.push(value);
  };
  var instances20PlusShots = allKillings.filter(function(el){
    return el.shots_fired >= 20;
  });
  var value = {
    'label': '20+',
    'values': [instances20PlusShots.length]
  };
  values.push(value);
  var data = {
    'color': [baseColor],
    'label': ['shots fired'],
    'values': values
  };
  return data;
};

function dataGraphFilterShotsWeightRace(){
  var values = [];
  for (var shots = 1; shots < 20; shots++){
    var whiteInstances = [];
    var blackInstances = [];
    var hispanicInstances = [];
    var asianInstances = [];
    var alaskanInstances = [];
    var otherInstances = [];
    var instances = allKillings.filter(function(el){
      return el.shots_fired === shots;
    });
    $.each(instances, function(i,obj){
      switch(obj.victim_race){
        case "white": whiteInstances.push(obj);
        break;
        case "black": blackInstances.push(obj);
        break;
        case "hispanic and/or latin": hispanicInstances.push(obj);
        break;
        case "asian": asianInstances.push(obj);
        break;
        case "alaskan and/or pacific islander": alaskanInstances.push(obj);
        break;
        case "other": otherInstances.push(obj);
      }
    });
    var value = {
      'label': [shots],
      'values': [whiteInstances.length, blackInstances.length, hispanicInstances.length, asianInstances.length, alaskanInstances.length, otherInstances.length]
    };    
    values.push(value);
  };

  var instances20PlusShots = allKillings.filter(function(el){
    return el.shots_fired >= 20;
  });
  var whiteInstances = [];
  var blackInstances = [];
  var hispanicInstances = [];
  var asianInstances = [];
  var alaskanInstances = [];
  var otherInstances = [];
  $.each(instances20PlusShots, function(i,obj){
    switch(obj.victim_race){
      case "white": whiteInstances.push(obj);
      break;
      case "black": blackInstances.push(obj);
      break;
      case "hispanic and/or latin": hispanicInstances.push(obj);
      break;
      case "asian": asianInstances.push(obj);
      break;
      case "alaskan and/or pacific islander": alaskanInstances.push(obj);
      break;
      case "other": otherInstances.push(obj);
    }
  });
  var value = {
    'label': '20+',
    'values': [whiteInstances.length, blackInstances.length, hispanicInstances.length, asianInstances.length, alaskanInstances.length, otherInstances.length]
  };
  values.push(value);

  var data = {
    // 'color': [baseColor],
    'label': ['white','black','hispanic and/or latin','asian','alaskan and/or pacific islander','other'],
    'values': values
  };
  return data;
};

function dataGraphFilterShotsWeightUnarmed(){
  var values = [];
  for (var shots = 1; shots < 20; shots++){
    var armed = [];
    var unarmed = [];
    var instances = allKillings.filter(function(el){
      return el.shots_fired === shots;
    });
    $.each(instances, function(i,obj){
      switch(obj.victim_unarmed){
        case false: armed.push(obj);
        break;
        case true: unarmed.push(obj);
      }
    });
    var value = {
      'label': [shots],
      'values': [armed.length, unarmed.length]
    };    
    values.push(value);
  };

  var instances20PlusShots = allKillings.filter(function(el){
    return el.shots_fired >= 20;
  });
  var armed = [];
  var unarmed = [];
  $.each(instances20PlusShots, function(i,obj){
    switch(obj.victim_unarmed){
      case false: armed.push(obj);
      break;
      case true: unarmed.push(obj);
    }
  });
  var value = {
    'label': '20+',
    'values': [armed.length, unarmed.length]
  };
  values.push(value);

  var data = {
    // 'color': [baseColor],
    'label': ['armed','unarmed'],
    'values': values
  };
  return data;
};
