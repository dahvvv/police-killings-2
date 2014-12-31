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
