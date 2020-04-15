# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.9.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.8.0...@clayui/css@3.9.0) (2020-03-26)


### Bug Fixes

* **@clayui/css:** Atlas Custom Checkbox and Radio should be 16px x 16px ([7a16efa](https://github.com/liferay/clay/commit/7a16efa)), closes [#3026](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3026)
* **@clayui/css:** Forms `input[type="range"]` focus border artifact in Chrome and remove padding ([37c86d9](https://github.com/liferay/clay/commit/37c86d9)), closes [#1179](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/1179)
* **@clayui/css:** Mixins `clay-css` only loop through properties that are passed via Sass map instead of listing everything ([b2f5496](https://github.com/liferay/clay/commit/b2f5496)), closes [#2990](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2990)
* **@clayui/css:** override specific styles for rtl support ([dce5d81](https://github.com/liferay/clay/commit/dce5d81))


### Features

* **@clayui/css:** SVG Icons add Malaysian flag ([37e26c6](https://github.com/liferay/clay/commit/37e26c6)), closes [#3017](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3017)


### Reverts

* **@clayui/css:** override specific styles for rtl support ([5125a62](https://github.com/liferay/clay/commit/5125a62))





# [3.8.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.7.0...@clayui/css@3.8.0) (2020-03-12)


### Bug Fixes

* **@clayui/css:** SVG Icons update the flag of Slovakia ([91d5cd0](https://github.com/liferay/clay/commit/91d5cd0)), closes [#2996](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2996)
* **clay-css:** Aspect Ratio `.aspect-ratio-item` should be aligned to the left when parent container has `text-align: center` ([bf2f992](https://github.com/liferay/clay/commit/bf2f992)), closes [#833](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/833)
* **clay-css:** Clay Base Form Select Element icon should display. Bootstrap changed the way they handle svg's as background-images at https://github.com/twbs/bootstrap/commit/c26e68427c06477cacdc4a75d92e5bd22476b4bb ([27241af](https://github.com/liferay/clay/commit/27241af)), closes [#2896](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2896)
* **clay-css:** Mixins `clay-button-variant` deprecate `hover-z-index`, `focus-z-index`, `disabled-z-index`, `active-z-index` and use the Sass maps instead ([96b650b](https://github.com/liferay/clay/commit/96b650b)), closes [#2903](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2903)
* **clay-css:** Mixins `clay-css` background-attachment should accept key `bg-attachment` or `background-attachment` ([b07e570](https://github.com/liferay/clay/commit/b07e570)), closes [#2896](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2896)
* **clay-css:** Mixins `clay-css` background-color should accept key `bg` or `background-color` ([b55e7bc](https://github.com/liferay/clay/commit/b55e7bc)), closes [#2896](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2896)
* **clay-css:** Removes Bootstrap 4's gnarly `select.form-control:not([multiple]):not([size])` selector overwrite. This selector was removed in Bootstrap 4.1.3. See https://github.com/twbs/bootstrap/commit/f426a67394010b5cc0235c845b744e2711f81e59 ([a209ac6](https://github.com/liferay/clay/commit/a209ac6)), closes [#2896](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2896)
* **clay-css:** SVG Icons modify `tablet-landscape` and `tablet-portrait` they were off by a couple pixels ([9c3e266](https://github.com/liferay/clay/commit/9c3e266)), closes [#2970](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2970)


### Features

* **@clayui/css:** Labels adds `label-inverse-*` to invert label colors ([340ce27](https://github.com/liferay/clay/commit/340ce27)), closes [#2975](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2975)
* **@clayui/css:** Mixins `clay-label-variant` use `clay-css` mixin in each selector instead of individually declaring properties ([d456db6](https://github.com/liferay/clay/commit/d456db6)), closes [#2975](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2975)
* **clay-css:** Adds Clay Dual Listbox (Old Input Move Boxes) component ([18b3905](https://github.com/liferay/clay/commit/18b3905)), closes [#2896](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2896)
* **clay-css:** Adds Clay Reorder component. A `select[multiple]` element with buttons that rearrange `option`s inside `select[multiple]` ([7ba7584](https://github.com/liferay/clay/commit/7ba7584)), closes [#2896](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2896)
* **clay-css:** Adds Empty State component ([a159135](https://github.com/liferay/clay/commit/a159135)), closes [#833](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/833)
* **clay-css:** Adds images for Empty State in `src/images/images` ([df33ac1](https://github.com/liferay/clay/commit/df33ac1)), closes [#833](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/833)
* **clay-css:** Form Select Element use `clay-select-variant` mixin to generate styles and consolidate repeated selectors ([4a381a0](https://github.com/liferay/clay/commit/4a381a0)), closes [#2896](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2896)
* **clay-css:** Global Variables add `$component-focus-inset-box-shadow` for reusable focus inset box-shadows across components ([5008674](https://github.com/liferay/clay/commit/5008674)), closes [#2954](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2954)
* **clay-css:** Mixins `clay-button-variant` use `clay-css` mixin for applying `hover`, `focus`, `disabled`, `active`, `active-class-after`, `active-focus`. ([22a6be1](https://github.com/liferay/clay/commit/22a6be1)), closes [#2903](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2903)
* **clay-css:** Mixins `clay-css` adds option to pass in `scrollbar-width` for future proofing this property. It's available in Firefox 64+ ([4fbe1df](https://github.com/liferay/clay/commit/4fbe1df)), closes [#2896](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2896)
* **clay-css:** Mixins `clay-form-control-variant` use `clay-css` mixin in each selector instead of individually declaring properties ([f4ce3e1](https://github.com/liferay/clay/commit/f4ce3e1)), closes [#2896](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2896)
* **clay-css:** Mixins `clay-select-variant` use `clay-css` mixin in each selector instead of individually declaring properties ([485afb4](https://github.com/liferay/clay/commit/485afb4)), closes [#2896](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2896)
* **clay-css:** Mixins `clay-sidebar-variant` add option to configure `.sidebar`, `.sidebar-panel`, `.sidebar-header`, `.sidebar-body`, `.sidebar-footer`, `.nav-nested`, `.sidebar-list-group .list-group-item`, `.sidebar-list-group .sticker`, `.sidebar-list-group .sticker-secondary` via Sass maps and `clay-css` mixin ([994c7bd](https://github.com/liferay/clay/commit/994c7bd)), closes [#2903](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2903)
* **clay-css:** Mixins `clay-tbar-variant` use `clay-css` mixin for applying base `tbar`, `strong`, `.tbar-item`, `.tbar-section` styles ([a25959b](https://github.com/liferay/clay/commit/a25959b)), closes [#2903](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2903)
* **clay-css:** Mixins adds `clay-slideout-variant` with options to configure `c-slideout-shown`, `c-slideout-tbar-shown`, `c-slideout-tbar-shown-sidebar`, `sidebar`, `sidebar-c-slideout-show`, `sidebar-c-slideout-transition`, `tbar-stacked`, `tbar-stacked-c-slideout-show`, `tbar-stacked-c-slideout-transition` ([95ae58e](https://github.com/liferay/clay/commit/95ae58e)), closes [#2903](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2903)
* **clay-css:** Sidebar adds `.sidebar-dark` variant and Sass map `$sidebar-dark` which uses `clay-sidebar-variant` mixin ([df14c79](https://github.com/liferay/clay/commit/df14c79)), closes [#2903](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2903)
* **clay-css:** Slideout adds new component `.c-slideout`, `.c-slideout-transition-in`, `.c-slideout-transition-out`, `.c-slideout-fixed`, `.c-slideout-absolute`, `.c-slideout-start`, `.c-slideout-end` ([50491e2](https://github.com/liferay/clay/commit/50491e2)), closes [#2903](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2903)
* **clay-css:** Tbar adds `.tbar-stacked` for Lexicon's Vertical Bar Pattern and variants `.tbar-light`, `.tbar-dark-l2`, .tbar-dark-d1` ([7bd2ac6](https://github.com/liferay/clay/commit/7bd2ac6)), closes [#2903](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2903)
* **clay-css:** Utilities adds `.c-focus-inset` for inner focus styles ([33ca179](https://github.com/liferay/clay/commit/33ca179)), closes [#2954](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2954)





# 3.7.0 (2020-02-28)


### Bug Fixes

* **clay css:** Adds `clay-time` component (Time Picker) ([74b2326](https://github.com/liferay/clay/commit/74b2326)), closes [#1424](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/1424)
* **clay css:** Forms add `.disabled` to `.form-control` to style elements that use `div` ([5d36450](https://github.com/liferay/clay/commit/5d36450))
* **clay css:** Management Bar `.navbar-text` should break to new line when there is not enough space ([40ba156](https://github.com/liferay/clay/commit/40ba156)), closes [#2085](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2085)
* **clay css:** Mixin `clay-form-control-variant` add `align-items`, `flex-wrap`, `justify-content`, `max-width`, `min-height`, `text-transform` ([0b5cb01](https://github.com/liferay/clay/commit/0b5cb01))
* **clay-css:** Add border-spacing, border-collapse not working in IE ([9d12922](https://github.com/liferay/clay/commit/9d12922))
* **clay-css:** Adds `!optional` flag to `[@extend](https://github.com/extend)` for components that are extending selectors/placeholders outside of their respective component file ([403a0c2](https://github.com/liferay/clay/commit/403a0c2)), closes [#2881](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2881)
* **clay-css:** Atlas Custom Control disabled label color should be the same as `$input-label-disabled-color` ([a160132](https://github.com/liferay/clay/commit/a160132)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** Atlas Dropdown change `.dropdown-header` and `.dropdown-subheader` color to [#272833](https://github.com/liferay/clay/commit/f901ce8)), closes [#2812](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2812)
* **clay-css:** Atlas Form Validation `.form-feedback-item` and `.form-text` should be semi-bold ([798be68](https://github.com/liferay/clay/commit/798be68)), closes [#2328](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2328)
* **clay-css:** Atlas Globals tweak `$success`, `$success-d1`, `$success-l1`, `$danger-d` hex values to match Lexicon exactly ([5b50860](https://github.com/liferay/clay/commit/5b50860)), closes [#2820](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2820)
* **clay-css:** Atlas Nav Tabs and Nav Underline should use `$font-weight-semi-bold`. Nav Underline should be 32px tall and underline color should be `$primary-l1` ([6cdffef](https://github.com/liferay/clay/commit/6cdffef)), closes [#2388](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2388)
* **clay-css:** Badges `.badge > .c-inner` only set margins and overwrite inherited max-width property ([52ee10f](https://github.com/liferay/clay/commit/52ee10f)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Button `.btn-unstyled` should reset sizes for `.btn-sm` and `.btn-lg` ([896c21a](https://github.com/liferay/clay/commit/896c21a)), closes [#2475](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2475)
* **clay-css:** Buttons use `math-sign` function for calculating negative margins on `.btn .c-inner` to prevent invalid CSS output like `margin: - -;` ([1ca34e4](https://github.com/liferay/clay/commit/1ca34e4)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Custom Control add Sass maps `$custom-control-label`, `$custom-control-label-disabled`, `$custom-control-label-text` and map deprecated `$custom-control-description-*` to them so our namespace matches Bootstrap's. It was renamed toward end of Bootstrap beta in 6a54b4a ([e41dcf5](https://github.com/liferay/clay/commit/e41dcf5)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Deprecate `.sheet-lg` and `$sheet-lg-max-width` in favor of `.container .sheet` pattern ([2e1e82c](https://github.com/liferay/clay/commit/2e1e82c)), closes [#2655](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2655)
* **clay-css:** Dropdown Item `.disabled` should have `cursor: not-allowed` and move `pointer-events: none` to `.disabled:active` ([28cb857](https://github.com/liferay/clay/commit/28cb857)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** Form Validation Feedback space between icon and text should be 4px ([e1d0e09](https://github.com/liferay/clay/commit/e1d0e09)), closes [#2075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2075)
* **clay-css:** Globals added `_globals-z-index.scss` to list z-index variables used in Bootstrap/ClayCSS ([e12ee48](https://github.com/liferay/clay/commit/e12ee48)), closes [#2339](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2339)
* **clay-css:** List Group double borders in `list-group-item-flex` caused by Bootstrap 4.4.1 22f6b37 ([1221279](https://github.com/liferay/clay/commit/1221279)), closes [#2785](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2785)
* **clay-css:** Mixin `clay-input-group-stacked` should use child combinator styles only apply direct descendants ([0f3d82e](https://github.com/liferay/clay/commit/0f3d82e)), closes [#2384](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2384)
* **clay-css:** Mixins `clay-button-size`, `clay-button-variant`, `clay-close`, `clay-label-size`, `clay-link`, `clay-menubar-vertical-expand`, `clay-navbar-size`, `clay-panel-variant`, `clay-tbar-variant` should only set margins for `c-inner` ([61ac029](https://github.com/liferay/clay/commit/61ac029)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-dropdown-item-variant` only set margins and overwrite inherited width property for `c-inner` ([be5d06c](https://github.com/liferay/clay/commit/be5d06c)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Modal Footer use `justify-content: flex-start` instead of Bootstrap's `flex-end` to work around IE11 rendering issues with `modal-item`'s ([2be40c2](https://github.com/liferay/clay/commit/2be40c2)), closes [#2873](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2873)
* **clay-css:** Modals Atlas change widths of `.modal-sm`, `modal`, and `modal-lg` to `320px`, `600px`, `896px` respectively ([3c0c7c9](https://github.com/liferay/clay/commit/3c0c7c9)), closes [#2367](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2367)
* **clay-css:** Nav `.nav-justified` should work with `button` ([fd5e3d0](https://github.com/liferay/clay/commit/fd5e3d0)), closes [#2237](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2237)
* **clay-css:** Navigation Bar and Management Bar focus styles should match across each component ([5d0ecf9](https://github.com/liferay/clay/commit/5d0ecf9)), closes [#2900](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2900)
* **clay-css:** New SVG Icon reset ([4c85071](https://github.com/liferay/clay/commit/4c85071)), closes [#2146](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2146)
* **clay-css:** SVG Icons add deprecation note to `announcement`, `sticky`, `urgent` ([3eaec3a](https://github.com/liferay/clay/commit/3eaec3a))
* broken markdown lists ([d1adc7e](https://github.com/liferay/clay/commit/d1adc7e))
* **clay-css:** SVG Icons deprecate `import-export` and `embed` in favor of `order-arrow` and `code` respectively ([956d668](https://github.com/liferay/clay/commit/956d668)), closes [#2419](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2419)
* **clay-css:** SVG Icons reduce the size by remove inessential attributes and comments ([e3d7120](https://github.com/liferay/clay/commit/e3d7120)), closes [#2309](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2309)
* **clay-css:** SVG Icons renamed `announcement`, `sticky`, and `urgent` to `megaphone-full`, `pin-full`, and `bell-full` respectively ([e89b1f0](https://github.com/liferay/clay/commit/e89b1f0)), closes [#2119](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2119)
* **clay-css:** Table Header (th) should be aligned left by default in Safari ([6a6c9a4](https://github.com/liferay/clay/commit/6a6c9a4)), closes [#2219](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2219)
* **clay-css:** Use `selector-unify` to combine parent selectors with nested element selectors in mixins and components ([cb8e0a2](https://github.com/liferay/clay/commit/cb8e0a2)), closes [#2392](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2392)
* **css:** allow newline characters to display properly for tooltips ([2265d10](https://github.com/liferay/clay/commit/2265d10))


### Features

* **@clayui/css:** add new SVG icons `arrow-end`, `arrow-join`, `arrow-split`, `arrow-start`, `arrow-xor`, `circle`, `diamond` and `square` ([3e69b1e](https://github.com/liferay/clay/commit/3e69b1e))
* **clay-css:** add new change-list-disabled SVG icon ([a02d20c](https://github.com/liferay/clay/commit/a02d20c))
* **clay-css:** Add usable mixins from bourbon under `_vendor-prefixes.scss` ([91feecb](https://github.com/liferay/clay/commit/91feecb))
* **clay-css:** Alert adds `.alert-btn`, `.alert-autofit-row`, `.alert-footer`, and `.alert .btn-group-item` ([5212f50](https://github.com/liferay/clay/commit/5212f50)), closes [#2765](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2765)
* **clay-css:** Aspect Ratio adds `.aspect-ratio-item-top-left` ([6981a23](https://github.com/liferay/clay/commit/6981a23)), closes [#2843](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2843)
* **clay-css:** Atlas change `$indigo` to [#7785](https://github.com/liferay/clay/commit/0be9e04)), closes [#2960](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2960)
* **clay-css:** Atlas Form Validation add styles for readonly input success, error, and warning states ([faf5748](https://github.com/liferay/clay/commit/faf5748)), closes [#2715](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2715)
* **clay-css:** Atlas Forms input readonly should have white background and no focus box shadow ([db77870](https://github.com/liferay/clay/commit/db77870)), closes [#2425](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2425)
* **clay-css:** Atlas Global Variables make `h1` - `h6` font sizes the same as 2.x ([0e0f9a0](https://github.com/liferay/clay/commit/0e0f9a0)), closes [#2864](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2864)
* **clay-css:** Atlas Globals adds `$enable-lexicon-flat-colors` to change base colors to match Lexicon Flat Color palette, set to `false` to revert back to old colors ([69fcdb2](https://github.com/liferay/clay/commit/69fcdb2)), closes [#E83E8](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/E83E8) [#2726](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2726)
* **clay-css:** Badge adds `.c-inner` pattern for `.badge`, `.badge-item`, and `.badge .close` ([01b7aee](https://github.com/liferay/clay/commit/01b7aee)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Buttons adds `.c-inner` pattern for `.btn`, `.btn-unstyled`, `.btn-monospaced`, `.btn-sm`, `.btn-lg` ([d810b02](https://github.com/liferay/clay/commit/d810b02)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Card add support for `.c-inner` ([5303bdf](https://github.com/liferay/clay/commit/5303bdf)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Card adds `.card-type-asset.product-card` ([c6be980](https://github.com/liferay/clay/commit/c6be980)), closes [#2843](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2843)
* **clay-css:** Card adds support for `.card` `.aspect-ratio-item-top-left`, `.aspect-ratio-item-top-center`, `.aspect-ratio-item-top-right`, `.aspect-ratio-item-right-middle`, `.aspect-ratio-item-bottom-right`, `.aspect-ratio-item-bottom-center`, `.aspect-ratio-item-bottom-left` ([930ee92](https://github.com/liferay/clay/commit/930ee92)), closes [#2843](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2843)
* **clay-css:** Clay Range add `clay-range-thumb` slider head overlay to make it easier to grab via js and position tooltip inside of it ([d3dbcbd](https://github.com/liferay/clay/commit/d3dbcbd))
* **clay-css:** Clay Time added focus styles for `.clay-time .form-control-inset` ([5c0c447](https://github.com/liferay/clay/commit/5c0c447)), closes [#2299](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2299)
* **clay-css:** Custom Control added `.custom-control-primary` to help increase visual hierarchy of a `custom-control` ([cc0275d](https://github.com/liferay/clay/commit/cc0275d)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Custom Control adds `$custom-control-description-font-weight` and sets font-weight to normal in Atlas ([3d2af5c](https://github.com/liferay/clay/commit/3d2af5c)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Custom Forms `.custom-control` should have `text-align: left` so text is next to input if parent container has `text-align: center` ([4615041](https://github.com/liferay/clay/commit/4615041)), closes [#2843](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2843)
* **clay-css:** Dropdown add `.c-inner` pattern for `.dropdown-item`, `.dropdown-menu-indicator-start`, and `.dropdown-menu-indicator-end` ([d9c40e6](https://github.com/liferay/clay/commit/d9c40e6)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Dropdown add styles for `.dropdown-item .c-kbd` ([8668050](https://github.com/liferay/clay/commit/8668050)), closes [#2906](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2906)
* **clay-css:** Dropdown Section add specific styles for nested `custom-control`s ([573a860](https://github.com/liferay/clay/commit/573a860)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** enable-c-inner: true by default ([81ea040](https://github.com/liferay/clay/commit/81ea040))
* **clay-css:** Forms Clay Multiselect `.form-control-tag-group` should have Clear All button and be aligned in the middle ([3df613c](https://github.com/liferay/clay/commit/3df613c)), closes [#2335](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2335)
* **clay-css:** Forms support `label` element without `for` attribute. `label` needs the class `.form-control-label` and text must be wrapped in an element with class `.form-control-label-text` ([d0fff7f](https://github.com/liferay/clay/commit/d0fff7f)), closes [#2242](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2242)
* **clay-css:** Global Functions added `clay-max` to return the maximum between two values and also accepts null values ([0852a9e](https://github.com/liferay/clay/commit/0852a9e))
* **clay-css:** Global Functions added `map-deep-merge()` that merges keys and values from deeply nested Sass maps ([1f21cac](https://github.com/liferay/clay/commit/1f21cac)), closes [#2403](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2403)
* **clay-css:** Icons add support for `.c-inner` in `.collapse-icon` ([679fcea](https://github.com/liferay/clay/commit/679fcea)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Input Group adds support for `.c-inner` to `.input-group-inset-item .btn` ([60fc69b](https://github.com/liferay/clay/commit/60fc69b)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Label adds `.c-inner` pattern for `.label`, `.label-lg`, and `.label-item` ([bbde2ec](https://github.com/liferay/clay/commit/bbde2ec)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Links `component-action` add support for `.c-inner`, declare properties from `%link-monospaced` in Sass map `$component-action` and remove `[@extend](https://github.com/extend) %link-monospaced` ([2f84f48](https://github.com/liferay/clay/commit/2f84f48)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Links `link-monospaced` should use `clay-link` mixin, add Sass map `$link-monospaced`, add support for `.c-inner` ([c9b3da3](https://github.com/liferay/clay/commit/c9b3da3)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Links `link-outline` should use `clay-link` mixin, add Sass map `$link-outline`, add support for `.c-inner` ([37e6598](https://github.com/liferay/clay/commit/37e6598)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** List Group `.list-group-item-action` should support `.c-inner` ([6add193](https://github.com/liferay/clay/commit/6add193)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** List Group add `.list-group-sm` modifier to make `.list-group-item` shorter ([edd8c40](https://github.com/liferay/clay/commit/edd8c40)), closes [#2423](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2423)
* **clay-css:** Menubar added `.menubar-vertical-expand-md.menubar-decorated` and `.menubar-vertical-expand-lg.menubar-decorated` ([e46b52c](https://github.com/liferay/clay/commit/e46b52c)), closes [#2822](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2822)
* **clay-css:** Mixin `clay-navbar-size` add `.c-inner` support for `.navbar-toggler`, `.navbar-toggler-link`, `.navbar-brand`, `.nav-btn`, `.nav-btn-monospaced`, `.nav-link`, `.nav-link-monospaced` ([95c8e1c](https://github.com/liferay/clay/commit/95c8e1c)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-button-size`, `clay-button-variant` add support for `.c-inner` and `.lexicon-icon` ([f37f31d](https://github.com/liferay/clay/commit/f37f31d)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-button-size`, `clay-button-variant`, `clay-close`, `clay-dropdown-item-variant`, `clay-label-size`, `clay-link` adds option to pass `$c-inner` through Sass map ([66d3827](https://github.com/liferay/clay/commit/66d3827)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-button-variant` adds configs `z-index`, `hover-z-index`, `focus-z-index`, `disabled-z-index` and `active-z-index` ([9f729d5](https://github.com/liferay/clay/commit/9f729d5)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-close` add `.c-inner` pattern ([8d355c8](https://github.com/liferay/clay/commit/8d355c8)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-dropdown-item-variant` adds options to configure `autofit-row`, `c-kbd-inline`, `hover-c-kbd-inline`, `focus-c-kbd-inline`, `active-c-kbd-inline`, `active-class-c-kbd-inline`, `disabled-c-kbd-inline` ([b2e743d](https://github.com/liferay/clay/commit/b2e743d)), closes [#2906](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2906)
* **clay-css:** Mixins `clay-form-control-variant` add options to configure `$selection-bg`, `$selection-color`, and should also output `.focus` styles ([ec5663c](https://github.com/liferay/clay/commit/ec5663c)), closes [#2299](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2299)
* **clay-css:** Mixins `clay-link` `.c-inner` should use parent's `max-width` ([0fe271d](https://github.com/liferay/clay/commit/0fe271d)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-link` add `.c-inner` pattern ([09c5628](https://github.com/liferay/clay/commit/09c5628)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-link` added position, padding, and disabled-active-pointer-events ([4d78c67](https://github.com/liferay/clay/commit/4d78c67)), closes [#2540](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2540)
* **clay-css:** Mixins `clay-link` adds config `margin`, `max-height`, `min-height`, `min-width` ([516c9e8](https://github.com/liferay/clay/commit/516c9e8)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-menubar-vertical-expand` adds support for `.menubar-toggler .c-inner` through Sass map `toggler-c-inner` ([cd81488](https://github.com/liferay/clay/commit/cd81488)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins added `clay-autofit-row` for custom `.autofit-row` and `.autofit-col` spacing ([cf3bafa](https://github.com/liferay/clay/commit/cf3bafa)), closes [#2765](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2765)
* **clay-css:** Mixins added `clay-line-clamp` for truncating text based on number of lines ([525f3d1](https://github.com/liferay/clay/commit/525f3d1)), closes [#2058](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2058)
* **clay-css:** Mixins added `clay-range-input-variant` for creating `.clay-range-input` variants ([55e59eb](https://github.com/liferay/clay/commit/55e59eb))
* **clay-css:** Mixins added `mixins/_globals.scss` file and mixin `clay-css` for outputting any css property ([af0da9f](https://github.com/liferay/clay/commit/af0da9f)), closes [#2822](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2822)
* **clay-css:** Mixins clay-container adds option to configure cursor ([6f6fb78](https://github.com/liferay/clay/commit/6f6fb78))
* **clay-css:** Modals add `.modal-item-group`, `.modal-item-group-first`, `.modal-item-group-last`, `.modal-item-group-only`, `.modal-item-shrink`, and modify `.modal-item` to accommodate more use cases like truncating long text ([72d9083](https://github.com/liferay/clay/commit/72d9083)), closes [#2844](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2844)
* **clay-css:** Modals added fixed height modals `.modal-height-sm`, `.modal-height-md`, `.modal-height-lg`, `.modal-height-xl` that sets heights `250px`, `450px`, `650px`, `800px` respectively ([de5d10d](https://github.com/liferay/clay/commit/de5d10d)), closes [#2395](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2395)
* **clay-css:** Multi Step Nav add `.c-inner` support for `.multi-step-icon` ([81c4924](https://github.com/liferay/clay/commit/81c4924)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Nav add `.c-inner` support for `.nav-btn`, `.nav-btn-monospaced`, and `.nav-link-monospaced` ([e2ca2ea](https://github.com/liferay/clay/commit/e2ca2ea)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Nav add support for `.c-inner` in `.nav-link` ([f3d19f0](https://github.com/liferay/clay/commit/f3d19f0)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Nav add support for `.nav-link.btn-unstyled` ([3dcbf47](https://github.com/liferay/clay/commit/3dcbf47)), closes [#2540](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2540)
* **clay-css:** Navbar add support for `.nav-item .dropdown` so `.dropdown-toggle` is sized and positioned properly ([124ee8b](https://github.com/liferay/clay/commit/124ee8b)), closes [#2900](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2900)
* **clay-css:** new SVG Icon test ([acb9f57](https://github.com/liferay/clay/commit/acb9f57))
* **clay-css:** Pagination add `.c-inner` support for `.pagination-sm` and `.pagination-lg` ([7464fe3](https://github.com/liferay/clay/commit/7464fe3)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Panel add `.c-inner` support for `.panel-header`, `.panel-header.collapse-icon`, `.panel-group-flush .panel-header`, `.panel-group-flush .collapse-icon` ([507dfee](https://github.com/liferay/clay/commit/507dfee)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Range added `clay-range` component ([142700f](https://github.com/liferay/clay/commit/142700f)), closes [#2157](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2157)
* **clay-css:** Range added tooltip and fix styles in IE11 ([a9e6137](https://github.com/liferay/clay/commit/a9e6137))
* **clay-css:** Sheet add `.c-inner` support for `.sheet-subtitle`, `.sheet-subtitle.collapse-icon` ([9aafb11](https://github.com/liferay/clay/commit/9aafb11)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** SVG Icon added `device-check` ([80396b4](https://github.com/liferay/clay/commit/80396b4)), closes [#2757](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2757)
* **clay-css:** SVG Icon source format `change-list-disabled` ([dd8f2f2](https://github.com/liferay/clay/commit/dd8f2f2))
* **clay-css:** SVG Icons add `books.svg` ([5fb502d](https://github.com/liferay/clay/commit/5fb502d)), closes [#2905](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2905)
* **clay-css:** SVG Icons add `social-instagram` and `social-vimeo` ([a879b3d](https://github.com/liferay/clay/commit/a879b3d)), closes [#2695](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2695)
* **clay-css:** SVG Icons add briefcase ([0216f1c](https://github.com/liferay/clay/commit/0216f1c))
* **clay-css:** SVG Icons add Google ([4a34678](https://github.com/liferay/clay/commit/4a34678)), closes [#2581](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2581)
* **clay-css:** SVG Icons add hdd.svg ([5052c5f](https://github.com/liferay/clay/commit/5052c5f)), closes [#2582](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2582)
* **clay-css:** SVG Icons add sign-in ([1c31dbb](https://github.com/liferay/clay/commit/1c31dbb)), closes [#2580](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2580)
* **clay-css:** SVG Icons added `credit-card` and `catalog` ([0d8e359](https://github.com/liferay/clay/commit/0d8e359)), closes [#2739](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2739)
* **clay-css:** SVG Icons added `heart-full` ([38edecf](https://github.com/liferay/clay/commit/38edecf)), closes [#2690](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2690)
* **clay-css:** SVG Icons added `import` and `import-list` ([4cf09f1](https://github.com/liferay/clay/commit/4cf09f1)), closes [#2683](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2683)
* **clay-css:** SVG Icons added `liferay-ac` ([6c76834](https://github.com/liferay/clay/commit/6c76834)), closes [#2727](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2727)
* **clay-css:** SVG Icons added `order-arrow-left` and `order-arrow-right` ([4a86eac](https://github.com/liferay/clay/commit/4a86eac)), closes [#2688](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2688)
* **clay-css:** SVG Icons added `times-circle-full` and `times-small` ([9be9456](https://github.com/liferay/clay/commit/9be9456)), closes [#2691](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2691)
* **clay-css:** SVG Icons added `truck` ([76b19e0](https://github.com/liferay/clay/commit/76b19e0)), closes [#2689](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2689)
* **clay-css:** SVG Icons added cloud ([001e644](https://github.com/liferay/clay/commit/001e644)), closes [#2742](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2742)
* **clay-css:** SVG Icons adds `document-pending` ([24067d8](https://github.com/liferay/clay/commit/24067d8)), closes [#2724](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2724)
* **clay-css:** SVG Icons deprecate `twitter` and add `social-twitter` ([eb5e2c0](https://github.com/liferay/clay/commit/eb5e2c0)), closes [#2697](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2697)
* **clay-css:** SVG Icons update `times` to be thicker ([4632b83](https://github.com/liferay/clay/commit/4632b83))
* **clay-css:** Tbar add `.c-inner` support for `.tbar-link`, `.tbar-link-monospaced`, `.tbar-btn`, `.tbar-btn-monospaced` ([9560bef](https://github.com/liferay/clay/commit/9560bef)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Type adds `.c-kbd` to style `kbd` element with light/dark theme and sizes sm/lg ([26db8b6](https://github.com/liferay/clay/commit/26db8b6)), closes [#2906](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2906)
* **clay-css:** Update Bootstrap CSS to 4.4.1, Bootstrap JS 4.4.0, Popper.js 1.16.0 ([491620d](https://github.com/liferay/clay/commit/491620d)), closes [#2785](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2785)
* **clay-css:** Use `map-deep-merge` to merge Sass maps in Clay CSS ([d69858d](https://github.com/liferay/clay/commit/d69858d)), closes [#2403](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2403)
* **clay-css:** Utilities `.c-inner` should inherit sizing styles from parent ([7dd8f58](https://github.com/liferay/clay/commit/7dd8f58)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Utilities add duplicate of Bootstrap's spacing utilities prefixed with `c-` and without the `!important` flag ([e12e7b4](https://github.com/liferay/clay/commit/e12e7b4)), closes [#2725](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2725)
* **clay-css:** Utilities adds `.c-inner` wrapper for use inside interactive elements to have better control over focus styles on click ([9616e49](https://github.com/liferay/clay/commit/9616e49)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)





# [3.6.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.5.0...@clayui/css@3.6.0) (2020-02-13)


### Bug Fixes

* **clay-css:** Navigation Bar and Management Bar focus styles should match across each component ([5d0ecf9](https://github.com/liferay/clay/commit/5d0ecf9)), closes [#2900](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2900)


### Features

* **clay-css:** Aspect Ratio adds `.aspect-ratio-item-top-left` ([6981a23](https://github.com/liferay/clay/commit/6981a23)), closes [#2843](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2843)
* **clay-css:** Card adds `.card-type-asset.product-card` ([c6be980](https://github.com/liferay/clay/commit/c6be980)), closes [#2843](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2843)
* **clay-css:** Card adds support for `.card` `.aspect-ratio-item-top-left`, `.aspect-ratio-item-top-center`, `.aspect-ratio-item-top-right`, `.aspect-ratio-item-right-middle`, `.aspect-ratio-item-bottom-right`, `.aspect-ratio-item-bottom-center`, `.aspect-ratio-item-bottom-left` ([930ee92](https://github.com/liferay/clay/commit/930ee92)), closes [#2843](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2843)
* **clay-css:** Custom Forms `.custom-control` should have `text-align: left` so text is next to input if parent container has `text-align: center` ([4615041](https://github.com/liferay/clay/commit/4615041)), closes [#2843](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2843)
* **clay-css:** Modals add `.modal-item-group`, `.modal-item-group-first`, `.modal-item-group-last`, `.modal-item-group-only`, `.modal-item-shrink`, and modify `.modal-item` to accommodate more use cases like truncating long text ([72d9083](https://github.com/liferay/clay/commit/72d9083)), closes [#2844](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2844)
* **clay-css:** Navbar add support for `.nav-item .dropdown` so `.dropdown-toggle` is sized and positioned properly ([124ee8b](https://github.com/liferay/clay/commit/124ee8b)), closes [#2900](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2900)
* **clay-css:** SVG Icons add `books.svg` ([5fb502d](https://github.com/liferay/clay/commit/5fb502d)), closes [#2905](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2905)





# [3.5.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.2.0...@clayui/css@3.5.0) (2020-01-31)


### Bug Fixes

* **clay-css:** Adds `!optional` flag to `[@extend](https://github.com/extend)` for components that are extending selectors/placeholders outside of their respective component file ([403a0c2](https://github.com/liferay/clay/commit/403a0c2)), closes [#2881](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2881)
* **clay-css:** Atlas Custom Control disabled label color should be the same as `$input-label-disabled-color` ([a160132](https://github.com/liferay/clay/commit/a160132)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** Atlas Dropdown change `.dropdown-header` and `.dropdown-subheader` color to [#272833](https://github.com/liferay/clay/commit/f901ce8)), closes [#2812](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2812)
* **clay-css:** Atlas Globals tweak `$success`, `$success-d1`, `$success-l1`, `$danger-d` hex values to match Lexicon exactly ([5b50860](https://github.com/liferay/clay/commit/5b50860)), closes [#2820](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2820)
* **clay-css:** Custom Control add Sass maps `$custom-control-label`, `$custom-control-label-disabled`, `$custom-control-label-text` and map deprecated `$custom-control-description-*` to them so our namespace matches Bootstrap's. It was renamed toward end of Bootstrap beta in 6a54b4a ([e41dcf5](https://github.com/liferay/clay/commit/e41dcf5)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Deprecate `.sheet-lg` and `$sheet-lg-max-width` in favor of `.container .sheet` pattern ([2e1e82c](https://github.com/liferay/clay/commit/2e1e82c)), closes [#2655](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2655)
* **clay-css:** Dropdown Item `.disabled` should have `cursor: not-allowed` and move `pointer-events: none` to `.disabled:active` ([28cb857](https://github.com/liferay/clay/commit/28cb857)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** List Group double borders in `list-group-item-flex` caused by Bootstrap 4.4.1 22f6b37 ([1221279](https://github.com/liferay/clay/commit/1221279)), closes [#2785](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2785)
* **clay-css:** Modal Footer use `justify-content: flex-start` instead of Bootstrap's `flex-end` to work around IE11 rendering issues with `modal-item`'s ([2be40c2](https://github.com/liferay/clay/commit/2be40c2)), closes [#2873](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2873)
* **css:** allow newline characters to display properly for tooltips ([2265d10](https://github.com/liferay/clay/commit/2265d10))


### Features

* **clay-css:** Alert adds `.alert-btn`, `.alert-autofit-row`, `.alert-footer`, and `.alert .btn-group-item` ([5212f50](https://github.com/liferay/clay/commit/5212f50)), closes [#2765](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2765)
* **clay-css:** Atlas Form Validation add styles for readonly input success, error, and warning states ([faf5748](https://github.com/liferay/clay/commit/faf5748)), closes [#2715](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2715)
* **clay-css:** Atlas Global Variables make `h1` - `h6` font sizes the same as 2.x ([0e0f9a0](https://github.com/liferay/clay/commit/0e0f9a0)), closes [#2864](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2864)
* **clay-css:** Atlas Globals adds `$enable-lexicon-flat-colors` to change base colors to match Lexicon Flat Color palette, set to `false` to revert back to old colors ([69fcdb2](https://github.com/liferay/clay/commit/69fcdb2)), closes [#E83E8](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/E83E8) [#2726](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2726)
* **clay-css:** Custom Control added `.custom-control-primary` to help increase visual hierarchy of a `custom-control` ([cc0275d](https://github.com/liferay/clay/commit/cc0275d)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Custom Control adds `$custom-control-description-font-weight` and sets font-weight to normal in Atlas ([3d2af5c](https://github.com/liferay/clay/commit/3d2af5c)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Dropdown Section add specific styles for nested `custom-control`s ([573a860](https://github.com/liferay/clay/commit/573a860)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** Forms support `label` element without `for` attribute. `label` needs the class `.form-control-label` and text must be wrapped in an element with class `.form-control-label-text` ([d0fff7f](https://github.com/liferay/clay/commit/d0fff7f)), closes [#2242](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2242)
* **clay-css:** Menubar added `.menubar-vertical-expand-md.menubar-decorated` and `.menubar-vertical-expand-lg.menubar-decorated` ([e46b52c](https://github.com/liferay/clay/commit/e46b52c)), closes [#2822](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2822)
* **clay-css:** Mixins added `clay-autofit-row` for custom `.autofit-row` and `.autofit-col` spacing ([cf3bafa](https://github.com/liferay/clay/commit/cf3bafa)), closes [#2765](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2765)
* **clay-css:** Mixins added `mixins/_globals.scss` file and mixin `clay-css` for outputting any css property ([af0da9f](https://github.com/liferay/clay/commit/af0da9f)), closes [#2822](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2822)
* **clay-css:** Mixins clay-container adds option to configure cursor ([6f6fb78](https://github.com/liferay/clay/commit/6f6fb78))
* **clay-css:** SVG Icon added `device-check` ([80396b4](https://github.com/liferay/clay/commit/80396b4)), closes [#2757](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2757)
* **clay-css:** SVG Icons added `credit-card` and `catalog` ([0d8e359](https://github.com/liferay/clay/commit/0d8e359)), closes [#2739](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2739)
* **clay-css:** SVG Icons added `liferay-ac` ([6c76834](https://github.com/liferay/clay/commit/6c76834)), closes [#2727](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2727)
* **clay-css:** SVG Icons added cloud ([001e644](https://github.com/liferay/clay/commit/001e644)), closes [#2742](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2742)
* **clay-css:** SVG Icons adds `document-pending` ([24067d8](https://github.com/liferay/clay/commit/24067d8)), closes [#2724](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2724)
* **clay-css:** Update Bootstrap CSS to 4.4.1, Bootstrap JS 4.4.0, Popper.js 1.16.0 ([491620d](https://github.com/liferay/clay/commit/491620d)), closes [#2785](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2785)
* **clay-css:** Utilities add duplicate of Bootstrap's spacing utilities prefixed with `c-` and without the `!important` flag ([e12e7b4](https://github.com/liferay/clay/commit/e12e7b4)), closes [#2725](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2725)





# [3.4.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.2.0...@clayui/css@3.4.0) (2020-01-20)


### Bug Fixes

* **clay-css:** Atlas Custom Control disabled label color should be the same as `$input-label-disabled-color` ([a160132](https://github.com/liferay/clay/commit/a160132)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** Atlas Dropdown change `.dropdown-header` and `.dropdown-subheader` color to [#272833](https://github.com/liferay/clay/commit/f901ce8)), closes [#2812](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2812)
* **clay-css:** Atlas Globals tweak `$success`, `$success-d1`, `$success-l1`, `$danger-d` hex values to match Lexicon exactly ([5b50860](https://github.com/liferay/clay/commit/5b50860)), closes [#2820](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2820)
* **clay-css:** Custom Control add Sass maps `$custom-control-label`, `$custom-control-label-disabled`, `$custom-control-label-text` and map deprecated `$custom-control-description-*` to them so our namespace matches Bootstrap's. It was renamed toward end of Bootstrap beta in 6a54b4a ([e41dcf5](https://github.com/liferay/clay/commit/e41dcf5)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Deprecate `.sheet-lg` and `$sheet-lg-max-width` in favor of `.container .sheet` pattern ([2e1e82c](https://github.com/liferay/clay/commit/2e1e82c)), closes [#2655](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2655)
* **clay-css:** Dropdown Item `.disabled` should have `cursor: not-allowed` and move `pointer-events: none` to `.disabled:active` ([28cb857](https://github.com/liferay/clay/commit/28cb857)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** List Group double borders in `list-group-item-flex` caused by Bootstrap 4.4.1 22f6b37 ([1221279](https://github.com/liferay/clay/commit/1221279)), closes [#2785](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2785)
* **css:** allow newline characters to display properly for tooltips ([2265d10](https://github.com/liferay/clay/commit/2265d10))


### Features

* **clay-css:** Alert adds `.alert-btn`, `.alert-autofit-row`, `.alert-footer`, and `.alert .btn-group-item` ([5212f50](https://github.com/liferay/clay/commit/5212f50)), closes [#2765](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2765)
* **clay-css:** Atlas Form Validation add styles for readonly input success, error, and warning states ([faf5748](https://github.com/liferay/clay/commit/faf5748)), closes [#2715](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2715)
* **clay-css:** Atlas Global Variables make `h1` - `h6` font sizes the same as 2.x ([0e0f9a0](https://github.com/liferay/clay/commit/0e0f9a0)), closes [#2864](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2864)
* **clay-css:** Atlas Globals adds `$enable-lexicon-flat-colors` to change base colors to match Lexicon Flat Color palette, set to `false` to revert back to old colors ([69fcdb2](https://github.com/liferay/clay/commit/69fcdb2)), closes [#E83E8](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/E83E8) [#2726](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2726)
* **clay-css:** Custom Control added `.custom-control-primary` to help increase visual hierarchy of a `custom-control` ([cc0275d](https://github.com/liferay/clay/commit/cc0275d)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Custom Control adds `$custom-control-description-font-weight` and sets font-weight to normal in Atlas ([3d2af5c](https://github.com/liferay/clay/commit/3d2af5c)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Dropdown Section add specific styles for nested `custom-control`s ([573a860](https://github.com/liferay/clay/commit/573a860)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** Forms support `label` element without `for` attribute. `label` needs the class `.form-control-label` and text must be wrapped in an element with class `.form-control-label-text` ([d0fff7f](https://github.com/liferay/clay/commit/d0fff7f)), closes [#2242](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2242)
* **clay-css:** Menubar added `.menubar-vertical-expand-md.menubar-decorated` and `.menubar-vertical-expand-lg.menubar-decorated` ([e46b52c](https://github.com/liferay/clay/commit/e46b52c)), closes [#2822](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2822)
* **clay-css:** Mixins added `clay-autofit-row` for custom `.autofit-row` and `.autofit-col` spacing ([cf3bafa](https://github.com/liferay/clay/commit/cf3bafa)), closes [#2765](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2765)
* **clay-css:** Mixins added `mixins/_globals.scss` file and mixin `clay-css` for outputting any css property ([af0da9f](https://github.com/liferay/clay/commit/af0da9f)), closes [#2822](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2822)
* **clay-css:** Mixins clay-container adds option to configure cursor ([6f6fb78](https://github.com/liferay/clay/commit/6f6fb78))
* **clay-css:** SVG Icon added `device-check` ([80396b4](https://github.com/liferay/clay/commit/80396b4)), closes [#2757](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2757)
* **clay-css:** SVG Icons added `credit-card` and `catalog` ([0d8e359](https://github.com/liferay/clay/commit/0d8e359)), closes [#2739](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2739)
* **clay-css:** SVG Icons added `liferay-ac` ([6c76834](https://github.com/liferay/clay/commit/6c76834)), closes [#2727](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2727)
* **clay-css:** SVG Icons added cloud ([001e644](https://github.com/liferay/clay/commit/001e644)), closes [#2742](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2742)
* **clay-css:** SVG Icons adds `document-pending` ([24067d8](https://github.com/liferay/clay/commit/24067d8)), closes [#2724](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2724)
* **clay-css:** Update Bootstrap CSS to 4.4.1, Bootstrap JS 4.4.0, Popper.js 1.16.0 ([491620d](https://github.com/liferay/clay/commit/491620d)), closes [#2785](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2785)
* **clay-css:** Utilities add duplicate of Bootstrap's spacing utilities prefixed with `c-` and without the `!important` flag ([e12e7b4](https://github.com/liferay/clay/commit/e12e7b4)), closes [#2725](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2725)





# [3.3.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.2.0...@clayui/css@3.3.0) (2019-12-05)


### Bug Fixes

* **clay-css:** Deprecate `.sheet-lg` and `$sheet-lg-max-width` in favor of `.container .sheet` pattern ([2e1e82c](https://github.com/liferay/clay/commit/2e1e82c)), closes [#2655](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2655)


### Features

* **clay-css:** Atlas Form Validation add styles for readonly input success, error, and warning states ([faf5748](https://github.com/liferay/clay/commit/faf5748)), closes [#2715](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2715)
* **clay-css:** Atlas Globals adds `$enable-lexicon-flat-colors` to change base colors to match Lexicon Flat Color palette, set to `false` to revert back to old colors ([69fcdb2](https://github.com/liferay/clay/commit/69fcdb2)), closes [#E83E8](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/E83E8) [#2726](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2726)
* **clay-css:** SVG Icon added `device-check` ([80396b4](https://github.com/liferay/clay/commit/80396b4)), closes [#2757](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2757)
* **clay-css:** SVG Icons added `credit-card` and `catalog` ([0d8e359](https://github.com/liferay/clay/commit/0d8e359)), closes [#2739](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2739)
* **clay-css:** SVG Icons added `liferay-ac` ([6c76834](https://github.com/liferay/clay/commit/6c76834)), closes [#2727](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2727)
* **clay-css:** SVG Icons added cloud ([001e644](https://github.com/liferay/clay/commit/001e644)), closes [#2742](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2742)
* **clay-css:** SVG Icons adds `document-pending` ([24067d8](https://github.com/liferay/clay/commit/24067d8)), closes [#2724](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2724)
* **clay-css:** Utilities add duplicate of Bootstrap's spacing utilities prefixed with `c-` and without the `!important` flag ([e12e7b4](https://github.com/liferay/clay/commit/e12e7b4)), closes [#2725](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2725)





# [3.2.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.1.0...@clayui/css@3.2.0) (2019-11-07)


### Features

* **clay-css:** SVG Icons add `social-instagram` and `social-vimeo` ([a879b3d](https://github.com/liferay/clay/commit/a879b3d)), closes [#2695](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2695)
* **clay-css:** SVG Icons added `heart-full` ([38edecf](https://github.com/liferay/clay/commit/38edecf)), closes [#2690](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2690)
* **clay-css:** SVG Icons added `import` and `import-list` ([4cf09f1](https://github.com/liferay/clay/commit/4cf09f1)), closes [#2683](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2683)
* **clay-css:** SVG Icons added `order-arrow-left` and `order-arrow-right` ([4a86eac](https://github.com/liferay/clay/commit/4a86eac)), closes [#2688](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2688)
* **clay-css:** SVG Icons added `times-circle-full` and `times-small` ([9be9456](https://github.com/liferay/clay/commit/9be9456)), closes [#2691](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2691)
* **clay-css:** SVG Icons added `truck` ([76b19e0](https://github.com/liferay/clay/commit/76b19e0)), closes [#2689](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2689)
* **clay-css:** SVG Icons deprecate `twitter` and add `social-twitter` ([eb5e2c0](https://github.com/liferay/clay/commit/eb5e2c0)), closes [#2697](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2697)
* **clay-css:** SVG Icons update `times` to be thicker ([4632b83](https://github.com/liferay/clay/commit/4632b83))





# [3.1.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.0.1...@clayui/css@3.1.0) (2019-10-28)


### Bug Fixes

* broken markdown lists ([d1adc7e](https://github.com/liferay/clay/commit/d1adc7e))


### Features

* **clay-css:** SVG Icons add briefcase ([0216f1c](https://github.com/liferay/clay/commit/0216f1c))
* **clay-css:** SVG Icons add hdd.svg ([5052c5f](https://github.com/liferay/clay/commit/5052c5f)), closes [#2582](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2582)
* **clay-css:** SVG Icons add sign-in ([1c31dbb](https://github.com/liferay/clay/commit/1c31dbb)), closes [#2580](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2580)





### v3.0.0-alpha.1
