+function($) {
	var doc = $(document);

	var listenerAdded = false;

	// Make sure we only add one resize listener to the page,
	// no matter how many components we have
	var addResizeListener = function() {
		if (!listenerAdded) {
			$(window).on(
				'resize',
				debounce(
					function(event) {
						doc.trigger('screenChange.lexicon.sidenav');
					},
					150
				)
			);

			listenerAdded = true;
		}
	};

	var debounce = function(fn, delay) {
		var id;

		return function() {
			var args = arguments;
			var context = this;

			var later = function() {
				id = null;

				fn.apply(context, args);
			};

			clearTimeout(id);

			id = setTimeout(later, delay);
		};
	};

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

		clearStyle: function(element, attribute) {
			var instance = this;

			var options = instance.options;

			var content = element.find(options.content).first();
			var navigation = element.find(options.navigation).first();

			var menu = element.find('.sidenav-menu').first();

			var els = content.add(navigation).add(menu);

			els.css(attribute, '');
		},

		getSidenavLeftWidth: function(element, type, offset, width) {
			var instance = this;

			var contentCss = {};

			if (instance.mobile) {
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

		getSidenavRightWidth: function(element, type, offset, width) {
			var instance = this;

			var contentCss = {};

			if (type === 'fixed' || type === 'fixed-push') {
				contentCss.left = '';
			}

			if (type === 'fixed-push') {
				contentCss.paddingRight = width;
				contentCss.right = '';
			}

			if (instance.mobile) {
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

		hideSidenav: function(element) {
			var instance = this;

			var options = instance.options;

			var content = element.find(options.content).first();
			var navigation = element.find(options.navigation).first();

			var mobile = instance.mobile;

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

			if (instance.equalHeight) {
				var options = instance.options;

				var content = options.content;
				var navigation = options.navigation;

				var type = instance.mobile ? options.typeMobile : options.type;

				if (type !== 'fixed' && type !== 'fixed-push') {
					container.each(function(index, node) {
						node = $(node);

						var contentNode = node.find(content).first();
						var navNode = node.find(navigation).first();
						var sideNavMenuNode = node.find('.sidenav-menu').first();

						var tallest = Math.max(contentNode.outerHeight(), navNode.outerHeight());

						contentNode.css('min-height', tallest);
						navNode.css('min-height', tallest);
						sideNavMenuNode.css('min-height', tallest);
					});
				}
			}
		},

		showSidenav: function(element) {
			var instance = this;

			instance._resizeSidenav();

			var options = instance.options;

			var mobile = instance.mobile;

			var type = mobile ? options.typeMobile : options.type;

			var content = element.find(options.content).first();
			var navigation = element.find(options.navigation).first();

			var menu = element.find('.sidenav-menu').first();

			var width = options.width;

			var offset = toInt(width) + toInt(options.gutter);

			var widthMethod = element.hasClass('sidenav-right') ? 'getSidenavRightWidth' : 'getSidenavLeftWidth';

			var contentCss = instance[widthMethod](element, type, offset, width);

			if (mobile) {
				menu.css('right', '');
			}

			content.css(contentCss);

			navigation.css('width', width);
			menu.css('width', width);
		},

		toggleNavigation: function(container) {
			var instance = this;

			var menu = container.find('.sidenav-menu').first();

			var width = instance.options.width;

			var closed = container.hasClass('closed');

			var widthMethod = closed ? 'showSidenav' : 'hideSidenav';

			if (closed) {
				instance.setEqualHeight(container);

				menu.css('width', width);

				if (container.hasClass('sidenav-right') && container.hasClass('sidenav-fixed')) {
					menu.css('right', width);
				}
			}

			instance._onSidenavTransitionEnd(container);

			setTimeout(function() {
				container.toggleClass('closed', !closed).addClass('sidenav-transition');

				if (closed && instance.desktop) {
					menu.css('right', '');
				}
				else if (!closed && instance.mobile && container.hasClass('sidenav-right')) {
					menu.css('right', width);
				}

				instance[widthMethod](container);
			}, 0);
		},

		_bindUI: function(element) {
			var instance = this;

			addResizeListener();

			instance._onClickTrigger(element);
			instance._onClickSidenavClose(element);
			instance._onScreenChange(element);
		},

		_focusElement: function(element) {
			// ios 8 fixed element disappears when trying to scroll
			element.focus();
		},

		_onClickSidenavClose: function(element) {
			var instance = this;

			var closeButton = element.find('.sidenav-close').first();

			closeButton.on('click.lexicon.sidenav', function(event) {
				var container = $(this).closest('.sidenav-container');

				event.preventDefault();

				instance.toggleNavigation(container);
			});
		},

		_onClickTrigger: function(element) {
			var instance = this;

			var container = element;
			var toggler = element.toggler;

			toggler.on('click.lexicon.sidenav', function(event) {
				var $this = $(this);

				var selector = $this.closest(instance.options.selector);

				if (selector.length) {
					container = selector;
				}

				event.preventDefault();

				instance.toggleNavigation(container);
			});
		},

		_onScreenChange: function(element) {
			var instance = this;

			var breakpoint = toInt(instance.options.breakpoint);

			instance._setScreenSize();

			doc.on('screenChange.lexicon.sidenav', function(event, winWidth) {
				instance._setScreenSize();

				var type = desktop ? instance.options.type : instance.options.typeMobile;

				var fixedMenu = type === 'fixed' || type === 'fixed-push';

				element.toggleClass('sidenav-fixed', fixedMenu);

				if (!desktop && fixedMenu) {
					instance.hideSidenav(element);

					setTimeout(function() {
						element.addClass('closed');

						instance.clearStyle(element, 'width');
					}, 0);
				}

				element.each(function(index, node) {
					node = $(node);

					if (!node.hasClass('closed')) {
						instance.clearStyle(node, 'min-height');
						instance.setEqualHeight(node);
						instance.showSidenav(node);
					}
				});
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
					instance.clearStyle($this, 'min-height');
				}

				if (instance.mobile) {
					instance._focusElement(menu);
				}

				$this.off(transitions);
			});
		},

		_renderNav: function(element) {
			var instance = this;

			instance._resizeSidenav();

			var width = instance.options.width;

			element.each(function(index, node) {
				node = $(node);

				var menu = node.find('.sidenav-menu').first();

				if (node.hasClass('closed') && node.hasClass('sidenav-right')) {
					menu.css({
						right: width,
						width: width
					});
				}

				if (!node.hasClass('closed')) {
					instance.setEqualHeight(node);
					instance.showSidenav(node);
				}
			});
		},

		_renderUI: function(element) {
			var instance = this;

			var mobile = instance.mobile;
			var options = instance.options;

			var type = mobile ? options.typeMobile : options.type;

			if (options.position === 'right') {
				element.addClass('sidenav-right');
			}

			if (type === 'fixed' || type === 'fixed-push') {
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

			var width = widthOriginal;
			var winWidth = window.innerWidth;

			if (winWidth < widthOriginal + 40) {
				width = winWidth - 40;
			}

			options.width = width;
		},

		_setScreenSize: function() {
			var instance = this;

			var desktop = window.innerWidth >= toInt(instance.options.breakpoint);

			instance.mobile = !desktop;
			instance.desktop = desktop;
		},
	};

	var old = $.fn.sideNavigation;

	var Plugin = function(options) {
		return this.each(
			function() {
				var $this = $(this);

				var data = $this.data('lexicon.sidenav');

				if (!data) {
					data = new SideNavigation($this, typeof options === 'object' ? options : null);

					$this.data('lexicon.sidenav', data);
				}

				if (typeof options === 'string') {
					data[options].call($this);
				}
			}
		);
	};

	Plugin.noConflict = function() {
		$.fn.sideNavigation = old;

		return this;
	};

	/**
	 * Plugin options
	 * @property {String|Number}  breakpoint  The window width that defines the desktop size.
	 * @property {String}         content     The class or ID of the content container.
	 * @property {String|Number}  gutter      The space between the sidenav-slider and the sidenav-content.
	 * @property {String|Boolean} equalHeight The height of content and navigation should be equal.
	 * @property {String}         navigation  The class or ID of the navigation container.
	 * @property {String}         position    The position of the sidenav-slider. Possible values: left, right
	 * @property {String}         toggler     The class or ID of the toggle button.
	 * @property {String}         type        The type of sidenav in desktop. Possible values: relative, fixed, fixed-push
	 * @property {String}         typeMobile  The type of sidenav in mobile. Possible values: relative, fixed, fixed-push
	 * @property {String|Number}  width       The width of the side navigation.
	 */

	Plugin.defaults = {
		breakpoint: 768,
		content: '.sidenav-content',
		gutter: '15px',
		equalHeight: true,
		navigation: '.sidenav-menu-slider',
		position: 'left',
		toggler: '.sidenav-toggler',
		type: 'relative',
		typeMobile: 'relative',
		width: '225px'
	};

	Plugin.Constructor = SideNavigation;

	$.fn.sideNavigation = Plugin;
}(jQuery);