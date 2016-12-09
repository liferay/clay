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