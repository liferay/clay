---
title: "Icons"
---

### Description

Icons are a visual representation of an idea and/or action.

<div class="alert alert-info">Check the <a href="https://lexicondesign.io">Lexicon</a> <a href="https://lexicondesign.io/docs/patterns/icons.html">Icons Pattern</a> for a more in-depth look at the motivations and proper usage of this component.</div>

### Lexicon Icons

<div class="alert alert-info">
	Lexicon icons do not use the same format as Font Awesome or Bootstrap's Glyphicons.
</div>

> We use SVG elements that link to an SVG sprite. See the example below:

```soy
{call ClayIcon.render}
	{param spritemap: 'path/to/icons.svg' /}
	{param symbol: 'add-column' /}
{/call}

{call ClayIcon.render}
	{param spritemap: 'path/to/icons.svg' /}
	{param symbol: 'add-cell' /}
{/call}
```
```html
<clay-icon spritemap="path/to/icons.svg" symbol="add-column"></clay-icon>

<clay-icon spritemap="path/to/icons.svg" symbol="add-cell"></clay-icon>
```
```html
<svg class="lexicon-icon">
	<use href="path/to/icons.svg#add-column" />
</svg>
```

> Note that the ID after the # symbol is the ID of the icon to use. For example, if you wanted to use the plus icon, you would specify the following path: `path/to/icons.svg#plus`. See the example below:

<a href="#lexicon-icon-explanation">Why do we use SVG?</a>

<ul class="lexicon-icon-list list-unstyled">
	[foreach Icons]
</ul>

### Language Flags

> People tend to have pretty strong opinions on whether flags should be used as a visual cue for indicating a language, mainly because in many parts of the world the flag may have cultural and geographic meanings that we might not be aware of, or the flag itself isn't fully accurate to the dialects spoken in that region.

> While we understand this reasoning, we've found that when a user is not familiar with the currently displayed language, flags somewhat eliminate the use of other mechanisms, such as the name of the language (since the current language could be in an entirely different character set). Given this, there is often at least some familiarity with the identity of a country that speaks a shared language.

> Or, to paraphrase Winston Churchill, "Using flags is the worst system for indicating language, except for all others". :)

> To use the flags below, follow the same process as you would for a standard icon, and use the locale and country code indicated in parenthesis for the icon's name (e.g. to use the Japanese icon, you would use `ja-jp`)

<ul class="lexicon-icon-list list-unstyled">
	[foreach Flags]
</ul>

### SVG Icons as Background Images

> We have created a Sass function to turn Lexicon SVG icon's into data uri schemes, which enables you to use them as a background images on an HTML element. The Sass function `lx-icon(icon-name, color)` takes the name of a Lexicon SVG Icon and a color. For example, the Sass rule set `.site-add-cell {lb} background-image: lx-icon(add-cell, #5AF); background-size: contain; display: inline-block; height: 20px; width: 20px; {rb}` will place the SVG icon add-cell as a background-image on any element with class site-add-cell.

<span class="clay-site-add-cell clay-site-svg-bg">add-cell</span>
<span class="clay-site-add-column clay-site-svg-bg">add-column</span>
<span class="clay-site-add-row clay-site-svg-bg">add-row</span>
<span class="clay-site-adjust clay-site-svg-bg">adjust</span>
<span class="clay-site-align-center clay-site-svg-bg">align-center</span>
<span class="clay-site-asterisk clay-site-svg-bg">asterisk</span>
<span class="clay-site-svg-bg clay-site-times-circle">times-circle</span>
<span class="clay-site-svg-bg clay-site-workflow">workflow</span>

### Svg-url()

> You can turn your custom SVG into a data uri using the Sass function `svg-url($svg)`, where `$svg` is the code for your inline SVG. The function returns `url(your_svg_as_data_uri)`.

<div class="alert alert-info">
	When using `svg-url()`, wrap your inline SVG code with single quotes if your SVG's attributes are delimited with double quotes.
</div>

<span class="clay-site-linux-tux clay-site-svg-bg">Linux Tux</span>

### Why do we use SVG?

<p id="lexicon-icon-explanation">
  Font icons, while fairly simple, suffer drawbacks, such as sub-pixel aliasing. This results in a lower quality than we would like.
	SVG gives us and you a greater amount of freedom in styling the icons, as well as a higher level of fidelity and clarity in the icons.
	Also, SVG supports multi-color icons, as shown below:
</p>

<div class="lexicon-icon-examples">
	<svg class="lexicon-icon lexicon-icon-asterisk">
		<use href="/images/icons/icons.svg#asterisk" />
	</svg>
	<svg class="lexicon-icon lexicon-icon-logout">
		<use href="/images/icons/icons.svg#logout" />
	</svg>
	<svg class="lexicon-icon lexicon-icon-exclamation-full">
		<use href="/images/icons/icons.svg#exclamation-full" />
	</svg>
</div>
