function nextPage(){
	var pageNum = parseInt($('.pagenum').attr('id'));
	var newPage = pages[pageNum + 1];
	$('#page-container').html(newPage);
	if (pageNum === 1){
		$("#back-button").show();
	};
};

function prevPage(){
	var pageNum = parseInt($('.pagenum').attr('id'));
	var newPage = pages[pageNum - 1];
	$('#page-container').html(newPage);
	if (newPage === 1){
		$("#back-button").hide();
	};
};

var pages = {
	1: "<p class='about-graf' id='graf1'>There is <a href='http://www.wsj.com/articles/hundreds-of-police-killings-are-uncounted-in-federal-statistics-1417577504' target='_blank'>no</a> <a href='http://www.washingtonpost.com/news/post-nation/wp/2014/09/08/how-many-police-shootings-a-year-no-one-knows/' target='_blank'>official</a> <a href='http://www.politifact.com/truth-o-meter/statements/2014/dec/03/marc-morial/are-deaths-police-shootings-highest-20-years/' target='_blank'>record</a> kept of people killed by the United States police.</p><p class='about-graf' id='graf2'>Data on police shootings could be helpful to police and citizens alike, and there is movement to <a href='http://mic.com/articles/106392/congress-just-passed-a-bill-addressing-police-killings-while-no-one-was-looking' target='_blank'>require</a> it, but an official database remains a long way off.</p><div class='pagenum' id='1'>1/20</div>",
	2: "<p class='about-graf' id='graf1'>Over the past five years, several individuals have begun to collect the information themselves.</p><p class='about-graf' id='graf2'>Databases such as <a href='http://www.fatalencounters.org/'>Fatal Encounters</a> and <a href='http://regressing.deadspin.com/were-compiling-every-police-involved-shooting-in-americ-1624180387'>U.S. Police Shootings</a> have been assembling a national record of deaths by police, out of court reports and local newspapers.</p><div class='pagenum' id='2'>2/20</div>",
	3: "<p class='about-graf' id='graf1'>This project aims to aggregate this information, begin to analyze it, and provide a means for others to do the same.</p><div class='pagenum' id='3'>3/20</div>",
	4: '<img class="about-photo" src="http://imgur.com/Ll7HZSd.png"><p class="about-graf" id="graf1">This project aims to aggregate this information, begin to analyze it, and provide a means for others to do the same.</p><div class="pagenum" id="4">4/20</div>'
};

