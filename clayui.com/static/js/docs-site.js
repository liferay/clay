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
