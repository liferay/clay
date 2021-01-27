# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.8.4](https://github.com/liferay/clay/compare/@clayui/modal@3.8.3...@clayui/modal@3.8.4) (2021-01-27)

**Note:** Version bump only for package @clayui/modal

## [3.8.3](https://github.com/liferay/clay/compare/@clayui/modal@3.8.2...@clayui/modal@3.8.3) (2021-01-13)

**Note:** Version bump only for package @clayui/modal

## [3.8.2](https://github.com/liferay/clay/compare/@clayui/modal@3.8.0...@clayui/modal@3.8.2) (2020-12-16)

**Note:** Version bump only for package @clayui/modal

## [3.8.1](https://github.com/liferay/clay/compare/@clayui/modal@3.8.0...@clayui/modal@3.8.1) (2020-12-02)

**Note:** Version bump only for package @clayui/modal

# [3.8.0](https://github.com/liferay/clay/compare/@clayui/modal@3.7.2...@clayui/modal@3.8.0) (2020-10-01)

### Features

-   **clayui.com:** Move API tables to new files and update document tabs, rename files to use singular naming instead of plural, change mainTabURL of pagination-bar to a proper one ([d812ee9](https://github.com/liferay/clay/commit/d812ee9))

## [3.7.2](https://github.com/liferay/clay/compare/@clayui/modal@3.7.1...@clayui/modal@3.7.2) (2020-08-28)

**Note:** Version bump only for package @clayui/modal

## [3.7.1](https://github.com/liferay/clay/compare/@clayui/modal@3.7.0...@clayui/modal@3.7.1) (2020-08-26)

**Note:** Version bump only for package @clayui/modal

# [3.7.0](https://github.com/liferay/clay/compare/@clayui/modal@3.6.5...@clayui/modal@3.7.0) (2020-08-24)

### Features

-   **@clayui/modal:** Add zIndex prop to allow setting a custom z-index of the modal backdrop, with the body being tied to it's value but +10 ([0db1f3c](https://github.com/liferay/clay/commit/0db1f3c))

## [3.6.5](https://github.com/liferay/clay/compare/@clayui/modal@3.6.4...@clayui/modal@3.6.5) (2020-08-11)

### Bug Fixes

-   **@clayui/modal:** Changes the body's tabIndex with scroll and focuses on the element only when pressing the Up/Down keyboard ([73dbb38](https://github.com/liferay/clay/commit/73dbb38))
-   **@clayui/modal:** remove unnecessary `c-inner` class ([2b5b4f2](https://github.com/liferay/clay/commit/2b5b4f2))

## [3.6.4](https://github.com/liferay/clay/compare/@clayui/modal@3.6.3...@clayui/modal@3.6.4) (2020-07-28)

**Note:** Version bump only for package @clayui/modal

## [3.6.1](https://github.com/liferay/clay/compare/@clayui/modal@3.6.0...@clayui/modal@3.6.1) (2020-07-14)

### Bug Fixes

-   **@clayui/modal:** simplifies subportal grouping implementation and removes the extra container ([f48397f](https://github.com/liferay/clay/commit/f48397f))

# [3.6.0](https://github.com/liferay/clay/compare/@clayui/modal@3.5.1...@clayui/modal@3.6.0) (2020-07-07)

### Features

-   **@clayui/modal:** Adds a new `center` API to vertically center the modal ([904e169](https://github.com/liferay/clay/commit/904e169))

## [3.5.1](https://github.com/liferay/clay/compare/@clayui/modal@3.5.0...@clayui/modal@3.5.1) (2020-06-18)

**Note:** Version bump only for package @clayui/modal

# [3.5.0](https://github.com/liferay/clay/compare/@clayui/modal@3.4.0...@clayui/modal@3.5.0) (2020-04-24)

### Bug Fixes

-   Fix accessibility issues ([5e09db0](https://github.com/liferay/clay/commit/5e09db0))

### Features

-   **@clayui/modal:** Add iFrameProps to ModalBody ([727837e](https://github.com/liferay/clay/commit/727837e))

# [3.4.0](https://github.com/liferay/clay/tree/master/packages/clay-modal/compare/@clayui/modal@3.3.0...@clayui/modal@3.4.0) (2020-03-12)

### Features

-   **@clayui/modal:** add low-level componenets for header ([7b0074f](https://github.com/liferay/clay/commit/7b0074f))

# 3.3.0 (2020-02-28)

### Bug Fixes

-   add displayName to context for dev tools ([82e1e8c](https://github.com/liferay/clay/commit/82e1e8c))
-   normalize names of components ([3a0abea](https://github.com/liferay/clay/commit/3a0abea))
-   **@clayui/modal:** stop closing the modal when the element is removed from the modal content ([dc21804](https://github.com/liferay/clay/commit/dc21804)), closes [#2165](https://github.com/liferay/clay/tree/master/packages/clay-modal/issues/2165)
-   update components to include 'types' and 'ts:main' package keys ([9e24b59](https://github.com/liferay/clay/commit/9e24b59))
-   **@clayui/modal:** change the default size of the `modal-dialog` wrapping div ([224da66](https://github.com/liferay/clay/commit/224da66))
-   **@clayui/modal:** close the modal by clicking on the sides of the modal when the size is not set ([c2dc583](https://github.com/liferay/clay/commit/c2dc583))
-   **@clayui/modal:** render children only when modal is visible ([33083e1](https://github.com/liferay/clay/commit/33083e1))
-   **@clayui/modal:** stop closing modal before animation ([afb153f](https://github.com/liferay/clay/commit/afb153f))
-   **@clayui/modal:** wrap sub-portals and modal content over a div ([ad46c53](https://github.com/liferay/clay/commit/ad46c53))
-   **clay-modal:** account for setting state after unmount ([64dac3c](https://github.com/liferay/clay/commit/64dac3c))
-   **clay-modal:** update tests to avoid async ([2b9d59c](https://github.com/liferay/clay/commit/2b9d59c))
-   **portal:** automatically nest portals if they are inside one another ([dee9d69](https://github.com/liferay/clay/commit/dee9d69))

### Features

-   update react-testing-library to be @testing-library/react ([bd78145](https://github.com/liferay/clay/commit/bd78145))
-   **@clayui/modal:** add ClayModalProvider component with context API ([40a2bfb](https://github.com/liferay/clay/commit/40a2bfb))
-   **@clayui/modal:** add useModal hook ([4ff2b3d](https://github.com/liferay/clay/commit/4ff2b3d))
-   **@clayui/modal:** does not close Modal when document click event is prevented ([91c1c16](https://github.com/liferay/clay/commit/91c1c16))
-   **clay-shared:** add keyboard hooks for lists and add demo under autocomplete ([3622453](https://github.com/liferay/clay/commit/3622453))
-   **modal:** add prop for scrollable body ([77a2640](https://github.com/liferay/clay/commit/77a2640))

# [3.2.0](https://github.com/liferay/clay/tree/master/packages/clay-modal/compare/@clayui/modal@3.1.2...@clayui/modal@3.2.0) (2020-01-31)

### Features

-   **modal:** add prop for scrollable body ([77a2640](https://github.com/liferay/clay/commit/77a2640))

## [3.1.4](https://github.com/liferay/clay/tree/master/packages/clay-modal/compare/@clayui/modal@3.1.2...@clayui/modal@3.1.4) (2020-01-20)

**Note:** Version bump only for package @clayui/modal

## [3.1.3](https://github.com/liferay/clay/tree/master/packages/clay-modal/compare/@clayui/modal@3.1.2...@clayui/modal@3.1.3) (2019-12-05)

**Note:** Version bump only for package @clayui/modal

## [3.1.2](https://github.com/liferay/clay/tree/master/packages/clay-modal/compare/@clayui/modal@3.1.1...@clayui/modal@3.1.2) (2019-11-07)

**Note:** Version bump only for package @clayui/modal

## [3.1.1](https://github.com/liferay/clay/tree/master/packages/clay-modal/compare/@clayui/modal@3.1.0...@clayui/modal@3.1.1) (2019-11-01)

**Note:** Version bump only for package @clayui/modal

# [3.1.0](https://github.com/liferay/clay/tree/master/packages/clay-modal/compare/@clayui/modal@3.0.0...@clayui/modal@3.1.0) (2019-10-28)

### Features

-   **@clayui/modal:** does not close Modal when document click event is prevented ([91c1c16](https://github.com/liferay/clay/commit/91c1c16))
