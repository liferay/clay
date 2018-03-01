var nodeToFix = $('.navbar-clay-site');

function AddScroll() {
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {
			nodeToFix.addClass('scroll');
		} else {
			nodeToFix.removeClass('scroll');
		}
	});
}

if (nodeToFix.length > 0) {
	$(window).on("scroll load resize", function() {
		AddScroll();
	});
}