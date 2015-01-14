function updatePage(id){
	$(".about-img").stop(true);
	var oldPageNum = pageNum();
	if (id === "forward-button"){
		var newPage = pages[oldPageNum + 1];
		if (oldPageNum === 1){ $("#back-button").show(); };
		if (oldPageNum === 10){ $("#forward-button").hide(); };
	} else {
		var newPage = pages[oldPageNum - 1];
		if (oldPageNum === 2){ $("#back-button").hide(); };
		if (oldPageNum === 11){ $("#forward-button").show(); };
	};
	$('#page-container').html(newPage);
	if ($(".about-img").length > 0){
		var length = $(".about-img").length;
		var i = 0;
		rotateImages(length, i);
	};
};

function rotateImages(length, i){
	$($(".about-img")[i % length]).animate({"border-radius":"6px"}, (length * 400), function(){
		$($(".about-img")[i % length]).fadeOut(800, function(){
			i += 1;
			$($(".about-img")[i % length]).fadeIn(1500, function(){
				$($(".about-img")[i % length]).animate({"border-radius":"6px"}, (length * 400), function(){
					rotateImages(length, i);
				});
			});
		});
	});
};

function pageNum(){
	return parseInt($(".pagenum").attr("id"));
};

var pages = {
	1: "<p class='about-graf' id='graf1'>There is <a href='http://www.wsj.com/articles/hundreds-of-police-killings-are-uncounted-in-federal-statistics-1417577504' target='_blank'>no</a> <a href='http://www.washingtonpost.com/news/post-nation/wp/2014/09/08/how-many-police-shootings-a-year-no-one-knows/' target='_blank'>official</a> <a href='http://www.politifact.com/truth-o-meter/statements/2014/dec/03/marc-morial/are-deaths-police-shootings-highest-20-years/' target='_blank'>record</a> kept of people killed by the United States police.</p><p class='about-graf' id='graf2'>Data on police shootings would be beneficial to police and citizens alike, and there is movement to <a href='http://mic.com/articles/106392/congress-just-passed-a-bill-addressing-police-killings-while-no-one-was-looking' target='_blank'>require</a> it, but an official database remains a long way off.</p><div class='pagenum' id='1'>1/11</div>",
	2: "<p class='about-graf' id='graf1'>Over the past five years, several individuals have begun to gather the data themselves.</p><p class='about-graf' id='graf2'>Databases such as <a href='http://www.fatalencounters.org/' target='_blank'>Fatal Encounters</a> and <a href='http://regressing.deadspin.com/were-compiling-every-police-involved-shooting-in-americ-1624180387' target='_blank'>U.S. Police Shootings</a> have slowly been compiling a national information archive on deaths by police, gathered from local news stories, police reports, and court documents.</p><div class='pagenum' id='2'>2/11</div>",
	3: "<p class='about-graf' id='graf1'>For this project, I used <a href='http://www.fatalencounters.org/' target='_blank'>Fatal Encounters</a> and <a href='http://regressing.deadspin.com/were-compiling-every-police-involved-shooting-in-americ-1624180387' target='_blank'>US Police Shootings</a> as my data set.</p><p class='about-graf' id='graf2'>I combined their respective information into one database.  My goal was to begin to analyze the data, and to make it easier for others to do the same.</p><div class='pagenum' id='3'>3/11</div>",
	4: "<p class='about-graf' id='graf1'>Clicking on the buttons in the middle of the screen will change the style of the display.</p><img class='about-img' src='http://i.imgur.com/f1GeAwv.png'><img class='about-img' style='display:none' src='http://i.imgur.com/juQSRiy.png'><img class='about-img' style='display:none' src='http://i.imgur.com/9fVyHhf.png'><div class='pagenum' id='4'>4/11</div>",
	5: "<p class='about-graf' id='graf1'>Clicking on the buttons in the left-hand column will provide the display with new information.</p><img class='about-img' src='http://i.imgur.com/ZPZLO3m.png'><img class='about-img' style='display:none' src='http://i.imgur.com/pb7hMwg.png'><img class='about-img' style='display:none' src='http://i.imgur.com/3qNjVXw.png'><div class='pagenum' id='5'>5/11</div>",
	6: "<p class='about-graf' id='graf1'>Clicking on the buttons in the right-hand column will filter or organize the display's information.</p><img class='about-img' src='http://i.imgur.com/DanebI3.png'><img class='about-img' style='display:none' src='http://i.imgur.com/r1fWqQM.png'><img class='about-img' style='display:none' src='http://i.imgur.com/AczjIZi.png'><div class='pagenum' id='6'>6/11</div>",
	7: "<p class='about-graf' id='graf1'>Hovering over any section of a graph will show information about that section.</p><img class='about-img' src='http://i.imgur.com/gWdk1kY.png'><img class='about-img' style='display:none' src='http://i.imgur.com/vWvP4gk.png'><img class='about-img' style='display:none' src='http://i.imgur.com/Rcis1w5.png'><img class='about-img' style='display:none' src='http://i.imgur.com/iyrn6hB.png'><div class='pagenum' id='7'>7/11</div>",
	8: "<p class='about-graf' id='graf1'>Once you hover over a section of a graph, clicking on it will open an article about a person who fits the criteria for that section.  Clicking the same section again will open a new article about a different person who also fits those criteria.</p><p class='about-graf' id='graf2'>One of the best ways to use this site is to click on the same section of a graph many times.</p><div class='pagenum' id='8'>8/11</div>",
	9: "<p class='about-graf' id='graf1'>Clicking a dot on a map will open a popup, which contains personal information and a source link.</p><img class='about-img' src='http://i.imgur.com/L23wbRC.png'><img class='about-img' style='display:none' src='http://i.imgur.com/vRCKOWr.png'><img class='about-img' style='display:none' src='http://i.imgur.com/VWCBp2k.png'><img class='about-img' style='display:none' src='http://i.imgur.com/h7xZBlD.png'><div class='pagenum' id='9'>9/11</div>",
	10: "<p class='about-graf' id='graf1'>Some buttons will display a form when clicked.  Fill out the forms to change the map.</p><img class='about-img' src='http://i.imgur.com/RD7Do2v.png'><img class='about-img' style='display:none' src='http://i.imgur.com/pPY0n2j.png'><div class='pagenum' id='10'>10/11</div>",
	11: "<p class='about-graf' id='graf1'>There is a black, downward-pointing triangle at the bottom of most pages.  When you see it, scroll down.</p><p class='about-graf' id='graf2'>If you have any questions or suggestions regarding this project, or would like to use it in some way, please <a href='mailto:davidjosephkoenig@gmail.com' target='_blank'>get in touch</a>.</p><div class='pagenum' id='11'>11/11</div>"
};
