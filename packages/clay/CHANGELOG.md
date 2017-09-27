### v2.0.0-alpha.9 September 27, 2017

* Breaking: Sidebar removed `$sidebar-padding`, list out padding properties individually
* Breaking: Sidebar removed `$sidebar-dark-bg`, `$sidebar-dark-border-color`, `$sidebar-dark-color`, `$sidebar-dark-panel-bg`, `$sidebar-dark-actions-link-color`, `$sidebar-dark-actions-link-hover-color`, `$sidebar-dark-header-title-color`, `$sidebar-dark-header-title-hover-color`, `$sidebar-dark-link-color`, `$sidebar-dark-link-hover-color`, `$sidebar-dark-list-item-border-color`
* Breaking: Sidebar removed `.sidebar-dark` and `.sidebar-dark-bg` variant
* Breaking: Sidebar removed `$sidebar-light-bg`, `$sidebar-light-border-color`, `$sidebar-light-color`, `$sidebar-light-panel-bg`, `$sidebar-light-actions-link-color`, `$sidebar-light-actions-link-hover-color`, `$sidebar-light-header-title-color`, `$sidebar-light-header-title-hover-color`, `$sidebar-light-link-color`, `$sidebar-light-link-hover-color`, `$sidebar-light-list-item-border-color`, use Sass map `$sidebar-light` instead
* Breaking: Sidebar removed `$sidebar-link-color`, `$sidebar-link-hover-color`, `.sidebar-link` colors should be handled by sidebar variants
* Breaking: Sidebar removed `.sidebar-panel` use aspect-ratio's instead
* Breaking: Sidebar remove font-size on `.sidebar-body` and set font weight to 500 for `.sidebar-subtitle`
* Breaking: Sidebar rename `.sidebar-section-d-flex` to `.sidebar-section-flex` to match naming pattern used in list-group
* Breaking: Renamed `$nav-link-monospaced-size` to `$nav-item-monospaced-size` and added `$nav-btn-margin-x`, `$nav-btn-margin-y`
* Breaking: Utilities add  `!important` to utility classes `.rounded`, `.rounded-circle`, `.rounded-0` to win over BS4 utils
* Breaking: Form Check Card to follow new `.custom-control` markup
* Breaking: Normalize `.custom-control` markup to match `.form-check`
* Breaking: Input Group removed old `.help-icon` styles
* Breaking: Navbar removed `$navbar-size` and created a base navbar that custom navbars should extend from
* Breaking: Navbar removed mixin `navbar-overlay` and include it in mixin `navbar-size`
* Breaking: Navbars shouldn't use scale-component mixin, should scale based on expand breakpoint
* Breaking: Navbar Toggler Link should scale based on navbar height
* Breaking: Navbar `.navbar-toggler` to size based on navbar-height
* Breaking: Navbar remove extra `.navbar .container` style overwrite, should be done with `.navbar-expand-*`
* Breaking: Navbar redo `.navbar-brand` sizing to work with BS4 `.navbar` and `.navbar-expand`
* Breaking: Navbar comment out `scale-component` mixin, should use breakpoints for resizing instead
* Breaking: Update Bootstrap 4 to d1b3c0c
* Breaking: Navbar rename `.navbar-d-breakpoint-*` to `.navbar-breakpoint-d-*`
* Breaking: Navbar removed `.collapse-basic-search`, `.basic-search` styles
* Breaking: Navbar removed `$zindex-basic-search-close`
* Breaking: Navbar removed `$collapse-basic-search-transparent-light-btn-color`, `$collapse-basic-search-transparent-light-btn-focus-color`, `$collapse-basic-search-transparent-light-input-color`, `$collapse-basic-search-transparent-light-input-focus-color`, `$collapse-basic-search-transparent-light-input-placeholder-color`, `$collapse-basic-search-transparent-light-input-placeholder-focus-color`, `$collapse-basic-search-transparent-light-focus-highlight`, `$collapse-basic-search-transparent-inverse-btn-color`, `$collapse-basic-search-transparent-inverse-btn-focus-color`, `$collapse-basic-search-transparent-inverse-input-color`, `$collapse-basic-search-transparent-inverse-input-focus-color`, `$collapse-basic-search-transparent-inverse-input-placeholder-color`, `$collapse-basic-search-transparent-inverse-input-placeholder-focus-color`, `$collapse-basic-search-transparent-inverse-focus-highlight`
* Breaking: Navbar removed `.collapse-basic-search-transparent`
* Breaking: Update Bootstrap 4 to d3d0658
* Breaking: Removed `.multi-step-bar` use `.subnav` instead
* Breaking: Multi Step Bar removed `$multi-step-bar-bg`, `$multi-step-bar-border-radius`, `$multi-step-bar-color`, `$multi-step-bar-font-size`, `$multi-step-bar-height`, `$multi-step-bar-margin-bottom`, `$multi-step-bar-padding`
* New: Navbar use navbar-variant mixin for creating color variants and added Sass maps `$navbar-light`, `$navbar-dark`, `$navbar-primary` for color settings
* New: Navbar created `navbar-variant` mixin for creating navbar color variants
* New: Sidebar Variant mixin added option to configure `.sidebar-subtitle`, `.sidebar-caption`, `.sidebar-dt`, `.sidebar-dd` colors
* New: Sidebar added `sidebar-variant($map)` mixin
* New: Sidebar added option to configure `$sidebar-list-font-size`
* New: Badge added mixin `badge-size($size)` to help set badge sizes, and updated components using badge mixins to use badge-size mixin
* New: Stickers added mixin `sticker-size($size)` to help set sticker sizes, and updated components using sticker mixins to use sticker-size mixin
* New: Labels added mixin `label-size($size)` to help set label sizes, and updated components using label mixins to use label-size mixin
* New: Sidebar added option to configure `$sidebar-list-item-border-bottom-width`, `$sidebar-list-item-border-left-width`, `$sidebar-list-item-border-right-width`, `$sidebar-list-item-border-top-width`, `$sidebar-list-item-flex-col-padding-x`, `$sidebar-list-item-flex-col-padding-y`, `$sidebar-light-list-item-border-color`, `$sidebar-dark-list-item-border-color` and added `.sidebar-list` and `.sidebar-list-item`
* New: Sidebar added `$sidebar-panel-margin-bottom` and re-add `.sidebar-panel` styles
* New: Sidebar added option to configure `$sidebar-dt-margin-bottom`, `$sidebar-dd-margin-bottom`, remove styles for `.sidebar .navbar`, and add comments to sections
* New: Sidebar added option to configure `$sidebar-dt-font-size`, `$sidebar-dt-font-weight`, `$sidebar-dt-text-transform`, `$sidebar-dd-font-size`, `$sidebar-dd-font-weight`, `$sidebar-dd-text-transform`
* New: Sidebar added option to configure `$sidebar-caption-font-size`, `$sidebar-caption-font-weight`, `$sidebar-caption-text-transform`
* New: Sidebar added option to configure `$sidebar-subtitle-font-size`, `$sidebar-subtitle-font-weight`, `$sidebar-subtitle-text-transform`
* New: Sidebar added option to configure `$sidebar-title-font-size`, `$sidebar-title-font-weight`
* New: Added `.nav-unstyled`
* New: Navigation Bar variables
* New: Navigation Bar component and add `$management-bar-size`
* New: Subnav component
* New: Navbar added `.navbar-primary-bg` and option to configure`$navbar-primary-bg`, `$navbar-primary-border-color`, `$navbar-primary-active-bg`, `$navbar-primary-hover-bg`, `$navbar-primary-disabled-bg`, `$navbar-primary-active-highlight`, `$navbar-primary-brand-bg`, `$navbar-primary-brand-hover-bg`, `$navbar-primary-brand-color`, `$navbar-primary-brand-hover-color`
* New: Input Group Inset add option to configure `$input-group-inset-item-color`
* New: Nav Tabs added option to configure `$nav-underline-font-size`, `$nav-tabs-font-size`
* New: Nav Tabs added option to configure `$nav-tabs-link-padding-x`, `$nav-tabs-link-padding-y`, `$nav-underline-link-padding-x`, `$nav-underline-link-padding-y`
* New: Nav Tabs added option to configure `$nav-tabs-link-dropdown-item-indicator-width`, `$nav-tabs-link-dropdown-item-indicator-active-icon`
* New: Nav Tabs added option to configure `$nav-tabs-link-color` and reorganize nav variables
* New: Added Nav Underline Dropdowns with indicators
* Update: Closes #372 Modal final opacity and bg-color
* Update: Closes #373 Add build:rtl task for easily checking if compiled css is parsable by r2
* Update: Navbar Size mixin add option to disable sizes
* Update: Navbar Variant mixin added option to disable styles from being output
* Update: Global Functions setter to work with true and false values
* Update: Atlas Sidebar Light colors
* Update: Box Shadow mixin shouldn't output shadow property if value is null
* Update: Sidebar actions should be vertically aligned to the rest of the content
* Update: Sidebar add `line-height: normal` to `.sidebar-title` and `.sidebar-subtitle` to prevent text being cut off with h# tags, BS4 bug
* Update: Sidebar don't use label-size mixin, use helper classes to size labels instead
* Update: Management Bar and Navigation Bar spacing
* Update: Navbar don't need to update `.nav-btn-monospaced` spacing already covered by `.nav-btn`
* Update: Navbar should use same markup pattern as navs for buttons and links
* Update: Management Bar styles should win over nav and navbar
* Update: Nav add support for buttons inside nav-item
* Update: Input Groups support `.custom-control` and `.form-check`
* Update: Form Check should align with first line with long labels that wrap
* Update: List Group with `.form-check` or `.custom-control` should be aligned properly
* Update: Tables with `.custom-control` should work
* Update: Navbar with `.custom-control` should work
* Update: Input Group Lg should set font-size for `input-group-inset`
* Update: Forms set input-font-size-lg and input-font-size-sm
* Update: Input Group Inset should size with input-group-lg, input-group-sm
* Update: Tweak Navigation Bar padding
* Update: Navbar add option to configure active-border-offset-x
* Update: Atlas Navbar Highlight colors
* Update: Navbar mixin add option to configure dropdown-item-padding in navbar-collapse in mobile
* Update: Navbar dropdown-menu in navbar-collapse should have no margin or padding
* Update: Navbar `.navbar-collapse-absolute` should use custom navbar padding
* Update: Navbar Overlay should work with Base Navbar
* Update: Navbar mixin size form-control and clean up some code
* Update: Navbar mixin size `.nav-btn`
* Update: Navbar position and size `.nav-btn`
* Update: Base Navbar Highlight colors
* Update: Navbar collapse use max-width so text is truncated in FF
* Update: Navbar Variant dropdown-menu styles should be even more specific
* Update: Management Bar containers should wrap
* Update: Navbar clean up navbar-size mixin
* Update: Navbar Size mixin map desktop size variables to mobile size
* Update: Navbar improve spacing of `.navbar-brand` and `.navbar-toggle`
* Update: Navbar Variants scope dropdown colors to navbar collapse
* Update: Navbar `.navbar-text-truncate` should work in all navbar forms
* Update: Navbar forgot to account for `.navbar-nav` inside `.navbar-collapse` without `.navbar-expand-*`
* Update: Navbar only undo `.dropdown-menu` styles when inside `.navbar-collapse`
* Update: Navbar `.navbar-nav` should have `flex-direction: column` only inside `.navbar-collapse`
* Update: Navbar normalize containers used in `.navbar`
* Update: `.navbar-expand-*` should `justify-content: space-between`
* Update: Re-add Management bar component
* Update: Navbar added option to configure `$container-padding-x` and `$container-padding-x-mobile`
* Update: Navbar Form spacing at all breakpoints
* Update: Navbar Brand should calculate padding based on navbar-height
* Update: Navbar properly space `.nav-link` inside `.navbar-collapse`
* Update: Navbar move out max-width stuff for `.navbar-toggler-link` and `.navbar-brand` from `.navbar-expand`
* Update: Fixes #357 - Consolidates z-index variables from individual components to _global variables
* Update: Atlas custom-control-description line-height
* Update: Navbar Form Inline shouldn't have margin-bottom at small screen sizes
* Update: Navbar style dropdown-menu's in mobile
* Update: Forms `.form-text` should be properly spaced when used after a `label`
* Update: Input Group Transparent `.btn-link` should have no borders
* Update: Input Group Transparent add `.input-group-btn` support
* Update: Nav Tabs make active dropdown indicator smaller
* Update: Move `.nav-underline` scss under `.nav-tabs` and `.nav-underline` with show should have active styles
* Site: Remove classes `.navbar-*-bg` there is only one class for color variants now
* Site: Sidebar update markup to Clay V2 and remove `.sidebar-dark` example
* Site: Nav Unstyled docs
* Site: Nav Underline add demo of Nav Underline with Tabs using only buttons
* Site: Nav added all the different button and link combinations...Faro
* Site: Nav Tabs add demo of tabs using only buttons
* Site: Management Bar and Navigation Bar to use new button and link markup for nav-items
* Site: Input Groups, List Groups, Management Bar, Navigation Bar, Tables demos to use Custom Controls
* Site: Card, Dropdown, Form Validation pages Custom Control markup to match Form Check
* Site: Custom Control markup to match Form Check
* Site: Dropdown use input-group-sm for input-group in dropdown
* Site: Added Navigation Bar page
* Site: Navbar remove Navbar Simple demo
* Site: Management Bar updated markup with `.nav-btn` examples
* Site: Management Bar update examples with container-fluid-max-xl
* Site: Navbars add new patterns and remove some v1 patterns
* Site: Navbar update docs for `.navbar-breakpoint-d-*` and `.navbar-breakpoint-down-d-*`
* Site: Navbar remove references to `.collapse-basic-search` and `.basic-search`
* Site: Navbar removed all references to `.collapse-basic-search-transparent`
* Site: Multi Step Nav page point to subnav page for Multi Step Nav Simplified
* Site: Subnav page
* Site: Rename _nav_underline.html to nav_underline.html
* Site: Navbar fix some dropdown markup
* Site: Management Bar add primary demo
* Site: Management Bar demos update Search bar to use `.btn-unstyled`
* Site: Input Group add example with label and form-text
* Site: Input Group Transparent add example with `.btn`
* Site: Nav Tabs update demos to have dropdown-item-indicator
* Site: Move Nav Underline to its own page

