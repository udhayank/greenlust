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

function openModal() {
  document.getElementById("modal").style.display = "block";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function currentSlide(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
}
