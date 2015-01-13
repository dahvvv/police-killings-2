function nextPage(){
	var pageNum = parseInt($('.pagenum').attr('id'));
	var newPage = pages[pageNum + 1];
	$('#page-container').html(newPage);
	if (pageNum === 1){
		$("#back-button").show();
	};
	rotateImages();
};

function prevPage(){
	var pageNum = parseInt($('.pagenum').attr('id'));
	var newPage = pages[pageNum - 1];
	$('#page-container').html(newPage);
	if (newPage === 1){
		$("#back-button").hide();
	};
};

function rotateImages(){
	var pageNum = parseInt($('.pagenum').attr('id'));	
	if ($(".about-img").length != 0){
		var length = $(".about-img").length;
		var i = 0;
		setInterval(function(){
			$($(".about-img")[i % length]).fadeOut(500, function(){
				$($(".about-img")[(i + 1) % length]).fadeIn(2000, function(){
					i += 1;
				});
			});
		}, 1000);
	};
};

var pages = {
	1: "<p class='about-graf' id='graf1'>There is <a href='http://www.wsj.com/articles/hundreds-of-police-killings-are-uncounted-in-federal-statistics-1417577504' target='_blank'>no</a> <a href='http://www.washingtonpost.com/news/post-nation/wp/2014/09/08/how-many-police-shootings-a-year-no-one-knows/' target='_blank'>official</a> <a href='http://www.politifact.com/truth-o-meter/statements/2014/dec/03/marc-morial/are-deaths-police-shootings-highest-20-years/' target='_blank'>record</a> kept of people killed by the United States police.</p><p class='about-graf' id='graf2'>Data on police shootings would be beneficial to police and citizens alike, and there is movement to <a href='http://mic.com/articles/106392/congress-just-passed-a-bill-addressing-police-killings-while-no-one-was-looking' target='_blank'>require</a> it, but an official database remains a long way off.</p><div class='pagenum' id='1'>1/20</div>",
	2: "<p class='about-graf' id='graf1'>Over the past five years, several individuals have begun to collect the data themselves.</p><p class='about-graf' id='graf2'>Non-government databases such as <a href='http://www.fatalencounters.org/'>Fatal Encounters</a> and <a href='http://regressing.deadspin.com/were-compiling-every-police-involved-shooting-in-americ-1624180387'>U.S. Police Shootings</a> have slowly been assembling a national record of deaths caused by police officers.</p><div class='pagenum' id='2'>2/20</div>",
	3: "<p class='about-graf' id='graf1'>For this project, I am using Fatal Encounters and US Police Shootings as my data source.</p><p class='about-graf' id='graf2'>I have combined their information into one database.  My goal is to begin to analyze it, and to make it easier for others to do the same.</p><div class='pagenum' id='3'>3/20</div>",
	4: "<p class='about-graf' id='graf1'>Clicking on the three buttons in the middle of the screen will change the information display.</p><img class='about-img' src='http://i.imgur.com/f1GeAwv.png'><img class='about-img' style='display:none' src='http://i.imgur.com/juQSRiy.png'><img class='about-img' style='display:none' src='http://i.imgur.com/9fVyHhf.png'><div class='pagenum' id='4'>4/20</div>"
};
