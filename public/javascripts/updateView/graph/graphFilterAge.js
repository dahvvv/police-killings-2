function updateGraphFilterAge(choosers){
	readyWeightsToBeShown();
	$('#usPop-weight, #arrests-weight, #race-weight, #illness-weight').css({'display':'block'});
	if (choosers.weight === "none"){
		updateGraphFilterAgeWeightNone();
	} else if (choosers.weight === "usPop"){
		updateGraphFilterAgeWeightUspop();
	} else if (choosers.weight === "arrests"){
		updateGraphFilterAgeWeightArrests();
	} else if (choosers.weight === "race"){
		updateGraphFilterAgeWeightRace();
	} else if (choosers.weight === "illness"){
		updateGraphFilterAgeWeightIllness();
	}
};

function updateGraphFilterAgeWeightNone(){
	var data = filterAgeNotNil();
	var graphInfo = infoGraphFilterAgeWeightNone();
	var graphStyle = styleGraphFilterAgeWeightNone();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text two-line'>The oldest recorded person killed by a police officer was <a href='http://www.huffingtonpost.com/2013/09/08/monroe-isadore-shootout_n_3889826.html' target='_blank'>107</a> years old.<br>The youngest <a href='http://newyork.cbslocal.com/2013/04/15/police-3-dead-in-brooklyn-shooting/' target='_blank'>have</a> <a href='http://articles.latimes.com/2005/jul/15/local/me-shooting15' target='_blank'>been</a> <a href='https://www.oxnardpd.org/pressreleases/1537/' target='_blank'>1</a>.</p>";
	$('#program').html(program);
};

function updateGraphFilterAgeWeightUspop(){
	var data = filterAgeNotNil();
	var graphInfo = infoGraphFilterAgeWeightUspop();
	var graphStyle = styleGraphFilterAgeWeightUspop();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Age Population Graph</p>";
	$('#program').html(program);
};

function updateGraphFilterAgeWeightArrests(){
	var data = filterAgeNotNil();
	var graphInfo = infoGraphFilterAgeWeightArrests();
	var graphStyle = styleGraphFilterAgeWeightArrests();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Age arrests Graph</p>";
	$('#program').html(program);
};

function updateGraphFilterAgeWeightRace(){
	var data = filterAgeNotNil();
	var graphInfo = infoGraphFilterAgeWeightRace();
	var graphStyle = styleGraphFilterAgeWeightRace();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Age race Graph</p>";
	$('#program').html(program);
};

function updateGraphFilterAgeWeightIllness(){
	var data = filterAgeNotNil();
	var graphInfo = infoGraphFilterAgeWeightIllness();
	var graphStyle = styleGraphFilterAgeWeightIllness();
	makeGraph(graphInfo, graphStyle);
	var program = "<p class='program-text one-line'>Age illness Graph</p>";
	$('#program').html(program);
};
