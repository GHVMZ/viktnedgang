function viktnedgang() {
    vikt = $('#vikt').val();
    langd = $('#langd').val();
    alder = $('#alder').val();
    kon = $('#kon').val();
    aktivitet = $('#aktivitet').val();
	var avdrag = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];
	
	
	for(i = 0; i < avdrag.length; i++){
	if (kon == 1) {

	$(".energi").html("<li>"+ Math.round(kcaltotal) + " kcal om dagen f&ouml;r att g&aring; ner " + (avdrag) + " kilo i veckan. </li>").fadeIn(1000);
	
    } else {
    
	$(".energi").html("<li>"+ Math.round(kcaltotal) + " kcal om dagen f&ouml;r att g&aring; ner " + (avdrag) + " kilo i veckan. </li>").fadeIn(1000);
	}
	}
	
	
}