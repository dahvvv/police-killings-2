var timeouts = [];

// function nextPage(context){
// 	debugger;
// 	stopRotatingImages();
// 	var pageNum = parseInt($('.pagenum').attr('id'));
// 	var newPage = pages[pageNum + 1];
// 	$('#page-container').html(newPage);
// 	if (pageNum === 1){
// 		$("#back-button").show();
// 	};
// 	if ($(".about-img").length > 0){
// 		var length = $(".about-img").length;
// 		var i = 0;
// 		var timeouts = [];
// 		rotateImages(i, length);
// 	};
// };

function newPage(id){
	// stopRotatingImages();
	var pageNum = parseInt($(".pagenum").attr("id"));
	if (id === "forward-button"){
		var newPage = pages[pageNum + 1];
		if (pageNum === 1){ $("#back-button").show(); };
	} else {
		var newPage = pages[pageNum - 1];
		if (pageNum === 2){ $("#back-button").hide(); };
	};
	$('#page-container').html(newPage);
	if ($(".about-img").length > 0){
		var length = $(".about-img").length;
		var i = 0;
		var timeouts = [];
		rotateImages(i, length);
	};
};

// function prevPage(){
// 	var pageNum = parseInt($('.pagenum').attr('id'));
// 	var newPage = pages[pageNum - 1];
// 	$('#page-container').html(newPage);
// 	if (newPage === 1){
// 		$("#back-button").hide();
// 	};
// 	if ($(".about-img").length > 0){
// 		stopRotatingImages();
// 		var length = $(".about-img").length;
// 		var i = 0;
// 		var timeouts = [];
// 		rotateImages(i, length);
// 	};
// };

function rotateImages(i, length){
	timeouts.push(setTimeout(function(){
		if (timeouts.length > 0){
			console.log('1000 chilled/being');
			$($(".about-img")[i % length]).fadeOut(500, function(){
				if (timeouts.length > 0){
					console.log('500 faded out');
					$($(".about-img")[(i + 1) % length]).fadeIn(1500, function(){
						if (timeouts.length > 0){
							console.log('1500 faded in');
							i += 1;
						 	rotateImages(i, length); 
						};
					});
				};
			});
		};
	}, 1000))
};

function stopRotatingImages(id, callback){
	for (var i = 0; i < timeouts.length; i++){
		clearTimeout(timeouts[i]);
	};
	timeouts = [];
	setTimeout(function(){
		callback(id);
	}, 20);
};

var pages = {
	1: "<p class='about-graf' id='graf1'>There is <a href='http://www.wsj.com/articles/hundreds-of-police-killings-are-uncounted-in-federal-statistics-1417577504' target='_blank'>no</a> <a href='http://www.washingtonpost.com/news/post-nation/wp/2014/09/08/how-many-police-shootings-a-year-no-one-knows/' target='_blank'>official</a> <a href='http://www.politifact.com/truth-o-meter/statements/2014/dec/03/marc-morial/are-deaths-police-shootings-highest-20-years/' target='_blank'>record</a> kept of people killed by the United States police.</p><p class='about-graf' id='graf2'>Data on police shootings would be beneficial to police and citizens alike, and there is movement to <a href='http://mic.com/articles/106392/congress-just-passed-a-bill-addressing-police-killings-while-no-one-was-looking' target='_blank'>require</a> it, but an official database remains a long way off.</p><div class='pagenum' id='1'>1/20</div>",
	2: "<p class='about-graf' id='graf1'>Over the past five years, several individuals have begun to collect the data themselves.</p><p class='about-graf' id='graf2'>Non-government databases such as <a href='http://www.fatalencounters.org/'>Fatal Encounters</a> and <a href='http://regressing.deadspin.com/were-compiling-every-police-involved-shooting-in-americ-1624180387'>U.S. Police Shootings</a> have slowly been compiling a national record of deaths at the hands by police officers.</p><div class='pagenum' id='2'>2/20</div>",
	3: "<p class='about-graf' id='graf1'>For this project, I am using Fatal Encounters and US Police Shootings as my data source.</p><p class='about-graf' id='graf2'>I have combined their information into one database.  My goal is to begin to analyze it, and to make it easier for others to do the same.</p><div class='pagenum' id='3'>3/20</div>",
	4: "<p class='about-graf' id='graf1'>Clicking on the buttons in the middle of the screen will change the display style.</p><img class='about-img' src='http://i.imgur.com/f1GeAwv.png'><img class='about-img' style='display:none' src='http://i.imgur.com/juQSRiy.png'><img class='about-img' style='display:none' src='http://i.imgur.com/9fVyHhf.png'><div class='pagenum' id='4'>4/20</div>",
	5: "<p class='about-graf' id='graf1'>Clicking on the buttons in the left-hand column will provide new information.</p><img class='about-img' src='http://i.imgur.com/ZPZLO3m.png'><img class='about-img' style='display:none' src='http://i.imgur.com/pb7hMwg.png'><img class='about-img' style='display:none' src='http://i.imgur.com/3qNjVXw.png'><div class='pagenum' id='5'>5/20</div>",
	6: "<p class='about-graf' id='graf1'>Clicking on the buttons in the right-hand column will filter or organize the information.</p><img class='about-img' src='http://i.imgur.com/DanebI3.png'><img class='about-img' style='display:none' src='http://i.imgur.com/r1fWqQM.png'><img class='about-img' style='display:none' src='http://i.imgur.com/AczjIZi.png'><div class='pagenum' id='6'>6/20</div>",
	7: "<p class='about-graf' id='graf1'>Hovering over different sections of a graph will show information on that section.</p><img class='about-img' src='http://i.imgur.com/3JCQiHx.png'><img class='about-img' style='display:none' src='http://i.imgur.com/X52pcht.png'><img class='about-img' style='display:none' src='http://i.imgur.com/Iloxxgn.png'><img class='about-img' style='display:none' src='http://i.imgur.com/2CwAu9N.png'><div class='pagenum' id='7'>7/20</div>",
};
