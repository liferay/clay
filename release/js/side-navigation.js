/**
* Lexicon 0.2.2
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

	var guid = (function() {
			var counter = 0;

			return function(element, ns) {
				var strId = element.attr('id');

				if (!strId) {
					strId = (ns + counter++);

					element.attr('id', strId);
				}

				return strId;
			};
	}());

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

			instance.element = element;
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
				options.url = element.data('url');
				options.useDelegate = element.data('use-delegate');
				options.width = '';

				if (options.useDelegate === undefined) {
					options.useDelegate = true;
				}
			}
			else { // find toggler
				toggler = element.find(options.toggler);

				if (!toggler.length) {
					toggler = element.closest('body').find(options.toggler).first();
				}
			}

			element.toggler = toggler;

			instance.options = options;

			instance._bindUI();
			instance._renderUI();
		},

		clearStyle: function(attribute) {
			var instance = this;

			var element = instance.element;
			var options = instance.options;

			var content = element.find(options.content).first();
			var navigation = element.find(options.navigation).first();

			var menu = element.find('.sidenav-menu').first();

			var els = content.add(navigation).add(menu);

			els.css(attribute, '');
		},

		destroy: function() {
			var instance = this;
			var element = instance.element;
			var options = instance.options;

			// Detach sidenav close

			doc.off('click.close.lexicon.sidenav', instance.closeButtonSelector);
			doc.data(instance.dataCloseButtonSelector, null);

			// Detach toggler

			if (options.useDelegate) {
				doc.off('click.lexicon.sidenav', instance.togglerSelector);
				doc.data(instance.dataTogglerSelector, null);
			}
			else {
				element.off('click.lexicon.sidenav');
			}

			// Remove Side Navigation

			element.data('lexicon.sidenav', null);
		},

		getSidenavLeftWidth: function(type, offset, width) {
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

		getSidenavRightWidth: function(type, offset, width) {
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

			var element = instance.element;

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

		hideSimpleSidenav: function() {
			var instance = this;

			var simpleSidenavClosed = instance._isSimpleSidenavClosed();

			if (!simpleSidenavClosed) {
				var content = instance._getSimpleSidenavContent();
				var sidenav = instance._getSimpleSidenavNavigation();

				var openClass = instance.options.openClass;

				var toggler = instance.options.toggler;

				sidenav.trigger({
					toggler: $(instance.togglerSelector),
					type: 'closedStart.lexicon.sidenav'
				});

				instance._onSidenavTransitionEnd(content, function() {
					instance._removeBodyFixed();

					sidenav.removeClass('sidenav-transition');
					toggler.removeClass('sidenav-transition');

					sidenav.trigger({
						toggler: $(instance.togglerSelector),
						type: 'closed.lexicon.sidenav'
					});
				});

				content.addClass('sidenav-transition');
				sidenav.addClass('sidenav-transition closed');
				toggler.addClass('sidenav-transition');

				content.removeClass(openClass);
				toggler.removeClass(openClass).removeClass('active');
			}
		},

		setEqualHeight: function() {
			var instance = this;

			if (instance.options.equalHeight) {
				var element = instance.element;
				var options = instance.options;

				var content = options.content;
				var navigation = options.navigation;

				var type = instance.mobile ? options.typeMobile : options.type;

				if (type !== 'fixed' && type !== 'fixed-push') {
					var contentNode = element.find(content).first();
					var navNode = element.find(navigation).first();
					var sideNavMenuNode = element.find('.sidenav-menu').first();

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

			instance._resizeSidenav();

			var options = instance.options;
			var element = instance.element;

			var mobile = instance.mobile;

			var type = mobile ? options.typeMobile : options.type;

			var content = element.find(options.content).first();
			var navigation = element.find(options.navigation).first();

			var menu = element.find('.sidenav-menu').first();

			var width = options.width;

			var offset = toInt(width) + toInt(options.gutter);

			var widthMethod = element.hasClass('sidenav-right') ? 'getSidenavRightWidth' : 'getSidenavLeftWidth';

			var contentCss = instance[widthMethod](type, offset, width);

			if (mobile) {
				menu.css('right', '');
			}

			var url = options.url;

			if (url) {
				element.one(
					'urlLoaded.lexicon.sidenav',
					function(event) {
						instance.setEqualHeight();
					}
				);

				instance._loadUrl(menu, url, element);
			}

			content.css(contentCss);

			navigation.css('width', width);
			menu.css('width', width);
		},

		showSimpleSidenav: function() {
			var instance = this;

			var simpleSidenavClosed = instance._isSimpleSidenavClosed();

			if (simpleSidenavClosed) {
				var content = instance._getSimpleSidenavContent();
				var sidenav = instance._getSimpleSidenavNavigation();

				var openClass = instance.options.openClass;

				var toggler = instance.options.toggler;

				var url = toggler.data('url');

				if (url) {
					instance._loadUrl(sidenav, url);
				}

				var desktop = instance._isDesktop();
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
				toggler.addClass('sidenav-transition').addClass('active');

				if (!desktop) {
					$('body').addClass('body-fixed');
				}

				if (desktopFixedPush || mobileFixedPush) {
					content.addClass('sidenav-transition');
					content.addClass(openClass);
					toggler.addClass(openClass);
				}

				sidenav.removeClass('closed');
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

			var element = $(instance.options.selector);

			var menu = element.find('.sidenav-menu').first();
			var toggler = $(instance.options.toggler);

			var width = instance.options.width;

			var closed = $.type(force) === 'boolean' ? force : element.hasClass('closed');

			var widthMethod = closed ? 'showSidenav' : 'hideSidenav';

			if (closed) {
				element.trigger({
					toggler: toggler,
					type: 'openStart.lexicon.sidenav'
				});

				setTimeout(function() {
					instance.setEqualHeight();
				}, 0);

				menu.css('width', width);

				if (element.hasClass('sidenav-right') && element.hasClass('sidenav-fixed')) {
					menu.css('right', width);
				}
			}
			else {
				element.trigger({
					toggler: toggler,
					type: 'closedStart.lexicon.sidenav'
				});
			}

			instance._onSidenavTransitionEnd(element, function() {
				var menu = element.find('.sidenav-menu').first();

				if (element.hasClass('closed')) {
					instance.clearStyle('min-height');

					instance._removeBodyFixed();

					toggler.removeClass('open').removeClass('sidenav-transition');

					element.trigger({
						toggler: toggler,
						type: 'closed.lexicon.sidenav'
					});
				}
				else {
					toggler.addClass('open').removeClass('sidenav-transition');

					element.trigger({
						toggler: toggler,
						type: 'open.lexicon.sidenav'
					});
				}

				if (instance.mobile) {
					instance._focusElement(menu);
				}
			});

			element.addClass('sidenav-transition');
			toggler.addClass('sidenav-transition');

			toggler.toggleClass('active', closed);

			setTimeout(function() {
				element.toggleClass('closed', !closed);

				if (closed && instance.desktop) {
					menu.css('right', '');
				}
				else if (!closed && instance.mobile && element.hasClass('sidenav-right')) {
					menu.css('right', width);
				}

				instance[widthMethod](element);
			}, 0);
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
				var element = instance.element;

				closed = element.hasClass('sidenav-transition') ? !element.hasClass('closed') : element.hasClass('closed');
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

		_getSimpleSidenavContent: function() {
			var instance = this;

			return $(instance.options.content).first();
		},

		_getSimpleSidenavNavigation: function() {
			var instance = this;

			var toggler = instance.options.toggler;

			var hrefAttr = toggler.attr('href');

			return instance.options.target ? $(instance.options.target) : doc.find(hrefAttr);
		},

		_getSimpleSidenavType: function() {
			var instance = this;

			var desktop = instance._isDesktop();
			var type = instance.options.type;
			var typeMobile = instance.options.typeMobile;

			if (desktop && (type === 'fixed-push')) {
				return 'desktop-fixed-push';
			}
			else if (!desktop && (typeMobile === 'fixed-push')) {
				return 'mobile-fixed-push';
			}

			return 'fixed';
		},

		_isDesktop: function() {
			return window.innerWidth >= toInt(this.options.breakpoint);
		},

		_isSimpleSidenavClosed: function() {
			var instance = this;

			var hrefAttr = instance.options.toggler.attr('href');

			var container = instance.options.target ? $(instance.options.target) : doc.find(hrefAttr);

			return container.hasClass('closed');
		},

		_loadUrl: function(sidenav, url, eventTarget) {
			var instance = this;

			var urlLoaded = sidenav.data('url-loaded');

			eventTarget = eventTarget || sidenav;

			var sidebarBody = sidenav.find('.sidebar-body').first();

			if (!urlLoaded && sidebarBody.length && (typeof url === 'string' || $.isPlainObject(url))) {
				sidenav.addClass('sidebar-loading');

				urlLoaded = $.ajax(url).done(
					function(response) {
						sidebarBody.append(response);

						eventTarget.trigger('urlLoaded.lexicon.sidenav');

						sidenav.removeClass('sidebar-loading');
					}
				);

				sidenav.data('url-loaded', urlLoaded);
			}

			return urlLoaded;
		},

		_onClickSidenavClose: function() {
			var instance = this;

			var element = instance.element;
			var options = instance.options;

			var containerSelector = '#' + element.attr('id');

			if (instance.useDataAttribute) {
				containerSelector = options.target || element.attr('href');
			}

			var closeButton = $(containerSelector).find('.sidenav-close').first();
			var closeButtonSelector = '#' + guid(closeButton, 'generatedLexiconSidenavCloseId');
			var dataCloseButtonSelector = 'lexicon.' + closeButtonSelector;

			if (!doc.data(dataCloseButtonSelector)) {
				doc.data(dataCloseButtonSelector, 'true');

				doc.on('click.close.lexicon.sidenav', closeButtonSelector, function(event) {
					event.preventDefault();

					if (!instance.useDataAttribute) {
						instance.element = doc.find(options.selector);
					}

					instance.toggle();
				});
			}

			instance.closeButtonSelector = closeButtonSelector;
			instance.dataCloseButtonSelector = dataCloseButtonSelector;
		},

		_onClickTrigger: function() {
			var instance = this;

			var element = instance.element;

			var el = element;

			if (!instance.useDataAttribute) {
				el = element.toggler;
			}

			el.on(
				'click.lexicon.sidenav',
				function(event) {
					instance.toggle();
				}
			);
		},

		_onDelegateClickTrigger: function() {
			var instance = this;

			var togglerSelector = '';

			var element = instance.element;
			var options = instance.options;

			if (instance.useDataAttribute) {
				togglerSelector = '#' + guid(element, 'generatedLexiconSidenavTogglerId');
			}
			else {
				var toggler = options.toggler;

				if (toggler === '.sidenav-toggler') {
					togglerSelector = '#' + guid(element, 'generatedLexiconSidenavTogglerId') + ' ' + toggler;
				}
				else {
					togglerSelector = toggler;
				}
			}

			var dataTogglerSelector = 'lexicon.' + togglerSelector;

			if (!doc.data(dataTogglerSelector)) {
				doc.data(dataTogglerSelector, 'true');

				doc.on(
					'click.lexicon.sidenav',
					togglerSelector,
					function(event) {
						if (!instance.useDataAttribute) {
							instance.element = doc.find(options.selector);
						}

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

			instance._setScreenSize();

			var element = instance.element;

			doc.on('screenChange.lexicon.sidenav', function(event, winWidth) {
				instance._setScreenSize();

				var desktop = window.innerWidth >= toInt(instance.options.breakpoint);

				var type = desktop ? instance.options.type : instance.options.typeMobile;

				var fixedMenu = type === 'fixed' || type === 'fixed-push';

				element.toggleClass('sidenav-fixed', fixedMenu);

				if (!desktop && fixedMenu) {
					instance.hideSidenav();

					setTimeout(function() {
						element.addClass('closed');

						instance.clearStyle('width');
					}, 0);
				}

				if (!element.hasClass('closed')) {
					instance.clearStyle('min-height');
					instance.showSidenav();
					instance.setEqualHeight();
				}
			});
		},

		_onSidenavTransitionEnd: function(el, fn) {
			var instance = this;

			var transitionEnd = instance.options.transitionEnd;

			el.on(transitionEnd, function(event) {
				var $this = $(this);

				if ($(event.target).is(instance.options.navigation)) {
					$this.removeClass('sidenav-transition');

					if (fn) {
						fn();
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

		_renderNav: function() {
			var instance = this;

			instance._resizeSidenav();

			var element = instance.element;

			var width = instance.options.width;

			var menu = element.find('.sidenav-menu').first();

			if (element.hasClass('closed') && element.hasClass('sidenav-right')) {
				menu.css({
					right: width,
					width: width
				});
			}

			if (!element.hasClass('closed')) {
				instance.showSidenav();
				instance.setEqualHeight();
			}
		},

		_renderUI: function() {
			var instance = this;

			var element = instance.element;

			if (!instance.useDataAttribute) {
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

				instance._renderNav();
			}
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
		}
	};

	var old = $.fn.sideNavigation;

	var initialize = function(element, options, selector) {
		var data = element.data('lexicon.sidenav');

		if (!data) {
			if (!options) {
				options = {};
			}

			options.selector = selector;

			data = new SideNavigation(element, options);

			element.data('lexicon.sidenav', data);
		}

		return data;
	};

	var Plugin = function(options) {
		var selector = this.selector;

		var retVal = this;
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
	 * @property {String|Number}  gutter      The space between the sidenav-slider and the sidenav-content.
	 * @property {String|Boolean} equalHeight The height of content and navigation should be equal.
	 * @property {String}         navigation  The class or ID of the navigation container.
	 * @property {String}         position    The position of the sidenav-slider. Possible values: left, right
	 * @property {String}         toggler     The class or ID of the toggle button.
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
		navigation: '.sidenav-menu-slider',
		position: 'left',
		toggler: '.sidenav-toggler',
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