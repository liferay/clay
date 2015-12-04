/**
* Lexicon 0.1.25
*
* Copyright 2015, Liferay, Inc.
* All rights reserved.
* MIT license
*/
+function($) {
	var CollapsibleSearch = function(element, options) {
		this.init(element, options);
	};

	CollapsibleSearch.prototype = {
		init: function(element, options) {
			var instance = this;

			options = $.extend({}, $.fn.collapsibleSearch.defaults, options);
			options.selector = element.selector;
			options.transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

			instance.options = options;

			instance.basicSearch = element.find('.basic-search');
			instance.searchInput = instance.basicSearch.find('input[type="text"]');

			instance._bindUI(element);
		},

		_bindUI: function(element) {
			var instance = this;

			instance._onSearchInputBlur(element);
			instance._onClickSubmitButton(element);
			instance._onSearchInputFocus(element);
		},

		_onSearchInputBlur: function(element) {
			var instance = this;

			var searchInput = instance.searchInput;

			searchInput.on('blur', function(event) {
				$(this).closest('.basic-search').removeClass('focus');
			});
		},

		_onSearchInputFocus: function(element) {
			var instance = this;

			var searchInput = instance.searchInput;

			searchInput.on('focus', function(event) {
				$(this).closest('.basic-search').addClass('focus');
			});
		},

		_onClickCloseButton: function(basicSearch) {
			var instance = this;

			basicSearch.on('click', '.basic-search-close', function(event) {
				var basicSearch = $(this).closest('.basic-search');

				basicSearch.data('lexicon.collapsible-search-open', false);

				basicSearch.addClass('basic-search-transition');

				instance._onTransitionEnd(basicSearch);

				basicSearch.removeClass('open');
				basicSearch.find('[type="submit"]').focus();
				basicSearch.off('click');
			});
		},

		_onClickSubmitButton: function(element) {
			var instance = this;

			var submitButton = instance.basicSearch.find('[type="submit"]');

			submitButton.on('click', function(event) {
				if (window.innerWidth < instance.options.breakpoint) {
					var basicSearch = $(this).parents('.basic-search');

					instance._onTransitionEnd(basicSearch);

					instance._onClickCloseButton(basicSearch);

					if (!basicSearch.hasClass('open')) {
						event.preventDefault();

						basicSearch.data('lexicon.collapsible-search-open', true);
						basicSearch.addClass('open');
						basicSearch.addClass('basic-search-transition');
					}
				}
			});
		},

		_onTransitionEnd: function(basicSearch) {
			var instance = this;

			var transitionEnd = instance.options.transitionEnd;

			basicSearch.find('.basic-search-slider').on(transitionEnd, function(event) {
				var basicSearch = $(this).closest('.basic-search');

				if ($(event.target).is('.basic-search-slider')) {
					basicSearch.removeClass('basic-search-transition');

					if (basicSearch.data('lexicon.collapsible-search-open')) {
						basicSearch.find('input[type="text"]').focus();
					}

					$(this).off(transitionEnd);
				}
			});
		}
	};

	var old = $.fn.collapsibleSearch;

	var Plugin = function(options) {
		return this.each(
			function() {
				var $this = $(this);

				var data = $this.data('lexicon.collapsible-search');

				if ($this.is('[data-toggle="collapsible-search"]')) {
					options = {
						breakpoint: $this.data('breakpoint')
					};
				}

				if (!data) {
					data = new CollapsibleSearch($this, typeof options === 'object' ? options : null);

					$this.data('lexicon.collapsible-search', data);
				}
			}
		);
	};

	Plugin.noConflict = function() {
		$.fn.collapsibleSearch = old;

		return this;
	};

	Plugin.defaults = {
		breakpoint: 768
	};

	Plugin.Constructor = CollapsibleSearch;

	$.fn.collapsibleSearch = Plugin;

	$(function() {
		Plugin.call($('[data-toggle="collapsible-search"]'));
	});
}(jQuery);