(function () {
    'use strict';

    var navSelector = '.navbar';
    var linksSelector = '.navbar a';
    var scrollSpeed = 70;

    var timer, targetPosition;

    function scroll() {
      var delta = targetPosition - document.documentElement.scrollTop;
      if (delta > 0) {
        document.documentElement.scrollTop += Math.min(delta, scrollSpeed);
      } else if (delta < 0) {
        document.documentElement.scrollTop += Math.max(delta, -scrollSpeed);
      } else {
        clearInterval(timer);
      }

      if (window.innerHeight >= document.documentElement.scrollHeight - document.documentElement.scrollTop) {
        clearInterval(timer);
      }

    };



    $("#gotop").click(function () {
      $('html, body').animate({
        scrollTop: $("#header").offset().top
      }, 2000);
    });


    $(function () {
      $("p").fadeOut(1000).delay(1000).fadeIn(1000);
    });
