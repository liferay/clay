# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
