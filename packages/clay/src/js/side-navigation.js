+function($) {
	$.fn.sideNavigation = function(options) {
		var defaults = {
			content: '.sidenav-content',
			navigation: '.sidenav-menu-slider',
			toggle: '.sidenav-toggler'
		};

		var sidenavs = $(this);

		options = $.extend(defaults, options);

		removeEqualHeight = function(element1, element2) {
			element1.css('min-height', '');
			element2.css('min-height', '');
		};

		setEqualHeight = function(element1, element2) {
			var tallest = Math.max(element1.height(), element2.height());

			element1.css('min-height', tallest);
			element2.css('min-height', tallest);
		};

		toggleNavigation = function(container) {
			if (container.hasClass('closed')) {
				container.removeClass('closed').addClass('sidenav-transition');
			}
			else {
				container.addClass('closed').addClass('sidenav-transition');
			}
		};

		sidenavs.find(options.toggle).on(
			'click',
			function(event) {
				var container = $(this).closest(sidenavs.selector);
				var content = container.find(options.content);
				var navigation = container.find(options.navigation);
				var transitions = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

				container.one(transitions, function(event) {
					container.removeClass('sidenav-transition');

					if (container.hasClass('closed')) {
						removeEqualHeight(navigation, content);
					}
				});

				toggleNavigation(container);

				setEqualHeight(navigation, content);
			}
		);

		return this;
	};
}(jQuery);