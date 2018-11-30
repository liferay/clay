---
title: "Progress Bars"
---

### Progress Groups

Add the <code>progress-group</code> and <code>progress-group-addon</code> classes to a progress component to place an addon on either side of it.

<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 30%;">
		</div>
	</div>
	<div class="progress-group-addon">
		30%
	</div>
</div>

<div class="progress-group progress-warning">
	<div class="progress">
		<div aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 70%;"></div>
	</div>
	<div class="progress-group-addon">70%</div>
</div>

<div class="progress-group progress-success">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
</div>

<div class="progress-group">
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
</div>

```html

<!-- Progress group with default progress bar -->

<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 30%;">
		</div>
	</div>
	<div class="progress-group-addon">
		30%
	</div>
</div>

<!-- Progress group with warning progress bar -->

<div class="progress-group progress-warning">
	<div class="progress">
		<div aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 70%;"></div>
	</div>
	<div class="progress-group-addon">70%</div>
</div>

<!-- Progress Group with progress bar success and a group-addon -->

<div class="progress-group progress-success">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
</div>

<!-- Progress Group with default progress success and a group-addon -->

<div class="progress-group">
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
</div>
```

### Progress Group Stacked

Add the <code>progress-group-stacked</code> class to a <code>progress-group</code> element to stack the addons and progress component.

<div class="progress-group progress-group-stacked">
	<div class="progress-group-addon">60% Completed</div>
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">
		<svg class="lexicon-icon lexicon-icon-check-cog" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#check-cog" />
		</svg>
	</div>
</div>

```html
<div class="progress-group progress-group-stacked">
	<div class="progress-group-addon">60% Completed</div>
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">
		<svg class="lexicon-icon lexicon-icon-check-cog" focusable="false" role="presentation">
			<use href="/images/icons/icons.svg#check-cog" />
		</svg>
	</div>
</div>
```

### Progress Variants

Add the <code>progress-danger</code>, <code>progress-info</code>, <code>progress-success</code>, or <code>progress-warning</code> class to a <code>progress-group</code> or <code>progress</code> element to provide visual feedback for different progress states. Color a block of text or icon by wrapping it with the <code>progress-group-feedback</code> class.

<div class="alert alert-warning">
	The variant classes set the <code>background-color</code> for a <code>progress-bar</code>, so Bootstrap 4 background utility classes are not required.
</div>

###### Progress

<div class="progress">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="progress progress-success">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="progress progress-info">
	<div aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 50%;">50%</div>
</div>

<div class="progress progress-warning">
	<div aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 75%;">75%</div>
</div>

<div class="progress progress-danger">
	<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;">100%</div>
</div>

```html
<div class="progress">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<!-- Progress Success -->

<div class="progress progress-success">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 25%;">25%</div>
</div>

<!-- Progress Info -->

<div class="progress progress-info">
	<div aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 50%;">50%</div>
</div>

<!-- Progress Warning -->

<div class="progress progress-warning">
	<div aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 75%;">75%</div>
</div>

<!-- Progress Danger -->

<div class="progress progress-danger">
	<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;">100%</div>
</div>
```

###### Progress Group

<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>

<div class="progress-group progress-success">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
</div>

<div class="progress-group progress-info">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg class="lexicon-icon lexicon-icon-info-circle-open" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#info-circle-open" />
			</svg>
		</div>
	</div>
</div>

<div class="progress-group progress-warning">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg class="lexicon-icon lexicon-icon-exclamation-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#exclamation-circle" />
			</svg>
		</div>
	</div>
</div>

```html
<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>

<div class="progress-group progress-success">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg class="lexicon-icon lexicon-icon-check-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#check-circle" />
			</svg>
		</div>
	</div>
</div>

<div class="progress-group progress-info">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg class="lexicon-icon lexicon-icon-info-circle-open" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#info-circle-open" />
			</svg>
		</div>
	</div>
</div>

<div class="progress-group progress-warning">
	<div class="progress">
		<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style="width: 100%;"></div>
	</div>
	<div class="progress-group-addon">
		<div class="progress-group-feedback">
			<svg class="lexicon-icon lexicon-icon-exclamation-circle" focusable="false" role="presentation">
				<use href="/images/icons/icons.svg#exclamation-circle" />
			</svg>
		</div>
	</div>
</div>
```

###### Multiple Progress Bars

If you need multiple progress bars, use Bootstrap 4's background utilities: <code>bg-primary</code>, <code>bg-success</code>, <code>bg-info</code>, <code>bg-warning</code>, and <code>bg-danger</code> on <code>progress-bar</code>.

<div class="progress">
	<div class="bg-success progress-bar progress-bar-striped" style="width: 25%">25%</div>
	<div class="bg-success progress-bar" style="width: 25%">25%</div>
	<div class="bg-success progress-bar progress-bar-animated progress-bar-striped" style="width: 25%">25%</div>
