$(function () {
	// Custom JS
	$(document).ready(function () {
		$('#fullpage').fullpage({
			menu: '#nav-list',
			anchors: ['first','features', 'web', 'mobile', 'lead', 'last'],
		});
	});



	var slide1 = document.getElementById('slide1');
	var parallaxInstance = new Parallax(slide1);

	var slide2 = document.getElementById('slide2');
	var parallaxInstance = new Parallax(slide2);

	var scene3 = document.getElementById('slide3');
	var parallaxInstance = new Parallax(scene3);

	var scene4 = document.getElementById('web-parallax');
	var parallaxInstance = new Parallax(scene4);

	var scene4 = document.getElementById('mobile-parallax');
	var parallaxInstance = new Parallax(scene4);

	$(window).scroll(function () {});

	$('.toggleMenu').click(function(){
		$('#menu').toggleClass('show-menu');
		$('.main').toggleClass('blur');
	})

	$('.menu-item').click(function(){
		$('#menu').toggleClass('show-menu');
		$('.main').toggleClass('blur');
	})

});