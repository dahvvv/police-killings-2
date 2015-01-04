function dataFilterGenderWeightNone(checkedGenders){
  var arr = [];
  $.each(checkedGenders, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_gender === val;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function dataFilterGenderWeightUnarmed(checkedGenders){
  var arr = [];
  $.each(checkedGenders, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_gender === val && el.victim_unarmed != null;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function dataFilterGenderWeightIllness(checkedGenders){
  var arr = [];
  $.each(checkedGenders, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_gender === val && el.symptoms_of_mental_illness != null;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};
