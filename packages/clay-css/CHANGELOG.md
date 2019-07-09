### v2.16.2 July 4, 2019

* fix(clay-css): [#2119](https://github.com/liferay/clay/issues/2119) SVG Icons added `megaphone-full`, `pin-full`, and `bell-full`
* fix(clay-css): [#2119](https://github.com/liferay/clay/issues/2119) SVG Icons deprecate `announcement`, `sticky`, and `urgent` renaming to `megaphone-full`, `pin-full`, and `bell-full` respectively
* fix(clay-css): [#2146](https://github.com/liferay/clay/issues/2146) New SVG Icon reset
* fix(clay css): [#2085](https://github.com/liferay/clay/issues/2085) Management Bar `.navbar-text` should break to new line when there is not enough space
* fix(clay css): [#1424](https://github.com/liferay/clay/issues/1424) (backports from 3.x general updates to mixins) Forms add `.disabled` to `.form-control` to style elements that use `div`
* fix(clay css): [#1424](https://github.com/liferay/clay/issues/1424) (backports from 3.x general updates to mixins) Forms add `:disabled` styles to `.form-control-inset`
* fix(clay css): [#1424](https://github.com/liferay/clay/issues/1424) (backports from 3.x general updates to mixins) Mixin `clay-form-control-variant` add `align-items`, `flex-wrap`, `justify-content`, `max-width`, `min-height`, `text-transform`
* fix(clay css): [#1424](https://github.com/liferay/clay/issues/1424) (backports from 3.x general updates to mixins) Mixin `clay-form-control-variant` add `.disabled` for `.form-control` elements that use `div`
* fix(clay-css): [#2075](https://github.com/liferay/clay/issues/2075) Form Validation Feedback space between icon and text should be 4px.

### v2.16.1 June 18, 2019

* No Clay CSS changes

### v2.16.0 May 31, 2019

* No Clay CSS changes

### v2.15.1 May 22, 2019

* Fixes [#2008](https://github.com/liferay/clay/issues/2008) Fix spacer 3. Clay CSS Atlas changes spacer 3 to 1rem
* Fixes [#2002](https://github.com/liferay/clay/issues/2002) ClayCSS Card Interactive Primary shouldn't have focus border on hover
* Fixes [#1998](https://github.com/liferay/clay/issues/1998) ClayCSS Atlas Collapsible Panel Unstyled in `.sidebar-light` should match sidebar light background-color
* Fixes [#1998](https://github.com/liferay/clay/issues/1998) ClayCSS Atlas Collapsible Panel Unstyled inner focus border should match page background-color
* Fixes [#1998](https://github.com/liferay/clay/issues/1998) ClayCSS Mixins `clay-sidebar-variant` added Sass map `panel-unstyled` to style a nested `.panel-unstyled`
* Fixes [#1998](https://github.com/liferay/clay/issues/1998) ClayCSS Mixins `clay-panel-variant` move `.panel-header-link` selector inside `.panel-header` so that it wins over `.panel-header.panel-header-link.collapsed`
* Fixes [#1992](https://github.com/liferay/clay/issues/1992) ClayCSS `.panel-unstyled .panel-header` should show bottom border in collapsed state

### v2.15.0 May 17, 2019

* Fixes [#1972](https://github.com/liferay/clay/issues/1972), LEXI-576 Add ta-IN flags for Tamil using the Hindi-India flag (hi-IN)
* Fixes [#1959](https://github.com/liferay/clay/issues/1959), Fixes [#1951](https://github.com/liferay/clay/issues/1951) ClayCSS Atlas Navigation Bar focus styles shouldn't have rounded corners and remove focus transition so it matches `dropdown-item`
* Fixes [#1956](https://github.com/liferay/clay/issues/1956), Fixes [#1951](https://github.com/liferay/clay/issues/1951) ClayCSS Atlas `dropdown-item` focus shouldn't have rounded corners
* Fixes [#1936](https://github.com/liferay/clay/issues/1936) ClayCSS Mixin `clay-dropdown-menu-variant` `padding-bottom` should map to the `::after` pseudo element due to Firefox overflow workaround in #1883
* Fixes [#1546](https://github.com/liferay/clay/issues/1546) ClayCSS Base Single collapsible panels shouldn't shift 1px on open/close
* Fixes [#1546](https://github.com/liferay/clay/issues/1546) ClayCSS Panels added Sass map `$panel-header-collapsed-link` and use `clay-link` mixin for `.panel-header-link.panel-header.collapsed`
* Fixes [#1931](https://github.com/liferay/clay/issues/1931) ClayCSS Toggle Switch add focus transition
* Fixes [#1928](https://github.com/liferay/clay/issues/1928) ClayCSS Atlas Nav Underline focus styles should match Lexicon Design
* Fixes [#1928](https://github.com/liferay/clay/issues/1928) ClayCSS Nav Underline added Sass maps `$nav-underline-link` and `$nav-underline-link-show`
* Fixes [#1928](https://github.com/liferay/clay/issues/1928) ClayCSS Nav Underline use `clay-link` mixin to style `.nav-underline .nav-link` and `.nav-underline .nav-item.show .nav-link`
* Fixes [#1928](https://github.com/liferay/clay/issues/1928) ClayCSS Source Formatting Nav Underline Link variables and selectors should be grouped separately from Nav Underline Link Highlight variables and selectors
* Fixes [#1922](https://github.com/liferay/clay/issues/1922) ClayCSS Atlas Nav Tabs should match Lexicon Design
* Fixes [#1922](https://github.com/liferay/clay/issues/1922) ClayCSS Nav Tabs use `clay-link` mixin to style `.nav-tabs .nav-link` and `.nav-tabs .nav-item.show .nav-link`
* Fixes [#1922](https://github.com/liferay/clay/issues/1922) ClayCSS Nav Tabs added Sass maps `$nav-tabs-link` and `$nav-tabs-link-show`
* Fixes [#1916](https://github.com/liferay/clay/issues/1916) ClayCSS Atlas Menubar focus styles should match Lexicon Design
* Fixes [#1916](https://github.com/liferay/clay/issues/1916) ClayCSS Mixins `clay-menubar-vertical-variant` deprecate `$toggler-border-color-mobile`, `$toggler-border-style-mobile`, `$toggler-color-mobile`, `$toggler-font-size-mobile`, `$toggler-font-weight-mobile`. Use `$toggler-mobile` instead.
* Fixes [#1916](https://github.com/liferay/clay/issues/1916) ClayCSS Mixins `clay-menubar-vertical-variant` added Sass map `$toggler-mobile` to style `.menubar-toggler` and use `clay-button-variant` mixin to supply styles for `.menubar-toggler`
* Fixes [#1916](https://github.com/liferay/clay/issues/1916) ClayCSS Mixins `clay-menubar-vertical-variant` deprecate `$link-bg`, `$link-border-radius`, `$link-color`, `$link-hover-bg`, `$link-hover-color`, `$link-active-bg`, `$link-active-color`, `$link-active-font-weight`, `$link-disabled-bg`, `$link-disabled-color`, `$link-border-radius-mobile``$link-color-mobile`, `$link-hover-bg-mobile`, `$link-hover-color-mobile`, `$link-active-bg-mobile`, `$link-active-font-weight-mobile`, `$link-active-color-mobile`, `$link-disabled-bg-mobile`, `$link-disabled-color-mobile`. Use `$link` instead.
* Fixes [#1916](https://github.com/liferay/clay/issues/1916) ClayCSS Mixins `clay-menubar-vertical-variant` use `clay-link` mixin to supply styles for `.nav-link`
* Fixes [#1916](https://github.com/liferay/clay/issues/1916) ClayCSS Mixins `clay-menubar-vertical-variant` added Sass map `$link` and `$link-mobile` to style `.nav-link`
* Fixes [#1916](https://github.com/liferay/clay/issues/1916) ClayCSS Mixins `clay-link` should have the option of styling `.active` separately from the pseudo class `:active`
* Fixes [#1916](https://github.com/liferay/clay/issues/1916) ClayCSS Mixins `clay-link` add options `focus-border-radius`,`active-font-weight`, `active-class-bg`, `active-class-border-color`, `active-class-color`, `active-class-font-weight`, `active-class-z-index`
* Fixes [#1916](https://github.com/liferay/clay/issues/1916) ClayCSS Mixins `clay-link` `active-z-index` should map to active not disabled
* Fixes [#1919](https://github.com/liferay/clay/issues/1919) ClayCSS Panels move `.panel-header-link` and `a.sheet-subtitle` focus styles from Base to Atlas
* Fixes [#1913](https://github.com/liferay/clay/issues/1913) ClayCSS Atlas Breadcrumb focus styles should match Lexicon
* Fixes [#1913](https://github.com/liferay/clay/issues/1913) ClayCSS Breadcrumb use `clay-link` mixin for `.breadcrumb-link` and add Sass map `$breadcrumb-link`
* Fixes [#1909](https://github.com/liferay/clay/issues/1909) ClayCSS SVG Icons added new icon `minus-circle`
* Fixes [#1904](https://github.com/liferay/clay/issues/1904) ClayCSS Pagination deprecate variables `$pagination-item-margin-x`, `$pagination-item-margin-y`, `$pagination-link-border-radius`, `$pagination-link-cursor`, `$pagination-link-transition`, `$pagination-disabled-cursor`, `$pagination-disabled-opacity`, `$pagination-disabled-pointer-events`, `$pagination-items-per-page-bg`, `$pagination-items-per-page-border-color`, `$pagination-items-per-page-border-radius`, `$pagination-items-per-page-color`, `$pagination-items-per-page-transition`, `$pagination-items-per-page-hover-bg`, `$pagination-items-per-page-hover-border-color`, `$pagination-items-per-page-hover-color`, `$pagination-items-per-page-focus-box-shadow`, `$pagination-items-per-page-focus-outline`, `$pagination-items-per-page-lexicon-icon-margin-left`, `$pagination-items-per-page-lexicon-icon-margin-top` in favor of Sass maps
* Fixes [#1904](https://github.com/liferay/clay/issues/1904) ClayCSS Base Pagination use negative margin on `.page-item` instead of `.page-link` so pagination links using `button` don't have double borders
* Fixes [#1904](https://github.com/liferay/clay/issues/1904) ClayCSS Base Pagination active `z-index` should have priority over hover and focus `z-index` should have priority over active
* Fixes [#1904](https://github.com/liferay/clay/issues/1904) ClayCSS Atlas Pagination `.page-item` should have more space between items so focus styles don't appear too close to an active item
* Fixes [#1904](https://github.com/liferay/clay/issues/1904) ClayCSS Atlas Pagination focus styles should match Lexicon Design
* Fixes [#1904](https://github.com/liferay/clay/issues/1904) ClayCSS Pagination added Sass maps `$pagination-item`, `$pagination-link`, `$pagination-link-hover`, `$pagination-link-focus`, `$pagination-link-active`, `$pagination-link-disabled`, `$pagination-items-per-page-link`, `$pagination-items-per-page-link-hover`, `$pagination-items-per-page-link-focus`, `$pagination-items-per-page-link-active`, `$pagination-items-per-page-link-disabled`
* Fixes [#1904](https://github.com/liferay/clay/issues/1904) ClayCSS Pagination use `clay-link` mixin for `.page-link` and `.pagination-items-per-page`, use `clay-container` mixin for `.page-item` to open up more customization options
* Fixes [#1904](https://github.com/liferay/clay/issues/1904) ClayCSS Mixins `clay-link` add options `box-shadow`, `cursor`, `outline`, `pointer-events`, `hover-border-color`, `focus-border-color`, `lexicon-icon-font-size`
* Fixes [#1852](https://github.com/liferay/clay/issues/1852) ClayCSS Forms `.form-control-tag-group .autofit-row` should fit based on content
* Fixes [#1852](https://github.com/liferay/clay/issues/1852) ClayCSS Forms `.form-control-tag-group .inline-item` should size the same as `.form-control-inset`
* Fixes [#1852](https://github.com/liferay/clay/issues/1852) ClayCSS Forms added Sass maps `$form-control-tag-group`, `$form-control-tag-group-autofit-row`, `$form-control-tag-group-autofit-col`, `$form-control-tag-group-inline-item`, `$form-control-tag-group-btn`, `$form-control-tag-group-btn-monospaced`
* Fixes [#1852](https://github.com/liferay/clay/issues/1852) ClayCSS Input Group support `.input-group-item > .dropdown` so you can use Bootstrap's dropdown methods if you wish
* Fixes [#1852](https://github.com/liferay/clay/issues/1852) ClayCSS Utilities `.inline-item .loading-animation` should size based on parent `font-size`
* Fixes [#1852](https://github.com/liferay/clay/issues/1852) ClayCSS Utilities added option to configure `$inline-item-loading-animation-font-size`
* Fixes [#1852](https://github.com/liferay/clay/issues/1852) ClayCSS Input Group `btn` inside `input-group-inset-item` should be sized better and don't need to set styles form `input-group-lg input-group-inset-item btn` they are inherited from `input-group-inset-item btn`

### v2.14.2 April 23, 2019

* No Clay CSS changes

### v2.14.1 April 23, 2019

* Fixes [#1868](https://github.com/liferay/clay/issues/1868) ClayCSS Atlas Table Links use `inline-block` instead of `inline-flex` so long text can break to new line
* Fixes [#1868](https://github.com/liferay/clay/issues/1868) Utilities adjust `.lexicon-icon` offset in `.inline-item` so it aligns better with text
* Fixes [#1868](https://github.com/liferay/clay/issues/1868) ClayCSS Mixins `clay-link` added `max-width` option`
* Fixes [#1883](https://github.com/liferay/clay/issues/1883) ClayCSS Dropdown Menu Firefox doesn't respect `padding-bottom` on `.dropdown-menu` when there is overflowing content
* Fixes [#1756](https://github.com/liferay/clay/issues/1756) ClayCSS Input Group `label.input-group-inset-item` should have `margin-bottom: 0`
* Fixes [#1756](https://github.com/liferay/clay/issues/1756) ClayCSS Mixin `clay-container` added option to pass in `color`, `font-size`, `font-family`, `font-weight`, `line-height`, `opacity`, `text-align`, `text-decoration`, `text-transform`, `transition`, `vertical-align`
* Fixes [#1756](https://github.com/liferay/clay/issues/1756) ClayCSS Input Group `.input-group-inset` inside `.input-group-prepend` and `.input-group-append` should have proper border-radius styles
* Fixes [#1756](https://github.com/liferay/clay/issues/1756) ClayCSS Mixins `clay-close` remove selector `.show > &` close shouldn't show anything
* Fixes [#1756](https://github.com/liferay/clay/issues/1756) ClayCSS Mixins added `clay-form-control-variant`
* Fixes [#1756](https://github.com/liferay/clay/issues/1756) ClayCSS Mixins `clay-container` added options `align-items`, `bg`, `bg-image`, `bg-position`, `bg-size`, `border-radius`, `flex-basis`, `flex-direction`, `flex-grow`, `flex-shrink`, `flex-wrap`, `height`, `justify-content`, `max-height`, `min-height`, `order`, `width`
* Fixes [#1756](https://github.com/liferay/clay/issues/1756) ClayCSS Mixins added mixin `clay-title` as a shortcut for `clay-text-typography`
* Fixes [#1756](https://github.com/liferay/clay/issues/1756) ClayCSS mixins `clay-button-variant` added `bottom`, `position`, `left`, `right`, `top`
* Revert "Merge pull request [#1844](https://github.com/liferay/clay/issues/1844) from pat270/clay-1841-2x". This reverts commit 0677913, reversing changes made to ced73ab. Reverts Utilities added `.inline-group`, `.inline-group-before`, `.inline-group-after` as an option for those that don't want to remove white space.
* Fixes [#1850](https://github.com/liferay/clay/issues/1850) ClayCSS Atlas 2.x List Group links should match Lexicon Focus Style
* Fixes [#1875](https://github.com/liferay/clay/issues/1875) ClayCSS Mixins `clay-card-variant` should work with `.form-check-card`
* Fixes [#1875](https://github.com/liferay/clay/issues/1875) ClayCard Source Format change spaces to tabs in FileCard, ImageCard, UserCard
* Fixes [#1875](https://github.com/liferay/clay/issues/1875) ClayCard adds class `aspect-ratio-item` to `aspect-ratio-item-fluid` element in FileCard, ImageCard, and UserCard
* Fixes [#1875](https://github.com/liferay/clay/issues/1875) ClayCSS Cards added Sass map `$card-type-template-aspect-ratio-item` and Card Type Template styles should win over Card Type Asset and Card Type Directory styles
* Fixes [#1875](https://github.com/liferay/clay/issues/1875) ClayCSS Mixins `clay-aspect-ratio-variant` added options to configure `bg` and `bg-image`
* Fixes [#1875](https://github.com/liferay/clay/issues/1875) ClayCSS Mixins added `clay-aspect-ratio-item-variant`
* Fixes [#1875](https://github.com/liferay/clay/issues/1875) ClayCSS Mixins `clay-card-variant` added Sass map `$aspect-ratio-item` and option to configure `bg` or `background-color`
* Fixes [#1872](https://github.com/liferay/clay/issues/1872) ClayCSS Card set `background-color` and `border-width` on `.card` and `.card-horizontal` due to specificity issues with Liferay Portal compat layer

### v2.14.0 April 16, 2019

* Fixes [#1855](https://github.com/liferay/clay/issues/1855) ClayCSS Stickers that are `display: inline-block` with icons aren't centered
* Fixes [#1606](https://github.com/liferay/clay/issues/1606) - (Breaking) Grays out inactive arrow. Renamed `$order-arrow-down-active-color` and `$order-arrow-up-active-color` to `$order-arrow-down-inactive-color` and `$order-arrow-up-inactive-color` respectively.
* Fixes [#1616](https://github.com/liferay/clay/issues/1616), Fixes #1776 ClayCSS Atlas Table links should match Lexicon focus styles
* Fixes [#1616](https://github.com/liferay/clay/issues/1616), Fixes #1783 ClayCSS Atlas Links should match Lexicon focus styles
* Fixes [#1810]](https://github.com/liferay/clay/issues/1810) ClayCSS Atlas 2.x Date Picker Focus Styles
* Fixes [#1828](https://github.com/liferay/clay/issues/1828) ClayCSS 2.x Collapsible Panels added focus styles
* Fixes [#1815](https://github.com/liferay/clay/issues/1815) ClayCSS 2.x Multi Step Nav should have focus styles
* Fixes [#1777 ClayCSS Atlas 2.x Application Bar, Management Bar, Navigation Bar Focus Styles
* Fixes [#1795](https://github.com/liferay/clay/issues/1795) ClayCSS Atlas 2.x Focus Styles for Custom Input and Inputs
* Fixes [#1841](https://github.com/liferay/clay/issues/1841) ClayCSS 2.x Utilities added `.inline-group`, `.inline-group-before`, `.inline-group-after` as an option for those that don't want to remove white space

### v2.13.0 April 10, 2019

* Fixes [#1825](https://github.com/liferay/clay/issues/1825) ClayCSS Stickers with Icon should be centered
* Fixes [#1822](https://github.com/liferay/clay/issues/1822) ClayCSS Autocomplete Dropdown Menu remove `z-index` workaround was fixed in ClayAutocomplete
* Fixes [#1713](https://github.com/liferay/clay/issues/1713) ClayCSS Update User Card Icon sizing and add a 5 column grid for User Card
* Fixes [#1616](https://github.com/liferay/clay/issues/1616), Fixes [#1785](https://github.com/liferay/clay/issues/1785) ClayCSS (Breaking) Dropdown added Sass map `$dropdown-item-base` for styling `.dropdown-item` and use new mixin in `.dropdown-item`. This is a breaking change due to new focus styles and overwriting Bootstrap's heavy `.btn` selector if using `&lt;button class="btn dropdown-item"&gt;` pattern.
* Fixes [#1616](https://github.com/liferay/clay/issues/1616), Fixes [#1785](https://github.com/liferay/clay/issues/1785) ClayCSS Mixins added `clay-dropdown-item-variant` for creating `.dropdown-item` variants
* Fixes [#1616](https://github.com/liferay/clay/issues/1616), Fixes [#1778](https://github.com/liferay/clay/issues/
1778 ClayCSS (Breaking) Labels added Sass map `$label-base` and use it to add focus styles to base `.label`
* Fixes [#1616](https://github.com/liferay/clay/issues/1616), Fixes [#1778](https://github.com/liferay/clay/issues/1778) ClayCSS Mixins `clay-label-variant` added options `outline`, `transition`, `disabled-box-shadow`

### v2.12.1 April 4, 2019

* Fixes [#1616](https://github.com/liferay/clay/issues/1616), Fixes [#1775](https://github.com/liferay/clay/issues/1775) ClayCSS Atlas Buttons prevent invalid box-shadow css from being output due to Bootstrap's box-shadow mixin
* Fixes [#1616](https://github.com/liferay/clay/issues/1616), Fixes [#1775](https://github.com/liferay/clay/issues/1775) ClayCSS (Breaking) Atlas Links add focus styles for `.component-action`, `.link-outline-primary`, and `.link-outline-secondary`
* Fixes [#1616](https://github.com/liferay/clay/issues/1616), Fixes [#1775](https://github.com/liferay/clay/issues/1775) ClayCSS Mixins `clay-link` and `clay-close` add option to pass in `disabled-box-shadow`
* Fixes [#1616](https://github.com/liferay/clay/issues/1616), Fixes [#1775](https://github.com/liferay/clay/issues/1775) ClayCSS Atlas Dropdowns make space between dropdown-menu and dropdown-toggle bigger for new focus styles
* Fixes [#1616](https://github.com/liferay/clay/issues/1616), Fixes [#1775](https://github.com/liferay/clay/issues/1775) ClayCSS Atlas Utilities base `.close` focus style `.close` focus styles have changed
* Fixes [#1616](https://github.com/liferay/clay/issues/1616), Fixes [#1775](https://github.com/liferay/clay/issues/1775) ClayCSS (Breaking) Atlas Button focus styles to match Lexicon Design `.btn` focus styles have changed

### v2.12.0 April 3, 2019

* Fixes [#1752](https://github.com/liferay/clay/issues/1752) ClayCSS SVG Icons added `pin` and `unpin`
* Fixes [#1743](https://github.com/liferay/clay/issues/1743) ClayCSS undo Bootstrap's `text-align: left` on the `body` element so content with mixed languages will be properly aligned
* Fixes [#1743](https://github.com/liferay/clay/issues/1743) ClayCSS Globals added option to configure `$body-text-align` and reset Bootstrap's `text-align: left` on the `body` element
* Fixes [#1669](https://github.com/liferay/clay/issues/1669) ClayCSS Input Groups set values for buttons inside `.input-group-lg` and `.input-group-sm` because Bootstrap's input-group sizings are flaky and is changing in 4.1.3
* Fixes [#1669](https://github.com/liferay/clay/issues/1669) ClayCSS Buttons added placeholders `%clay-btn-sm`, `%clay-btn-lg` and extend them in `.form-group-sm`
* Fixes [#1669](https://github.com/liferay/clay/issues/1669) ClayCSS Forms added option to configure `$form-group-sm-margin-bottom`, `$form-group-sm-margin-bottom-mobile`, `$form-group-sm-input-label-margin-bottom`, `$form-group-sm-item-label-spacer`
* Fixes [#1669](https://github.com/liferay/clay/issues/1669) ClayCSS Forms added placeholders `%clay-textarea-form-control-sm`, `%clay-textarea-form-control-lg`, and reorganize
* Fixes [#1669](https://github.com/liferay/clay/issues/1669) ClayCSS Forms added variables `$input-textarea-height-lg`, `$input-textarea-height-sm`, and add support for `.form-control-sm`, `.form-control-lg` on `textarea.form-control`
* Fixes [#1669](https://github.com/liferay/clay/issues/1669) ClayCSS Forms added placeholders `%clay-select-form-control-sm`, `%clay-select-form-control-lg`
* Fixes [#1669](https://github.com/liferay/clay/issues/1669) ClayCSS Forms added `.form-group-sm` to size form elements inside `.form-group`
* Fixes [#1669](https://github.com/liferay/clay/issues/1669) ClayCSS Inputs move `.input-group-lg` and `.input-group-sm` styles to placeholders `%clay-input-group-lg` and `%clay-input-group-sm` respectively
* Fixes [#1669](https://github.com/liferay/clay/issues/1669) ClayCSS Inputs move `.form-control-lg` and `.form-control-sm` styles to placeholders `%clay-form-control-lg` and `%clay-form-control-sm` respectively
* Fixes [#1736](https://github.com/liferay/clay/issues/1736) Forms more `.form-check` fixes
* Fixes [#1736](https://github.com/liferay/clay/issues/1736) ClayCSS Update Bootstrap CSS to 4.3.1, Bootstrap JS to 4.3.1, and Popper JS to 1.14.7
* Fixes [#1736](https://github.com/liferay/clay/issues/1736) ClayCSS Alert added Sass map `$alert-close` and use `clay-close` mixin
* Fixes [#1736](https://github.com/liferay/clay/issues/1736) ClayCSS Alert deprecate variables `$alert-close-font-size`, `$alert-close-height`, `$alert-close-line-height`, `$alert-close-opacity`, `$alert-close-margin-left`, `$alert-close-padding-bottom`, `$alert-close-padding-left`, `$alert-close-padding-right`, `$alert-close-padding-top`, `$alert-close-position-right`, `$alert-close-position-top`, `$alert-close-width`
* Fixes [#1736](https://github.com/liferay/clay/issues/1736) ClayCSS Utilities `.close` use `clay-close` mixin instead of `clay-link` bc Bootstrap 4.1.2 4f1bb98 selector is too aggressive
* Fixes [#1736](https://github.com/liferay/clay/issues/1736) ClayCSS Mixin `clay-close` added options `position`, `bottom`, `left`, `right`, `top`
* Fixes [#1736](https://github.com/liferay/clay/issues/1736) ClayCSS `_bs4-variable-overwrites` overwrite `$form-check-input-gutter` and `$form-check-input-margin-y` browser default checkboxes and radios not displaying
* Fixes [#1736](https://github.com/liferay/clay/issues/1736) ClayCSS Forms manually calculate input-height-inner Bootstrap 4.3.0 143f3b8 broke it
* Fixes [#1721](https://github.com/liferay/clay/issues/1721) ClayCSS Use color variables defined in `_globals.scss`
* Fixes [#1579](https://github.com/liferay/clay/issues/1579) ClayCSS Dropdown Menu added `.autocomplete-dropdown-menu` variant to size dropdown-menu's inside ClayAutocomplete according to Lexicon specifications
* Fixes [#1579](https://github.com/liferay/clay/issues/1579) ClayCSS Dropdown Menu added Sass map `$autocomplete-dropdown-menu`

### v2.11.1 March 26, 2019

* Fixes [#1689](https://github.com/liferay/clay/issues/1689) ClayCSS 2.x Toggle Switch add option to use label for="id" markup

### v2.11.0 March 25, 2019

* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS Atlas Date Picker update colors for hover, focus, disabled
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS added new Date Picker component
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS Date Picker added Sass maps for configuring `$date-picker-dropdown-menu`, `$date-picker-nav-row`, `$date-picker-nav-btn`, `$date-picker-nav-btn-monospaced`, `$date-picker-nav-select`, `$date-picker-row`, `$date-picker-days-row`, `$date-picker-day`, `$date-picker-calendar-container`, `$date-picker-calendar-header-container`, `$date-picker-calendar-body-container`, `$date-picker-calendar-footer-container`, `$date-picker-calendar-item`, `$date-picker-date`, `$date-picker-previous-month-date`, `$date-picker-next-month-date`, `$date-picker-input-group-text`
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS Mixin `clay-select-variant` hover-bg and disabled-bg not specific enough
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS Input Group adjust alignment of `.lexicon-icon` inside `.input-group-text`
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS Mixin `clay-button-variant` add ability configure the same properties as `clay-button-size` so we don't need to declare 2 Sass maps to make a button
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS Mixin `clay-button-variant` added options to configure `breakpoint-down`, `align-items`, `border-radius`, `border-style`, `border-width`, `cursor`, `display`, `flex-grow`, `flex-shrink`, `font-size`, `font-weight`, `height`, `justify-content`, `line-height`, `margin-bottom`, `margin-left`, `margin-right`, `margin-top`, `padding-bottom`, `padding-left`, `padding-right`, `padding-top`, `transition`, `user-select`, `vertical-align`, `white-space`, `width`, `word-wrap`, `disabled-cursor`, `font-size-mobile`, `height-mobile`, `padding-bottom-mobile`, `padding-left-mobile`, `padding-right-mobile`, `padding-top-mobile`, `width-mobile`, `inline-item-font-size`, `section-font-size`, `section-font-weight`, `section-line-height`
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS New mixin `clay-dropdown-menu-variant` for styling `.dropdown-menu` variants
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS New mixin `clay-input-group-text-variant` for styling `input-group-text`
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS Mixin added `clay-select-variant` for styling select form elements
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS Mixin `clay-container` added `border-color`, `border-style`, `border-width`, `display`, `float`, `max-width`, `min-width`, `position`, `margin-bottom`, `margin-left`, `margin-right`, `margin-top`
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS New mixin `clay-row` with options to configure `display`, `flex-wrap`, `justify-content`, `margin-bottom`, `margin-left`, `margin-right`, `margin-top`
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS Mixins `clay-button-size` add options to configure `margin-bottom`, `margin-left`, `margin-right`, `margin-top`, `align-items`, `cursor`, `display`, `disabled-cursor`, `flex-grow`, `flex-shrink`, `justify-content`
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS Mixins `clay-button-variant` don't set focus-bg and focus-border-color by default
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS Mixins `clay-button-variant` added `opacity`, `hover-opacity`, `active-opacity`, `disabled-opacity`, `text-decoration`, `hover-text-decoration`, `focus-outline`
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - Extract the demo CSS to ClayCSS
* Fixes [#1482](https://github.com/liferay/clay/issues/1482) - ClayCSS added SVG Simple Circle
* Revert [#1634](https://github.com/liferay/clay/issues/1634) - Headers size
* Fixes [#1094](https://github.com/liferay/clay/issues/1094) ClayCSS 2.x Atlas Nav deprecate unused variables `$nav-collapse-icon-closed` and `$nav-collapse-icon-open`
* Fixes [#1099](https://github.com/liferay/clay/issues/1099) ClayCSS Atlas Panel deprecate `$panel-collapse-icon-font-size`
* Fixes [#1664](https://github.com/liferay/clay/issues/1664) ClayCSS Panels added components `.panel-group-sm`, `.panel-unstyled`, and Sass maps `$panel-group-sm`, `$panel-unstyled`
* Fixes [#1664](https://github.com/liferay/clay/issues/1664) ClayCSS Panels `.panel-header.collapsed` in `.panel-group-flush` shouldn't have rounded borders
* Fixes [#1664](https://github.com/liferay/clay/issues/1664) ClayCSS Mixins `clay-panel-variant` added options to configure `bg`, `border-style`, `border-width`, `font-size`, `header-border-style`, `header-border-width`, `header-margin-bottom`, `header-margin-left`, `header-margin-right`, `header-margin-top`, `header-padding-bottom`, `header-padding-left`, `header-padding-right`, `header-padding-top`, `title-font-size`, `title-font-weight`, `title-text-transform`, `collapse-icon-bottom`, `collapse-icon-font-size`, `collapse-icon-left`, `collapse-icon-right`, `collapse-icon-top`, `body-margin-bottom`, `body-margin-left`, `body-margin-right`, `body-margin-top`, `body-padding-bottom`, `body-padding-left`, `body-padding-right`, `body-padding-top`
* Fixes [#1664](https://github.com/liferay/clay/issues/1664) ClayCSS Mixins `clay-link` added `border-style`, `border-width`
* Fixes [#1386](https://github.com/liferay/clay/issues/1386) ClayCSS adds new component Drilldown with options to configure `$drilldown-inner-transition`, `$drilldown-transition`, `$drilldown-width`, `$drilldown-inline-scroller-max-height`, `$drilldown-item-header` (Sass map)

### v2.10.0 March 13, 2019

* Fixes [#1629](https://github.com/liferay/clay/issues/1629) ClayCSS Atlas Accordion collapse icon should be 12px
* Fixes [#1629](https://github.com/liferay/clay/issues/1629) ClayCSS Sheet added option to configure `$sheet-subtitle-collapse-icon-font-size`
* Fixes [#1629](https://github.com/liferay/clay/issues/1629) ClayCSS Atlas Sheet `$sheet-subtitle-collapse-icon-font-size` should be 12px
* Fixes [#1655](https://github.com/liferay/clay/issues/1655) ClayCSS Sidebar change padding to 1rem
* Fixes [#1631](https://github.com/liferay/clay/issues/1631) ClayCSS Base add new spacers 6 (4.5rem), 7 (6rem), 8 (7.5rem) and source formatting
* Fixes [#1631](https://github.com/liferay/clay/issues/1631) - ClayCSS Atlas adds new spacers 6 (4.5rem), 7 (6rem), 8 (7.5rem) and changes 3 from 1rem to 0.75rem
* Fixes [#1650](https://github.com/liferay/clay/issues/1650) Atlas '$input-textarea-height' should be 100px
* Fixes [#1574](https://github.com/liferay/clay/issues/1574) ClayCSS Form Control Tag Group change spacing between `.label`
* Fixes [#1640](https://github.com/liferay/clay/issues/1640) ClayCSS SVG Icons added new icons `change-list` and `upload-multiple`
* Fixes [#1640](https://github.com/liferay/clay/issues/1640) ClayCSS SVG Icons update `folder`, `password-policies`, and `repository`
* Fixes [#1618](https://github.com/liferay/clay/issues/1618) ClayCSS Custom Checkbox/Radio up `z-index` on `.custom-control-input` so it doesn't lose focus when you decide not to click it
* Fixes [#1623](https://github.com/liferay/clay/issues/1623) ClayCSS Atlas Globals don't need to define `$h1-$h6` variables unless we want to reuse them in Atlas Theme
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) ClayCSS Forms added `.form-control-textarea` and `.form-control-select` for styling divs like textarea and select inputs
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) ClayCSS Atlas Forms tweak `$input-padding-y` to be 7x so `div.form-control` is the right height when there is text inside
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) ClayCSS Sheet add margin rule for `.card-page` nested in `.sheet-section`
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) ClayCSS Cards added `.card-page-equal-height` for making `.card` inside `.card-page-item` equal height
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) ClayCSS Card added components `.card-interactive`, `.card-interactive-primary`, `.card-interactive-secondary`, `.card-type-template`, `.template-card`, and `.template-card-horizontal`
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) ClayCSS Card added Sass maps `$card-interactive-after-highlight`, `$card-interactive-card-body`, `$card-interactive`, `$card-interactive-primary-after-highlight`, `$card-interactive-primary`, `$card-interactive-secondary`
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) ClayCSS Card added Sass maps `$card-type-template-after-highlight`, `$card-type-template-aspect-ratio`,  `$card-type-template-card-title`, `$card-type-template-card-text`, `$card-type-template`
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) ClayCSS Card added Sass maps `$template-card-body`, `$template-card`
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) ClayCSS Card added Sass maps `$template-card-horizontal-sticker`, `$template-card-horizontal-card-row`, `$template-card-horizontal-card-title`, `$template-card-horizontal`
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) ClayCSS Mixins added `clay-aspect-ratio-variant` for styling nested `aspect-ratio` inside a component like `card`
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) ClayCSS Mixins added `clay-card-variant` for creating custom cards
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) ClayCSS Mixins added `clay-card-section-variant` for styling sections inside your custom card e.g., `card-body`, `.card-header`, `.card-footer`, `.card-row`
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) - ClayCSS Mixins added `clay-after-highlight-variant` for adding highlight underlines to components
* Fixes [#1436](https://github.com/liferay/clay/issues/1436) - ClayCSS Global Functions added option to pass in `clay-unset` keyword to prevent Sass from outputting property and value
* Fixes [#1625](https://github.com/liferay/clay/issues/1625) - Add lexicon basic colors for atlas (changes base theme colors e.g., `$white`, `$gray-100`, `$blue`)
* Fixes [#1623](https://github.com/liferay/clay/issues/1623) - Change headers sizes (e.g., `$h1-font-size`, `$headings-font-weight`) (Breaking)

### v2.9.0 February 22, 2019

* Fixes [#1597](https://github.com/liferay/clay/issues/1597) - ClayCSS SVG Icon added Bolt
* Fixes [#1510](https://github.com/liferay/clay/issues/1510) - ClayCSS Atlas Stickers invert background-color with color (Breaking)
* Fixes [#1510](https://github.com/liferay/clay/issues/1510) - ClayCSS Mixins added `clay-sticker-variant` for creating other sticker types
* Fixes [#1510](https://github.com/liferay/clay/issues/1510) - ClayCSS Stickers added new variant `.sticker-user-icon` and Sass map `$sticker-user-icon` which uses `clay-sticker-variant` mixin
* Fixes [#1582](https://github.com/liferay/clay/issues/1582) - ClayCSS SVG Icons added new icons `color-picker`, `spacer`, and `user-plus`
* Fixes [#1573](https://github.com/liferay/clay/issues/1573) - ClayCSS Toggle Switch added Simple Toggle Switch with options to configure `$simple-toggle-switch-label-line-height`, `$simple-toggle-switch-label-spacer-x`
* Fixes [#1575](https://github.com/liferay/clay/issues/1575) - ClayCSS Input Groups `.input-group-item` with `.dropdown` should expand to fit
* Fixes [#1564](https://github.com/liferay/clay/issues/1564) - ClayCSS Aspect Ratio added utilities `.aspect-ratio-item-flush` and `.aspect-ratio-item-vertical-flush` to force images to fill remaining space
* Fixes [#1522](https://github.com/liferay/clay/issues/1522) - ClayCSS Label Dismissible Lg `.close` should be smaller
* Fixes [#1522](https://github.com/liferay/clay/issues/1522) - ClayCSS Label Component `.close` should use the mixin `clay-close`
* Fixes [#1522](https://github.com/liferay/clay/issues/1522) - ClayCSS Mixins add `clay-close` to help overwrite Bootstrap 4's `&:not(:disabled):not(.disabled)` selector

### v2.8.3 February 12, 2019

* Fixes [#1509](https://github.com/liferay/clay/issues/1509) - ClayCSS Panel add support for `small` and `.small` element inside `.panel-title`
* Fixes [#1509](https://github.com/liferay/clay/issues/1509) - ClayCSS Panel add option to configure `$panel-title-small-font-size` and `$panel-title-small-margin-left`
* Fixes [#1509](https://github.com/liferay/clay/issues/1509) - ClayCSS Custom Checkbox Radio add support for `small` and `.small` element inside `.custom-control-label-text`
* Fixes [#1509](https://github.com/liferay/clay/issues/1509) - ClayCSS Custom Checkbox Radio add option to configure `$custom-control-description-small-font-size`
* Fixes [#1509](https://github.com/liferay/clay/issues/1509) - ClayCSS Atlas Custom Checkbox Radio change margin-bottom to 0.5rem
* Fixes [#1536](https://github.com/liferay/clay/issues/1536) - ClayCSS Tables added `.table-img` to set a max-height on images inside table cells and option to configure `$table-img-max-height`

### v2.8.2 February 11, 2019

* Fixes [#1530](https://github.com/liferay/clay/issues/1530) - ClayCSS add new SVG icon Move Folder, update SVG icons user and users

### v2.8.1 February 11, 2019

* Fixes [#1503](https://github.com/liferay/clay/issues/1503) Replace `$input-bg` to be based on `$light` color

### v2.8.0 February 7, 2019

* Fixes [#1493](https://github.com/liferay/clay/issues/1493) - ClayCSS add SVG Icon Drop
* Fixes [#1477](https://github.com/liferay/clay/issues/1477) Change btn opacity (changes ClayCSS Atlas `$btn-disabled-opacity` to `0.4` from `0.26`)

### v2.7.0 January 24, 2019

* Fixes [#1463](https://github.com/liferay/clay/issues/1463) - Fix inline items in cards type icon
* Fixes [#1468](https://github.com/liferay/clay/issues/1468) - Remplace dark color (replace hard coded `#272833` with `$dark`)
* Fixes [#1437](https://github.com/liferay/clay/issues/1437) - Change card vertical mrgin (changes ClayCSS Base `$card-margin-bottom` to `1.5rem` from `1.25rem`)

### v2.6.0 January 11, 2019

* Fixes [#1419](https://github.com/liferay/clay/issues/1419) - ClayCSS `.label-success` and `.label-warning` shouldn't use `$label-primary-bg`
* Fixes [#1417](https://github.com/liferay/clay/issues/1417) - ClayCSS mixin `clay-navbar-size` added options to configure `$btn-padding-x`, `$btn-padding-y`, `$btn-padding-x-mobile`, `$btn-padding-y-mobile`
* Fixes [#1415](https://github.com/liferay/clay/issues/1415) - ClayCSS Custom Checkbox / Radio calculate spacing based on the input size instead of base font size and line height
* Fixes [#1415](https://github.com/liferay/clay/issues/1415) - ClayCSS Custom Checkbox / Radio added options to configure `$custom-control-indicator-position-top`, `$custom-control-margin-bottom`, `$custom-control-margin-top`, `$custom-control-min-height`

### v2.5.1 December 19, 2018

* Fixes [#1384](https://github.com/liferay/clay/issues/1384) - ClayCSS added new SVG icons `cards-full` and `square-hole`
* Fixes [#1388](https://github.com/liferay/clay/issues/1388) - ClayCSS Pagination unify the way we set the height of each page item between Atlas and Base
* Fixes [#1388](https://github.com/liferay/clay/issues/1388) - ClayCSS added options to customize `$pagination-items-per-page-lexicon-icon-margin-left`, `$pagination-items-per-page-lexicon-icon-margin-top`, `$pagination-items-per-page-lexicon-icon-margin-left-sm`, `$pagination-items-per-page-lexicon-icon-margin-top-sm`, `$pagination-items-per-page-lexicon-icon-margin-left-lg`, `$pagination-items-per-page-lexicon-icon-margin-top-lg`
* Fixes [#1406](https://github.com/liferay/clay/issues/1406) - ClayCSS Mixin `clay-card-type-asset` map key `aspect-ratio-border-bottom-width` to variable `$aspect-ratio-border-bottom-width` and map key `aspect-ratio-border-width` to variable `$aspect-ratio-border-width`
* Fixes [#1406](https://github.com/liferay/clay/issues/1406) - ClayCSS Mixin `clay-card-type-asset` deprecate `aspect-ratio-border-bottom-width`

### v2.5.0 December 10, 2018

* Fixes [#1377](https://github.com/liferay/clay/issues/1377) - ClayCSS Toggle Switch Bar should use `$toggle-switch-bar-font-size` to set the font size
* Fixes [#1377](https://github.com/liferay/clay/issues/1377) - ClayCSS Toggle Switch added option to configure `$toggle-switch-text-font-size`
* Fixes [#1371](https://github.com/liferay/clay/issues/1371) - ClayCSS Pagination with buttons focus, hover, active, disabled states should match with anchor element
* Fixes [#1371](https://github.com/liferay/clay/issues/1371) - ClayCSS Pagination Items Per Page hover and focus styles should match pagination and added options to configure `$pagination-items-per-page-focus-box-shadow`, `$pagination-items-per-page-focus-outline`
* Fixes [#1371](https://github.com/liferay/clay/issues/1371) - ClayCSS Pagination with buttons transitions should match with anchor element and added `$pagination-link-transition`, `$pagination-items-per-page-transition`
* Fixes [#1371](https://github.com/liferay/clay/issues/1371) - ClayCSS Pagination first and last item `border-radius` should be customizable separately from items in between and added `$pagination-link-first-border-radius`, `$pagination-link-last-border-radius`
* Fixes [#1371](https://github.com/liferay/clay/issues/1371) - ClayCSS Pagination added `$pagination-margin-top-mobile` and removed hardcoded rem value
* Fixes [#1369](https://github.com/liferay/clay/issues/1369) - ClayCSS Nav `.nav-unstyled` change spacing between links and buttons from `0.25rem` to `4px`
* Fixes [#1369](https://github.com/liferay/clay/issues/1369) - ClayCSS Navbar replace hardcoded rem values with `$nav-*` variable equivalent in `.navbar-text` and `.navbar-underline`
* Fixes [#1367](https://github.com/liferay/clay/issues/1367) - ClayCSS Multi Step Nav removes unused CSS selector
* Fixes [#1365](https://github.com/liferay/clay/issues/1365) - Forms `.form-group-item` use `$form-group-margin-bottom` and `$form-group-margin-bottom-mobile` to set bottom spacing
* Fixes [#1363](https://github.com/liferay/clay/issues/1363) - ClayCSS Collapse Icon use em values instead of rem on top property so it scales with font size changes
* Fixes [#1363](https://github.com/liferay/clay/issues/1363) - ClayCSS Collapse Icon make `.collapse-icon-middle` more specific so it applies when nested inside components like Panel and Sheet
* Fixes [#1347](https://github.com/liferay/clay/issues/1347) - Clay CSS Custom Checkbox and Radio revert changes made in Bootstrap `4.1.1` fc0fcc4 the IE bug isn't present in Clay CSS and Bootstrap's version doesn't align properly without text
* Fixes [#1347](https://github.com/liferay/clay/issues/1347) - Clay CSS Breadcrumbs removed `$breadcrumb-border-radius` this was added in Bootstrap `4.1.0` fb8e9f3
* Fixes [#1347](https://github.com/liferay/clay/issues/1347) - Clay CSS Removed styles for `.custom-file-input:focus + .custom-file-control` fixed in Bootstrap `4.1.0` 08a3ed7
* Fixes [#1347](https://github.com/liferay/clay/issues/1347) - Clay CSS Modals removed `$modal-content-border-radius` added by Bootstrap `4.1.0` 49d0a4e
* Fixes [#1347](https://github.com/liferay/clay/issues/1347) - Clay CSS Tables use `$table-striped-order` in `.table-striped` was added in Bootstrap `4.1.0` 25e2e28
* Fixes [#1347](https://github.com/liferay/clay/issues/1347) - Clay CSS update Bootstrap CSS to `4.1.1`, Bootstrap.js to `4.1.1`, and Popper.js to `1.14.3`
* Fixes [#1347](https://github.com/liferay/clay/issues/1347) - Clay CSS `atlas.scss`, `base.scss`, and `bootstrap.scss` should use `bootstrap/bootstrap.scss` instead of importing partials individually
* Fixes [#1354](https://github.com/liferay/clay/issues/1354) - Clay CSS Input Group added Sass map `$input-group-inset-form-file-btn`
* Fixes [#1354](https://github.com/liferay/clay/issues/1354) - Clay CSS Input Group added variables `$input-group-item-margin-left`, `$input-group-inset-item-padding-left`, `$input-group-inset-item-padding-right` and Sass maps `$input-group-lg-item-btn`, `$input-group-lg-item-btn-monospaced`, `$input-group-lg-inset-item-btn`, `$input-group-lg-inset-item-form-file-btn`, `$input-group-sm-item-btn`, `$input-group-sm-item-btn-monospaced`, `$input-group-sm-inset-item-btn`, `$input-group-sm-inset-item-form-file-btn` for more customization options
* Fixes [#1354](https://github.com/liferay/clay/issues/1354) - ClayCSS added `clay-button-size` mixin for creating new base button classes with options to configure `breakpoint-down`, `border-color`, `border-radius`, `border-style`, `border-width`, `display`, `font-size`, `font-weight`, `height`, `line-height`, `padding-bottom`, `padding-left`, `padding-right`, `padding-top`, `transition`, `user-select`, `vertical-align`, `white-space`, `width`, `inline-item-font-size`, `section-font-size`, `section-font-weight`, `section-line-height`, `font-size-mobile`, `height-mobile`, `padding-bottom-mobile`, `padding-left-mobile`, `padding-right-mobile`, `padding-top-mobile`, `width-mobile`
* Fixes [#1345](https://github.com/liferay/clay/issues/1345) - ClayCSS add semi-colon and `!default` flag to variables that don't have them
* Fixes [#1343](https://github.com/liferay/clay/issues/1343) - ClayCSS Atlas `.label-lg` and `.form-control .label` icon size should be 12px and sticker size should be 14px
* Fixes [#1283](https://github.com/liferay/clay/issues/1283) - Close button in label that isn't focusable should have hover state color
* Fixes [#1283](https://github.com/liferay/clay/issues/1283) - Labels `button.label` should have cursor pointer and have same styles as `a.label`
* Fixes [#1283](https://github.com/liferay/clay/issues/1283) - Added new mixin `clay-form-control-focus`
* Fixes [#1283](https://github.com/liferay/clay/issues/1283) - Forms `.form-control.focus` should show input in focus state
* Fixes [#1283](https://github.com/liferay/clay/issues/1283) - Labels add hover and focus states for labels that are interactive
* Fixes [#1283](https://github.com/liferay/clay/issues/1283) - Mixin `clay-label-size` should be able to resize `.label-item .lexicon-icon` and added options to configure `$label-link-color`, `$item-spacer-x`, `$item-spacer-y`, `$sticker-size`, and `$sticker-border-radius`
* Fixes [#1283](https://github.com/liferay/clay/issues/1283) - Labels added options to configure `$label-sticker-border-radius`, `$label-sticker-size`, `$label-item-spacer-y`
* Fixes [#1283](https://github.com/liferay/clay/issues/1283) - Labels added Sass maps `$label-primary`, `$label-secondary`, `$label-success`, `$label-info`, `$label-warning`, `$label-danger`, `$label-light`, `$label-dark` and use mixin `clay-label-variant` to style labels
* Fixes [#1283](https://github.com/liferay/clay/issues/1283) - Labels deprecated `$label-primary-*`, `$label-secondary-*`, `$label-success-*`, `$label-info-*`, `$label-warning-*`, `$label-danger-*`, `$label-light-*`, `$label-dark-*` variables
* Fixes [#1283](https://github.com/liferay/clay/issues/1283) - Labels added Sass maps `$label-primary-close`, `$label-secondary-close`, `$label-success-close`, `$label-info-close`, `$label-warning-close`, `$label-danger-close`, `$label-light-close`, `$label-dark-close`
* Fixes [#1336](https://github.com/liferay/clay/issues/1336) - ClayCSS added SVG Kazakhstan Flag
* Fixes [#1242](https://github.com/liferay/clay/issues/1242) - (BREAKING CHANGE) Removes title from the svg element and focusable attribute. Use role=presentation instead and rely on usage to provide proper semantics when using/wrapping the icon
* Revert "Update: Added `pointer-events: none` to `.navbar-text-truncate`, `.breadcrumb-text-truncate`, and `.lexicon-icon` to prevent focus highlight in IE11 when clicking links that contain those elements"
* Fixes [#1321](https://github.com/liferay/clay/issues/1321) - (ClayCSS) Added new Lexicon Icon `document-pdf`
* Fixes [#1319](https://github.com/liferay/clay/issues/1319) - Custom Radio Checked and Checkbox Indeterminate icons aren't centered
* Fixes: [#1270](https://github.com/liferay/clay/issues/1270) - (ClayCSS) Deprecated `$clay-unset` and don't use variable resets because it isn't in the Sass spec
* Fixes: [#1270](https://github.com/liferay/clay/issues/1270) - (ClayCSS) Add missing semi colon in Sheet variable
* Fixes: [#1270](https://github.com/liferay/clay/issues/1270) - (ClayCSS) Mixin `clay-custom-grid-columns` base Sass map is being overwritten in Ruby/Dart Sass
* Fixes: [#1270](https://github.com/liferay/clay/issues/1270) - (ClayCSS) Dart Sass no longer supports extending compound selectors e.g. `.primary.focus` added placeholders `%btn-*-focus` and `%btn-outline-*-focus`

### v2.4.1 November 15, 2018

* No Clay CSS changes

### v2.4.0 November 13, 2018

* Fixes [#1298](https://github.com/liferay/clay/issues/1298) (ClayCSS) Added new SVG Icons document-code, document-compressed, document-default, document-image, document-multimedia, document-presentation, document-table, document-text, and document-vector
* Fixes [#1260](https://github.com/liferay/clay/issues/1260) - Mark should use `$mark-bg` and added option to configure `$mark-color`
* [#1241]](https://github.com/liferay/clay/issues/1241) - Table added support for `.table-cell-start` and `.table-cell-end`
* Fixes [#1240](https://github.com/liferay/clay/issues/1240) - Dropdown Menu added `.dropdown-item-indicator-start` and `.dropdown-item-indicator-end` for placing icons on either side of a dropdown-item and deprecated `.dropdown-item-indicator`
* Fixes [#1241](https://github.com/liferay/clay/issues/1241) - Table List added `.table-row-start`, `.table-row-end`, `.table-cell-start`, `.table-cell-end` to style cells that are on the edges of the table
* Fixes [#1236](https://github.com/liferay/clay/issues/1236) - Added icon Anonymize
* Fixes [#1192](https://github.com/liferay/clay/issues/1192) - Nav Underline highlight color should be primary and height 2px
* Fixes [#1220](https://github.com/liferay/clay/issues/1220) - Use `$input-border-width` the same way Bootstrap uses it
* Fixes [#1164](https://github.com/liferay/clay/issues/1164) - Type added options to configure `$moz-osx-font-smoothing`, `$webkit-font-smoothing`, `$body-moz-osx-font-smoothing`, `$body-webkit-font-smoothing` and use browser default font smoothing in Base theme
* Fixes [#1198](https://github.com/liferay/clay/issues/1198) - Mixin `clay-menubar-vertical-variant` added options to configure `link-bg`, `link-hover-bg`, `link-active-bg`, `link-disabled-bg`, `link-border-radius`, `link-border-radius-mobile`.

### v2.3.4 October 3, 2018

* No Clay CSS changes

### v2.3.3 September 24, 2018

* Fixes [#1105](https://github.com/liferay/clay/issues/1105), [#1147](https://github.com/liferay/clay/issues/1147) - ClayCSS: Subnav Tbar Primary should support labels, break to new line, have disabled state, and `.component-link` color should have more contrast
* ClayCSS: [#1105](https://github.com/liferay/clay/issues/1105) Mixin `clay-label-size` added options to configure `margin-bottom`, `margin-left`, `margin-right`, `margin-top`
* ClayCSS: [#1105](https://github.com/liferay/clay/issues/1105) Mixin `clay-tbar-variant` added options to configure `$padding-x`, `$padding-y`, `$item-justify-content`, `$btn-monospaced-margin-x`, `$btn-monospaced-margin-y`, `$link-monospaced-margin-x`, `$link-monospaced-margin-y`, `$label-size`
* ClayCSS [#1105](https://github.com/liferay/clay/issues/1105) Tbar added option to break to new lines with `.tbar-nav-shrink`, `.tbar-nav-wrap`, `.subnav-tbar-inline-xs-down`, `.subnav-tbar-inline-sm-down`, `.subnav-tbar-inline-md-down`, `.subnav-tbar-inline-lg-down`, `.subnav-tbar-inline-xl-down`
* ClayCSS: [#1105](https://github.com/liferay/clay/issues/1105) Label disabled `.close` hover state should look the same
* ClayCSS: [#1105](https://github.com/liferay/clay/issues/1105) Mixin `clay-link` add option to configure `disabled-text-decoration`
* ClayCSS: [#1105](https://github.com/liferay/clay/issues/1105) New mixin `clay-label-variant` for creating custom label colors
* ClayCSS: [#1147](https://github.com/liferay/clay/issues/1147) Subnav Tbar Primary changed `.component-link` color to have more contrast and added `.subnav-tbar-primary.subnav-tbar-disabled` colors
* ClayCSS: [#1105](https://github.com/liferay/clay/issues/1105) Tbar renamed `.subnav-tbar-inline-*-down` to `.tbar-inline-*-down`
* Fixes [#1105](https://github.com/liferay/clay/issues/1105) - ClayCSS: Mixin `clay-text-typography` and option to pass in display, max-width, and word-wrap properties

### v2.3.2 September 3, 2018

* No Clay CSS Changes

### v2.3.1 September 3, 2018

* ClayCSS: Fixes [#1125](https://github.com/liferay/clay/issues/1125) Atlas Forms changing individual border-widths for an input doesn't apply
* ClayCSS: [#1125](https://github.com/liferay/clay/issues/1125) Forms added option to configure `$input-border-style` and declare `border-style`, `border-color` separately so we can size borders individually
* ClayCSS: Fixes [#1123](https://github.com/liferay/clay/issues/1123) Use `map-merge` pattern for any Sass map variable with default values

### v2.3.0 August 28, 2018

* ClayCSS: Fixes [#1090](https://github.com/liferay/clay/issues/1090) Modal Variant Mixin `$footer-border-color` declared twice
* Update: Fixes [#1088](https://github.com/liferay/clay/issues/1088) List Group variables `$list-group-text-link` and `$list-group-subtext-link` should follow same pattern as `$list-group-title-link`
* ClayCSS: Fixes [#1085](https://github.com/liferay/clay/issues/1085) Use :hover :focus pseudo classes instead of Bootstraps mixin
* New: Fixes [#1083](https://github.com/liferay/clay/issues/1083) Custom Form added `$custom-control-indicator-checked-active-bg`, `$custom-control-indicator-checked-active-border-color`, `$custom-control-indicator-checked-disabled-bg`, `$custom-control-indicator-checked-disabled-border-color`, `$custom-radio-indicator-checked-disabled-border-color`
* Update: [#1083](https://github.com/liferay/clay/issues/1083) Custom Form deprecate old variable names `$custom-control-indicator-active-checked-bg`, `$custom-control-indicator-active-checked-border-color`, `$custom-control-indicator-disabled-checked-bg`, `$custom-control-indicator-disabled-checked-border-color`, `$custom-radio-indicator-disabled-checked-border-color` and map them to the new ones
* New Fixes [#1065](https://github.com/liferay/clay/issues/1065) Table added helpers `.table-cell-minw-50`, `.table-cell-minw-75`, `.table-cell-minw-100`, `.table-cell-minw-150`, `.table-cell-minw-200`, `.table-cell-minw-250`, `.table-cell-minw-300`, `.table-cell-minw-350`, `.table-cell-minw-400`, `.table-cell-ws-normal`, and `.table-cell-ws-nowrap` for customizing table columns
* New: [#1065](https://github.com/liferay/clay/issues/1065) Table added option to configure `$table-valign-top-body-cell-padding-top`, `$table-valign-bottom-body-cell-padding-bottom` and align `.quick-action-menu` to the top or bottom
* Update: Fixes [#1053](https://github.com/liferay/clay/issues/1053) Atlas Card box-shadow should match Lexicon card box shadow better

### v2.2.0 July 9, 2018

* New: [#1046](https://github.com/liferay/clay/issues/1046) Sheet added mixin `sheet-footer-btn-block` for creating block level buttons at specific breakpoints, added `.sheet-footer-btn-block-sm-down`, and option to configure Sass map `$sheet-footer-btn-block-sm-down`
* New: Fixes [#1046](https://github.com/liferay/clay/issues/1046) `.sheet` should have 1rem padding in mobile, added options to configure `$sheet-footer-margin-bottom-mobile`, `$sheet-footer-margin-left-mobile`, `$sheet-footer-margin-right-mobile`, `$sheet-footer-margin-top-mobile`
* Update: Fixes [#1044](https://github.com/liferay/clay/issues/1044) Atlas set Checkbox labels to be normal and semi bold on active
* New: [#1044](https://github.com/liferay/clay/issues/1044) Dropdown Menu added option to configure `$dropdown-link-font-weight`
* Update: Fixes [#1028](https://github.com/liferay/clay/issues/1028) Atlas Dropdown Menu box shadow value so it works better in IE11
* New: Fixes [#1029](https://github.com/liferay/clay/issues/1029) Table Autofit added `.table-cell-expand-small`, `.table-cell-expand-smaller`, and `.table-cell-expand-smallest` to help size columns better
* New: [#1020](https://github.com/liferay/clay/issues/1020) Table addd options to configure `$table-cell-expand-small-max-width`, `$table-cell-expand-small-width`, `$table-cell-expand-smaller-max-width`, `$table-cell-expand-smaller-width`, `$table-cell-expand-smallest-max-width`, `$table-cell-expand-smallest-width`

### v2.1.12 June 19, 2018

* New: Fixes [#1017](https://github.com/liferay/clay/issues/1017) Mixin `clay-menubar-vertical-variant` added option to configure `toggler-font-size-mobile` and set it to 14px for `.menubar-vertical-expand-md` and `.menubar-vertical-expand-lg`
* New: [#1017](https://github.com/liferay/clay/issues/1017)  Mixin `clay-menubar-expand` added option to configure `collapse-z-index-mobile` and set it to 499 (one less than navbar-collapse-absolute)
* New: Fixes [#1014](https://github.com/liferay/clay/issues/1014) Nav added `.nav-form` for properly spacing search bar like inputs with `.nav`
* New: [#1014](https://github.com/liferay/clay/issues/1014) Nav added options to configure `$nav-form-padding-bottom`, `$nav-form-padding-left`, `$nav-form-padding-right`, `$nav-form-padding-top`, `$nav-stacked-nav-form-padding-bottom`, `$nav-stacked-nav-form-padding-left`, `$nav-stacked-nav-form-padding-right`, `$nav-stacked-nav-form-padding-top`
* Update: Fixes [#1009](https://github.com/liferay/clay/issues/1009) Button remove `backface-visibility` workaround from #546
* Update: Fixes [#1007](https://github.com/liferay/clay/issues/1007) Sheet `.sheet-footer` should use `display: flex`

### v2.1.11 June 18, 2018

### v2.1.10 June 13, 2018

### v2.1.9 June 12, 2018

### v2.1.8 June 11, 2018

### v2.1.7 June 8, 2018

### v2.1.6 June 1, 2018

### v2.1.5 May 30, 2018

### v2.1.4 May 25, 2018

### v2.1.3 May 25, 2018

### v2.1.2 May 25, 2018

### v2.1.1 May 25, 2018

### v2.1.0 May 25, 2018

### v2.0.3 May 17, 2018

### v2.0.2 May 6, 2018

### v2.0.1 May 3, 2018

### v2.0.0 April 26,
