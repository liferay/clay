 (function($) {
	var REGEX_LINK = /(site-atlas|site-lexicon)(-font-awesome)?\.css$/;
	var REGEX_LEXICON_LINK = /(site-lexicon)(-font-awesome)?\.css$/;
	var REGEX_ATLAS_LINK = /(site-atlas)(-font-awesome)?\.css$/;

	var getLexiconLink = function () {
		return $('link[href]').filter(function(i, n) {
			return REGEX_LINK.test(n.href);
		});
	};

	var getLexiconSiteLink = function () {
		return $('link[href$="site-main.css"]');
	};

	var checkCSSLoaded = function(cssHref) {
		function loaded () {
			clearInterval(checkCSS);

			$(document).trigger('claySiteToggleTheme');

			$('#claySiteCSS').remove();
		};

		var clayBase = cssHref.match(/site-lexicon-font-awesome.css$/);

		var theme = clayBase ? '"clay-base"' : '"clay-atlas"';

		var checkCSS = setInterval(function() {
			if ($('#claySiteCSS').css('content') === theme) {
				loaded();
			}
		}, 100);

		$('body').append('<div id="claySiteCSS"></div>');
	};

	var toggleLexiconLink = function() {
		var lexiconLink = getLexiconLink();

		var href = lexiconLink.prop('href');

		if (REGEX_LINK.test(href)) {
			href = href.replace(REGEX_LINK, function(str, m, suffix) {
				console.log(arguments);
				return (m === 'site-lexicon' ? 'site-atlas' : 'site-lexicon') + (suffix ? suffix : '') + '.css';
			});

			lexiconLink.prop('href', href);

			localStorage.setItem('nate.lexiconHref', href);

			checkCSSLoaded(href);
		}
	};

	var toggleLexiconSiteLink = function() {
		var lexiconSiteLink = getLexiconSiteLink();

		var disabled = !lexiconSiteLink.prop('disabled');

		lexiconSiteLink.prop('disabled', disabled);

		localStorage.setItem('nate.lexiconSiteHref', disabled);
	};

	var siteConfig = $('#siteConfig');

	var toggleAtlas = $('#toggleAtlas');
	var toggleSiteCss = $('#toggleSiteCss');
	var resetSiteConfig = $('#resetSiteConfig');

	toggleAtlas.on('click', function(e) {
		toggleLexiconLink();
	});

	toggleSiteCss.on('click', function(e) {
		toggleLexiconSiteLink();
	});

	resetSiteConfig.on('click', function(e) {
		localStorage.removeItem('nate.lexiconHref');
		localStorage.removeItem('nate.lexiconSiteHref');

		window.location.reload();
	});

	$(function() {
		var lexiconHref = localStorage.getItem('nate.lexiconHref');
		var lexiconSiteHref = localStorage.getItem('nate.lexiconSiteHref');

		var lexiconLink = getLexiconLink();

		if(lexiconHref && lexiconLink.prop('href') != lexiconHref) {
			lexiconLink.prop('href', lexiconHref);
			toggleAtlas.prop('checked', REGEX_ATLAS_LINK.test(lexiconHref));
		}

		var lexiconSiteLink = getLexiconSiteLink();

		if(lexiconSiteHref && String(lexiconSiteLink.prop('disabled')) != lexiconSiteHref) {
			lexiconSiteLink.prop('disabled', lexiconSiteHref == 'true');

			toggleSiteCss.prop('checked', !lexiconSiteLink.prop('disabled'));
		}

		checkCSSLoaded(lexiconHref);
	});

	var siteNavToggle = $('#siteNavToggle');

	siteNavToggle.on('click', function(e) {
		var el = $(this);
		var body = $('body');

		if (el.data('nav-hidden')) {
			el.text('Hide Nav').data('nav-hidden', false);
			body.removeClass('hide-site-nav');
		}
		else {
			el.text('Show Nav').data('nav-hidden', true);
			body.addClass('hide-site-nav');
		}
	});
})(window.jQuery);