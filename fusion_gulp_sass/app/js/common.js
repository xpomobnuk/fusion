$(document).ready(function() {

$(".down_head .scroll_down a").mPageScroll2id();

function load()	{
	$(".loader_inner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");
};
load();

$(".top_text h1").animated("fadeInDown", "fadeOutUp");
$(".top_text ul").animated("fadeInUp", "fadeOutDown");



function heightses() {
		$(".our_services_item p").height('auto').equalHeights();
	}

heightses();

	$(window).resize(function()	{
		heightses();
	});



});
