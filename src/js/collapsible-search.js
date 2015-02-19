+function($) {
	$.fn.collapsibleSearch = function() {
		this.find('.basic-search button[type="submit"]').on('click', function(event) {
			if ($(window).width() < 768) {
				var basicSearch = $(this).parents('.basic-search');
				var closeButton = '<button class="basic-search-close btn btn-default" type="button"><span class="glyphicon glyphicon-chevron-right"></span></button>';

				if(!basicSearch.find('.basic-search-close').length) {
					$(this).before(closeButton);
				}

				basicSearch.on('click', '.basic-search-close', function(event) {
					basicSearch.removeClass('open');
					basicSearch.off('click');
				});

				if (!basicSearch.hasClass('open')) {
					event.preventDefault();

					basicSearch.addClass('open');

					setTimeout(function() {
						basicSearch.find('input[type="text"]').focus();
					}, 500);
				}
			}
		});

		return this;
	}
}(jQuery);