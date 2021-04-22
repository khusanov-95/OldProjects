$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
})
});

(function($) {
$(function() {

	$('input, select').styler();
	$('input, number').styler();

});
})(jQuery);

function myFunction() {
	var x = document.getElementById("togl");
	if (x.style.display ==="none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
