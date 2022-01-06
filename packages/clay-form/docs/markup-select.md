---
title: 'Select'
description: 'A form control element used to select from several provided options and enter data.'
lexiconDefinition: 'https://liferay.design/lexicon/core-components/forms/selector/'
mainTabURL: 'docs/components/select.html'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Select Menu](#css-select-menu)
-   [Disabled](#css-select-menu-disabled)
-   [Size](#css-select-menu-size)
-   [Multiple](#css-select-menu-multiple)
-   [Sm](#css-select-menu-sm)
-   [Lg](#css-select-menu-lg)
-   [Other Elements](#css-select-menu-other-elements)

</div>
</div>

## Select Menu(#css-select-menu)

<div class="sheet-example">
	<div class="form-group">
		<label for="regularSelectElement">Select Element</label>
		<select class="form-control" id="regularSelectElement">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
</div>

```html
<div class="form-group">
	<select class="form-control" id="regularSelectElement">
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
	</select>
</div>
```

## Disabled(#css-select-menu-disabled)

<div class="sheet-example">
	<div class="form-group">
		<label class="disabled" for="regularSelectElementDisabled">Select Element Disabled</label>
		<select class="form-control" disabled id="regularSelectElementDisabled">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
</div>

```html
<div class="form-group">
	<label class="disabled" for="regularSelectElementDisabled"
		>Select Element Disabled</label
	>
	<select class="form-control" disabled id="regularSelectElementDisabled">
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
	</select>
</div>
```

## Size(#css-select-menu-size)

<div class="sheet-example">
	<div class="form-group">
		<label for="selectElementWithSize5">Select Element with Size 5</label>
		<select class="form-control" id="selectElementWithSize5" size="5">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
			<option>Sample 5</option>
			<option>Sample 6</option>
			<option>Sample 7</option>
			<option>Sample 8</option>
		</select>
	</div>
	<div class="form-group">
		<label for="selectElementWithSize10">Select Element with Size 10</label>
		<select class="form-control" id="selectElementWithSize10" size="10">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
			<option>Sample 5</option>
			<option>Sample 6</option>
			<option>Sample 7</option>
			<option>Sample 8</option>
		</select>
	</div>
</div>

```html
<div class="form-group">
	<label for="selectElementWithSize5">Select Element with Size 5</label>
	<select class="form-control" id="selectElementWithSize5" size="5">
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
		<option>Sample 5</option>
		<option>Sample 6</option>
		<option>Sample 7</option>
		<option>Sample 8</option>
	</select>
</div>

<div class="form-group">
	<label for="selectElementWithSize10">Select Element with Size 10</label>
	<select class="form-control" id="selectElementWithSize10" size="10">
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
		<option>Sample 5</option>
		<option>Sample 6</option>
		<option>Sample 7</option>
		<option>Sample 8</option>
	</select>
</div>
```

## Multiple(#css-select-menu-multiple)

<div class="sheet-example">
	<div class="form-group">
		<label for="multipleSelectOptionsSelectElement">Select Element with Multiple Select Options</label>
		<select class="form-control" id="multipleSelectOptionsSelectElement" multiple>
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
			<option>Sample 5</option>
			<option>Sample 6</option>
			<option>Sample 7</option>
			<option>Sample 8</option>
		</select>
	</div>
</div>

```html
<div class="form-group">
	<label for="multipleSelectOptionsSelectElement"
		>Select Element with Multiple Select Options</label
	>
	<select
		class="form-control"
		id="multipleSelectOptionsSelectElement"
		multiple
	>
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
		<option>Sample 5</option>
		<option>Sample 6</option>
		<option>Sample 7</option>
		<option>Sample 8</option>
	</select>
</div>
```

## Sm(#css-select-menu-sm)

<div class="sheet-example">
	<div class="form-group">
		<label for="regularSelectElementSm">Select Element Sm</label>
		<select class="form-control form-control-sm" id="regularSelectElementSm">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
</div>

```html
<div class="form-group">
	<label for="regularSelectElementSm">Select Element Sm</label>
	<select class="form-control form-control-sm" id="regularSelectElementSm">
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
	</select>
</div>
```

## Lg(#css-select-menu-lg)

<div class="sheet-example">
	<div class="form-group">
		<label for="regularSelectElementLg">Select Element Lg</label>
		<select class="form-control form-control-lg" id="regularSelectElementLg">
			<option>Sample 1</option>
			<option>Sample 2</option>
			<option>Sample 3</option>
			<option>Sample 4</option>
		</select>
	</div>
</div>

```html
<div class="form-group">
	<label for="regularSelectElementLg">Select Element Lg</label>
	<select class="form-control form-control-lg" id="regularSelectElementLg">
		<option>Sample 1</option>
		<option>Sample 2</option>
		<option>Sample 3</option>
		<option>Sample 4</option>
	</select>
</div>
```

## Other Elements(#css-other-elements)

The classes `form-control form-control-select` can be used to style various HTML elements like a select element. An example for this use case is a dropdown menu that is trigged by a select element.

<div class="sheet-example">
	<div class="form-group">
		<label>A Div Styled Like a Select Element</label>
		<div class="form-control form-control-select" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</div>
	</div>
	<div class="form-group">
		<label>An Anchor Styled Like a Select Element</label>
		<a class="form-control form-control-select" href="#1" role="button" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</a>
	</div>
	<div class="form-group">
		<label>A Button Styled Like a Select Element</label>
		<button class="form-control form-control-select" title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual" type="button">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsualReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</button>
	</div>
</div>

```html
<div class="form-group">
	<label>A Div Styled Like a Select Element</label>
	<div class="form-control form-control-select" title="...">...</div>
</div>

<div class="form-group">
	<label>An Anchor Styled Like a Select Element</label>
	<a
		class="form-control form-control-select"
		href="#1"
		role="button"
		title="..."
		>...</a
	>
</div>

<div class="form-group">
	<label>A Button Styled Like a Select Element</label>
	<button class="form-control form-control-select" title="..." type="button">
		...
	</button>
</div>
```
