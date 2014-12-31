function filterData(choosers){
  if (choosers.weight === "none"){
    return filterWeightNone(choosers);
  } else if (choosers.weight === "usPop"){
    return filterWeightUspop(choosers);
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
    return filterByShots();
  }
};

function filterAgeWeightNone(choosers){
  if (choosers.displaySelector === "heatmap"){
    return filterByAge();
  } else if (choosers.displaySelector === "marker"){
    return filterAgeNotNil();
  }
};

function filterWeightUspop(choosers){
  if (choosers.filter === "usPop"){
    return allKillings;
  } else if (choosers.filter === "race"){
    return filterByRace();
  }
};

function filterByRace(){
  var checkedBoxes = $('#race-selection').children('input:checked');
  var races = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  var arr = [];
  $.each(races, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_race === val;
    });
    arr = arr.concat(filtered);
  });
  return arr;
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

function filterByShots(){
  var min = $('#shots-min').val();
  var max = $('#shots-max').val();
  arr = allKillings.filter(function(el){
    return el.shots_fired >= min && el.shots_fired <= max;
  });
  return arr;
};
