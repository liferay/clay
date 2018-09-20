---
title: "Typography"
---

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/designPrinciples/typography.html">Typography Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

<article id="headings">
<h3 class="component-title">
    <a href="#headings">Headings</a>
</h3>

<div class="sheet">
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
</article>

<article id="lead">
<h3 class="component-title">
    <a href="#lead">Lead</a>
</h3>

<div class="sheet">
    <p class="lead"> Lead Body Text: Milk filter lungo as galão roast that crema blue mountain shop turkish. </p>
</div>

```html
<p class="lead"> Lead Body Text: Milk filter lungo as galão roast that crema blue mountain shop turkish. </p>
```
</article>

<article id="inline-text-elements">
<h3 class="component-title">
    <a href="#inline-text-elements">Inline Text Elements</a>
</h3>

<div class="sheet">
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
```
</article>

<article id="reference-mark">
<h3 class="component-title">
    <a href="#reference-mark">Reference Mark</a>
</h3>

> Add a reference mark next to some text with <code>&lt;span class="reference-mark"&gt;&lt;/span&gt;</code>.

<div class="sheet">
    <div>Reference Mark<span class="reference-mark" id="referenceMark1">[1]</span> with text.</div>
    <div>Reference Mark<span class="reference-mark" id="referenceMark4"><svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk"><use xlink:href="/images/icons/icons.svg#asterisk" /></svg></span> with lexicon-icon-asterisk.</div>
    <h4>Footnotes</h4>
    <div><a class="reference-mark" href="#referenceMark1">[1]</a> A reference to the text above, respectively.</div>
    <div><a class="reference-mark" href="#referenceMark4"><svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk"><use xlink:href="/images/icons/icons.svg#asterisk" /></svg></a> A reference to the text above, respectively.</div>
</div>

```html
<div>Reference Mark<span class="reference-mark" id="referenceMark1">[1]</span> with text.</div>
<div>Reference Mark<span class="reference-mark" id="referenceMark4"><svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk"><use xlink:href="/images/icons/icons.svg#asterisk" /></svg></span> with lexicon-icon-asterisk.</div>
<h4>Footnotes</h4>
<div><a class="reference-mark" href="#referenceMark1">[1]</a> A reference to the text above, respectively.</div>
<div><a class="reference-mark" href="#referenceMark4"><svg aria-hidden="true" class="lexicon-icon lexicon-icon-asterisk"><use xlink:href="/images/icons/icons.svg#asterisk" /></svg></a> A reference to the text above, respectively.</div>
```
</article>

<article id="text-truncate">
<h3 class="component-title">
    <a href="#text-truncate">Text Truncate</a>
</h3>

> Shorten long lines of text with the class <code>text-truncate</code>. This uses <code>display: block;</code> and should be used to truncate text in block level elements.

<div class="sheet">
    <p class="text-truncate">Milk filter lungo as galão roast that crema blue mountain shop turkish. Milk filter lungo as galão roast that crema blue mountain shop turkish. Milk filter lungo as galão roast that crema blue mountain shop turkish.</p>
</div>

```html
<p class="text-truncate">Milk filter lungo as galão roast that crema blue mountain shop turkish. Milk filter lungo as galão roast that crema blue mountain shop turkish. Milk filter lungo as galão roast that crema blue mountain shop turkish.</p>
```
</article>

<article id="text-truncate-inline">
<h3 class="component-title">
    <a href="#text-truncate-inline">Text Truncate Inline</a>
</h3>

> Another way to shorten long lines of text.

<div class="card" style="max-width:300px;">
    <p class="card-body">
        Milk filter lungo as galão roast that crema blue mountain shop turkish. <a class="text-truncate-inline" href="#1"><span class="text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span></a> Milk filter lungo as galão roast that crema <a class="text-truncate-inline" href="#1"><span class="text-truncate">this is also text-truncate</span></a> turkish. Milk filter lungo as galão roast that crema blue mountain shop turkish.
    </p>
</div>

```html
<a class="text-truncate-inline" href="#1"><span class="text-truncate">ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual</span></a> Milk filter lungo as galão roast that crema <a class="text-truncate-inline" href="#1"><span class="text-truncate">
```
</article>

<article id="contextual-texts">
<h3 class="component-title">
    <a href="#contextual-texts">Contextual Texts</a>
</h3>

<div class="sheet">
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
<a href="#1" class="text-muted">text-muted: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
<a href="#1" class="text-primary">text-primary: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
<a href="#1" class="text-secondary">text-secondary: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
<a href="#1" class="text-info">text-info: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
<a href="#1" class="text-success">text-success: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
<a href="#1" class="text-warning">text-warning: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
<a href="#1" class="text-danger">text-danger: Milk filter lungo as galão roast that crema blue mountain shop turkish.</a>
```
</article>

<article id="contextual-backgrounds">
<h3 class="component-title">
    <a href="#contextual-backgrounds">Contextual Backgrounds</a>
</h3>

<div class="sheet">
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
<span class="bg-primary">bg-primary: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span>
<span class="bg-secondary">bg-secondary: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span>
<span class="bg-success">bg-success: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span>
<span class="bg-info">bg-info: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span>
<span class="bg-warning">bg-warning: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span>
<span class="bg-danger">bg-danger: Milk filter lungo as galão roast that crema blue mountain shop turkish.</span>
```
</article>

<article id="address">
<h3 class="component-title">
    <a href="#address">Address</a>
</h3>

<div class="sheet">
    <address>
        <strong>Liferay, Inc.</strong><br>
        1400 Montefino Ave.<br>
        Diamond Bar, CA 91765<br>
        <abbr class="initialism" title="Phone">P:</abbr> +1-877-LIFERAY (1-877-543-3729)
    </address>
    <address>
        <strong>Full Name</strong><br>
        <a href="mailto:#">joe.bloggs@liferay.com</a>
    </address>
</div>

```html
<address>
    <strong>Liferay, Inc.</strong><br>
    1400 Montefino Ave.<br>
    Diamond Bar, CA 91765<br>
    <abbr class="initialism" title="Phone">P:</abbr> +1-877-LIFERAY (1-877-543-3729)
</address>
<address>
    <strong>Full Name</strong><br>
    <a href="mailto:#">joe.bloggs@liferay.com</a>
</address>
```
</article>

<article id="inline-code">
<h3 class="component-title">
    <a href="#inline-code">Inline Code</a>
</h3>

<div class="sheet">
    <p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>
</div>

```html
<p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>
```
</article>

<article id="user-input">
<h3 class="component-title">
    <a href="#user-input">User Input</a>
</h3>

<div class="sheet">
    <p>For example, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd> to edit settings.</p>
</div>

```html
<p>For example, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd> to edit settings.</p>
```
</article>

<article id="variables">
<h3 class="component-title">
    <a href="#variables">Variables</a>
</h3>

<div class="sheet">
    <p>For example, <var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>
</div>

```html
<p>For example, <var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>
```
</article>

<article id="sample-output">
<h3 class="component-title">
    <a href="#sample-output">Sample Output</a>
</h3>

<div class="sheet">
    <samp>This text is meant to be treated as sample output from a computer program.</samp>
</div>

```html
<samp>This text is meant to be treated as sample output from a computer program.</samp>
```
</article>

<article id="blockquote">
<h3 class="component-title">
    <a href="#blockquote">Blockquote</a>
</h3>

<div class="sheet">
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
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</div>
</blockquote>
<blockquote class="blockquote">
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</div>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```
</article>
