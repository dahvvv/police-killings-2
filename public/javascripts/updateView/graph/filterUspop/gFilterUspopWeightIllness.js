function updateGraphFilterUspopWeightIllness(){
	var labels = labelsGraphFilterUspopWeightAge();
	labels = dataGraphFilterUspopWeightAge(labels);
	var data = labelsToData(labels);
	var style = styleGraphFilterUspopWeightAge;
	createGraph(data, style);
	var program = "<p class='program-text four-line'>Purple represents victim ages within the national standard deviation.<br>The five cities on the left have exceptionally young victims.<br>The five cities on the right have exceptionally old victims.<br>Hover and click on the graphs for more information.</p>";
	$('#program').html(program);
};