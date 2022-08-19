//Gives functionality to back to top floating button.
        var offset = 350;
        var duration = 100;
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.back-to-top').fadeIn(duration);
            } else {
                jQuery('.back-to-top').fadeOut(duration);
            }
        });
        jQuery('.back-to-top').click(function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })

//JavaScript for Accurate Progess Bar Representing PageLoad
var width = 100,
    perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime / 1000) % 60) * 100;

// Loadbar Animation
$(".loadbar").animate({
    width: width + "%"
}, time);

// Loadbar Glow Animation
$(".glow").animate({
    width: width + "%"
}, time);

// Percentage Increment Animation
var PercentageID = $("#percent"),
    start = 0,
    end = 100,
    durataion = time;
animateValue(PercentageID, start, end, durataion);

function animateValue(id, start, end, duration) {

    var range = end - start,
        current = start,
        increment = end > start ? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range)),
        obj = $(id);

    var timer = setInterval(function () {
        current += increment;
        $(obj).text(current + "%");
        //obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Fading Out Loadbar on Finish
setTimeout(function () {
    $('.preloader-wrap').fadeOut(200);
}, time);


