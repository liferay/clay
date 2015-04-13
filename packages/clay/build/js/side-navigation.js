+function($) {
	var SideNavigation = function(element, options) {
		this.init(element, options);
	};

	SideNavigation.prototype = {
		init: function(element, options) {
			var instance = this;

			instance.options = $.extend({}, $.fn.sideNavigation.defaults, options);

			instance.options.selector = element.selector;

			instance._handleClick(element);

			instance._handleResize(element);

			if (instance.options.position === 'right') {
				element.addClass('sidenav-right');
			}

			element.each(function(index, node) {
				var node = $(node);

				if (!node.hasClass('closed')) {
					instance.setEqualHeight(node);
					instance.setWidth(node);
				}
			});
		},

		_handleClick: function(element) {
			var instance = this;
			var body = $('body');
			var container;

			if (!element.find(instance.options.toggler).length) {
				element = body.find(instance.options.toggler);
				container = body.find(instance.options.selector);
			}
			else {
				element = element.find(instance.options.toggler);
			}

			element.on('click', function(event) {
				var content;
				var navigation;
				var transitions;

				if ($(this).closest(instance.options.selector).length) {
					container = $(this).closest(instance.options.selector);
				}

				content = container.find(instance.options.content);
				navigation = container.find(instance.options.navigation);
				transitions = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

				event.preventDefault();

				container.one(transitions, function(event) {
					container.removeClass('sidenav-transition');

					if (container.hasClass('closed')) {
						instance.removeEqualHeight(navigation, content);
					}
				});

				instance.setEqualHeight(container);

				setTimeout(function() {
					instance.toggleNavigation(container);
				}, 0);
			});
		},

		_handleResize: function(element) {
			var instance = this;
			var container;
			var content;
			var navigation;

			$(window).resize(function(event) {
				element.each(function(index, node) {
					container = $(node);
					content = container.find(instance.options.content);
					navigation = container.find(instance.options.navigation);

					if (!container.hasClass('closed')) {
						instance.removeEqualHeight(navigation, content);
						instance.setEqualHeight(container);
					}
				});
			});
		},

		removeEqualHeight: function(element1, element2) {
			element1.css('min-height', '');
			element2.css('min-height', '');
		},

		removeWidth: function(element) {
			var instance = this;
			var content = element.find(instance.options.content);

			if (element.hasClass('sidenav-right')) {
				content.css('padding-right', '');
			}
			else {
				content.css('padding-left', '');
			}

			element.find(instance.options.navigation).css('width', '');
		},

		setEqualHeight: function(container) {
			var instance = this;
			var containerClone;
			var element1;
			var element2;
			var tallest;

			container.each(function(index, node) {
				container = $(node);

				containerClone = container.clone();

				containerClone.removeClass('closed').css({
					opacity: 0,
					position: 'absolute',
					width: container.outerWidth()
				});

				containerClone.find(instance.options.navigation).css('width', instance.options.width);

				if (containerClone.hasClass('sidenav-right')) {
					containerClone.find(instance.options.content).css('padding-right', instance.options.width);
				}
				else {
					containerClone.find(instance.options.content).css('padding-left', instance.options.width);
				}

				containerClone.insertBefore(container);

				element1 = containerClone.find(instance.options.navigation);
				element2 = containerClone.find(instance.options.content);
				tallest = Math.max(element1.outerHeight(), element2.outerHeight());

				containerClone.remove();

				container.find(instance.options.content).css('min-height', tallest);
				container.find(instance.options.navigation).css('min-height', tallest);
			});
		},

		setWidth: function(element) {
			var instance = this;

			element.each(function(index, node) {
				var node = $(node);

				if (node.hasClass('sidenav-right')) {
					node.find(instance.options.content).css('padding-right', instance.options.width);
				}
				else {
					node.find(instance.options.content).css('padding-left', instance.options.width);
				}

				node.find(instance.options.navigation).css('width', instance.options.width);
				node.find('.sidenav-menu').css('width', instance.options.width);
			});
		},

		toggleNavigation: function(container) {
			var instance = this;

			if (container.hasClass('closed')) {
				container.removeClass('closed').addClass('sidenav-transition');

				instance.setWidth(container);
			}
			else {
				container.addClass('closed').addClass('sidenav-transition');

				instance.removeWidth(container);
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
		position: 'left',
		toggler: '.sidenav-toggler'
	};

	$.fn.sideNavigation.Constructor = SideNavigation;
}(jQuery);