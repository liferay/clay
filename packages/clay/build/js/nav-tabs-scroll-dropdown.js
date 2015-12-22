/**
* Lexicon 0.1.26
*
* Copyright 2015, Liferay, Inc.
* All rights reserved.
* MIT license
*/
+function($) {
	var NavTabsScrollDropdown = function(element, options) {
		this.init(element, options);
	};

	NavTabsScrollDropdown.prototype = {
		init: function(element, options) {
			this._showBsDropdown(element);
			this._hideBsDropdown(element);
		},

		_showBsDropdown: function(element) {
			element.on('show.bs.dropdown', '.dropdown', function(event) {
				var dropdownToggle = $(this).find('[data-toggle="dropdown"]');

				$(dropdownToggle.data('nav-tabs-scroll-target')).addClass('open');
			});
		},

		_hideBsDropdown: function(element) {
			element.on('hide.bs.dropdown', '.dropdown', function(event) {
				var dropdownToggle = $(this).find('[data-toggle="dropdown"]');

				$(dropdownToggle.data('nav-tabs-scroll-target')).removeClass('open');
			});
		}
	};

	var Plugin = function(options) {
		return this.each(
			function() {
				var $this = $(this);

				var data = $this.data('lexicon.nav-tabs-scroll-dropdown');

				if (!data) {
					data = new NavTabsScrollDropdown($this, typeof options === 'object' ? options : null);

					$this.data('lexicon.nav-tabs-scroll-dropdown', data);
				}

				if (typeof options === 'string') {
					data[options].call($this);
				}
			}
		);
	};

	var old = $.fn.navTabsScrollDropdown;

	Plugin.noConflict = function() {
		$.fn.navTabsScrollDropdown = old;

		return this;
	};

	Plugin.defaults = {
	};

	Plugin.Constructor = NavTabsScrollDropdown;

	$.fn.navTabsScrollDropdown = Plugin;
}(jQuery);