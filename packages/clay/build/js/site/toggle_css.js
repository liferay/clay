/**
* Clay 2.0.0-beta.3
*
* Copyright 2017, Liferay, Inc.
* All rights reserved.
* MIT license
*/
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
	});
})(window.jQuery);