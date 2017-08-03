---
title: Icons (Lexicon)
description: Components
layout: "guide"
weight: 100
---

<article id="1">

<div class="alert alert-info" style="margin-top: 20px;">
	<p>Lexicon icons do not use the same format as Font Awesome or Bootstrap's Glyphicons.</p>
</div>

We use SVG elements that link to an SVG sprite, like so:

```xml
<svg class="lexicon-icon">
    <use xlink:href="path/to/icons.svg#add-column" />
</svg>
```

Note that the ID after the # symbol is the ID of the icon to use, so if you wanted to use plus icon, you would do change the `href` to `path/to/icons.svg#plus`.

<a href="#lexicon-icon-explanation">Why do we use SVG?</a>

<ul class="lexicon-icon-list list-unstyled">
{foreach $icon in $page.icons}
	<li>
		<svg class="lexicon-icon lexicon-icon-{$icon}">
			<use xlink:href="/vendor/lexicon/icons.svg#{$icon}" />
		</svg>
		<span>{$icon}</span>
	</li>
{/foreach}
</ul>

</article>

<article id="2">

#### Language Flags

> People tend to have pretty strong opinions on whether flags should be used as a visual cue for indicating a language, mainly because in many parts of the world, the flag may have cultural and geographic meanings that we might not be aware of, or the flag itself isn't fully accurate to the dialects spoken in that region.

> While we understand that reasoning, we've found that the times they are actually needed (when a user is not familiar with the currently displayed language) somewhat eliminates using other mechanisms, such as the name of the language (since the current language could be in an entirely different character set). Given this, there is often at least some familiarity with the identity of a country that speaks a shared language.

> Or, to paraphrase Winston Churchill, "Using flags is the worst system for indicating language, except for all others". :)

> To use the flags below, follow the same process as above, but the name of the icon is the locale and country code indicated in parenthesis (e.g. to use the Japanese icon, you would use `ja-jp`)

<ul class="lexicon-icon-list list-unstyled">
{foreach $flag in $page.flags}
	<li>
		<svg class="lexicon-icon lexicon-icon-{$flag}">
			<use xlink:href="/vendor/lexicon/icons.svg#{$flag}" />
		</svg>
		<span>{$page.flagData[$flag]} ({$flag})</span>
	</li>
{/foreach}
</ul>

</article>

<article id="3">

### SVG Icons as Background Images

> We have created a Sass function to turn Lexicon SVG icon's into data uri schemes, which enables you to include them as a background-image on an HTML element. The Sass function `lx-icon(icon-name, color)` takes the name of a Lexicon SVG Icon and color takes a color. The Sass rule set `.site-add-cell {lb} background-image: lx-icon(add-cell, #5AF); background-size: contain; display: inline-block; height: 20px; width: 20px; {rb}` will place the SVG icon add-cell as a background-image on any element with class site-add-cell.

<span class="site-add-cell site-svg-bg">add-cell</span>
<span class="site-add-column site-svg-bg">add-column</span>
<span class="site-add-row site-svg-bg">add-row</span>
<span class="site-adjust site-svg-bg">adjust</span>
<span class="site-align-center site-svg-bg">align-center</span>
<span class="site-asterisk site-svg-bg">asterisk</span>
<span class="site-svg-bg site-times-circle">times-circle</span>
<span class="site-svg-bg site-workflow">workflow</span>

> You can turn your custom SVG into a data uri using the Sass function `svg-url($svg)` where `$svg` is the code for your inline SVG. The function returns `url(your_svg_as_data_uri)`.

<div class="alert alert-info">
	When using `svg-url()`, wrap your inline SVG code with single quotes if your SVG's attributes are delimited with double quotes.
</div>

</article>

<article id="4">

<p id="lexicon-icon-explanation">
	SVG gives us and you a greater amount of freedom in styling the icons, as well as a higher level of fidelity and clarity in the icons.
	Font icons, while fairly simple, also suffer some drawbacks, mainly with sub-pixel aliasing that cause the quality to not be as high as we would like.
	Also SVG allows for multi-color icons, for example:
	<span class="lexicon-icon-examples">
		<svg class="lexicon-icon lexicon-icon-asterisk">
			<use xlink:href="/vendor/lexicon/icons.svg#asterisk" />
		</svg>
		<svg class="lexicon-icon lexicon-icon-logout">
			<use xlink:href="/vendor/lexicon/icons.svg#logout" />
		</svg>
		<svg class="lexicon-icon lexicon-icon-exclamation-full">
			<use xlink:href="/vendor/lexicon/icons.svg#exclamation-full" />
		</svg>
	</span>
</p>

</article>

<article id="5">

### Monospaced

> Add class `icon-monospaced` on an icon to make each icon occupy the same amount of horizontal and vertical space.

<div>
	<span class="icon-monospaced icon-glass"></span>
	<span class="icon-monospaced icon-music"></span>
	<span class="icon-monospaced icon-search"></span>
	<span class="icon-monospaced icon-ok"></span>
	<span class="icon-monospaced icon-zoom-in"></span>
	<span class="icon-monospaced icon-envelope"></span>
	<span class="icon-monospaced icon-heart"></span>
</div>

```xml
<span class="icon-monospaced icon-glass"></span>
<span class="icon-monospaced icon-music"></span>
<span class="icon-monospaced icon-search"></span>
<span class="icon-monospaced icon-ok"></span>
<span class="icon-monospaced icon-zoom-in"></span>
<span class="icon-monospaced icon-envelope"></span>
<span class="icon-monospaced icon-heart"></span>
```

</article>

<article id="6">

### Help

> Icon with a circular border, use for creating helpful tooltips for your users.

<a class="help-icon help-icon-default icon-question" href="#1" data-toggle="popover"></a>

```xml
<a class="help-icon help-icon-default icon-question" href="#1" data-toggle="popover"></a>
```

</article>