### v2.0.0-alpha.8 - September 1, 2017
* New: Global Functions added `setter($var, $val)` for setting default sass variable values
* New: Added `.multi-step-bar` and options to configure `$multi-step-bar-bg`, `$multi-step-bar-border-radius`, `$multi-step-bar-color`, `$multi-step-bar-font-size`, `$multi-step-bar-height`, `$multi-step-bar-margin-bottom`, `$multi-step-bar-padding`
* New: Globals readd `$font-family-serif` from BS3
* New: Typography added `.section-header` and option to configure `$section-header-border-color`, `$section-header-border-style`, `$section-header-border-width`, `$section-header-color`, `$section-header-font-size`, `$section-header-font-weight`, `$section-header-line-height`, `$section-header-margin-bottom`, `$section-header-padding`, `$section-header-text-transform`
* New: Nav Tabs added option to configure `$nav-tabs-tab-pane-bg`, `$nav-tabs-tab-pane-border-radius`, `$nav-tabs-tab-pane-padding`
* Breaking: Update Bootstrap 4 to e0c95f8, Bootstrap requires jQuery3
* Breaking: (Fixes #365) btn-action is definitely dropped
* Breaking: Navbar move `$navbar-height`, `$navbar-border-bottom-width`, `$navbar-border-left-width`, `$navbar-border-right-width`, `$navbar-border-top-width`, `$navbar-border-width`, `$navbar-font-size`, `$navbar-link-padding-x`, `$navbar-link-padding-y`, `$navbar-active-border-bottom-width`, `$navbar-toggler-height`, `$navbar-toggler-margin-x`, `$navbar-toggler-margin-y`, `$navbar-toggler-link-font-size`, `$navbar-toggler-link-height`, `$navbar-toggler-link-line-height`, `$navbar-toggler-link-padding-x`, `$navbar-toggler-link-padding-y`, `$navbar-brand-margin-right`, `$navbar-brand-padding-x`, `$navbar-height-mobile`, `$navbar-font-size-mobile`, `$navbar-link-padding-x-mobile`, `$navbar-link-padding-y-mobile`, `$navbar-brand-font-size-mobile`, `$navbar-brand-margin-right-mobile`, `$navbar-brand-padding-x-mobile`, `$navbar-brand-padding-y-mobile`, `$navbar-toggler-margin-x-mobile`, `$navbar-toggler-link-font-size-mobile`, `$navbar-toggler-link-padding-x-mobile`, `$navbar-toggler-link-padding-y-mobile`, `$navbar-nav-item-dropdown-margin-top`, to `$navbar-size` Sass map
* Breaking: Typography removed Blockquote Variants
* Breaking: Typography removed `.monospace` and `.sans-serif` helper classes
* Breaking: (Fixes #361) Toggle card is definitely dropped
* Breaking: Breadcrumb vertical/stacked is definitely dropped
* Update: Popper.js to 1.12.3
* Update: Navbar added helper class `.navbar-d-breakpoint-inline-block`
* Update: Atlas Navbar Sizes
* Update: Navbar Size mixin brand-padding-x should inherit from link-padding-x
* Update: Navbar moved sizing to navbar-size mixin
* Update: Create `navbar-size($map)` mixin to help size navbars
* Update: Nav Underline `.active.dropdown-toggle.nav-link` should be highlighted
* Update: `$enable-scaling-navbar` should inherit value from `$enable-scaling-components`
* Update: Navbar always set font size and added `$enable-scaling-navbar`
* Update: Scaling components mixin to accept boolean value
* Update: Navbar fix `.form-check` inside navbar
* Update: Clay Base Navbar light and dark bg colors
* Update: Dropdown dropdown-toggle should remove focus styles on `button` element when shown
* Update: Multi Step Nav add buttons as link support
* Update: Atlas Nav Tabs colors to Lexicon 2 first pass
* Update: `.nav-tabs .nav-link.active` border-color should be more customizable
* Fix: Panels variables missing semicolon
* Fix: Navs variables missing semicolon
* Fix: Alerts missing semicolon and default flag
* Site: Change jQuery version to 3.2.1, Bootstrap 4 requires jQuery 3
* Site: Recover menu-icon functionality, Add margin-top to page title
* Site: Navbar docs mention new `.navbar-d-breakpoint-{inline-block|flex}` and `.navbar-d-breakpoint-down-none`
* Site: Update Management Bar content to Clay 2
* Site: Multi Step Nav add examples of buttons as links
* Site: Typography display different font styles
* Site: Add examples of `.section-header`
* Site: Use BS4 blockquotes
* Site: Clean up unused styles from removed pages
* Site: Typography update markup to Clay 2

### v2.0.0-alpha.7 - August 28, 2017
* New: Badges added `$badge-link-color` because `$badge-color` was removed from BS4
* New: Table added `$table-divider-bg`
* New: Table added `$table-divider-color`
* New: Table added `.table-divider` and option to configure `$table-divider-font-weight`, `$table-divider-font-size`, `$table-divider-padding`, `$table-divider-text-transform`
* New: Table List added `$table-list-border-color`, `$table-list-border-width`, `$table-list-border-radius` and added borders to `.table-list`
* New: Table List added `$table-list-bg`, `$table-list-accent-bg`, `$table-list-hover-bg`, `$table-list-active-bg`, removed styles related to Chrome rendering issue with responsive-tables (bug is fixed)
* New: Table List added option to configure borders on `.table-list` through  `$table-list-row-box-shadow`, `$table-list-row-hover-box-shadow`, `$table-list-row-active-box-shadow`
* New: Dropdown added `.dropdown-menu-unstyled`, and added option to configure `$dropdown-unstyled-link-color`, `$dropdown-unstyled-link-hover-color`
* New: Dropdown Action added `.show-dropdown-action-on-active` to display dropdown-menu's when a component item is selected
* New: List Group added `$list-group-subtitle-active-color`, `$list-group-title-active-color` and vertically center `.list-group-item`
* New: List Group added `$list-group-header-title-margin-bottom` and set `$list-group-header-title-font-size` to 1rem
* New: List Group added option to configure `$list-group-subtitle-text-decoration`, `$list-group-subtitle-hover-color`, `$list-group-subtitle-hover-text-decoration`
* New: List Group added option to configure `$list-group-subtitle-margin-bottom`$list-group-title-color`, `$list-group-title-font-size`, `$list-group-title-font-weight`, `$list-group-title-margin-bottom`, `$list-group-title-line-height`, `$list-group-title-text-decoration`, `$list-group-title-hover-color`, `$list-group-title-hover-text-decoration`
* Breaking: Remove Font Awesome
* Breaking: Rename `lexicon-base-variables.scss`, `lexicon-base.scss` to `base-variables.scss`, `base.scss` respectively
* Breaking: Rename _lexicon.scss to _components.scss
* Breaking: Removed main.scss from Base and import files individually
* Breaking: Move Base components to components directory
* Breaking: Atlas remove /atlas/main.scss, use only one main.scss file
* Breaking: Remove _mixins.scss from Atlas, this file is unused
* Breaking: Move Lexicon Base to root scss directory
* Breaking: Rename Atlas Theme to Atlas
* Breaking: Multi Step Nav renamed `$multi-step-divider-margin-top` to `$multi-step-divider-top`, added `$multi-step-title-font-size`, and fix multi step nav positions broken by last commit
* Breaking: Multi Step Nav removed `$multi-step-indicator-bg` and fix bug where the divider is hidden under a postion relative parent
* Breaking: Update Bootstrap 4 to 4571ab0
* Breaking: Table removed `$table-list-row-height`
* Breaking: Table removed `$table-list-row-active-border-bottom-width`, `$table-list-row-active-border-color`, `$table-list-row-border-bottom-width`, `$table-list-row-border-color`, `$table-list-row-box-shadow`, `$table-list-row-hover-box-shadow`, `$table-list-row-active-box-shadow`
* Breaking: Table removed `$table-list-head-border-bottom-width`
* Breaking: Table renamed `$table-list-header-bg`, `$table-list-header-border-bottom-width`, `$table-list-header-font-size`, `$table-list-header-font-weight`, `$table-list-header-min-height`, `$table-list-header-vertical-alignment`, to `$table-list-head-bg`, `$table-list-head-border-bottom-width`, `$table-list-head-font-size`, `$table-list-head-font-weight`, `$table-list-head-height`, `$table-list-head-vertical-alignment`
* Breaking: Table renamed `$table-header-color`, `$table-header-font-size`, `$table-header-font-weight`, `$table-header-min-height` to `$table-head-color`, `$table-head-font-size`, `$table-head-font-weight`, `$table-head-height`
* Breaking: Table remove unused variable `$table-list-content-height`
* Breaking: List Group remove some list-group-item.active variant overwrites
* Breaking: List Group removed `$list-group-dropdown-toggle-color`, `$list-group-dropdown-toggle-hover-color`, `$list-group-dropdown-toggle-active-color` handled by `.dropdown-action`
* Breaking: List Group rename `$list-group-header-color`, `$list-group-header-font-size`, `$list-group-header-font-weight`, `$list-group-header-text-transform` to `$list-group-header-title-color`, `$list-group-header-title-font-size`, `$list-group-header-title-font-weight`, `$list-group-header-title-text-transform` and add `.list-group-header-title`
* Breaking: List Group removed option to configure `$list-group-subtitle-text-transform` and start updating Atlas List Group styles to Clay V2
* Update: Prefix Sass partial imports with an underscore to make it easier to understand which file it's importing
* Update: Toggle Card colors to use Clay V2 colors
* Update: Timeline Icon border color to match Clay V2 colors
* Update: Panel single collapsed panel header shouldn't have rounded bottom borders while collapsing
* Update: Panel single collapsed `.panel-header` in `.panel-group` should have rounded corners
* Update: Dropdown Item disabled `.btn-link` and `.btn-unstyled` should have opacity 1
* Update: Dropdown Item add support for `.btn-link` and `.btn-unstyled`
* Update: Cards scope `.btn-link` styles to `.card-link`
* Update: Tables remove generating responsive table sizes, added by BS4
* Update: Atlas Table styles to Clay V2
* Update: Table List single th or td should have borders
* Update: Table List tweak borders
* Update: Table List added styles for `.dropdown-action .dropdown-menu-horizontal`
* Update: Dropdown Positions reset will-change property
* Update: Dropdown Unstyled should have no borders
* Update: Add `.table-active` to `.show-dropdown-action-on-active`
* Update: List Group style `.dropdown-action .dropdown-horizontal` normal and active states
* Update: Utilities add positon relative to `.flex-col`
* Update: Dropdown Horizontal shouldn't have a min-width
* Update: Lexicon Base Labels should have white background
* Update: List Group set Sticker size to lg and Label size to sm
* Update: Sticker Secondary colors to white and #6B6C7E
* Misc: Update release task to build proper files after file restructuring
* Site: Remove old docs pages Blogs Action, Blogs Appearance, Documents and Media, Best Practices, Extending Cards, Extending List Groups, Form Examples
* Site: Remove documentation relating to Font Awesome
* Site: Site Config replace FA icon with SVG
* Site: Remove Font Awesome imports
* Site: Use atlas-variables import instead of invididually importing
* Site: Use base.scss and base-variables.scss
* Site: Renamed _lexicon.scss to _components.scss
* Site: Import Base files individually
* Site: Use one main.scss file
* Site: Change paths for Lexicon Base Files
* Site: Move Site related scss into site directory
* Site: Demos use {{rootPath}} instead of relative path
* Site: Prefix site related css with `site-`
* Site: Remove code hljs code highlighting
* Site: Toggle Switch wrap examples in `.clay-site-form-container`
* Site: Toggle Card wrap examples in `.clay-site-form-container`
* Site: Panels and Timelines update accordion heading markup
* Site: Form Elements use `.clay-site-form-container` to display form elements
* Site: Dropdown include some examples of `.dropdown-item` with `button`, `.btn-link`, and `.btn-unstyled`
* Site: Multi Step Nav reordered `.multi-step-divider` and  added `.clay-site-form-container` for displaying form related compnents
* Site: Popover / Tooltips swap order and remove extra spacing
* Site: Table move table-responsive to table element and remove some spacing
* Site: Tables to Clay 2 markup
* Site: Nav Tabs update aria attributes
* Site: Panel clean up markup
* Site: Update Nav to use SVG Icons
* Site: Update Nav pills aria attributes and icons to svg
* Site: Lexicon Icons update layout markup to match other pages
* Site: Form Validation added for attribute on labels
* Site: Form Elements keep markup consistent with claycss.com
* Site: Form Custom keep markup consistent with claycss.com
* Site: Form Input Groups keep markup consistent with claycss.com
* Site: List Group update markup with `.show-dropdown-action-on-active` and `.dropdown-menu-unstyled`
* Site: Test Assorted remove `.header-toolbar` and `.nav` examples and add `.list-group`
* Site: List Group update markup to follow Clay V2 pattern

### v2.0.0-alpha.6 - August 17, 2017
* New: Popover added option to configure `$popover-inline-scroller-max-height` and update Atlas Popover styles to V2
* New: Popover added option to configure `$popover-header-font-weight`
* New: Form Validation added option to configure `$form-feedback-font-weight`, `$form-text-color`, `$form-text-font-weight`, update `.form-text` styles
* New: Custom Checkbox and Radio added option to configure `$custom-control-indicator-active-checked-bg`, `$custom-control-indicator-active-checked-border-color`
* New: Modal added option to configure `$modal-title-font-size-mobile`
* New: Button added `.btn-unstyled` for "semantic" markup
* New: Modal added option to configure `$modal-header-close-font-size`
* New: Panel add option to configure `$panel-collapse-icon-font-size`
* New: Panel added `$panel-title-text-transform`, add background-color and border-radius styles to `.panel-group`
* Breaking: Form Validation rename `.form-control-feedback` to `.form-feedback`, rename `$form-control-feedback-font-size` to `$form-feedback-font-size`, and reorganize selectors
* Breaking: Update Bootstrap 4 to 7b873fa0
* Breaking: Remove all references to `.form-control-label` was removed by BS4 use `label` instead
* Breaking: Modal removed `h1`-`h6` font overrides, use classes `.h1`-`.h6` if heading font sizes are really needed
* Breaking: Modal removed `$modal-header-close-opacity-modifier` and renamed `$modal-header-close-color`, `$modal-header-close-font-size`, `$modal-header-close-icon-opacity`, `$modal-header-close-lexicon-icon-opacity` to `$modal-btn-monospaced-color`, `$modal-btn-monospaced-font-size`, `$modal-btn-monospaced-opacity` respectively
* Breaking: Modal removed `.modal-primary-action-button`
* Breaking: Modal removed `.modal-inverse` and convert modal variant colors to Sass map `$modal-palette`
* Update: Fix misaligned `.form-check-input` from 1bb5440
* Update: Atlas Tooltip to Clay V2 styles
* Update: Atlas Pagination active colors
* Update: Form properly align `.form-check-input` after BS4 beta update
* Update: Form Validation `.invalid-feedback` and `.valid-feedback` fonts should match `.form-feedback`
* Update: Form `.form-group` and `.form-inline-group` shoud be `position: relative` for better positioning of content inside
* Update: Alert, Badge, Button, Label, Progress, Sticker to use BS4 map-merge pattern for color palettes
* Update: Alert use BS4 map-merge pattern for `$alert-palette`
* Update: Form Validation set Atlas colors, re-add `.has-success`, `.has-warning`, `.has-error`, and added `.form-feedback`, `.form-feedback-item`, `.form-feedback-indicator`
* Update: Form Inline Autofit should always be aligned flex-start
* Update: Form Check Card added hover states and more style updates to card-type-asset / card-type-directory
* Update: Button Monospaced Lexicon Icon's should be centered
* Update: Sticker Lexicon Icon's should be centered
* Update: Lexicon Icon offset vertical spacing for inline block
* Update: Sticker move sticker sizes to mixins for easier overrides
* Update: Badge move badge sizes to mixins for easier overrides
* Update: Label move label sizes to mixins for easier overrides
* Update: Badges padding-y for all badge sizes
* Update: Sticker adjust font sizes for `.sticker-lg` and above
* Update: Dropdown simplify `.dropdown-action` styles
* Update: Button mixin `component-btn-link` with `cursor: pointer`
* Update: Breadcrumb added `.breadcrumb-link` for easier styling, use `breadcrumb-link btn btn-unstyled` to style buttons like links in breadcrumb
* Update: Btn Unstyled should inherit line-height
* Update: Modal re-add `$modal-header-height`, `$modal-header-height-mobile`, `$modal-footer-height`, `$modal-footer-height-mobile`
* Update: Atlas Modal clean up some un-needed variables and update sizing and colors
* Update: Button Monospaced should center content
* Update: Atlas Modal to Clay V2 colors
* Update: Modal use BS4 map-merge pattern for `$modal-palette` and reorganize variables
* Update: Progress Bar Lg should be proper height after BS4 beta update
* Update: Atlas Panel styles to Clay V2
* Update: Panel Group middle panels shouldn't have border-radius and headers and footers should have border-radius when border is 0
* Site: Popover added `.inline-scroller` to demos for overflowing content
* Site: Grid add link to BS4 grid documentation
* Site: Input Group change input-group-inset demo to use `.btn-unstyled` instead of `.btn-link`
* Site: Form Custom removed validation examples, they are under Form Validation
* Site: Forms update `.form-check-inline` markup
* Site: Form Validation add more examples HTML5 and non HTML5
* Site: Form Validation change `.has-danger` to `.has-error` and added `.form-feedback-*` to examples
* Site: Remove all references to `.form-control-label`
* Site: Form Validation add BS4 pattern
* Site: Card update card-type-asset and card-type-directory examples
* Site: Badge add examples with numbers
* Site: Dropdown Action to use `.btn-unstyled`
* Site: Breadcrumb add `.breadcrumb-link` and `.btn-unstyled` to examples
* Site: Alert added example of `.btn-unstyled`
* Site: Button added demo of `.btn-unstyled`
* Site: Modal update markup to new `.btn-monospaced`, remove btn classes from `.close`
* Site: Modal change markup to fit Clay V2

### v2.0.0-alpha.5 - August 11, 2017
* New: Alert added `$alert-close-font-size`, `$alert-close-line-height` and `.alert .close` should be properly aligned after icon size update
* New: Create mixin clay-position to handle positioning items
* New: Added background mixin bg-checkered($fg-color, $bg-color)
* New: Card added `$card-type-directory-sticker-size`
* New: Card added `$card-type-asset-label-size`
* New: Card added `$card-title-color`, `$card-title-font-size`, `$card-title-font-weight`, `$card-title-margin-bottom`, `$card-title-margin-top`
* New: Card added `$card-subtitle-color`, `$card-subtitle-font-size`, `$card-subtitle-font-weight`, `$card-subtitle-margin-bottom`, `$card-subtitle-margin-top`
* New: Card added `.card-type-asset` and `.card-type-directory` variants
* New: Dropdown added `$dropdown-action-toggle-color`, `$dropdown-action-toggle-hover-color`, and added component `.dropdown-action`
* New: Card added `$form-check-card-checked-box-shadow`
* New: Card added `$card-link-text-decoration` and `$card-link-hover-text-decoration`
* New: Card added `$card-link-hover-color`
* New: Input Group added skin `.input-group-secondary` and added `$input-group-secondary-addon-bg`, `$input-group-secondary-addon-border-* color`, `$input-group-secondary-addon-border-width`
* Breaking: BS4 renamed `$dropdown-margin-top` to `$dropdown-spacer`
* Breaking: Update Bootstrap 4 to beta
* Breaking: Remove selectors that reference glyphicon and font awesome
* Breaking: Icons remove %scale-lexicon-icon
* Breaking: Icons renamed `$lexicon-icon-lg-size`, `$lexicon-icon-md-size`, `$lexicon-icon-sm-size` to `$lexicon-icon-xl-font-size`, `$lexicon-icon-lg-font-size`, `$lexicon-icon-sm-font-size` respectively and renamed `.lexicon-icon-md`, `.lexicon-icon-lg` to `.lexicon-icon-lg`, `.lexicon-icon-xl` respectively
* Breaking: Remove deprecated function calcLexiconIconPadding
* Breaking: Removed component Crop Img use Aspect Ratio instead
* Breaking: Rename _utilities.scss to _position.scss
* Breaking: Aspect Ratio Item positioning should only use 1 class name and use clay-position mixin
* Breaking: Move _global-functions.scss to lexicon-base/functions
* Breaking: Aspect Ratio moved `.aspect-ratio-* img` styles to `.aspect-ratio-item-*`
* Breaking: Input Group rename `$input-group-light-addon-bg`, `$input-group-light-addon-border-color`, `$input-group-light-addon-border-width`, `$input-group-light-addon-color` to `$input-group-transparent-addon-bg`, `$input-group-transparent-addon-border-color`, `$input-* group-transparent-addon-border-width`, `$input-group-transparent-addon-color` and rename `.input-group-light` to `.input-group-transparent`
* Breaking: Type rename `.truncate-text` to `.text-truncate`, was added by BS4
* Breaking: Management Bar remove files, use Navbar instead
* Breaking: Breadcrumb renamed `.breadcrumb-vertical` to `.breadcrumb-stacked`, renamed `$breadcrumb-vertical-divider` to `$breadcrumb-stacked-divider`, and added `$breadcrumb-stacked-divider-color`, `$breadcrumb-stacked-divider-svg-icon`, `$breadcrumb-stacked-divider-svg-icon-height`, `$breadcrumb-stacked-divider-svg-icon-width`, `$breadcrumb-stacked-divider-spacer-x`
* Breaking: Breadcrumb moved svg icon support to `.breadcrumb` and removed `.breadcrumb-horizontal`
* Breaking: Removed `$legend-border-color` no longer used in BS4
* Update: Remove work arounds fixed by BS4 beta
* Update: Sticker don't use inline-flex and don't need `.lexicon-icon` styles they scale with font size now
* Update: Clay SVG Icons should scale with font-size
* Update: Utilities added `.bg-checkered`
* Update: Aspect Ratio revert placeholders Sass extend too fragile
* Update: Card reverted `$card-type-directory-sticker-size` and `$card-type-asset-label-size` extending is too fragile
* Update: atlas-variables.scss and lexicon-base-variables.scss should also import Bootstrap and Lexicon Base mixins
* Update: atlas-variables.scss and lexicon-base-variables.scss should import Lexicon Base Variables
* Update: Aspect Ratio %aspect-ratio-center-middle should actually center content
* Update: Atlas Sticker Lg font size
* Update: Stickers move size styles to placeholder for extending
* Update: Badges and Labels move size styles to placeholder so they are easier to extend
* Update: Atlas Custom Control Indicator background-color should be white
* Update: Card adjust `.card-title` and `.card-subtitle` spacing and sizing
* Update: Card to Clay V2 styles and reorganize Base card variables
* Update: Dropdown Action button.dropdown-toggle should use component-btn-link mixin
* Update: Card added variants `.card-type-asset`, `.card-type-directory`, and moved margin bottom to `.form-check-card` from `.card`
* Update: Card remove -ms- browser prefix on transform, will be covered when autoprefixer is applied
* Update: Form Check Card should also support custom checkbox and radios
* Update: Base set Card Link colors
* Update: (Fixes #355) Progress Bar styles to Clay V2 and BS4 box-shadow mixin doesn't support null values
* Update: Badges and Labels demos with button.close
* Update: Badges and Labels use `button.close` for dismissible ones
* Update: Alert Close positions
* Update: Added mixin `component-btn-link` for resetting `.btn-link` styles in components
* Update: Button Link style as close as possible to normal link
* Update: Breadcrumb add support `.btn-link`
* Update: Button Link re-add focus and border-radius styles removed by BS4
* Update: Type removed `.text-*` and `bg-*` variant styles, covered by BS4
* Update: Breadcrumb don't need to define text-transform and font-weight for Clay V2 styles
* Update: Breadcrumb styles to Clay V2
* Update: Atlas Form readonly input colors to Clay V2
* Misc: Build and Release tasks should look in lexicon-base/functions when building SVG icons
* Site: Remove references to `.scale-lexicon-icon`
* Site: Crop Img deleted component
* Site: Card update aspect-ratios to new classes and add card types
* Site: Aspect Ratio demos to use new positional classes
* Site: Aspect Ratio update examples and docs with new classes
* Site: Separate Crop Img and Aspect Ratio from Images and Thumbnails
* Site: Card update with new card types
* Site: Dropdown add demo of `.dropdown-action` and update aria attributes
* Site: Utilities add documentation on how to display inline/float elements inside `.flex-col`
* Site: Breadcrumb add examples with `.btn-link`
* Site: Input Group add `.input-group-secondary` example and group input group size content together
* Site: Input Group rename `.input-group-light` to `.input-group-transparent`
* Site: Replace all instances of `truncate-text` with `text-truncate`
* Site: Breadcrumb remove `.breadcrumb-horizontal` and rename `.breadcrumb-vertical` to `.breadcrumb-stacked`

### v2.0.0-alpha.4 - August 4, 2017
* Breaking: Forms rename `$input-color-placeholder-focus`, `$input-border-color-disabled`, `$input-bg-disabled`, `$input-color-disabled`, `$input-color-placeholder-disabled`, `$input-opacity-disabled`, `$input-label-color-focus`, `$input-color-focus`, `$input-box-shadow-focus`, `$input-danger-bg-focus`, `$input-danger-border-color-focus`, `$input-danger-box-shadow-focus`, `$input-danger-color-focus`, `$input-success-bg-focus`, `$input-success-border-color-focus`, `$input-success-box-shadow-focus`, `$input-success-color-focus`, `$input-warning-bg-focus`, `$input-warning-border-color-focus`, `$input-warning-box-shadow-focus`, `$input-warning-color-focus` to `$input-placeholder-focus-color`, `$input-disabled-border-color`, `$input-disabled-bg`, `$input-disabled-color`, `$input-placeholder-disabled-color`, `$input-disabled-opacity`, `$input-label-focus-color`, `$input-focus-color`, `$input-focus-box-shadow`, `$input-danger-focus-bg`, `$input-danger-focus-border-color`, `$input-danger-focus-box-shadow`, `$input-danger-focus-color`, `$input-success-focus-bg`, `$input-success-focus-border-color`, `$input-success-focus-box-shadow`, `$input-success-focus-color`, `$input-warning-focus-bg`, `$input-warning-focus-border-color`, `$input-warning-focus-box-shadow`, `$input-warning-focus-color`
* Breaking: Button Group remove old split button dropdown styles and `.btn-monospaced` inside `.btn-group-sm` and `.btn-group-lg` should have no padding
* Breaking: Button Action rename `$btn-fixed-spacer-x`, `$btn-fixed-spacer-y` to `$btn-action-fixed-spacer-x`, `$btn-action-fixed-spacer-y`
* Breaking: Button Action restructure css and renamed  `.btn-bottom-left`, `.btn-bottom-right`, `.btn-top-left`, `.btn-top-right` to `.btn-action-bottom-left`, `.btn-action-bottom-right`, `.btn-action-top-left`, `.btn-action-top-right` respectively
* Breaking: Button Action removed `$btn-action-size`, `$btn-action-size-mobile` use `.btn-monospaced` instead
* Breaking: Button rename `$input-btn-font-size-*` to `$btn-font-size-*`
* Breaking: Alert rename `$alert-lead-margin-right` to `$alert-lead-spacer-x` and add spacing between lexicon-icon's and leads
* Breaking: Move `.rounded` border radius utilities to _utilities.scss
* Breaking: Sticker renamed `$sticker-gutter-width` to `$sticker-inside-offset`, added `$sticker-outside-offset`, `$sticker-outside-offset-sm`, `$sticker-outside-offset-lg`, and sticker sizes should be positioned better with `.sticker-outside`
* Breaking: Atlas globals removed `$box-shadow-default-*`
* Breaking: Remove global `$inverse-*` variables
* Breaking: Sidebar rename `.sidebar-inverse`, `.sidebar-inverse-bg` to `.sidebar-dark`, `.sidebar-dark-bg`
* Breaking: Sidebar rename `$sidebar-inverse-*-*` to `$sidebar-dark-*-*`
* Breaking: Dropdown rename `$dropdown-sub-header-*` to `$dropdown-subheader-*` and rename `.dropdown-sub-header` to `.dropdown-subheader` to keep inline with BS4 naming
* New: Form Select Element added `$input-select-icon-disabled-color`, `$input-select-icon-disabled`
* New: Form Label added option to configure `$input-label-disabled-color`
* New: Lexicon Icons autosize, custom-size, order-arrow, and pages-tree
* New: Dropdown added `$dropdown-link-active-font-weight`
* New: Button Toolbar added `$btn-toolbar-spacer-x`, `$btn-toolbar-spacer-y`
* New: Button added `.btn-monospaced` and options to configure `$btn-monospaced-size`, `$btn-monospaced-size-xl`, `$btn-monospaced-size-lg`, `$btn-monospaced-size-sm`, `$btn-monospaced-size-mobile`, `$btn-monospaced-size-xl-mobile`, `$btn-monospaced-size-lg-mobile`, `$btn-monospaced-size-sm-mobile`
* New: Label added `$label-anchor-text-decoration`, `$label-anchor-hover-text-decoration`
* New: Alert added `$alert-close-margin-left`
* New: List Group rename `.list-group-heading` to `.list-group-header` and add `.list-group-subtitle`
* New: List Group re-add `$list-group-header-bg`, `$list-group-header-color`, `$list-group-header-font-weight` and add `$list-group-header-font-size`, `$list-group-header-padding-x`, `$list-group-header-padding-y`, `$list-group-header-text-transform`, `$list-group-subtitle-color`, `$list-group-subtitle-font-size`, `$list-group-subtitle-font-weight`, `$list-group-subtitle-text-transform`
* New: Dropdown added `$dropdown-horizontal-min-height`
* New: Panel added `$panel-header-offset-border-radius`, `$panel-footer-offset-border-radius` to handle bleeding panel-header backgrounds over border
* Fix: Form Inline Autofit form-control overflowing in FF
* Update: Atlas Toggle Switch colors to Clay V2
* Update: Atlas Custom Forms to Clay V2 styles
* Update: Form styles to Clay V2
* Update: Forms don't output input font-sizes if global `$font-size-*` is the same as `$input-font-size-*`
* Update: Atlas Dropdown to Clay V2 styles
* Update: `.btn-group-lg` and `.btn-group-sm` styles should apply to nested `.btn-groups`
* Update: Button colors and sizes to Clay V2
* Update: Sticker sizes and colors to Clay V2
* Update: Atlas Label styles to match Clay V2
* Update: Atlas Badge to Clay V2 styles
* Update: Fixes(#356) More Atlas Alert to Clay V2 color updates
* Update: Atlas global theme colors to Clay V2 colors
* Update: Sticker with border radius utilities should apply to `.img-fluid`
* Update: Sticker font-size shouldn't inherit from Label component
* Update: Sticker use flexbox to center content, remove overflow: hidden, and add border-radius to `.img-fluid` inside `.sticker`
* Update: Timelines Atlas variables shouldn't rely on `$inverse-*` variables
* Update: Sidebar Atlas variables shouldn't rely on `$inverse-*` variables
* Update: Dropdown `.dropdown-subheader`'s should be vertically centered in `.dropdown-menu-horizontal`
* Update: List Group removed commented code
* Update: Atlas md and xl breakpoints for `.container` and `.container-fluid-max-*` to 800px and 1280px respectively
* Update: Dropdown Horizontal shouldn't have margin top
* Update: Lexicon Base Panel change info header color
* Update: Atlas Panels color to make it look like V1

### v2.0.0-alpha.3 - July 31, 2017
* Breaking: Dropdown removed `$dropdown-padding-bottom`, `$dropdown-padding-left`, `$dropdown-padding-right`, `$dropdown-padding-top`
* Breaking: Rename `$inline-scroller-height` to `$inline-scroller-max-height`
* Breaking: Revert `$dropdown-section-color` and `$dropdown-section-font-size` sometimes we don't want `.dropdown-section` styles to bleed into components nested inside
* Breaking: Breadcrumb move truncating text to `.breadcrumb-text-truncate`
* Breaking: Input Group Inset added `.input-group-inset-left` to align inset content on the left
* Breaking: Input Group removed `.input-group-insert` multiple addons and buttons are supported now
* Breaking: Forms renamed `$input-select-icon-color-focus` to `$input-select-icon-focus-color` and reverted `-select-focus-bg` to `$input-select-focus-bg` to follow BS4 naming pattern
* Breaking: Input Group removed `$input-group-constrain-line-height`, `$input-group-constrain-line-height-lg`, `$input-group-constrain-line-height-sm`
* Breaking: Input Groups should size with `$input-height`
* Breaking: Rename `.input-group-default` to `.input-group-light` and remove `.input-group-addon-content`
* Breaking: Removed Toolbar component
* Breaking: Consolidate Nav Tabs with Nav
* Breaking: Move BS4 grid in nav-tabs styles to Nav component and added `.nav-text-truncate`
* Breaking: Nav Tabs removed `.nav-tabs-scroll`
* Breaking: Nav Tabs removed `.nav-tabs-default`
* New: Dropdown added `$dropdown-alert-font-size`, `$dropdown-alert-line-height`, `$dropdown-alert-margin`, `$dropdown-alert-padding-x`, `$dropdown-alert-padding-y` and more spacing issues with alerts in dropdowns
* New: Alert added `.alert-fluid` and option to customize `$alert-fluid-border-width`
* New: Dropdown added `.dropdown-menu-indicator-start`, `.dropdown-menu-indicator-end`, `.dropdown-item-indicator`, and added options to configure `$dropdown-item-indicator-size`, `$dropdown-item-indicator-spacer-x`
* New: Dropdown added option to configure `$dropdown-inline-scroller-max-height`, `$dropdown-inline-scroller-max-height-mobile` and update dropdown sizes so it fits in mobile
* New: Dropdown added option to configure `$dropdown-header-padding-x`, `$dropdown-header-padding-y`
* New: Dropdown added `.dropdown-sub-header`, `.dropdown-caption`, and options to customize `$dropdown-sub-header-color`, `$dropdown-sub-header-font-size`, `$dropdown-sub-header-font-weight`, `$dropdown-sub-header-text-transform`, `$dropdown-caption-color`, `$dropdown-caption-font-size`, `$dropdown-caption-font-weight`
* New: Dropdown added `$dropdown-section-color`, `$dropdown-section-font-size`
* New: Breadcrumb added option to configure `$breadcrumb-text-truncate-icon-spacer-x`
* New: Breadcrumb added option to configure `$breadcrumb-text-truncate-max-width`, `$breadcrumb-text-truncate-max-width-mobile`
* New: Alert added `$alert-border-style` and split up border properties to allow for more granular control of styles through variables
* New: Input Group Constrain added option to configure `$input-group-constrain-max-width`, `$input-group-constrain-max-width-mobile`
* New: Forms added option to configure `$input-height-inner-mobile`, `$input-height-inner-lg-mobile`, `$input-height-inner-sm-mobile` and `.input-group` items should size with `$input-height`'s
* New: Input Group added option to configure `$input-group-addon-padding-*-*` and fix Input Group Sizing styles caused by BS4's use of extend
* New: Forms added option to configure `$input-padding-x-lg`, `$input-padding-y-lg`, `$input-padding-x-sm`, `$input-padding-y-sm`
* New: Lexicon Icons envelope-open and envelope-closed
* New: Added component `.nav-underline`
* New: Nav Tabs added option to configure `$nav-tabs-link-show-color`, `$nav-tabs-link-show-border-color`, removed `$nav-tabs-justified-link-border-color`, and renamed `$nav-tabs-active-link-color` to `$nav-tabs-link-active-color`
* Update: Atlas dropdown widths
* Update: Dropdown adjust spacing for alerts in dropdowns
* Update: Custom Control line-height should also apply to Lexicon Base
* Update: Dropdown `.custom-control`'s in `.dropdown-item` should be properly spaced
* Update: Dropdown re-add `.dropdown-menu-top`, `.dropdown-menu-top-right`, `.dropdown-menu-top-center`, and `.dropdown-menu-center` positional classes
* Update: Move `.inline-scroller` to utilties and create _utilities.scss variable file
* Update: Dropdown removed `$dropdown-item-padding-y` from Lexicon Base was added by BS4, removed `$dropdown-link-padding` doesn't exist in BS4
* Update: [Fixes #344](https://github.com/liferay/clay/issues/344) Dropdown re-add dropdown menu positions (not compatible with popper.js positioning)
* Update: Breadcrumb text-transform shouldn't bleed into dropdowns
* Update: Breadcrumb text-decoration should work with BS4 global variable
* Update: Breadcrumb add support for `.text-truncate` inside `.breadcrumb-item > a`
* Update: Breadcrumb add dropdown support inside `.breadcrumb-item`
* Update: Nav Nested shouldn't wrap if nav is longer than container
* Update: Input Group Inset values should be more dynamic
* Update: Input Group convert to scale component mixin and `.input-group-addon-constrain` should use `$input-padding-x`
* Update: Nav Nested should be `flex-direction: column` by default
* Update: Nav Underline adjust left and right positions to match other component highlights

### v2.0.0-alpha.2 - July 24, 2017
* Messed up alpha.1 release

### v2.0.0-alpha.1 - July 24, 2017
* Breaking: Lots of changes/additions to class names and Sass variable names (to be documented in more detail).
* Breaking: Replaced Tether.js with Popper.js
* Breaking: Update to Bootstrap 4 a362d62

### v2.0.0-alpha.0 - May 18, 2017
* Breaking: Lots of changes/additions to class names and Sass variable names (to be documented in more detail).
* Breaking: Use flexbox instead of floats.
* Breaking: Convert units from `px` to `rem`.
* Breaking: Convert Alerts, Buttons, Breadcrumbs, Dropdowns, Form Elements, Input Groups, Form Validation, Navbar, Management Bar, Modals, Navs, Nav Tabs, Pagination, Popovers, Tooltips to Bootstrap 4.
* Breaking: Dropping IE9 support.
* Breaking: Update from Bootstrap 3 to Bootstrap 4 [commit 33715a7](https://github.com/twbs/bootstrap/tree/33715a73d2eae3865cb4c1e0a13d1da4b6aeb278).

### v1.0.19 - April 3, 2017
* New: Added Lexicon SVG Icons `add-role.svg` and `remove-role.svg`

### v1.0.18 - March 6, 2017
* New: Progress Bar add option to customize `$progress-bar-font-size`
* New: Progress Bar add option to customize progress bar container `$progress-box-shadow`
* New: Progress Bars add option to customize `$progress-bar-box-shadow`, `$progress-bar-height`
* New: Pagination add option to customize border-radius of pagination-sm and pagination-lg independent of global border-radius variables
* New: Pagination add option to customize `$pagination-items-per-page-bg`
* New: Pagination add option to customize `$pagination-items-per-page-border`
* New: Pagination add options to customize `$pagination-items-per-page-color` `$pagination-results-color` to Lexicon Base
* New: Atlas Navbar Collapsible Search added options to customize `$navbar-default-collapsible-search-highlight` `$navbar-inverse-collapsible-search-highlight`
* New: Navbar Default and Navbar Inverse Collapsible Search added options to customize `$navbar-default-collapsible-search-btn-default-bg`, `$navbar-default-collapsible-search-btn-default-border`, `$navbar-default-collapsible-search-btn-default-color`, `$navbar-default-collapsible-search-input-bg`, `$navbar-default-collapsible-search-input-border`, `$navbar-default-collapsible-search-input-color`, `$navbar-default-collapsible-search-input-placeholder-color`, `$navbar-inverse-collapsible-search-btn-default-bg`, `$navbar-inverse-collapsible-search-btn-default-border`, `$navbar-inverse-collapsible-search-btn-default-color`, `$navbar-inverse-collapsible-search-input-bg`, `$navbar-inverse-collapsible-search-input-border`, `$navbar-inverse-collapsible-search-input-color`, `$navbar-inverse-collapsible-search-input-placeholder-color`
* New: Dropdowns added option to customize `$dropdown-menu-min-height`
* New: Dropdowns added options to customize `$dropdown-padding-bottom`, `$dropdown-padding-left`, `$dropdown-padding-right`, `$dropdown-padding-top`
* New: Dropdowns add option to customize `$dropdown-menu-min-width`
* New: Dropdowns add options to customize `$dropdown-font-size`, `$dropdown-menu-max-width` in Lexicon Base
* New: Dropdowns add option to customize `$dropdown-box-shadow` in Lexicon Base
* New: Dropdowns add option to customize `$dropdown-border-style`, `$dropdown-border-width`
* New: Management Bar add option to customize `$management-bar-dropdown-menu-margin-top`
* New: Management Bar add option to customize `$management-bar-default-box-shadow`
* New: Atlas added options to customize `$navbar-default-collapsible-search-focus-border`, `$navbar-inverse-collapsible-search-focus-border`
* Update: Atlas change checkbox height to 14px in webkit browsers
* Update: Atlas Checkbox and Radio Label should use `$input-label-font-weight variable`
* Update: Atlas add `$line-height-computed` to _globals.scss and use in `$input-checkbox-label-line-height`, `$management-bar-link-line-height`
* Update: Pagination rename `$pagination-border-radius-lg`, `$pagination-border-radius-sm` to `$pagination-lg-border-radius`, `$pagination-sm-border-radius` added in 4be569 respectively
* Update: pagination-items-per-page dropdown-toggle should use `$pagination-item-padding`
* Update: Pagination border radius should apply to pagination-items-per-page
* Update: Pagination `$pagination-hover-color` should inherit from `$pagination-color`
* Update: Atlas Navbar Collapsible Search rename `$navbar-default-collapsible-search-focus-border`, `$navbar-inverse-collapsible-search-focus-border` to `$navbar-default-collapsible-search-focus-highlight`, `$navbar-inverse-collapsible-search-focus-highlight` added in d082a7d respectively
* Update: Atlas navbar-default-border-widths should inherit from navbar-border-widths
* Update: Lexicon Base `$dropdown-link-padding` should change the padding on dropdown links
* Update: Lexicon Base Dropdowns `$dropdown-header-font-size` should change the font-size of .dropdown-header

### v1.0.17 - February 21, 2017
* New: Breadcrumbs add options to customize `$breadcrumb-link-hover-color`, `$breadcrumb-link-text-decoration`, `$breadcrumb-link-hover-text-decoration`
* New: Breadcrumbs add options to customize `$breadcrumb-separator-font-weight`, `$breadcrumb-active-font-weight`
* New: Breadcrumbs add option to customize `$breadcrumb-border-radius` independent of global border-radius
* New: Lexicon Base Breadcrumbs add options to customize `$breadcrumb-font-size`, `$breadcrumb-font-weight`, `$breadcrumb-text-transform`, `$breadcrumb-link-color` and remove unnecessary variable exists checks
* New: Lexicon Base Table List add option to customize `$table-header-font-size`, `$table-header-font-weight`, `$table-header-min-height`
* New: Lexicon Base Table List add option to customize `$table-list-body-row-bg`
* New: Table List add option to customize `$table-list-font-size`
* New Table List add options to customize `$table-list-header-bg`, `$table-list-header-border-bottom-width`, `$table-list-header-font-size`, `$table-list-header-font-weight`, `$table-list-header-min-height`, `$table-list-header-vertical-alignment`
* New: Tables add option to customize `$table-list-color`
* New: Tables add option to customize `$table-list-link-color`, `$table-list-link-color-hover`
* New: Panels added options to customize `$panel-danger-footer-bg`, `$panel-danger-footer-border`, `$panel-danger-footer-text`, `$panel-default-footer-bg`, `$panel-default-footer-border`, `$panel-default-footer-text`, `$panel-info-footer-bg`, `$panel-info-footer-border`, `$panel-info-footer-text`, `$panel-primary-footer-bg`, `$panel-primary-footer-border`, `$panel-primary-footer-text`, `$panel-success-footer-bg`, `$panel-success-footer-border`, `$panel-success-footer-text`, `$panel-warning-footer-bg`, `$panel-warning-footer-border`, `$panel-warning-footer-text`
* New: Lexicon Base add option to customize spacing between panels in panel-group `$panel-group-panel-spacer`
* New: Lexicon Base Collapse Icon add options to customize icon position `$collapse-icon-padding-left`, `$collapse-icon-padding-right`, `$collapse-icon-position-bottom`, `$collapse-icon-position-left`, `$collapse-icon-position-right`, `$collapse-icon-position-top`
* New: Added option to customize `$sticker-border-radius`
* New: Lexicon Base and Atlas add option to customize text-decoration on links inside labels and badges
* New: Lexicon Base Labels add hover states for links inside label
* New: Lexicon Base Badges added options to customize `$badge-border-style`, `$badge-border-width`, `$badge-danger-bg`, `$badge-danger-border`, `$badge-danger-color`, `$badge-default-bg`, `$badge-default-border`, `$badge-default-color`, `$badge-default-link-color`, `$badge-info-bg`, `$badge-info-border`, `$badge-info-color`, `$badge-primary-bg`, `$badge-primary-border`, `$badge-primary-color`, `$badge-success-bg`, `$badge-success-border`, `$badge-success-color`, `$badge-warning-bg`, `$badge-warning-border`, `$badge-warning-color`, `$badge-danger-hover-bg`, `$badge-danger-hover-border`, `$badge-danger-hover-color`, `$badge-default-hover-bg`, `$badge-default-hover-border`, `$badge-default-hover-color`, `$badge-info-hover-bg`, `$badge-info-hover-border`, `$badge-info-hover-color`, `$badge-primary-hover-bg`, `$badge-primary-hover-border`, `$badge-primary-hover-color`, `$badge-success-hover-bg`, `$badge-success-hover-border`, `$badge-success-hover-color`, `$badge-warning-hover-bg`, `$badge-warning-hover-border`, `$badge-warning-hover-color`
* New: Lexicon Base Labels added options to customize `$label-border-style`, `$label-border-width`, `$label-danger-border`, `$label-danger-color`, `$label-danger-hover-bg`, `$label-danger-hover-border`, `$label-danger-hover-color`, `$label-default-border`, `$label-default-color`, `$label-default-hover-bg`, `$label-default-hover-border`, `$label-default-hover-color`, `$label-info-border`, `$label-info-color`, `$label-info-hover-bg`, `$label-info-hover-border`, `$label-info-hover-color`, `$label-primary-border`, `$label-primary-color`, `$label-primary-hover-bg`, `$label-primary-hover-border`, `$label-primary-hover-color`, `$label-success-border`, `$label-success-color`, `$label-success-hover-bg`, `$label-success-hover-border`, `$label-success-hover-color`, `$label-warning-border`, `$label-warning-color`, `$label-warning-hover-bg`, `$label-warning-hover-border`, `$label-warning-hover-color`
* Fix: Tables content in first and last td should be vertically aligned to other components if its not a checkbox or dropdown
* Fix: Font Awesome and Glyphicon font sizes in badges and labels
* Update: Deprecate `$table-header-color`
* Update: Stickers remove unnecessary null value check on sticker states color property
* Update: Deprecate `$badge-default-link-color` uses `$badge-default-color` instead
* Update: Form help-block font-size should be 14px

### v1.0.16 - February 13, 2017
* New: Lexicon Base and Atlas added options to customize input state colors `$input-danger-bg`, `$input-danger-bg-focus`, `$input-danger-border`, `$input-danger-border-focus`, `$input-danger-box-shadow`, `$input-danger-box-shadow-focus`, `$input-danger-color`, `$input-danger-color-focus`, `$input-danger-checkbox-label-color`, `$input-danger-label-color`, `$input-success-bg`, `$input-success-bg-focus`, `$input-success-border`, `$input-success-border-focus`, `$input-success-box-shadow`, `$input-success-box-shadow-focus`, `$input-success-color`, `$input-success-color-focus`, `$input-success-checkbox-label-color`, `$input-success-label-color`, `$input-warning-bg`, `$input-warning-bg-focus`, `$input-warning-border`, `$input-warning-border-focus`, `$input-warning-box-shadow`, `$input-warning-box-shadow-focus`, `$input-warning-color`, `$input-warning-color-focus`, `$input-warning-checkbox-label-color`, `$input-warning-label-color`
* New: Lexicon Base added options to customize `$input-bg-focus`, `$input-box-shadow`, `$input-box-shadow-focus`, `$input-color-focus`, `$input-color-placeholder-focus`, `$input-font-size`, `$input-padding-horizontal`, `$input-padding-vertical`
* New: Lexicon Base add option to customize `$input-textarea-height`
* New: Lexicon Base and Atlas added option to customize `$input-color-disabled`, `$input-opacity-disabled`, `$input-placeholder-color-disabled`. Removed redundant selector `select[disabled].form-control`.
* New: Lexicon Base added options to customize `$input-label-color`, `$input-label-focus-color`, `$input-label-font-size`, `$input-label-font-weight`, `$input-label-margin-bottom`
* Fix: Atlas input-font-size (mobile) is always 16px
* Update: Bootstrap to 3.3.7
* Update: Atlas add option to customize `$input-group-default-addon-content-border-bottom-width`
* Update: Atlas deprecate `$btn-lg-border-radius`, `$btn-sm-border-radius`, `$btn-xs-border-radius`, use `$btn-border-radius-large`, `$btn-border-radius-small`, `$btn-border-radius-extra-small` respectively
* Update: Atlas remove border-radius property from .form-control.input-lg and .form-control.input-sm duplicates Bootstrap
* Update: Atlas remove unnecessary null value check on `$input-select-bg` and `$input-select-focus-bg`
* Update: Atlas color select element icons with `$input-select-icon-color` and `$input-select-icon-focus-color`
* Update: Atlas Select element icon positions and backgrounds should be more customizable
* Update: Atlas Select element icon should be more customizable
* Site: Test Assorted Page added Badge and Label examples with Font Awesome and Glyphicons
* Site: Added Badges and Labels examples to Test Page
* Site: Remove btn-toolbar from Button Dropups demo

### v1.0.15 - January 12, 2017
* Fix: Some icon variables are missing the default flag
* Update: Atlas Pagination items should account for large numbers
* Update: Don't rely on @extend in Bootstrap to size Help Icon in Input Groups
* Update: Move management-bar-toggle-height to variable
* Update: Badges check for atlas-theme instead of badge-default-bg since there are other variables in the block
* Update: Tabular-list-group move bg-color from rows to cells
* Site: Add Paginator with big numbers to Test Assorted page
* Site: Extending List Groups page change vertical ellipsis to links
* Site: Remove uneeded attributes from Sidebar Navbar demo in Test Assorted
* Site: Remove type="button" from pagination dropdown-toggle in Blog Action and Documents and Media demo
* Site: Remove type="button" from dropdown-toggle in Pagination demo

### v1.0.14 - December 09, 2016
* Fix: Nameplates interpolate $screen-xs-max variable inside mixin nameplate-label-autofit
* Fix: Tabular-list-group and tabular-list-group-unstyled should fill its container width
* Fix: Long text in badges and labels should break to new line and be constrained to its container
* Update: Panels in card styles
* Update: Sidebar adjust data-list spacing and break-word sidebar-block
* Update: Add clearfix to sidebar-header
* Site: Add Panel in Card example to Test Assorted page
* Site: Add example of badge with long text in test assorted
* Site: Update sidebar dl examples

### v1.0.13 - December 01, 2016
* New: Tabular-list-group-unstyled
* New: Added `.sidebar-actions`, `.sidebar-title`, `.sidebar-caption`, `.sidebar-block` classes to Sidebar
* Fix: #290 table-striped and table-hover should work with table-list
* Update: Change toggle-switch-bar min-height to height
* Update: #289 Add nowrap in toggle label
* Update: Toggle Switch remove uneeded margin-left on :checked .toggle-switch-handle:after
* Update: Move deprecated list-group styles to list-group-deprecated
* Update: Add styles for case `.sidebar-actions > li > span > a`
* Update: Add styles for  a.sidebar-title case
* Site: Update list-group docs with tabular-list-group-unstyled and add tabular-list-group-unstyled to sidebar
* Site: Update pages with Sidebar demos

### v1.0.12 - November 21, 2016
* Breaking: Nameplates move some hard coded css values to variables, remove selectors .nameplate-content h# and .nameplate-content small, move auto fitting nameplates to .nameplate-label-autofit-xs-max
* Breaking: Remove unused slider component from Atlas
* New: Added input-group-constrain and input-group-insert to Input Groups
* Fix: Atlas form-validation select[multiple] should have no dropdown icon
* Fix: Toggle Switch data-label-off and data-label-on text positioning in Firefox
* Fix: Atlas mobile navbar search close button shouldn't overlap input border
* Fix: Really long text inside fieldsets should break to new line
* Fix: Atlas management-bar dropdown is misaligned a little bit
* Fix: Chrome rendering issue with responsive-tables and td position relative
* Update: Increase Management Bar Item Title max-width to 180px
* Update: Truncate Text in Tabular List Group should break to new line in IE9
* Update: Make Toolbars easier to use
* Update: Move deprecated list-group components to _list-group-deprecated.scss
* Update: Deprecate list-group-card variables
* Update: Deprecate `$toolbar-group-padding-horizontal` and `$header-toolbar-padding-horizontal`
* Update: Deprecate Lexicon mixins `color-toggle-switch-bar()`, `color-toggle-switch-button()`, `color-toggle-switch-bar-icon()`, and `color-toggle-switch-button-icon()`
* Update: Move Atlas scaffolding styles to type
* Update: Input Group Constrain should be sized properly with input-group-lg and input-group-sm
* Update: Move Input Group focus, hover, and basic-search-close z-index to variables
* Update: Sidebar Navbar to apply to other container-fluid classes e.g. container-fluid-1280
* Update: Using the transparentize built in function so we can more easily see what the hex values are
* Update: Dropdown border-color to use rgba
* Update: Optimize Form Validation for better IE9 support
* Update: Optimize Input Groups for better IE9 support
* Update: Optimize Nameplates for better IE9 support
* Update: Optimize Popovers for better IE9 support
* Update: Optimize Toggle Switch for better IE9 support
* Update: Optimize Toolbars for better IE9 support
* Update: Optimize Tooltip for better IE9 support and deprecate `$tooltip-inner-max-width`
* Update: Optimize User Icons for better IE9 support
* Site: Add select[multiple] examples to Form Validation page
* Site: Update nameplate demos to include more use cases and update code examples
* Site: Move deprecated List Groups to bottom and add IE9 exception
* Site: Update Toolbars documentation with better examples
* Site: Update User Icon code examples
* Site: Add input-group-constrain sizes to Test Assorted
* Site: Input Groups page add docs for input-group-constrain and input-group-insert and Source Format
* Site: Test Assorted page add case for input-group-constrain and input-group-insert
* Site: Add Input Groups examples to Test Assorted
* Site: Forms Add really long text example to fieldset demo
* Site: Update table-list demo in Test Assorted to include more content

### v1.0.11 - November 3, 2016
* New: Lexicon text-editor icon
* Fix: Checkbox alignment in list-group-item-field
* Fix: More Checkbox alignment in Management Bar, Cards, and List Group
* Fix: Checkbox and Radio alignment in Management Bar
* Fix: Navbar alignment in Sidebar
* Fix: Lexicon Icon alignment in Labels
* Fix: Label icon styles bleed into Checkbox Card
* Update: Removing plus sign from Lexicon moon icon
* Update: Deprecate @mixin select-box-icon($color)
* Update: Deprecate @mixin style-figcaption()
* Update: Figures move font-weight and padding values to variables, add figcaption-middle
* Update: Special spacing only for Checkboxes and Dropdowns in td:first-child and td:last-child
* Update: More Cards optimization for better IE9 support and source formatting
* Update: More optimizations to Icons for better IE9 support
* Update: Optimize Button Groups for better IE9 support
* Update: Optimize Figures for better IE9 support
* Update: Optimize Forms for better IE9 support
* Update: Optimize Modals for better IE9 support
* Update: Optimize Nav Tabs for better IE9 support
* Update: Optimize Pagination for better IE9 support
* Update: Optimize Panels for better IE9 support, move some hard coded values to variables, and source formatting
* Update: Optimize Progress Bars for better IE9 support
* Update: Optimize Sidebar for better IE9 support
* Optimize: Side Navigation for better IE9 support
* Update: Optimize Tables for better IE9 support
* Update: Optimize Typography for better IE9 support
* Site: Update Documents and Media example page and add more examples to Test Assorted
* Site: Update Figures docs
* Site: Update Typography docs
* Site: Add Modal demo to Assorted Visual Tests
* Site: Add Table example without Checkbox or Dropdown in Test Assorted

### v1.0.10 - October 13, 2016
* Update: Align reference-marks and icons inside control-label
* Update: Reset border styles when using nav-tabs in navbar
* Site: Add more examples of reference marks and icons inside control-label

### v1.0.9 - October 12, 2016
* Breaking: Atlas dropdown menu no longer truncates text
* Breaking: Renaming get-lx-svg-icon to lx-icon
* New: Typography class reference-mark for adding reference marks next to text
* Fix: Management Bar height should include borders
* Fix: Rename get-lx-svg-icon to lx-icon in forms and breadcrumbs
* Fix: Collapsible search should transition for browsers that support css transitions
* Update: Rebuild svg icon scss map
* Update: Lexicon SVG icons add attribute width and height to svgs for use with background-image
* Update: $color should be added on lexicon-icon-outline and width and height are needed for IE
* Update: Management bar styles should win over nav styles
* Update: Deprecate unused Atlas dropdown variables
* Update: Deprecate list-group-card, tabular list group states, detailed-list-view and add option to disable these
* Update: Adding the ability to use any lexicon icon and build the scss map from the icons directory
* Update: Optimize alerts for better IE9 support
* Update: Optimize badges and labels css selectors
* Update: Optimize breadcrumbs css, add breadcrumb-horizontal, use svg for breadcrumb separator
* Update: Optimize buttons for better IE9 support
* Update: Optimize dropdowns for better ie9 support
* Update: Optimize list-groups for better IE9 support
* Update: Optimize management bar for better IE9 support
* Update: Optimize nav component for better IE9 support
* Update: Optimize Navbar for better IE9 support
* Update: Optimize Pager for better IE9 support
* Update: Deprecate color-placeholder mixin in favor of Bootstraps placeholder mixin
* Site: Add reference-mark example to typography and update pages that need it
* Site: Fix typo at progress bar
* Site: Update Navbar demos to include more cases
* Site: Update Add Button demo to a better use case
* Site: Document Lexicon SVG functions
* Site: Clean up documents and media demo
* Site: Update list-group-card demos, update tabular list group code example, and reorder list-group demos
* Site: Update buttons demos
* Site: Add breadcrumb-horizontal demo
* Site: Font awesome use css import for better ie9 support
* Misc: Add minimum node.js version (v4.6.0 LTS) to readme
* Misc: Minimize property access

### v1.0.8 - September 12, 2016
* Breaking: Remove dropdown-left-side, right-side, and top use cases from navbar
* Breaking: Removed support for contextual buttons (btn-primary, btn-danger, btn-warning, etc) in management bar
* Fix: Collapsible Search should work for browsers that don't support css transitions
* Fix: Atlas table heading font weight and font size should only apply to bootstrap tables
* Update: Change checkbox and radio cursor to pointer
* Update: Atlas move modal-footer box shadow to variable
* Update: Optimize css dropdown selectors
* Update: Reduce card css selectors
* Update: Add sticker color variables
* Update: Reduce number of css selectors for icon-monospaced with font awesome icons
* Update: Reduce number of selectors in management bar
* Site: Add more cases to dropdown demos
* Site: Fix alignment on collapsible search navbar examples
* Site: Sidenav should work on Blog Appearance and Blog Actions pages

### v1.0.7 - August 30, 2016
* Fix: Word-wrap should work on card-col-content
* Update: Horizontal card first and last columns should have border radius
* Update: icon-monospaced should work for Font Awesome icons if class is on the same element
* Update: Modal text should change color based on theme
* Update: Modal Close button should change color based on theme
* Update: Remove keyword screen from media-queries
* Update: Use variable $default-text to set panel-default heading and footer text
* Site: Margin on pre element throws off code panel slide animation
* Site: Cards page use stickers inside horizontal card demos
* Site: _site.scss doesn't use atlas variables
* Site: Remove keyword screen from media-queries

### v1.0.6 - August 23, 2016
* Breaking: Remove Bourbon dependency from Lexicon Base and Atlas
* New: Add lx-color-by-lightness function
* Fix: Atlas input-group-lg help-icon should be fully underlined
* Update: Deprecate calcLexiconIconPadding, and move global functions to having an 'lx-' prefix (and also, normalizing function name style)
* Update: Move functions to separate file so they can be used in variables
* Update: Move help-icon-default colors to variables and calculate color, hover color based on background
* Update: Deprecate `size-user-icon()` mixin
* Update: Comments to sass comments
* Site: Header Toolbar demo sidenav should be open
* Site: Remove Bourbon dependency from sites
* Misc: Removing bourbon devDependencies

### v1.0.5 - August 16, 2016
* Fix: Center linear loader icon inside button and styles should apply to anchor tags with btn class
* Fix: Loader icon colors should change color based on theme
* Fix: management-bar-default color bleeds into dropdowns
* Fix: solved unclosed line 32
* Fix: Lexicon Icon vertical alignment in sticker component
* Update: Bootstrap mixins shouldn't overwrite Bourbon mixins
* Update: Move Atlas mixins to Lexicon Base
* Update: Remove duplicate user-icon mixins from Atlas
* Update: Management Bar btn-default should inherit colors from Bootstrap
* Update: Lexicon Base card component add $fallback-border and $border-style
* Update: Scrollbar in IE covers content
* Site: Code examples should only have one background color
* Site: Fix Nav Tabs Grid code panel
* Site: Use svg icons in the heading links
* Site: Progress bar demo page update progress bar sizes titles
* Site: Progress bar demo page fix example code collapsible panel
* Site: Site header should be aligned with main nav
* Site: siteConfig button should be in container in large screens
* Site: Add more examples of lexicon icons in sticker component
* Misc: Update readme
* Misc: Reload page after changes
* Misc: Add browser-sync static file server
* Misc: Show sourcemap contents
* Misc: We need to patch the variables file before we publish to NPM (otherwise, the files throw errors when including the sass files)

### v1.0.4 - June 24, 2016
* New: adding 2 new icons (organizations and password-policies)
* Update: thickening the user and users icon

### v1.0.3 - June 22, 2016
* Update: sidenav-js-fouc should hide only the sidenav
* Update: icon-monospaced should work on an icon if it is a direct parent
* Update: Checkboxes in card should be vertically centered
* Site: Update icon-monospaced doc and add example of icon wrapped by icon-monospaced in management bar
* Misc: Setting artifactName back to the proper one

### v1.0.2 - June 13, 2016
* Update: Adding new icons
	- mobile-device-rules.svg
	- page-template.svg
	- shortcut.svg
	- site-template.svg
	- vocabulary.svg
* Site: Removing unneeded files
* Misc: Forgot to include a README and CHANGELOG in published NPM package (will be there on next publish)
* Misc: Since this info can live in the package.json, and it's not updated frequently, we can just pluck out all of the fields from the root package.json
* Misc: Excluding the website specific items
* Misc: We can replace the index.js at the root and just use it as the template to include
* Misc: Making the package private to prevent accidental publishing
* Misc: Moving the clean to happen at the start

### v1.0.1 - June 8, 2016
* Breaking: Move navbar-collapse-absolute from navbar-collapse to navbar
* Update: Table-responsive should use momentum based scrolling for touch devices
* Site: Update navbar-collapse-absolute docs

### v1.0.0 - May 26, 2016
* Breaking: Move sidebar-header-actions link colors to separate variables
* Update: Card-horizontal should use card styles
* Site: Update sidenavs to use sidebar-header-actions

### v0.2.16 - May 20, 2016
* Fix: Sidenav-right js api should animate properly on android
* Fix: Panel-title should break-word not break-all
* Fix: Table-heading-nowrap should work on .table-cell-content in thead

### v0.2.15 - May 17, 2016
* Breaking: Sidenav should use open instead of closed to display nav, reduce specificity, active class should be removed from toggler
* Breaking: Remove table-responsive-flip and table-responsive-collapse
* Breaking: Remove card focus styles
* Breaking: Remove card-col-*
* Breaking: Cards remove card-header, card-footer, card-section
* Fix: Side Navigation mobile bug introduced in 4a3ae4f
* Fix: Atlas navbar collapse-basic-search focus style extends too far right
* Fix: path/url issues on Windows when building
* Fix: Cards to use dropdown bg color (otherwise, dark themes don't properly display cards)
* Update: truncate-text and table-cell-content older browser css fallback
* Update: Card Simple Grid to work with truncate-text without clamp component
* Update: Add fallback for truncated text inside tables
* Update: Alert Notification should use max-width
* Update: Reduce simple side nav default width to 320px and remove body-fixed class
* Update: Tables make truncate-text work without clamp component
* Update: Table-list text color
* Update: Add table-autofit and table-heading-nowrap to tables
* Update: Adding new Lexicon icons
* Update: card-block should break really long words
* Update: Cards don't use class*= selector, reorganize card scss, and add card-block
* Update: Nested card-rows in checkbox-card have space for checkbox
* Update: Cards add class card-block
* Update: Side Navigation add class sidenav-js-fouc to avoid flash of unstyled content
* Update: Side Navigation support for RTL
* Site: Update sidenav demos to use open class
* Site: Remove clamp component from card demos and horizontal cards with images should work in ie10
* Site: Tables remove clamp component and table-cell-field from table demos
* Site: Update table docs with table-autofit and table-heading-nowrap
* Site: Update card docs with changes
* Site: Update sidenav docs and pages using side-navigation

### v0.2.14 - April 19, 2016
* Breaking: Remove tab-groups component
* Update: Collapsible Search should work with RTL
* Update: Create radio-card
* Update: Radio input in chrome is off by 1px
* Site: Add check-source-formatter custom config
* Site: Remove reference to Bourbon 3.2.1 bug in Progress Bars
* Site: Update cards docs to include radio-card

### v0.2.13 - April 15, 2016
* Breaking: Remove label-monospaced use stickers instead
* Breaking: Remove badge-monospaced use stickers instead
* Breaking: Remove card-dm and toggle-card-dm styles
* Fix: IE text in card not truncating
* Fix: Side Navigation animation when changing orientation from landscape to portrait
* Update: Add sticker positional classes that match other components e.g. checkbox-card
* Update: Add class sticker-static for statically positioned stickers
* Update: Add max-height to dropdowns
* Update: Focus outline for truncated links are cut off
* Update: Checkbox card should work if you only want the checkbox to be clickable
* Site: Remove references to dropdown-menu-no-arrow
* Site: Update badges, labels, and stickers documentation
* Site: Cards page dropdown-toggle alignment
* Site: Cards page move icon-monospaced to the parent element
* Site: Remove docs related to card-dm and toggle-card-dm
* Site: Add checkbox card documentation

### v0.2.12 - March 25, 2016
* Update: Remove icon-* selector from alloy-font-awesome, and instead only target defined icons

### v0.2.11 - March 23, 2016
* Update: Search bar covers active style when navbars are in narrow column
* Update: Nameplate content text should be vertically centered in mobile
* Update: Added styling for cards to also have a radio
* Update: th element should have height so headings aren't clipped when every column is clamped
* Update: Add table helper classes for vertical alignment
* Site: Clean up Blog Actions demo
* Site: Update tables page with helper documentation

### v0.2.10 - March 8, 2016
* Fix: Collapsible Search covers navbar-collapse items on mobile
* Fix: Encoding spaces in the SVG mixin, as the YUI compressor will munge the whole thing up
* Update: Lexicon table clamp-container spacing when its first child and add min-widths to table cells inside table-responsive
* Update: Change table-list row background color in Atlas

### v0.2.9 - March 1, 2016
* Update: Collapsible Search should use event delegation
* Update: the (non-flag) icons to have either (or both in many cases) of a class of `lexicon-icon-outline` or `lexicon-icon-body` on their child elements. This allows them to be more easily targeted via CSS.
* Update: Include all icons in release task (so that people can use icons individually)
* Site: Update Collapsible Search documentation with event delegation stuff

### v0.2.8 - February 25, 2016
* Update: Normalized the viewBox attribute for the flag icons to use the same metrics as the other icons
* Fix: Removed IDs from flag icon groups as they would cause issues when using the icon

### v0.2.7 - February 24, 2016
* Fix: Add work around for ios not respecting overflow hidden on body ([Fixes  #132](https://github.com/liferay/lexicon/issues/132))
* Update: Added new icons check-circle, cut, paragraph, paste, radio-button, select-from-list, and text
* Update: Added new flag icons

### v0.2.6 - February 22, 2016
* The released versions for v0.2.3-v0.2.5 had invalid jars being created due to an error in the maven build script. This should be finally resolved.

### v0.2.3 - February 19, 2016
* Fix: Side Navigation lazy loading doesn't try to reload content that was never loaded
* New: Add Lexicon CSS only Loaders
* Update: Sidenav will now add the css loading indicator automatically
* Update: Side Navigation should show loading indicator when using ajax
* Update: Higher contrast tooltip bg color
* Site: Update Side Navigation docs with loading indicator

### v0.2.2 - February 8, 2016
* Fix: Remove margins on dropdown icon-monospaced
* Fix: Management bar link spacing in Atlas
* Fix: Data url shouldn't place content inside multiple sidebar-body when nested
* Fix: Padding on the `.sidenav-container` in resolutions wider than 1300px is no longer removed ([Fixes #129](https://github.com/liferay/lexicon/issues/129))
* Fix: The SVG desktop icon had an inline attribute that prevented styling
* Update: the sidenav plugin now toggles a CSS class of `active` when it's open and closed.
* Update: Add disabled class to management bar
* Update: Add events openStart.lexicon.sidenav and closedStart.lexicon.sidenav
* Update: Align items in left and right sides of nav components when using container-fluid-1280
* Update: New buttons opacity for disabled buttons (configurable via the variable `$btn-disabled-opacity`)

### v0.2.1 - January 29, 2016
* Breaking: Remove IE's clear field button in Atlas
* Breaking: Side Navigation plugin instantiates on page load when using data-toggle="sidenav"
* Fix: `<a class="badge badge-default">` text color should be blue on hover
* Fix: Side Navigation defaults to delegate false if use-delegate undefined
* Fix: Side Navigation delegate should work on regular sidenav
* Update: Updating some Lexicon icons (calendar.svg, date.svg, format.svg, home.svg, info-circle-open.svg, sites.svg, thumbs-down.svg, thumbs-up.svg, trash.svg)
* Update: Adding new Lexicon icons (desktop.svg, full-size.svg, mark-as-answer.svg, mark-as-question.svg, mobile-landscape.svg, move.svg, page.svg, share.svg, shortcut.svg, tablet-landscape.svg, tablet-portrait.svg, wiki-page.svg)
* Update: Side Navigation close button should use delegate
* Update: Allowing the sidenav plugin to return a value from methods that can be invoked, as well as add an instance method that will return the current instance
* Update: Side Navigation adding destroy method ([Fixes #116](https://github.com/liferay/lexicon/issues/116))
* Update: Nameplates links and text styles should be different
* Update: Remove text-shadow from Atlas .close
* Update: Remove Atlas dropdown arrows
* Site: Document new side navigation methods

### v0.1.32 - January 29, 2016
* Pat botched this release -- ignore

### v0.1.31 - January 14, 2016
* Breaking: Change collapse open and close icons to be compatible with svg. Please see [this page](http://liferay.github.io/lexicon/content/panels/) to find the updated markup.
* Breaking: Don't apply figure styles to element
* Breaking: Removed the Product Menu from the code base, since it's now only in Liferay.
* Fix: ([Fixes #88](https://github.com/liferay/lexicon/issues/88))  links inside list-group-item should be properly colored
* Fix: ([Fixes #109](https://github.com/liferay/lexicon/issues/109)) Delegate click handler needs event.preventDefault().
* Fix: Fix Lexicon navbar and management-bar borders inside sidebar
* Fix: Long text inside horizontal card should break to new line in firefox
* Fix: List-group-heading focus border shouldn't be covered by next element
* Fix: List-group-heading shouldn't be underlined on hover or focus
* Fix: Atlas dropdown arrows should be aligned to monospaced icon
* Update: Add lazy loading through data-url to side navigation plugin
* Update: Badges and Stickers should inherit from Labels
* Update: Separate Lexicon labels from badges
* Update: Add mixins for coloring dropdown-toggle and dropdown-menu
* Update: navbar and management-bar no collapse dropdown should have background color
* Update: Cards dropdown color should be $dropdown-link-color
* Update: Align checkboxes and buttons on the left and right side for:
	- header-toolbar
	- navbar
	- management-bar
	- breadcrumbs
	- tabs
	- tables
	- cards
	- list-groups
* Site: Updated the Sidebar Detail list to use a DL element
* Site: Release entries in the changelog can be linked to
* Site: Checkbox should be checked when table list is active
* Site: Update documents and media demo to current mark up
* Site: Update blog appearance demo to current mark up
* Site: Update blog actions demo to current mark up
* Site: Added a Visual Tests section to compare and test changes

### v0.1.30 - January 14, 2016
* Bad CHANGELOG

### v0.1.29 - January 14, 2016
* Nate botched this release -- ignore

### v0.1.28 - December 23, 2015
* No changes, just bumping because of issues with WebJars/Maven caching.

### v0.1.27 - December 22, 2015
* Updated bower.json to exclude non-essential directories

### v0.1.26 - December 22, 2015
* Breaking: Rename management-bar-right to management-bar-nav-right
* New: Updated the Sidenav component, adding the following new methods: `hide()`, `show()`, `toggle()`, and `visible()` ([Documentation](http://liferay.github.io/lexicon/content/sidenav/#methods))
* New: Added the following new icons:
	- blogs
	- bookmarks
	- calendar
	- categories
	- documents-and-media
	- download
	- dynamic-data-list
	- forms
	- info-panel-closed
	- info-panel-open
	- message-boards
	- polls
	- reply
	- rss.svg
	- tag
	- web-content
	- wiki
	- workflow
* Update: Atlas th element and .table-cell-field should be styled to match Lexicon mock ups
* Update: Dropdowns in navbar should be properly styled in all screen sizes (Fixes [#91](https://github.com/liferay/lexicon/issues/91))
* Update: Moved variable tooltip-inner-max-width to Lexicon Base, renamed files from tooltips to tooltip
* Update: Btn-default styles in management-bar and active state
* Update: ([Fixes #82](https://github.com/liferay/lexicon/issues/82)) Atlas checkboxes and radio buttons to be bigger
* Update: Allow multiple Simple Sidenav Togglers to open sidenav
* Update: Add support for placing text around toggle-switch ([Fixes #81](https://github.com/liferay/lexicon/issues/81))
* Update: Atlas select box arrows are svg instead of image

### v0.1.25 - November 12, 2015
* Fix: Caret Icons `caret-top` and `caret-bottom` should be center aligned
* Update: Action button should be under dropdowns, popovers, and tooltips
* Update: Collapsible panels whole panel heading should be clickable

### v0.1.24 - November 12, 2015
* Publishing the build files (Nate's fault)

### v0.1.23 - November 12, 2015
* Update: Icon-monospaced should work with svg icons
* Update: Added new icons, `info-circle`, `info-circle-open`, `caret-top`, and `caret-bottom`
* Site: Add icon-monospaced to svg icons

### v0.1.22 - November 12, 2015

* Fix: Navbar-toggle should have outline on focus
* Breaking: Remove link-group
* Update: Add navbar layout helper classes for better keyboard accessibility
* Update: Keyboard focus shouldn't enter collapsible search when closed
* Update: Keyboard focus shouldn't enter a side navigation that is closed
* Update: Move clamp css to its own file
* Update: Atlas modal-title font-weight 400
* Site: Update pages to work with new headings identifier selector
* Site: Use more specific heading identifier to prevent unwanted headings to be targetted
* Site: Convert remaining icons to svg, except ones in pseudo elements
* Site: Convert to lexicon icons in input-groups, form-validation, list-groups, and navbar
* Site: Use table-cell-field instead of table-list-field for consistency.
* Site: Change icons to lexicon svg icons on Alert, Cards, Header Toolbar, and Management Bar pages
* Site: Misc site updates
* Site: Update side navigation docs
* Site: Update navbar docs
* Site: Reorganize navbar contents for better tabbing
* Site: Added skip to content button
* Site: Align settings button on mobile
* Site: Don't use side-navigation plugin for sites nav
* Site: Update table-list demo to something more useful
* Site: Increase Sass precision to 8

### v0.1.21 - October 30, 2015

* New: Add sizes sm, default,  md, lg to Lexicon icons
* New: Add timeline component
* Update: Size Lexicon icons in badges and labels, labels fully extends badges
* Update: Remove custom font and custom styling from checkboxes and radio
* Update: Convert remaining checkbox-default and radio-default to checkbox and radio
* Update: Change checkboxes in management bar from checkbox-default to checkbox
* Update: Move checkbox-default and radio-default styles to checkbox and radio
* Fix: Reorder management bar HTML to keep focus order
* Fix: Dropdown-toggles should have focus ring
* Fix: Heading-anchor should show on focus
* Fix: Atlas header-toolbar-default divider shouldnt show if there is only one item
* Fix: Atlas control-label class should be styled like label
* Site: Change badges and label demos to svg icons
* Site: Update headings selector and reorganize sections
* Misc: Added this changelog :)

### v0.1.20 - October 28, 2015

* Moving svg4everybody to the footer to be available on all pages
* Adding svg4everybody to our icons page
* Adding svg4everybody via bower, and changing the update task to updating bower in general
* LPS-59013 - Update metalsmith-headings-identifier
* Atlas: color dropdown-toggle icon-ellipsis-vertical only in cards
* Make structural class names, table-list-field and table-list-content, more general
* Truncating text should work inside table-list-content
* LPS-59013 hidden-xs class deleted
* Lexicon-base _variables should only be importing partials and remove unused variables from atlas
* Add progress bar sizes
* Add form validation states for select and readonly input, remove unused mixins, and docs
* Add list-group-card
* Navbar and Management Bar No Collapse dropdowns should be styled in mobile
* Side-navigation and content should be equal height before opening
* Use site's bootstrap.js instead of cdn and remove unused includes from head
* Side Navigation delegate click should only be instantiated once per toggler class
* Components should only list components that are in the guidelines pdf
* Adding bootstrap resources
* Adding Bootstrap JS to the payload

### v0.1.19 - September 30, 2015

* Adding hover effects
* Cleaning up unneeded files/changes
* Adding new svg icons
* Adding icons.svg sprite file
* Add panel-blank
* Remove todo page in favor of github issues
* Add breadcrumb-vertical and documentation
* New barebone panel
* Cards: remove card-horizontal-dm, standardize card-checkbox, and add helper classes for truncating text
* Normally when we use a bg cover image we want center it
* Update Flexbox Cards and flexbox grid to work in IE and FF
* Setting width/height for icons
* Adding html page
* Adding gulp tasks for creating svgs
* Adding svgs

### v0.1.18 - September 24, 2015

* Adding links in headers
* Nav spacing improvements
* Improvements to the navigation
* Add helpers for aspect ratios with background images
* Lexicon: add font smoothing for osx
* Add best practices page
* New font sizes:
* Remove old flexbox card styles

### v0.1.17 - September 16, 2015

* Lexicon: Remove control menu
* Lexicon: add data api to collapsible-search and also documentation
* Collapsible search transition ending too early
* Atlas: breadcrumbs first child is misaligned
* Side-navigation transition ending too early
* Rename cells to table-list-field and table-list-content, also vertically center table-list-content with top: 50%

### v0.1.16 - September 03, 2015

* Added custom open class name to _toggleSimpleSidenav
* Side-navigation.js delegate causes all menus to open
* btn-action-secondary should have z-index
* Document sidebar component
* Flexbox cards
* Add simple flexbox grid
* Fix out of date README
* Add simple flexbox helper classes
* Adding version to website header, stamping css and JS (non-bootstrap) with our version and copyright, reminding us to deploy the website after a release, and a small website fix
* Atlas: select box arrows shouldn't overlap option text
* Update cards border radius to work with overflow visible
* Add table-list skin for tables
* Vertically center breadcrumb
* Remove control-menu from lexicon
* atlas: remove old btn-toolbar styles
* atlas: control-menu colors shouldn't bleed into nested components
* lexicon: add card-row-layout-fixed and card-horizontal-dm
* lexicon: add truncate-text class
* lexicon: breadcrumb > li should have max-width and truncate text

### v0.1.12 - August 21, 2015

* atlas: Validation inputs should have input-color not input-label-color, add validation state colors for radios and checkbox
* lexicon: add bottom and top properties to modal-open class for safari/chrome
* Blogs Actions example: remove inline-scroller from dropdowns
* side-navigation: change toggler open state from active to open
* Images and Thumbnails demo align left image shapes
* lexicon: Remove overflow hidden from cards, add crop-img component, and update card/images docs
* Documents and media demo change badge-primary to badge-default
* Toggle card dm borders
* Toggles Demo remove unused code examples
* atlas: reduce vertical padding of tooltips
* Blog Actions demo change name of modal
* Documents and Media demo cards should be in a list
* atlas: adjust padding on some product-menu elements
* Blog Actions demo box shadow is hidden by sidenav-container
* side-navigation: sidenav-fixed shouldn't be added to toggler
* side-navigation: use doc variable instead of
* side-navigation: add/remove active and sidenav-transition class on toggler when menu opens/closes

### v0.1.11 - August 17, 2015

* Read-only inputs are partially obstructed by padding in Firefox
* lexicon: remove color property from control-menu
* atlas: list-group-header should have background-color
* card border shouldn't inherit from navbar border
* Wrong dropdown markup in portlet topper demo
* Remove old helpers no-shadow and square-border
* dropdown-toggles should have class dropdown-toggle
* management-bar: dropdown toggles using btn should match other management-bar link styles
* management-bar: add some horizontal padding
* atlas: management-bar buttons should be spaced properly in desktop
* management-bar btns should be vertically aligned
* lexicon: change default card border-color for better compatibility with third party themes
* lexicon: Source Format - One media query per property
* lexicon: navbar-toggle and collapse components should use variables
* Links in sidebar-header and sidebar-footer shouldn't be underlined
* Product Menu parts shouldn't be combined with regular sidebar
* Remove list-group-header colors for better compatibility with third party themes
* Sidebar and sidebar-inverse link-colors should be based on variables
* modal-inverse colors should be based on variables
* Calculate modal footer height for fullscreen modals
* lexicon: toggle-switch-on and toggle-card-on colors should be based on brand-primary
* lexicon: basic-search-close should change color based on variables
* Remove equal-height sass placeholders
* Remove clearfix-hack mixin
* Decrease sidenav-fixed z-index so modals appear over it
* Remove nameplate-list and profile-header components
* lexicon: nameplate-label variable names should start with nameplate-label
* Add nameplate-label with demos
* atlas: increase full-screen-modal top position
* Add nameplate label states
* atlas: fix gap between modal-body and modal-footer
* lexicon: alert-notification should be 100% in mobile
* Add alert-notification class for notifications
* atlas: Remove notifications component in favor of alternate alert style
* atlas: Remove duplicate css in disabled checkbox and radios
* atlas: Remove alternate checkbox/radio components, and update hard coded colors in checkbox-default and radio-default to variables
* atlas: change navbar-default colors
* atlas: dropdowns should have spacing between toggle and dropdown
* Add multi-step-progress-bar-collapse, multi-step-progress-bar-fixed, and update docs
* multi-step-progress-bar: use positioning to create space between icons
* product-menu: use lfr-icon-menu taglib markup
* nav-equal-height-heading span tags should be aligned
* Add documentation for nav-equal-height and add vertical and horizontal padding variables

### v0.1.10 - August 06, 2015

* Add links to footer and update site-administration-toolbar
* side-navigation: add option to delegate click event
* Add Multi-step-progress-bar
* control-menu: use justify-content and colors for atlas control-menu
* atlas: select input should have no top or bottom padding
* Control Menu component
* Update side-navigation docs
* side-navigation: sidenav-slider should have transition
* side-navigation: toggleSimpleSidenav content should match first element
* side-navigation: add data-target option to simple sidenav
* side-navigation: menu and content should be the right height on load, equal height should run after dom operations
* site: remove overflow on #wrapper
* side-navigation: add simple sidenav option

### v0.1.9 - August 03, 2015

* side-navigation: type fixed shouldn't push content over
* side-navigation: rename transitions variable to transitionEnd
* portlet-topper: use flexbox for alignment
* lexicon: user-icon should be transparent bg
* Adjust h tag sizes and remove some duplicate functionality
* atlas: form-group margin-bottom 20px
* atlas: label margin-bottom 2px
* atlas: change padding on inputs to 6px 4px
* atlas: portlet-topper border-radius to 4px
* product-menu navs
* lexicon: nav-nested with nav-equal-height-heading should be indented
* lexicon: add nav-equal-height and nav-nested-margins
* In firefox, absolutely positioned elements don't take up 100% width by default
* side-navigation: fire events open.lexicon.sidenav and closed.lexicon.sidenav when state changes
* lexicon: product-menu-tabs font-size should be smaller

### v0.1.8 - July 28, 2015

* atlas: user-icon bg should be transparent
* atlas: change button sizes
* lexicon: create portlet-topper component
* lexicon: anchor tags with dropdown-toggle class shouldn't be underlined on focus or hover

### v0.1.7 - July 27, 2015

* lexicon: use navbar-padding-horizontal for left right margin and padding
* lexicon: navbar-toggle and navbar-collapse items should use calculated vertical padding
* lexicon: navbar should be aligned and styled if navbar variables are changed
* Removed sidebar fixed demo
* panels: style like collapse item mock ups
* product-menu: align collapse icons
* lexicon: option to change collapse icon for different components
* Add lexicon-base-variables.scss and atlas-variables.scss
* lexicon: rename vertical-align-middle to collapse-icon-middle
* Change show-collapse-icon to collapse-icon and update panel docs
* lexicon: collapse-icon for panel
* atlas: badge, label, sticker default colors scheme
* Remove badge-absolute in favor of stickers
* Remove absolutely positioned badges from demo
* Blogs Appearance example page
* lexicon: create help-icon component and use help-icon instead of input-group-icon
* lexicon: icon-monospaced should work with icon sizes
* atlas: icon-monospaced with btn should be vertically centered
* lexicon: icon-monospaced should work with btn class
* atlas: nav-pills should be colored brand-default
* uxgl-site-config should stay inside header
* atlas: nav-tabs-default calculate padding based on height
* side-navigation: check if window size is desktop
* Update nav and nav-tabs docs
* Update nav tabs demo to use bs3 tabs.js
* Move more common nav styles to lexicon and update nav docs
* Move common nav styles from atlas to lexicon
* Move nav-nested and nav-collapse-icon to lexicon
* Convert nav demos to use bootstrap collapse
* Update nav link colors
* Separate tab group css, add nav-tabs-default, add nav-tabs-scroll
* lexicon: mobile nav-tabs
* Improve class selection for detail-list-view-icon active icons state
* Update portlet container css to new design
* blog actions page navbar and management bar alignment
* container-fluid-1280 should be centered in desktop
* management-bar alignment
* container-fluid-1280 inherits too many styles from container-fluid
* Use class detail-list-view-icon instead of user-icon for active state
* lexicon: container-fluid-1280 should extend container-fluid
* atlas: update brand and state colors
* atlas: update form validation colors
* Z-index issues in navbar basic search after input-group update
* Remove variable -radius-default
* Update form validation mark up and add checkbox examples
* input-group-default houses help text on form inputs

### v0.1.6 - July 16, 2015

* Namespacing borderless portlet component styling for now
* Removed modals stylesheet from site
* Clean up modals css
* Fix for iOS -webkit-overflow-scrolling: touch z-index bug
* atlas: update pagination size alignment
* borderless-portlet-bar: add more examples
* borderless-portlet-bar: remove padding and add shadow on hover
* atlas: add box shadow to borderless portlet
* Add borderless-portlet-bar component

### v0.1.5 - July 14, 2015

* side-navigation: instance.equalHeight should be instance.options.equalHeight
* lexicon: add line-height variable to pagination-size
* Updating Bootstrap to 3.3.5
* Adding bower to manage the Bootstrap dependencies
* side-navigation: convert breakpoint to integer
* atlas: button link styles should overwrite other button styles
* Fixing file reference to glyphicons
* lexicon: side-navigation plugin should have option for no equal height
* Fixing regression in toggling sidebar on the right
* Update blog actions demo management bar
* Update blog actions demo product menu
* atlas: product menu desktop styles
* lexicon: toggle-card dm should be more generic and move toggle-card-dm card styles to card-dm
* lexicon: aspect-ratio should be display block
* Update aspect-ratio docs and add right align for aspect-ratio-vertical
* lexicon: move aspect-ratio css to separate file and add aspect-ratio centering
* Update documents and media example page to use stickers
* lexicon: add stickers component
* lexicon: increase badge-monospaced sizes to make it more useable

### v0.1.4 - July 08, 2015

* atlas: style product menu
* sidebar: product menu header and footer should be fixed and clean up unused sidebar css
* Simplifying height check
* Debouncing resize, combining screen change detection methods
* Side navigation: Update docs
* Remove slideout drawer plugin and css
* side navigation: sidenav-right should close on mobile
* side navigation: screen change to mobile should and remove class sidenav-fixed
* Documents and Media example page
* Alternate checkbox style, toggle-card-dm
* lexicon: aspect ratio should align left
* lexicon: sidebar-panel should hide overflowing content and sidebar-panel badge styles
* lexicon: add aspect ratios to images
* lexicon: card col should have option to be only wide as its content
* atlas: change breadcrumb bg to transparent
* Removing commented code
* Formatting & optimization
* Adding Site Settings to enable easily toggling different levels of CSS
* Adding templates to watch list
* Creating atlas-font-awesome.scss
* Source Format Documents and Media mock up example
* Add fixed, fixed-push, and relative options to side navigation
* Created Documents and Media mock up example page
* Fixing release script

### v0.1.3 - June 29, 2015

* Moving lexicon to lexicon-base

### v0.1.2 - June 29, 2015

* Fixing parent selector reference
* Splitting up CSS files
* Fixing issue with gulp plumber and gulp filter
* Removing mixins
* Removing box-shadow from form fields with validation
* Adding gulp-plumber so gulp doesn't quit the watch if there's an error, and not repatching the CSSif it's already patched
* Toolbars component: move some css properties to variables
* Figures component: move some css properties to variables
* Demo Site: make code example page smaller
* Cards component: move some css properties to variables

### v0.1.1 - June 25, 2015

* Label atlas only and shared variables
* Breadcrumbs remove unused variables
* Organize variables skin vs structure
* Add product menu demo
* Content should overflow in fullscreen
* Update blog actions example page
* Update toolbar component, remove duplicate css, update docs
* lexicon: create sidebar base
* lexicon: Import user icons
* Include toolbars in lexicon
* Remove text underline on monospaced icons
* Update list-group page and docs
* atlas-theme: change navbar link colors
* Removing dependencies on YUI
* Migrating to gulp
* atlas-theme: add sidebar-inverse, sidebar-fixed, and product-menu styles
* added product menu to sidebar
_atlas-theme: add open close colors for management-bar-toggle
* Add management bar
* Restructuring main files and themes
* Modifying templates to use the heading property
* Adding heading property so title can be selectively overwritten
* Side navigation left shouldn't be pushed 300px right
* fixed browser mixin inconsistency
* Remove toolbar-no-break
* Remove uneeded variables and css
* Add container-fluid-1280
* Remove blog 1 column page and styles
* Update boostrap js to 3.3.4
* Adding sourcemap support
* Upgrading Bootstrap to 3.3.4
* changed button radius
* created a .icon-default class
* changed html structure on toolbar page to be consistent
* Pagination include _styled pagination.scss and reorganize media queries in classic
* Remove navbar duplicates
* Combine modal full screen and modals pages
* Add full screen modal with example
* Remove sliders page
* Fix broken demos on extending-toggles page
* Rename extending-switches to extending-toggles and update links and docs
* Rename switches page to toggles, and update docsinto separate files and remove duplicate css
* Build guidelines examples
* Update guidelines examples
* Namespace toggle-switch variables properly
* Use general sibling selector for consistency with toggle-switch and flexibility
* Build guidelines examples
* Update guidelines examples
* Move _switches to _toggle-switch
* Extract toggle-card from switches
* Add text overflow ellipsis for dropdown-menus
* Simplify center dropdowns and set max-width on dropdowns
* Add demo for clear dropdown arrow
* Move code examples to accordion
* Update user icons page to new layout
* Update dropdown layout and docs
* Remove dropdown-menu-inverse
* Add action button
* Update tooltips to match Visual Kit SEVEN
* Add non-responsive for container
* Sidenav right animation should match left sidenav
* Add bottom toolbar to blog actions example
* Buttons in toolbar should be square
* Tabular list group link color to brand-default
* uxgl-toggle-code button should be rounded not circle
* Side navigation focus cut off on left and right side
* Update docs
* Add width option to sidenav
* Update sidenav docs
* Remove gutters from sidenav
* Sidenav right should work in _styled
* Update header and navbar to match new mock up
* Update docs
* Add sidenav right and fix bugs with multiple instances
* Adjust collapsible search animation
* Navbar no collapse has extra space on the left
* Sidenav module open and close button should work if placed outside .sidenav-container
* Update breadcrumbs
* Update alerts example page
* Update alert styles
* button side border is cut off in input group
* Input-sm height should match btn-sm height
* Variables -padding-horizontal and -padding-vertical were reversed
* Add variable to customize border-radius on form-control
* Remove unused file
* Update button documentation
* Update button groups to match new style
* Classic buttons more customizable through variables.scss
* Update header-toolbar documentation, header-toolbar shouldn't collapse in mobile
* Header Toolbar should follow bs3 patterns better
* Remove old header toolbar variables
* Blog - Actions page heading text should truncate
* Side navigation menu focus gets cut off
* Update tooltip/popover colors, demo, and move tooltip variables closer to popover
* Add popover and tooltip code examples
* Popover and Tooltip should be able to have custom box shadows
* Switch width should expand to accomodate data-label
* Update switch documentation
* Example code accordion not animating properly
* Better fallback for browsers that don't support :checked
* More examples and documentation on extending switches page
* Fix extending switches demo
* Update _styled theme switches
* Classic theme switches should be more customizable through sass
* Add checkbox/radio styling no extra element
* Make checkbox consistent with input-group-addon
* Update select arrow icon to data uri and clean up checkbox
* Update form inputs to new styles
* Add line numbers for icon texts
* Icons component and extending icons page
* Smaller padding around email content
* Extending toolbars page
* Header Toolbar should follow new toolbar pattern
* Add toolbar-group breakpoints and update docs
* Extending toolbars page initial commit
* toolbar-group-expand should expand in firefox and ie, also update documentation
* Remove default margins on nameplate component
* Add liferay logo
* Fix toolbar spacing and alignment
* Clean up toolbar alignment in mobile and update toolbar demo page
* Add momentum scrolling for inline-scroller
* Adjust margins on inline-scroller inside dropdown-left-side for classic
* Update header-toolbar to use toolbar markup
* Toolbar links alignment
.dropdown display: inline-block causing alignment issues in other components
* Fix bottom spacing on dropdown menu in classic theme
* Replace slideout drawer with dropdown-menu-left-side
* Add left and right side dropdowns
* Toolbars should break properly in small screen widths
* Update toolbar component mark up and styles
* Update user-icon sizes to match buttons
* Add toolbar component and pages
* Add blogs action example page
* Slideout Drawer jquery plugin
* Use bootstrap3 tab module
* Add collapsible list groups
* input-group-addon text color to white
* Remove image gallery pages
* Site side navigation toggle alignment
* Add extending switches page, custom switch demo
* table-responsive-flip scrollbars shouldnt show if content fits
* table-responsive-flip should accomodate checkboxes
* Add equal height to side-navigation plugin
* Add more examples to extending nameplates
* Add profile headers and nameplate lists to extending nameplates page
* Update nameplate page/docs
* Update tables page
* Add sidenav plugin
* Note on striped progress bar not working in FF
* Create color-user-icon mixin and update nameplate page
* Add classic default navbar styles and open close search box
* Redo navbar base component to better accomodate search bar
* Update list-group
* Add status colors to tabular list group
* Update user icon colors
* Adjust header-toolbar first and second level sizes and add success style
* Adjust button sizes and simplify button element page
* Buttons should be same height as text input
* Remove border-radius prefixer from mixins
* Notification jquery plugin and some styles
* Use bootstrap 3 alert plugin
* Move header and toolbar to header-toolbar and update docs
* Form labels should be default text-color
* Badges and labels page, rearrange list-group page
* Add tabular-list-group component and add icon sizes
* Nameplate-list should be simple
* Move figures stuff to components
* Update extending cards and fix border-radius on card
* More extending cards documentation and minor alignment fixes
* Update card-btn-row
* Add type and figure helpers
* Remove card-btn-group and add link-group component
* Added Extending cards documentation
* Update mark, highlighted text should have padding when going to new line
* Add figure for image captions
* Fix alignment on card-horizontal, move padding to card-row, update docs
* Document card page and add some helper classes
* Use bootstrap 3 dropdown plugin
* Add nav-pills styles and nav helper classes
* Update alert section documentation
* Update global font colors
* Add blockquote sizes
* Update nav documentation
* Add jquery 2.1.3
* Add code highlighting
* Add blockquote colors and update type page
* Add customizable icon for nav open and close state
* Add nav demo
* Search box alignment in desktop for navbar
* Remove unused styles
* Update site navigation spacing
* Redo panel component
* Remove old panel variations
* Add heading-toolbar component
* Remove thumbnail variations
* Card component
* Update nameplate doc and minor alignment issues
* Add nameplate component
* Tab group right tabs not connected to content and clean up example code
* Add disabled fieldset section and rearrange form elements page
* Move color scheme section
* Update modal header
* Add sidenav to header
* Header page update icons, spacing, and variables
* Add alloy-font-awesome
* Update header with better pattern
* Update input spacing
* Update Todo list
* Update radio/checkboxes to match definition of FORMS
* Update nav-tabs to match definition of NAV TABS
* Create header first level and second level
* Update side nav, display table-cell too fragile
* Update colors and spacing on navbar dropdown in mobile
* Update desktop navbar default active hover open states
* Clean up navbar scss and update proportions
* Fix navbar not aligned in desktop
* Single link navbar prototype
* Center close button in alerts
* Style lead text in alerts
* Update alerts to definition of ALERTS
* Separate colors from typography and update warning color
* Fix nav spacing
* match navbar styles to definition of NAV BAR
* Update colors/box shadows on tooltip and popovers
* Update button proportions and remove drop shadow by default
* Update dropdown proportions
* Update popover proportions
* Update tooltip proportions
* Update pagination
* Add Breadcrumbs
* Update navs to lr7 styles
* Add tooltips
* Add popovers and box-shadows
* Update modals drop shadow and sf drop shadow variables
* Update input validation states
* Update pager with alternative styles
* Add more options to pagination styles and reorganize scss
* Update pagination and pager to lr7.1 styles
* Update form styles
* Added bourbon mixins for convenience
* Renaming _style to _site and _custom to _components to make it clearer the purpose of each stylesheet
* Chat Template
* Moving list groups to Elements page
* Add left, right, and bottom nav-tab variations
* Remove unused mail_template file
* Adds Mail Template
* Update dropdowns page
* Add responsive tables
* Adds experimental sliders
* Add profile page
* Update blog 1 col layout
* Adding Bourbon, fixing CSS related to the animated icon
* Adding Toggle Switches in Experimental section
* Adding a proper hamburger menu, with animation
* Update side navigation for firefox
* Add image gallery pages, styles, and images
* Update side navigation
* Update modals page and styles
* Updating to Bootstrap 3.2