/**
* Lexicon 0.1.25
*
* Copyright 2015, Liferay, Inc.
* All rights reserved.
* MIT license
*/
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

			var toggler;

			var useDataAttribute = element.data('toggle') === 'sidenav';

			options = $.extend({}, $.fn.sideNavigation.defaults, options);
			options.transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
			options.widthOriginal = options.width;

			instance.useDataAttribute = useDataAttribute;

			if (useDataAttribute) { // instantiate using data attribute
				toggler = element;

				options.content = element.data('content');
				options.equalHeight = false;
				options.openClass = element.data('open-class') || 'open';
				options.target = element.data('target');
				options.toggler = element;
				options.type = element.data('type');
				options.typeMobile = element.data('type-mobile');
				options.useDelegate = element.data('use-delegate') || false;
				options.width = '';
			}
			else { // find toggler
				toggler = element.find(options.toggler);

				if (!toggler.length) {
					toggler = element.closest('body').find(options.toggler).first();
				}
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
				else if (type === 'fixed') {
					contentCss.paddingLeft = '';
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
			else if (type === 'fixed') {
				contentCss.right = '';
			}
			else if (type !== 'fixed-push') {
				contentCss.paddingRight = offset;
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

			if (instance.options.equalHeight) {
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
			var toggler = $(instance.options.toggler);

			var width = instance.options.width;

			var closed = container.hasClass('closed');

			var widthMethod = closed ? 'showSidenav' : 'hideSidenav';

			if (closed) {
				setTimeout(function() {
					instance.setEqualHeight(container);
				}, 0);

				menu.css('width', width);

				if (container.hasClass('sidenav-right') && container.hasClass('sidenav-fixed')) {
					menu.css('right', width);
				}
			}

			instance._onSidenavTransitionEnd(container, function() {
				var menu = container.find('.sidenav-menu').first();

				if (container.hasClass('closed')) {
					instance.clearStyle(container, 'min-height');

					instance._removeBodyFixed();

					toggler.removeClass('open').removeClass('sidenav-transition');

					container.trigger('closed.lexicon.sidenav');
				}
				else {
					toggler.addClass('open').removeClass('sidenav-transition');

					container.trigger('open.lexicon.sidenav');
				}

				if (instance.mobile) {
					instance._focusElement(menu);
				}
			});

			container.addClass('sidenav-transition');
			toggler.addClass('sidenav-transition');

			setTimeout(function() {
				container.toggleClass('closed', !closed);

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

			if (!instance.useDataAttribute) {
				addResizeListener();
				instance._onScreenChange(element);
			}

			if (instance.options.useDelegate) {
				instance._onDelegateClickTrigger(element);
			}
			else {
				instance._onClickTrigger(element);
			}

			instance._onClickSidenavClose(element);
		},

		_focusElement: function(element) {
			// ios 8 fixed element disappears when trying to scroll
			element.focus();
		},

		_onClickSidenavClose: function(element) {
			var instance = this;

			var closeButton = element.find('.sidenav-close').first();
			var container = instance.options.target ? $(instance.options.target) : doc.find(element.attr('href'));

			if (instance.useDataAttribute) {
				closeButton = container.find('.sidenav-close');
			}

			closeButton.on('click.lexicon.sidenav', function(event) {
				event.preventDefault();

				if (instance.useDataAttribute) {
					instance._toggleSimpleSidenav(element);
				}
				else {
					instance.toggleNavigation(element);
				}
			});
		},

		_onClickTrigger: function(element) {
			var instance = this;

			var togglerFn;

			var el = element;

			if (instance.useDataAttribute) {
				togglerFn = function(event) {
					event.preventDefault();

					instance._toggleSimpleSidenav(element);
				};
			}
			else {
				el = element.toggler;

				togglerFn = function(event) {
					var $this = $(this);

					var selector = $this.closest(instance.options.selector);

					var container = selector.length ? selector : element;

					event.preventDefault();

					instance.toggleNavigation(container);
				};
			}

			el.on('click.lexicon.sidenav', togglerFn);
		},

		_onDelegateClickTrigger: function(element) {
			var instance = this;

			var togglerFn;
			var togglerSelector;

			var options = instance.options;

			if (instance.useDataAttribute) {
				togglerSelector = options.target ? '[data-target="' + options.target + '"]' : '[href="' + element.attr('href') + '"]';

				togglerFn = function(event) {
					event.preventDefault();

					instance._toggleSimpleSidenav(element);
				};
			}
			else {
				var toggler = options.toggler;

				if (toggler === '.sidenav-toggler') {
					togglerSelector = options.selector + ' ' + toggler;
				}
				else {
					togglerSelector = toggler;
				}

				togglerFn = function(event) {
					var $this = $(this);

					var selector = $this.closest(options.selector);

					var container = selector.length ? selector : element;

					event.preventDefault();

					instance.toggleNavigation(container);
				};
			}

			var dataTogglerSelector = 'lexicon.' + togglerSelector;

			if (!doc.data(dataTogglerSelector)) {
				doc.data(dataTogglerSelector, 'true');

				doc.on('click.lexicon.sidenav', togglerSelector, togglerFn);
			}
		},

		_onScreenChange: function(element) {
			var instance = this;

			instance._setScreenSize();

			doc.on('screenChange.lexicon.sidenav', function(event, winWidth) {
				instance._setScreenSize();

				var desktop = window.innerWidth >= toInt(instance.options.breakpoint);

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
						instance.showSidenav(node);
						instance.setEqualHeight(node);
					}
				});
			});
		},

		_onSidenavTransitionEnd: function(element, func) {
			var instance = this;

			var transitionEnd = instance.options.transitionEnd;

			element.on(transitionEnd, function(event) {
				var $this = $(this);

				if ($(event.target).is(instance.options.navigation)) {
					$this.removeClass('sidenav-transition');

					if (func) {
						func();
					}

					$this.off(transitionEnd);
				}
			});
		},

		_removeBodyFixed: function() {
			var instance = this;

			var body = $('body');

			body.removeClass('body-fixed');
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
					instance.showSidenav(node);
					instance.setEqualHeight(node);
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

			if (type === 'fixed' || type === 'fixed-push' && !instance.useDataAttribute) {
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

		_toggleSimpleSidenav: function(element) {
			var instance = this;

			var container = instance.options.target ? $(instance.options.target) : doc.find(element.attr('href'));
			var content = $(instance.options.content).first();
			var openClass = instance.options.openClass;
			var toggler = instance.options.toggler;
			var type = instance.options.type;
			var typeMobile = instance.options.typeMobile;

			var desktop = window.innerWidth >= toInt(instance.options.breakpoint);
			var desktopFixedPush = desktop && (type === 'fixed-push');
			var mobileFixedPush = !desktop && (typeMobile === 'fixed-push');

			container.addClass('sidenav-transition');
			toggler.addClass('sidenav-transition');

			if (container.hasClass('closed')) {
				if (!desktop) {
					$('body').addClass('body-fixed');
				}

				if (desktopFixedPush || mobileFixedPush) {
					instance._onSidenavTransitionEnd(content, function() {
						container.removeClass('sidenav-transition');
						toggler.removeClass('sidenav-transition');

						container.trigger('open.lexicon.sidenav');
					});

					content.addClass('sidenav-transition');
				}

				container.removeClass('closed');
				content.addClass(openClass);
				toggler.addClass(openClass);
			}
			else {
				if (desktopFixedPush || mobileFixedPush) {
					instance._onSidenavTransitionEnd(content, function() {
						instance._removeBodyFixed();

						container.removeClass('sidenav-transition');
						toggler.removeClass('sidenav-transition');

						container.trigger('closed.lexicon.sidenav');
					});

					content.addClass('sidenav-transition');
				}
				else {
					instance._removeBodyFixed();
				}

				container.addClass('closed');
				content.removeClass(openClass);
				toggler.removeClass(openClass);
			}
		}
	};

	var old = $.fn.sideNavigation;

	var Plugin = function(options) {
		var selector = this.selector;

		return this.each(
			function() {
				var $this = $(this);

				var data = $this.data('lexicon.sidenav');

				if (!data) {
					if (!options) {
						options = {};
					}

					options.selector = selector;

					data = new SideNavigation($this, options);

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
	 * @property {String|Boolean} useDelegate The type of reference to use on the toggler event handler. Value false, directly binds click to the toggler.
	 * @property {String|Number}  width       The width of the side navigation.
	 */

	Plugin.defaults = {
		breakpoint: 768,
		content: '.sidenav-content',
		equalHeight: true,
		gutter: '15px',
		navigation: '.sidenav-menu-slider',
		position: 'left',
		toggler: '.sidenav-toggler',
		type: 'relative',
		typeMobile: 'relative',
		useDelegate: true,
		width: '225px'
	};

	Plugin.Constructor = SideNavigation;

	$.fn.sideNavigation = Plugin;
}(jQuery);