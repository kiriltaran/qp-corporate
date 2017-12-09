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
    var currentAnchor = location.hash.substring(1);
    var prevOrder = 0;
    for (var i = 0; i < navAnchors.length; i++) {
      if (navAnchors[i] === currentAnchor) {
        prevOrder = i - 1;
      }
    }
    if (prevOrder >= 0) {
      location.hash = navAnchors[prevOrder];
    }
  });

  $('#next').click(function() {
    var currentAnchor = location.hash.substring(1);
    var nextOrder = 0;
    for (var i = 0; i < navAnchors.length; i++) {
      if (navAnchors[i] === currentAnchor) {
        nextOrder = i + 1;
      }
    }
    if (nextOrder < navAnchors.length) {
      location.hash = navAnchors[nextOrder];
    }
  });
});
