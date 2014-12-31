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
