
$(document).ready(function() {
    // Drop-in replacement for lightbox2
    //  (which has started having compatibility problems with Chrome)
    $(".screen-shot").each(function(){
        $(this).colorbox({rel: $(this).data('lightbox')});
    });
});


//
//  Use [GAP](http://rockymadden.com/gap/) instead of vanilla Google Analytics to track micro-behaviors.
//

var _gap = _gap || [];

// Standard Google Analytics pushes, just with _gap.push. 
// You can push anything, just like normal, via _gap.push instead of _gaq.push.
_gap.push(['_setAccount', 'UA-7629936-5']); // Change.
_gap.push(['_trackPageview']);

// With both bounce trackers active, any user who scrolls down 50% OR
// stays 10 seconds is not counted as a bounce. You can use just one, or none.
_gap.push(['_gapTrackBounceViaTime', 10]); // Optionally change (min seconds).
_gap.push(['_gapTrackBounceViaScroll', 50]); // Optionally change (min percentage).

// Every 20 seconds, push a read event so that time on site is more accurate.
// Only allow 30 of these read events per page.
_gap.push(['_gapTrackReads', 20, 30]); // Optionally change (cadence and max read events per page).

// Anytime a user clicks a link, internal or external, push the event.
_gap.push(['_gapTrackLinkClicks']);

// Track the maximum percentage of the page scrolled, should the percentage be greater than or equal to 25.
_gap.push(['_gapTrackMaxScroll', 25]); // Optionally change (min percentage).

(function() {
    var gap = document.createElement('script');
    gap.async = true;
    gap.type = 'text/javascript';
    gap.src = '/js/vendor/gap.min.js';

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gap, s);
})();

//*/
