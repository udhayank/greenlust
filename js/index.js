// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}


    const buttonRight = document.getElementById('why-scroll-next');
    const buttonLeft = document.getElementById('why-scroll-prev');

    buttonRight.onclick = function () {
      document.getElementById('why-scroll-container').scrollLeft += 160;
    };
    buttonLeft.onclick = function () {
      document.getElementById('why-scroll-container').scrollLeft -= 160;
    };

    const thingsToDoButtonRight = document.getElementById('things-to-do-next');
    const thingsToDoButtonLeft = document.getElementById('things-to-do-prev');

    thingsToDoButtonRight.onclick = function () {
      document.getElementById('things-to-do-container').scrollLeft += 280;
    };
    thingsToDoButtonLeft.onclick = function () {
      document.getElementById('things-to-do-container').scrollLeft -= 280;
    };

    const oeButtonRight = document.getElementById('oe-scroll-next');
    const oeButtonLeft = document.getElementById('oe-scroll-prev');

    oeButtonRight.onclick = function () {
      document.getElementById('oe-scroll-container').scrollLeft += 280;
    };
    oeButtonLeft.onclick = function () {
      document.getElementById('oe-scroll-container').scrollLeft -= 280;
    };


    const width = document.getElementById('customer-scroll-container').offsetWidth;

    const crButtonRight = document.getElementById('customer-scroll-next');
    const crButtonLeft = document.getElementById('customer-scroll-prev');

    crButtonRight.onclick = function () {
      document.getElementById('customer-scroll-container').scrollLeft += (width - 15);
    };
    crButtonLeft.onclick = function () {
      document.getElementById('customer-scroll-container').scrollLeft -= (width - 15);
    };
