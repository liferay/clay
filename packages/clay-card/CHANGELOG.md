# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.6.5](https://github.com/liferay/clay/compare/@clayui/card@3.6.4...@clayui/card@3.6.5) (2021-01-27)

**Note:** Version bump only for package @clayui/card

## [3.6.4](https://github.com/liferay/clay/compare/@clayui/card@3.6.3...@clayui/card@3.6.4) (2021-01-13)

**Note:** Version bump only for package @clayui/card

## [3.6.3](https://github.com/liferay/clay/compare/@clayui/card@3.6.2...@clayui/card@3.6.3) (2020-12-29)

**Note:** Version bump only for package @clayui/card

## [3.6.2](https://github.com/liferay/clay/compare/@clayui/card@3.6.0...@clayui/card@3.6.2) (2020-12-16)

### Bug Fixes

-   Do not render description if it's not passed. Make description optional in CardWithUser. Update tests and snapshots. ([bcfc809](https://github.com/liferay/clay/commit/bcfc809))
-   don't use useMemo ([90ebd60](https://github.com/liferay/clay/commit/90ebd60))
-   flush and fluid should not be used together in CardWithInfo ([287baef](https://github.com/liferay/clay/commit/287baef))
-   Make stickerProps nullable and minor refactor ([a5aefb2](https://github.com/liferay/clay/commit/a5aefb2))
-   **@clayui/card:** prevent double 'card' class on ClayCardWithHorizontal ([d7fb177](https://github.com/liferay/clay/commit/d7fb177))
-   set stickerProps default value and use that instead make it nullable so stickerProps={undefined} can be passed to render no sticker ([f0cb681](https://github.com/liferay/clay/commit/f0cb681))
-   **@clayui/card:** revert markup cleanup, SF ([3747b61](https://github.com/liferay/clay/commit/3747b61))

## [3.6.1](https://github.com/liferay/clay/compare/@clayui/card@3.6.0...@clayui/card@3.6.1) (2020-12-02)

### Bug Fixes

-   Do not render description if it's not passed. Make description optional in CardWithUser. Update tests and snapshots. ([bcfc809](https://github.com/liferay/clay/commit/bcfc809))
-   don't use useMemo ([90ebd60](https://github.com/liferay/clay/commit/90ebd60))
-   flush and fluid should not be used together in CardWithInfo ([287baef](https://github.com/liferay/clay/commit/287baef))
-   Make stickerProps nullable and minor refactor ([a5aefb2](https://github.com/liferay/clay/commit/a5aefb2))
-   **@clayui/card:** prevent double 'card' class on ClayCardWithHorizontal ([d7fb177](https://github.com/liferay/clay/commit/d7fb177))
-   set stickerProps default value and use that instead make it nullable so stickerProps={undefined} can be passed to render no sticker ([f0cb681](https://github.com/liferay/clay/commit/f0cb681))
-   **@clayui/card:** revert markup cleanup, SF ([3747b61](https://github.com/liferay/clay/commit/3747b61))

# [3.6.0](https://github.com/liferay/clay/compare/@clayui/card@3.5.1...@clayui/card@3.6.0) (2020-11-24)

### Bug Fixes

-   **@clayui/card:** Change default symbols and add displayType attribute to CardWithInfo so the the correct default symbol and sticker symbol could be used depending on the displayType ([2ebb132](https://github.com/liferay/clay/commit/2ebb132))
-   **@clayui/card:** Extend card snapshot tests to include dropdown trigger markups ([18d9266](https://github.com/liferay/clay/commit/18d9266))
-   **@clayui/card:** Remove support for labels in CardWithUser ([c2badc0](https://github.com/liferay/clay/commit/c2badc0))
-   **@clayui/card:** Set display type of dropdown triggers to `unstyled` ([dee6728](https://github.com/liferay/clay/commit/dee6728))

### Features

-   **@clayui/card:** Add support for stickerProps ([072aef8](https://github.com/liferay/clay/commit/072aef8))

## [3.5.1](https://github.com/liferay/clay/compare/@clayui/card@3.5.0...@clayui/card@3.5.1) (2020-11-16)

### Bug Fixes

-   **@clayui/card:** Add dependency ([6796038](https://github.com/liferay/clay/commit/6796038))
-   **@clayui/card:** Avoid setting `href` on `span` element ([a0d9cf4](https://github.com/liferay/clay/commit/a0d9cf4)), closes [#3779](https://github.com/liferay/clay/issues/3779)
-   **@clayui/card:** stops adding unnecessary classes when the component is not selectable ([2c91fc6](https://github.com/liferay/clay/commit/2c91fc6))
-   **@clayui/card:** Use <ClayButtonWithIcon> instead of vanilla <button>. It sets type='button' that prevents form submission. ([03d8ff7](https://github.com/liferay/clay/commit/03d8ff7))
-   **@clayui/card:** Use ClayButtonWithIcon instead of vanilla button in clay-card ([57b5a8f](https://github.com/liferay/clay/commit/57b5a8f))

# [3.5.0](https://github.com/liferay/clay/compare/@clayui/card@3.4.0...@clayui/card@3.5.0) (2020-10-22)

### Bug Fixes

-   **@clayui/card:** make alt attribute configurable ([8cf0551](https://github.com/liferay/clay/commit/8cf0551))

### Features

-   **@clayui/card:** add ability to change symbol for user icon ([057f497](https://github.com/liferay/clay/commit/057f497))
-   **@clayui/card:** add API to pass props to the checkbox ([bad0491](https://github.com/liferay/clay/commit/bad0491))
-   **@clayui/card:** add support for base HTMLDivElement and HTMLAnchorElement props in high-level components ([9b1a24b](https://github.com/liferay/clay/commit/9b1a24b))

# [3.4.0](https://github.com/liferay/clay/compare/@clayui/card@3.3.4...@clayui/card@3.4.0) (2020-10-01)

### Features

-   **clayui.com:** Move API tables to new files and update document tabs, rename files to use singular naming instead of plural, change mainTabURL of pagination-bar to a proper one ([d812ee9](https://github.com/liferay/clay/commit/d812ee9))

## [3.3.4](https://github.com/liferay/clay/compare/@clayui/card@3.3.3...@clayui/card@3.3.4) (2020-08-28)

**Note:** Version bump only for package @clayui/card

## [3.3.3](https://github.com/liferay/clay/compare/@clayui/card@3.3.2...@clayui/card@3.3.3) (2020-08-26)

**Note:** Version bump only for package @clayui/card

## [3.3.2](https://github.com/liferay/clay/compare/@clayui/card@3.3.1...@clayui/card@3.3.2) (2020-08-21)

**Note:** Version bump only for package @clayui/card

## [3.3.1](https://github.com/liferay/clay/compare/@clayui/card@3.3.0...@clayui/card@3.3.1) (2020-08-11)

**Note:** Version bump only for package @clayui/card

# [3.3.0](https://github.com/liferay/clay/compare/@clayui/card@3.2.4...@clayui/card@3.3.0) (2020-07-28)

### Bug Fixes

-   update packages to appropriate dependencies ([0026168](https://github.com/liferay/clay/commit/0026168))
-   **@clayui/sticker:** remove rounded option ([c5a0dbf](https://github.com/liferay/clay/commit/c5a0dbf))

### Features

-   **@clayui/shared:** Adds an object called Keys for normalize Keyboard events checkings avoiding people to using strings and care about browser compat when using React syntetic Keyboard events ([95c8ea9](https://github.com/liferay/clay/commit/95c8ea9)), closes [/github.com/facebook/react/blob/b87aabdfe1/packages/react-dom/src/events/getEventKey.js#L12-L29](https://github.com//github.com/facebook/react/blob/b87aabdfe1/packages/react-dom/src/events/getEventKey.js/issues/L12-L29)
-   **@clayui/sticker:** add more low level components ([a6dd36f](https://github.com/liferay/clay/commit/a6dd36f))

## [3.2.4](https://github.com/liferay/clay/compare/@clayui/card@3.2.3...@clayui/card@3.2.4) (2020-07-14)

**Note:** Version bump only for package @clayui/card

## [3.2.3](https://github.com/liferay/clay/compare/@clayui/card@3.2.2...@clayui/card@3.2.3) (2020-07-07)

### Bug Fixes

-   **@clayui/card:** Adds a missing onKeyDown callback value on ClayCardWithNavigation ([48f8cdf](https://github.com/liferay/clay/commit/48f8cdf))
-   **@clayui/card:** When pressing `enter` or `space`, triggers a click event on CardWithNavigation ([877eae0](https://github.com/liferay/clay/commit/877eae0))

## [3.2.2](https://github.com/liferay/clay/compare/@clayui/card@3.2.1...@clayui/card@3.2.2) (2020-06-18)

**Note:** Version bump only for package @clayui/card

## [3.2.1](https://github.com/liferay/clay/compare/@clayui/card@3.2.0...@clayui/card@3.2.1) (2020-05-21)

### Bug Fixes

-   **@clayui/card:** check for values before rendering container elements ([a732a8e](https://github.com/liferay/clay/commit/a732a8e))
-   apply @clayui/layout to other components ([e8a6d0e](https://github.com/liferay/clay/commit/e8a6d0e))

# [3.2.0](https://github.com/liferay/clay/compare/@clayui/card@3.1.2...@clayui/card@3.2.0) (2020-04-24)

### Bug Fixes

-   Fix accessibility issues ([5e09db0](https://github.com/liferay/clay/commit/5e09db0))

### Features

-   **@clayui/card:** Add Product Card story to ClayCard ([9ce6ed3](https://github.com/liferay/clay/commit/9ce6ed3))
-   **@clayui/card:** Use Clay components instead of plain HTML, undeclare a variable and move it to local scope ([37621cd](https://github.com/liferay/clay/commit/37621cd))

## [3.1.2](https://github.com/liferay/clay/tree/master/packages/clay-card/compare/@clayui/card@3.1.1...@clayui/card@3.1.2) (2020-03-26)

**Note:** Version bump only for package @clayui/card

## [3.1.1](https://github.com/liferay/clay/tree/master/packages/clay-card/compare/@clayui/card@3.1.0...@clayui/card@3.1.1) (2020-03-12)

### Bug Fixes

-   **@clayui/card:** use ClayLink over anchor tag ([02a8dd1](https://github.com/liferay/clay/commit/02a8dd1))

# 3.1.0 (2020-02-28)

### Bug Fixes

-   add displayName to context for dev tools ([82e1e8c](https://github.com/liferay/clay/commit/82e1e8c))
-   bump all components to alpha.1 ([afabdec](https://github.com/liferay/clay/commit/afabdec))
-   normalize names of components ([3a0abea](https://github.com/liferay/clay/commit/3a0abea))
-   update components to include 'types' and 'ts:main' package keys ([9e24b59](https://github.com/liferay/clay/commit/9e24b59))
-   **@clayui/card:** add prop `tag` to make Description configurable ([0ce1b75](https://github.com/liferay/clay/commit/0ce1b75))
-   **@clayui/card:** change the tag to the Description component ([25ceea7](https://github.com/liferay/clay/commit/25ceea7))
-   **@clayui/card:** Fix AspectRatio component to match css class names ([fa82d3f](https://github.com/liferay/clay/commit/fa82d3f))
-   **@clayui/form:** remove stuck value from Checkbox ([db565b1](https://github.com/liferay/clay/commit/db565b1))
-   **card:** prevent unwanted DOM thrash in ClayCard ([#2916](https://github.com/liferay/clay/commit/05bcbe6))

### Features

-   update react-testing-library to be @testing-library/react ([bd78145](https://github.com/liferay/clay/commit/bd78145))
-   **@clayui/card:** add disabled state for high-level components ([87d8d5b](https://github.com/liferay/clay/commit/87d8d5b))
-   **@clayui/card:** break Card.Body into Card.Row to increase the surface of possibilities ([ac9f3bb](https://github.com/liferay/clay/commit/ac9f3bb))
-   **card:** create CardWithInfo and CardWithHorizontal high-level components ([f3de6ed](https://github.com/liferay/clay/commit/f3de6ed))
-   **card:** create high-level CardWithUser component ([8d06aa0](https://github.com/liferay/clay/commit/8d06aa0))
-   **clay-card:** create high-level ClayCardWithNavigation component ([f027b12](https://github.com/liferay/clay/commit/f027b12))
-   **form:** add helper components for markup ([3ce63d4](https://github.com/liferay/clay/commit/3ce63d4))

## [3.0.7](https://github.com/liferay/clay/tree/master/packages/clay-card/compare/@clayui/card@3.0.6...@clayui/card@3.0.7) (2020-02-13)

### Bug Fixes

-   **card:** prevent unwanted DOM thrash in ClayCard ([#2916](https://github.com/liferay/clay/commit/05bcbe6))

## [3.0.6](https://github.com/liferay/clay/tree/master/packages/clay-card/compare/@clayui/card@3.0.3...@clayui/card@3.0.6) (2020-01-31)

**Note:** Version bump only for package @clayui/card

## [3.0.5](https://github.com/liferay/clay/tree/master/packages/clay-card/compare/@clayui/card@3.0.3...@clayui/card@3.0.5) (2020-01-20)

**Note:** Version bump only for package @clayui/card

## [3.0.4](https://github.com/liferay/clay/tree/master/packages/clay-card/compare/@clayui/card@3.0.3...@clayui/card@3.0.4) (2019-12-05)

**Note:** Version bump only for package @clayui/card

## [3.0.3](https://github.com/liferay/clay/tree/master/packages/clay-card/compare/@clayui/card@3.0.2...@clayui/card@3.0.3) (2019-11-07)

**Note:** Version bump only for package @clayui/card

## [3.0.2](https://github.com/liferay/clay/tree/master/packages/clay-card/compare/@clayui/card@3.0.1...@clayui/card@3.0.2) (2019-11-01)

**Note:** Version bump only for package @clayui/card

## [3.0.1](https://github.com/liferay/clay/tree/master/packages/clay-card/compare/@clayui/card@3.0.0...@clayui/card@3.0.1) (2019-10-28)

### Bug Fixes

-   **@clayui/card:** add prop `tag` to make Description configurable ([0ce1b75](https://github.com/liferay/clay/commit/0ce1b75))
-   **@clayui/card:** Fix AspectRatio component to match css class names ([fa82d3f](https://github.com/liferay/clay/commit/fa82d3f))
-   **@clayui/form:** remove stuck value from Checkbox ([db565b1](https://github.com/liferay/clay/commit/db565b1))
