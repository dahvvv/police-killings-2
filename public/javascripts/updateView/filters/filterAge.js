function ageRange(){
  var ages = [];
  $.each(allKillings, function(i,obj){
    if (obj.victim_age != 0 && obj.victim_age != null){
      ages.push(obj.victim_age);
    };
  });
  var ageMin = Math.min.apply(Math, ages);
  var ageMax = Math.max.apply(Math, ages);
  return [ageMin, ageMax];
};

function enteredAgeRange(){
  var min = $('#age-min').val();
  min = (min === "" || min === "0") ? 1 : min;
  var max = $('#age-max').val();
  max = max === "" ? 999 : max;
  return {min: min, max: max};
};

function filterByAge(){
  arr = allKillings.filter(function(el){
    return el.victim_age >= enteredAgeRange().min && el.victim_age <= enteredAgeRange().max && el.victim_age != null;
  });
  return arr;
};

function filterAgeNotNil(){
  arr = allKillings.filter(function(el){
    return el.victim_age != null;
  });
  return arr;
};

function ageFilterColorArr(){
  return hexScaler("#FFFFFF","#FFFF00",9)
  .slice(0,8)
  .concat(hexScaler("#FFFF00","#FF6600",7))
  .slice(0,14)
  .concat(hexScaler("#FF6600","#FF0000",7))
  .slice(0,20)
  .concat(hexScaler("#FF0000","#551A8B",7))
  .concat(hexScaler("#551A8B","#551A8B",14))
  .concat(hexScaler("#551A8B","#FF0000",8))
  .slice(0,48)
  .concat(hexScaler("#FF0000","#FF6600",7))
  .slice(0,54)
  .concat(hexScaler("#FF6600","#FFFF00",8))
  .slice(0,61)
  .concat(hexScaler("#FFFF00","#FFFFFF",46));
};

function ageFilterColorArr2(){
  return hexScaler("#551A8B","#FF0000",9)
  .slice(0,8)
  .concat(hexScaler("#FF0000","#FF6600",7))
  .slice(0,14)
  .concat(hexScaler("#FF6600","#FFFF00",7))
  .slice(0,20)
  .concat(hexScaler("#FFFF00","#FFFFFF",7))
  .concat(hexScaler("#FFFFFF","#FFFFFF",14))
  .concat(hexScaler("#FFFFFF","#FFFF00",8))
  .slice(0,48)
  .concat(hexScaler("#FFFF00","#FF6600",7))
  .slice(0,54)
  .concat(hexScaler("#FF6600","#FF0000",8))
  .slice(0,61)
  .concat(hexScaler("#FF0000","#551A8B",46));
};

function allAgesArr(){
  return Array.apply(null, Array(ageRange()[1]))
  .map(function (_, i) {
    return i+1;
  });
};

function zeroFillArr(length){
  var arr = [];
  for (i = 0; i < length; i++){
    arr.push(0);
  };
  return arr;
};


/////////////////



