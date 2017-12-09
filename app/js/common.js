$(function() {
  var navAnchors = ['first', 'features', 'web', 'mobile', 'lead', 'last'];

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

  $('#fullpage').fullpage({
    menu: '#nav-list',
    anchors: navAnchors,
  });

  $('.toggleMenu').click(function() {
    $('#menu').toggleClass('show-menu');
    $('.main').toggleClass('blur');
    $('.burger').toggleClass('show');
  });

  $('.menu-item').click(function() {
    $('#menu').toggleClass('show-menu');
    $('.main').toggleClass('blur');
  });

  $('#prev').click(function() {
    $.fn.fullpage.moveSectionUp();
  });

  $('#next').click(function() {
    $.fn.fullpage.moveSectionDown();
  });
});
