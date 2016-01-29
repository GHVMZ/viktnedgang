var vikt, langd, alder, kon, aktivitet, avdrag, formel, bmiratio, bmrtotal, kcaltotal, avdrag;

// Ekvationen som används:
// https://en.wikipedia.org/wiki/Harris-Benedict_equation
// (revised by Roza and Shizgal in 1984)
function rakna() {
  vikt = $('#vikt').val();
  langd = $('#langd').val();
  alder = $('#alder').val();
  kon = $('#kon').val();
  aktivitet = $('#aktivitet').val();
  
  $("#resultat").fadeIn(1000);
  if (kon == 1) {
    // Ekvationen för män
    bmiratio = (88.362 + (13.397 * vikt) + (4.799 * langd) - (5.677 * alder));
    formel = (bmiratio * aktivitet); {
      $(".energibehov").html("<span class='kcal'>" + Math.round(formel) + "kcal</span> &auml;r ditt dagliga energibehov");
    }
  } else {
    // Ekvationen för kvinnor
    bmiratio = (447.593 + (9.247 * vikt) + (3.098 * langd) - (4.330 * alder));
    formel = (bmiratio * aktivitet); {
      $(".energibehov").html("<span class='kcal'>" + Math.round(formel) + "kcal</span> &auml;r ditt dagliga energibehov");
    }
  }
  
  $('html, body').animate({
    scrollTop: $("#resultat").offset().top
  }, 1000);
  

    aktivitet = $('#aktivitet').val();
	var avdrag = [0.1,0.3,0.5,0.7,0.9,];
	var text = "";
	var i;
	
	
	
if (kon == 1) {
for(i = 0; i < avdrag.length; i++){
	bmiratio = (66.4730 + (13.7516 * vikt) + (5.0033 * langd) - (6.7550 * alder));
	bmitotal = (bmiratio * aktivitet);
	kcaltotal = (bmitotal - ((7000 * avdrag[i]) / 7));
	underskott = (bmitotal - kcaltotal);
	text += "<li>" + Math.round(kcaltotal) + "kcal om dagen f&ouml;r att g&aring; ner " + (avdrag[i]) + " kilo i veckan" + "<span class='minus'>-" + Math.round(formel - kcaltotal) + "</span></li>";
}
$(".energi").html(text);
}




else {
for(i = 0; i < avdrag.length; i++){
bmiratio = (665.0955 + (9.5634 * vikt) + (1.8496 * langd) - (4.6756 * alder));
bmitotal = (bmiratio * aktivitet);
kcaltotal = (bmitotal - ((7000 * avdrag[i]) / 7));

	text += "<li>" + Math.round(kcaltotal) + "kcal om dagen f&ouml;r att g&aring; ner " + (avdrag[i]) + " kilo i veckan" + "<span class='minus'>-" + Math.round(formel - kcaltotal) + "</span></li>";
}

$(".energi").html(text).fadeIn(2500);

	}
	  return false;
}









// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});