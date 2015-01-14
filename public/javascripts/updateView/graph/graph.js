function updateGraph(){
	$(".filter-form").hide();
  $(".graph-legend-container").hide();
  var filter = $(".filter-type").attr("id");
  if (_.contains([null,"USA"], $("#state-filter").val())){
    emptyGraph(selectGraphFilter[filter]);
  } else {
    $("#display-container").animate({"height":"63%"}, 100, function(){
      emptyGraph(selectGraphFilter[filter]);
    });
  };
};



function emptyGraph(callback){
  if ($("#map-one").css("display") != "none") {
    $("#map-one").slideToggle(750, function(){
    	callback();
    });
  } else {
    $("#display-container-canvaswidget").remove();
    callback();
  }
};

var selectGraphFilter = {
  "usPop-filter" : function(){
    updateGraphFilterUspop();
  },
  "race-filter" : function(){
    updateGraphFilterRace();
  },
  "age-filter" : function(){
    updateGraphFilterAge();
  },
  "gender-filter" : function(){
    updateGraphFilterGender();
  },
  "unarmed-filter" : function(){
    updateGraphFilterUnarmed();
  },
  "illness-filter" : function(){
    updateGraphFilterIllness();
  },
  "shots-filter" : function(){
    updateGraphFilterShots();
  },
};

function labelsToData(labels){
  var values = $.map(labels["labelObjCrossGraph"], function(val, key){
    return {
      "label": key,
      "values": val
    };
  });
  var data = {
    "color": labels["colorArr"],
    "label": labels["labelArrUpGraph"],
    "values": values
  };
  return data;
};

function createGraph(data, style){
  var graph = new $jit.BarChart(style);
  graph.loadJSON(data);
};

function makeGraphLegend(labels){
  var top = 61;
  $.each(labels.labelArrUpGraph, function(i,val){
    top -=3;
    var text = $(document.createElement("span"));
    text.addClass("legend-text")
    .html(capitalize(val) + "<br />")
    .prependTo($(".graph-legend-container"));
    var legend = $(document.createElement("span"));
    legend.addClass("graph-legend")
    .attr("id", val.replace(" ","-"))
    .css({"background-color":labels.colorArr[i]})
    .prependTo($(".graph-legend-container"));
  });
  $(".graph-legend-container").css({"top":top + "%"});
};

var baseColor = "#0066CC";
var addColor = "#2f82d5";
var subColor = "#001F3D";

var labelType, useGradients, nativeTextSupport, animate;

$(function(){

  var ua = navigator.userAgent,
  iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
  typeOfCanvas = typeof HTMLCanvasElement,
  nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
  textSupport = nativeCanvasSupport 
    && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
  

  var Log = {
    elem: false,
    write: function(text){
      if (!this.elem) 
        this.elem = document.getElementById('log');
      this.elem.innerHTML = text;
      this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
  };
  
});
