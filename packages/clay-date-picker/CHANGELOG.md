# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.7.1](https://github.com/liferay/clay/compare/@clayui/date-picker@3.7.0...@clayui/date-picker@3.7.1) (2021-01-27)

**Note:** Version bump only for package @clayui/date-picker

# [3.7.0](https://github.com/liferay/clay/compare/@clayui/date-picker@3.6.3...@clayui/date-picker@3.7.0) (2021-01-13)

### Bug Fixes

-   **@clayui/shared:** update types so that storybook build doesn't complain ([38903aa](https://github.com/liferay/clay/commit/38903aa))

### Features

-   **@clayui/shared:** add custom hook for using an internal state if an external control isn't provided ([a34ccd9](https://github.com/liferay/clay/commit/a34ccd9))

## [3.6.3](https://github.com/liferay/clay/compare/@clayui/date-picker@3.6.2...@clayui/date-picker@3.6.3) (2020-12-29)

**Note:** Version bump only for package @clayui/date-picker

## [3.6.2](https://github.com/liferay/clay/compare/@clayui/date-picker@3.6.0...@clayui/date-picker@3.6.2) (2020-12-16)

**Note:** Version bump only for package @clayui/date-picker

## [3.6.1](https://github.com/liferay/clay/compare/@clayui/date-picker@3.6.0...@clayui/date-picker@3.6.1) (2020-12-02)

**Note:** Version bump only for package @clayui/date-picker

# [3.6.0](https://github.com/liferay/clay/compare/@clayui/date-picker@3.5.4...@clayui/date-picker@3.6.0) (2020-10-01)

### Features

