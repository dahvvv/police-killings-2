function nextPage(){
	var pageNum = parseInt($('.pagenum').attr('id'));
	var newPage = pages[pageNum + 1];
	$('#page-container').html(newPage);
};

function prevPage(){
	var pageNum = parseInt($('.pagenum').attr('id'));
	var newPage = pages[pageNum - 1];
	$('#page-container').html(newPage);
};

var pages = {
	1: "<p>As of 2014, there is no official data regarding when, where, and how often United States police officers kill civilians.</p><p>There is movement to <a href='http://mic.com/articles/106392/congress-just-passed-a-bill-addressing-police-killings-while-no-one-was-looking'>reform</a> this, but reliable public records remain a long way away.</p><div class='pagenum' id='1'>1/20</div>",
	2: "<p>Over the past five years, several people have begun to collect the data themselves.<br/><br/>Databases such as Fatal Encounters and the U.S. Police Shootings Database aim to provide </p><div class='pagenum' id='2'>2/20</div>",
	3: "<p>This project is an attempt to take this never-before-assembled information and analyze it, and provide the means for others to do the same.</p><p>My data comes from <a href='http://www.fatalencounters.org/why-fe-exists2/'>Fatal Encounters</a> and the <a href='http://regressing.deadspin.com/were-compiling-every-police-involved-shooting-in-americ-1624180387'>U.S. Police Shootings Database</a> (see more detail here).<div class='pagenum' id='3'>3/20</div>", 
};

