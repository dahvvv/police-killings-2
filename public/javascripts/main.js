L.mapbox.accessToken = 'pk.eyJ1IjoibWFycGJvcnhtYXJycnBib3JycnJyeCIsImEiOiJ3Y0hUd3ZZIn0.VNcoUZ2TFXUuID8JQ2-t2A';

function replaceFilter(filter){
  if (filter.id != "age-filter") {
    $('#age-range').children().css({"display":"none"});
  };
  if (filter.id != "race-filter") {
    $('#race-selection').css({"display":"none"});
  };
  $('.button-filter').removeClass('filter-type');
  $(filter).addClass('filter-type');
};

function replaceSelector(selector){
  if (selector.id != "heatmaps-selector"){
    $('#age-range').children().css({"display":"none"});
  };
  $('.display-selector').removeClass('display-type');
  $(selector).addClass('display-type');
};

function replaceWeight(weight){
  if ($(weight).hasClass('weight-type')) {
    $(weight).removeClass('weight-type');
  } else {
    $('.button-weight').removeClass('weight-type');
    $(weight).addClass('weight-type');
  };  
};

var defaultLat = 37.78808138412046;
var defaultLon = -94.39453125;
var defaultZoom = 4;

$(function(){
  map = L.mapbox.map('map-one', 'marpborxmarrrpborrrrrx.kg7bjg5l', {
    scrollWheelZoom: true,
    draggable: true
  }).setView([defaultLat,defaultLon],defaultZoom);

	$('.chooser').on('click', function(){
		if ($(this).hasClass('button-filter')) {
			replaceFilter(this);
		} else if ($(this).hasClass('display-selector')) {
			replaceSelector(this);
		} else if ($(this).hasClass('button-weight')) {
			replaceWeight(this);
		};
	});
})
