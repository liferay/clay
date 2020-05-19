---
title: 'Typography'
description: 'A basic reference for the definition of the visual identity and the organization of the content.'
order: 3
redirectFrom: '/docs/layout/typography.html'
---

<div class="clay-site-alert alert alert-info">Check the <a href="https://liferay.design/lexicon">Lexicon</a> <a href="https://liferay.design/lexicon/foundations/typography/">Typography Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Headings](#headings)
-   [Lead](#lead)
-   [Inline Text Elements](#inline-text-elements)
-   [Reference Mark](#reference-mark)
-   [Text Truncate](#text-truncate)
    -   [Text Truncate Inline](#text-truncate-inline)
-   [Contextual Texts](#contextual-texts)
    -   [Contextual Backgrounds](#contextual-backgrounds)
-   [Address](#address)
-   [Inline Code](#inline-code)
-   [User Input](#user-input)
-   [Variables](#variables)
-   [Sample Output](#sample-output)
-   [Blockquote](#blockquote)

</div>
</div>

## Headings

<div class="sheet-example">
    <h1>h1 Article Heading <small>Sub text</small></h1>
    <h2>h2 Article Heading <small>Sub text</small></h2>
    <h3>h3 Article Heading <small>Sub text</small></h3>
    <h4>h4 Article Heading <small>Sub text</small></h4>
    <h5>h5 Article Heading <small>Sub text</small></h5>
    <h6>h6 Article Heading <small>Sub text</small></h6>
</div>

```html
<h1>h1 Article Heading <small>Sub text</small></h1>
<h2>h2 Article Heading <small>Sub text</small></h2>
<h3>h3 Article Heading <small>Sub text</small></h3>
<h4>h4 Article Heading <small>Sub text</small></h4>
<h5>h5 Article Heading <small>Sub text</small></h5>
<h6>h6 Article Heading <small>Sub text</small></h6>
```

## Lead

<div class="sheet-example">
    <p class="lead"> Lead Body Text: Milk filter lungo as galão roast that crema blue mountain shop turkish. </p>
</div>

```html
<p class="lead">
	Lead Body Text: Milk filter lungo as galão roast that crema blue mountain
	shop turkish.
</p>
```

## Inline Text Elements

<div class="sheet-example">
    <p><a href="#1">Anchor Text: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a></p>
    <p><span>Regular Text: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span></p>
    <p><mark>Marked Text: Milk filter lungo as galão roast that crema blue mountain shop turkish.</mark></p>
    <p><del>Deleted Text: Milk filter lungo as galão roast that crema blue mountain shop turkish.</del></p>
    <p><s>Strikethrough Text: Milk filter lungo as galão roast that crema blue mountain shop turkish.</s></p>
    <p><ins>Inserted Text: Milk filter lungo as galão roast that crema blue mountain shop turkish.</ins></p>
    <p><u>Underlined Text: Milk filter lungo as galão roast that crema blue mountain shop turkish.</u></p>
    <p><small>Small Text: Milk filter lungo as galão roast that crema blue mountain shop turkish.</small></p>
    <p><strong>Bold Text: Milk filter lungo as galão roast that crema blue mountain shop turkish.</strong></p>
    <p><em>Italics: Milk filter lungo as galão roast that crema blue mountain shop turkish.</em></p>
    <p>Abbreviation: <abbr title="attribute">attr</abbr></p>
    <p>LOWERCASED TEXT: <span class="text-lowercase">LOWERCASED TEXT</span></p>
    <p>uppercased text: <span class="text-uppercase">uppercased text</span></p>
    <p>capitalized text: <span class="text-capitalize">capitalized text</span></p>
</div>

```html
<p>
	<a href="#1"
		>Anchor Text: Milk filter lungo as galão roast that crema blue mountain
		shop turkish.</a
	>
</p>
<p>
	<span
		>Regular Text: Milk filter lungo as galão roast that crema blue mountain
		shop turkish.</span
	>
</p>
<p>
	<mark
		>Marked Text: Milk filter lungo as galão roast that crema blue mountain
		shop turkish.</mark
	>
</p>
<p>
	<del
		>Deleted Text: Milk filter lungo as galão roast that crema blue mountain
		shop turkish.</del
	>
</p>
<p>
	<s
		>Strikethrough Text: Milk filter lungo as galão roast that crema blue
		mountain shop turkish.</s
	>
</p>
<p>
	<ins
		>Inserted Text: Milk filter lungo as galão roast that crema blue
		mountain shop turkish.</ins
	>
</p>
<p>
	<u
		>Underlined Text: Milk filter lungo as galão roast that crema blue
		mountain shop turkish.</u
	>
</p>
<p>
	<small
		>Small Text: Milk filter lungo as galão roast that crema blue mountain
		shop turkish.</small
	>
</p>
<p>
	<strong
		>Bold Text: Milk filter lungo as galão roast that crema blue mountain
		shop turkish.</strong
	>
</p>
<p>
	<em
		>Italics: Milk filter lungo as galão roast that crema blue mountain shop
		turkish.</em
	>
</p>
<p>Abbreviation: <abbr title="attribute">attr</abbr></p>
<p>LOWERCASED TEXT: <span class="text-lowercase">LOWERCASED TEXT</span></p>
<p>uppercased text: <span class="text-uppercase">uppercased text</span></p>
<p>capitalized text: <span class="text-capitalize">capitalized text</span></p>
```

## Reference Mark

Use `<span class="reference-mark"></span>` to add a reference mark next to some text.

<div class="sheet-example">
    <div>Reference Mark<span class="reference-mark" id="referenceMark1">[1]</span> with text.</div>
    <div>Reference Mark<span class="reference-mark" id="referenceMark4"><svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation"><use href="/images/icons/icons.svg#asterisk" /></svg></span> with lexicon-icon-asterisk.</div>
    <h4>Footnotes</h4>
    <div><a class="reference-mark" href="#referenceMark1">[1]</a> A reference to the text above, respectively.</div>
    <div><a class="reference-mark" href="#referenceMark4"><svg class="lexicon-icon lexicon-icon-asterisk" focusable="false" role="presentation"><use href="/images/icons/icons.svg#asterisk" /></svg></a> A reference to the text above, respectively.</div>
</div>

```html
<div>
	Reference Mark<span class="reference-mark" id="referenceMark1">[1]</span>
	with text.
</div>
<div>
	Reference Mark<span class="reference-mark" id="referenceMark4"
		><svg
			class="lexicon-icon lexicon-icon-asterisk"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#asterisk" /></svg
	></span>
	with lexicon-icon-asterisk.
</div>
<h4>Footnotes</h4>
<div>
	<a class="reference-mark" href="#referenceMark1">[1]</a> A reference to the
	text above, respectively.
</div>
<div>
	<a class="reference-mark" href="#referenceMark4"
		><svg
			class="lexicon-icon lexicon-icon-asterisk"
			focusable="false"
			role="presentation"
		>
			<use href="/images/icons/icons.svg#asterisk" /></svg
	></a>
	A reference to the text above, respectively.
</div>
```

## Text Truncate

Shorten long lines of text with the `text-truncate` class. This uses `display: block;` and should be used to truncate text in block level elements.

<div class="sheet-example">
    <p class="text-truncate">Milk filter lungo as galão roast that crema blue mountain shop turkish. Milk filter lungo as galão roast that crema blue mountain shop turkish. Milk filter lungo as galão roast that crema blue mountain shop turkish.</p>
</div>

```html
<p class="text-truncate">
	Milk filter lungo as galão roast that crema blue mountain shop turkish. Milk
	filter lungo as galão roast that crema blue mountain shop turkish. Milk
	filter lungo as galão roast that crema blue mountain shop turkish.
</p>
```

### Text Truncate Inline

You can also use the `text-truncate-inline` class to shorten long lines of text.

<div class="sheet-example">
    <div class="card" style="max-width:300px;">
        <p class="card-body">
            Milk filter lungo as galão roast that crema blue mountain shop turkish. <a class="text-truncate-inline" href="#1"><span class="text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span></a> Milk filter lungo as galão roast that crema <a class="text-truncate-inline" href="#1"><span class="text-truncate">this is also text-truncate</span></a> turkish. Milk filter lungo as galão roast that crema blue mountain shop turkish.
        </p>
    </div>
</div>

```html
<a class="text-truncate-inline" href="#1"
	><span class="text-truncate"
		>ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span
	></a
>
Milk filter lungo as galão roast that crema
<a class="text-truncate-inline" href="#1"
	><span class="text-truncate"></span
></a>
```

## Contextual Texts

<div class="sheet-example">
    <div>
        <a href="#1" class="text-muted">text-muted: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
    </div>
    <div>
        <a href="#1" class="text-primary">text-primary: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
    </div>
    <div>
        <a href="#1" class="text-secondary">text-secondary: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
    </div>
    <div>
        <a href="#1" class="text-info">text-info: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
    </div>
    <div>
        <a href="#1" class="text-success">text-success: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
    </div>
    <div>
        <a href="#1" class="text-warning">text-warning: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
    </div>
    <div>
        <a href="#1" class="text-danger">text-danger: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
    </div>
</div>

```html
<a href="#1" class="text-muted"
	>text-muted: Milk filter lungo as galão roast that crema blue mountain shop
	turkish.</a
>
<a href="#1" class="text-primary"
	>text-primary: Milk filter lungo as galão roast that crema blue mountain
	shop turkish.</a
>
<a href="#1" class="text-secondary"
	>text-secondary: Milk filter lungo as galão roast that crema blue mountain
	shop turkish.</a
>
<a href="#1" class="text-info"
	>text-info: Milk filter lungo as galão roast that crema blue mountain shop
	turkish.</a
>
<a href="#1" class="text-success"
	>text-success: Milk filter lungo as galão roast that crema blue mountain
	shop turkish.</a
>
<a href="#1" class="text-warning"
	>text-warning: Milk filter lungo as galão roast that crema blue mountain
	shop turkish.</a
>
<a href="#1" class="text-danger"
	>text-danger: Milk filter lungo as galão roast that crema blue mountain shop
	turkish.</a
>
```

### Contextual Backgrounds

<div class="sheet-example">
    <div>
        <span class="bg-primary">bg-primary: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span>
    </div>
    <div>
        <span class="bg-secondary">bg-secondary: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span>
    </div>
    <div>
        <span class="bg-success">bg-success: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span>
    </div>
    <div>
        <span class="bg-info">bg-info: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span>
    </div>
    <div>
        <span class="bg-warning">bg-warning: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span>
    </div>
    <div>
        <span class="bg-danger">bg-danger: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span>
    </div>
</div>

```html
<span class="bg-primary"
	>bg-primary: Milk filter lungo as galão roast that crema blue mountain shop
	turkish.</span
>
<span class="bg-secondary"
	>bg-secondary: Milk filter lungo as galão roast that crema blue mountain
	shop turkish.</span
>
<span class="bg-success"
	>bg-success: Milk filter lungo as galão roast that crema blue mountain shop
	turkish.</span
>
<span class="bg-info"
	>bg-info: Milk filter lungo as galão roast that crema blue mountain shop
	turkish.</span
>
<span class="bg-warning"
	>bg-warning: Milk filter lungo as galão roast that crema blue mountain shop
	turkish.</span
>
<span class="bg-danger"
	>bg-danger: Milk filter lungo as galão roast that crema blue mountain shop
	turkish.</span
>
```

## Address

<div class="sheet-example">
    <address>
        <strong>Liferay, Inc.</strong><br/>
        1400 Montefino Ave.<br/>
        Diamond Bar, CA 91765<br/>
        <abbr class="initialism" title="Phone">P:</abbr> +1-877-LIFERAY (1-877-543-3729)
    </address>
    <address>
        <strong>Full Name</strong><br/>
        <a href="mailto:#">joe.bloggs@liferay.com</a>
    </address>
</div>

```html
<address>
	<strong>Liferay, Inc.</strong><br />
	1400 Montefino Ave.<br />
	Diamond Bar, CA 91765<br />
	<abbr class="initialism" title="Phone">P:</abbr> +1-877-LIFERAY
	(1-877-543-3729)
</address>
<address>
	<strong>Full Name</strong><br />
	<a href="mailto:#">joe.bloggs@liferay.com</a>
</address>
```

## Inline Code

<div class="sheet-example">
    <p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>
</div>

```html
<p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>
```

## User Input

<div class="sheet-example">
    <p>For example, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd> to edit settings.</p>
</div>

```html
<p>
	For example, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd> to edit
	settings.
</p>
```

## Variables

<div class="sheet-example">
    <p>For example, <var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>
</div>

```html
<p>For example, <var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>
```

## Sample Output

<div class="sheet-example">
    <samp>This text is meant to be treated as sample output from a computer program.</samp>
</div>

```html
<samp
	>This text is meant to be treated as sample output from a computer
	program.</samp
>
```

## Blockquote

<div class="sheet-example">
    <blockquote class="blockquote">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</div>
    </blockquote>
    <blockquote class="blockquote">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</div>
        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
</div>

```html
<blockquote class="blockquote">
	<div>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
		erat a ante.
	</div>
</blockquote>
<blockquote class="blockquote">
	<div>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
		erat a ante.
	</div>
	<footer class="blockquote-footer">
		Someone famous in <cite title="Source Title">Source Title</cite>
	</footer>
</blockquote>
```
