# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.4.1](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/compare/@clayui/drop-down@3.4.0...@clayui/drop-down@3.4.1) (2020-03-26)

**Note:** Version bump only for package @clayui/drop-down

# [3.4.0](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/compare/@clayui/drop-down@3.3.0...@clayui/drop-down@3.4.0) (2020-03-12)

### Bug Fixes

-   **@clayui/drop-down:** use ClayLink over anchor tag ([f23acf1](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/f23acf1))

### Features

-   **@clayui/drop-down:** adds new Section component to drop-down ([52aaefe](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/52aaefe))

# 3.3.0 (2020-02-28)

### Bug Fixes

-   ignore case when sorting props ([7c9ae28](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/7c9ae28))
-   normalize names of components ([3a0abea](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/3a0abea))
-   ref callbacks are first calling with null. https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs ([fec52cb](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/fec52cb))
-   **@clayui/drop-down:** add disabled prop to Item ([a1d4b98](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/a1d4b98))
-   update components to include 'types' and 'ts:main' package keys ([9e24b59](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/9e24b59))
-   **@clayui/autocomplete:** adds React.forwardRef to Autocomplete for FocusScope to have reference from element ([0bbde5a](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/0bbde5a))
-   **@clayui/button:** fix error when using private name when generating declaration files ([e8d8027](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/e8d8027)), closes [/github.com/Microsoft/TypeScript/issues/6307#issuecomment-360182089](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/issues/issuecomment-360182089)
-   **@clayui/drop-down:** add `alignmentPosition` support in DropDownWithItems ([8690bf6](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/8690bf6))
-   **@clayui/drop-down:** fixes DropDown.Menu component error blinks when aligning ([f2c8c63](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/f2c8c63))
-   **@clayui/drop-down:** hide DropDown when focus shifts out of element ([cd247c5](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/cd247c5))
-   **@clayui/drop-down:** makes DropDown.Menu a sub portal ([71afa59](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/71afa59))
-   **@clayui/drop-down:** search for symbols in nested item structures ([1c32b57](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/1c32b57))
-   **@clayui/drop-down:** Skips adequately a disabled dropdown item when navigating via keyboard ([89db09c](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/89db09c))
-   **@clayui/drop-down:** use FocusScope component ([4c79f9c](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/4c79f9c))
-   **@clayui/form:** remove stuck value from Checkbox ([db565b1](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/db565b1))
-   **drop-down:** allow containerElement to accept a react component ([dc7f77a](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/dc7f77a))
-   **drop-down:** automatically close dropdown when clicking on item ([55870e0](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/55870e0))
-   **drop-down:** use dom-align instead of metal-position ([335ff38](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/335ff38))

### Features

-   **@clayui/drop-down:** add ability to add attributes to form element ([06661e9](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/06661e9))
-   **@clayui/drop-down:** add focus management to DropDownWithBasicItems ([9a452f5](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/9a452f5))
-   **@clayui/drop-down:** add more options for alignment ([d37762a](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/d37762a))
-   **@clayui/drop-down:** add new prop to pass element attributes to DropDown.Menu ([2bc404f](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/2bc404f))
-   **@clayui/drop-down:** add prop for setting custom offset. ([848cc8f](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/848cc8f))
-   **@clayui/drop-down:** close the drop down when pressing the esc key ([51dc188](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/51dc188))
-   **@clayui/drop-down:** create DropDownWithItems component ([17acc49](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/17acc49))
-   **card:** create CardWithInfo and CardWithHorizontal high-level components ([f3de6ed](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/f3de6ed))
-   **clay-drop-down:** create DropDownBasic high-level component ([8a2c8f4](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/8a2c8f4))
-   **clay-shared:** add keyboard hooks for lists and add demo under autocomplete ([3622453](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/3622453))
-   **drop-down:** add icon functionality for CardWithBasicItems ([b741812](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/b741812))
-   **DropDown.Menu:** add autoBestAlign flag for position lock ([93f014d](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/93f014d))
-   update react-testing-library to be @testing-library/react ([bd78145](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/bd78145))
-   **form:** add helper components for markup ([3ce63d4](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/3ce63d4))

# [3.2.0](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/compare/@clayui/drop-down@3.1.4...@clayui/drop-down@3.2.0) (2020-02-13)

### Features

-   **@clayui/drop-down:** add ability to add attributes to form element ([06661e9](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/06661e9))
-   **@clayui/drop-down:** add more options for alignment ([d37762a](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/d37762a))
-   **@clayui/drop-down:** add prop for setting custom offset. ([848cc8f](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/848cc8f))

## [3.1.4](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/compare/@clayui/drop-down@3.1.1...@clayui/drop-down@3.1.4) (2020-01-31)

### Bug Fixes

-   **@clayui/button:** fix error when using private name when generating declaration files ([e8d8027](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/e8d8027)), closes [/github.com/Microsoft/TypeScript/issues/6307#issuecomment-360182089](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/issues/issuecomment-360182089)
-   **drop-down:** allow containerElement to accept a react component ([dc7f77a](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/dc7f77a))
-   **drop-down:** use dom-align instead of metal-position ([335ff38](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/335ff38))

## [3.1.3](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/compare/@clayui/drop-down@3.1.1...@clayui/drop-down@3.1.3) (2020-01-20)

### Bug Fixes

-   **@clayui/button:** fix error when using private name when generating declaration files ([e8d8027](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/e8d8027)), closes [/github.com/Microsoft/TypeScript/issues/6307#issuecomment-360182089](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/issues/issuecomment-360182089)
-   **drop-down:** allow containerElement to accept a react component ([dc7f77a](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/dc7f77a))
-   **drop-down:** use dom-align instead of metal-position ([335ff38](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/335ff38))

## [3.1.2](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/compare/@clayui/drop-down@3.1.1...@clayui/drop-down@3.1.2) (2019-12-05)

### Bug Fixes

-   **@clayui/button:** fix error when using private name when generating declaration files ([e8d8027](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/e8d8027)), closes [/github.com/Microsoft/TypeScript/issues/6307#issuecomment-360182089](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/issues/issuecomment-360182089)
-   **drop-down:** use dom-align instead of metal-position ([335ff38](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/335ff38))

## [3.1.1](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/compare/@clayui/drop-down@3.1.0...@clayui/drop-down@3.1.1) (2019-11-07)

### Bug Fixes

-   **@clayui/drop-down:** hide DropDown when focus shifts out of element ([cd247c5](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/cd247c5))

# [3.1.0](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/compare/@clayui/drop-down@3.0.1...@clayui/drop-down@3.1.0) (2019-11-01)

### Bug Fixes

-   **@clayui/drop-down:** search for symbols in nested item structures ([1c32b57](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/1c32b57))

### Features

-   **@clayui/drop-down:** add new prop to pass element attributes to DropDown.Menu ([2bc404f](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/2bc404f))

## [3.0.1](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/compare/@clayui/drop-down@3.0.0...@clayui/drop-down@3.0.1) (2019-10-28)

### Bug Fixes

-   **@clayui/drop-down:** add `alignmentPosition` support in DropDownWithItems ([8690bf6](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/8690bf6))
-   ref callbacks are first calling with null. https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs ([fec52cb](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/fec52cb))
-   **@clayui/drop-down:** add disabled prop to Item ([a1d4b98](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/a1d4b98))
-   **@clayui/drop-down:** fixes DropDown.Menu component error blinks when aligning ([f2c8c63](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/f2c8c63))
-   **@clayui/form:** remove stuck value from Checkbox ([db565b1](https://github.com/liferay/clay/tree/master/packages/clay-drop-down/commit/db565b1))
