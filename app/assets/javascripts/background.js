$(document).ready(function() {

	var backgrounds = ["bg_body_01.jpg", "bg_body_02.jpg", "bg_body_03.jpg", "bg_body_04.jpg", "bg_body_05.jpg", "bg_body_06.jpg", "bg_body_07.jpg"];
	var randomInt = Math.floor(Math.random()*7);

	$('body').css('background-image', 'url('+ "backgrounds[randomInt]" +')');
});