-   **clayui.com:** Move API tables to new files and update document tabs, rename files to use singular naming instead of plural, change mainTabURL of pagination-bar to a proper one ([d812ee9](https://github.com/liferay/clay/commit/d812ee9))
-   add displayName for all components ([cc3211d](https://github.com/liferay/clay/commit/cc3211d))

## [3.5.4](https://github.com/liferay/clay/compare/@clayui/date-picker@3.5.3...@clayui/date-picker@3.5.4) (2020-08-28)

**Note:** Version bump only for package @clayui/date-picker

## [3.5.3](https://github.com/liferay/clay/compare/@clayui/date-picker@3.5.2...@clayui/date-picker@3.5.3) (2020-08-26)

**Note:** Version bump only for package @clayui/date-picker

## [3.5.2](https://github.com/liferay/clay/compare/@clayui/date-picker@3.5.1...@clayui/date-picker@3.5.2) (2020-08-21)

**Note:** Version bump only for package @clayui/date-picker

## [3.5.1](https://github.com/liferay/clay/compare/@clayui/date-picker@3.5.0...@clayui/date-picker@3.5.1) (2020-08-11)

**Note:** Version bump only for package @clayui/date-picker

# [3.5.0](https://github.com/liferay/clay/compare/@clayui/date-picker@3.4.2...@clayui/date-picker@3.5.0) (2020-07-28)

### Bug Fixes

-   update packages to appropriate dependencies ([0026168](https://github.com/liferay/clay/commit/0026168))

### Features

-   **@clayui/shared:** Adds an object called Keys for normalize Keyboard events checkings avoiding people to using strings and care about browser compat when using React syntetic Keyboard events ([95c8ea9](https://github.com/liferay/clay/commit/95c8ea9)), closes [/github.com/facebook/react/blob/b87aabdfe1/packages/react-dom/src/events/getEventKey.js#L12-L29](https://github.com//github.com/facebook/react/blob/b87aabdfe1/packages/react-dom/src/events/getEventKey.js/issues/L12-L29)

## [3.4.2](https://github.com/liferay/clay/compare/@clayui/date-picker@3.4.1...@clayui/date-picker@3.4.2) (2020-07-14)

**Note:** Version bump only for package @clayui/date-picker

## [3.4.1](https://github.com/liferay/clay/compare/@clayui/date-picker@3.4.0...@clayui/date-picker@3.4.1) (2020-07-07)

### Bug Fixes

-   **@clayui/date-picker:** Adds FocusScope for navigating int o DatePicker calendar component using TABS ([6632b65](https://github.com/liferay/clay/commit/6632b65))
-   **@clayui/date-picker:** Fix conditional ([587c3e4](https://github.com/liferay/clay/commit/587c3e4))
-   **@clayui/date-picker:** Fixes an edge case when the dot button does not select the current date ([ca7fdc3](https://github.com/liferay/clay/commit/ca7fdc3))
-   **@clayui/date-picker:** For old browsers, `Spacebar`, for the new ones, `' '` ([8b99c3c](https://github.com/liferay/clay/commit/8b99c3c))
-   **@clayui/date-picker:** Forces the expanded value to de false, closing Date Picker's calendar when the focus is outside the component ([90d22d4](https://github.com/liferay/clay/commit/90d22d4))
-   **@clayui/date-picker:** Remove unecessary onKeyDown and onKeyUp callbacks since DayNumber is a private component ([8259f58](https://github.com/liferay/clay/commit/8259f58))
-   **@clayui/date-picker:** Use `Spacebar` value for validating if the correct key of the KeyboardEvent was triggered ([64af3da](https://github.com/liferay/clay/commit/64af3da))
-   **@clayui/date-picker:** When selecting a date using space key, removes properly the `:active` state of the element ([e098b1f](https://github.com/liferay/clay/commit/e098b1f))

# [3.4.0](https://github.com/liferay/clay/compare/@clayui/date-picker@3.3.0...@clayui/date-picker@3.4.0) (2020-06-18)

### Bug Fixes

-   **clayui.com:** Fix wording and a few links on Date Picker and Button ([035d912](https://github.com/liferay/clay/commit/035d912))

### Features

-   **@clayui/date-picker:** remove moment.js and use date-fns helpers ([1fa3921](https://github.com/liferay/clay/commit/1fa3921))

# [3.3.0](https://github.com/liferay/clay/compare/@clayui/date-picker@3.2.1...@clayui/date-picker@3.3.0) (2020-05-21)

### Features

-   **@clayui/date-picker:** add props to control expand functionality ([1ec1255](https://github.com/liferay/clay/commit/1ec1255))

## [3.2.1](https://github.com/liferay/clay/compare/@clayui/date-picker@3.2.0...@clayui/date-picker@3.2.1) (2020-04-24)

### Bug Fixes

-   Fix accessibility issues ([5e09db0](https://github.com/liferay/clay/commit/5e09db0))

# [3.2.0](https://github.com/liferay/clay/tree/master/packages/clay-date-picker/compare/@clayui/date-picker@3.1.1...@clayui/date-picker@3.2.0) (2020-03-26)

### Bug Fixes

-   **@clayui/date-picker:** adds the API to disable date picker features ([cb6c254](https://github.com/liferay/clay/commit/cb6c254))

### Features

-   **@clayui/date-picker:** Add forwardRef support to Input ([e07b189](https://github.com/liferay/clay/commit/e07b189))
-   **@clayui/date-picker:** add helper for easily getting locale info from moment ([4536b97](https://github.com/liferay/clay/commit/4536b97))
-   **@clayui/date-picker:** Adds a new API to be called in the user's navigation in the date picker ([199e5b7](https://github.com/liferay/clay/commit/199e5b7))
-   **@clayui/date-picker:** forwards all other props to the InputDate ([9fed37a](https://github.com/liferay/clay/commit/9fed37a))

## [3.1.1](https://github.com/liferay/clay/tree/master/packages/clay-date-picker/compare/@clayui/date-picker@3.1.0...@clayui/date-picker@3.1.1) (2020-03-12)

**Note:** Version bump only for package @clayui/date-picker

# 3.1.0 (2020-02-28)

### Bug Fixes

-   **clay-date-picker:** fix warnings in tests ([3db5032](https://github.com/liferay/clay/commit/3db5032))
-   normalize names of components ([3a0abea](https://github.com/liferay/clay/commit/3a0abea))
-   update components to include 'types' and 'ts:main' package keys ([9e24b59](https://github.com/liferay/clay/commit/9e24b59))
-   **date-picker:** add missing dependency ([382a797](https://github.com/liferay/clay/commit/382a797))
-   **drop-down:** use dom-align instead of metal-position ([335ff38](https://github.com/liferay/clay/commit/335ff38))

### Features

-   update react-testing-library to be @testing-library/react ([bd78145](https://github.com/liferay/clay/commit/bd78145))
-   **@clayui/time-picker:** add the ariaLabels API to label inputs and buttons ([da0544f](https://github.com/liferay/clay/commit/da0544f))
-   **form:** add helper components for markup ([3ce63d4](https://github.com/liferay/clay/commit/3ce63d4))

## [3.0.7](https://github.com/liferay/clay/tree/master/packages/clay-date-picker/compare/@clayui/date-picker@3.0.6...@clayui/date-picker@3.0.7) (2020-02-13)

**Note:** Version bump only for package @clayui/date-picker

## [3.0.6](https://github.com/liferay/clay/tree/master/packages/clay-date-picker/compare/@clayui/date-picker@3.0.3...@clayui/date-picker@3.0.6) (2020-01-31)

### Bug Fixes

-   **drop-down:** use dom-align instead of metal-position ([335ff38](https://github.com/liferay/clay/commit/335ff38))

## [3.0.5](https://github.com/liferay/clay/tree/master/packages/clay-date-picker/compare/@clayui/date-picker@3.0.3...@clayui/date-picker@3.0.5) (2020-01-20)

### Bug Fixes

-   **drop-down:** use dom-align instead of metal-position ([335ff38](https://github.com/liferay/clay/commit/335ff38))

## [3.0.4](https://github.com/liferay/clay/tree/master/packages/clay-date-picker/compare/@clayui/date-picker@3.0.3...@clayui/date-picker@3.0.4) (2019-12-05)

### Bug Fixes

-   **drop-down:** use dom-align instead of metal-position ([335ff38](https://github.com/liferay/clay/commit/335ff38))

## [3.0.3](https://github.com/liferay/clay/tree/master/packages/clay-date-picker/compare/@clayui/date-picker@3.0.2...@clayui/date-picker@3.0.3) (2019-11-07)

**Note:** Version bump only for package @clayui/date-picker

## [3.0.2](https://github.com/liferay/clay/tree/master/packages/clay-date-picker/compare/@clayui/date-picker@3.0.1...@clayui/date-picker@3.0.2) (2019-11-01)

**Note:** Version bump only for package @clayui/date-picker

## [3.0.1](https://github.com/liferay/clay/tree/master/packages/clay-date-picker/compare/@clayui/date-picker@3.0.0...@clayui/date-picker@3.0.1) (2019-10-28)

**Note:** Version bump only for package @clayui/date-picker
