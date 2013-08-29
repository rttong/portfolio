$(document).ready(function() {

	var backgrounds = ["bg_body_01", "bg_body_02", "bg_body_03", "bg_body_04", "bg_body_05", "bg_body_06", "bg_body_07"];
	var randomInt = Math.floor(Math.random()*7);

	$('body').css('background-image', 'asset-url('+ backgrounds[randomInt] +')');
});