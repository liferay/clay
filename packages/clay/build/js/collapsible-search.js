/**
* Lexicon 1.0.4
*
* Copyright 2016, Liferay, Inc.
* All rights reserved.
* MIT license
*/
+function($) {
	var CollapsibleSearch = function(element) {
		var instance = this;

		instance.$element = $(element);
		instance.$close = instance.$element.find('.basic-search-close');
		instance.$input = instance.$element.find('input[type="text"]');
		instance.$submit = instance.$element.find('[type="submit"]');

		instance.$close.on('click.lexicon.close.collapsible-search', $.proxy(instance.close, instance));
		instance.$input.on('blur.lexicon.collapsible-search', $.proxy(instance.blur, instance));
		instance.$input.on('focus.lexicon.collapsible-search', $.proxy(instance.focus, instance));
		instance.$submit.on('click.lexicon.submit.collapsible-search', $.proxy(instance.submit, instance));
	};

	CollapsibleSearch.BREAKPOINT = 768;
	CollapsibleSearch.TRANSITION_DURATION = 500;

	CollapsibleSearch.prototype = {
		blur: function(event) {
			var $input = $(event.currentTarget);

			$input.closest('.basic-search').removeClass('focus');
		},

		close: function(event) {
			var instance = this;

			var basicSearch = $(event.currentTarget).closest('.basic-search');
			var basicSearchSlider = basicSearch.find('.basic-search-slider');
			var basicSearchSubmit = basicSearch.find('[type="submit"]');

			var complete = function() {
				basicSearch.removeClass('basic-search-transition');

				basicSearch.trigger('closed.lexicon.collapsible.search');
			};

			if (!$.support.transition) {
				return complete.call(instance);
			}

			basicSearchSlider.one('bsTransitionEnd', $.proxy(complete, instance))
				.emulateTransitionEnd(CollapsibleSearch.TRANSITION_DURATION);

			basicSearch.addClass('basic-search-transition').removeClass('open');

			basicSearchSubmit.focus();
		},

		destroy: function() {
			var instance = this;

			instance.$close.off('click.lexicon.close.collapsible-search');
			instance.$input.off('blur.lexicon.collapsible-search');
			instance.$input.off('focus.lexicon.collapsible-search');
			instance.$submit.off('click.lexicon.submit.collapsible-search');
		},

		focus: function(event) {
			$(event.currentTarget).closest('.basic-search').addClass('focus');
		},

		submit: function(event) {
			var instance = this;

			if (window.innerWidth < CollapsibleSearch.BREAKPOINT) {
				var basicSearch = $(event.currentTarget).parents('.basic-search');
				var basicSearchInput = basicSearch.find('input[type="text"]');
				var basicSearchSlider = basicSearch.find('.basic-search-slider');

				var complete = function() {
					basicSearch.removeClass('basic-search-transition');
					basicSearchInput.focus();

					basicSearch.trigger('open.lexicon.collapsible.search');
				};

				if (!$.support.transition) {
					return complete.call(instance);
				}

				if (!basicSearch.hasClass('open')) {
					event.preventDefault();

					basicSearchSlider.one('bsTransitionEnd', $.proxy(complete, instance))
						.emulateTransitionEnd(CollapsibleSearch.TRANSITION_DURATION);

					basicSearch.addClass('basic-search-transition').addClass('open');
				}
			}
		}
	};

	var Plugin = function(option) {
		return this.each(function() {
			var $this = $(this);
			var data = $this.data('lexicon.collapsible-search');

			if (!data) {
				data = new CollapsibleSearch(this);

				$this.data('lexicon.collapsible-search', data);
			}

			if (typeof option == 'string') {
				data[option]();
			}
		});
	};

	var old = $.fn.collapsibleSearch;

	$.fn.collapsibleSearch = Plugin;
	$.fn.collapsibleSearch.Constructor = CollapsibleSearch;

	$.fn.collapsibleSearch.noConflict = function() {
		$.fn.collapsibleSearch = old;

		return this;
	};

	var close = '[data-toggle="collapsible-search"] .basic-search-close';
	var input = '[data-toggle="collapsible-search"] input[type="text"]';
	var submit = '[data-toggle="collapsible-search"] [type="submit"]';

	$(document)
		.on('blur.lexicon.collapsible-search.data-api', input, $.proxy(CollapsibleSearch.prototype.blur, CollapsibleSearch))
		.on('click.lexicon.close.collapsible-search.data-api', close, $.proxy(CollapsibleSearch.prototype.close, CollapsibleSearch))
		.on('click.lexicon.submit.collapsible-search.data-api', submit, $.proxy(CollapsibleSearch.prototype.submit, CollapsibleSearch))
		.on('focus.lexicon.collapsible-search.data-api', input, $.proxy(CollapsibleSearch.prototype.focus, CollapsibleSearch));
}(jQuery);