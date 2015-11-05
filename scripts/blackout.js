// JavaScript Document

$(document).ready(function(){
	
	$('a.imageLink').hover(
	function(){
		$(this).children('.caption').animate({top:65+'px'}, 250);
		},
	function(){
		$(this).children('.caption').animate({top:203+'px'}, 250);
		}
	)
}







	);