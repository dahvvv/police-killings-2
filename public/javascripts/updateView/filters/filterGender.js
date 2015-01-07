function checkGenders(){
  var checkedBoxes = $("#gender-filter-form").children("input:checked");
  var checkedGenders = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  return checkedGenders;
};

function dataFilterGenderWeightNone(){
  var checkedGenders = checkGenders();
  var arr = [];
  $.each(checkedGenders, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_gender === val;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function dataFilterGenderWeightUnarmed(){
  var checkedGenders = checkGenders();
  var arr = [];
  $.each(checkedGenders, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_gender === val && el.victim_unarmed != null;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

function dataFilterGenderWeightIllness(){
  var checkedGenders = checkGenders();
  var arr = [];
  $.each(checkedGenders, function(i,val){
    var filtered = allKillings.filter(function(el){
      return el.victim_gender === val && el.symptoms_of_mental_illness != null;
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

var genderColors = {
  "male"   : "lightblue",
  "female" : "pink",
};
