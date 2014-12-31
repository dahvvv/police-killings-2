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

function dataGraphFilterUnarmedWeightShots(){
  var armed1 = [];
  var armed2 = [];
  var armed3 = [];
  var armed4 = [];
  var armed5 = [];
  var armed6 = [];
  var armed7 = [];
  var armed8 = [];
  var armed9 = [];
  var armed10 = [];
  var armed11 = [];
  var armed12 = [];
  var armed13 = [];
  var armed14 = [];
  var armed15 = [];
  var armed16 = [];
  var armed17 = [];
  var armed18 = [];
  var armed19 = [];
  var armed20Plus = [];
  var unarmed1 = [];
  var unarmed2 = [];
  var unarmed3 = [];
  var unarmed4 = [];
  var unarmed5 = [];
  var unarmed6 = [];
  var unarmed7 = [];
  var unarmed8 = [];
  var unarmed9 = [];
  var unarmed10 = [];
  var unarmed11 = [];
  var unarmed12 = [];
  var unarmed13 = [];
  var unarmed14 = [];
  var unarmed15 = [];
  var unarmed16 = [];
  var unarmed17 = [];
  var unarmed18 = [];
  var unarmed19 = [];
  var unarmed20Plus = [];
  $.each(allKillings, function(i,obj){
    if (obj.victim_unarmed === false){
      if (obj.shots_fired === 1){
        armed1.push(obj);
      } else if (obj.shots_fired === 2){
        armed2.push(obj);
      } else if (obj.shots_fired === 3){
        armed3.push(obj);
      } else if (obj.shots_fired === 4){
        armed4.push(obj);
      } else if (obj.shots_fired === 5){
        armed5.push(obj);
      } else if (obj.shots_fired === 6){
        armed6.push(obj);
      } else if (obj.shots_fired === 7){
        armed7.push(obj);
      } else if (obj.shots_fired === 8){
        armed8.push(obj);
      } else if (obj.shots_fired === 9){
        armed9.push(obj);
      } else if (obj.shots_fired === 10){
        armed10.push(obj);
      } else if (obj.shots_fired === 11){
        armed11.push(obj);
      } else if (obj.shots_fired === 12){
        armed12.push(obj);
      } else if (obj.shots_fired === 13){
        armed13.push(obj);
      } else if (obj.shots_fired === 14){
        armed14.push(obj);
      } else if (obj.shots_fired === 15){
        armed15.push(obj);
      } else if (obj.shots_fired === 16){
        armed16.push(obj);
      } else if (obj.shots_fired === 17){
        armed17.push(obj);
      } else if (obj.shots_fired === 18){
        armed18.push(obj);
      } else if (obj.shots_fired === 19){
        armed19.push(obj);
      } else if (obj.shots_fired >= 20){
        armed20Plus.push(obj);
      }
    } else if (obj.victim_unarmed === true){
      if (obj.shots_fired === 1){
        unarmed1.push(obj);
      } else if (obj.shots_fired === 2){
        unarmed2.push(obj);
      } else if (obj.shots_fired === 3){
        unarmed3.push(obj);
      } else if (obj.shots_fired === 4){
        unarmed4.push(obj);
      } else if (obj.shots_fired === 5){
        unarmed5.push(obj);
      } else if (obj.shots_fired === 6){
        unarmed6.push(obj);
      } else if (obj.shots_fired === 7){
        unarmed7.push(obj);
      } else if (obj.shots_fired === 8){
        unarmed8.push(obj);
      } else if (obj.shots_fired === 9){
        unarmed9.push(obj);
      } else if (obj.shots_fired === 10){
        unarmed10.push(obj);
      } else if (obj.shots_fired === 11){
        unarmed11.push(obj);
      } else if (obj.shots_fired === 12){
        unarmed12.push(obj);
      } else if (obj.shots_fired === 13){
        unarmed13.push(obj);
      } else if (obj.shots_fired === 14){
        unarmed14.push(obj);
      } else if (obj.shots_fired === 15){
        unarmed15.push(obj);
      } else if (obj.shots_fired === 16){
        unarmed16.push(obj);
      } else if (obj.shots_fired === 17){
        unarmed17.push(obj);
      } else if (obj.shots_fired === 18){
        unarmed18.push(obj);
      } else if (obj.shots_fired === 19){
        unarmed19.push(obj);
      } else if (obj.shots_fired >= 20){
        unarmed20Plus.push(obj);
      }
    }
  });
  var data = {
    'color': [baseColor],
    'label': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,"20+"],
    'values': [
      {
        'label': 'armed',
        'values': [
          armed1.length,
          armed2.length,
          armed3.length,
          armed4.length,
          armed5.length,
          armed6.length,
          armed7.length,
          armed8.length,
          armed9.length,
          armed10.length,
          armed11.length,
          armed12.length,
          armed13.length,
          armed14.length,
          armed15.length,
          armed16.length,
          armed17.length,
          armed18.length,
          armed19.length,
          armed20Plus.length,
        ]
      },
      {
        'label': 'unarmed',
        'values': [
          unarmed1.length,
          unarmed2.length,
          unarmed3.length,
          unarmed4.length,
          unarmed5.length,
          unarmed6.length,
          unarmed7.length,
          unarmed8.length,
          unarmed9.length,
          unarmed10.length,
          unarmed11.length,
          unarmed12.length,
          unarmed13.length,
          unarmed14.length,
          unarmed15.length,
          unarmed16.length,
          unarmed17.length,
          unarmed18.length,
          unarmed19.length,
          unarmed20Plus.length,
        ]
      },
    ]
  };
  return data;
};
