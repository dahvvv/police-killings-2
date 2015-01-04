function infoGraphFilterGenderWeightNone(){
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

function infoGraphFilterGenderWeightUnarmed(){
  var maleUnarmed = [];
  var maleArmed = [];
  var femaleUnarmed = [];
  var femaleArmed = [];
  $.each(allKillings, function(i,obj){
    if (obj.victim_gender === "male"){
      if (obj.victim_unarmed === true){
        maleUnarmed.push(obj);
      } else if (obj.victim_unarmed === false){
        maleArmed.push(obj);
      }
    } else if (obj.victim_gender === "female"){
      if (obj.victim_unarmed === true){
        femaleUnarmed.push(obj);
      } else if (obj.victim_unarmed === false){
        femaleArmed.push(obj);
      }
    }
  });
  var data = {
    'color': [baseColor,"#FF0000"],
    'label': ["armed","unarmed"],
    'values': [
      {
        'label': 'male',
        'values': [maleArmed.length, maleUnarmed.length]
      },
      {
        'label': 'female',
        'values': [femaleArmed.length, femaleUnarmed.length]
      },
    ]
  };
  return data;
};

function infoGraphFilterGenderWeightIllness(){
  var maleIll = [];
  var maleNotIll = [];
  var femaleIll = [];
  var femaleNotIll = [];
  $.each(allKillings, function(i,obj){
    if (obj.victim_gender === "male"){
      if (obj.symptoms_of_mental_illness === "yes"){
        maleIll.push(obj);
      } else if (obj.symptoms_of_mental_illness === "no"){
        maleNotIll.push(obj);
      }
    } else if (obj.victim_gender === "female"){
      if (obj.symptoms_of_mental_illness === "yes"){
        femaleIll.push(obj);
      } else if (obj.symptoms_of_mental_illness === "no"){
        femaleNotIll.push(obj);
      }
    }
  });
  var data = {
    'color': [baseColor,"#FF0000"],
    'label': ["not ill","ill"],
    'values': [
      {
        'label': 'male',
        'values': [maleNotIll.length, maleIll.length]
      },
      {
        'label': 'female',
        'values': [femaleNotIll.length, femaleIll.length]
      },
    ]
  };
  return data;
};
