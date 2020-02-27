# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.7.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.6.0...@clayui/css@3.7.0) (2020-02-27)


### Bug Fixes

* **clay-css:** Add border-spacing, border-collapse not working in IE ([9d12922](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9d12922))
* **clay-css:** Badges `.badge > .c-inner` only set margins and overwrite inherited max-width property ([52ee10f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/52ee10f)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Buttons use `math-sign` function for calculating negative margins on `.btn .c-inner` to prevent invalid CSS output like `margin: - -;` ([1ca34e4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/1ca34e4)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-button-size`, `clay-button-variant`, `clay-close`, `clay-label-size`, `clay-link`, `clay-menubar-vertical-expand`, `clay-navbar-size`, `clay-panel-variant`, `clay-tbar-variant` should only set margins for `c-inner` ([61ac029](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/61ac029)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-dropdown-item-variant` only set margins and overwrite inherited width property for `c-inner` ([be5d06c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/be5d06c)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)


### Features

* **clay-css:** Badge adds `.c-inner` pattern for `.badge`, `.badge-item`, and `.badge .close` ([01b7aee](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/01b7aee)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Buttons adds `.c-inner` pattern for `.btn`, `.btn-unstyled`, `.btn-monospaced`, `.btn-sm`, `.btn-lg` ([d810b02](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d810b02)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Card add support for `.c-inner` ([5303bdf](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5303bdf)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Dropdown add `.c-inner` pattern for `.dropdown-item`, `.dropdown-menu-indicator-start`, and `.dropdown-menu-indicator-end` ([d9c40e6](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d9c40e6)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Dropdown add styles for `.dropdown-item .c-kbd` ([8668050](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/8668050)), closes [#2906](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2906)
* **clay-css:** enable-c-inner: true by default ([81ea040](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/81ea040))
* **clay-css:** Icons add support for `.c-inner` in `.collapse-icon` ([679fcea](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/679fcea)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Input Group adds support for `.c-inner` to `.input-group-inset-item .btn` ([60fc69b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/60fc69b)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Label adds `.c-inner` pattern for `.label`, `.label-lg`, and `.label-item` ([bbde2ec](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/bbde2ec)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Links `component-action` add support for `.c-inner`, declare properties from `%link-monospaced` in Sass map `$component-action` and remove `[@extend](https://github.com/extend) %link-monospaced` ([2f84f48](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2f84f48)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Links `link-monospaced` should use `clay-link` mixin, add Sass map `$link-monospaced`, add support for `.c-inner` ([c9b3da3](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/c9b3da3)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Links `link-outline` should use `clay-link` mixin, add Sass map `$link-outline`, add support for `.c-inner` ([37e6598](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/37e6598)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** List Group `.list-group-item-action` should support `.c-inner` ([6add193](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6add193)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixin `clay-navbar-size` add `.c-inner` support for `.navbar-toggler`, `.navbar-toggler-link`, `.navbar-brand`, `.nav-btn`, `.nav-btn-monospaced`, `.nav-link`, `.nav-link-monospaced` ([95c8e1c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/95c8e1c)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-button-size`, `clay-button-variant` add support for `.c-inner` and `.lexicon-icon` ([f37f31d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/f37f31d)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-button-size`, `clay-button-variant`, `clay-close`, `clay-dropdown-item-variant`, `clay-label-size`, `clay-link` adds option to pass `$c-inner` through Sass map ([66d3827](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/66d3827)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-button-variant` adds configs `z-index`, `hover-z-index`, `focus-z-index`, `disabled-z-index` and `active-z-index` ([9f729d5](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9f729d5)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-close` add `.c-inner` pattern ([8d355c8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/8d355c8)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-dropdown-item-variant` adds options to configure `autofit-row`, `c-kbd-inline`, `hover-c-kbd-inline`, `focus-c-kbd-inline`, `active-c-kbd-inline`, `active-class-c-kbd-inline`, `disabled-c-kbd-inline` ([b2e743d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/b2e743d)), closes [#2906](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2906)
* **clay-css:** Mixins `clay-link` `.c-inner` should use parent's `max-width` ([0fe271d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0fe271d)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-link` add `.c-inner` pattern ([09c5628](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/09c5628)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-link` adds config `margin`, `max-height`, `min-height`, `min-width` ([516c9e8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/516c9e8)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Mixins `clay-menubar-vertical-expand` adds support for `.menubar-toggler .c-inner` through Sass map `toggler-c-inner` ([cd81488](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cd81488)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Multi Step Nav add `.c-inner` support for `.multi-step-icon` ([81c4924](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/81c4924)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Nav add `.c-inner` support for `.nav-btn`, `.nav-btn-monospaced`, and `.nav-link-monospaced` ([e2ca2ea](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e2ca2ea)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Nav add support for `.c-inner` in `.nav-link` ([f3d19f0](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/f3d19f0)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Pagination add `.c-inner` support for `.pagination-sm` and `.pagination-lg` ([7464fe3](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/7464fe3)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Panel add `.c-inner` support for `.panel-header`, `.panel-header.collapse-icon`, `.panel-group-flush .panel-header`, `.panel-group-flush .collapse-icon` ([507dfee](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/507dfee)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Sheet add `.c-inner` support for `.sheet-subtitle`, `.sheet-subtitle.collapse-icon` ([9aafb11](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9aafb11)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Tbar add `.c-inner` support for `.tbar-link`, `.tbar-link-monospaced`, `.tbar-btn`, `.tbar-btn-monospaced` ([9560bef](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9560bef)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Type adds `.c-kbd` to style `kbd` element with light/dark theme and sizes sm/lg ([26db8b6](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/26db8b6)), closes [#2906](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2906)
* **clay-css:** Utilities `.c-inner` should inherit sizing styles from parent ([7dd8f58](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/7dd8f58)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)
* **clay-css:** Utilities adds `.c-inner` wrapper for use inside interactive elements to have better control over focus styles on click ([9616e49](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9616e49)), closes [#2763](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2763)





# [3.6.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.5.0...@clayui/css@3.6.0) (2020-02-13)


### Bug Fixes

* **clay-css:** Navigation Bar and Management Bar focus styles should match across each component ([5d0ecf9](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5d0ecf9)), closes [#2900](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2900)


### Features

* **clay-css:** Aspect Ratio adds `.aspect-ratio-item-top-left` ([6981a23](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6981a23)), closes [#2843](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2843)
* **clay-css:** Card adds `.card-type-asset.product-card` ([c6be980](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/c6be980)), closes [#2843](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2843)
* **clay-css:** Card adds support for `.card` `.aspect-ratio-item-top-left`, `.aspect-ratio-item-top-center`, `.aspect-ratio-item-top-right`, `.aspect-ratio-item-right-middle`, `.aspect-ratio-item-bottom-right`, `.aspect-ratio-item-bottom-center`, `.aspect-ratio-item-bottom-left` ([930ee92](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/930ee92)), closes [#2843](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2843)
* **clay-css:** Custom Forms `.custom-control` should have `text-align: left` so text is next to input if parent container has `text-align: center` ([4615041](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/4615041)), closes [#2843](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2843)
* **clay-css:** Modals add `.modal-item-group`, `.modal-item-group-first`, `.modal-item-group-last`, `.modal-item-group-only`, `.modal-item-shrink`, and modify `.modal-item` to accommodate more use cases like truncating long text ([72d9083](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/72d9083)), closes [#2844](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2844)
* **clay-css:** Navbar add support for `.nav-item .dropdown` so `.dropdown-toggle` is sized and positioned properly ([124ee8b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/124ee8b)), closes [#2900](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2900)
* **clay-css:** SVG Icons add `books.svg` ([5fb502d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5fb502d)), closes [#2905](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2905)





# [3.5.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.2.0...@clayui/css@3.5.0) (2020-01-31)


### Bug Fixes

* **clay-css:** Adds `!optional` flag to `[@extend](https://github.com/extend)` for components that are extending selectors/placeholders outside of their respective component file ([403a0c2](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/403a0c2)), closes [#2881](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2881)
* **clay-css:** Atlas Custom Control disabled label color should be the same as `$input-label-disabled-color` ([a160132](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a160132)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** Atlas Dropdown change `.dropdown-header` and `.dropdown-subheader` color to [#272833](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/272833) ([f901ce8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/f901ce8)), closes [#2812](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2812)
* **clay-css:** Atlas Globals tweak `$success`, `$success-d1`, `$success-l1`, `$danger-d` hex values to match Lexicon exactly ([5b50860](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5b50860)), closes [#2820](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2820)
* **clay-css:** Custom Control add Sass maps `$custom-control-label`, `$custom-control-label-disabled`, `$custom-control-label-text` and map deprecated `$custom-control-description-*` to them so our namespace matches Bootstrap's. It was renamed toward end of Bootstrap beta in 6a54b4a ([e41dcf5](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e41dcf5)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Deprecate `.sheet-lg` and `$sheet-lg-max-width` in favor of `.container .sheet` pattern ([2e1e82c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2e1e82c)), closes [#2655](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2655)
* **clay-css:** Dropdown Item `.disabled` should have `cursor: not-allowed` and move `pointer-events: none` to `.disabled:active` ([28cb857](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/28cb857)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** List Group double borders in `list-group-item-flex` caused by Bootstrap 4.4.1 22f6b37 ([1221279](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/1221279)), closes [#2785](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2785)
* **clay-css:** Modal Footer use `justify-content: flex-start` instead of Bootstrap's `flex-end` to work around IE11 rendering issues with `modal-item`'s ([2be40c2](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2be40c2)), closes [#2873](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2873)
* **css:** allow newline characters to display properly for tooltips ([2265d10](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2265d10))


### Features

* **clay-css:** Alert adds `.alert-btn`, `.alert-autofit-row`, `.alert-footer`, and `.alert .btn-group-item` ([5212f50](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5212f50)), closes [#2765](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2765)
* **clay-css:** Atlas Form Validation add styles for readonly input success, error, and warning states ([faf5748](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/faf5748)), closes [#2715](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2715)
* **clay-css:** Atlas Global Variables make `h1` - `h6` font sizes the same as 2.x ([0e0f9a0](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0e0f9a0)), closes [#2864](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2864)
* **clay-css:** Atlas Globals adds `$enable-lexicon-flat-colors` to change base colors to match Lexicon Flat Color palette, set to `false` to revert back to old colors ([69fcdb2](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/69fcdb2)), closes [#E83E8](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/E83E8) [#2726](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2726)
* **clay-css:** Custom Control added `.custom-control-primary` to help increase visual hierarchy of a `custom-control` ([cc0275d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cc0275d)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Custom Control adds `$custom-control-description-font-weight` and sets font-weight to normal in Atlas ([3d2af5c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/3d2af5c)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Dropdown Section add specific styles for nested `custom-control`s ([573a860](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/573a860)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** Forms support `label` element without `for` attribute. `label` needs the class `.form-control-label` and text must be wrapped in an element with class `.form-control-label-text` ([d0fff7f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d0fff7f)), closes [#2242](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2242)
* **clay-css:** Menubar added `.menubar-vertical-expand-md.menubar-decorated` and `.menubar-vertical-expand-lg.menubar-decorated` ([e46b52c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e46b52c)), closes [#2822](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2822)
* **clay-css:** Mixins added `clay-autofit-row` for custom `.autofit-row` and `.autofit-col` spacing ([cf3bafa](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cf3bafa)), closes [#2765](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2765)
* **clay-css:** Mixins added `mixins/_globals.scss` file and mixin `clay-css` for outputting any css property ([af0da9f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/af0da9f)), closes [#2822](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2822)
* **clay-css:** Mixins clay-container adds option to configure cursor ([6f6fb78](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6f6fb78))
* **clay-css:** SVG Icon added `device-check` ([80396b4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/80396b4)), closes [#2757](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2757)
* **clay-css:** SVG Icons added `credit-card` and `catalog` ([0d8e359](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0d8e359)), closes [#2739](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2739)
* **clay-css:** SVG Icons added `liferay-ac` ([6c76834](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6c76834)), closes [#2727](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2727)
* **clay-css:** SVG Icons added cloud ([001e644](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/001e644)), closes [#2742](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2742)
* **clay-css:** SVG Icons adds `document-pending` ([24067d8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/24067d8)), closes [#2724](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2724)
* **clay-css:** Update Bootstrap CSS to 4.4.1, Bootstrap JS 4.4.0, Popper.js 1.16.0 ([491620d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/491620d)), closes [#2785](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2785)
* **clay-css:** Utilities add duplicate of Bootstrap's spacing utilities prefixed with `c-` and without the `!important` flag ([e12e7b4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e12e7b4)), closes [#2725](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2725)





# [3.4.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.2.0...@clayui/css@3.4.0) (2020-01-20)


### Bug Fixes

* **clay-css:** Atlas Custom Control disabled label color should be the same as `$input-label-disabled-color` ([a160132](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a160132)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** Atlas Dropdown change `.dropdown-header` and `.dropdown-subheader` color to [#272833](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/272833) ([f901ce8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/f901ce8)), closes [#2812](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2812)
* **clay-css:** Atlas Globals tweak `$success`, `$success-d1`, `$success-l1`, `$danger-d` hex values to match Lexicon exactly ([5b50860](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5b50860)), closes [#2820](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2820)
* **clay-css:** Custom Control add Sass maps `$custom-control-label`, `$custom-control-label-disabled`, `$custom-control-label-text` and map deprecated `$custom-control-description-*` to them so our namespace matches Bootstrap's. It was renamed toward end of Bootstrap beta in 6a54b4a ([e41dcf5](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e41dcf5)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Deprecate `.sheet-lg` and `$sheet-lg-max-width` in favor of `.container .sheet` pattern ([2e1e82c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2e1e82c)), closes [#2655](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2655)
* **clay-css:** Dropdown Item `.disabled` should have `cursor: not-allowed` and move `pointer-events: none` to `.disabled:active` ([28cb857](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/28cb857)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** List Group double borders in `list-group-item-flex` caused by Bootstrap 4.4.1 22f6b37 ([1221279](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/1221279)), closes [#2785](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2785)
* **css:** allow newline characters to display properly for tooltips ([2265d10](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2265d10))


### Features

* **clay-css:** Alert adds `.alert-btn`, `.alert-autofit-row`, `.alert-footer`, and `.alert .btn-group-item` ([5212f50](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5212f50)), closes [#2765](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2765)
* **clay-css:** Atlas Form Validation add styles for readonly input success, error, and warning states ([faf5748](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/faf5748)), closes [#2715](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2715)
* **clay-css:** Atlas Global Variables make `h1` - `h6` font sizes the same as 2.x ([0e0f9a0](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0e0f9a0)), closes [#2864](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2864)
* **clay-css:** Atlas Globals adds `$enable-lexicon-flat-colors` to change base colors to match Lexicon Flat Color palette, set to `false` to revert back to old colors ([69fcdb2](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/69fcdb2)), closes [#E83E8](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/E83E8) [#2726](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2726)
* **clay-css:** Custom Control added `.custom-control-primary` to help increase visual hierarchy of a `custom-control` ([cc0275d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cc0275d)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Custom Control adds `$custom-control-description-font-weight` and sets font-weight to normal in Atlas ([3d2af5c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/3d2af5c)), closes [#2813](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2813)
* **clay-css:** Dropdown Section add specific styles for nested `custom-control`s ([573a860](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/573a860)), closes [#2811](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2811)
* **clay-css:** Forms support `label` element without `for` attribute. `label` needs the class `.form-control-label` and text must be wrapped in an element with class `.form-control-label-text` ([d0fff7f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d0fff7f)), closes [#2242](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2242)
* **clay-css:** Menubar added `.menubar-vertical-expand-md.menubar-decorated` and `.menubar-vertical-expand-lg.menubar-decorated` ([e46b52c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e46b52c)), closes [#2822](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2822)
* **clay-css:** Mixins added `clay-autofit-row` for custom `.autofit-row` and `.autofit-col` spacing ([cf3bafa](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cf3bafa)), closes [#2765](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2765)
* **clay-css:** Mixins added `mixins/_globals.scss` file and mixin `clay-css` for outputting any css property ([af0da9f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/af0da9f)), closes [#2822](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2822)
* **clay-css:** Mixins clay-container adds option to configure cursor ([6f6fb78](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6f6fb78))
* **clay-css:** SVG Icon added `device-check` ([80396b4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/80396b4)), closes [#2757](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2757)
* **clay-css:** SVG Icons added `credit-card` and `catalog` ([0d8e359](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0d8e359)), closes [#2739](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2739)
* **clay-css:** SVG Icons added `liferay-ac` ([6c76834](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6c76834)), closes [#2727](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2727)
* **clay-css:** SVG Icons added cloud ([001e644](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/001e644)), closes [#2742](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2742)
* **clay-css:** SVG Icons adds `document-pending` ([24067d8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/24067d8)), closes [#2724](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2724)
* **clay-css:** Update Bootstrap CSS to 4.4.1, Bootstrap JS 4.4.0, Popper.js 1.16.0 ([491620d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/491620d)), closes [#2785](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2785)
* **clay-css:** Utilities add duplicate of Bootstrap's spacing utilities prefixed with `c-` and without the `!important` flag ([e12e7b4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e12e7b4)), closes [#2725](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2725)





# [3.3.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.2.0...@clayui/css@3.3.0) (2019-12-05)


### Bug Fixes

* **clay-css:** Deprecate `.sheet-lg` and `$sheet-lg-max-width` in favor of `.container .sheet` pattern ([2e1e82c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2e1e82c)), closes [#2655](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2655)


### Features

* **clay-css:** Atlas Form Validation add styles for readonly input success, error, and warning states ([faf5748](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/faf5748)), closes [#2715](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2715)
* **clay-css:** Atlas Globals adds `$enable-lexicon-flat-colors` to change base colors to match Lexicon Flat Color palette, set to `false` to revert back to old colors ([69fcdb2](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/69fcdb2)), closes [#E83E8](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/E83E8) [#2726](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2726)
* **clay-css:** SVG Icon added `device-check` ([80396b4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/80396b4)), closes [#2757](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2757)
* **clay-css:** SVG Icons added `credit-card` and `catalog` ([0d8e359](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0d8e359)), closes [#2739](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2739)
* **clay-css:** SVG Icons added `liferay-ac` ([6c76834](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6c76834)), closes [#2727](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2727)
* **clay-css:** SVG Icons added cloud ([001e644](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/001e644)), closes [#2742](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2742)
* **clay-css:** SVG Icons adds `document-pending` ([24067d8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/24067d8)), closes [#2724](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2724)
* **clay-css:** Utilities add duplicate of Bootstrap's spacing utilities prefixed with `c-` and without the `!important` flag ([e12e7b4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e12e7b4)), closes [#2725](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2725)





# [3.2.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.1.0...@clayui/css@3.2.0) (2019-11-07)


### Features

* **clay-css:** SVG Icons add `social-instagram` and `social-vimeo` ([a879b3d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a879b3d)), closes [#2695](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2695)
* **clay-css:** SVG Icons added `heart-full` ([38edecf](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/38edecf)), closes [#2690](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2690)
* **clay-css:** SVG Icons added `import` and `import-list` ([4cf09f1](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/4cf09f1)), closes [#2683](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2683)
* **clay-css:** SVG Icons added `order-arrow-left` and `order-arrow-right` ([4a86eac](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/4a86eac)), closes [#2688](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2688)
* **clay-css:** SVG Icons added `times-circle-full` and `times-small` ([9be9456](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9be9456)), closes [#2691](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2691)
* **clay-css:** SVG Icons added `truck` ([76b19e0](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/76b19e0)), closes [#2689](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2689)
* **clay-css:** SVG Icons deprecate `twitter` and add `social-twitter` ([eb5e2c0](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/eb5e2c0)), closes [#2697](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2697)
* **clay-css:** SVG Icons update `times` to be thicker ([4632b83](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/4632b83))





# [3.1.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.0.1...@clayui/css@3.1.0) (2019-10-28)


### Bug Fixes

* broken markdown lists ([d1adc7e](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d1adc7e))


### Features

* **clay-css:** SVG Icons add briefcase ([0216f1c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0216f1c))
* **clay-css:** SVG Icons add hdd.svg ([5052c5f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5052c5f)), closes [#2582](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2582)
* **clay-css:** SVG Icons add sign-in ([1c31dbb](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/1c31dbb)), closes [#2580](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2580)





### v3.0.0-alpha.1
