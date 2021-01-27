# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.14.3](https://github.com/liferay/clay/compare/@clayui/form@3.14.2...@clayui/form@3.14.3) (2021-01-27)

**Note:** Version bump only for package @clayui/form

## [3.14.2](https://github.com/liferay/clay/compare/@clayui/form@3.14.1...@clayui/form@3.14.2) (2021-01-13)

**Note:** Version bump only for package @clayui/form

## [3.14.1](https://github.com/liferay/clay/compare/@clayui/form@3.14.0...@clayui/form@3.14.1) (2020-12-29)

### Bug Fixes

-   **@clayui/form:** ClayToggle shouldn't overwrite props ([21d9702](https://github.com/liferay/clay/commit/21d9702))

# [3.14.0](https://github.com/liferay/clay/compare/@clayui/form@3.12.0...@clayui/form@3.14.0) (2020-12-16)

### Bug Fixes

-   **@clayui/form:** ClayToggle should use a label element instead of span ([d154e53](https://github.com/liferay/clay/commit/d154e53))

### Features

-   **clayui.com:** update logic for handling navigation ([8186ed0](https://github.com/liferay/clay/commit/8186ed0))

# [3.13.0](https://github.com/liferay/clay/compare/@clayui/form@3.12.0...@clayui/form@3.13.0) (2020-12-02)

### Features

-   **clayui.com:** update logic for handling navigation ([8186ed0](https://github.com/liferay/clay/commit/8186ed0))

# [3.12.0](https://github.com/liferay/clay/compare/@clayui/form@3.11.1...@clayui/form@3.12.0) (2020-10-01)

### Bug Fixes

-   **@clayui/dual-list-box:** Remove responsibility from users to manage button state, and save checks into variables for clarity ([a10d17c](https://github.com/liferay/clay/commit/a10d17c))
-   **@clayui/dual-list-box:** Simplify the checks and remove one of the variables no longer needed for them ([cee4f6a](https://github.com/liferay/clay/commit/cee4f6a))

### Features

-   **@clayui/dual-list-box:** Add more strict checks for disabling reorder/transfer buttons ([49512a3](https://github.com/liferay/clay/commit/49512a3))
-   **clayui.com:** Move API tables to new files and update document tabs, rename files to use singular naming instead of plural, change mainTabURL of pagination-bar to a proper one ([d812ee9](https://github.com/liferay/clay/commit/d812ee9))
-   add displayName for all components ([cc3211d](https://github.com/liferay/clay/commit/cc3211d))

## [3.11.1](https://github.com/liferay/clay/compare/@clayui/form@3.11.0...@clayui/form@3.11.1) (2020-08-28)

**Note:** Version bump only for package @clayui/form

# [3.11.0](https://github.com/liferay/clay/compare/@clayui/form@3.10.1...@clayui/form@3.11.0) (2020-08-26)

### Features

-   **@clayui/form:** Add Radio JSP code example ([62f2593](https://github.com/liferay/clay/commit/62f2593))

## [3.10.1](https://github.com/liferay/clay/compare/@clayui/form@3.10.0...@clayui/form@3.10.1) (2020-08-21)

### Bug Fixes

-   **@clayui/form:** Makes ClayInput's `type` property has a value `text` by default ([cb5ddf6](https://github.com/liferay/clay/commit/cb5ddf6))

# [3.10.0](https://github.com/liferay/clay/compare/@clayui/form@3.9.0...@clayui/form@3.10.0) (2020-07-28)

### Bug Fixes

-   update packages to appropriate dependencies ([0026168](https://github.com/liferay/clay/commit/0026168))

### Features

-   **@clayui/shared:** Adds an object called Keys for normalize Keyboard events checkings avoiding people to using strings and care about browser compat when using React syntetic Keyboard events ([95c8ea9](https://github.com/liferay/clay/commit/95c8ea9)), closes [/github.com/facebook/react/blob/b87aabdfe1/packages/react-dom/src/events/getEventKey.js#L12-L29](https://github.com//github.com/facebook/react/blob/b87aabdfe1/packages/react-dom/src/events/getEventKey.js/issues/L12-L29)

# [3.9.0](https://github.com/liferay/clay/compare/@clayui/form@3.8.0...@clayui/form@3.9.0) (2020-07-14)

### Bug Fixes

-   **@clayui/form:** Turns disableRTL and disableLTR optional props ([b0a0eea](https://github.com/liferay/clay/commit/b0a0eea))

### Features

-   **@clayui/form:** Adds `disableRTL` and `disableLTR` for handling if transfer buttons can be disabled or not leveraging more power to developer when trying to implement a maximum number of items for example and update storybook with a case for use `disable{LTR,RTL}` with maxItems like feature ([0556694](https://github.com/liferay/clay/commit/0556694))
-   **@clayui/form:** Adds `leftMaxItems` and `rightMaxItems` properties for providing the user to limit the number of items that each select box can store ([30e70fe](https://github.com/liferay/clay/commit/30e70fe))

# [3.8.0](https://github.com/liferay/clay/compare/@clayui/form@3.7.1...@clayui/form@3.8.0) (2020-05-21)

### Features

-   **clayui.com:** Improve API docs - Make displayNames consistent ([5a33822](https://github.com/liferay/clay/commit/5a33822))
-   **clayui.com:** Improve API docs of Form, Input & Link components ([38f2696](https://github.com/liferay/clay/commit/38f2696))
-   **clayui.com:** Improve component docs by updating content - Badge, Breadcrumb, Dual List Box, Loading Indicator, Localized Input & Multi Step Nav ([c4ad126](https://github.com/liferay/clay/commit/c4ad126))
-   **clayui.com:** Improve component docs by updating content - Pagination, Popover, Progress Bar, Slider, Toggle & Tooltip ([01b555a](https://github.com/liferay/clay/commit/01b555a))
-   **clayui.com:** Improve component docs by updating content - Typos, wording, and variable names ([f1d795c](https://github.com/liferay/clay/commit/f1d795c))
-   **clayui.com:** Revert the change made to headings used, rename stickers and tables to sticker and table respectively, also change some wording ([791dabe](https://github.com/liferay/clay/commit/791dabe))
-   **clayui.com:** Update content structure: Checkbox, Management Toolbar, Select Box, Sticker, Table & Tabs ([0fcd54a](https://github.com/liferay/clay/commit/0fcd54a))

## [3.7.1](https://github.com/liferay/clay/compare/@clayui/form@3.7.0...@clayui/form@3.7.1) (2020-04-24)

### Bug Fixes

-   **@clayui/form:** Add prop type to bypass generator bug ([94d4680](https://github.com/liferay/clay/commit/94d4680))
-   Fix accessibility issues ([5e09db0](https://github.com/liferay/clay/commit/5e09db0))

# [3.7.0](https://github.com/liferay/clay/tree/master/packages/clay-form/compare/@clayui/form@3.6.0...@clayui/form@3.7.0) (2020-03-26)

### Features

-   **@clayui/form:** DualListbox & Selectbox ([0ad5de4](https://github.com/liferay/clay/commit/0ad5de4))

# 3.6.0 (2020-02-28)

### Bug Fixes

-   bump all components to alpha.1 ([afabdec](https://github.com/liferay/clay/commit/afabdec))
-   ignore case when sorting props ([7c9ae28](https://github.com/liferay/clay/commit/7c9ae28))
-   normalize names of components ([3a0abea](https://github.com/liferay/clay/commit/3a0abea))
-   update components to include 'types' and 'ts:main' package keys ([9e24b59](https://github.com/liferay/clay/commit/9e24b59))
-   **@clayui/form:** add containerRenderer API on InputWithAutocomplete to pass to ClayAutocomplete ([ad1e49c](https://github.com/liferay/clay/commit/ad1e49c))
-   **@clayui/form:** apply requested changes ([076feac](https://github.com/liferay/clay/commit/076feac))
-   **@clayui/form:** fix source formatting issues ([7c39d28](https://github.com/liferay/clay/commit/7c39d28))
-   **@clayui/form:** remove stuck value from Checkbox ([db565b1](https://github.com/liferay/clay/commit/db565b1))
-   **@clayui/form:** use FocusScope component ([e6f13f6](https://github.com/liferay/clay/commit/e6f13f6))
-   **@clayui/shared:** add focus control by left and right arrow keys ([e314419](https://github.com/liferay/clay/commit/e314419))
-   **form:** add margin between icon and feedback message ([50b5a41](https://github.com/liferay/clay/commit/50b5a41))
-   **form:** break multi-select into low-level components ([5c52a5d](https://github.com/liferay/clay/commit/5c52a5d))
-   **form:** remove ClayInputWithAutocomplete and move MultiSelect to its own package ([a91c8e3](https://github.com/liferay/clay/commit/a91c8e3))
-   **muli-select:** inputName should be optional ([7ede309](https://github.com/liferay/clay/commit/7ede309))
-   **multi-select:** allow for event callbacks on input element ([dd3d47e](https://github.com/liferay/clay/commit/dd3d47e))

### Features

-   **@clayui/form:** add missing hidden input element ([4e1c71f](https://github.com/liferay/clay/commit/4e1c71f))
-   add the `<ClayForm.Input />` experimental component ([72e5ddf](https://github.com/liferay/clay/commit/72e5ddf))
-   **@clayui/form:** add `forwardRef` support for `<ClayForm />` ([f5f3e7c](https://github.com/liferay/clay/commit/f5f3e7c))
-   **@clayui/form:** Adds missing size properties on Form and Input component ([753249b](https://github.com/liferay/clay/commit/753249b))
-   **@clayui/form:** adds the Clear All specification in multi-select ([331387c](https://github.com/liferay/clay/commit/331387c))
-   **@clayui/form:** create new toggle component ([8abc13d](https://github.com/liferay/clay/commit/8abc13d))
-   **clay-form:** create high-level InputWithAutocomplete component ([692610a](https://github.com/liferay/clay/commit/692610a))
-   **clay-form:** create high-level multi-select component ([feb3abc](https://github.com/liferay/clay/commit/feb3abc))
-   **clay-form:** export an actual <form> element ([aa71686](https://github.com/liferay/clay/commit/aa71686))
-   update react-testing-library to be @testing-library/react ([bd78145](https://github.com/liferay/clay/commit/bd78145))
-   **form:** add helper components for markup ([3ce63d4](https://github.com/liferay/clay/commit/3ce63d4))
-   **management-toolbar:** add placeholder prop for search input ([9056774](https://github.com/liferay/clay/commit/9056774))
-   **select:** add optgroups for select ([5ee50b2](https://github.com/liferay/clay/commit/5ee50b2))

# [3.5.0](https://github.com/liferay/clay/tree/master/packages/clay-form/compare/@clayui/form@3.4.0...@clayui/form@3.5.0) (2020-02-13)

### Features

-   **@clayui/form:** create new toggle component ([8abc13d](https://github.com/liferay/clay/commit/8abc13d))

# [3.4.0](https://github.com/liferay/clay/tree/master/packages/clay-form/compare/@clayui/form@3.2.0...@clayui/form@3.4.0) (2020-01-31)

### Bug Fixes

-   **form:** add margin between icon and feedback message ([50b5a41](https://github.com/liferay/clay/commit/50b5a41))

### Features

-   **select:** add optgroups for select ([5ee50b2](https://github.com/liferay/clay/commit/5ee50b2))

# [3.3.0](https://github.com/liferay/clay/tree/master/packages/clay-form/compare/@clayui/form@3.2.0...@clayui/form@3.3.0) (2020-01-20)

### Bug Fixes

-   **form:** add margin between icon and feedback message ([50b5a41](https://github.com/liferay/clay/commit/50b5a41))

### Features

-   **select:** add optgroups for select ([5ee50b2](https://github.com/liferay/clay/commit/5ee50b2))

## [3.2.1](https://github.com/liferay/clay/tree/master/packages/clay-form/compare/@clayui/form@3.2.0...@clayui/form@3.2.1) (2019-12-05)

### Bug Fixes

-   **form:** add margin between icon and feedback message ([50b5a41](https://github.com/liferay/clay/commit/50b5a41))

# [3.2.0](https://github.com/liferay/clay/tree/master/packages/clay-form/compare/@clayui/form@3.1.0...@clayui/form@3.2.0) (2019-11-07)

### Features

-   **@clayui/form:** add `forwardRef` support for `<ClayForm />` ([f5f3e7c](https://github.com/liferay/clay/commit/f5f3e7c))

# [3.1.0](https://github.com/liferay/clay/tree/master/packages/clay-form/compare/@clayui/form@3.0.0...@clayui/form@3.1.0) (2019-10-28)

### Bug Fixes

-   **@clayui/form:** remove stuck value from Checkbox ([db565b1](https://github.com/liferay/clay/commit/db565b1))

### Features

-   **@clayui/form:** Adds missing size properties on Form and Input component ([753249b](https://github.com/liferay/clay/commit/753249b))
