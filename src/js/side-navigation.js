+function($) {
	var SideNavigation = function(element, options) {
		this.init(element, options);
	};

	SideNavigation.prototype = {
		init: function(element, options) {
			this.options = $.extend($.fn.sideNavigation.defaults, options);

			this.options.selector = element.selector;

			this._handleClick(element);
		},

		_handleClick: function(element) {
			var instance = this;

			element.find('.sidenav-toggler').on('click', function(event) {
				var container = $(this).closest(instance.options.selector);
				var content = container.find(instance.options.content);
				var navigation = container.find(instance.options.navigation);
				var transitions = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

				container.one(transitions, function(event) {
					container.removeClass('sidenav-transition');

					if (container.hasClass('closed')) {
						instance.removeEqualHeight(navigation, content);
					}
				});

				instance.toggleNavigation(container);

				instance.setEqualHeight(navigation, content, container);
			});
		},

		removeEqualHeight: function(element1, element2) {
			element1.css('min-height', '');
			element2.css('min-height', '');
		},

		setEqualHeight: function(element1, element2, container) {
			var containerClone = container.clone();
			var element1;
			var element2;
			var tallest;

			containerClone.removeClass('closed').css({
				opacity: 0,
				position: 'absolute'
			});

			containerClone.insertBefore(container);

			element1 = containerClone.find(this.options.navigation);
			element2 = containerClone.find(this.options.content);
			tallest = Math.max(element1.height(), element2.height());

			containerClone.remove();

			container.find(this.options.navigation).css('min-height', tallest);
			container.find(this.options.content).css('min-height', tallest);
		},

		toggleNavigation: function(container) {
			if (container.hasClass('closed')) {
				container.removeClass('closed').addClass('sidenav-transition');
			}
			else {
				container.addClass('closed').addClass('sidenav-transition');
			}
		}
	};

	$.fn.sideNavigation = function(options) {
		new SideNavigation(this, options);

		return this;
	}

	$.fn.sideNavigation.defaults = {
		content: '.sidenav-content',
		navigation: '.sidenav-menu-slider',
		toggle: '.sidenav-toggler'
	}

	$.fn.sideNavigation.Constructor = SideNavigation;
}(jQuery);