function filterByAge(){
  arr = allKillings.filter(function(el){
    return el.victim_age >= enteredAgeRange().min && el.victim_age <= enteredAgeRange().max && el.victim_age != null;
  });
  return arr;
};

function enteredAgeRange(){
  var min = $('#age-min').val();
  min = min === "" ? 1 : min;
  var max = $('#age-max').val();
  max = max === "" ? 999 : max;
  return {min: min, max: max};
};

function filterAgeNotNil(){
  arr = allKillings.filter(function(el){
    return el.victim_age != null;
  });
  return arr;
};
