var vikt, langd, alder, kon, aktivitet, avdrag;
var bmiratio, bmrtotal, kcaltotal;
var formel = bmiratio * aktivitet;

var bmiratio, bmrtotal, kcaltotal, avdrag;

// Ekvationen som används:
// https://en.wikipedia.org/wiki/Harris-Benedict_equation
// (revised by Roza and Shizgal in 1984)

// Räknar ut det dagliga energibehovet
function rakna() {

vikt = $('#vikt').val();
langd = $('#langd').val();
alder = $('#alder').val();
kon = $('#kon').val();
aktivitet = $('#aktivitet').val();

$(".resultat").fadeIn(1000);

if (kon == 1) {
// Ekvationen för män
bmiratio = (88.362 + (13.397 * vikt) + (4.799 * langd) - (5.677 * alder));
var formel = (bmiratio * aktivitet);{
$(".energibehov").html(Math.round(formel) + " kcal &auml;r ditt dagliga energibehov.");
}

}else {
// Ekvationen för kvinnor
bmiratio = (447.593 + (9.247 * vikt) + (3.098 * langd) - (4.330 * alder));
var formel = (bmiratio * aktivitet);{
$(".energibehov").html(Math.round(formel) + " kcal &auml;r ditt dagliga energibehov.");
}
}

return false;
}

function viktnedgang(){
vikt = $('#vikt').val();
langd = $('#langd').val();
alder = $('#alder').val();
kon = $('#kon').val();
aktivitet = $('#aktivitet').val();
avdrag = $('#viktn').val();

if (kon==1){
bmiratio = (66.4730 + (13.7516 * vikt) + (5.0033 * langd) - (6.7550 * alder));
bmitotal =(bmiratio * aktivitet);
kcaltotal = (bmitotal - ((7000 * avdrag) / 7));
$(".energi").html(Math.round(kcaltotal) + " kcal om dagen f&ouml;r att g&aring; ner " + (avdrag) + " kilo i veckan.").fadeIn(1000);
{
}

}else{
bmiratio=(665.0955 + (9.5634 * vikt) + (1.8496 * langd) - (4.6756 * alder));
bmitotal = (bmiratio * aktivitet);
kcaltotal= (bmitotal - ((7000 * avdrag) / 7) );
$(".energi").html(Math.round(kcaltotal) + " kcal om dagen f&ouml;r att g&aring; ner " + (avdrag) + " kilo i veckan.").fadeIn(1000);
{

}
}
return false;
}


// https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Smooth scroll mellan ID-element och href="#"
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

if (target.length) {
	$('html,body').animate({
	scrollTop: target.offset().top
}, 1000);
	return false;
	}
}
	});
});