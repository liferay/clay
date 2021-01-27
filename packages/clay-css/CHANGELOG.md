# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.24.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.23.0...@clayui/css@3.24.0) (2021-01-27)


### Bug Fixes

* **@clayui/css:** Absorb Bootstrap 4 variables into Clay CSS ([d4be0ec](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d4be0ec))
* **@clayui/css:** Atlas `color-yiq` function not useable in Atlas variables due to `$yiq-contrasted-threshold` undefined ([2035a8b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2035a8b)), closes [#3708](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3708)
* **@clayui/css:** Atlas Toggle Switch change checked state button icon color to primary ([de9ca0b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/de9ca0b)), closes [#3872](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3872)
* **@clayui/css:** List Group adds missing disabled styles for list-group-item ([bdc3acf](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/bdc3acf))
* **@clayui/css:** Removes Bootstrap 4 variable overwrites, still keeping this file to prevent Sass import errors from custom imports ([1232870](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/1232870))
* **@clayui/css:** Removes imports for Bootstrap 4 variables and variable overwrites ([bd0f614](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/bd0f614))
* **@clayui/css:** Tables set background-color on thead, tbody, tfoot for Table and Table List. This is for a Chrome 87 bug. ([3b0badb](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/3b0badb)), closes [#3847](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3847)


### Features

* **@clayui/css:** Atlas Toggle Switch make it 40px by 24px in desktop views ([50c5c6d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/50c5c6d)), closes [#3835](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3835)
* **@clayui/css:** SVG Icons adds cursor.svg ([afbb1f0](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/afbb1f0))





# [3.23.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.22.1...@clayui/css@3.23.0) (2021-01-13)


### Bug Fixes

* **@clayui/css:** Breadcrumbs match sizes to Lexicon specs ([0d471aa](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0d471aa))
* **@clayui/css:** Buttons shouldn't inherit `text-transform` from its parent ([a66dcba](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a66dcba))
* **@clayui/css:** Component Title used in Sheet should work ([c338b71](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/c338b71))
* **@clayui/css:** Label use times-small icon and close button should be 16px by 16px ([c2270a9](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/c2270a9))
* **@clayui/css:** run format ([19ee791](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/19ee791))
* **@clayui/css:** SVG Icons adds relationship.svg ([6253c68](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6253c68)), closes [#3873](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3873)


### Features

* **@clayui/css:** Sheet adds variants `.sheet-multiple-form` and `.sheet-dataset-content` ([cf4a4d1](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cf4a4d1))
* **@clayui/css:** SVG Icons adds google-drive ([3752c14](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/3752c14)), closes [#3869](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3869)
* **@clayui/css:** Utilities adds `.autofit-padded-no-gutters-sm` and placeholder `%autofit-padded-no-gutters-sm` for smaller (4px) gutters between columns ([f0cc8f4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/f0cc8f4))





## [3.22.1](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.22.0...@clayui/css@3.22.1) (2020-12-29)


### Bug Fixes

* **@clayui/css:** Atlas Theme change body background-color to #fff to match Classic and Admin themes ([04f0a02](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/04f0a02))
* **@clayui/css:** Management Bar set a min-height so swapping out contents via js doesn't resize the bar ([9a484d5](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9a484d5))
* **@clayui/css:** Mixins clay-navbar-size adds option to configure min-height and min-height-mobile ([4236b13](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/4236b13))
* **@clayui/css:** Navigation Bar Light should have 1px gray bottom border ([625e629](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/625e629))
* **@clayui/css:** SVG Icons adds `rectangle.svg` and `rectangle-split.svg` ([bb2556b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/bb2556b))


### Reverts

* **@clayui.css): "feat(@clayui/css:** SVG Icons adds full-view.svg and split-view.svg" ([4bea06b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/4bea06b))





# [3.22.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.20.0...@clayui/css@3.22.0) (2020-12-16)


### Bug Fixes

* **@clayui/css:** Mixin `clay-css` adds `-webkit-overflow-scrolling` and `fill` properties ([a18d2a6](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a18d2a6)), closes [#3771](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3771)
* **@clayui/css:** Mixins clay-link active-class should also style `&[aria-expanded='true']` and `&.show` so we can style collapse plugin open state ([a559fd3](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a559fd3)), closes [#3767](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3767)
* **@clayui/css:** SVG Icons adds dropdown.svg ([892d3ae](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/892d3ae))
* **@clayui/css:** Tables don't require the class `table-autofit` for `table-cell-expand`, `table-cell-expand-small`, `table-cell-expand-smaller`, and `table-cell-expand-smallest` to work. Also adds `table-cell-contract`. ([6f7f2bf](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6f7f2bf)), closes [#3818](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3818)
* **@clayui/css:** Tables moves caption styles from _reboot.scss to _tables.scss and change default to `caption-side: top` ([168abf4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/168abf4)), closes [#272833](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/272833)


### Features

* **@clayui/css:** Mixins `clay-button-variant` allow styling `.active` separately from `:active` with `active-class` ([d2370d3](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d2370d3)), closes [#3797](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3797)
* **@clayui/css:** SVG Icons adds arrow-right-full.svg ([631e2d0](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/631e2d0))
* **@clayui/css:** SVG Icons adds automatic-translate.svg ([03eba11](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/03eba11))
* **@clayui/css:** SVG Icons adds fieldset.svg ([1900c8d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/1900c8d)), closes [#3828](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3828)
* **@clayui/css:** SVG Icons adds full-view.svg and split-view.svg ([bbd6ede](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/bbd6ede))
* **@clayui/css:** SVG Icons adds icon for React ([8e09e97](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/8e09e97))





# [3.21.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.20.0...@clayui/css@3.21.0) (2020-12-02)


### Bug Fixes

* **@clayui/css:** Tables don't require the class `table-autofit` for `table-cell-expand`, `table-cell-expand-small`, `table-cell-expand-smaller`, and `table-cell-expand-smallest` to work. Also adds `table-cell-contract`. ([6f7f2bf](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6f7f2bf)), closes [#3818](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3818)
* **@clayui/css:** Tables moves caption styles from _reboot.scss to _tables.scss and change default to `caption-side: top` ([168abf4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/168abf4)), closes [#272833](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/272833)


### Features

* **@clayui/css:** SVG Icons adds automatic-translate.svg ([03eba11](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/03eba11))
* **@clayui/css:** SVG Icons adds icon for React ([8e09e97](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/8e09e97))





# [3.20.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.19.0...@clayui/css@3.20.0) (2020-11-16)


### Bug Fixes

* **@clayui/css:** Time Picker `clay-time-edit` use `display: flex` and don't rely on white-space for spacing ([e4ab83d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e4ab83d)), closes [#3783](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3783)


### Features

* **@clayui/css:** Absorb Bootstrap 4 mixins into Clay CSS ([27032c4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/27032c4))
* **@clayui/css:** Dropdown adds `.dropdown-menu-width-full`, `.dropdown-menu-width-sm`, `dropdown-menu-height-auto` modifier classes for larger dropdown menus with the Clay Drop Down plugin ([bab438c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/bab438c)), closes [#3790](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3790)
* **@clayui/css:** Removes Bootstrap 4 mixins and functions imports ([cba11d0](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cba11d0))





# [3.19.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.18.2...@clayui/css@3.19.0) (2020-10-22)


### Bug Fixes

* **@clayui/css:** `drilldown-item-indicator-text-*` click area should be larger ([bc53c65](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/bc53c65)), closes [#3579](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3579)
* **@clayui/css:** Atlas fix custom radio button image, inline radio misaligned in Chrome ([ef1fc95](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/ef1fc95))


### Features

* **@clayui/css:** SVG Icons adds shield-check ([5c1760c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5c1760c)), closes [#3755](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3755)





## [3.18.2](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.18.1...@clayui/css@3.18.2) (2020-10-01)


### Bug Fixes

* **@clayui.com:** Atlas Buttons `.btn-outline-secondary` should have color [#6](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/6)b6c7e, caused by [#3149](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3149) ([7418263](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/7418263)), closes [#6b6c7](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/6b6c7)
* **@clayui/css:** Atlas Custom Radio don't use % for icon background-size. Chrome has trouble rendering it when whitespace is removed. ([5375e63](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5375e63)), closes [#3722](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3722)
* **@clayui/css:** Btn Group `.btn-monospaced.btn-sm` doesn't work inside `.btn-group-vertical` and same for `.btn-monospaced.btn-lg` ([750b061](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/750b061))
* **@clayui/css:** SVG Icons `display`, `display-content`, `product-menu-open`, `product-menu-closed`, and `hidden` updates anchor points, weights, and minor alignment issues ([2a01b38](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2a01b38))





## [3.18.1](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.18.0...@clayui/css@3.18.1) (2020-08-28)


### Bug Fixes

* **@clayui/css:** add font weight semibold ([f85a519](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/f85a519))
* **@clayui/css:** Table Responsive re-add `margin-bottom` that was removed in [#3149](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3149) ([cef6b0f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cef6b0f))





# [3.18.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.17.1...@clayui/css@3.18.0) (2020-08-26)


### Features

* **@clayui/toolbar:** Add clayui/form to deps, Add low-level components to Toolbar ([719b71f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/719b71f))





## [3.17.1](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.17.0...@clayui/css@3.17.1) (2020-08-21)


### Bug Fixes

* **@clayui/css:** Table List use `border-collapse` and `border-width` instead of `box-shadow` hack for rounded corners ([82ecbda](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/82ecbda))





# [3.17.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.16.0...@clayui/css@3.17.0) (2020-08-11)


### Bug Fixes

* **@clayui/css:** `variables/_globals.scss` and `components/_reboot.scss` rename `$c-button` Sass map, added in [#3575](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3575), to `$c-button-base`. This namespace references a base element, in this case, `<button>`. This is to free up the variable namespace `$c-button` to refer to `.button` if we ever need it in the future. ([45c088a](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/45c088a))
* **@clayui/css:** Alerts text in `alert-autofit-row` break to new line prematurely ([8b13ce3](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/8b13ce3))
* **@clayui/css:** Atlas Custom Checkbox use `check-small` instead of ([4e059fe](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/4e059fe))
* **@clayui/css:** Atlas Drilldown header button is off by 1px ([4224a60](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/4224a60))
* **@clayui/css:** C Kbd each key in a keyboard shortcut should be wrapped in its own `kbd` element ([36ec62e](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/36ec62e)), closes [#3283](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3283)
* **@clayui/css:** Dropdown `.dropdown-item` should use `cursor: pointer` so `<a class="dropdown-item" role="button">` will still behave like a clickable element ([1311053](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/1311053))
* **@clayui/css:** Mixins `clay-css` adds `-moz-appearance` and `-webkit-appearance` to the list of properties so we can pass them in independently when needed ([946bd9c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/946bd9c))
* **@clayui/css:** Mixins `clay-dropdown-item-variant` `active-class` should use `active` values unless it's overridden using the `active-class` map ([c521848](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/c521848))
* **@clayui/css:** Reboot adds `cursor: pointer` to `button` CSS reset ([4eca62f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/4eca62f))
* **@clayui/css:** Reboot go back to Bootstrap 4's styling `a` tag directly but omit styling placeholder anchors. Placeholders are styled the same as links now which makes it easier to use markup like `<a class="btn btn-primary" role="button" tabindex="0">` without having to add styles. ([170adfb](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/170adfb))
* **@clayui/css:** SVG Icons update `check` path ([d24abf0](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d24abf0))
* **@clayui/css:** SVG Icons update `times-small` ([0970c0f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0970c0f))
* **@clayui/css:** SVG Icons update `times` path ([31020e9](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/31020e9))
* **@clayui/css:** Table `.table` should have 1px borders ([ca0a17c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/ca0a17c))
* **@clayui/css:** Update global functions ([d43ac9b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d43ac9b))


### Features

* **@clayui/css:** Clay Color `.clay-color-map` and `.clay-color-range` shouldn't highlight text and scroll viewport on touch devices when dragging ([0f670c4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0f670c4))
* **@clayui/css:** SVG Icons add `check-small` ([b88dbdb](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/b88dbdb))
* **@clayui/css:** SVG Icons add `theme` ([93f6efe](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/93f6efe))
* **@clayui/drop-down:** create DropDownWithDrilldown high-level component ([6b92a80](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6b92a80))


### Reverts

* **@clayui/css:** Atlas Alerts change `.alert .close` font-size to 12px ([862609a](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/862609a))





# [3.16.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.15.0...@clayui/css@3.16.0) (2020-07-28)


### Bug Fixes

* **@clayui.css:** Mixins `clay-range-input-variant` hides `.clay-range-thumb` and styles thumb pseudo elements so we can offer a non JS based input[type="range"] ([6b5fa34](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6b5fa34))
* **@clayui/css:** Atlas Alerts adjust spacing to match Lexicon specs ([13905b7](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/13905b7))
* **@clayui/css:** Atlas Alerts change `.alert .close` font-size to 12px ([486603a](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/486603a))
* **@clayui/css:** Attribute `hidden` should hide elements ([a9e1e56](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a9e1e56))
* **@clayui/css:** Clay Color adds highlight for `.active` state ([1e2c2ad](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/1e2c2ad))
* **@clayui/css:** Clay Color changes swatch size to 20px from 18px for small version ([acd3b89](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/acd3b89))
* **@clayui/css:** Clay Range adds `.clay-range-progress-none` modifier to hide progress indicator for non JS input range and update focus shadows due to focus artifact in Safari ([45b946b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/45b946b))
* **@clayui/css:** Form Validation raise specificity of `.has-{danger|warning|success} .input-group-inset-item` by a class. It is now `.has-{danger|warning|success} .input-group .input-group-inset-item`. ([9e906bd](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9e906bd))
* **@clayui/css:** Sorts (alphabetically) imports that are delimited by two new lines ([4548dad](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/4548dad)), closes [#3529](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3529)
* **@clayui/css:** SVG Icons update `check-circle-full` path normalize thickness and size to other check icons ([6435f04](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6435f04))
* **@clayui/css:** SVG Icons update `check-circle` path normalize thickness and size to other check icons ([0e7d50d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0e7d50d))
* **@clayui/css:** SVG Icons update `check-square` path normalize thickness and size to other check icons ([3da4644](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/3da4644))
* **@clayui/css:** SVG Icons update `check` path normalize thickness and size to other check icons ([fba13b6](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/fba13b6))
* **@clayui/css:** Update global functions ([146bd4f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/146bd4f))


### Features

* **@clayui/css:** Add new spacers ([c6deb4e](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/c6deb4e))
* **@clayui/css:** Clay Color should support `.input-group-sm` and `.form-group-sm`. ([309a6c9](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/309a6c9))
* **@clayui/css:** Drilldown should work with Dropdown Menu, have dual click areas inside `dropdown-item`, and have `min-height` ([b7686a0](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/b7686a0))
* **@clayui/css:** Dropdowns adds `.dropdown-item-indicator-start`, `.dropdown-item-indicator-text-start`, `.dropdown-item-indicator-end`, `.dropdown-item-indicator-text-end` to allow for separate actions inside a `dropdown-item` ([e76aa8e](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e76aa8e))
* **@clayui/css:** Input Groups `.input-group-sm` and `.form-group-sm` should change the size of `.clay-color` ([6e5b4d1](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6e5b4d1))
* **@clayui/css:** SVG Icons add `closed-book` ([c461d19](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/c461d19))





# [3.15.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.14.0...@clayui/css@3.15.0) (2020-07-14)


### Bug Fixes

* **@clayui/css:** Adds leading whitespace for License texts ([5566010](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5566010))
* **@clayui/css:** Cards change `.card-page-item-asset` `min-width: 193px` so 4 cards can fit in `sheet-lg` at maximum size ([95dca1c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/95dca1c))
* **@clayui/css:** Copy licenses from root directory into clay-css/LICENSES ([0d1ef58](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0d1ef58))
* **@clayui/css:** Input Group fix border radius issues due to reducing Bootstrap's selector specificity ([7e399ea](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/7e399ea))
* **@clayui/css:** Modal max-width sizes should be declared before `.modal-full-screen` and add back `flex-grow: 1` to `.modal-body` ([b2722ea](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/b2722ea))
* **@clayui/css:** Reboot makes `use[href]` inherit parent styles ([2504c62](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2504c62))
* **@clayui/css:** Reboot removes focus outline on negative `tabindex` elements. Chrome adds outline on focus to any element with a `tabindex` attribute. ([a5deefd](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a5deefd))
* **@clayui/css:** SVG Icons updates `picture`, reduce the anchors of the sun and the compound path can be placed tighten to viewbox ([5b83c6e](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5b83c6e))
* **@clayui/css:** Update svg4everybody to 2.1.9 ([c4eb007](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/c4eb007))
* **clay-css:** copy LICENSES to lib before publish ([e1122b3](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e1122b3))
* **clay-css:** run 'gulp version' before commit ([6b7e181](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6b7e181))


### Features

* **@clayui/css:** SVG Icons adds `copy-rtl` ([bcc3f95](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/bcc3f95))
* **@clayui/css:** SVG Icons adds `home-full` and simplifies `home` design ([d3b948e](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d3b948e))
* **@clayui/css:** SVG Icons adds `low-vision` ([df440f7](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/df440f7))
* **@clayui/css:** SVG Icons adds `paste-plaintext-rtl` ([ced1018](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/ced1018)), closes [#3450](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3450)
* **@clayui/css:** SVG Icons adds `paste-plaintext` ([5bf397c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5bf397c))
* **@clayui/css:** SVG Icons adds `paste-word-rtl.svg` ([8d92075](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/8d92075)), closes [#3448](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3448)





# [3.14.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.13.0...@clayui/css@3.14.0) (2020-07-07)


### Bug Fixes

* **@clayui/css:** Badges Variables forgot to remove some commented code ([8c7c71f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/8c7c71f))
* **@clayui/css:** Completed absorbtion of Bootstrap 4 components, moves all imports from _bs4.scss to _components.scss ([9c21b33](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9c21b33))
* **@clayui/css:** Import `components/_reboot.scss` in `_bs4.scss` until we absorb all Bootstrap 4 components due to specificity issues ([58055cc](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/58055cc))
* **@clayui/css:** Mixins `clay-form-control-variant` and `clay-select-variant` should respect old keys `bg`, `bg-clip`, `bg-image`, `bg-position`, `bg-repeat`, `bg-size` ([3a1f230](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/3a1f230))
* **@clayui/css:** Reboot combine `body` and `a` styles from Type ([c5c84c7](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/c5c84c7))
* **@clayui/css:** Reboot don't need `display: block` for `article`, `aside`, `figcaption`, `figure`, `footer`, `header`, `hgroup`, `nav`, `section` ([ecb2718](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/ecb2718))
* **@clayui/css:** Reboot we don't need to set `font-family`, `line-height` on the `html` element already set on `body` ([bc95fb3](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/bc95fb3))
* **@clayui/css:** Remove unused import `[@import](https://github.com/import) 'bootstrap/breadcrumb'` ([39fc48f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/39fc48f))
* **@clayui/css:** Remove unused import `[@import](https://github.com/import) 'bootstrap/nav'` ([37e2fd2](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/37e2fd2))
* **@clayui/css:** SVG Icons `link` and `chain-broken` reduce anchor points ([d80adab](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d80adab))
* **@clayui/css:** SVG Icons adds license to `button`, `container`, `slideshow`, `tabs`, `tap-ahead`, `text-l` ([34a7e30](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/34a7e30))
* **@clayui/css:** SVG Icons fix xmlns declaration for `bold`, `cards2`, `decimal`. Icons aren't visible when converted to data uri and used in `background-image` ([e79e68d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e79e68d))
* **@clayui/css:** SVG Icons swap `indent-less` and `indent-more`. The arrows are pointing the wrong way ([6b4f1cf](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6b4f1cf))
* **@clayui/css:** SVG Icons update `expand` reduce anchor points ([55a0561](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/55a0561))
* **@clayui/css:** SVG Icons update `flag-empty` and `flag-full` reduce anchor points ([d3d6c3c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d3d6c3c))
* **@clayui/css:** SVG Icons updates `align-image-center`, `align-image-left`, and `align-image-right` with rounded borders ([b55c8d1](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/b55c8d1))
* **@clayui/css:** SVG Icons updates `bold`, `italic`, and `underline` to be smaller ([5db734f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5db734f))
* **@clayui/css:** SVG Icons updates `subscript` and `superscript` icons ([36604f5](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/36604f5))
* **@clayui/css:** SVG Icons updates `table2` adjust anchor points ([6afe9c9](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6afe9c9))


### Features

* **@clayui/css:** Absorb Bootstrap 4 _buttons.scss into Clay CSS _buttons.scss ([d2731ba](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d2731ba))
* **@clayui/css:** Absorb Bootstrap 4 _code.scss ([505938d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/505938d))
* **@clayui/css:** Absorb Bootstrap 4 _custom-forms.scss into Clay CSS _custom-forms.scss ([52cd5f8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/52cd5f8))
* **@clayui/css:** Absorb Bootstrap 4 _dropdown.scss into Clay CSS _dropdown-menu.scss ([a486bc8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a486bc8))
* **@clayui/css:** Absorb Bootstrap 4 _forms.scss into Clay CSS _forms.scss and _form-validation.scss ([e7e854f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e7e854f))
* **@clayui/css:** Absorb Bootstrap 4 _grid.scss into Clay CSS ([48143b2](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/48143b2))
* **@clayui/css:** Absorb Bootstrap 4 _images.scss ([6e6ea9f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6e6ea9f))
* **@clayui/css:** Absorb Bootstrap 4 _input-group.scss into Clay CSS _input-groups.scss ([acba14c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/acba14c))
* **@clayui/css:** Absorb Bootstrap 4 _media.scss into Clay CSS _media.scss ([a685d6b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a685d6b))
* **@clayui/css:** Absorb Bootstrap 4 _nav.scss into Clay CSS _nav.scss ([e123acb](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e123acb))
* **@clayui/css:** Absorb Bootstrap 4 _reboot.scss into Clay CSS ([89e5adb](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/89e5adb))
* **@clayui/css:** Absorb Bootstrap 4 _transitions.scss ([469659b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/469659b))
* **@clayui/css:** Absorb Bootstrap 4 _type.scss into Clay CSS ([e6e4012](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e6e4012))
* **@clayui/css:** Absorb Bootstrap 4 Tables ([22e1f92](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/22e1f92))
* **@clayui/css:** Absorb Bootstrap 4's _root.scss into Clay CSS ([dd82ded](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/dd82ded))
* **@clayui/css:** Absorb Bootstrap's _alert.scss into Clay CSS _alerts.scss ([0869797](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0869797))
* **@clayui/css:** Absorb Bootstrap's _badge.scss into Clay CSS _badges.scss ([cfe46c7](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cfe46c7))
* **@clayui/css:** Absorb Bootstrap's _breadcrumb.scss into Clay CSS _breadcrumbs.scss ([9d30cab](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9d30cab))
* **@clayui/css:** Absorb Bootstrap's _btn-group.scss into Clay CSS _btn-group.scss ([e802d1f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e802d1f))
* **@clayui/css:** Absorb Bootstrap's _card.scss into Clay CSS _cards.scss ([35620d3](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/35620d3))
* **@clayui/css:** Absorb Bootstrap's _carousel.scss into Clay CSS _carousel.scss ([9e468b5](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9e468b5))
* **@clayui/css:** Absorb Bootstrap's _close.scss into Clay CSS _utilities.scss ([c3026d5](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/c3026d5))
* **@clayui/css:** Absorb Bootstrap's _jumbotron.scss into Clay CSS ([dd38b93](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/dd38b93))
* **@clayui/css:** Absorb Bootstrap's _list-group.scss into Clay CSS _list-group.scss ([9f4a8b6](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9f4a8b6))
* **@clayui/css:** Absorb Bootstrap's _modal.scss into Clay CSS _modals.scss ([c2a4de8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/c2a4de8))
* **@clayui/css:** Absorb Bootstrap's _navbar.scss into Clay CSS _navbar.scss ([5b1fb4d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5b1fb4d))
* **@clayui/css:** Absorb Bootstrap's _pagination.scss into Clay CSS _pagination.scss ([e6eb67c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e6eb67c))
* **@clayui/css:** Absorb Bootstrap's _popover.scss into Clay CSS _popovers.scss ([8d43344](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/8d43344))
* **@clayui/css:** Absorb Bootstrap's _print.scss into Clay CSS _print.scss ([5eb2f76](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5eb2f76))
* **@clayui/css:** Absorb Bootstrap's _progress.scss into Clay CSS _progress-bars.scss ([cad6f69](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cad6f69))
* **@clayui/css:** Absorb Bootstrap's _spinners.scss into Clay CSS _spinners.scss ([a00ec52](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a00ec52))
* **@clayui/css:** Absorb Bootstrap's _toasts.scss into Clay CSS _toasts.scss ([e484351](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e484351))
* **@clayui/css:** Absorb Bootstrap's _tooltip.scss into Clay CSS _tooltip.scss ([48696cd](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/48696cd))
* **@clayui/css:** Absorb Bootstrap's _utilities.scss into Clay CSS _utilities-functional-important.scss ([b1b7adb](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/b1b7adb))
* **@clayui/css:** Button adds placeholders `%clay-btn-monospaced-lg`, `%clay-btn-monospaced-sm` so we can extend with Sass `[@extend](https://github.com/extend)` without unnecessary selectors ([b704e7f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/b704e7f))
* **@clayui/css:** Global Functions adds ` clay-enable-gradients`, `clay-enable-rounded`, `clay-enable-shadows`, `clay-enable-transitions` so we can support these Bootstrap settings in variables ([ac66e1f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/ac66e1f))
* **@clayui/css:** Global Variables undeprecate `$clay-unset` and add alias `$c-unset` for unsetting values so they don't get output in the final css file ([e0e8b98](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e0e8b98))
* **@clayui/css:** Mixins `clay-button-variant` reduce selector specificity of `:not([disabled]):not(.disabled):active` to `:active` ([f16970f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/f16970f))
* **@clayui/css:** Mixins `clay-close` removes Bootstrap 4.1.2 selector overwrites. We don't need them since we are removing Bootstrap 4 dependency. ([8318d9f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/8318d9f))
* **@clayui/css:** Mixins `clay-css` check for keyword `clay-unset` and output `null` value if it is passed in ([fb5427f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/fb5427f))
* **@clayui/css:** Mixins `clay-link` `disabled` should set `outline: 0` and `box-shadow: none` by default so disabled anchors don't receive focus outline ([8b53b60](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/8b53b60))
* **@clayui/css:** SVG Icons adds `align-image-full-width` ([26db99e](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/26db99e))
* **@clayui/css:** SVG Icons adds `background-color` ([7ae3634](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/7ae3634))
* **@clayui/css:** SVG Icons adds `button`, `tabs`, `slideshow`, `tap-ahead` ([5fc3af6](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5fc3af6))
* **@clayui/css:** SVG Icons adds `container` ([49517bc](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/49517bc)), closes [#3343](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3343)
* **@clayui/css:** SVG Icons adds `emoji` ([8345faf](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/8345faf))
* **@clayui/css:** SVG Icons adds `flag-empty-rtl` and `flag-full-rtl` ([f5fa452](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/f5fa452))
* **@clayui/css:** SVG Icons adds `list-ol-rtl` and updates `list-ol` ([007d5c8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/007d5c8))
* **@clayui/css:** SVG Icons adds `list-ul-rtl` and updates `list-ul` reduces anchor points ([654cbc3](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/654cbc3))
* **@clayui/css:** SVG Icons adds `paste-word` ([9033e36](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9033e36))
* **@clayui/css:** SVG Icons adds `select-all` ([1db4f98](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/1db4f98))
* **@clayui/css:** SVG Icons adds `special-character` ([18d5172](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/18d5172))
* **@clayui/css:** SVG Icons adds `text-color` ([0191409](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0191409))
* **@clayui/css:** SVG Icons changes `paste` to something more relevant and moves original `paste` to `copy` ([cdd96ab](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cdd96ab))
* **@clayui/css:** SVG Icons rename `text.svg` to `text-l.svg`, make `text.svg` icon larger ([31a1ad4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/31a1ad4))
* **@clayui/css:** SVG Icons updates `code` ([745911b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/745911b)), closes [#3344](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3344)


### Reverts

* **@clayui/css:** Mixins `clay-link` `disabled` should set `outline: 0` and `box-shadow: none` by default so disabled anchors don't receive focus outline ([1c3ace2](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/1c3ace2))





# [3.13.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.12.0...@clayui/css@3.13.0) (2020-06-18)


### Features

* **@clayui/css:** Move components `type`, `icons`, `aspect-ratio`, and `buttons` earlier in the import chain so they are easier to overwrite ([6f69b82](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6f69b82)), closes [#3191](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3191)





# [3.12.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.11.0...@clayui/css@3.12.0) (2020-06-04)


### Bug Fixes

* **clay-css:** re-add file that was accidentally deleted ([ebc4d75](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/ebc4d75))


### Features

* **@clayui/css:** Update search icon ([7e5bd9a](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/7e5bd9a))
* **@clayui/css:** Update search icon - trim the icon code ([b74e028](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/b74e028)), closes [#3293](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3293)





# [3.11.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.10.0...@clayui/css@3.11.0) (2020-05-21)


### Bug Fixes

* **@clayui/card:** check for values before rendering container elements ([a732a8e](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a732a8e))
* **@clayui/css:** `_global-functions` should be accessible to Portal's `_clay_variables.scss` without having to import it manually ([e76d56a](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/e76d56a)), closes [#3193](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3193)
* **@clayui/css:** Buttons unset Bootstrap's `pointer-events: none;` on `a.btn.disabled` and set it on `.btn.disabled:active` ([63cfa7d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/63cfa7d)), closes [#3096](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3096)
* **@clayui/css:** Cards `card-interactive-primary` Chrome 81/83 hover transition artifact. Use any `transition-timing-function` other than `ease-in` or `ease-in-out` ([d7aa102](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d7aa102)), closes [#3233](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3233)
* **@clayui/css:** Forms `input[type="range"].form-control` shadow in Chrome 81 caused by https://github.com/liferay/clay/issues/1179 and Chrome update ([101d566](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/101d566)), closes [#3249](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3249)
* **@clayui/css:** Links `link-outline` and `component-action` `.disabled` should have `cursor: not-allowed` and `.disabled:active` should have `pointer-events: none;` ([0f132a5](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/0f132a5)), closes [#3096](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3096)
* **@clayui/css:** Mixin `clay-autofit-float` undeprecate `.autofit-col-end` ([9da6aa8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9da6aa8)), closes [#3230](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3230)
* **@clayui/css:** Mixin `clay-close` deprecated keys should win to preserve backward compatibility ([3e3407e](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/3e3407e)), closes [#3164](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3164)
* **@clayui/css:** Mixin `clay-sticker-variant` deprecated keys should win to preserve backward compatibility ([281696a](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/281696a)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixins `clay-css` should output the `content` CSS property without having to double quote ([dbc5260](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/dbc5260)), closes [#3233](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3233)
* **@clayui/css:** Prettier should format `_global-functions.scss` but ignore autogenerated svgs ([a796cf4](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a796cf4)), closes [#3250](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3250)
* **@clayui/css:** SVG Icons `thumbs-up` and `thumbs-down` reduce anchor points ([a03bfef](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a03bfef)), closes [#3203](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3203)
* **@clayui/css:** SVG Icons deprecate `desktop` and add `display-content` ([66c5ef7](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/66c5ef7)), closes [#3200](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3200)
* **@clayui/css:** Utilities `.close` should have `cursor: not-allowed` and `.disabled:active` should have `pointer-events: none` ([92100aa](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/92100aa)), closes [#3096](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3096)


### Features

* **@clayui/css:** Create file `_bs4.scss` that imports Bootstrap 4 files separately so we can remove imports as we absorb BS4 components into Clay CSS ([f59c90c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/f59c90c)), closes [#3192](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3192)
* **@clayui/css:** Mixin `clay-sticker-variant` should use `clay-css` mixin to generate properties ([ae2648d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/ae2648d)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** SVG Icons adds `angle-down-small`, `angle-up-small`, `angle-left-small`, and `angle-right-small` ([4e55feb](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/4e55feb)), closes [#3156](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3156)
* **@clayui/css:** SVG Icons adds `thumbs-up-full` and `thumbs-down-full` ([55086ae](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/55086ae)), closes [#3208](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3208)
* **@clayui/css:** SVG Icons adds icon `display` ([2d0dac9](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2d0dac9)), closes [#3200](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3200)





# [3.10.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.9.0...@clayui/css@3.10.0) (2020-04-24)


### Bug Fixes

* **@clayui/css:** Button Group Vertical `.btn-monospaced` shouldn't shrink inside `autofit-col` ([5fcc7b5](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5fcc7b5)), closes [#3063](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3063)
* **@clayui/css:** Forms `.form-control-sm` and `.form-control-lg` should have correct left and right padding ([21688d6](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/21688d6)), closes [#3110](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3110)
* **@clayui/css:** Forms small form elements should have 4px border-radius ([686c662](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/686c662)), closes [#3105](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3105)
* **@clayui/css:** Mixin `clay-autofit-row` deprecated keys should win to preserve backward compatibility ([9e4d297](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9e4d297)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixin `clay-button-variant` deprecated keys should win to preserve backward compatibility ([411901c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/411901c)), closes [#3164](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3164)
* **@clayui/css:** Mixin `clay-modal-variant` deprecated keys should win to preserve backward compatibility ([f38eeaa](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/f38eeaa)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixin `clay-panel-variant` deprecated keys should win to preserve backward compatibility ([63ae6ee](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/63ae6ee)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixin `clay-tbar-variant` deprecated keys should win to preserve backward compatibility ([cfc3727](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cfc3727)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixins `clay-after-highlight-variant` deprecated keys should win to preserve backward compatibility ([7b519b7](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/7b519b7)), closes [#3164](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3164)
* **@clayui/css:** Mixins `clay-container` deprecated keys should win to preserve backward compatibility ([4b07121](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/4b07121)), closes [#3164](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3164)
* **@clayui/css:** Mixins `clay-dropdown-item-variant` and `clay-dropdown-menu-variant` deprecated keys should win to preserve backward compatibility ([815354a](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/815354a)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixins `clay-input-group-stacked` and `clay-input-group-text-variant` deprecated keys should win to preserve backward compatibility ([6da73e1](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6da73e1)), closes [#3164](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3164)
* **@clayui/css:** Mixins `clay-link` and `clay-text-typography` deprecated keys should win to preserve backward compatibility ([5c9a20b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5c9a20b)), closes [#3164](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3164)
* **@clayui/css:** SVG Icons update cog.svg to new style for better contrast ([adc6580](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/adc6580)), closes [#3085](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3085)
* **@clayui/css:** SVG Icons updates `angle-down`, `angle-left`, `angle-right`, and `angle-up` by reducing anchor points in the SVG ([b040734](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/b040734)), closes [#3131](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3131)


### Features

* **@clayui/css:** Mixin `clay-after-highlight-variant` use `clay-css` mixin to generate properties ([480b85b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/480b85b)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixin `clay-autofit-row` should use `clay-css` mixin to generate properties ([1c12aac](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/1c12aac)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixin `clay-close` should match `clay-link` to preserve compatibility between the two ([f44e459](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/f44e459)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixin `clay-dropdown-item-variant` use `clay-css` mixin to generate properties ([9f63d87](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/9f63d87)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixin `clay-dropdown-menu-variant` use `clay-css` mixin to generate properties ([2e66512](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2e66512)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixin `clay-input-group-text-variant` use `clay-css` mixin to generate properties ([08c0dd8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/08c0dd8)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixin `clay-modal-variant` should use `clay-css` mixin to generate properties ([15c4f3f](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/15c4f3f)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixin `clay-panel-variant` should use `clay-css` mixin to generate properties ([98fedd5](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/98fedd5)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixins `clay-button-variant` use `clay-css` mixin to generate properties ([3fcabd5](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/3fcabd5)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixins `clay-close` use `clay-css` mixin to generate properties ([83ea47a](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/83ea47a)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixins `clay-container` use `clay-css` mixin to generate properties ([31b82d8](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/31b82d8)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixins `clay-link` use `clay-css` mixin to generate properties ([32b2299](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/32b2299)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixins `clay-row` should use `clay-css` mixin because it provides more options ([b15a98a](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/b15a98a)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixins `clay-text-typography` use `clay-css` mixin to generate properties ([cdd429c](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/cdd429c)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** Mixins adds `clay-table-drag-variant` with options `cell`, `c-drag`, `c-dragging-before`, `c-dragging-after`, `c-droppable-before`, `c-droppable-after` ([81622df](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/81622df)), closes [#2934](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2934)
* **@clayui/css:** Mixins map deprecated `clay-button-size` to `clay-button-variant` ([a98b49b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/a98b49b)), closes [#3075](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3075)
* **@clayui/css:** SVG Icons adds disk ([dbd2c5d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/dbd2c5d)), closes [#3080](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3080)
* **@clayui/css:** SVG Icons adds search-plus ([5859d71](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/5859d71)), closes [#3091](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3091)
* **@clayui/css:** SVG Icons update `disk`. we will change the corners to straight so that it matches the rest of the icons ([11e614d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/11e614d)), closes [#3080](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3080)
* **@clayui/css:** Tables adds `.table-drag`, `.table-dragging`, `.table-clone` base styles for drag and drop table columns ([fff748a](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/fff748a)), closes [#2934](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/2934)
* **clayui.com:** source md/mdx files from package directories ([fc6e798](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/fc6e798))





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
