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

(function() {
	document.addEventListener('click', function(event) {
		var t = event.target;

		var a = t.tagName === 'a' || t.tagName === 'button' ? t : t.closest('a') || t.closest('button');
		var column = t.closest('.autofit-col-toggle') || false;

		if (a) {
			if (a.getAttribute('href') === '#1') {
				event.preventDefault();
			}

			var dataToggle = a.getAttribute('data-toggle');

			if (dataToggle && dataToggle.startsWith('c-prefers')) {
				document.querySelector('body').classList.toggle(a.getAttribute('data-toggle'));
			}
		}

		if (column) {
			var button = column.querySelector('.component-action');

			button.classList.toggle('show');

			document.querySelector(button.dataset.target).classList.toggle('show');
		}
	});
})();

(function() {
	function calcProgressWidth(el) {
		var clayRange = el.closest('[data-toggle="clay-css-range"]');

		var min = el.getAttribute('min') || 0;
		var max = el.getAttribute('max') || 100;
		var step = el.getAttribute('step') || 1;

		var thumbWidth = parseInt(
			clayRange.querySelector(
				'.clay-range-progress .clay-range-thumb'
			).offsetWidth
		);
		var rangeWidth = parseInt(el.offsetWidth);

		var currentStep = (el.value - min) / step;
		var totalSteps = (max - min) / step;
		var progressWidth = (currentStep / totalSteps) * 100;

		var offsetWidth = progressWidth;
		var ratio =
			(((1 - progressWidth * 0.01) * (thumbWidth / 1.001)) /
				rangeWidth) *
			100;

		if (progressWidth !== 50) {
			offsetWidth =
				progressWidth - (thumbWidth / 2 / rangeWidth) * 100 + ratio;
		}

		return offsetWidth;
	}

	function clayRange(e) {
		var clayRangeInput = e.target.closest('[data-toggle="clay-css-range"]');

		if (clayRangeInput) {
			offsetWidth = calcProgressWidth(e.target);

			clayRangeInput.querySelector(
				'.clay-range-progress'
			).style.width = offsetWidth + '%';

			var currentVal = e.target.value;

			var title = clayRangeInput.querySelectorAll(
				'.clay-range-value'
			);

			for (var i = 0; i < title.length; i++) {
				title[i].innerHTML = currentVal;
			}
		}
	}

	document.addEventListener('input', clayRange);

	document.addEventListener('change', clayRange);
})();
