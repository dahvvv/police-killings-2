function dataFilterGender(choosers){
	if (choosers.weight === "none"){
		return dataFilterGenderWeightNone();
	} else if (choosers.weight === "unarmed"){
		return dataFilterGenderWeightUnarmed();
	} else if (choosers.weight === "illness"){
		return dataFilterGenderWeightIllness();
	}
};

function dataFilterGenderWeightNone(){
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

function dataFilterGenderWeightUnarmed(){
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

function dataFilterGenderWeightIllness(){
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
