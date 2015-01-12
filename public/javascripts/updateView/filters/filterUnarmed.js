function checkUnarmed(form){
  var checkedBoxes = form.children("input:checked");
  var checkedUnarmed = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get()
  .reverse();
  return checkedUnarmed;
};

function dataFilterUnarmedWeightNone(){
  var stateView = ($("#state-filter").val());
  var checkedUnarmed = checkUnarmed($("#unarmed-filter-form"));
  var formattedUnarmed = $.map(checkedUnarmed, function(val){
    return val === "unarmed";
  });
  var arr = [];
  $.each(formattedUnarmed, function(i,val){
    var filtered = allKillings.filter(function(el){
      if (stateView === null || stateView === "USA"){
        return el.victim_unarmed === val;
      } else {
        return el.victim_unarmed === val && el.location_of_killing_state === stateView;
      };
    });
    arr = arr.concat(filtered);
  });
  return arr;
};

var unarmedColors = {
  false : "red",
  true  : "white", 
};
