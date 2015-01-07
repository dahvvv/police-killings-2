function checkIllness(form){
  var checkedBoxes = form.children("input:checked");
  var checkedIllness = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  return checkedIllness;
};

function dataFilterIllnessWeightNone(){
  var checkedIllness = checkIllness($("#illness-filter-form"));
  var arr = [];
  $.each(checkedIllness, function(i,val){
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

var illnessColors = {
  "yes" : "paleturquoise",
  "no"  : "red", 
};
