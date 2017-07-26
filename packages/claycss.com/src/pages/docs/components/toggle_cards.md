---
title: Toggle Cards
description: Components
layout: "guide"
weight: 100
---

<article id="1">

### Toggle Card with Checkbox

> Checkboxes styled like a card.

<form action="#" class="row" method="get">
	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" type="checkbox" value="">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span>Regular Label</span>
				</div>
			</div>
		</label>
	</div>
	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" type="checkbox" value="">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-lock toggle-card-off">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>
					<svg class="lexicon-icon lexicon-icon-check toggle-card-on">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span>Regular Label</span>
				</div>
			</div>
		</label>
	</div>
	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" type="checkbox" value="">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-lock toggle-card-off">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>
					<svg class="lexicon-icon lexicon-icon-check toggle-card-on">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span class="toggle-card-off">labelOff</span>
					<span class="toggle-card-on">labelOn</span>
				</div>
			</div>
		</label>
	</div>
</form>

```xml
<form action="#" class="row" method="get">
	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" type="checkbox" value="">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span>Regular Label</span>
				</div>
			</div>
		</label>
	</div>

	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" type="checkbox" value="">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-lock toggle-card-off">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>

					<svg class="lexicon-icon lexicon-icon-check toggle-card-on">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span>Regular Label</span>
				</div>
			</div>
		</label>
	</div>

	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" type="checkbox" value="">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-lock toggle-card-off">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>

					<svg class="lexicon-icon lexicon-icon-check toggle-card-on">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span class="toggle-card-off">labelOff</span>
					<span class="toggle-card-on">labelOn</span>
				</div>
			</div>
		</label>
	</div>
</form>
```

</article>

<article id="2">

### Toggle Card with Radio

> Radio Buttons styled like a card.

<form action="#" class="row" method="get">
	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" id="toggleCardRadioOption1" name="toggleCardRadio1" type="radio" value="option1">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span>Regular Label</span>
				</div>
			</div>
		</label>
	</div>
	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" id="toggleCardRadioOption2" name="toggleCardRadio1" type="radio" value="option2">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-lock toggle-card-off">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>
					<svg class="lexicon-icon lexicon-icon-check toggle-card-on">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span>Regular Label</span>
				</div>
			</div>
		</label>
	</div>
	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" id="toggleCardRadioOption3" name="toggleCardRadio1" type="radio" value="option3">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-lock toggle-card-off">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>
					<svg class="lexicon-icon lexicon-icon-check toggle-card-on">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span class="toggle-card-off">labelOff</span>
					<span class="toggle-card-on">labelOn</span>
				</div>
			</div>
		</label>
	</div>
</form>

```xml
<form action="#" class="row" method="get">
	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" id="toggleCardRadioOption1" name="toggleCardRadio1" type="radio" value="option1">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-check">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span>Regular Label</span>
				</div>
			</div>
		</label>
	</div>

	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" id="toggleCardRadioOption2" name="toggleCardRadio1" type="radio" value="option2">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-lock toggle-card-off">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>

					<svg class="lexicon-icon lexicon-icon-check toggle-card-on">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span>Regular Label</span>
				</div>
			</div>
		</label>
	</div>

	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" id="toggleCardRadioOption3" name="toggleCardRadio1" type="radio" value="option3">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-lock toggle-card-off">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>

					<svg class="lexicon-icon lexicon-icon-check toggle-card-on">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span class="toggle-card-off">labelOff</span>
					<span class="toggle-card-on">labelOn</span>
				</div>
			</div>
		</label>
	</div>
</form>
```

</article>

<article id="3">

### Disabled Toggle Cards

> Disable a toggle-card by adding the attribute `disabled="disabled"` to `<input class="toggle-card-check" type="checkbox">`.

<form action="#" class="row" method="get">
	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" disabled type="checkbox" value="">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-lock toggle-card-off">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>
					<svg class="lexicon-icon lexicon-icon-check toggle-card-on">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span class="toggle-card-off">labelOff</span>
					<span class="toggle-card-on">labelOn</span>
				</div>
			</div>
		</label>
	</div>
	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" disabled type="radio" value="">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-lock toggle-card-off">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>
					<svg class="lexicon-icon lexicon-icon-check toggle-card-on">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span class="toggle-card-off">labelOff</span>
					<span class="toggle-card-on">labelOn</span>
				</div>
			</div>
		</label>
	</div>
</form>

```xml
<form action="#" class="row" method="get">
	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" disabled type="checkbox" value="">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-lock toggle-card-off">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>

					<svg class="lexicon-icon lexicon-icon-check toggle-card-on">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span class="toggle-card-off">labelOff</span>
					<span class="toggle-card-on">labelOn</span>
				</div>
			</div>
		</label>
	</div>

	<div class="ml-2">
		<label class="toggle-card">
			<input class="toggle-card-check" disabled type="radio" value="">
			<div class="toggle-card-container">
				<div class="toggle-card-icon">
					<svg class="lexicon-icon lexicon-icon-lock toggle-card-off">
						<use xlink:href="/vendor/lexicon/icons.svg#lock" />
					</svg>

					<svg class="lexicon-icon lexicon-icon-check toggle-card-on">
						<use xlink:href="/vendor/lexicon/icons.svg#check" />
					</svg>
				</div>
				<div class="toggle-card-label">
					<span class="toggle-card-off">labelOff</span>
					<span class="toggle-card-on">labelOn</span>
				</div>
			</div>
		</label>
	</div>
</form>
```

</article>

