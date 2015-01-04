function updateGraphFilterGender(choosers){
	readyWeightsToBeShown();
	$('#unarmed-weight, #illness-weight').css({'display':'block'});
	var checkedBoxes = $('#gender-selection').children('input:checked');
  var checkedGenders = $(checkedBoxes).map(function(){
    return this.name;
  })
  .get();
	if (choosers.weight === "none"){
		updateGraphFilterGenderWeightNone(checkedGenders);
	} else if (choosers.weight === "unarmed"){
		updateGraphFilterGenderWeightUnarmed(checkedGenders);
	} else if (choosers.weight === "illness"){
		updateGraphFilterGenderWeightIllness(checkedGenders);
	}
};

function updateGraphFilterGenderWeightNone(checkedGenders){
  var data = dataFilterGenderWeightNone(checkedGenders);
  var graphInfo = infoGraphFilterGenderWeightNone();
  var graphStyle = styleGraphFilterGenderWeightNone();
  makeGraph(graphInfo, graphStyle);
  var program = "<p class='program-text two-line'>92.5% of people killed by police are male.<br>7.5% of people killed by police are female.</p>";
  $('#program').html(program);
};

function updateGraphFilterGenderWeightUnarmed(checkedGenders){
  var data = dataFilterGenderWeightUnarmed(checkedGenders);
  var graphInfo = infoGraphFilterGenderWeightUnarmed();
  var graphStyle = styleGraphFilterGenderWeightUnarmed();
  makeGraph(graphInfo, graphStyle);
  var program = "<p class='program-text two-line'>21% of men killed by police were unarmed.<br>37% of women killed by police were unarmed.</p>";
  $('#program').html(program);
};

function updateGraphFilterGenderWeightIllness(checkedGenders){
  var data = dataFilterGenderWeightIllness(checkedGenders);
  var graphInfo = infoGraphFilterGenderWeightIllness();
  var graphStyle = styleGraphFilterGenderWeightIllness();
  makeGraph(graphInfo, graphStyle);
  var program = "<p class='program-text two-line'>21% of men killed by police were exhibiting signs of mental illness.<br>28% of women killed by police were exhibiting signs of mental illness.</p>";
  $('#program').html(program);
};