var populationByAge = {
  1:    3955905,
  2:    3968965,
  3:    4035833,
  4:    3970884,
  5:    4080640,
  6:    4132464,
  7:    4131828,
  8:    4099464,
  9:    4101858,
  10:   4091146,
  11:   4077417,
  12:   4101758,
  13:   4228720,
  14:   4163896,
  15:   4169853,
  16:   4137140,
  17:   4187601,
  18:   4246671,
  19:   4332315,
  20:   4407732,
  21:   4528069,
  22:   4613499,
  23:   4704965,
  24:   4565768,
  25:   4442611,
  26:   4334922,
  27:   4304223,
  28:   4365759,
  29:   4311602,
  30:   4237509,
  31:   4329883,
  32:   4240707,
  33:   4342416,
  34:   4234183,
  35:   3996996,
  36:   4018982,
  37:   3874447,
  38:   3890817,
  39:   3943336,
  40:   3826111,
  41:   3999338,
  42:   4175636,
  43:   4400166,
  44:   4290490,
  45:   4086516,
  46:   4058118,
  47:   4084439,
  48:   4253106,
  49:   4497896,
  50:   4472489,
  51:   4492789,
  52:   4479242,
  53:   4585173,
  54:   4523071,
  55:   4378466,
  56:   4402900,
  57:   4280468,
  58:   4172096,
  59:   4121432,
  60:   3892827,
  61:   3820445,
  62:   3635203,
  63:   3520715,
  64:   3463316,
  65:   3382492,
  66:   3472965,
  67:   3066297,
  68:   2540744,
  69:   2520656,
  70:   2525026,
  71:   2417105,
  72:   2106691,
  73:   1971424,
  74:   1840266,
  75:   1772048,
  76:   1648285,
  77:   1543454,
  78:   1470925,
  79:   1380806,
  80:   1252850,
  81:   1233753,
  82:   1141516,
  83:   1118198,
  84:   1010317,
  85:   933754,
  86:   858745,
  87:   760085,
  88:   677166,
  89:   601072,
  90:   502620,
  91:   421221,
  92:   358990,
  93:   278466,
  94:   202519,
  95:   159655,
  96:   116335,
  97:   82413,
  98:   58939,
  99:   41626,
  100:  41626,
  101:  41626,
  102:  41626,
  103:  41626,
  104:  41626,
  105:  41626,
  106:  41626,
  107:  41626,
};

// population for all ages 100+ = 70951
var arrestsByAge = {
  1:    0, // total arrests all ages <10 = 7,099
  2:    0,
  3:    0,
  4:    0,
  5:    0,
  6:    0,
  7:    0,
  8:    0,
  9:    0,
  10:   20208, // total arrests 10-12 60,624
  11:   20208,
  12:   20208,
  13:   107921, // total arrests 13-14 215,842
  14:   107921,
  15:   190906,
  16:   247028,
  17:   298835,
  18:   384488,
  19:   419201,
  20:   419158,
  21:   405847,
  22:   387024,
  23:   359529,
  24:   337233,
  25:   288939, // total arrests 25-29 1,444,699
  26:   288939,
  27:   288939,
  28:   288939,
  29:   288938,
  30:   227587, // total arrests 30-34 1,137,938
  31:   227587,
  32:   227587,
  33:   227586,
  34:   227586,
  35:   160652, // total arrests 35-39 803,258
  36:   160652,
  37:   160652,
  38:   160651,
  39:   160651,
  40:   145978, // total arrests 40-44 729,886
  41:   145977,
  42:   145977,
  43:   145977,
  44:   145977,
  45:   128373, // total arrests 45-49 641,864
  46:   128373,
  47:   128373,
  48:   128373,
  49:   128372,
  50:   98225, // total arrests 50-54 491,121 
  51:   98224,
  52:   98224,
  53:   98224,
  54:   98224,
  55:   52910, // total arrests 55-59 264,550 
  56:   52910,
  57:   52910,
  58:   52910,
  59:   52910,
  60:   40000, // total arrests 60-64 118,772 
  61:   40000,
  62:   30000,
  63:   27000,
  64:   23000,
  65:   0, // total arrests 65+ 81,758
  66:   0,
  67:   0,
  68:   0,
  69:   0,
  70:   0,
  71:   0,
  72:   0,
  73:   0,
  74:   0,
  75:   0,
  76:   0,
  77:   0,
  78:   0,
  79:   0,
  80:   0,
  81:   0,
  82:   0,
  83:   0,
  84:   0,
  85:   0,
  86:   0,
  87:   0,
  88:   0,
  89:   0,
  90:   0,
  91:   0,
  92:   0,
  93:   0,
  94:   0,
  95:   0,
  96:   0,
  97:   0,
  98:   0,
  99:   0,
  100:  0,
  101:  0,
  102:  0,
  103:  0,
  104:  0,
  105:  0,
  106:  0,
  107:  0,
};
