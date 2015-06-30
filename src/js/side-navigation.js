+function($) {
	var SideNavigation = function(element, options) {
		this.init(element, options);
	};

	SideNavigation.prototype = {
		init: function(element, options) {
			var instance = this;

			instance.options = $.extend({}, $.fn.sideNavigation.defaults, options);
			instance.options.selector = element.selector;
			instance.options.transitions = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
			instance.options.widthOriginal = instance.options.width;

			// find toggler
			if (!element.find(instance.options.toggler).length) {
				element.toggler = element.closest('body').find(instance.options.toggler).first();
			}
			else {
				element.toggler = element.find(instance.options.toggler);
			}

			instance._bindUI(element);

			instance._renderUI(element);
		},

		_bindUI: function(element) {
			var instance = this;

			instance._onClickTrigger(element);

			instance._onClickSidenavClose(element);

			instance._onWindowResize(element);

			instance._onScreenMobile(element);

			instance._onScreenDesktop(element);
		},

		_onClickSidenavClose: function(element) {
			var instance = this;

			var closeButton = element.find('.sidenav-close').first();

			closeButton.on('click', function(event) {
				container = $(this).closest('.sidenav-container');

				event.preventDefault();

				instance.toggleNavigation(container);
			});
		},

		_onClickTrigger: function(element) {
			var instance = this;
			var toggler = element.toggler;
			var container;

			container = element;

			toggler.on('click', function(event) {
				var $this = $(this);
				var selector = $this.closest(instance.options.selector);

				if (selector.length) {
					container = selector;
				}

				event.preventDefault();

				instance.toggleNavigation(container);
			});
		},

		_onScreenDesktop: function(element) {
			var instance = this;

			$(document).on('isDesktop', function(event) {
				if ((instance.options.type === 'fixed') || (instance.options.type === 'fixed-push')) {
					element.addClass('sidenav-fixed');
				}
				else if (instance.options.type === 'relative') {
					element.removeClass('sidenav-fixed');
				}
			});
		},

		_onScreenMobile: function(element) {
			var instance = this;

			$(document).on('isMobile', function(event) {
				if ((instance.options.typeMobile === 'fixed') || (instance.options.typeMobile === 'fixed-push')) {
					element.addClass('sidenav-fixed');
				}
				else if (instance.options.typeMobile === 'relative') {
					element.removeClass('sidenav-fixed');
				}
			});
		},

		_onSidenavTransitionEnd: function(element) {
			var instance = this;

			element.on(instance.options.transitions, function(event) {
				var $this = $(this);
				var menu = $this.find('.sidenav-menu').first();

				$this.removeClass('sidenav-transition');

				if ($this.hasClass('closed')) {
					instance.removeMinHeight($this);
				}

				if (instance.isMobile) {
					instance._focusElement(menu);
				}

				$this.off(instance.options.transitions);
			});
		},

		_onWindowResize: function(element) {
			var instance = this;
			var doc = $(document);

			var winWidth;

			instance._setScreenSize();

			$(window).resize(function(event) {
				winWidth = window.innerWidth; // https://github.com/jquery/jquery/issues/1729

				if ((winWidth < instance.options.breakpoint) && instance.isDesktop) {
					instance.isMobile = true;
					instance.isDesktop = false;
					doc.trigger('isMobile', element);
				}

				if ((winWidth >= instance.options.breakpoint) && instance.isMobile) {
					instance.isMobile = false;
					instance.isDesktop = true;
					doc.trigger('isDesktop', element);
				}

				element.each(function(index, node) {
					node = $(node);

					if (!node.hasClass('closed')) {
						instance.removeMinHeight(node);
						instance.setEqualHeight(node);
						instance.setWidth(node);
					}
				});
			});
		},

		_renderNav: function(element) {
			var instance = this;

			instance._resizeSidenav();

			element.each(function(index, node) {
				var node = $(node);
				var menu = node.find('.sidenav-menu').first();

				if (node.hasClass('closed') && node.hasClass('sidenav-right')) {
					menu.css({
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

			if (instance.isMobile) { // mobile
				if ((instance.options.typeMobile === 'fixed') || instance.options.typeMobile ==='fixed-push') {
					element.addClass('sidenav-fixed');
				}

				element.addClass('closed');
			}
			else { // desktop
				if ((instance.options.type === 'fixed') || instance.options.type ==='fixed-push') {
					element.addClass('sidenav-fixed');
				}
			}

			instance._renderNav(element);
		},

		_resizeSidenav: function() {
			var instance = this;

			if (window.innerWidth < instance.options.widthOriginal + 40) {
				instance.options.width = window.innerWidth - 40;
			}
			else {
				instance.options.width = instance.options.widthOriginal;
			}
		},

		_setScreenSize: function() {
			var instance = this;
			var winWidth = window.innerWidth;

			if (winWidth < instance.options.breakpoint) {
				instance.isMobile = true;
				instance.isDesktop = false;
			}
			else if (winWidth >= instance.options.breakpoint) {
				instance.isMobile = false;
				instance.isDesktop = true;
			}
		},

		removeMinHeight: function(element) {
			var instance = this;

			var content = element.find(instance.options.content).first();
			var navigation = element.find(instance.options.navigation).first();
			var sidenavMenu = element.find('.sidenav-menu').first();

			content.css('min-height', '');
			navigation.css('min-height', '');
			sidenavMenu.css('min-height', '');
		},

		removeWidth: function(element) { // rename to close sidenav or something
			var instance = this;
			var content = element.find(instance.options.content).first();
			var menu = element.find('.sidenav-menu').first();
			var navigation = element.find(instance.options.navigation).first();

			if (element.hasClass('sidenav-right')) {
				content.css('left', '');
				content.css('padding-right', '');

				if (instance.isMobile) { // mobile
					if (instance.options.typeMobile === 'fixed-push') {
						menu.css({
							right: instance.options.width
						});
					}
					else {
						content.css({
							right: ''
						});
					}
				}
				else { // desktop
					menu.css({
						right: instance.options.width
					});
				}
			}
			else {
				if (instance.isMobile) {
					content.css('left', '');
				}
				else {
					content.css('padding-left', '');
				}
			}

			navigation.css('width', '');
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

				containerCloneContent = containerClone.find(instance.options.content).first();
				containerCloneNavigation = containerClone.find(instance.options.navigation).first();

				containerCloneNavigation.css('width', instance.options.width);

				if (instance.isDesktop) {
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

				if (instance.isMobile) {
					if (!(instance.options.typeMobile === 'fixed') && !(instance.options.typeMobile === 'fixed-push')) {
						node.find(instance.options.content).first().css('min-height', tallest);
						node.find(instance.options.navigation).first().css('min-height', tallest);
						node.find('.sidenav-menu').first().css('min-height', tallest);
					}
				}
				else {
					if (!(instance.options.type === 'fixed') && !(instance.options.type === 'fixed-push')) {
						node.find(instance.options.content).first().css('min-height', tallest);
						node.find(instance.options.navigation).first().css('min-height', tallest);
						node.find('.sidenav-menu').first().css('min-height', tallest);
					}
				}
			});
		},

		setSidenavLeftWidth: function(element) {
			var instance = this;

			var content = element.find(instance.options.content).first();
			var menu = element.find('.sidenav-menu').first();
			var navigation = element.find(instance.options.navigation).first();

			if (instance.isMobile) { // mobile
				if (instance.options.typeMobile === 'fixed') {
					content.css({
						left: '',
						paddingLeft: ''
					});
				}
				else if (instance.options.typeMobile === 'fixed-push') {
					content.css({
						left: instance.options.width,
						paddingLeft: ''
					});
				}
				else {
					content.css({
						left: parseInt(instance.options.width) + parseInt(instance.options.gutter),
						paddingLeft: ''
					});
				}
			}
			else { // desktop
				if (instance.options.type === 'fixed-push') {
					content.css({
						left: '',
						paddingLeft: parseInt(instance.options.width) + parseInt(instance.options.gutter)
					});
				}
				else {
					content.css({
						paddingLeft: parseInt(instance.options.width) + parseInt(instance.options.gutter)
					});
				}
			}

			navigation.css('width', instance.options.width);
			menu.css('width', instance.options.width);
		},

		setSidenavRightWidth: function(element) {
			var instance = this;

			var content = element.find(instance.options.content).first();
			var menu = element.find('.sidenav-menu').first();
			var navigation = element.find(instance.options.navigation).first();

			if (instance.isMobile) { // mobile
				if (instance.options.typeMobile === 'fixed') {
					content.css({
						left: '',
						paddingRight: ''
					});

					menu.css({
						right: ''
					});
				}
				else if (instance.options.typeMobile === 'fixed-push') {
					menu.css({
						right: ''
					});

					content.css({
						left: '',
						right: '',
						paddingRight: instance.options.width
					});
				}
				else {
					menu.css({
						right: ''
					});

					content.css({
						right: parseInt(instance.options.width) + parseInt(instance.options.gutter)
					});
				}
			}
			else { // desktop
				if (instance.options.type === 'fixed') {
					content.css({
						left: '',
						right: ''
					});
				}
				else if (instance.options.type === 'fixed-push') {
					content.css({
						left: '',
						right: '',
						paddingRight: instance.options.width
					});
				}
				else {
					content.css({
						paddingRight: parseInt(instance.options.width) + parseInt(instance.options.gutter)
					});
				}
			}

			navigation.css('width', instance.options.width);
			menu.css('width', instance.options.width);
		},

		setWidth: function(element) {
			var instance = this;

			instance._resizeSidenav();

			if (element.hasClass('sidenav-right')) {
				instance.setSidenavRightWidth(element);
			}
			else {
				instance.setSidenavLeftWidth(element);
			}
		},

		_focusElement: function(element) {
			// ios 8 fixed element disappears when trying to scroll
			element.focus();
		},

		toggleNavigation: function(container) {
			var instance = this;

			var sidenavMenu = container.find('.sidenav-menu').first();

			if (container.hasClass('closed')) {
				instance.setEqualHeight(container);

				sidenavMenu.css('width', instance.options.width);

				instance._onSidenavTransitionEnd(container);

				setTimeout(function() {
					container.removeClass('closed').addClass('sidenav-transition');

					if (instance.isDesktop) {
						sidenavMenu.css('right', '');
					}

					instance.setWidth(container);
				}, 0);
			}
			else {
				instance._onSidenavTransitionEnd(container);

				setTimeout(function() {
					if (instance.isMobile && container.hasClass('sidenav-right')) {
						sidenavMenu.css('right', instance.options.width);
					}

					container.addClass('closed').addClass('sidenav-transition');

					instance.removeWidth(container);
				}, 0);
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
		typeMobile: 'relative', // type of sidenav in mobile, values: relative, fixed, fixed-push
		type: 'relative', // type of sidenav in desktop, values: relative, fixed, fixed-push
		toggler: '.sidenav-toggler', // class or id of toggle button
		width: '225px' // width of side navigation
	};

	$.fn.sideNavigation.Constructor = SideNavigation;
}(jQuery);