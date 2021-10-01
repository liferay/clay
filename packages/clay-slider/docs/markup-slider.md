---
title: 'Slider'
description: 'A Slider allows the user to select values in a linear range of values.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/slider/'
mainTabURL: 'docs/components/slider.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Input](#css-input)
-   [Custom Slider](#css-custom-slider)
    -   [Disabled](#css-disabled)
    -   [Tooltip](#css-tooltip)
    -   [References](#css-references)
    -   [Label](#css-clay-range-label)
    -   [Title](#css-clay-range-title)

</div>
</div>

## Input(#css-input)

<div class="sheet-example">
	<div class="form-group">
		<label for="basicInputTypeRange">Default Range</label>
		<input class="form-control" id="basicInputTypeRange" type="range">
	</div>
</div>

```html
<div class="form-group">
	<label for="basicInputTypeRange">Range</label>
	<input class="form-control" id="basicInputTypeRange" type="range" />
</div>
```

## Custom Slider(#css-custom-slider)

Add `clay-range-progress-none` to `clay-range` for a basic range input that works without JavaScript.

<div class="sheet-example">
	<div class="form-group">
		<label for="_3tkp5wh4m">Clay Range Clay Range Progress None</label>
		<div class="clay-range clay-range-progress-none">
			<div class="clay-range-input">
				<input class="form-control-range" id="_3tkp5wh4m" min="0" max="100" step="1" type="range">
				<div class="clay-range-track"></div>
				<div class="clay-range-progress">
					<div class="clay-range-thumb"></div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="_3tkp5wh4m">Clay Range Clay Range Progress None</label>
	<div class="clay-range clay-range-progress-none">
		<div class="clay-range-input">
			<input
				class="form-control-range"
				id="_3tkp5wh4m"
				min="0"
				max="100"
				step="1"
				type="range"
			/>
			<div class="clay-range-track"></div>
			<div class="clay-range-progress">
				<div class="clay-range-thumb"></div>
			</div>
		</div>
	</div>
</div>
```

<div class="clay-site-alert alert alert-warning">
	This CSS Component requires JavaScript to manipulate the progress indicator. We hide the native input because there is no way to add a progress indicator to the native input in Firefox or Safari. A JavaScript snippet is included with this example if the React Component is not an option.
</div>

The attribute `data-toggle="clay-css-range"` is only required if using the JavaScript shown in this demo.

<div class="sheet-example">
	<div class="form-group">
		<label for="clayRange1">Clay Range</label>
		<div class="clay-range" data-toggle="clay-css-range">
			<div class="clay-range-input">
				<input class="form-control-range" id="clayRange1" type="range">
				<div class="clay-range-track"></div>
				<div class="clay-range-progress">
					<div class="clay-range-thumb"></div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="clayRange1">Clay Range</label>
	<div class="clay-range" data-toggle="clay-css-range">
		<div class="clay-range-input">
			<input class="form-control-range" id="clayRange1" type="range" />
			<div class="clay-range-track"></div>
			<div class="clay-range-progress" style="width: 38.2121%;">
				<div class="clay-range-thumb"></div>
			</div>
		</div>
	</div>
</div>
<script>
	// IE11 matches polyfill

	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.msMatchesSelector ||
			Element.prototype.webkitMatchesSelector;
	}

	// IE11 closest polyfill

	if (!Element.prototype.closest) {
		Element.prototype.closest = function (selector) {
			var node = this;

			while (node.nodeType === 1) {
				if (node.matches(selector)) {
					return node;
				}

				node = node.parentNode;
			}

			return null;
		};
	}

	(function () {
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
			var clayRangeInput = e.target.closest(
				'[data-toggle="clay-css-range"]'
			);

			if (clayRangeInput) {
				offsetWidth = calcProgressWidth(e.target);

				clayRangeInput.querySelector(
					'.clay-range-progress'
				).style.width = offsetWidth + '%';

				var currentVal = e.target.value;

				var title =
					clayRangeInput.querySelectorAll('.clay-range-value');

				for (var i = 0; i < title.length; i++) {
					title[i].innerHTML = currentVal;
				}
			}
		}

		document.addEventListener('input', clayRange);

		document.addEventListener('change', clayRange);
	})();
</script>
```

### Disabled(#css-disabled)

<div class="sheet-example">
	<div class="form-group">
		<label class="disabled" for="clayRangeDisabled1">Clay Range Disabled</label>
		<div class="clay-range" data-toggle="clay-css-range">
			<div class="clay-range-input">
				<input class="form-control-range" disabled="" id="clayRangeDisabled1" min="0" max="30" step="1" type="range">
				<div class="clay-range-track"></div>
				<div class="clay-range-progress" style="width: 50%;">
					<div class="clay-range-thumb"></div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label class="disabled" for="clayRangeDisabled1">Clay Range Disabled</label>
	<div class="clay-range" data-toggle="clay-css-range">
		<div class="clay-range-input">
			<input
				class="form-control-range"
				disabled=""
				id="clayRangeDisabled1"
				min="0"
				max="30"
				step="1"
				type="range"
			/>
			<div class="clay-range-track"></div>
			<div class="clay-range-progress" style="width: 50%;">
				<div class="clay-range-thumb"></div>
			</div>
		</div>
	</div>
</div>
```

<div class="sheet-example">
	<div class="form-group">
		<label class="disabled" for="clayRangeLabel0">Clay Range Disabled with Label</label>
		<div class="clay-range disabled">
			<div class="input-group">
				<div class="input-group-item">
					<div class="clay-range-input">
						<input class="form-control-range" disabled="" id="clayRangeLabel0" min="0" max="100" step="1" type="range">
						<div class="clay-range-track"></div>
						<div class="clay-range-progress" style="width: 50%;">
							<div class="clay-range-thumb"></div>
						</div>
					</div>
				</div>
				<div class="input-group-item input-group-item-shrink">
					<div class="input-group-text"><span class="clay-range-value">50</span></div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label class="disabled" for="clayRangeLabel0"
		>Clay Range Disabled with Label</label
	>
	<div class="clay-range disabled">
		<div class="input-group">
			<div class="input-group-item">
				<div class="clay-range-input">
					<input
						class="form-control-range"
						disabled=""
						id="clayRangeLabel0"
						min="0"
						max="100"
						step="1"
						type="range"
					/>
					<div class="clay-range-track"></div>
					<div class="clay-range-progress" style="width: 50%;">
						<div class="clay-range-thumb"></div>
					</div>
				</div>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<div class="input-group-text">
					<span class="clay-range-value">50</span>
				</div>
			</div>
		</div>
	</div>
</div>
```

### Tooltip(#css-tooltip)

<div class="sheet-example">
	<div class="form-group">
		<label for="clayRangeTooltipTop1">Clay Range with Tooltip on Top</label>
		<div class="clay-range" data-toggle="clay-css-range">
			<div class="clay-range-input">
				<input class="form-control-range" id="clayRangeTooltipTop1" min="0" max="100" step="1" type="range">
				<div class="clay-range-track"></div>
				<div class="clay-range-progress" style="width: 34.2831%;">
					<div class="clay-range-thumb">
						<div class="tooltip clay-tooltip-top" role="tooltip">
							<div class="tooltip-arrow"></div>
							<div class="tooltip-inner"><div class="clay-range-value">34</div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="clayRangeTooltipTop1">Clay Range with Tooltip on Top</label>
	<div class="clay-range" data-toggle="clay-css-range">
		<div class="clay-range-input">
			<input
				class="form-control-range"
				id="clayRangeTooltipTop1"
				min="0"
				max="100"
				step="1"
				type="range"
			/>
			<div class="clay-range-track"></div>
			<div class="clay-range-progress" style="width: 34.2831%;">
				<div class="clay-range-thumb">
					<div class="tooltip clay-tooltip-top" role="tooltip">
						<div class="tooltip-arrow"></div>
						<div class="tooltip-inner">
							<div class="clay-range-value">34</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

<div class="sheet-example">
	<div class="form-group">
		<label for="clayRangeTooltipBottom1">Clay Range with Tooltip on Bottom</label>
		<div class="clay-range" data-toggle="clay-css-range">
			<div class="clay-range-input">
				<input class="form-control-range" id="clayRangeTooltipBottom1" min="0" max="100" step="1" type="range">
				<div class="clay-range-track"></div>
				<div class="clay-range-progress" style="width: 54.9104%;">
					<div class="clay-range-thumb">
						<div class="tooltip clay-tooltip-bottom" role="tooltip">
							<div class="tooltip-arrow"></div>
							<div class="tooltip-inner"><div class="clay-range-value">55</div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="clayRangeTooltipBottom1"
		>Clay Range with Tooltip on Bottom</label
	>
	<div class="clay-range" data-toggle="clay-css-range">
		<div class="clay-range-input">
			<input
				class="form-control-range"
				id="clayRangeTooltipBottom1"
				min="0"
				max="100"
				step="1"
				type="range"
			/>
			<div class="clay-range-track"></div>
			<div class="clay-range-progress" style="width: 54.9104%;">
				<div class="clay-range-thumb">
					<div class="tooltip clay-tooltip-bottom" role="tooltip">
						<div class="tooltip-arrow"></div>
						<div class="tooltip-inner">
							<div class="clay-range-value">55</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

### References(#css-references)

These are visual indicators placed at the beginning and end of Clay Range; use the attributes `data-label-min="{value}"` and `data-label-max="{value}"` on `clay-range-input` to display them.

<div class="sheet-example">
	<div class="form-group">
		<label for="clayRangeReferences1">Clay Range with References</label>
		<div class="clay-range" data-toggle="clay-css-range">
			<div class="clay-range-title">
				<span class="clay-range-value">30</span>
			</div>
			<div class="clay-range-input" data-label-min="25" data-label-max="35">
				<input class="form-control-range" id="clayRangeReferences1" min="25" max="35" step="0.01" type="range">
				<div class="clay-range-track"></div>
				<div class="clay-range-progress" style="width: 50%;">
					<div class="clay-range-thumb"></div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="clayRangeReferences1">Clay Range with References</label>
	<div class="clay-range" data-toggle="clay-css-range">
		<div class="clay-range-title">
			<span class="clay-range-value">30</span>
		</div>
		<div class="clay-range-input" data-label-min="25" data-label-max="35">
			<input
				class="form-control-range"
				id="clayRangeReferences1"
				min="25"
				max="35"
				step="0.01"
				type="range"
			/>
			<div class="clay-range-track"></div>
			<div class="clay-range-progress" style="width: 50%;">
				<div class="clay-range-thumb"></div>
			</div>
		</div>
	</div>
</div>
```

### Label(#css-clay-range-label)

Labels are visual indicators appended to the beginning or end of Clay Range. These are used to display the current position of Clay Range.

<div class="sheet-example">
	<div class="form-group">
		<label for="clayRangeLabel1">Clay Range with Label</label>
		<div class="clay-range" data-toggle="clay-css-range">
			<div class="input-group">
				<div class="input-group-item">
					<div class="clay-range-input">
						<input class="form-control-range" id="clayRangeLabel1" min="0" max="100" step="1" type="range">
						<div class="clay-range-track"></div>
						<div class="clay-range-progress" style="width: 50%;">
							<div class="clay-range-thumb"></div>
						</div>
					</div>
				</div>
				<div class="input-group-item input-group-item-shrink">
					<div class="input-group-text"><span class="clay-range-value">50</span></div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="clayRangeLabel1">Clay Range with Label</label>
	<div class="clay-range" data-toggle="clay-css-range">
		<div class="input-group">
			<div class="input-group-item">
				<div class="clay-range-input">
					<input
						class="form-control-range"
						id="clayRangeLabel1"
						min="0"
						max="100"
						step="1"
						type="range"
					/>
					<div class="clay-range-track"></div>
					<div class="clay-range-progress" style="width: 50%;">
						<div class="clay-range-thumb"></div>
					</div>
				</div>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<div class="input-group-text">
					<span class="clay-range-value">50</span>
				</div>
			</div>
		</div>
	</div>
</div>
```

<div class="sheet-example">
	<div class="form-group">
		<label for="clayRangeLabel2">Clay Range with Label and Data Labels</label>
		<div class="clay-range clay-range-align-items-start" data-toggle="clay-css-range">
			<div class="input-group">
				<div class="input-group-item">
					<div class="clay-range-input" data-label-min="0" data-label-max="30">
						<input class="form-control-range" id="clayRangeLabel2" min="0" max="30" step="1" type="range">
						<div class="clay-range-track"></div>
						<div class="clay-range-progress" style="width: 50%;">
							<div class="clay-range-thumb"></div>
						</div>
					</div>
				</div>
				<div class="input-group-item input-group-item-shrink">
					<div class="input-group-text">
						<span class="clay-range-value">15</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="clayRangeLabel2">Clay Range with Label and Data Labels</label>
	<div
		class="clay-range clay-range-align-items-start"
		data-toggle="clay-css-range"
	>
		<div class="input-group">
			<div class="input-group-item">
				<div
					class="clay-range-input"
					data-label-min="0"
					data-label-max="30"
				>
					<input
						class="form-control-range"
						id="clayRangeLabel2"
						min="0"
						max="30"
						step="1"
						type="range"
					/>
					<div class="clay-range-track"></div>
					<div class="clay-range-progress" style="width: 50%;">
						<div class="clay-range-thumb"></div>
					</div>
				</div>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<div class="input-group-text">
					<span class="clay-range-value">15</span>
				</div>
			</div>
		</div>
	</div>
</div>
```

### Title(#css-clay-range-title)

Titles are visual indicators placed at the top of Clay Range. These are used to display the current position of Clay Range.

<div class="sheet-example">
	<div class="form-group">
		<label for="clayRangeTitle1">Clay Range with Title</label>
		<div class="clay-range clay-range-align-items-end" data-toggle="clay-css-range">
			<div class="input-group">
				<div class="input-group-item">
					<div class="clay-range-title">
						<span class="clay-range-value">15</span>
					</div>
					<div class="clay-range-input">
						<input class="form-control-range" id="clayRangeTitle1" min="0" max="30" step="1" type="range">
						<div class="clay-range-track"></div>
						<div class="clay-range-progress" style="width: 50%;">
							<div class="clay-range-thumb"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="clayRangeTitle1">Clay Range with Title</label>
	<div
		class="clay-range clay-range-align-items-end"
		data-toggle="clay-css-range"
	>
		<div class="input-group">
			<div class="input-group-item">
				<div class="clay-range-title">
					<span class="clay-range-value">15</span>
				</div>
				<div class="clay-range-input">
					<input
						class="form-control-range"
						id="clayRangeTitle1"
						min="0"
						max="30"
						step="1"
						type="range"
					/>
					<div class="clay-range-track"></div>
					<div class="clay-range-progress" style="width: 50%;">
						<div class="clay-range-thumb"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

<div class="sheet-example">
	<div class="form-group">
		<label for="clayRangeTitle2">Clay Range with Title, Label and Data Labels</label>
		<div class="clay-range" data-toggle="clay-css-range" data-toggle="clay-css-range">
			<div class="input-group">
				<div class="input-group-item">
					<div class="clay-range-title">
						<span class="clay-range-value">15</span>
					</div>
					<div class="clay-range-input" data-label-min="0" data-label-max="30">
						<input class="form-control-range" id="clayRangeTitle2" min="0" max="30" step="1" type="range">
						<div class="clay-range-track"></div>
						<div class="clay-range-progress" style="width: 50%;">
							<div class="clay-range-thumb"></div>
						</div>
					</div>
				</div>
				<div class="input-group-item input-group-item-shrink">
					<div class="input-group-text">
						<span class="clay-range-value">15</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="clayRangeTitle2"
		>Clay Range with Title, Label and Data Labels</label
	>
	<div
		class="clay-range"
		data-toggle="clay-css-range"
		data-toggle="clay-css-range"
	>
		<div class="input-group">
			<div class="input-group-item">
				<div class="clay-range-title">
					<span class="clay-range-value">15</span>
				</div>
				<div
					class="clay-range-input"
					data-label-min="0"
					data-label-max="30"
				>
					<input
						class="form-control-range"
						id="clayRangeTitle2"
						min="0"
						max="30"
						step="1"
						type="range"
					/>
					<div class="clay-range-track"></div>
					<div class="clay-range-progress" style="width: 50%;">
						<div class="clay-range-thumb"></div>
					</div>
				</div>
			</div>
			<div class="input-group-item input-group-item-shrink">
				<div class="input-group-text">
					<span class="clay-range-value">15</span>
				</div>
			</div>
		</div>
	</div>
</div>
```
