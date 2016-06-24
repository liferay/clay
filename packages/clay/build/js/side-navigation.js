/**
* Lexicon 1.0.4
*
* Copyright 2016, Liferay, Inc.
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
			var instance = this;

			var args = arguments;

			var later = function() {
				id = null;

				fn.apply(instance, args);
			};

			clearTimeout(id);

			id = setTimeout(later, delay);
		};
	};

	var getBreakpointRegion = function() {
		var screenXs = 480;
		var screenSm = 768;
		var screenMd = 992;
		var screenLg = 1200;

		var windowWidth = $(window).width();
		var region = '';

		if (windowWidth >= screenLg) {
			region = 'lg';
		}
		else if (windowWidth >= screenMd) {
			region = 'md';
		}
		else if (windowWidth >= screenSm) {
			region = 'sm';
		}
		else if (windowWidth >= screenXs) {
			region = 'xs';
		}
		else {
			region = 'xxs';
		}

		return region;
	};

	var guid = (function() {
		var counter = 0;

		return function(toggler, ns) {
			var strId = toggler.attr('id');

			if (!strId) {
				strId = (ns + counter++);

				toggler.attr('id', strId);
			}

			return strId;
		};
	}());

	var toInt = function(str) {
		return parseInt(str, 10) || 0;
	};

	var SideNavigation = function(toggler, options) {
		this.init(toggler, options);
	};

	SideNavigation.TRANSITION_DURATION = 500;

	SideNavigation.prototype = {
		init: function(toggler, options) {
			var instance = this;

			var useDataAttribute = toggler.data('toggle') === 'sidenav';

			options = $.extend({}, $.fn.sideNavigation.defaults, options);

			options.breakpoint = toInt(options.breakpoint);
			options.container = options.container || toggler.data('target') || toggler.attr('href');
			options.gutter = toInt(options.gutter);
			options.rtl = doc.attr('dir') === 'rtl';
			options.width = toInt(options.width);
			options.widthOriginal = options.width;

			// instantiate using data attribute

			if (useDataAttribute) {
				options.closedClass = toggler.data('closed-class') || 'closed';
				options.content = toggler.data('content');
				options.equalHeight = false;
				options.loadingIndicatorTPL = toggler.data('loading-indicator-tpl') || options.loadingIndicatorTPL;
				options.openClass = toggler.data('open-class') || 'open';
				options.toggler = toggler;
				options.type = toggler.data('type');
				options.typeMobile = toggler.data('type-mobile');
				options.url = toggler.data('url');
				options.useDelegate = toggler.data('use-delegate');
				options.width = '';

				if (options.useDelegate === undefined) {
					options.useDelegate = true;
				}
			}

			instance.toggler = toggler;
			instance.options = options;
			instance.useDataAttribute = useDataAttribute;

			instance._bindUI();
			instance._renderUI();
		},

		clearStyle: function(attribute) {
			var instance = this;

			var options = instance.options;

			var container = $(options.container);
			var content = container.find(options.content).first();
			var navigation = container.find(options.navigation).first();

			var menu = container.find('.sidenav-menu').first();

			var els = content.add(navigation).add(menu);

			els.css(attribute, '');
		},

		destroy: function() {
			var instance = this;

			var options = instance.options;

			var container = $(instance.options.container);

			// Detach sidenav close

			doc.off('click.close.lexicon.sidenav', instance.closeButtonSelector);
			doc.data(instance.dataCloseButtonSelector, null);

			// Detach toggler

			if (options.useDelegate) {
				doc.off('click.lexicon.sidenav', instance.togglerSelector);
				doc.data(instance.dataTogglerSelector, null);
			}
			else {
				container.off('click.lexicon.sidenav');
			}

			// Remove Side Navigation

			container.data('lexicon.sidenav', null);
		},

		hide: function() {
			var instance = this;

			if (instance.useDataAttribute) {
				instance.hideSimpleSidenav();
			}
			else {
				instance.toggleNavigation(false);
			}
		},

		hideSidenav: function() {
			var instance = this;
			var options = instance.options;

			var container = $(options.container);
			var content = container.find(options.content).first();
			var navigation = container.find(options.navigation).first();
			var menu = navigation.find('.sidenav-menu').first();

			var sidenavRight = instance._isSidenavRight();

			var positionDirection = options.rtl ? 'right' : 'left';

			if (sidenavRight) {
				positionDirection = options.rtl ? 'left' : 'right';
			}

			var paddingDirection = 'padding-' + positionDirection;

			content.css(paddingDirection, '').css(positionDirection, '');
			navigation.css('width', '');

			if (sidenavRight) {
				menu.css(positionDirection, instance._getSidenavWidth());
			}
		},

		hideSimpleSidenav: function() {
			var instance = this;

			var options = instance.options;

			var simpleSidenavClosed = instance._isSimpleSidenavClosed();

			if (!simpleSidenavClosed) {
				var content = $(options.content).first();
				var sidenav = $(options.container);

				var closedClass = options.closedClass;
				var openClass = options.openClass;

				var toggler = instance.toggler;

				sidenav.trigger({
					toggler: $(instance.togglerSelector),
					type: 'closedStart.lexicon.sidenav'
				});

				instance._onSidenavTransitionEnd(content, function() {
					sidenav.removeClass('sidenav-transition');
					toggler.removeClass('sidenav-transition');

					sidenav.trigger({
						toggler: $(instance.togglerSelector),
						type: 'closed.lexicon.sidenav'
					});
				});

				if (content.hasClass(openClass)) {
					content.addClass('sidenav-transition').addClass(closedClass).removeClass(openClass);
				}

				sidenav.addClass('sidenav-transition');
				toggler.addClass('sidenav-transition');

				sidenav.addClass(closedClass).removeClass(openClass);
				toggler.removeClass(openClass).removeClass('active');
			}
		},

		setEqualHeight: function() {
			var instance = this;

			var options = instance.options;

			if (options.equalHeight) {
				var container = $(options.container);

				var content = options.content;
				var navigation = options.navigation;

				var type = instance.mobile ? options.typeMobile : options.type;

				if (type !== 'fixed' && type !== 'fixed-push') {
					var contentNode = container.find(content).first();
					var navNode = container.find(navigation).first();
					var sideNavMenuNode = container.find('.sidenav-menu').first();

					var tallest = Math.max(contentNode.outerHeight(), navNode.outerHeight());

					contentNode.css('min-height', tallest);
					navNode.css('min-height', tallest);
					sideNavMenuNode.css('min-height', tallest);
				}
			}
		},

		show: function() {
			var instance = this;

			if (instance.useDataAttribute) {
				instance.showSimpleSidenav();
			}
			else {
				instance.toggleNavigation(true);
			}
		},

		showSidenav: function() {
			var instance = this;
			var mobile = instance.mobile;
			var options = instance.options;

			var container = $(options.container);
			var content = container.find(options.content).first();
			var navigation = container.find(options.navigation).first();
			var menu = navigation.find('.sidenav-menu').first();

			var sidenavRight = instance._isSidenavRight();
			var width = instance._getSidenavWidth();

			var offset = width + options.gutter;

			var url = options.url;

			if (url) {
				container.one(
					'urlLoaded.lexicon.sidenav',
					function(event) {
						instance.setEqualHeight();
					}
				);

				instance._loadUrl(menu, url, container);
			}

			var positionDirection = options.rtl ? 'right' : 'left';

			if (sidenavRight) {
				positionDirection = options.rtl ? 'left' : 'right';
			}

			var paddingDirection = 'padding-' + positionDirection;

			var pushContentCssProperty = mobile ? positionDirection : paddingDirection;
			var type = mobile ? options.typeMobile : options.type;

			if (type !== 'fixed') {
				content.css(pushContentCssProperty, offset);
			}

			navigation.css('width', width);
			menu.css('width', width);
		},

		showSimpleSidenav: function() {
			var instance = this;

			var options = instance.options;

			var simpleSidenavClosed = instance._isSimpleSidenavClosed();

			if (simpleSidenavClosed) {
				var content = $(options.content).first();
				var sidenav = $(options.container);

				var closedClass = options.closedClass;
				var openClass = options.openClass;

				var toggler = options.toggler;

				var url = toggler.data('url');

				if (url) {
					instance._loadUrl(sidenav, url);
				}

				var desktopFixedPush = instance._getSimpleSidenavType() === 'desktop-fixed-push';
				var mobileFixedPush = instance._getSimpleSidenavType() === 'mobile-fixed-push';

				sidenav.trigger({
					toggler: $(instance.togglerSelector),
					type: 'openStart.lexicon.sidenav'
				});

				instance._onSidenavTransitionEnd(content, function() {
					sidenav.removeClass('sidenav-transition');
					toggler.removeClass('sidenav-transition');

					sidenav.trigger({
						toggler: $(instance.togglerSelector),
						type: 'open.lexicon.sidenav'
					});
				});

				sidenav.addClass('sidenav-transition');
				toggler.addClass('sidenav-transition');

				if (desktopFixedPush || mobileFixedPush) {
					content.addClass('sidenav-transition').addClass(openClass).removeClass(closedClass);
				}

				sidenav.addClass(openClass).removeClass(closedClass);
				toggler.addClass('active').addClass(openClass);
			}
		},

		toggle: function() {
			var instance = this;

			if (instance.useDataAttribute) {
				instance.toggleSimpleSidenav();
			}
			else {
				instance.toggleNavigation();
			}
		},

		toggleNavigation: function(force) {
			var instance = this;
			var options = instance.options;

			var container = $(options.container);
			var menu = container.find('.sidenav-menu').first();
			var toggler = instance.toggler;

			var width = options.width;

			var closed = $.type(force) === 'boolean' ? force : container.hasClass('closed');
			var sidenavRight = instance._isSidenavRight();

			var widthMethod = closed ? 'showSidenav' : 'hideSidenav';

			if (closed) {
				container.trigger({
					toggler: toggler,
					type: 'openStart.lexicon.sidenav'
				});
			}
			else {
				container.trigger({
					toggler: toggler,
					type: 'closedStart.lexicon.sidenav'
				});
			}

			instance._onSidenavTransitionEnd(container, function() {
				var menu = container.find('.sidenav-menu').first();

				if (container.hasClass('closed')) {
					instance.clearStyle('min-height');

					toggler.removeClass('open').removeClass('sidenav-transition');

					container.trigger({
						toggler: toggler,
						type: 'closed.lexicon.sidenav'
					});
				}
				else {
					toggler.addClass('open').removeClass('sidenav-transition');

					container.trigger({
						toggler: toggler,
						type: 'open.lexicon.sidenav'
					});
				}

				if (instance.mobile) {
					instance._focusElement(menu);
				}
			});

			if (closed) {
				instance.setEqualHeight();

				menu.css('width', width);

				var positionDirection = options.rtl ? 'left' : 'right';

				if (sidenavRight) {
					menu.css(positionDirection, '');
				}
			}

			container.addClass('sidenav-transition');
			toggler.addClass('sidenav-transition');

			instance[widthMethod](container);

			container.toggleClass('closed', !closed).toggleClass('open', closed);
			toggler.toggleClass('active', closed).toggleClass('open', closed);
		},

		toggleSimpleSidenav: function() {
			var instance = this;

			var simpleSidenavClosed = instance._isSimpleSidenavClosed();

			if (simpleSidenavClosed) {
				instance.showSimpleSidenav();
			}
			else {
				instance.hideSimpleSidenav();
			}
		},

		visible: function() {
			var instance = this;

			var closed;

			if (instance.useDataAttribute) {
				closed = instance._isSimpleSidenavClosed();
			}
			else {
				var container = $(instance.options.container);

				closed = container.hasClass('sidenav-transition') ? !container.hasClass('closed') : container.hasClass('closed');
			}

			return !closed;
		},

		_bindUI: function() {
			var instance = this;

			if (!instance.useDataAttribute) {
				addResizeListener();
				instance._onScreenChange();
			}

			if (instance.options.useDelegate) {
				instance._onDelegateClickTrigger();
			}
			else {
				instance._onClickTrigger();
			}

			instance._onClickSidenavClose();
		},

		_focusElement: function(el) {

			// ios 8 fixed element disappears when trying to scroll

			el.focus();
		},

		_getSidenavWidth: function() {
			var instance = this;

			var options = instance.options;

			var widthOriginal = options.widthOriginal;

			var width = widthOriginal;
			var winWidth = window.innerWidth;

			if (winWidth < widthOriginal + 40) {
				width = winWidth - 40;
			}

			return width;
		},

		_getSimpleSidenavType: function() {
			var instance = this;

			var options = instance.options;

			var desktop = instance._isDesktop();
			var type = options.type;
			var typeMobile = options.typeMobile;

			if (desktop && (type === 'fixed-push')) {
				return 'desktop-fixed-push';
			}
			else if (!desktop && (typeMobile === 'fixed-push')) {
				return 'mobile-fixed-push';
			}

			return 'fixed';
		},

		_isDesktop: function() {
			return window.innerWidth >= this.options.breakpoint;
		},

		_isSidenavRight: function() {
			var instance = this;
			var options = instance.options;

			var container = $(options.container);
			var isSidenavRight = container.hasClass('sidenav-right');

			return isSidenavRight;
		},

		_isSimpleSidenavClosed: function() {
			var instance = this;
			var options = instance.options;

			var openClass = options.openClass;

			var container = $(options.container);

			return !container.hasClass(openClass);
		},

		_loadUrl: function(sidenav, url, eventTarget) {
			var instance = this;

			var urlLoaded = sidenav.data('url-loaded');

			var readyState = urlLoaded ? urlLoaded.readyState : 0;

			eventTarget = eventTarget || sidenav;

			var sidebarBody = sidenav.find('.sidebar-body').first();

			if (!readyState && sidebarBody.length && (typeof url === 'string' || $.isPlainObject(url))) {
				sidebarBody.append('<div class="sidenav-loading">' + instance.options.loadingIndicatorTPL + '</div>');

				urlLoaded = $.ajax(url).done(
					function(response) {
						sidebarBody.append(response);

						eventTarget.trigger('urlLoaded.lexicon.sidenav');

						sidebarBody.find('.sidenav-loading').remove();
					}
				);

				sidenav.data('url-loaded', urlLoaded);
			}

			return urlLoaded;
		},

		_onClickSidenavClose: function() {
			var instance = this;

			var options = instance.options;

			var container = $(options.container);
			var containerSelector = options.container;

			var closeButton = $(containerSelector).find('.sidenav-close').first();
			var closeButtonSelector = '#' + guid(closeButton, 'generatedLexiconSidenavCloseId');
			var dataCloseButtonSelector = 'lexicon.' + closeButtonSelector;

			if (!doc.data(dataCloseButtonSelector)) {
				doc.data(dataCloseButtonSelector, 'true');

				doc.on('click.close.lexicon.sidenav', closeButtonSelector, function(event) {
					event.preventDefault();

					instance.toggle();
				});
			}

			instance.closeButtonSelector = closeButtonSelector;
			instance.dataCloseButtonSelector = dataCloseButtonSelector;
		},

		_onClickTrigger: function() {
			var instance = this;

			var el = instance.toggler;

			el.on(
				'click.lexicon.sidenav',
				function(event) {
					instance.toggle();
				}
			);
		},

		_onDelegateClickTrigger: function() {
			var instance = this;

			var toggler = instance.toggler;

			var togglerSelector = '#' + guid(toggler, 'generatedLexiconSidenavTogglerId');

			var dataTogglerSelector = 'lexicon.' + togglerSelector;

			if (!doc.data(dataTogglerSelector)) {
				doc.data(dataTogglerSelector, 'true');

				doc.on(
					'click.lexicon.sidenav',
					togglerSelector,
					function(event) {
						instance.toggle();

						event.preventDefault();
					}
				);
			}

			instance.togglerSelector = togglerSelector;
			instance.dataTogglerSelector = dataTogglerSelector;
		},

		_onScreenChange: function() {
			var instance = this;
			var options = instance.options;

			var container = $(options.container);
			var toggler = instance.toggler;

			var screenStartDesktop = instance._setScreenSize();

			doc.on('screenChange.lexicon.sidenav', function(event) {
				var desktop = instance._setScreenSize();
				var sidenavRight = instance._isSidenavRight();
				var type = desktop ? options.type : options.typeMobile;

				var fixedMenu = type === 'fixed' || type === 'fixed-push';

				var menu = container.find('.sidenav-menu').first();
				var navigation = container.find(options.navigation).first();

				var menuWidth;

				var originalMenuWidth = options.widthOriginal;

				var positionDirection = options.rtl ? 'left' : 'right';

				container.toggleClass('sidenav-fixed', fixedMenu);

				if ((!desktop && screenStartDesktop) || (desktop && !screenStartDesktop)) {
					instance.hideSidenav();
					instance.clearStyle('min-height');

					container.addClass('closed').removeClass('open');
					toggler.removeClass('active').removeClass('open');

					screenStartDesktop = false;

					if (desktop) {
						if (sidenavRight) {
							menu.css(positionDirection, originalMenuWidth).css('width', originalMenuWidth);
						}

						screenStartDesktop = true;
					}
				}

				var closed = container.hasClass('closed');

				if (!desktop) {
					menuWidth = originalMenuWidth;

					if (window.innerWidth <= originalMenuWidth) {
						menuWidth = window.innerWidth - options.gutter - 25;
					}

					if (sidenavRight) {
						if (closed) {
							menu.css(positionDirection, menuWidth);
						}

						menu.css('width', menuWidth);
					}

					screenStartDesktop = false;
				}

				if (!closed) {
					instance.clearStyle('min-height');
					instance.showSidenav();
					instance.setEqualHeight();
				}
			});
		},

		_onSidenavTransitionEnd: function(el, fn) {
			var instance = this;

			var transitionEnd = 'bsTransitionEnd';

			var complete = function() {
				el.removeClass('sidenav-transition');

				if (fn) {
					fn();
				}
			};

			if (!$.support.transition) {
				complete.call(instance);
			}
			else {
				el.one(transitionEnd, function(event) {
					complete();
				})
				.emulateTransitionEnd(SideNavigation.TRANSITION_DURATION);
			}
		},

		_renderNav: function() {
			var instance = this;
			var options = instance.options;

			var container = $(options.container);
			var slider = container.find(options.navigation).first();
			var menu = slider.find('.sidenav-menu').first();

			var closed = container.hasClass('closed');
			var sidenavRight = instance._isSidenavRight();
			var width = instance._getSidenavWidth();

			if (closed) {
				menu.css('width', width);

				if (sidenavRight) {
					var positionDirection = options.rtl ? 'left' : 'right';

					menu.css(positionDirection, width);
				}
			}
			else {
				instance.showSidenav();
				instance.setEqualHeight();
			}

			container.removeClass('sidenav-js-fouc');
		},

		_renderUI: function() {
			var instance = this;
			var options = instance.options;

			var container = $(options.container);
			var toggler = instance.toggler;

			var mobile = instance.mobile;
			var type = mobile ? options.typeMobile : options.type;

			if (!instance.useDataAttribute) {
				if (mobile) {
					container.addClass('closed').removeClass('open');
					toggler.removeClass('active').removeClass('open');
				}

				if (options.position === 'right') {
					container.addClass('sidenav-right');
				}

				if (type !== 'relative') {
					container.addClass('sidenav-fixed');
				}

				instance._renderNav();
			}
		},

		_setScreenSize: function() {
			var instance = this;

			var screenSize = getBreakpointRegion();

			var desktop = screenSize === 'sm' || screenSize === 'md' || screenSize === 'lg';

			instance.mobile = !desktop;
			instance.desktop = desktop;

			return desktop;
		}
	};

	var old = $.fn.sideNavigation;

	var initialize = function(toggler, options, selector) {
		var data = toggler.data('lexicon.sidenav');

		if (!data) {
			if (!options) {
				options = {};
			}

			options.selector = selector;

			data = new SideNavigation(toggler, options);

			toggler.data('lexicon.sidenav', data);
		}

		return data;
	};

	var Plugin = function(options) {
		var instance = this;

		var selector = instance.selector;

		var retVal = instance;
		var methodCall = typeof options === 'string';
		var returnInstance = options === 'instance';
		var args = $.makeArray(arguments).slice(1);

		if (methodCall) {
			this.each(
				function() {
					var $this = $(this);

					var data = $this.data('lexicon.sidenav');

					if (data) {
						if (returnInstance) {
							retVal = data;

							return false;
						}

						var methodRetVal;

						if ($.isFunction(data[options]) && options.indexOf('_') !== 0) {
							methodRetVal = data[options].apply(data, args);
						}

						if (methodRetVal !== data && methodRetVal !== undefined) {
							if (methodRetVal.jquery) {
								retVal = retVal.pushStack(methodRetVal.get());
							}
							else {
								retVal = methodRetVal;
							}

							return false;
						}
					}
					else if (returnInstance) {
						retVal = null;

						return false;
					}
				}
			);
		}
		else {
			this.each(
				function() {
					initialize($(this), options, selector);
				}
			);
		}

		return retVal;
	};

	Plugin.noConflict = function() {
		$.fn.sideNavigation = old;

		return this;
	};

	/**
	 * Plugin options
	 * @property {String|Number}  breakpoint  The window width that defines the desktop size.
	 * @property {String}         content     The class or ID of the content container.
	 * @property {String}         container    The class or ID of the sidenav container.
	 * @property {String|Number}  gutter      The space between the sidenav-slider and the sidenav-content.
	 * @property {String|Boolean} equalHeight The height of content and navigation should be equal.
	 * @property {String}         navigation  The class or ID of the navigation container.
	 * @property {String}         position    The position of the sidenav-slider. Possible values: left, right
	 * @property {String}         type        The type of sidenav in desktop. Possible values: relative, fixed, fixed-push
	 * @property {String}         typeMobile  The type of sidenav in mobile. Possible values: relative, fixed, fixed-push
	 * @property {String|Boolean} useDelegate The type of reference to use on the toggler event handler. Value false, directly binds click to the toggler.
	 * @property {String|Object}  url         The URL or $.ajax config object to fetch the content to inject into .sidebar-body
	 * @property {String|Number}  width       The width of the side navigation.
	 */

	Plugin.defaults = {
		breakpoint: 768,
		content: '.sidenav-content',
		equalHeight: true,
		gutter: '15px',
		loadingIndicatorTPL: '<div class="loading-animation loading-animation-md"></div>',
		navigation: '.sidenav-menu-slider',
		position: 'left',
		type: 'relative',
		typeMobile: 'relative',
		url: null,
		useDelegate: true,
		width: '225px'
	};

	Plugin.Constructor = SideNavigation;

	$.fn.sideNavigation = Plugin;

	$(function() {
		var sidenav = $('[data-toggle="sidenav"]');

		Plugin.call(sidenav);
	});
}(jQuery);