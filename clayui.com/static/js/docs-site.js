if (!Element.prototype.matches) {
	Element.prototype.matches = 
		Element.prototype.msMatchesSelector ||
		Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = function(selector) {
		var node = this;

		while (node.nodeType === 1) {
			if (node.matches(selector)) {
				return node;
			}

			node = node.parentNode;
		}

		return null;
	}
}

(function () {
	function toggleCodeCollapse(e) {
		var isCodeCollapse =
			e.target.classList.contains('btn-collapse--collapse') ||
			e.target.classList.contains('btn-collapse--expand') ||
			e.target.closest('.btn-collapse--collapse') ||
			e.target.closest('.btn-collapse--expand');

		if (isCodeCollapse) {
			var codeContainer = e.target.closest('.code-container');
			var gatsbyCode = codeContainer.querySelector(
				'.gatsby-highlight > pre'
			);

			var isVisible =
				window.getComputedStyle(gatsbyCode).display !== 'none';

			var display = isVisible ? 'none' : 'block';
			var focusClass = isVisible
				? '.btn-collapse--expand'
				: '.btn-collapse--collapse';

			codeContainer
				.querySelector('.btn-collapse--collapse')
				.classList.toggle('hide');
			codeContainer
				.querySelector('.btn-collapse--expand')
				.classList.toggle('hide');
			codeContainer.querySelector(focusClass).focus();
			gatsbyCode.style.display = display;
		}
	}

	document.addEventListener('click', toggleCodeCollapse);
})();

(function() {
	document.addEventListener('click', function(event) {
		var t = event.target;

		var a = t.tagName === 'a' ? t : t.closest('a');

		if (a) {
			if (a.getAttribute('href') === '#1') {
				event.preventDefault();
			}
		}
	});
})();
