function checkIllness(form){
  var checkedBoxes = form.children("input:checked");
  var checkedIllness = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get()
  .reverse();
  return checkedIllness;
};

function dataFilterIllnessWeightNone(){var stateView = ($("#state-filter").val());
  var checkedIllness = checkIllness($("#illness-filter-form"));
  var formattedIllness = $.map(checkedIllness, function(val){
    return formatCI[val];
  });
  var arr = [];
  $.each(formattedIllness, function(i,illness){
    var filtered = allKillings.filter(function(el){
      if (stateView === null || stateView === "USA"){
        return el.symptoms_of_mental_illness === illness;
      } else {
        return el.symptoms_of_mental_illness === illness && el.location_of_killing_state === stateView;
      };
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

var illnessColors = {
  "yes" : "paleturquoise",
  "no"  : "red", 
};

var formatCI = {
  "ill": "yes",
  "not-ill": "no"
};
