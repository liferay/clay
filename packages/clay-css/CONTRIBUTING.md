# Contributing

## Code Guidelines

### CSS / SCSS

-   We use hard tabs to indent our code

-   Alphabetize CSS Properties

-   CSS Properties with browser prefixes such as `-webkit-` should be alphabetized by the property name and vendor prefixes should be alphabetized.

```
.my-selector {
	align-items: center;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	border: 1px solid transparent;
	display: flex;
}
```

-   Sass mixins using the `@include` directive should be ordered alphabetically by mixin name with the exception of mixins relating to media-queries, pseudo elements, or pseudo classes, such as `::before`, `:hover`, `:focus`, or `:active`. Those should be placed at the end of of the declaration block with a new line between the last declaration and mixin.

```
.my-selector {
	align-items: center;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	border: 1px solid transparent;

	@include border-radius(0.25rem);
	@include clay-link($map);

	display: flex;

	@include media-breakpoint-up(sm) {
		font-size: 0.875rem;
	}
}
```

-   The `:hover` pseudo class should always be declared before `:focus`, so that the hover style won't clobber the focus style. Pseudo classes should be declared in this order: `:hover`, `:focus`, `:active`, `:active:focus`, `:disabled`.

-   There should be one CSS selector and declaration per line.

```
.my-selector1,
.my-selector2 {
	color: red;
	display: none;
}
```

-   There should be no space between a CSS property and it's colon and one space between the colon and value.

-   A declaration block's closing curly brace should always be on a new line.

-   Prefix all decimal values with 0 (e.g., `rgba(255, 255, 255, 0.5)`)

-   Parameters inside a CSS function or Sass function should be separated by a comma followed by a space

```
.my-selector {
	background-color: rgba(0, 0, 0, 0.5);
	background-image: clay-icon(caret-double-l, $secondary);
	background-position: right 0.5em center;
	background-size: 1.5em auto;
	padding-right: 2em;
}
```

-   Hexadecimal color values should be uppercase (e.g., `#FFF`) and 3 character notation should be used wherever possible

-   Use single quotes to quote text inside a declaration block or Sass variable

-   Use double quotes to quote attributes inside a selector (e.g., `input[type="text"]`)

-   Every CSS declaration should end with a semi-colon.

-   Don't use CSS shorthand properties, we want to provide the most customizable CSS framework out there. Shorthand CSS properties limit our ability to fully provide this feature.

-   ID's shouldn't exist in Clay, but in the event of an edge case we should camel case it.

-   Limit the use of html elements in selectors (e.g., `a`, `div`, `span`, `ul`, or `li`), try to think of a class name instead. A selector like `.nav > li > a` is more expensive than something like `.nav-link`. Browsers process selectors from right to left and will match all `a` tags then try to match `li` from those until it fails to match the selector. Scoping to a class name (e.g., `.table-link` instead of `.table a`) also limits styles from bleeding to other components inside `.table`.

-   Sass variable names generally should follow the convention `$component-state-property-size-breakpoint`. For example `$input-focus-border-color`, `$input-font-size-sm`, and `$input-font-size-sm-mobile`:

        	1) `$input-focus-border-color` should style `.form-control:focus { border-color: $input-focus-border-color; }`.

        	2) `$input-font-size-sm` should style `.form-control-sm { font-size: $input-font-size-sm; }`.

        	3) `$input-font-size-sm-mobile` should style `@media (max-width: 767px) { .form-control-sm { font-size: $input-font-size-sm-mobile; } }`.

        	4) This is a hypothetical one for reference. `$input-focus-border-color-sm-sm-down` should style `@media (max-width: 767px) { .form-control-sm:focus { border-color: $input-focus-border-color-sm-sm-down; } }`.

-   Sass variables should always end with `!default`. This allows developers to overwrite our variables at the very top instead of some where in the middle.

-   Comments should generally use the single line syntax, `// comment`, since single line comments are removed by the Sass preprocessor.

-   Multiline comments, `/* comment */`, should only be used in places where we want to preserve the comment in the CSS output such as copyright text or attribution.

### Class Names

-   Class names should be delimited by a hypen (-) and lowercase

-   We provide styling for `h1` through `h6` tags, but we shouldn't rely on those tags to make headings a specific size or style in our markup. Heading tags should depend on document structure and styles should be placed in classes, such as `.sheet-title`, `.sheet-subtitle`, and `.sheet-tertiary-title`.

