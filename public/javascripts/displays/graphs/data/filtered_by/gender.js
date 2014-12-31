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
