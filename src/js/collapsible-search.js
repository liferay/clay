+function($) {
	var CollapsibleSearch = function(element, options) {
		this.init(element, options);
	};

	CollapsibleSearch.prototype = {
		init: function(element, options) {
			var instance = this;

			instance.options = $.extend({}, $.fn.collapsibleSearch.defaults, options);

			instance.options.selector = element.selector;

			instance._handleBlur(element);
			instance._handleClick(element);
			instance._handleFocus(element);
		},

		_handleBlur: function(element) {
			element.find('.basic-search .form-control').on('blur', function(event) {
				$(this).closest('.basic-search').removeClass('focus');
			});
		},

		_handleFocus: function(element) {
			element.find('.basic-search .form-control').on('focus', function(event) {
				$(this).closest('.basic-search').addClass('focus');
			});
		},

		_handleClick: function(element) {
			var instance = this;

			element.find('.basic-search button[type="submit"]').on('click', function(event) {
				// if (window.innerWidth < 768) {
					var basicSearch = $(this).parents('.basic-search');
					var transitions = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

					basicSearch.find('.basic-search-slider').on(transitions, function(event) {
						basicSearch.removeClass('basic-search-transition');
						basicSearch.find('.basic-search-slider').off(transitions);
					});

					// close search
					basicSearch.on('click', '.basic-search-close', function(event) {
						var basicSearchSlider = $(this).closest('.basic-search-slider');

						$(this).closest('.basic-search-slider').on(transitions, function(event) {
							setTimeout(function() {
								basicSearch.removeClass('basic-search-transition');
							}, 500);

							basicSearchSlider.off(transitions);
						});

						basicSearch.addClass('basic-search-transition');
						basicSearch.removeClass('open');
						basicSearch.off('click');
					});

					if (!basicSearch.hasClass('open')) {
						event.preventDefault();

						basicSearch.addClass('basic-search-transition');

						basicSearch.addClass('open');

						setTimeout(function() {
							basicSearch.find('input[type="text"]').focus();
						}, 500);
					}
				// }
			});
		}
	};

	$.fn.collapsibleSearch = function(options) {
		new CollapsibleSearch(this, options);

		return this;
	};

	$.fn.collapsibleSearch.defaults = {

	};

	$.fn.collapsibleSearch.Constructor = CollapsibleSearch;

}(jQuery);