-   Heading class name hierarchy should follow the pattern `-title`, `-subtitle`, `-tertiary-title`, `-quaternary-title`, `-quinary-title`, and `-senary-title`. The `title` identifier can be replaced with another such as `heading` or `text`. You generally shouldn't need more than the first 3 in any component.

-   If creating a component with specific styling for left, right, top, or bottom sides, consider using class names appended with `-before`, `-after`, `-first`, or `-last` instead of pseudo classes `:first-child` or `:last-child`. Class names allow for hidden elements to be mixed in with your component.

-   When creating specific class names to style the left or right side of a component, avoid using class names appended with `-left` or `-right`. These suffixes don't make sense for users in right to left languages. Suffixes, such as `-before`, `-after`, `-prepend`, `-append`, `-first`, or `-last` are more semantic.

-   Components should always have a base class such as `.alert` and modifiers to give it a different style (e.g., `.alert-danger`).

-   We should avoid reusing base components too much. Navbar is an example gone too far.

## Accessibility

#### Cursors

-   Pointer should be used on any element that can be clicked to perform some action on the page. We go against the spec here, but it's our opinion that it makes our product more accessible for mouse users.

        	1) `label[for]` should use `cursor: pointer`. Labels with a unique `for` attribute and corresponding input with matching `id` focus the input when clicked.

        	2) `label` with a nested `input` (e.g., `<label><input type="text"></label>`) should use `cursor: pointer`. Clicking the label will focus the input.

        	3) `.custom-control > label` and `.form-check-label` should use `cursor: pointer`. Click the label of a checkbox or radio input will check the input.

        	4) `a` with an `href` attribute should use `cursor: pointer`.

        	5) `.btn` should use `cursor: pointer`. Buttons perform actions and can be styled to look like a link.

        	6) `input[type="file"]` and `input[type="file"]::-webkit-file-upload-button` should use `cursor: pointer`. Clicking a file input opens the file browser.

        	7) `select` should use `cursor: pointer`. Clicking a select element opens a dropdown with options. A regular select element's `option` cursor can't be styled via CSS.

        	8) `select[multiple] option` should use `cursor: pointer`. These can be styled via CSS.

-   Text should be used on inputs without extra controls provided by the browser: `input[type="text"]`, `input[type="password"]`, `input[type="url"]`, `input[type="tel"]`, `input[type="email"]`, `input[type="search"]`, `input[type="number"]`.

-   Not-Allowed should be used on any element that is `:disabled` or `.disabled`. When using the class `.disabled`, make sure to include the attribute `tabindex="-1"` on the element if it's in the tab order.

#### Flexbox Flex Direction and Order

-   Use `flex-direction: row-reverse` and `flex-direction: column-reverse` sparingly. These reverse the visual order of the elements, but the tab order will remain in the same order as it appears in the document source.

-   Use the property `order` sparingly for the same reason as above.

#### Aria Attributes

TODO

## Project Architecture

-   We have a hard rule not to modify the Bootstrap source. It's easier to update and track down bugs.

-   [Atlas Theme Load Order](./ATLAS-THEME.md)

-   [Clay Base Theme Load Order](./BASE-THEME.md)

-   Scss file names should be prefixed with an underscore, only omit the underscore from a file name when you want Sass to output an equivalent `.css` file.

-   Clay CSS has a large number of Sass partials, when using the Sass `@import` directive the full file name should be used to make file locations clearer.

-   Limit the use of color palettes. We should use a max of 10 base colors. This is a CSS component library, not a design system. Color palettes should be defined and implemented by the user.

-   TODO Defining variables

-   TODO Defining Sass maps

-   Limit declaring and using "global" variables (variables that touch almost every component), such as `$border-color`, `$border-width`, `$border-radius`, or `$component-active-bg`. The idea of globally modifying the look and feel through a single variable seems like a good idea at first, but doesn't work very well in practice. Designs vary wildly and `$border-width: 2px` only works if you want Bootstrap with 2px borders.

-   When defining "global" variables there should always be an option to override it at the component level.

```
$border-color: red !default;
$alert-border-color: $border-color !default;
$label-border-color: $border-color !default;
$input-border-color: $border-color !default;
```

-   Scope variables to a specific component and limit its use in other components only if it makes sense. We can modify it without worrying about it impacting too many components (e.g., `$input-border-color`, `$input-bg`, or `$input-focus-bg`).

