function filterData(choosers){
  if (choosers.weight === "none"){
    return filterWeightNone(choosers);
  } else if (choosers.weight === "usPop"){
    return filterWeightUspop(choosers);
  } else if (choosers.weight === "race"){
    return filterWeightRace(choosers);
  } else if (choosers.weight === "unarmed"){
    return filterWeightUnarmed(choosers);
  } else if (choosers.weight === "illness"){
    return filterWeightIllness(choosers);
  }
};

function filterWeightNone(choosers){
  if (choosers.filter === "usPop"){
    return allKillings;
  } else if (choosers.filter === "race"){
    return filterByRace();
  } else if (choosers.filter === "age"){
    return filterAgeWeightNone(choosers);
  } else if (choosers.filter === "gender"){
    return filterByGender();
  } else if (choosers.filter === "unarmed"){
    return filterByUnarmed();
  } else if (choosers.filter === "illness"){
    return filterByIllness();
  } else if (choosers.filter === "shots"){
    return filterShotsWeightNone(choosers);
  }
};

function filterWeightUspop(choosers){
  if (choosers.filter === "usPop"){
    return allKillings;
  } else if (choosers.filter === "race"){
    return filterByRace();
  }
};

function filterWeightRace(choosers){
  if (choosers.filter === "shots"){
    return filterShotsWeightRace(choosers);
  }
};

function filterWeightUnarmed(choosers){
  if (choosers.filter === "gender"){
    return filterByGenderWeightUnarmed();
  }
};

function filterWeightIllness(choosers){
  if (choosers.filter === "gender"){
    return filterByGenderWeightIllness();
  }
};

function filterByRace(){
  var checkedBoxes = $('#race-selection').children('input:checked');
  var races = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  races = reorderRaces(races);
  var arr = [];
  $.each(races, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_race === val;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function reorderRaces(raceArr){
  var newOrder = ["white","black","hispanic and/or latin","asian","alaskan and/or pacific islander"];
  var reordered = [];
  $.each(newOrder, function(i,race){
    if ($.inArray(race,raceArr) >= 0){
      reordered.push(race);
    };
  });
  return reordered;
};

function filterAgeWeightNone(choosers){
  if (choosers.displaySelector === "heatmap"){
    return filterByAge();
  } else if (choosers.displaySelector === "marker"){
    return filterAgeNotNil();
  }
};

function filterByAge(){
  var min = $('#age-min').val();
  var max = $('#age-max').val();
  arr = allKillings.filter(function(el){
    return el.victim_age >= min && el.victim_age <= max;
  });
  return arr;
};

function filterAgeNotNil(){
  arr = allKillings.filter(function(el){
    return el.victim_age != null;
  });
  return arr;
};

function filterByGender(){
  var checkedBoxes = $('#gender-selection').children('input:checked');
  var genders = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  var arr = [];
  $.each(genders, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_gender === val;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function filterByGenderWeightUnarmed(){
  var checkedBoxes = $('#gender-selection').children('input:checked');
  var genders = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  var arr = [];
  $.each(genders, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_gender === val && el.victim_unarmed != null;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function filterByGenderWeightIllness(){
  var checkedBoxes = $('#gender-selection').children('input:checked');
  var genders = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  var arr = [];
  $.each(genders, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_gender === val && el.symptoms_of_mental_illness != null;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function filterByUnarmed(){
  var checkedBoxes = $('#unarmed-selection').children('input:checked');
  var unarmedSelected = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  var arr = [];
  $.each(unarmedSelected, function(i,val){
    var filtered = allKillings.filter(function(el){
      if (val === "armed"){
        return el.victim_unarmed === false;
      } else if (val === "unarmed"){
        return el.victim_unarmed === true;
      }
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function filterByIllness(){
  var checkedBoxes = $('#illness-selection').children('input:checked');
  var illnessSelected = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  var arr = [];
  $.each(illnessSelected, function(i,val){
    var filtered = allKillings.filter(function(el){
      if (val === "ill"){
        return el.symptoms_of_mental_illness === "yes";
      } else if (val === "not-ill"){
        return el.symptoms_of_mental_illness === "no";
      }
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function filterShotsWeightNone(choosers){
  if (choosers.displaySelector === "heatmap"){
    return filterByShots();
  } else if (choosers.displaySelector === "marker"){
    return filterShots20Plus();
  }
};

function filterByShots(){
  var min = $('#shots-min').val();
  min = min === "" ? 0 : min;
  var max = $('#shots-max').val();
  max = max === "" ? 999 : max;
  arr = allKillings.filter(function(el){
    return el.shots_fired >= min && el.shots_fired <= max;
  });
  return arr;
};

function filterShots20Plus(){
  arr = allKillings.filter(function(el){
    return el.shots_fired >= 20;
  });
  return arr;
};

function filterShotsWeightRace(choosers){
  if (choosers.displaySelector === "heatmap"){
    return filterByShots();
  } else if (choosers.displaySelector === "marker"){
    return filterShots20Plus();
  }
};
