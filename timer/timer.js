// JavaScript Document

var Am = "28.02.2017";
var Um = "23:59:00";
var Wochentag = new Array ("So",
							"Mo",
							"Di",
							"Mi",
							"Do",
							"Fr",
							"Sa");


Zieldatum = new Date(
					eval(Am.substring(6, 10)), 
					eval(Am.substring(3, 5)-1), 
					eval(Am.substring(0, 2)),
					eval(Um.substring(0, 2)), 
					eval(Um.substring(3, 5)),0,0);

timer1 = 0;
running = 0;
//break;
function zeige_datum() {
	rechne_countdown();
 	//document.getElementById("zeitpunkt").innerHTML = Am +	", " + Um + " Uhr";
	//document.getElementById("zeitpunkt").innerHTML = Zieldatum;
	//document.getElementById("heute").innerHTML = jetzt ;
	if (running != 1) {
		window.clearInterval(timer1);
		timer1 = window.setInterval("rechne_countdown()", 1000);
		running = 1;
	}
	
}


function rechne_countdown() {
	var jetzt = new Date();
	var millisec_heute = Date.parse(jetzt);
	var millisec_am = Date.parse(Zieldatum);
	var zeitraum = eval(millisec_am-millisec_heute);
	//document.getElementById("heute_ms").innerHTML = zeitraum + " Millisekunden";

	var wochen = zeitraum/1000/60/60/24/7;
	var tage = (wochen - Math.floor(wochen))*7;
	var stunden = (tage - Math.floor(tage))*24;
	var minuten = (stunden - Math.floor(stunden))*60;
	var sekunden = (minuten - Math.floor(minuten))*60;

	document.getElementById("wochen").innerHTML =  Math.floor(wochen);
	document.getElementById("tage").innerHTML = Math.floor(tage);
	document.getElementById("stunden").innerHTML = Math.floor(stunden);
	document.getElementById("minuten").innerHTML = Math.floor(minuten);
	//document.getElementById("sekunden").innerHTML = Math.floor(sekunden);
	
	var breite1 = Math.round(sekunden/60*100);
	var breite2 = 100-Math.round(sekunden/60*100);
	//document.getElementById("zeitpunkt").innerHTML = Zieldatum + " | " + breite1 + " | " + breite2 ;

	document.getElementById("zeiger1").style.width = breite1 + "%";
	document.getElementById("zeiger2").style.width = breite2 + "%";
	
}


