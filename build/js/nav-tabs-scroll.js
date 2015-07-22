+function($) {
	var CollapsibleSearch = function(element, options) {
		this.init(element, options);
	};

	CollapsibleSearch.prototype = {
		init: function(element, options) {
		}
	};

	var Plugin = function(options) {
		return this.each(
			function() {
				var $this = $(this);

				var data = $this.data('lexicon.collapsible-search')

				if (!data) {
					data = new CollapsibleSearch($this, typeof options === 'object' ? options : null);

					$this.data('lexicon.collapsible-search', data);
				}

				if (typeof options === 'string') {
					data[options].call($this);
				}
			}
		);
	};

	var old = $.fn.collapsibleSearch;

	Plugin.noConflict = function() {
		$.fn.collapsibleSearch = old;

		return this;
	};

	Plugin.defaults = {
		breakpoint: 768
	};

	Plugin.Constructor = CollapsibleSearch;

	$.fn.collapsibleSearch = Plugin;
}(jQuery);