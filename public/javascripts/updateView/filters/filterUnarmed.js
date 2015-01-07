function checkUnarmed(filterOrWeight){
  var form = function(){
    switch (filterOrWeight){
      case "filter":
        return $("#unarmed-filter-form");
        break;
      case "weight":
        return $("#unarmed-weight-form");
        break;
    };
  };
  var checkedBoxes = form().children("input:checked");
  var checkedUnarmed = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
  return checkedUnarmed;
};

function dataFilterUnarmedWeightNone(){
  var checkedUnarmed = checkUnarmed("filter");
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
