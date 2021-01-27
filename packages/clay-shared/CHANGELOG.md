# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.5.0](https://github.com/liferay/clay/compare/@clayui/shared@3.4.0...@clayui/shared@3.5.0) (2021-01-27)

### Features

-   **@clayui/drop-down:** add api for controlling the active state of the menu ([28e5191](https://github.com/liferay/clay/commit/28e5191))

# [3.4.0](https://github.com/liferay/clay/compare/@clayui/shared@3.3.2...@clayui/shared@3.4.0) (2021-01-13)

### Bug Fixes

-   **@clayui/shared:** remove useTransitionHeight in favor of react-transition-group ([d2311f9](https://github.com/liferay/clay/commit/d2311f9))
-   **@clayui/shared:** update types so that storybook build doesn't complain ([38903aa](https://github.com/liferay/clay/commit/38903aa))

### Features

-   **@clayui/shared:** add custom hook for using an internal state if an external control isn't provided ([a34ccd9](https://github.com/liferay/clay/commit/a34ccd9))

## [3.3.2](https://github.com/liferay/clay/compare/@clayui/shared@3.3.0...@clayui/shared@3.3.2) (2020-12-16)

### Bug Fixes

-   **shared:** avoid race condition with Senna.js ([f0754ea](https://github.com/liferay/clay/commit/f0754ea)), closes [/github.com/liferay-frontend/liferay-portal/pull/565#issuecomment-736854056](https://github.com//github.com/liferay-frontend/liferay-portal/pull/565/issues/issuecomment-736854056)

## [3.3.1](https://github.com/liferay/clay/compare/@clayui/shared@3.3.0...@clayui/shared@3.3.1) (2020-12-02)

### Bug Fixes

-   **shared:** avoid race condition with Senna.js ([f0754ea](https://github.com/liferay/clay/commit/f0754ea)), closes [/github.com/liferay-frontend/liferay-portal/pull/565#issuecomment-736854056](https://github.com//github.com/liferay-frontend/liferay-portal/pull/565/issues/issuecomment-736854056)

# [3.3.0](https://github.com/liferay/clay/compare/@clayui/shared@3.2.3...@clayui/shared@3.3.0) (2020-10-01)

### Bug Fixes

-   **@clayui/shared:** removes the onTransitionEnd listener from elements by setTimeout ([4cf740a](https://github.com/liferay/clay/commit/4cf740a))
-   **@clayui/shared:** useTransitionHeight should still expand and collapse if transitions aren't supported ([bb1a858](https://github.com/liferay/clay/commit/bb1a858)), closes [#3637](https://github.com/liferay/clay/issues/3637)

### Features

-   add displayName for all components ([cc3211d](https://github.com/liferay/clay/commit/cc3211d))

## [3.2.3](https://github.com/liferay/clay/compare/@clayui/shared@3.2.2...@clayui/shared@3.2.3) (2020-08-28)

### Bug Fixes

-   **@clayui/shared:** ignores elements within the scope with tabindex="-1" from the focus manager ([167b11a](https://github.com/liferay/clay/commit/167b11a))

## [3.2.2](https://github.com/liferay/clay/compare/@clayui/shared@3.2.1...@clayui/shared@3.2.2) (2020-08-26)

### Bug Fixes

-   **@clayui/shared:** fixes side effect of focusing on the first element when the active element does not exist in the scope ([4a136da](https://github.com/liferay/clay/commit/4a136da))

## [3.2.1](https://github.com/liferay/clay/compare/@clayui/shared@3.2.0...@clayui/shared@3.2.1) (2020-07-28)

**Note:** Version bump only for package @clayui/shared

## [3.1.3](https://github.com/liferay/clay/compare/@clayui/shared@3.1.2...@clayui/shared@3.1.3) (2020-07-07)

### Bug Fixes

-   **@clayui/link:** pass onClick to ClayLink ([1018420](https://github.com/liferay/clay/commit/1018420))

## [3.1.2](https://github.com/liferay/clay/compare/@clayui/shared@3.1.1...@clayui/shared@3.1.2) (2020-06-18)

### Bug Fixes

-   **@clayui/shared:** only preventDefault if next/previous node exists in the focusManager ([6317e69](https://github.com/liferay/clay/commit/6317e69))

## [3.1.1](https://github.com/liferay/clay/compare/@clayui/shared@3.1.0...@clayui/shared@3.1.1) (2020-04-24)

**Note:** Version bump only for package @clayui/shared

# 3.1.0 (2020-02-28)

### Bug Fixes

-   **@clayui/shared:** add focus control by left and right arrow keys ([e314419](https://github.com/liferay/clay/commit/e314419))
-   **@clayui/shared:** add reference to children ref ([38896b6](https://github.com/liferay/clay/commit/38896b6))
-   **@clayui/shared:** collects focusable elements within a focusable element ([3ce4e8e](https://github.com/liferay/clay/commit/3ce4e8e))
-   **@clayui/shared:** get the Fiber from the ref ([9980545](https://github.com/liferay/clay/commit/9980545))
-   **@clayui/shared:** use another method to create a new array from an HTMLCollection ([6d98c43](https://github.com/liferay/clay/commit/6d98c43))
-   **panel:** collapsing doesn't work well when there is more than one child element ([f16fd86](https://github.com/liferay/clay/commit/f16fd86))
-   **portal:** automatically nest portals if they are inside one another ([dee9d69](https://github.com/liferay/clay/commit/dee9d69))
-   **shared:** Remove weird initialization on `getEllipsisItems` ([bd7c621](https://github.com/liferay/clay/commit/bd7c621))
-   **shared:** When having one item, should only render one item ([e3645a2](https://github.com/liferay/clay/commit/e3645a2))
-   **useDebounce:** stop update the value every time when the object loses reference ([e840edc](https://github.com/liferay/clay/commit/e840edc))
-   **useFocusManagement:** check elements in focusManager list before controlling out-of-scope elements ([1236be3](https://github.com/liferay/clay/commit/1236be3))
-   normalize names of components ([3a0abea](https://github.com/liferay/clay/commit/3a0abea))
-   ref callbacks are first calling with null. https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs ([fec52cb](https://github.com/liferay/clay/commit/fec52cb))
-   update components to include 'types' and 'ts:main' package keys ([9e24b59](https://github.com/liferay/clay/commit/9e24b59))
-   **useFocusManagement:** fixes last position for cases when it was not reset ([3f48cb7](https://github.com/liferay/clay/commit/3f48cb7))
-   **useFocusManagement:** remove reset from last position when any list item is deleted ([bfb78f5](https://github.com/liferay/clay/commit/bfb78f5))
-   **useFocusManagement:** sets the last position when one does not exist, with the active element index if it exists in the list ([29e1494](https://github.com/liferay/clay/commit/29e1494))

### Features

-   Move useDebounce to clay-shared ([fcf1ceb](https://github.com/liferay/clay/commit/fcf1ceb))
-   **@clayui/shared:** add experimental useFocusManagement hook ([6e7190b](https://github.com/liferay/clay/commit/6e7190b))
-   **@clayui/shared:** add forwardRef to LinkOrButton component ([92317ef](https://github.com/liferay/clay/commit/92317ef))
-   **@clayui/shared:** add LinkOrButton component for use internal ([63371b0](https://github.com/liferay/clay/commit/63371b0))
-   **@clayui/shared:** create FocusScope component ([9772e5c](https://github.com/liferay/clay/commit/9772e5c))
-   **clay-form:** create high-level InputWithAutocomplete component ([692610a](https://github.com/liferay/clay/commit/692610a))
-   **clay-shared:** add keyboard hooks for lists and add demo under autocomplete ([3622453](https://github.com/liferay/clay/commit/3622453))

## [3.0.7](https://github.com/liferay/clay/tree/master/packages/clay-shared/compare/@clayui/shared@3.0.4...@clayui/shared@3.0.7) (2020-01-31)

**Note:** Version bump only for package @clayui/shared

## [3.0.6](https://github.com/liferay/clay/tree/master/packages/clay-shared/compare/@clayui/shared@3.0.4...@clayui/shared@3.0.6) (2020-01-20)

**Note:** Version bump only for package @clayui/shared

## [3.0.5](https://github.com/liferay/clay/tree/master/packages/clay-shared/compare/@clayui/shared@3.0.4...@clayui/shared@3.0.5) (2019-12-05)

**Note:** Version bump only for package @clayui/shared

## [3.0.4](https://github.com/liferay/clay/tree/master/packages/clay-shared/compare/@clayui/shared@3.0.3...@clayui/shared@3.0.4) (2019-11-07)

**Note:** Version bump only for package @clayui/shared

## [3.0.3](https://github.com/liferay/clay/tree/master/packages/clay-shared/compare/@clayui/shared@3.0.2...@clayui/shared@3.0.3) (2019-11-01)

### Bug Fixes

-   **@clayui/shared:** collects focusable elements within a focusable element ([3ce4e8e](https://github.com/liferay/clay/commit/3ce4e8e))

## [3.0.2](https://github.com/liferay/clay/tree/master/packages/clay-shared/compare/@clayui/shared@3.0.1...@clayui/shared@3.0.2) (2019-10-28)

### Bug Fixes

-   ref callbacks are first calling with null. https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs ([fec52cb](https://github.com/liferay/clay/commit/fec52cb))
-   **@clayui/shared:** use another method to create a new array from an HTMLCollection ([6d98c43](https://github.com/liferay/clay/commit/6d98c43))
