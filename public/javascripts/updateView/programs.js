var programs = {
	graph: {
		usPop: {
			none: "<p>This graph shows the top ten U.S. cities<br>in order of how many of their residents have been killed by police.</p><p><div id='down-arrow'></div></p><p>Hover over any bar on the graph<br>to see relevant information in sentence form.</p><img src='http://i.imgur.com/r6oCkvt.png' /><p>You can see that New York City and Las Vegas have by far the most deaths.<br>If it were its own city, Brooklyn would be third.</p><img src='http://i.imgur.com/bS0GMGj.png' /><p>Click on any bar on the graph,<br>and you will see an article<br>about someone who falls within that bar's demographic.</p><img src='http://i.imgur.com/rN95PvH.png' /><p>If you click the same bar again, you'll get a new article about a different person.</p><img src='http://i.imgur.com/yMPYPgl.png' /><p><div id='up-arrow'></div></p>",
			usPop: "<p>This graph shows those same top ten cities,<br>but instead of depicting their total people killed by police,<br>it depicts the cities' total people killed per one million residents.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/IA3kTOK.png' /><p>Las Vegas is clearly a massive outlier,<br>with over twice as many deaths per capita by police as any other city.</p><img src='http://i.imgur.com/xs47IJ1.png' /><p>Click on any bar,<br>and you will see an article<br>about someone who falls within that bar's demographic.</p><img src='http://i.imgur.com/b3oYx5D.png' /><p><div id='up-arrow'></div></p>",
			age: "<p>This graph shows how, in different cities,<br>the police kill people of different ages.</p><p><div id='down-arrow'></div></p><p>For each city, the dark purple area represents people<br>who fall within one standard deviation<br>of the national average victim age<br>(meaning people who were 27 to 42 years old when killed).</p><p>(image here)</p><p>The farther away you get from the dark purple area,<br>the farther away the victim's age was from the national average.<br>Very light colors on the bottom represent very young victims.<br>Very light colors on the top represent very old victims.</p><p>You can see how this changes from city to city.<br>New Orleans, Orlando, Oakland, Houston, and DC are all nationally unusual,<br>in that their police forces kill mostly young people.</p><p>The cities on the right have police forces<br>who kill an unusual proportion of older people.</p><p><div id='up-arrow'></div></p>",
			illness: "<p>This graph shows people who were killed by police while exhibiting clear signs of mental illness, by city.</p><p><div id='down-arrow'></div></p><p>In many of these cases, mental illness refers <a style='cursor:pointer' href='http://www.pasadenastarnews.com/general-news/20140218/county-approves-18-million-settlement-in-shooting-of-mentally-ill-rosemead-woman' target='_blank'>to</a> <a style='cursor:pointer' href='http://newjersey.news12.com/news/police-shoot-kill-man-during-standoff-in-south-brunswick-1.6473615' target='_blank'>either</a> <a style='cursor:pointer' href='http://thefreethoughtproject.com/cop-shoots-dead-unarmed-tased-subdued-teen-we-time-this-bang/' target='_blank'>schizophrenia</a>, or that the victim <a style='cursor:pointer' href='http://www.cbs46.com/story/19917831/teen-shot-by-police-sniper-parents-talk-only-to-cbs-atlanta-news' target='_blank'>was</a> <a style='cursor:pointer' href='https://drive.google.com/file/d/0B-l9Ys3cd80fT2hub1pENmhwSEk/edit?usp=sharing' target='_blank'>threatening</a> <a style='cursor:pointer' href='http://www.newspressnow.com/news/local_news/article_f508d924-5208-5a01-a84a-57631e99e732.html' target='_blank'>suicide</a>.</p><p>The red areas represent people who were showing signs of mental illness when they were killed by the police.  Hover over the graph for more information.</p><img src='http://i.imgur.com/bX1lqfr.png' /><p>And then click to see a randomly selected source for someone in that demographic and city.</p><a style='cursor:pointer' href='http://www.spokesman.com/stories/2010/oct/27/man-killed-by-deputy-had-been-suicidal/' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/KJ70QvH.png' /></a><a style='cursor:pointer' href='http://www.spokesman.com/stories/2011/jul/14/fatal-shots-ruled-justified/' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/T0PjQQR.png' /></a><a style='cursor:pointer' href='http://www.scribd.com/doc/218703780/Danny-Jones-Decision-Letter' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/778mvfL.png' /></a><p>In Portland, 28 people have been killed by the police*, and half of them were showing signs of mental illness.</p><img src='http://i.imgur.com/8IheAVo.png' /><p>*There are more people beyond these particular 28 who have been killed by police in Portland, but these are the only people for whom there is information on whether or not they were mentally ill.</p><p><div id='up-arrow'></div></p>"
		},
		age: {
			none: "<p>This graph shows how many people were killed by police, by age.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/OGgmMeS.png' /><p>Click on a bar to see the source for a randomly selected person of that age.  Click again to see the source for a different person of that age.</p><a style='cursor:pointer' href='http://voices.suntimes.com/news/breaking-news/male-shot-by-police-on-far-south-side/' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/E0XHyXR.png' /></a><a style='cursor:pointer' href='http://www.wset.com/story/25484112/jefferson-county-sheriffs-office-release-identity-of-birmingham-man-shot-and-killed-by-deputy' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/fgdm1B4.png' /></a><a style='cursor:pointer' href='http://www.wset.com/story/25484112/jefferson-county-sheriffs-office-release-identity-of-birmingham-man-shot-and-killed-by-deputy' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/KU9wsXB.png' /></a><p>The oldest recorded person killed by a police officer was <a href='http://www.huffingtonpost.com/2013/09/08/monroe-isadore-shootout_n_3889826.html' target='_blank'>107</a> years old.<br>The youngest <a href='http://newyork.cbslocal.com/2013/04/15/police-3-dead-in-brooklyn-shooting/' target='_blank'>have</a> <a href='http://articles.latimes.com/2005/jul/15/local/me-shooting15' target='_blank'>been</a> <a href='https://www.oxnardpd.org/pressreleases/1537/' target='_blank'>1</a>.</p><img src='http://i.imgur.com/4cfAech.png' /><p>To see how this graph is divided in terms of race or mental illness, click the buttons on right.</p><p><div id='up-arrow'></div></p>",
			race: "<p>This graph shows how many people of different races have been killed by police, for each year of age.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/GkY1nCi.png' /><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/JRaoZ76.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see the source article for a new person.</p><a style='cursor:pointer' href='http://www.nytimes.com/2009/11/23/nyregion/23shoot.html?_r=0' target='_blank'><img src='http://i.imgur.com/UlNpidf.png' /></a><p><div id='up-arrow'></div></p>",
			illness: "<p class='program-text one-line'>Age illness Graph</p><p><div id='up-arrow'></div></p>"
		},
		race: {
			none: "<p>This graph shows how many people have been killed by police, by race.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/Vo28qyh.png' /><p>Click on a bar to see the source for a randomly selected person of that race.</p><img src='http://i.imgur.com/KLzted8.png' /><p>Significantly more white people have been killed by police than any other race.  However, white people make up over 75% of the US population.  To see the data scaled by population, click 'population' on the righthand column.</p><img src='http://i.imgur.com/XaK8FrK.png' /><p><div id='up-arrow'></div></p>",
			usPop: "<p>This graph shows how many people per million have been killed by the police, by race.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/cOrM5E8.png' /><p>Accounting for racial population, black people are four times as likely to be killed by police than white people.</p><p>Click on a bar to see the source for a randomly selected person of that race.</p><a style='cursor:pointer' href='http://www.fbi.gov/neworleans/press-releases/2012/five-new-orleans-police-officers-sentenced-on-civil-rights-and-obstruction-of-justice-violations-in-the-danziger-bridge-shooting-case' target='_blank'><img src='http://i.imgur.com/7Kl5t95.png' /></a><p><div id='up-arrow'></div></p>",
			age: "<p>This graph shows the age distribution of people killed by police, by race.</p><p><div id='down-arrow'></div></p><p>The dark purple areas on the graph represent people who were between 27 and 42 years old when they were killed.<br>(27 to 42 is one total standard deviation from the national average, 34.5)</p><p>(image here)</p><p>The farther away you get from the dark purple area,<br>the farther away the victim's age was from the national average.<br>Very light colors on the left represent very young victims.<br>Very light colors on the right represent very old victims.</p><p>You can see that when police kill black people,<br>the victims tend to be much younger<br>than when the police kill white people.</p><p>(image here)</p><p>Hover over any section of the graph to see relevant information.</p><p>(image here)</p><p>Click on any section of the graph to see the source for a randomly selected person within that race and age-range.  Click again to see another sample.  I think that the best way to use this site is to find sections that you want to learn about, and click on them many times.</p><p>(image here)</p><p><div id='up-arrow'></div></p>",
			illness: "<p>This graph shows people who were killed by police while exhibiting clear signs of mental illness, by race.</p><p><div id='down-arrow'></div></p><p>In many of these cases, mental illness refers <a style='cursor:pointer' href='http://www.pasadenastarnews.com/general-news/20140218/county-approves-18-million-settlement-in-shooting-of-mentally-ill-rosemead-woman' target='_blank'>to</a> <a style='cursor:pointer' href='http://newjersey.news12.com/news/police-shoot-kill-man-during-standoff-in-south-brunswick-1.6473615' target='_blank'>either</a> <a style='cursor:pointer' href='http://thefreethoughtproject.com/cop-shoots-dead-unarmed-tased-subdued-teen-we-time-this-bang/' target='_blank'>schizophrenia</a>, or that the victim <a style='cursor:pointer' href='http://www.cbs46.com/story/19917831/teen-shot-by-police-sniper-parents-talk-only-to-cbs-atlanta-news' target='_blank'>was</a> <a style='cursor:pointer' href='https://drive.google.com/file/d/0B-l9Ys3cd80fT2hub1pENmhwSEk/edit?usp=sharing' target='_blank'>threatening</a> <a style='cursor:pointer' href='http://www.newspressnow.com/news/local_news/article_f508d924-5208-5a01-a84a-57631e99e732.html' target='_blank'>suicide</a>.</p><p>The red areas represent people who were showing signs of mental illness when they were killed by the police.  Hover over the graph for more information.</p><img src='http://i.imgur.com/p3eFe7h.png' /><p>Click on any part of the graph to see the source for a randomly selected person who falls within that part of the graph. Clicking multiple times will produce new sources.<br>Three example sources for asian people who showed signs of mental illness before being killed, click to read the articles:</p><a style='cursor:pointer' href='http://www.nbcwashington.com/news/local/Deputy-Shot-at-Costco-in-Sterling-209389621.html' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/T9d5inq.png' /></a><a style='cursor:pointer' href='http://www.sfgate.com/bayarea/article/SAN-JOSE-1-8-million-settlement-in-killing-by-2558796.php' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/QTy7HLE.png' /></a><a style='cursor:pointer' href='http://sacramento.cbslocal.com/2014/05/05/911-call-released-in-lodi-police-shooting-of-gulf-war-veteran/' target='_blank'><img style='width:30%;margin-right:2%;display:inline-block' src='http://i.imgur.com/r92q3w5.png' /></a><p><div id='up-arrow'></div></p>"
		},
		shots: {
			none: "<p>This graph shows how many people<br>have been killed by police,<br>sorted by how many shots the police fired.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/eRhGiHh.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see the source article for a new person.</p><a style='cursor:pointer' href='http://en.wikipedia.org/wiki/Tyisha_Miller' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/oWbc32y.png' /></a><a style='cursor:pointer' href='http://en.wikipedia.org/wiki/Jose_Guerena_shooting' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/3rGAbbO.png' /></a><p>Most reports of people killed by police don't include how many shots were fired.<br>But of the 502 reports that do include that information,<br>74 of them report ten shots or more.<br>That's ten shots or more in 14.7% of all reported cases.</p><p><div id='up-arrow'></div></p>",
			race: "<p>This graph shows how many people of different races have been killed by police,<br>sorted by how many shots the police fired.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/vhSMmlW.png' /><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/oZl0w6R.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see the source article for a new person.</p><a style='cursor:pointer' href='http://www.dailynews.com/general-news/20130207/police-confuse-truck-for-christopher-dorners-shoot-at-3-people-in-torrance-in-case-of-mistaken-identity' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/OMrfb6k.png' /></a><a style='cursor:pointer' href='http://en.wikipedia.org/wiki/Shooting_of_Amadou_Diallo' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/DGbR6zB.png' /></a><p>Most reports of people killed by police don't include how many shots were fired.<br>But of the 502 reports that do include that information,<br>74 of them report ten shots or more.<br>That's ten shots or more in 14.7% of all reported cases.</p><p><div id='up-arrow'></div></p>",
			unarmed: "<p>This graph shows how many armed and unarmed people<br>have been killed by police,<br>sorted by how many shots the police fired.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/c0Rg69b.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see the source article for a new person.</p><a style='cursor:pointer' href='http://www.dallasnews.com/news/community-news/garland-mesquite/headlines/20120911-garland-police-say-officer-fired-as-many-as-41-shots-at-apparently-unarmed-man-before-he-died.ece' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/PEvNaDr.png' /></a><a style='cursor:pointer' href='http://articles.latimes.com/2013/apr/04/local/la-me--water-nozzle-verdict-20130405' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/zTg0OS0.png' /></a><p>Whether the victim was armed or not, the average number of shots fired<br>by police remains about the same:  between 5.5 and 6.2 shots.</p><p><div id='up-arrow'></div></p>"
		},
		illness: {
			none: "<p>This graph shows how many people have been killed by police,<br>sorted by whether or not they showed clear symptoms of mental illness.</p><p><div id='down-arrow'></div></p><p>Hover over the graph to see relevant information in sentence form.</p><img src='http://i.imgur.com/slqSqxi.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see a new source.</p><a style='cursor:pointer' href='http://www.nydailynews.com/new-york/relatives-rip-cops-long-island-mans-dies-taser-gun-incident-article-1.143085' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/yEofvgy.png' /></a><a style='cursor:pointer' href='http://www.sacbee.com/news/local/crime/article2606996.html' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/UX6PvBF.png' /></a><p>In many of these cases, mental illness refers <a style='cursor:pointer' href='http://www.pasadenastarnews.com/general-news/20140218/county-approves-18-million-settlement-in-shooting-of-mentally-ill-rosemead-woman' target='_blank'>to</a> <a style='cursor:pointer' href='http://newjersey.news12.com/news/police-shoot-kill-man-during-standoff-in-south-brunswick-1.6473615' target='_blank'>either</a> <a style='cursor:pointer' href='http://thefreethoughtproject.com/cop-shoots-dead-unarmed-tased-subdued-teen-we-time-this-bang/' target='_blank'>schizophrenia</a>, or that the victim <a style='cursor:pointer' href='http://www.cbs46.com/story/19917831/teen-shot-by-police-sniper-parents-talk-only-to-cbs-atlanta-news' target='_blank'>was</a> <a style='cursor:pointer' href='https://drive.google.com/file/d/0B-l9Ys3cd80fT2hub1pENmhwSEk/edit?usp=sharing' target='_blank'>threatening</a> <a style='cursor:pointer' href='http://www.newspressnow.com/news/local_news/article_f508d924-5208-5a01-a84a-57631e99e732.html' target='_blank'>suicide</a>.</p><p>Victims of police shootings were exhibiting clear signs of mental illness<br>in over 25% of recorded cases.</p><p><div id='up-arrow'></div></p>",
			age: "<p>This graph shows the age distribution of people killed by police,<br>sorted by whether they showed clear symptoms of mental illness.</p><p><div id='down-arrow'></div></p><p>The dark purple areas on the graph represent people who were between 27 and 42 years old when they were killed.<br>(27 to 42 is one total standard deviation from the national average, 34.5)</p><p>(image here)</p><p>The farther away you get from the dark purple area,<br>the farther away the victim's age was from the national average.<br>Very light colors on the left represent very young victims.<br>Very light colors on the right represent very old victims.</p><p>You can see that when police kill black people,<br>the victims tend to be much younger<br>than when the police kill white people.</p><p>(image here)</p><p>Hover over any section of the graph to see relevant information.</p><p>(image here)</p><p>Click on any section of the graph to see the source for a randomly selected person within that race and age-range.  Click again to see another sample.  I think that the best way to use this site is to find sections that you want to learn about, and click on them many times.</p><p>(image here)</p><p>People killed by police while showing clear signs of mental illness<br>tend to be older than people with no signs of mental illness.<br>The average age of a victim with no signs of illness is 33.4 years old.<br>For those victims with mental illness, the average age is 38.5 years old.</p><p><div id='up-arrow'></div></p>",
			race: "<p>This graph shows how many people of different races have been killed by police,<br>sorted by whether they showed clear symptoms of mental illness.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/DAOVUnw.png' /><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/6RevQ0L.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see the source article for a new person.</p><a style='cursor:pointer' href='http://www.dailynews.com/general-news/20130207/police-confuse-truck-for-christopher-dorners-shoot-at-3-people-in-torrance-in-case-of-mistaken-identity' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/OMrfb6k.png' /></a><a style='cursor:pointer' href='http://en.wikipedia.org/wiki/Shooting_of_Amadou_Diallo' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/DGbR6zB.png' /></a><p>White and asian people who are killed by the police<br>are the victims most likely to have been mentally ill.<br>Over 30% of white and asian people killed by police<br>showed clear signs of mental illness.</p><p><div id='up-arrow'></div></p>"
		},
		gender: {},
		unarmed: {
			none: "<p>This graph shows how many armed and unarmed people<br>have been killed by police.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/FE4nttB.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who belongs to the area that you clicked.<br>Click again to see the source article for a new person.</p><a style='cursor:pointer' href='http://www.kesq.com/kesq/Police-shoot-and-kill-Indio-man-details-of-shooting-still-a-mystery/18561016' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/K8QX3gT.png' /></a><a style='cursor:pointer' href='http://fingerlakesdailynews.com/news/details.cfm?clientid=16&id=32812#.VLMeBGTF8Ye' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/owCrm4S.png' /></a><p>You can see that in over 20% of all recorded instances,<br>when the police killed somebody,<br>the victim was unarmed.</p><p><div id='up-arrow'></div></p>",
			shots: "<p>This graph shows how many armed and unarmed people<br>have been killed by police,<br>and how many shots the police fired.</p><p><div id='down-arrow'></div></p><p>Hover over any bar to see relevant information in sentence form.</p><img src='http://i.imgur.com/iG4PtIW.png' /><p>Click anywhere on the graph to see the source article<br>for a randomly selected person who fits into the area that you clicked.<br>Click again to see a new, random person who fits in that area.</p><a style='cursor:pointer' href='http://www.myfoxphilly.com/story/25316597/police-involved-shooting' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/ptKnd7A.png' /></a><a style='cursor:pointer' href='http://www.timesunion.com/local/article/Video-relays-deadly-day-4375146.php' target='_blank'><img style='width:45%;margin-right:2%;display:inline-block' src='http://i.imgur.com/nY0JqhM.png' /></a><p class='program-text three-line'>Nineteen times on record,<br>the police have killed someone by firing at least ten shots,<br>and the victim was unarmed.</p><p><div id='up-arrow'></div></p>"
		}
	},
	map: {
		usPop: {
			none: "<p>Every dot on this map represents a person who was killed by police.</p><p><div id='down-arrow'></div></p><p>You can click on a dot to learn more about that person.</p><img src='http://i.imgur.com/A9aRIgN.png' /><p>Once you've clicked a dot,<br>then clicking on the blue 'source' link<br>will lead to an article about that person.<p><a style='cursor:pointer' href='http://www.dcclothesline.com/2014/05/19/veteran-stopped-front-license-plate-beat-death-5-cops/' target='_blank'><img src='http://i.imgur.com/sg6atKn.png' /><p><div id='up-arrow'></div></p></a>",
		},
		age: {},
		race: {},
		shots: {},
		illness: {},
		gender: {},
		unarmed: {
			none: "<p>Every pink dot on the map represents someone who was killed by the police,<br>while unarmed.</p><p><div id='down-arrow'></div></p><p>Click the checkboxes on the left<br>to change what appears on the map.</p><img style='width:15%;margin-right:2%;display:inline-block' src='http://i.imgur.com/KEN2g2g.png' /><img style='width:15%;display:inline-block' src='http://i.imgur.com/Ids8ZrD.png' /><br /><img style='width:60%;margin-top:-3%;' src='http://i.imgur.com/hHYZUVg.png' /><p>Adjust the State dropdown menu on the left<br>to see people only in a particular state.<br>To see people killed while unarmed in California:</p><img style='width:15%;margin-right:2%;display:inline-block' src='http://i.imgur.com/dOQZ9qc.png' /><img style='width:15%;display:inline-block' src='http://i.imgur.com/ZRIeQKo.png' /><br /><img style='width:60%;margin-top:-3%;' src='http://i.imgur.com/xfTgFbk.png' /><p>Click on a dot to learn about that person<br>and see a link to their source article.</p><a style='cursor:pointer' href='http://www.dailynews.com/general-news/20130207/police-confuse-truck-for-christopher-dorners-shoot-at-3-people-in-torrance-in-case-of-mistaken-identity' target='_blank'><img style='width:70%;' src='http://i.imgur.com/M0tOnbE.png' /></a><a style='cursor:pointer' href='http://latimesblogs.latimes.com/lanow/2013/01/sheriff-deputies-shot-man-in-back-autopsy-report.html' target='_blank'><img style='width:70%;' src='http://i.imgur.com/FofuSIW.png' /></a><a style='cursor:pointer' href='http://latimesblogs.latimes.com/lanow/2011/09/activists-long-beach-police-killings.html' target='_blank'><img style='width:70%;' src='http://i.imgur.com/LQCRaNg.png' /></a><br /><button class='top'>Top</button>",
		}
	},
	heatmap: {
		usPop: {},
		age: {},
		race: {},
		shots: {},
		illness: {},
		gender: {},
		unarmed: {}
	},
};