-   Shorthand CSS declarations limit our ability to provide a highly customizable framework. Declarations should be in longhand form as well as variables. Properties `border-color`, `border-style`, `border-radius` and `transition` are an exception, they can be declared using shorthand.

```
$border-width: 0 !default;

// Should be

$border-bottom-width: 0 !default;
$border-left-width: 0 !default;
$border-right-width: 0 !default;
$border-top-width: 0 !default;
```

-   Values should be declared in `rem` or `em` units (e.g. `$padding-left: 0.25rem !default`). If you aren't sure what unit to use, just use `rem`. `rem` units allow the page to be scaled by changing the `font-size` on the html element. We use the base size of `16px`.

### Sass Mixins

-   Mixin names should be prefixed with `clay-` to avoid collisions with other Sass mixin libraries.

-   When defining parameters in a Sass mixin, make sure each parameter sets a default value. If there is no default value set it to `null`. This reduces the chance of Sass compile errors due to value changes and allows the mixin to be called with no parameters.

```
@mixin clay-some-sass-mixin($param1: red, $param2: null) {
	background-color: $param2;
	color: $param1;
}

// In your .scss file

.my-component {
	@include clay-some-sass-mixin;
}

.my-component-2 {
	@include clay-some-sass-mixin(blue, aliceblue);
}
```

-   If a mixin has more than 2 parameters, consider passing in a Sass map and assigning a variable for each key value pair.

```
$clay-component-variant: () !default;
$clay-component-variant: map-merge((
	bg: #FFF,
	border-color: #000,
	color: #000
), $clay-component-variant);

@mixin clay-component-variant($map) {
	$bg: map-get($map, bg);
	$border-color: map-get($map, border-color);
	$color: map-get($map, color);

	background-color: $bg;
	border-color: $border-color;
	color: $color;
}

// In your .scss file

.my-component {
	@include clay-component-variant($clay-component-variant);
}
```

### Sass Extends

-   Use the Sass `@extend` directive sparingly. The `@extend` directive is very aggressive and may cause unwanted selectors to be output. This is especially the case when extending selectors. In the example below we only want to extend `.form-control-sm`, but because `.form-control-sm` is declared in several places Sass will create a new selector for every instance of `.form-control-sm`.

```
.form-control-sm {
	height: 36px;
}

.input-group .form-control-sm {
	border-radius: 0;
}

.card .form-control-sm {
	height: 20px;
}

.my-form-input-variant {
	@extend .form-control-sm;
}

// CSS Output

.form-control-sm, .my-form-input-variant { height: 36px; }
.input-group .form-control-sm, .input-group .my-form-input-variant { border-radius: 0; }
.card .form-control-sm, .card .my-form-input-variant { height: 20px; }
```

-   If you need to use `@extend` consider using a Sass placeholder selector. Sass doesn't output placeholder styles to CSS unless it's called via `@extend`.

```
%form-control-sm {
	height: 36px;
}

.form-control-sm {
	@extend %form-control-sm;
}

.input-group .form-control-sm {
	border-radius: 0;
}

.card .form-control-sm {
	height: 20px;
}

.my-form-input-variant {
	@extend %form-control-sm;
}

// CSS Output

.form-control-sm, .my-form-input-variant { height: 36px; }
.input-group .form-control-sm { border-radius: 0; }
.card .form-control-sm { height: 20px; }
```

-   The `@extend` directive will insert the CSS rule-set exactly where the placeholder or selector is declared. If your placeholder/selector is declared at the very top of your stylesheet and the `@extend` directive is declared at the bottom, there is a good chance cascading might clobber your styles.

### Sass Functions

-   The Sass `@function` directive should be reserved for performing some operation on a value.

## CSS Hacks

-   Sometimes there is no way to work around a particular CSS issue and we need some hacks. Use these as a last resort:

```
// Target IE10 and IE11
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
	.selector {
		property:value;
	}
}

// IE11 Only
_:-ms-fullscreen,
:root .selector {
	property: value;
}

// Webkit Only
@media (-webkit-min-device-pixel-ratio: 0) {
	.selector {
		property: value;
	}
}

// Firefox Only
@-moz-document url-prefix() {
	.selector {
		property: value;
	}
}
```

## Commits and Pull Requests

TODO
