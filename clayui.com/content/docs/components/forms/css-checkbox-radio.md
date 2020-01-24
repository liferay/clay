---
title: 'Checkbox and Radio'
description: 'Checkboxes and radios provide users with different selection and activation tools.'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Checkboxes and Radios](#checkboxes-and-radios)
    -   [Default (stacked)](<#default-(stacked)>)
    -   [Inline](#inline)
    -   [Without labels](#without-labels)
-   [Custom Checkboxes and radios](#custom-checkboxes-and-radios)
    -   [Checkboxes](#checkboxes)
    -   [Radios](#radios)
-   [Inline](#inline)
    -   [Disabled](#disabled)

</div>
</div>

<div class="clay-site-alert alert alert-info">
	Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/core-components/forms/radio-check-toggle/">Checkbox and Radio Pattern</a> for a more in-depth look at the motivations and proper usage of this component.
</div>

<div class="clay-site-alert alert alert-warning">
	Don't forget to check <a href="https://www.w3.org/TR/wai-aria-practices/#checkbox">WAI-ARIA</a> accessibility pratices for checkboxes when writting your markup.
</div>

## Checkboxes and Radios

Default checkboxes and radios are improved upon with the help of `.form-check`, **a single class for both input types that improves the layout and behavior of their HTML elements**. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.
By [Bootstrap](https://getbootstrap.com/docs/4.1/components/forms/#checkboxes-and-radios)

### Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`.

<div class="sheet-example">
	<div class="form-check">
		<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
		<label class="form-check-label" for="defaultCheck1">
			Default checkbox
		</label>
	</div>
	<div class="form-check">
		<input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
		<label class="form-check-label" for="defaultCheck2">
			Disabled checkbox
		</label>
	</div>
</div>

```html
<div class="form-check">
	<input
		class="form-check-input"
		type="checkbox"
		value=""
		id="defaultCheck1"
	/>
	<label class="form-check-label" for="defaultCheck1">
		Default checkbox
	</label>
</div>
<div class="form-check">
	<input
		class="form-check-input"
		type="checkbox"
		value=""
		id="defaultCheck2"
		disabled
	/>
	<label class="form-check-label" for="defaultCheck2">
		Disabled checkbox
	</label>
</div>
```

<div class="sheet-example">
	<div class="form-check">
		<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
		<label class="form-check-label" for="exampleRadios1">
			Default radio
		</label>
	</div>
	<div class="form-check">
		<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
		<label class="form-check-label" for="exampleRadios2">
			Second default radio
		</label>
	</div>
	<div class="form-check">
		<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
		<label class="form-check-label" for="exampleRadios3">
			Disabled radio
		</label>
	</div>
</div>

```html
<div class="form-check">
	<input
		class="form-check-input"
		type="radio"
		name="exampleRadios"
		id="exampleRadios1"
		value="option1"
		checked
	/>
	<label class="form-check-label" for="exampleRadios1">
		Default radio
	</label>
</div>
<div class="form-check">
	<input
		class="form-check-input"
		type="radio"
		name="exampleRadios"
		id="exampleRadios2"
		value="option2"
	/>
	<label class="form-check-label" for="exampleRadios2">
		Second default radio
	</label>
</div>
<div class="form-check">
	<input
		class="form-check-input"
		type="radio"
		name="exampleRadios"
		id="exampleRadios3"
		value="option3"
		disabled
	/>
	<label class="form-check-label" for="exampleRadios3">
		Disabled radio
	</label>
</div>
```

### Inline

Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to any `.form-check`.

<div class="sheet-example">
	<div class="form-check form-check-inline">
		<label class="form-check-label">
			<input class="form-check-input" type="checkbox" value="" id="inlineCheckbox1">
			<span class="form-check-label-text">1</span>
		</label>
	</div>
	<div class="form-check form-check-inline">
		<label class="form-check-label">
			<input class="form-check-input" type="checkbox" value="" id="inlineCheckbox2" disabled>
			<span class="form-check-label-text">2</span>
		</label>
	</div>
</div>

```html
<div class="form-check form-check-inline">
	<label class="form-check-label">
		<input
			class="form-check-input"
			type="checkbox"
			value=""
			id="inlineCheckbox1"
		/>
		<span class="form-check-label-text">1</span>
	</label>
</div>
<div class="form-check form-check-inline">
	<label class="form-check-label">
		<input
			class="form-check-input"
			type="checkbox"
			value=""
			id="inlineCheckbox2"
			disabled
		/>
		<span class="form-check-label-text">2</span>
	</label>
</div>
```

<div class="sheet-example">
	<div class="form-check form-check-inline">
		<label class="form-check-label">
			<input class="form-check-input" type="radio" name="inlineRadioOptions" value="option1" id="inlineRadio1">
			<span class="form-check-label-text">1</span>
		</label>
	</div>
	<div class="form-check form-check-inline">
		<label class="form-check-label">
			<input class="form-check-input" type="radio" name="inlineRadioOptions" value="option2" id="inlineRadio2" disabled>
			<span class="form-check-label-text">2</span>
		</label>
	</div>
</div>

```html
<div class="form-check form-check-inline">
	<label class="form-check-label">
		<input
			class="form-check-input"
			type="radio"
			name="inlineRadioOptions"
			value="option1"
			id="inlineRadio1"
		/>
		<span class="form-check-label-text">1</span>
	</label>
</div>
<div class="form-check form-check-inline">
	<label class="form-check-label">
		<input
			class="form-check-input"
			type="radio"
			name="inlineRadioOptions"
			value="option2"
			id="inlineRadio2"
			disabled
		/>
		<span class="form-check-label-text">2</span>
	</label>
</div>
```

### Without labels

Remember to still provide some form of label for assistive technologies (for instance, using `aria-label`).

<div class="sheet-example">
	<div class="form-check">
		<label class="form-check-label">
			<input class="form-check-input" type="checkbox" id="withoutLabelCheckbox" value="">
		</label>
	</div>
	<div class="form-check">
		<label class="form-check-label">
			<input class="form-check-input" type="checkbox" id="withoutLabelCheckbox1" value="">
		</label>
	</div>
</div>

```html
<div class="form-check">
	<label class="form-check-label">
		<input
			class="form-check-input"
			type="checkbox"
			id="withoutLabelCheckbox"
			value=""
		/>
	</label>
</div>
<div class="form-check">
	<label class="form-check-label">
		<input
			class="form-check-input"
			type="checkbox"
			id="withoutLabelCheckbox1"
			value=""
		/>
	</label>
</div>
```

## Custom Checkboxes and radios

The two ways for you to structure the marking of a Checkbox and Radio:

It is packaged in a classless `<label>` and `<label class="custom-control-label"/>` is replaced by `<span>`:

```html
<div class="custom-control custom-checkbox">
	<label>
		<input class="custom-control-input" type="checkbox" id="customCheck1" />
		<span class="custom-control-label">
			<span class="custom-control-label-text"
				>Check this custom checkbox</span
			>
		</span>
	</label>
</div>
```

Using the `id` binding engine with `<label />`and `<input />`.

```html
<div class="custom-control custom-checkbox">
	<input class="custom-control-input" type="checkbox" id="customCheck2" />
	<label class="custom-control-label" for="customCheck2">
		<span class="custom-control-label-text"
			>Check this custom checkbox</span
		>
	</label>
</div>
```

### Checkboxes

<div class="sheet-example">
	<div class="custom-control custom-checkbox">
		<label>
			<input class="custom-control-input" type="checkbox" id="customCheck1"/>
			<span class="custom-control-label">
				<span class="custom-control-label-text">Check this custom checkbox</span>
			</span>
		</label>
	</div>
</div>

```html
<div class="custom-control custom-checkbox">
	<label>
		<input class="custom-control-input" type="checkbox" id="customCheck1" />
		<span class="custom-control-label">
			<span class="custom-control-label-text"
				>Check this custom checkbox</span
			>
		</span>
	</label>
</div>
```

Custom checkboxes can also utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

<div class="sheet-example">
	<div class="custom-control custom-checkbox">
		<label>
			<input class="clay-site-custom-checkbox-indeterminate custom-control-input" type="checkbox">
			<span class="custom-control-label">
				<span class="custom-control-label-text">Indeterminate</span>
			</span>
		</label>
	</div>
</div>

### Radios

<div class="sheet-example">
	<div class="custom-control custom-radio">
		<label>
			<input checked="" class="custom-control-input" id="radio1" name="customRadio" type="radio">
			<span class="custom-control-label">
				<span class="custom-control-label-text">Toggle this custom radio</span>
			</span>
		</label>
	</div>
	<div class="custom-control custom-radio">
		<label>
			<input class="custom-control-input" id="radio1" name="customRadio" type="radio">
			<span class="custom-control-label">
				<span class="custom-control-label-text">Or toggle this other custom radio</span>
			</span>
		</label>
	</div>
</div>

```html
<div class="custom-control custom-radio">
	<label>
		<input
			checked=""
			class="custom-control-input"
			id="radio1"
			name="customRadio"
			type="radio"
		/>
		<span class="custom-control-label">
			<span class="custom-control-label-text"
				>Toggle this custom radio</span
			>
		</span>
	</label>
</div>
<div class="custom-control custom-radio">
	<label>
		<input
			class="custom-control-input"
			id="radio1"
			name="customRadio"
			type="radio"
		/>
		<span class="custom-control-label">
			<span class="custom-control-label-text"
				>Or toggle this other custom radio</span
			>
		</span>
	</label>
</div>
```

### Inline

<div class="sheet-example">
	<div class="custom-control custom-radio custom-control-inline">
		<label>
			<input checked="" class="custom-control-input" id="radio1" name="customInlineRadio" type="radio">
			<span class="custom-control-label">
				<span class="custom-control-label-text">Toggle this custom radio</span>
			</span>
		</label>
	</div>
	<div class="custom-control custom-radio custom-control-inline">
		<label>
			<input class="custom-control-input" id="radio1" name="customInlineRadio" type="radio">
			<span class="custom-control-label">
				<span class="custom-control-label-text">Or toggle this other custom radio</span>
			</span>
		</label>
	</div>
</div>

```html
<div class="custom-control custom-radio custom-control-inline">
	<label>
		<input
			checked=""
			class="custom-control-input"
			id="radio1"
			name="customInlineRadio"
			type="radio"
		/>
		<span class="custom-control-label">
			<span class="custom-control-label-text"
				>Toggle this custom radio</span
			>
		</span>
	</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
	<label>
		<input
			class="custom-control-input"
			id="radio1"
			name="customInlineRadio"
			type="radio"
		/>
		<span class="custom-control-label">
			<span class="custom-control-label-text"
				>Or toggle this other custom radio</span
			>
		</span>
	</label>
</div>
```

### Disabled

<div class="sheet-example">
	<div class="custom-control custom-radio">
		<label>
			<input disabled="" class="custom-control-input" id="radio1" name="customDisabledRadio" type="radio">
			<span class="custom-control-label">
				<span class="custom-control-label-text">Toggle this custom radio</span>
			</span>
		</label>
	</div>
	<div class="custom-control custom-checkbox">
		<label>
			<input disabled="" class="custom-control-input" type="checkbox" id="customDisabledCheck1"/>
			<span class="custom-control-label">
				<span class="custom-control-label-text">Check this custom checkbox</span>
			</span>
		</label>
	</div>
</div>

```html
<div class="custom-control custom-radio">
	<label>
		<input
			disabled=""
			class="custom-control-input"
			id="radio1"
			name="customDisabledRadio"
			type="radio"
		/>
		<span class="custom-control-label">
			<span class="custom-control-label-text"
				>Toggle this custom radio</span
			>
		</span>
	</label>
</div>
<div class="custom-control custom-checkbox">
	<label>
		<input
			disabled=""
			class="custom-control-input"
			type="checkbox"
			id="customDisabledCheck1"
		/>
		<span class="custom-control-label">
			<span class="custom-control-label-text"
				>Check this custom checkbox</span
			>
		</span>
	</label>
</div>
```