</div>

<div class="progress">
	<div class="bg-info progress-bar progress-bar-striped" style="width: 50%">50%</div>
	<div class="bg-info progress-bar" style="width: 50%">50%</div>
</div>

<div class="progress">
	<div class="bg-warning progress-bar progress-bar-animated progress-bar-striped" style="width: 33%">33%</div>
	<div class="bg-warning progress-bar progress-bar-striped" style="width: 33%">33%</div>
</div>

<div class="progress">
	<div class="bg-danger progress-bar" style="width: 45%">45%</div>
	<div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 45%">45%</div>
</div>

<div class="progress">
	<div class="progress-bar" style="width: 10%">10%</div>
	<div class="bg-warning progress-bar" style="width: 10%">10%</div>
	<div class="bg-success progress-bar" style="width: 10%">10%</div>
	<div class="bg-info progress-bar" style="width: 10%">10%</div>
	<div class="bg-success progress-bar progress-bar-striped" style="width: 10%">10%</div>
	<div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
	<div class="progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
</div>

```html
<!-- Progress with bg-success -->
<div class="progress">
	<div class="bg-success progress-bar progress-bar-striped" style="width: 25%">25%</div>
	<div class="bg-success progress-bar" style="width: 25%">25%</div>
	<div class="bg-success progress-bar progress-bar-animated progress-bar-striped" style="width: 25%">25%</div>
</div>

<!-- Progress with bg-info -->
<div class="progress">
	<div class="bg-info progress-bar progress-bar-striped" style="width: 50%">50%</div>
	<div class="bg-info progress-bar" style="width: 50%">50%</div>
</div>

<!-- Progress with bg-warning -->
<div class="progress">
	<div class="bg-warning progress-bar progress-bar-animated progress-bar-striped" style="width: 33%">33%</div>
	<div class="bg-warning progress-bar progress-bar-striped" style="width: 33%">33%</div>
</div>

<!-- Progress with bg-danger -->
<div class="progress">
	<div class="bg-danger progress-bar" style="width: 45%">45%</div>
	<div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 45%">45%</div>
</div>

<div class="progress">
	<div class="progress-bar" style="width: 10%">10%</div>
	<div class="bg-warning progress-bar" style="width: 10%">10%</div>
	<div class="bg-success progress-bar" style="width: 10%">10%</div>
	<div class="bg-info progress-bar" style="width: 10%">10%</div>
	<div class="bg-success progress-bar progress-bar-striped" style="width: 10%">10%</div>
	<div class="bg-danger progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
	<div class="progress-bar progress-bar-animated progress-bar-striped" style="width: 10%">10%</div>
</div>
```

### Progress Sizes

###### Normal

<div class="progress">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>

```html
<div class="progress">
	<div aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 25%;">25%</div>
</div>

<div class="progress-group">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>
```

###### Large

<div class="progress progress-lg">
	<div aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 45%;">45%</div>
</div>

<div class="progress-group progress-lg">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>

```html
<div class="progress progress-lg">
	<div aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 45%;">45%</div>
</div>

<div class="progress-group progress-lg">
	<div class="progress">
		<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="progress-bar" role="progressbar" style="width: 60%;"></div>
	</div>
	<div class="progress-group-addon">60%</div>
</div>
```

### Progress with Bootstrap 4 Background Utility

<div class="progress">
	<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="bg-success progress-bar" role="progressbar" style="width: 60%;">60% (Success)</div>
</div>

<div class="progress">
	<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="bg-info progress-bar" role="progressbar" style="width: 100%;">100% (Info)</div>
</div>

<div class="progress">
	<div aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="bg-warning progress-bar" role="progressbar" style="width: 40%;">40% (Warning)</div>
</div>

<div class="progress">
	<div aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" class="bg-danger progress-bar" role="progressbar" style="width: 80%;">80% (Danger)</div>
</div>


```html
<!-- Progress with bg-success -->
<div class="progress">
	<div aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" class="bg-success progress-bar" role="progressbar" style="width: 60%;">60% (Success)</div>
</div>

<!-- Progress with bg-info -->
<div class="progress">
	<div aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="bg-info progress-bar" role="progressbar" style="width: 100%;">100% (Info)</div>
</div>

<!-- Progress with bg-warning -->
<div class="progress">
	<div aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="bg-warning progress-bar" role="progressbar" style="width: 40%;">40% (Warning)</div>
</div>

<!-- Progress with bg-danger -->
<div class="progress">
	<div aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" class="bg-danger progress-bar" role="progressbar" style="width: 80%;">80% (Danger)</div>
</div>
```
