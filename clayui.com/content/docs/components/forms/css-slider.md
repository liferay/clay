---
title: 'Slider'
description: 'A Slider allows the user to select values in a linear range of values.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Input](#input)
-   [Custom Slider](#custom-slider)
    -   [Disabled](#disabled)
    -   [Tooltip](#tooltip)
    -   [References](#references)
    -   [Label](#label)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/slider/">Slider Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

## Input

<div class="sheet-example">
	<div class="form-group">
		<label for="basicInputTypeRange">Range</label>
		<input class="form-control" id="basicInputTypeRange" type="range">
	</div>
</div>

```html
<div class="form-group">
	<label for="basicInputTypeRange">Range</label>
	<input class="form-control" id="basicInputTypeRange" type="range" />
</div>
```

## Custom Slider

To create a custom slider is necessary to use JavaScript to manipulate the thumb, we hide the native thumb so it can be possible to add tooltip's that reflect the current range value.

<div class="sheet-example">
	<div class="form-group">
		<label for="clayRange1">Clay Range</label>
		<div class="clay-range">
			<div class="clay-range-input">
				<input class="form-control-range" id="clayRange1" min="0" max="100" step="1" type="range">
				<div class="clay-range-track"></div>
				<div class="clay-range-progress" style="width: 38.2121%;">
					<div class="clay-range-thumb"></div>
				</div>
			</div>
		</div>
	</div>
</div>

```html
<div class="form-group">
	<label for="clayRange1">Clay Range</label>
	<div class="clay-range">
		<div class="clay-range-input">
			<input
				class="form-control-range"
				id="clayRange1"
				min="0"
				max="100"
				step="1"
				type="range"
			/>
			<div class="clay-range-track"></div>
			<div class="clay-range-progress" style="width: 38.2121%;">
				<div class="clay-range-thumb"></div>
			</div>
		</div>
	</div>
</div>
```

### Disabled

<div class="sheet-example">
	<div class="form-group">
		<label class="disabled" for="clayRangeDisabled1">Clay Range Disabled</label>
		<div class="clay-range">
			<div class="clay-range-input">
				<input class="form-control-range" disabled="" id="clayRangeDisabled1" min="0" max="30" step="1" type="range">
				<div class="clay-range-track"></div>
				<div class="clay-range-progress" style="width: 50%;">
					<div class="clay-range-thumb"></div>
				</div>
			</div>
		</div>
	</div>
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
	<label class="disabled" for="clayRangeDisabled1">Clay Range Disabled</label>
	<div class="clay-range">
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

### Tooltip

<div class="sheet-example">
	<div class="form-group">
		<label for="clayRangeTooltipTop1">Clay Range with Tooltip on Top</label>
		<div class="clay-range">
			<div class="clay-range-input">
				<input class="form-control-range" id="clayRangeTooltipTop1" min="0" max="100" step="1" type="range">
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
	<div class="form-group">
		<label for="clayRangeTooltipBottom1">Clay Range with Tooltip on Bottom</label>
		<div class="clay-range">
			<div class="clay-range-input">
				<input class="form-control-range" id="clayRangeTooltipBottom1" min="0" max="100" step="1" type="range">
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
</div>

```html
<div class="form-group">
	<label for="clayRangeTooltipTop1">Clay Range with Tooltip on Top</label>
	<div class="clay-range">
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
<div class="form-group">
	<label for="clayRangeTooltipBottom1"
		>Clay Range with Tooltip on Bottom</label
	>
	<div class="clay-range">
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

### References

You can add the values ​​of `min` and `max` at the ends of the Slider to give clearer feedback to your users.

<div class="sheet-example">
	<div class="form-group">
		<label for="clayRangeReferences1">Clay Range with References</label>
		<div class="clay-range">
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
	<div class="clay-range">
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

### Label

<div class="sheet-example">
	<div class="form-group">
		<label for="clayRangeLabel1">Clay Range with Label</label>
		<div class="clay-range">
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
	<div class="form-group">
		<label for="clayRangeLabel2">Clay Range with Label and Title</label>
		<div class="clay-range clay-range-align-items-end">
			<div class="input-group">
				<div class="input-group-item">
					<div class="clay-range-title">
						<span class="clay-range-value">15</span>
					</div>
					<div class="clay-range-input">
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
	<div class="form-group">
		<label for="clayRangeLabel3">Clay Range with Label and Data Labels</label>
		<div class="clay-range clay-range-align-items-start">
			<div class="input-group">
				<div class="input-group-item">
					<div class="clay-range-input" data-label-min="0" data-label-max="30">
						<input class="form-control-range" id="clayRangeLabel3" min="0" max="30" step="1" type="range">
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
	<div class="form-group">
		<label for="clayRangeLabel4">Clay Range with Label, Title, and Data Labels</label>
		<div class="clay-range">
			<div class="input-group">
				<div class="input-group-item">
					<div class="clay-range-title">
						<span class="clay-range-value">15</span>
					</div>
					<div class="clay-range-input" data-label-min="0" data-label-max="30">
						<input class="form-control-range" id="clayRangeLabel4" min="0" max="30" step="1" type="range">
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
	<label for="clayRangeLabel1">Clay Range with Label</label>
	<div class="clay-range">
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
<div class="form-group">
	<label for="clayRangeLabel2">Clay Range with Label and Title</label>
	<div class="clay-range clay-range-align-items-end">
		<div class="input-group">
			<div class="input-group-item">
				<div class="clay-range-title">
					<span class="clay-range-value">15</span>
				</div>
				<div class="clay-range-input">
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
<div class="form-group">
	<label for="clayRangeLabel3">Clay Range with Label and Data Labels</label>
	<div class="clay-range clay-range-align-items-start">
		<div class="input-group">
			<div class="input-group-item">
				<div
					class="clay-range-input"
					data-label-min="0"
					data-label-max="30"
				>
					<input
						class="form-control-range"
						id="clayRangeLabel3"
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
<div class="form-group">
	<label for="clayRangeLabel4"
		>Clay Range with Label, Title, and Data Labels</label
	>
	<div class="clay-range">
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
						id="clayRangeLabel4"
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
