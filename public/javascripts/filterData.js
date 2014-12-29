function filterData(choosers){
  if (choosers.weight === "none"){
    return filterWeightNone(choosers);
  } else if (choosers.weight === "usPop"){
    return filterWeightUspop(choosers);
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

function filterWeightNone(choosers){
  if (choosers.filter === "usPop"){
    return allKillings;
  } else if (choosers.filter === "race"){
    return filterByRace();
  } else if (choosers.filter === "age"){
    return filterAgeWeightNone(choosers);
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
    alert('u must have picked a graph??  check filterData');
  } else if (choosers.filter === "race"){
    return filterByRace();
  }
}
