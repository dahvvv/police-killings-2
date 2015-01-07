function detectFilter(){
  return $(".filter-type").attr("id");
};

// function replaceFilter(filter, callback){
//   if ($(filter).hasClass('race-selection-submit')) {
//     var filter = $('#race-filter');
//   } else {
//   	$('#race-selection').css({"display":"none"});
//   };
//   if ($(filter).hasClass('age-range-submit')) {
//     var filter = $('#age-filter');
//   } else {
//     $('#age-range').css({"display":"none"});
//   };
//   if ($(filter).hasClass('gender-selection-submit')) {
//     var filter = $('#gender-filter');
//   } else {
//     $('#gender-selection').css({"display":"none"});
//   };
//   if ($(filter).hasClass('unarmed-selection-submit')) {
//     var filter = $('#unarmed-filter');
//   } else {
//     $('#unarmed-selection').css({"display":"none"});
//   };
//   if ($(filter).hasClass('illness-selection-submit')) {
//     var filter = $('#illness-filter');
//   } else {
//     $('#illness-selection').css({"display":"none"});
//   };
//   if ($(filter).hasClass('shots-range-submit')) {
//     var filter = $('#shots-filter');
//   } else {
//     $('#shots-range').css({"display":"none"});
//   };
  
//   $('.button-filter').removeClass('filter-type');
//   $(filter).addClass('filter-type');
//   callback();
// };

// function removeAllListviews(){
//   $('.filter-checkbox-form, .filter-range-form').css({"display":"none"});
// };

// function removeAllFilterForms(){};

// function showThisFilterForm(){};
