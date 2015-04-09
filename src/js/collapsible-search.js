+function($) {
	var CollapsibleSearch = function(element, options) {
		this.init(element, options);
	};

	CollapsibleSearch.prototype = {
		init: function(element, options) {
			var instance = this;

			instance.options = $.extend({}, $.fn.collapsibleSearch.defaults, options);

			instance.options.selector = element.selector;

			this._handleClick(element);
		},

		_handleClick: function(element) {
			element.find('.basic-search button[type="submit"]').on('click', function(event) {
				if (window.innerWidth < 768) {
					var basicSearch = $(this).parents('.basic-search');
					var closeButton = '<button class="basic-search-close btn btn-default" type="button"><span class="glyphicon glyphicon-chevron-right"></span></button>';
					var transitions = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

					basicSearch.find('.form-control').one(transitions, function(event) {
						basicSearch.removeClass('basic-search-transition');
					});

					if (!basicSearch.find('.basic-search-close').length) {
						$(this).before(closeButton);
					}

					basicSearch.on('click', '.basic-search-close', function(event) {
						basicSearch.find('.form-control').one(transitions, function(event) {
							basicSearch.removeClass('basic-search-transition');
						});

						basicSearch.addClass('basic-search-transition').removeClass('open');
						basicSearch.off('click');
					});

					if (!basicSearch.hasClass('open')) {
						event.preventDefault();

						basicSearch.addClass('basic-search-transition')
						basicSearch.find('input[type="text"]').focus();

						setTimeout(function() {
							basicSearch.addClass('open');
						}, 0);
					}
				}
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