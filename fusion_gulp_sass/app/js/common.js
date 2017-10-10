$(document).ready(function() {

$(".down_head .scroll_down a").mPageScroll2id();

function load()	{
	$(".loader_inner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");
};

$(".top_text h1").animated("fadeInDown", "fadeOutUp")
$(".top_text ul").animated("fadeInUp", "fadeOutDown")

load();

function heightDetect(){
		$(".main_head").css("height", $(window).height());
	};

heightDetect();



});
