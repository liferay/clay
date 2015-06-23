+function($) {
	var SideNavigation = function(element, options) {
		this.init(element, options);
	};

	SideNavigation.prototype = {
		init: function(element, options) {
			var instance = this;

			instance.options = $.extend({}, $.fn.sideNavigation.defaults, options);

			instance.options.selector = element.selector;

			instance._bindUI(element);

			instance._renderUI(element);
		},

		_bindUI: function(element) {
			var instance = this;

			instance._onClickTrigger(element);

			instance._onWindowResize(element);

			instance._onScreenMobile(element);

			instance._onScreenDesktop(element);
		},

		_bindSidenavClose: function(container) {
			var instance = this;

			var sidenavClose = container.find('.sidenav-close');

			if (sidenavClose.length) {
				sidenavClose.on('click', function(event) {
					event.preventDefault();

					instance.toggleNavigation(container);
				});
			}
		},

		_onClickTrigger: function(element) {
			var instance = this;
			var toggler = element.find(instance.options.toggler); // find toggler inside element

			var body;
			var container;

			if (!toggler.length) { // if toggler doesnt exist, toggler and element are separate
				body = element.closest('body');
				toggler = body.find(instance.options.toggler);
				container = body.find(instance.options.selector);
			}

			toggler.on('click', function(event) {
				var $this = $(this);
				var selector = $this.closest(instance.options.selector);

				var content;
				var navigation;
				var transitions;

				if (selector.length) {
					container = selector;
				}

				if (!$this.data('previouslyToggled')) {
					instance._bindSidenavClose(container);

					$this.data('previouslyToggled', true);
				}

				content = container.find(instance.options.content);
				navigation = container.find(instance.options.navigation);
				sidenavMenu = container.find('.sidenav-menu');
				transitions = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

				event.preventDefault();

				container.on(transitions, function(event) {
					container.removeClass('sidenav-transition');

					if (container.hasClass('closed')) {
						instance.removeEqualHeight([navigation, content, sidenavMenu]);
					}

					container.off(transitions);
				});

				instance.toggleNavigation(container);
			});
		},

		_onScreenDesktop: function(element) {
			var instance = this;

			$(document).on('screen-desktop', function(event, sidenav) {
				if (instance.options.type === 'fixed-mobile') {
					element.removeClass('sidenav-fixed');
				}
			});
		},

		_onScreenMobile: function(element) {
			var instance = this;

			$(document).on('screen-mobile', function(event, sidenav) {
				if (instance.options.type === 'fixed-mobile') {
					element.addClass('sidenav-fixed');
				}
			});
		},

		_onWindowResize: function(element) {
			var instance = this;
			var doc = $(document);

			var content;
			var navigation;
			var winWidth;

			instance._setScreenSize();

			$(window).resize(function(event) {
				winWidth = window.innerWidth; // https://github.com/jquery/jquery/issues/1729

				if ((winWidth < instance.options.breakpoint) && (instance._screenSize !== 'screen-mobile')) {
					instance._screenSize = 'screen-mobile';
					doc.trigger('screen-mobile', element);
				}

				if ((winWidth >= instance.options.breakpoint) && (instance._screenSize !== 'screen-desktop')) {
					instance._screenSize = 'screen-desktop';
					doc.trigger('screen-desktop', element);
				}

				element.each(function(index, node) {
					node = $(node);
					content = node.find(instance.options.content);
					navigation = node.find(instance.options.navigation);
					sidenavMenu = node.find('.sidenav-menu');

					if (!node.hasClass('closed')) {
						instance.removeEqualHeight([navigation, content, sidenavMenu]);
						instance.removeWidth(node);
						instance.setEqualHeight(node);
						instance.setWidth(node);
					}
				});
			});
		},

		_renderNav: function(element) {
			var instance = this;

			element.each(function(index, node) {
				var node = $(node);

				if (node.hasClass('closed') && node.hasClass('sidenav-right')) {
					node.find('.sidenav-menu').css({
						right: instance.options.width,
						width: instance.options.width
					});
				}

				if (!node.hasClass('closed')) {
					instance.setEqualHeight(node);
					instance.setWidth(node);
				}
			});
		},

		_renderUI: function(element) {
			var instance = this;

			if (instance.options.position === 'right') {
				element.addClass('sidenav-right');
			}

			if ((instance.options.type === 'fixed')) {
				element.addClass('sidenav-fixed');
			}

			if ((window.innerWidth < instance.options.breakpoint) && (instance.options.type === 'fixed-mobile')) {
				element.addClass('sidenav-fixed');
			}

			instance._renderNav(element);
		},

		_setScreenSize: function() {
			var instance = this;
			var winWidth = window.innerWidth;

			if (winWidth < instance.options.breakpoint) {
				instance._screenSize = 'screen-mobile';
			}
			else if (winWidth >= instance.options.breakpoint) {
				instance._screenSize = 'screen-desktop';
			}
		},

		removeEqualHeight: function(array) {
			$.each(array, function(index, node) {
				node.css('min-height', '');
			});
		},

		removeWidth: function(element) {
			var instance = this;
			var content = element.find(instance.options.content);

			if (element.hasClass('sidenav-right')) {
				if (window.innerWidth < instance.options.breakpoint) {
					content.css('left', '');
					element.find('.sidenav-menu').css('right', instance.options.width);
				}
				else {
					content.css('padding-right', '');
				}
			}
			else {
				if (window.innerWidth < instance.options.breakpoint) {
					content.css('left', '');
				}
				else {
					content.css('padding-left', '');
				}
			}

			element.find(instance.options.navigation).css('width', '');
		},

		setEqualHeight: function(container) {
			var instance = this;
			var containerClone;
			var containerCloneContent;
			var containerCloneNavigation;
			var element1;
			var element2;
			var tallest;

			container.each(function(index, node) {
				node = $(node);
				containerClone = node.clone();

				containerClone.removeClass('closed').css({
					opacity: 0,
					position: 'absolute',
					width: node.outerWidth()
				});

				containerCloneContent = containerClone.find(instance.options.content);
				containerCloneNavigation = containerClone.find(instance.options.navigation);

				containerCloneNavigation.css('width', instance.options.width);

				if (!(window.innerWidth < instance.options.breakpoint)) {
					if (containerClone.hasClass('sidenav-right')) {
						containerCloneContent.css('padding-right', parseInt(instance.options.width) + parseInt(instance.options.gutter));
					}
					else {
						containerCloneContent.css('padding-left', parseInt(instance.options.width) + parseInt(instance.options.gutter));
					}
				}

				containerClone.insertBefore(node);

				element1 = containerCloneNavigation;
				element2 = containerCloneContent;
				tallest = Math.max(element1.outerHeight(), element2.outerHeight());

				containerClone.remove();

				if (window.innerWidth < instance.options.breakpoint) {
					if ((instance.options.type === 'fixed') || (instance.options.type === 'fixed-mobile')) {
					}
					else {
						node.find(instance.options.content).css('min-height', tallest);
						node.find(instance.options.navigation).css('min-height', tallest);
						node.find('.sidenav-menu').css('min-height', tallest);
					}
				}
				else {
					node.find(instance.options.content).css('min-height', tallest);
					node.find(instance.options.navigation).css('min-height', tallest);
					node.find('.sidenav-menu').css('min-height', tallest);
				}
			});
		},

		setSidenavLeftWidth: function(container, content, menu) {
			var instance = this;

			var contentLeftPos = instance.options.width;

			if (window.innerWidth < instance.options.breakpoint) {
				if ((instance.options.type === 'fixed') || (instance.options.type === 'fixed-mobile')) {
					contentLeftPos = ''
				}

				content.css({
					left: contentLeftPos,
					paddingLeft: ''
				});
			}
			else {
				if (instance.options.type !== 'fixed') {
					content.css('padding-left', parseInt(instance.options.width) + parseInt(instance.options.gutter));
				}
			}
		},

		setSidenavRightWidth: function(container, content, menu) {
			var instance = this;

			var contentLeftPos = instance.options.width;

			if (window.innerWidth < instance.options.breakpoint) {
				contentLeftPos = -parseInt(contentLeftPos);

				if ((instance.options.type === 'fixed') || (instance.options.type === 'fixed-mobile')) {
					contentLeftPos = '';
				}

				content.css({
					left: contentLeftPos,
					paddingRight: ''
				});

				menu.css('right', '');

				menu.css('width', instance.options.width);

				if (container.hasClass('closed')) {
					menu.css('right', instance.options.width);
				}
			}
			else {
				if (instance.options.type !== 'fixed') {
					content.css('padding-right', parseInt(instance.options.width) + parseInt(instance.options.gutter));
				}

				menu.css('width', instance.options.width);
			}
		},

		setWidth: function(element) {
			var instance = this;

			element.each(function(index, node) {
				var node = $(node);
				var content = node.find(instance.options.content);
				var menu = node.find('.sidenav-menu');

				if (node.hasClass('sidenav-right')) {
					instance.setSidenavRightWidth(node, content, menu);
				}
				else {
					instance.setSidenavLeftWidth(node, content, menu);
				}

				node.find(instance.options.navigation).css('width', instance.options.width);
				menu.css('width', instance.options.width);
			});
		},

		toggleNavigation: function(container) {
			var instance = this;

			var sidenavMenu = container.find('.sidenav-menu');

			if (container.hasClass('closed')) {
				instance.setEqualHeight(container);

				sidenavMenu.css('width', instance.options.width);

				setTimeout(function() {
					container.removeClass('closed').addClass('sidenav-transition');

					if (window.innerWidth > instance.options.breakpoint - 1) {
						sidenavMenu.css('right', '');
					}

					instance.setWidth(container);
				}, 0);
			}
			else {
				if ((window.innerWidth > instance.options.breakpoint - 1) && (container.hasClass('sidenav-right'))) {
					sidenavMenu.css('right', instance.options.width);
				}

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
		breakpoint: 768, // desktop media query breakpoint
		content: '.sidenav-content', // class or id of content
		gutter: '15px', // space between sidenav-slider and sidenav-content
		navigation: '.sidenav-menu-slider', // class or id of navigation
		position: 'left', // position of sidenav-slider, left or right side
		type: 'default', // type of sidenav, default or fixed
		toggler: '.sidenav-toggler', // class or id of toggle button
		width: '225px' // width of side navigation
	};

	$.fn.sideNavigation.Constructor = SideNavigation;
}(jQuery);