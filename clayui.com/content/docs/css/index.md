---
title: 'CSS Framework'
description: "A Web Implementation of Liferay's Experience Language"
order: 4
version: 'v2.8.0'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [Overview](#css-overview)
-   [Base Theme](#css-base-theme)
-   [Atlas Theme](#css-atlas-theme)
-   [Liferay Portal](#css-liferay-portal)
-   [Customizing Clay CSS](#css-customizing-clay-css)
-   [Adding CSS Rulesets to Clay CSS](#css-adding-css-rulesets-to-clay-css)

</div>
</div>

## Overview(#css-overview)

Clay CSS is the web implementation of <a href="https://liferay.design/lexicon/get-started/" rel="noreferrer noopener" target="_blank">Liferay’s Experience Language</a>. This is a system for building applications in and outside of Liferay, designed to be fluid and extensible, as well as provide a consistent and documented API.

Clay CSS is based on <a href="https://getbootstrap.com/docs/4.4/getting-started/introduction/" rel="noreferrer noopener" target="_blank">Bootstrap 4.4.1</a>. You will find Bootstrap's and Clay CSS' API to be very similar because Clay CSS was created to fill the gaps between Bootstrap's and Liferay's UI as well as providing familiarity to new devs joining the Liferay ecosystem.

Clay CSS is shipped with two flavors, `Base` and `Atlas` Theme. The Base Theme is bundled with `frontend-theme-styled` in Liferay Portal. Atlas Theme is our flagship theme that is bundled with `frontend-theme-classic`.

## Base Theme(#css-base-theme)

The Base Theme provides a familiar starting point to develop your own custom theme by preserving default Bootstrap styles such as colors and sizing. It contains all CSS rulesets for both themes. You can toggle Base Theme by clicking the cog icon inside the top right nav.

<pre>
|-- Functions
|-- Base Variables
|-- Mixins
|-- SCSS
</pre>

## Atlas Theme(#css-atlas-theme)

Atlas Theme is a set of Sass variables that are applied on top of the Base Theme. The variables change everything from colors to sizing and spacing. No additional rulesets are required. This allows us to reuse a CSS ruleset instead of having to duplicate and overwrite it in `frontend-theme-classic`, saving us from CSS bloat.

<pre>
|-- Functions
|-- Atlas Variables
|-- Base Variables
|-- Mixins
|-- SCSS
</pre>

## Liferay Portal(#css-liferay-portal)

Clay CSS is installed during build time in Liferay Portal. There is a placeholder file `clay.scss` where Clay CSS should be imported. This file is included inside the `head` tag as an external stylesheet in Portal.

If you are using <a href="https://github.com/liferay/liferay-js-themes-toolkit/tree/master/packages/liferay-theme-tasks" rel="noopener noreferrer" target="_blank">Liferay Theme Tasks</a> to deploy your theme, you can see the contents of `clay.scss` in `your-theme/build/_css/clay.scss`. If you are extending the Styled Theme, `clay.scss` should contain `@import clay/base;` and Classic Theme should have `@import clay/atlas;`. You can view the Clay CSS source in `your-theme/build/_css/clay`.

You can switch between Base and Atlas Theme at any time by creating a file `clay.scss` in `your-theme/src/css/clay.scss` and importing Base or Atlas. This will overwrite the default `clay.scss` file used by Portal.

## Customizing Clay CSS(#css-customizing-clay-css)

Liferay Portal provides a placeholder file `_clay_variables.scss` and imports it at the top of `base.scss` and `atlas.scss`. This file should contain all your Clay CSS Sass Variable overwrites. You can change the primary color to red by creating a new file named `your-theme/src/css/_clay_variables.scss` and adding the line `$primary: red;`. Clay CSS has thousands of customization options that gives you full control over the styles of each component.

## Adding CSS Rulesets to Clay CSS(#css-adding-css-rulesets-to-clay-css)

You can add CSS rulesets to the `clay.scss` file by creating a file called `_clay_custom.scss` in the `your-theme/src/css` directory. `_clay_custom.scss` is imported at the bottom of `base.scss` and `atlas.scss`.
