---
title: 'C Feedback'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [C Feedback](#css-c-feedback)
-   [C Feedback Group](#css-c-feedback-group)
-   [C Feedback Variants](#css-c-feedback-variants)
-   [C Feedback Inherit](#css-c-feedback-inherit)
-   [C Feedback Trimmed](#css-c-feedback-trimmed)
-   [Examples](#css-c-feedback-examples)

</div>
</div>

## C Feedback(#css-c-feedback)

A utility for providing feedback notices to communicate errors or issues that may impact a user's experience with the application. `c-feedback` is `display: inline` by default to make it easier to use with other text that is rendered inline. If you would like this component to occupy a full line, wrap it with `c-feedback-stacked`.

<div class="c-feedback">
	<span class="c-feedback-indicator">
		<svg class="lexicon-icon lexicon-icon-question-circle-full" focusable="false" role="presentation">
			<use xlink:href="/images/icons/icons.svg#question-circle-full" />
		</svg>
	</span>
	<span class="c-feedback-indicator">
		<svg class="lexicon-icon lexicon-icon-question-circle-full" focusable="false" role="presentation">
			<use xlink:href="/images/icons/icons.svg#question-circle-full" />
		</svg>
	</span>
	<span class="c-feedback-indicator">
		<svg class="lexicon-icon lexicon-icon-question-circle-full" focusable="false" role="presentation">
			<use xlink:href="/images/icons/icons.svg#question-circle-full" />
		</svg>
	</span>
	<span class="c-feedback-lead">c-feedback-lead: </span>
	<span class="c-feedback-text">c-feedback-text with a <a href="#1">link</a>.</span>
	<span class="c-feedback-indicator">
		<svg class="lexicon-icon lexicon-icon-question-circle-full" focusable="false" role="presentation">
			<use xlink:href="/images/icons/icons.svg#question-circle-full" />
		</svg>
	</span>
	<span class="c-feedback-indicator">
		<svg class="lexicon-icon lexicon-icon-question-circle-full" focusable="false" role="presentation">
			<use xlink:href="/images/icons/icons.svg#question-circle-full" />
		</svg>
	</span>
</div>
Some inline text outside of c-feedback.

```html
<div class="c-feedback">
	<span class="c-feedback-indicator">
		<svg
			class="lexicon-icon lexicon-icon-question-circle-full"
			focusable="false"
			role="presentation"
		>
			<use xlink:href="/images/icons/icons.svg#question-circle-full" />
		</svg>
	</span>
	<span class="c-feedback-indicator">
		<svg
			class="lexicon-icon lexicon-icon-question-circle-full"
			focusable="false"
			role="presentation"
		>
			<use xlink:href="/images/icons/icons.svg#question-circle-full" />
		</svg>
	</span>
	<span class="c-feedback-indicator">
		<svg
			class="lexicon-icon lexicon-icon-question-circle-full"
			focusable="false"
			role="presentation"
		>
			<use xlink:href="/images/icons/icons.svg#question-circle-full" />
		</svg>
	</span>
	<span class="c-feedback-lead">c-feedback-lead: </span>
	<span class="c-feedback-text"
		>c-feedback-text with a <a href="#1">link</a>.</span
	>
	<span class="c-feedback-indicator">
		<svg
			class="lexicon-icon lexicon-icon-question-circle-full"
			focusable="false"
			role="presentation"
		>
			<use xlink:href="/images/icons/icons.svg#question-circle-full" />
		</svg>
	</span>
	<span class="c-feedback-indicator">
		<svg
			class="lexicon-icon lexicon-icon-question-circle-full"
			focusable="false"
			role="presentation"
		>
			<use xlink:href="/images/icons/icons.svg#question-circle-full" />
		</svg>
	</span>
</div>
Some inline text outside of c-feedback.
```

## C Feedback Group(#css-c-feedback-group)

The container `c-feedback-stacked` stacks feedback messages instead of rendering them inline. It provides 4px vertical spacing. This generally is used for providing feedback under form elements.

<div class="c-feedback-stacked">
	<span class="c-feedback c-feedback-danger">
		<span class="c-feedback-indicator">
			<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#exclamation-full" />
			</svg>
		</span>
		<span class="c-feedback-lead">This field is empty, please introduce a valid name with at least two characters.</span>
	</span>
	<span class="c-feedback c-feedback-secondary">
		<span class="c-feedback-lead">You can use the comma to enter tags.</span>
	</span>
</div>

```html
<div class="c-feedback-stacked">
	<span class="c-feedback c-feedback-danger">
		<span class="c-feedback-indicator">
			<svg
				class="lexicon-icon lexicon-icon-exclamation-full"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#exclamation-full" />
			</svg>
		</span>
		<span class="c-feedback-lead"
			>This field is empty, please introduce a valid name with at least
			two characters.</span
		>
	</span>
	<span class="c-feedback c-feedback-secondary">
		<span class="c-feedback-lead"
			>You can use the comma to enter tags.</span
		>
	</span>
</div>
```

## C Feedback Variants(#css-c-feedback-variants)

<div class="c-feedback-stacked">
	<span class="c-feedback c-feedback-danger">
		<span class="c-feedback-indicator">
			<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#exclamation-full" />
			</svg>
		</span>
		<span class="c-feedback-lead">Error Indicator</span>
	</span>
	<span class="c-feedback c-feedback-success">
		<span class="c-feedback-indicator">
			<svg class="lexicon-icon lexicon-icon-check-circle-full" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#check-circle-full" />
			</svg>
		</span>
		<span class="c-feedback-lead">Success Indicator</span>
	</span>
	<span class="c-feedback c-feedback-warning">
		<span class="c-feedback-indicator">
			<svg class="lexicon-icon lexicon-icon-warning-full" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#warning-full" />
			</svg>
		</span>
		<span class="c-feedback-lead">Warning Indicator</span>
	</span>
	<span class="c-feedback c-feedback-info">
		<span class="c-feedback-indicator">
			<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#exclamation-full" />
			</svg>
		</span>
		<span class="c-feedback-lead">Info Indicator</span>
	</span>
	<span class="c-feedback c-feedback-secondary">
		<span class="c-feedback-lead">Help Text</span>
	</span>
</div>

```html
<div class="c-feedback-stacked">
	<span class="c-feedback c-feedback-danger">
		<span class="c-feedback-indicator">
			<svg
				class="lexicon-icon lexicon-icon-exclamation-full"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#exclamation-full" />
			</svg>
		</span>
		<span class="c-feedback-lead">Error Indicator</span>
	</span>
	<span class="c-feedback c-feedback-success">
		<span class="c-feedback-indicator">
			<svg
				class="lexicon-icon lexicon-icon-check-circle-full"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#check-circle-full" />
			</svg>
		</span>
		<span class="c-feedback-lead">Success Indicator</span>
	</span>
	<span class="c-feedback c-feedback-warning">
		<span class="c-feedback-indicator">
			<svg
				class="lexicon-icon lexicon-icon-warning-full"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#warning-full" />
			</svg>
		</span>
		<span class="c-feedback-lead">Warning Indicator</span>
	</span>
	<span class="c-feedback c-feedback-info">
		<span class="c-feedback-indicator">
			<svg
				class="lexicon-icon lexicon-icon-exclamation-full"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#exclamation-full" />
			</svg>
		</span>
		<span class="c-feedback-lead">Info Indicator</span>
	</span>
	<span class="c-feedback c-feedback-secondary">
		<span class="c-feedback-lead">Help Text</span>
	</span>
</div>
```

## C Feedback Inherit(#css-c-feedback-inherit)

The `c-feedback-inherit` modifier sets `font-size: inherit` on `c-feedback` which takes on the font size of the parent element. The default `font-size` is 0.875rem or 14px.

<div class="c-feedback c-feedback-inherit">
	<span class="c-feedback-indicator">
		<svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation">
			<use xlink:href="/images/icons/icons.svg#exclamation-full" />
		</svg>
	</span>
	<span class="c-feedback-lead">c-feedback-lead</span>
</div>

```html
<div class="c-feedback c-feedback-inherit">
	<span class="c-feedback-indicator">
		<svg
			class="lexicon-icon lexicon-icon-exclamation-full"
			focusable="false"
			role="presentation"
		>
			<use xlink:href="/images/icons/icons.svg#exclamation-full" />
		</svg>
	</span>
	<span class="c-feedback-lead">c-feedback-lead</span>
</div>
```

## C Feedback Trimmed(#css-c-feedback-trimmed)

If you are trimming whitespace in your final markup, use the modifier `c-feedback-trimmed` on `c-feedback` to render the proper spacing between text and icons.

<div class="c-feedback c-feedback-trimmed"><span class="c-feedback-indicator"><svg class="lexicon-icon lexicon-icon-exclamation-full" focusable="false" role="presentation"><use xlink:href="/images/icons/icons.svg#exclamation-full" /></svg></span><span class="c-feedback-lead">c-feedback-lead</span></div>

```html
<div class="c-feedback c-feedback-trimmed">
	<span class="c-feedback-indicator"
		><svg
			class="lexicon-icon lexicon-icon-exclamation-full"
			focusable="false"
			role="presentation"
		>
			<use
				xlink:href="/images/icons/icons.svg#exclamation-full"
			/></svg></span
	><span class="c-feedback-lead">c-feedback-lead</span>
</div>
```

## Examples(#css-c-feedback-examples)

<div>
	<span class="c-feedback c-feedback-secondary">
		<span class="c-feedback-text">Total Views</span>
		<span class="c-feedback-indicator">
			<svg class="lexicon-icon lexicon-icon-question-circle" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#question-circle" />
			</svg>
		</span>
	</span>
	<span class="c-feedback c-feedback-warning">
		<span class="c-feedback-indicator">
			<svg class="lexicon-icon lexicon-icon-warning-full" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#warning-full" />
			</svg>
		</span>
	</span>
</div>
<div>
	<span class="c-feedback c-feedback-secondary">
		<span class="c-feedback-text">Total Reads</span>
		<span class="c-feedback-indicator">
			<svg class="lexicon-icon lexicon-icon-question-circle" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#question-circle" />
			</svg>
		</span>
	</span>
	<span class="c-feedback">
		<span class="c-feedback-lead">121</span>
	</span>
</div>
<div>
	<div class="c-feedback c-feedback-warning">
		<span class="c-feedback-indicator">
			<svg class="lexicon-icon lexicon-icon-warning-full" focusable="false" role="presentation">
				<use xlink:href="/images/icons/icons.svg#warning-full" />
			</svg>
		</span>
		<span class="c-feedback-lead">Data is temporarily unavailable</span>
	</div>
</div>

```html
<div>
	<span class="c-feedback c-feedback-secondary">
		<span class="c-feedback-text">Total Views</span>
		<span class="c-feedback-indicator">
			<svg
				class="lexicon-icon lexicon-icon-question-circle"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#question-circle" />
			</svg>
		</span>
	</span>
	<span class="c-feedback c-feedback-warning">
		<span class="c-feedback-indicator">
			<svg
				class="lexicon-icon lexicon-icon-warning-full"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#warning-full" />
			</svg>
		</span>
	</span>
</div>
<div>
	<span class="c-feedback c-feedback-secondary">
		<span class="c-feedback-text">Total Reads</span>
		<span class="c-feedback-indicator">
			<svg
				class="lexicon-icon lexicon-icon-question-circle"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#question-circle" />
			</svg>
		</span>
	</span>
	<span class="c-feedback">
		<span class="c-feedback-lead">121</span>
	</span>
</div>
<div>
	<div class="c-feedback c-feedback-warning">
		<span class="c-feedback-indicator">
			<svg
				class="lexicon-icon lexicon-icon-warning-full"
				focusable="false"
				role="presentation"
			>
				<use xlink:href="/images/icons/icons.svg#warning-full" />
			</svg>
		</span>
		<span class="c-feedback-lead">Data is temporarily unavailable</span>
	</div>
</div>
```
