// toggle mobile headerigation
function toggleMobileheader() {
	if( $("header").hasClass("mobile") ) {
		$("header").removeClass("mobile");
	}
	else {
		$("header").addClass("mobile");
	}
}

// hide mobile header when clicking outside of header area
$("html").click(function() {
	$("header").removeClass("mobile");
});

$("header").click(function(e){
    e.stopPropagation();
});

// hide header on scroll down
var scrolled = false;
var lastScrollTop = 0;
var delta = 5;
var headerbarHeight = $("header").outerHeight();

$(window).scroll(function(event){
    scrolled = true;
});

setInterval(function() {
    if (scrolled) {
        hasScrolled();
        scrolled = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta) // make sure user scrolled more than delta
        return;

    if (st > lastScrollTop && st > headerbarHeight) {
		if( !$("header").hasClass("mobile") ) {
			$("header").removeClass("header-show").addClass("header-hide");
		}
    }
	else {
        if(st + $(window).height() < $(document).height()) {
            $("header").removeClass("header-hide").addClass("header-show");
        }
    }

    lastScrollTop = st;
}
