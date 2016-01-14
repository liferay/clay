/**
* Lexicon 0.1.29
*
* Copyright 2016, Liferay, Inc.
* All rights reserved.
* MIT license
*/
 (function($) {
	var REGEX_LINK = /(atlas|lexicon)(-font-awesome)?\.css$/;
	var REGEX_LEXICON_LINK = /(lexicon)(-font-awesome)?\.css$/;
	var REGEX_ATLAS_LINK = /(atlas)(-font-awesome)?\.css$/;

	var getLexiconLink = function () {
		return $('link[href]').filter(function(i, n) {
			return REGEX_LINK.test(n.href);
		});
	};

	var getLexiconSiteLink = function () {
		return $('link[href$="main.css"]');
	};

	var toggleLexiconLink = function() {
		var lexiconLink = getLexiconLink();

		var href = lexiconLink.prop('href');

		if (REGEX_LINK.test(href)) {
			href = href.replace(REGEX_LINK, function(str, m, suffix) {
				console.log(arguments);
				return (m === 'lexicon' ? 'atlas' : 'lexicon') + (suffix ? suffix : '') + '.css';
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

	var $html = $('html');
	var siteConfig = $('#siteConfig');

	var toggleAtlas = $('#toggleAtlas');
	var toggleSiteCss = $('#toggleSiteCss');
	var resetSiteConfig = $('#resetSiteConfig');

	toggleAtlas.on('click', function(e) {
		toggleLexiconLink();

		if (toggleAtlas.prop('checked')) {
			$html.removeClass('lexicon-base').addClass('atlas');
		}
		else {
			$html.removeClass('atlas').addClass('lexicon-base');
		}
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
			$html.addClass('lexicon-base');
		}
		else {
			$html.addClass('atlas');
		}

		var lexiconSiteLink = getLexiconSiteLink();

		if(lexiconSiteHref && String(lexiconSiteLink.prop('disabled')) != lexiconSiteHref) {
			lexiconSiteLink.prop('disabled', lexiconSiteHref == 'true');

			toggleSiteCss.prop('checked', !lexiconSiteLink.prop('disabled'));
		}
	});
})(window.jQuery);