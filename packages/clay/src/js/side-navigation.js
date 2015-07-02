+function($) {
	var doc = $(document);

	var toInt = function(str) {
		return parseInt(str, 10) || 0;
	};

	var SideNavigation = function(element, options) {
		this.init(element, options);
	};

	SideNavigation.prototype = {
		init: function(element, options) {
			var instance = this;

			options = $.extend({}, $.fn.sideNavigation.defaults, options);
			options.selector = element.selector;
			options.transitions = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
			options.widthOriginal = options.width;

			// find toggler

			var toggler = element.find(options.toggler);

			if (!toggler.length) {
				toggler = element.closest('body').find(options.toggler).first();
			}

			element.toggler = toggler;

			instance.options = options;

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

			doc.on('isDesktop', function(event) {
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

			var typeMobile = typeMobile;

			doc.on('isMobile', function(event) {
				if (typeMobile === 'fixed' || typeMobile === 'fixed-push') {
					element.addClass('sidenav-fixed');
				}
				else if (typeMobile === 'relative') {
					element.removeClass('sidenav-fixed');
				}
			});
		},

		_onSidenavTransitionEnd: function(element) {
			var instance = this;

			var transitions = instance.options.transitions;

			element.on(transitions, function(event) {
				var $this = $(this);
				var menu = $this.find('.sidenav-menu').first();

				$this.removeClass('sidenav-transition');

				if ($this.hasClass('closed')) {
					instance.removeMinHeight($this);
				}

				if (instance.isMobile) {
					instance._focusElement(menu);
				}

				$this.off(transitions);
			});
		},

		_onWindowResize: function(element) {
			var instance = this;

			var winWidth;

			instance._setScreenSize();

			var breakpoint = instance.options.breakpoint;

			$(window).resize(function(event) {
				winWidth = window.innerWidth; // https://github.com/jquery/jquery/issues/1729

				if (winWidth < breakpoint && instance.isDesktop) {
					instance.isMobile = true;
					instance.isDesktop = false;
					doc.trigger('isMobile', element);
				}

				if (winWidth >= breakpoint && instance.isMobile) {
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

			var width = instance.options.width;

			element.each(function(index, node) {
				var node = $(node);
				var menu = node.find('.sidenav-menu').first();

				if (node.hasClass('closed') && node.hasClass('sidenav-right')) {
					menu.css({
						right: width,
						width: width
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

			var options = instance.options;
			var mobile = instance.isMobile;

			var type = mobile ? options.typeMobile: options.type;

			if (options.position === 'right') {
				element.addClass('sidenav-right');
			}

			if (type === 'fixed' || type ==='fixed-push') {
				element.addClass('sidenav-fixed');
			}

			if (mobile) {
				element.addClass('closed');
			}

			instance._renderNav(element);
		},

		_resizeSidenav: function() {
			var instance = this;

			var options = instance.options;
			var widthOriginal = options.widthOriginal;

			var winWidth = window.innerWidth;
			var width = widthOriginal;

			if (winWidth < widthOriginal + 40) {
				width = winWidth - 40;
			}

			options.width = width;
		},

		_setScreenSize: function() {
			var instance = this;

			var winWidth = window.innerWidth;

			var breakpoint = instance.options.breakpoint;

			var mobile = winWidth < breakpoint;

			instance.isMobile = mobile;
			instance.isDesktop = !mobile;
		},

		removeMinHeight: function(element) {
			var instance = this;

			var options = instance.options;

			var content = element.find(options.content).first();
			var navigation = element.find(options.navigation).first();

			var menu = element.find('.sidenav-menu').first();

			var els = content.add(navigation).add(menu);

			els.css('min-height', '');
		},

		removeWidth: function(element) { // rename to close sidenav or something
			var instance = this;

			var options = instance.options;

			var content = element.find(options.content).first();
			var navigation = element.find(options.navigation).first();

			var mobile = instance.isMobile;

			if (element.hasClass('sidenav-right')) {
				content.css({
					left: '',
					paddingRight: ''
				});

				var menu = element.find('.sidenav-menu').first();

				var el = menu;
				var val = options.width;

				if (mobile && options.typeMobile !== 'fixed-push') {
					el = content;
					val = '';
				}

				el.css('right', val);
			}
			else {
				var resetCssProp = mobile ? 'left' : 'padding-left';

				content.css(resetCssProp, '');
			}

			navigation.css('width', '');
		},

		setEqualHeight: function(container) {
			var instance = this;

			var options = instance.options;

			var content = options.content;
			var navigation = options.navigation;

			var gutter = toInt(options.gutter);
			var width = toInt(options.width);

			var type = instance.isMobile ? options.typeMobile : options.type;

			var notFixed = type !== 'fixed' && type !== 'fixed-push';

			if (notFixed) {
				container.each(function(index, node) {
					node = $(node);

					var containerClone = node.clone();

					containerClone.removeClass('closed').css({
						opacity: 0,
						position: 'absolute',
						width: node.outerWidth()
					});

					var containerCloneContent = containerClone.find(content).first();
					var containerCloneNavigation = containerClone.find(navigation).first();

					containerCloneNavigation.css('width', options.width);

					if (instance.isDesktop) {
						var paddingProp = containerClone.hasClass('sidenav-right') ? 'padding-right' : 'padding-left';

						containerCloneContent.css(paddingProp, width + gutter);
					}

					containerClone.insertBefore(node);

					var tallest = Math.max(containerCloneNavigation.outerHeight(), containerCloneContent.outerHeight());

					containerClone.remove();

					node.find(content).first().css('min-height', tallest);
					node.find(navigation).first().css('min-height', tallest);
					node.find('.sidenav-menu').first().css('min-height', tallest);
				});
			}
		},

		setSidenavLeftWidth: function(element, type, offset, width) {
			var instance = this;

			var contentCss = {};

			if (instance.isMobile) {
				var left = '';

				if (type === 'fixed-push') {
					left = width;
				}
				else if (type !== 'fixed') {
					left = offset;
				}

				contentCss.paddingLeft = '';
				contentCss.left = left;
			}
			else {
				contentCss.paddingLeft = offset;

				if (type === 'fixed-push') {
					contentCss.left = '';
				}
			}

			return contentCss;
		},

		setSidenavRightWidth: function(element, type, offset, width) {
			var instance = this;

			var contentCss = {};

			if (type === 'fixed' || type === 'fixed-push') {
				contentCss.left = '';
			}

			if (type === 'fixed-push') {
				contentCss.paddingRight = width;
				contentCss.right = '';
			}

			if (instance.isMobile) {
				if (type === 'fixed') {
					contentCss.paddingRight = '';
				}
				else if (type !== 'fixed-push') {
					contentCss.right = offset;
				}
			}
			else {
				if (type === 'fixed') {
					contentCss.right = '';
				}
				else if (type !== 'fixed-push') {
					contentCss.paddingRight = offset;
				}
			}

			return contentCss;
		},

		setWidth: function(element) {
			var instance = this;

			instance._resizeSidenav();

			var instance = this;

			var options = instance.options;

			var mobile = instance.isMobile;

			var type = mobile ? options.typeMobile : options.type;

			var content = element.find(options.content).first();
			var navigation = element.find(options.navigation).first();

			var menu = element.find('.sidenav-menu').first();

			var width = options.width;

			var offset = toInt(width) + toInt(options.gutter);

			var widthMethod = element.hasClass('sidenav-right') ? 'setSidenavRightWidth' : 'setSidenavLeftWidth';

			var contentCss = instance[widthMethod](element, type, offset, width);

			if (mobile) {
				menu.css('right', '');
			}

			content.css(contentCss);

			navigation.css('width', width);
			menu.css('width', width);
		},

		_focusElement: function(element) {
			// ios 8 fixed element disappears when trying to scroll
			element.focus();
		},

		toggleNavigation: function(container) {
			var instance = this;

			var menu = container.find('.sidenav-menu').first();

			var width = instance.options.width;

			var closed = container.hasClass('closed');

			var widthMethod = closed ? 'setWidth' : 'removeWidth';

			if (closed) {
				instance.setEqualHeight(container);

				menu.css('width', width);
			}

			instance._onSidenavTransitionEnd(container);

			setTimeout(function() {
				container.toggleClass('closed', !closed).addClass('sidenav-transition');

				if (closed && instance.isDesktop) {
					menu.css('right', '');
				}
				else if (!closed && instance.isMobile && container.hasClass('sidenav-right')) {
					menu.css('right', width);
				}

				instance[widthMethod](container);
			}, 0);
		}
	};

	var old = $.fn.sideNavigation;

	var Plugin = function(options) {
		return this.each(
			function () {
				var $this = $(this);

				var data = $this.data('lexicon.sidenav');

				if (!data) {
					$this.data('lexicon.sidenav', (data = new SideNavigation($this, typeof options === 'object' ? options : null)));
				}

				if (typeof option == 'string') {
					data[option].call($this);
				}
			}
		);
	};

	Plugin.noConflict = function() {
		$.fn.sideNavigation = old;

		return this;
	};

	Plugin.defaults = {
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

	Plugin.Constructor = SideNavigation;

	$.fn.sideNavigation = Plugin;
}(jQuery);