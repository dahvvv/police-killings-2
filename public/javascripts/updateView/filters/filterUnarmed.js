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
  var checkedUnarmed = checkUnarmed($("#unarmed-filter-form"));
  var arr = [];
  $.each(checkedUnarmed, function(i,val){
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

var unarmedColors = {
  false : "red",
  true  : "white", 
};
