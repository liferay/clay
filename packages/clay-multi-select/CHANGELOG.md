# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.156.1](https://github.com/liferay/clay/compare/v3.156.0...v3.156.1) (2025-12-22)

**Note:** Version bump only for package @clayui/multi-select

# [3.156.0](https://github.com/liferay/clay/compare/v3.155.0...v3.156.0) (2025-12-15)

### Reverts

-   Revert "chore(release): publish v3.156.0 packages" ([51b2c71](https://github.com/liferay/clay/commit/51b2c71adc59804525369a37b461f15fcaa593dc))

## [3.155.1](https://github.com/liferay/clay/compare/v3.156.0...v3.155.1) (2025-12-12)

### Reverts

-   Revert "chore(release): publish v3.156.0 packages" ([51b2c71](https://github.com/liferay/clay/commit/51b2c71adc59804525369a37b461f15fcaa593dc))

# [3.155.0](https://github.com/liferay/clay/compare/v3.154.0...v3.155.0) (2025-11-26)

### Bug Fixes

-   **@clayui/autocomplete:** LPD-66892 Fix visual feedback when an item is selected test ([4b4d449](https://github.com/liferay/clay/commit/4b4d449b1a468fea969162356490e217a2bb7bcd))

### Features

-   **@clayui/multi-select:** LPD-66892 Apply selectedKeys prop to MultiSelect Autocomplete ([6c27e41](https://github.com/liferay/clay/commit/6c27e4113060ecb17caee0c79d15b6be11feaa84))

# [3.151.0](https://github.com/liferay/clay/compare/v3.150.0...v3.151.0) (2025-10-22)

**Note:** Version bump only for package @clayui/multi-select

# [3.149.0](https://github.com/liferay/clay/compare/v3.148.0...v3.149.0) (2025-09-24)

### Bug Fixes

-   **autocomplete:** remove icon options ([76f2d87](https://github.com/liferay/clay/commit/76f2d878ae4b7cd4e635af7c5315e37f0a813657))

# [3.148.0](https://github.com/liferay/clay/compare/v3.147.0...v3.148.0) (2025-09-18)

**Note:** Version bump only for package @clayui/multi-select

# [3.147.0](https://github.com/liferay/clay/compare/v3.146.0...v3.147.0) (2025-09-09)

### Bug Fixes

-   **@clayui/multi-select:** Find item value based on locator ([3e4585b](https://github.com/liferay/clay/commit/3e4585b0fb462e5ba2f44e132c10882025cec847))
-   **@clayui/multi-select:** Recalculate callback value when items change ([b0237e4](https://github.com/liferay/clay/commit/b0237e4d3d2428e66c4becfc6b616cf5798449ac))

### Features

-   **@clayui/multi-select:** add allowDuplicatedValues logic ([dd8bf4f](https://github.com/liferay/clay/commit/dd8bf4f5ffdb4b64882f310d1870206fabe554c4))

# [3.146.0](https://github.com/liferay/clay/compare/v3.145.0...v3.146.0) (2025-09-01)

**Note:** Version bump only for package @clayui/multi-select

# [3.145.0](https://github.com/liferay/clay/compare/v3.144.1...v3.145.0) (2025-08-29)

**Note:** Version bump only for package @clayui/multi-select

## [3.144.1](https://github.com/liferay/clay/compare/v3.144.0...v3.144.1) (2025-08-29)

### Bug Fixes

-   make sure peerDependencies for react aren't too greedy ([72c4612](https://github.com/liferay/clay/commit/72c4612944bcfe61c51c0d224ac145f76a819a62))

# [3.144.0](https://github.com/liferay/clay/compare/v3.143.2...v3.144.0) (2025-08-26)

### Bug Fixes

-   **@clayui/multi-select:** LPD-56334 Shift + tab should focus the most recently added label ([10078d7](https://github.com/liferay/clay/commit/10078d7e30b656d13f6bf549d0209eca58da1b48))
-   **@clayui/multi-select:** LPD-63064 Up/Down/Home/End keys shouldn't scroll the page when navigating multi-select labels ([db881d7](https://github.com/liferay/clay/commit/db881d77a06329355e636c92f7a54a484f47679e))
-   **@clayui/multi-select:** LPD-63065 Don't add items with the same value in controlled components ([a13b825](https://github.com/liferay/clay/commit/a13b8251f694b8971b539d5590eca3163f6d3be5))
-   **@clayui/multi-select:** LPD-63065 Don't allow duplicate labels when dropdown items have custom rendering. ([0e6f84e](https://github.com/liferay/clay/commit/0e6f84e84f049a26574a407c069fb2d9d1637e78))
-   **@clayui/multi-select:** LPD-63065 Ignore case when checking if the label already exists. ([2b063e0](https://github.com/liferay/clay/commit/2b063e0e711d42d4a709b08d45dd77c341f7d860))

## [3.143.2](https://github.com/liferay/clay/compare/v3.143.1...v3.143.2) (2025-08-22)

### Bug Fixes

-   types should always be first ([b1fcc40](https://github.com/liferay/clay/commit/b1fcc40a68d9a6bd2d285820baea4b17d1045ab6))

## [3.143.1](https://github.com/liferay/clay/compare/v3.143.0...v3.143.1) (2025-08-22)

### Bug Fixes

-   include types in the npm exports configuration ([ad973f0](https://github.com/liferay/clay/commit/ad973f0faea57569480d802096a689889ac036c9))

# [3.143.0](https://github.com/liferay/clay/compare/v3.141.1...v3.143.0) (2025-08-15)

### Bug Fixes

-   **data-provider:** update exports and entry point ([8603947](https://github.com/liferay/clay/commit/8603947914ffb53b610ea23ca53a09146a2cad42))

### Features

-   publish clay as both CJS and ESM ([32cb387](https://github.com/liferay/clay/commit/32cb3872e825d937d2807637efdee62ff7977d7c))

## [3.142.2](https://github.com/liferay/clay/compare/@clayui/multi-select@3.142.1...@clayui/multi-select@3.142.2) (2025-08-13)

**Note:** Version bump only for package @clayui/multi-select

## [3.142.1](https://github.com/liferay/clay/compare/@clayui/multi-select@3.142.0...@clayui/multi-select@3.142.1) (2025-08-07)

### Reverts

-   Revert "fix(@clayui/multi-select): LPD-61750 filter doesn't work when onLoadMore is declared" ([80bd886](https://github.com/liferay/clay/commit/80bd8866f33e975bb0c5604e7e938d2c2c5bb963))

# [3.142.0](https://github.com/liferay/clay/compare/@clayui/multi-select@3.9.4...@clayui/multi-select@3.142.0) (2025-08-01)

### Bug Fixes

-   **@clayui/multi-select:** LPD-61750 filter doesn't work when onLoadMore is declared ([cbbb1ae](https://github.com/liferay/clay/commit/cbbb1aef7264f7f11648b0e11e6ede7437521c5f))

## 3.141.1 (2025-07-18)

# 3.141.0 (2025-07-15)

# 3.140.0 (2025-06-19)

### Features

-   **@clayui/multi-select:** LPD-56059 Update the multiSelect to allow working with data that may be deeply nested. ([1c37228](https://github.com/liferay/clay/commit/1c37228d801e70c72dac4c2ba31348295bb71c88))

## 3.139.1 (2025-06-16)

# 3.139.0 (2025-06-10)

# 3.138.0 (2025-06-02)

# 3.137.0 (2025-05-30)

# 3.136.0 (2025-05-03)

# 3.135.0 (2025-04-22)

# 3.134.0 (2025-04-10)

# 3.133.0 (2025-03-28)

## 3.132.1 (2025-03-24)

# 3.132.0 (2025-03-24)

# 3.131.0 (2025-03-20)

# 3.130.0 (2025-03-12)

# 3.129.0 (2025-02-27)

### Bug Fixes

-   exports displayType types ([c507341](https://github.com/liferay/clay/commit/c5073416dcb706e25772076a0558e4181b2beff8))
-   exports the missing types ([1ff3486](https://github.com/liferay/clay/commit/1ff3486779a9e8ef31dd8aab0ac43c8066d85dd7))

## 3.128.3 (2025-02-21)

### Bug Fixes

-   **@clayui/multi-select:** fixes typescript lint bug ([7a3f32a](https://github.com/liferay/clay/commit/7a3f32a95e85339b50c2fd732675d2e6d02246e8))

## 3.128.2 (2025-02-21)

## 3.128.1 (2025-02-21)

# 3.128.0 (2025-02-20)

### Bug Fixes

-   fixes bug in components with generic types and sub components ([4dd37e6](https://github.com/liferay/clay/commit/4dd37e654b22206aad190d6ce5558dab1dfd2d36))

### Features

-   **@clayui/multi-select:** improves component typing to create API MultiSelect ([f4d6b29](https://github.com/liferay/clay/commit/f4d6b29a2162dab8237546daaa5610f541fc2bf2))

# 3.127.0 (2025-01-23)

# 3.125.0 (2025-01-13)

# 3.124.0 (2024-12-18)

## 3.123.1 (2024-11-27)

# 3.123.0 (2024-11-21)

# 3.122.0 (2024-11-13)

# 3.121.0 (2024-10-17)

# 3.120.0 (2024-09-13)

# 3.119.0 (2024-08-30)

# 3.118.0 (2024-08-13)

# 3.117.0 (2024-07-30)

## 3.116.1 (2024-06-27)

# 3.116.0 (2024-06-10)

## 3.115.1 (2024-05-21)

# 3.115.0 (2024-05-16)

# 3.114.0 (2024-04-22)

# 3.113.0 (2024-03-28)

# 3.112.0 (2024-03-11)

# 3.111.0 (2024-02-15)

# 3.109.0 (2024-01-22)

# 3.108.0 (2023-12-12)

## 3.107.1 (2023-11-27)

# 3.107.0 (2023-11-27)

## 3.106.1 (2023-10-26)

# 3.106.0 (2023-10-25)

### Bug Fixes

-   remove 'src' dir from being packaged with npm ([9383e8d](https://github.com/liferay/clay/commit/9383e8d8abb25ca3396e7c6e4dfa53bbc72691c5))
-   use package's directory for baseDir when generating type ([0a5c710](https://github.com/liferay/clay/commit/0a5c710092f36243bc8d5487f70e831295715072))

# 3.105.0 (2023-09-15)

# 3.104.0 (2023-08-25)

## 3.103.1 (2023-08-15)

## 3.101.1 (2023-07-28)

# 3.101.0 (2023-07-28)

# 3.100.0 (2023-07-13)

## 3.99.4 (2023-07-10)

### Bug Fixes

-   **@clayui/multi-select:** fix loading indicator markup in MultiSelect ([b883824](https://github.com/liferay/clay/commit/b8838247d1638524691fda2a74934e0676e6597d))
-   **@clayui/multi-select:** pass async properties to autocomplete ([0faaab8](https://github.com/liferay/clay/commit/0faaab89049dd9a808666c82b8b8cba455d461f6))
-   **@clayui/multi-select:** stabilize the children reference to avoid unnecessary renderings ([7ff4af5](https://github.com/liferay/clay/commit/7ff4af5ffab85e64220623042e8085a2afd0d565))

## 3.99.3 (2023-07-05)

### Bug Fixes

-   **@clayui/multi-select:** fix error when not getting list data when pressing enter or comma ([485e0e8](https://github.com/liferay/clay/commit/485e0e8f245c4a366037f3d88f23d48774b2e1dc))

## 3.99.2 (2023-07-05)

### Bug Fixes

-   **@clayui/autocomplete:** makes new `messages` properties optional ([94eceb6](https://github.com/liferay/clay/commit/94eceb6261334272d0b3a000052a7a9592505284))

## 3.99.1 (2023-07-04)

### Bug Fixes

-   **@clayui/multi-select:** fixes type inference for properties and generic type ([ae7b2a3](https://github.com/liferay/clay/commit/ae7b2a383de1a710dcfe88e92335ad6afc6613a9))

# 3.99.0 (2023-06-28)

### Bug Fixes

-   **@clayui/autocomplete:** fix bug not announcing available options when autocomplete is open ([1dc9581](https://github.com/liferay/clay/commit/1dc9581bd2e96b7cdf250bf02c4858c5df4eb833))
-   **@clayui/multi-select:** fixes error when not disabling the MultiSelect component ([51dafd3](https://github.com/liferay/clay/commit/51dafd3f729034f0cac40dce87315e8ad2ae413d))

# 3.98.0 (2023-06-20)

### Bug Fixes

-   **@clayui/multi-select:** fix error of not showing menu if it has suggestions when menuRenderer is used ([ebc719f](https://github.com/liferay/clay/commit/ebc719ff77ba88dc407d648936cd1edf0e3372e5))

## 3.97.2 (2023-06-16)

### Bug Fixes

-   **@clayui/multi-select:** fix error when changing active state from uncontrolled to controlled ([f6ef5be](https://github.com/liferay/clay/commit/f6ef5beff49f6e703c31694bca542f160be417af))
-   **@clayui/multi-select:** fix error when not invoking method of `onFocus` when defined ([934878a](https://github.com/liferay/clay/commit/934878ab4a1ee74735a4b06369e2581826acf9b2))

## 3.97.1 (2023-06-14)

# 3.97.0 (2023-06-13)

### Bug Fixes

-   **@clayui/multi-select:** explicitly add the `active` API in the component's typing ([e956828](https://github.com/liferay/clay/commit/e95682814d3ec7ab45e65e41bba291a2da023e74))
-   **@clayui/multi-select:** maintains backwards compatibility with the `menuRenderer` API but without the new features ([63ffb84](https://github.com/liferay/clay/commit/63ffb8449ec2c8e14d433be360bae8b29a6962e3))

### Features

-   **@clayui/multi-select:** adds the possibility to ignore the item's default behavior ([5412700](https://github.com/liferay/clay/commit/5412700e3118575588907ff551a27c594d9fe4d8))
-   **@clayui/multi-select:** deprecated the `liveRegion` and `hotkeysDescription` APIs to use the `messages` API ([2cf0766](https://github.com/liferay/clay/commit/2cf07669bc295918e4bacbbaaffc1c4996b67a65))

## 3.96.1 (2023-05-31)

### Bug Fixes

-   **@clayui/multi-select:** fix error when not doing OOTB filter ([0da49e2](https://github.com/liferay/clay/commit/0da49e22a0483350af87ba417a6c9d1826add723))

# 3.96.0 (2023-05-29)

### Features

-   **@clayui/multi-select:** adds implementation of new autocomplete ([506c72f](https://github.com/liferay/clay/commit/506c72f4bcfa4beaec74d09bbf2fc0d58577cd35))

## 3.95.2 (2023-05-17)

# 3.95.0 (2023-05-15)

# 3.94.0 (2023-05-03)

# 3.93.0 (2023-04-19)

# 3.92.0 (2023-04-06)

# 3.91.0 (2023-03-24)

# 3.90.0 (2023-03-15)

# 3.89.0 (2023-03-01)

# 3.88.0 (2023-02-14)

# 3.87.0 (2023-02-08)

## 3.86.1 (2023-02-02)

# 3.86.0 (2023-01-31)

# 3.85.0 (2023-01-23)

### Bug Fixes

-   **@clayui/multi-select:** prevents items from having the same key ([ea62915](https://github.com/liferay/clay/commit/ea62915c1fc664fb3a68164051f596870d134983))

### Features

-   **@clayui/multi-select:** Adds new API to disallow adding custom values as label ([b858246](https://github.com/liferay/clay/commit/b85824693bcab80f2494137e06dfb96fd49a28df))
-   **@clayui/multi-select:** allows to prevent default behavior of `onPaste` and `onKeyDown` ([57e62a4](https://github.com/liferay/clay/commit/57e62a49fb26ebe344fbee140541a2dbc7e5c2e0))

# 3.84.0 (2022-12-23)

### Features

-   **@clayui/multi-select:** add new `alignmentByViewport` API ([ecb7409](https://github.com/liferay/clay/commit/ecb74090dc6f332ffdd8625d376d2c12db6075ec))

## 3.83.1 (2022-12-20)

# 3.83.0 (2022-12-20)

### Bug Fixes

-   **@clayui/multi-select:** add semantic role to pills ([7f99cfb](https://github.com/liferay/clay/commit/7f99cfb4098690608a3d7b5ab5f5c1f3f9d1a5f0))
-   **@clayui/multi-select:** associate the text with the label to improve readability for the SR ([e0e79da](https://github.com/liferay/clay/commit/e0e79dad1854d7e58df95054394ce5b33118f6a7))
-   **@clayui/multi-select:** fix input alignment error with label and loss of label focus ([824d326](https://github.com/liferay/clay/commit/824d326739516eeace26ae055f8e1f69d4be0eb6))

### Features

-   **@clayui/multi-select:** add focus control on labels on remove ([1d557b2](https://github.com/liferay/clay/commit/1d557b2dfeecbcf8f2991bba33882dc2b522813b))
-   **@clayui/multi-select:** adds keyboard navigation interactions to labels ([7c6121f](https://github.com/liferay/clay/commit/7c6121f9f892718bb5de135250b38deca9e2fba5))
-   **@clayui/multi-select:** moves the visual focus from the gridcell to the label ([5686d66](https://github.com/liferay/clay/commit/5686d664b6d5544eb81967dded725ac8c058af1b))

# 3.82.0 (2022-12-07)

# 3.81.0 (2022-11-30)

## 3.80.1 (2022-11-22)

# 3.80.0 (2022-11-21)

# 3.79.0 (2022-11-08)

## 3.78.2 (2022-10-25)

## 3.78.1 (2022-10-25)

# 3.78.0 (2022-10-25)

# 3.77.0 (2022-10-17)

## 3.75.3 (2022-09-29)

## 3.75.2 (2022-09-29)

# 3.75.0 (2022-09-28)

# 3.74.0 (2022-09-19)

# 3.73.0 (2022-09-13)

# 3.72.0 (2022-09-05)

# 3.71.0 (2022-08-30)

## 3.70.3 (2022-08-30)

## 3.70.2 (2022-08-30)

# 3.70.0 (2022-08-23)

# 3.69.0 (2022-08-16)

# 3.68.0 (2022-08-01)

# 3.67.0 (2022-07-25)

# 3.66.0 (2022-07-20)

## 3.65.2 (2022-07-19)

## 3.65.1 (2022-07-11)

# 3.65.0 (2022-07-11)

# 3.64.0 (2022-07-04)

# 3.62.0 (2022-06-20)

### Bug Fixes

-   **@clayui/multi-select:** Adds small example to storybook ([8bdf156](https://github.com/liferay/clay/commit/8bdf1562cc0d4b25625fc11f720b6c46cbf74c70))
-   **@clayui/multi-select:** fix error when you have a ref declared it is not possible to delete the label by pressing backspace ([685588c](https://github.com/liferay/clay/commit/685588cfabaa3f07503ac123bf8333bc23254c3c))

# 3.61.0 (2022-06-13)

### Bug Fixes

-   **@clayui/multi-select:** fix error when showing placeholder when it has items ([d8f7020](https://github.com/liferay/clay/commit/d8f7020663555c6d222889b3959aa6ba33c90a5f))

# 3.60.0 (2022-06-06)

# 3.58.0 (2022-05-23)

# 3.56.0 (2022-05-09)

# 3.55.0 (2022-05-02)

### Features

-   **@clayui/multi-select:** standardize the controlled and uncontrolled MultiSelect component behavior to `value` and `items` prop ([a6bc5cd](https://github.com/liferay/clay/commit/a6bc5cd5830757eaeb2ab44cec5c7e1cad2e5a3b))

# 3.52.0 (2022-04-04)

# 3.49.0 (2022-03-15)

# 3.48.0 (2022-03-07)

# 3.47.0 (2022-02-23)

# 3.46.0 (2022-02-09)

### Bug Fixes

-   **@clayui/multi-select:** fix error when adding labels with whitespace ([1a8a166](https://github.com/liferay/clay/commit/1a8a1664be7541e1ca2173334db83e07562996bd))

# 3.45.0 (2022-02-01)

# 3.43.0 (2021-12-29)

# 3.42.0 (2021-12-15)

# 3.41.0 (2021-12-02)

# 3.40.0 (2021-11-17)

# 3.39.0 (2021-10-29)

# 3.38.0 (2021-10-22)

# 3.37.0 (2021-10-06)

# 3.36.0 (2021-09-23)

## 3.35.3 (2021-09-09)

## 3.35.2 (2021-08-30)

## 3.35.1 (2021-08-30)

# 3.35.0 (2021-08-30)

# 3.30.0 (2021-06-16)

# 3.29.0 (2021-05-28)

# 3.28.0 (2021-05-19)

# 3.27.0 (2021-05-05)

### Features

-   **@clayui/multi-select:** add async functionality for source items ([548aa2d](https://github.com/liferay/clay/commit/548aa2d28c54434260f75ea27ee233942e963e79))

## 3.25.3 (2021-03-24)

### Bug Fixes

-   **@clayui/multi-select:** Use `btn-outline-secondary btn-outline-borderless` instead of `btn-unstyled` for Clear All Button ([3d71cf0](https://github.com/liferay/clay/commit/3d71cf0e5a4620898ea65823b2dadd183f8b3e2b))

## 3.25.1 (2021-03-05)

### Bug Fixes

-   **@clayui/multi-select:** use isomorphic helper for useLayoutEffect ([f25668d](https://github.com/liferay/clay/commit/f25668d92e691ba96b29f78669304169c48675f1))

# 3.25.0 (2021-02-23)

## [3.141.1](https://github.com/liferay/clay/compare/v3.141.0...v3.141.1) (2025-07-18)

**Note:** Version bump only for package @clayui/multi-select

# [3.141.0](https://github.com/liferay/clay/compare/v3.140.0...v3.141.0) (2025-07-15)

**Note:** Version bump only for package @clayui/multi-select

# [3.140.0](https://github.com/liferay/clay/compare/v3.139.1...v3.140.0) (2025-06-19)

### Features

-   **@clayui/multi-select:** LPD-56059 Update the multiSelect to allow working with data that may be deeply nested. ([1c37228](https://github.com/liferay/clay/commit/1c37228d801e70c72dac4c2ba31348295bb71c88))

## [3.139.1](https://github.com/liferay/clay/compare/v3.139.0...v3.139.1) (2025-06-16)

**Note:** Version bump only for package @clayui/multi-select

# [3.139.0](https://github.com/liferay/clay/compare/v3.138.0...v3.139.0) (2025-06-10)

**Note:** Version bump only for package @clayui/multi-select

# [3.138.0](https://github.com/liferay/clay/compare/v3.137.0...v3.138.0) (2025-06-02)

**Note:** Version bump only for package @clayui/multi-select

# [3.137.0](https://github.com/liferay/clay/compare/v3.136.0...v3.137.0) (2025-05-30)

**Note:** Version bump only for package @clayui/multi-select

# [3.136.0](https://github.com/liferay/clay/compare/v3.135.0...v3.136.0) (2025-05-03)

**Note:** Version bump only for package @clayui/multi-select

# [3.135.0](https://github.com/liferay/clay/compare/v3.134.0...v3.135.0) (2025-04-22)

**Note:** Version bump only for package @clayui/multi-select

# [3.134.0](https://github.com/liferay/clay/compare/v3.133.0...v3.134.0) (2025-04-10)

**Note:** Version bump only for package @clayui/multi-select

# [3.133.0](https://github.com/liferay/clay/compare/v3.132.1...v3.133.0) (2025-03-28)

**Note:** Version bump only for package @clayui/multi-select

## [3.132.1](https://github.com/liferay/clay/compare/v3.132.0...v3.132.1) (2025-03-24)

**Note:** Version bump only for package @clayui/multi-select

# [3.132.0](https://github.com/liferay/clay/compare/v3.131.0...v3.132.0) (2025-03-24)

**Note:** Version bump only for package @clayui/multi-select

# [3.131.0](https://github.com/liferay/clay/compare/v3.130.0...v3.131.0) (2025-03-20)

**Note:** Version bump only for package @clayui/multi-select

# [3.130.0](https://github.com/liferay/clay/compare/v3.129.1...v3.130.0) (2025-03-12)

**Note:** Version bump only for package @clayui/multi-select

# [3.129.0](https://github.com/liferay/clay/compare/v3.128.3...v3.129.0) (2025-02-27)

### Bug Fixes

-   exports displayType types ([c507341](https://github.com/liferay/clay/commit/c5073416dcb706e25772076a0558e4181b2beff8))
-   exports the missing types ([1ff3486](https://github.com/liferay/clay/commit/1ff3486779a9e8ef31dd8aab0ac43c8066d85dd7))

## [3.128.3](https://github.com/liferay/clay/compare/v3.128.2...v3.128.3) (2025-02-21)

### Bug Fixes

-   **@clayui/multi-select:** fixes typescript lint bug ([7a3f32a](https://github.com/liferay/clay/commit/7a3f32a95e85339b50c2fd732675d2e6d02246e8))

## [3.128.2](https://github.com/liferay/clay/compare/v3.128.1...v3.128.2) (2025-02-21)

**Note:** Version bump only for package @clayui/multi-select

## [3.128.1](https://github.com/liferay/clay/compare/v3.128.0...v3.128.1) (2025-02-21)

**Note:** Version bump only for package @clayui/multi-select

# [3.128.0](https://github.com/liferay/clay/compare/v3.127.0...v3.128.0) (2025-02-20)

### Bug Fixes

-   fixes bug in components with generic types and sub components ([4dd37e6](https://github.com/liferay/clay/commit/4dd37e654b22206aad190d6ce5558dab1dfd2d36))

### Features

-   **@clayui/multi-select:** improves component typing to create API MultiSelect ([f4d6b29](https://github.com/liferay/clay/commit/f4d6b29a2162dab8237546daaa5610f541fc2bf2))

# [3.127.0](https://github.com/liferay/clay/compare/v3.126.0...v3.127.0) (2025-01-23)

**Note:** Version bump only for package @clayui/multi-select

# [3.125.0](https://github.com/liferay/clay/compare/v3.124.0...v3.125.0) (2025-01-13)

**Note:** Version bump only for package @clayui/multi-select

# [3.124.0](https://github.com/liferay/clay/compare/v3.123.1...v3.124.0) (2024-12-18)

**Note:** Version bump only for package @clayui/multi-select

## [3.123.1](https://github.com/liferay/clay/compare/v3.123.0...v3.123.1) (2024-11-27)

**Note:** Version bump only for package @clayui/multi-select

# [3.123.0](https://github.com/liferay/clay/compare/v3.122.0...v3.123.0) (2024-11-21)

**Note:** Version bump only for package @clayui/multi-select

# [3.122.0](https://github.com/liferay/clay/compare/v3.121.0...v3.122.0) (2024-11-13)

**Note:** Version bump only for package @clayui/multi-select

# [3.121.0](https://github.com/liferay/clay/compare/v3.120.0...v3.121.0) (2024-10-17)

**Note:** Version bump only for package @clayui/multi-select

# [3.120.0](https://github.com/liferay/clay/compare/v3.119.1...v3.120.0) (2024-09-13)

**Note:** Version bump only for package @clayui/multi-select

# [3.119.0](https://github.com/liferay/clay/compare/v3.118.0...v3.119.0) (2024-08-30)

**Note:** Version bump only for package @clayui/multi-select

# [3.118.0](https://github.com/liferay/clay/compare/v3.117.0...v3.118.0) (2024-08-13)

**Note:** Version bump only for package @clayui/multi-select

# [3.117.0](https://github.com/liferay/clay/compare/v3.116.1...v3.117.0) (2024-07-30)

**Note:** Version bump only for package @clayui/multi-select

## [3.116.1](https://github.com/liferay/clay/compare/v3.116.0...v3.116.1) (2024-06-27)

**Note:** Version bump only for package @clayui/multi-select

# [3.116.0](https://github.com/liferay/clay/compare/v3.115.2...v3.116.0) (2024-06-10)

**Note:** Version bump only for package @clayui/multi-select

## [3.115.1](https://github.com/liferay/clay/compare/v3.115.0...v3.115.1) (2024-05-21)

**Note:** Version bump only for package @clayui/multi-select

# [3.115.0](https://github.com/liferay/clay/compare/v3.114.0...v3.115.0) (2024-05-16)

**Note:** Version bump only for package @clayui/multi-select

# [3.114.0](https://github.com/liferay/clay/compare/v3.113.0...v3.114.0) (2024-04-22)

**Note:** Version bump only for package @clayui/multi-select

# [3.113.0](https://github.com/liferay/clay/compare/v3.112.0...v3.113.0) (2024-03-28)

**Note:** Version bump only for package @clayui/multi-select

# [3.112.0](https://github.com/liferay/clay/compare/v3.111.1...v3.112.0) (2024-03-11)

**Note:** Version bump only for package @clayui/multi-select

# [3.111.0](https://github.com/liferay/clay/compare/v3.110.0...v3.111.0) (2024-02-15)

**Note:** Version bump only for package @clayui/multi-select

# [3.109.0](https://github.com/liferay/clay/compare/v3.108.0...v3.109.0) (2024-01-22)

**Note:** Version bump only for package @clayui/multi-select

# [3.108.0](https://github.com/liferay/clay/compare/v3.107.1...v3.108.0) (2023-12-12)

**Note:** Version bump only for package @clayui/multi-select

## [3.107.1](https://github.com/liferay/clay/compare/v3.107.0...v3.107.1) (2023-11-27)

**Note:** Version bump only for package @clayui/multi-select

# [3.107.0](https://github.com/liferay/clay/compare/v3.106.1...v3.107.0) (2023-11-27)

**Note:** Version bump only for package @clayui/multi-select

## [3.106.1](https://github.com/liferay/clay/compare/v3.106.0...v3.106.1) (2023-10-26)

**Note:** Version bump only for package @clayui/multi-select

# [3.106.0](https://github.com/liferay/clay/compare/v3.105.0...v3.106.0) (2023-10-25)

### Bug Fixes

-   remove 'src' dir from being packaged with npm ([9383e8d](https://github.com/liferay/clay/commit/9383e8d8abb25ca3396e7c6e4dfa53bbc72691c5))
-   use package's directory for baseDir when generating type ([0a5c710](https://github.com/liferay/clay/commit/0a5c710092f36243bc8d5487f70e831295715072))

# [3.105.0](https://github.com/liferay/clay/compare/v3.104.0...v3.105.0) (2023-09-15)

**Note:** Version bump only for package @clayui/multi-select

# [3.104.0](https://github.com/liferay/clay/compare/v3.103.1...v3.104.0) (2023-08-25)

**Note:** Version bump only for package @clayui/multi-select

## [3.103.1](https://github.com/liferay/clay/compare/v3.103.0...v3.103.1) (2023-08-15)

**Note:** Version bump only for package @clayui/multi-select

## [3.101.1](https://github.com/liferay/clay/compare/v3.101.0...v3.101.1) (2023-07-28)

**Note:** Version bump only for package @clayui/multi-select

# [3.101.0](https://github.com/liferay/clay/compare/v3.100.0...v3.101.0) (2023-07-28)

**Note:** Version bump only for package @clayui/multi-select

# [3.100.0](https://github.com/liferay/clay/compare/v3.99.4...v3.100.0) (2023-07-13)

**Note:** Version bump only for package @clayui/multi-select

## [3.99.4](https://github.com/liferay/clay/compare/v3.99.3...v3.99.4) (2023-07-10)

### Bug Fixes

-   **@clayui/multi-select:** fix loading indicator markup in MultiSelect ([b883824](https://github.com/liferay/clay/commit/b8838247d1638524691fda2a74934e0676e6597d))
-   **@clayui/multi-select:** pass async properties to autocomplete ([0faaab8](https://github.com/liferay/clay/commit/0faaab89049dd9a808666c82b8b8cba455d461f6))
-   **@clayui/multi-select:** stabilize the children reference to avoid unnecessary renderings ([7ff4af5](https://github.com/liferay/clay/commit/7ff4af5ffab85e64220623042e8085a2afd0d565))

## [3.99.3](https://github.com/liferay/clay/compare/v3.99.2...v3.99.3) (2023-07-05)

### Bug Fixes

-   **@clayui/multi-select:** fix error when not getting list data when pressing enter or comma ([485e0e8](https://github.com/liferay/clay/commit/485e0e8f245c4a366037f3d88f23d48774b2e1dc))

## [3.99.2](https://github.com/liferay/clay/compare/v3.99.1...v3.99.2) (2023-07-05)

### Bug Fixes

-   **@clayui/autocomplete:** makes new `messages` properties optional ([94eceb6](https://github.com/liferay/clay/commit/94eceb6261334272d0b3a000052a7a9592505284))

## [3.99.1](https://github.com/liferay/clay/compare/v3.99.0...v3.99.1) (2023-07-04)

### Bug Fixes

-   **@clayui/multi-select:** fixes type inference for properties and generic type ([ae7b2a3](https://github.com/liferay/clay/commit/ae7b2a383de1a710dcfe88e92335ad6afc6613a9))

# [3.99.0](https://github.com/liferay/clay/compare/v3.98.0...v3.99.0) (2023-06-28)

### Bug Fixes

-   **@clayui/autocomplete:** fix bug not announcing available options when autocomplete is open ([1dc9581](https://github.com/liferay/clay/commit/1dc9581bd2e96b7cdf250bf02c4858c5df4eb833))
-   **@clayui/multi-select:** fixes error when not disabling the MultiSelect component ([51dafd3](https://github.com/liferay/clay/commit/51dafd3f729034f0cac40dce87315e8ad2ae413d))

# [3.98.0](https://github.com/liferay/clay/compare/v3.97.2...v3.98.0) (2023-06-20)

### Bug Fixes

-   **@clayui/multi-select:** fix error of not showing menu if it has suggestions when menuRenderer is used ([ebc719f](https://github.com/liferay/clay/commit/ebc719ff77ba88dc407d648936cd1edf0e3372e5))

## [3.97.2](https://github.com/liferay/clay/compare/v3.97.1...v3.97.2) (2023-06-16)

### Bug Fixes

-   **@clayui/multi-select:** fix error when changing active state from uncontrolled to controlled ([f6ef5be](https://github.com/liferay/clay/commit/f6ef5beff49f6e703c31694bca542f160be417af))
-   **@clayui/multi-select:** fix error when not invoking method of `onFocus` when defined ([934878a](https://github.com/liferay/clay/commit/934878ab4a1ee74735a4b06369e2581826acf9b2))

## [3.97.1](https://github.com/liferay/clay/compare/v3.97.0...v3.97.1) (2023-06-14)

**Note:** Version bump only for package @clayui/multi-select

# [3.97.0](https://github.com/liferay/clay/compare/v3.96.1...v3.97.0) (2023-06-13)

### Bug Fixes

-   **@clayui/multi-select:** explicitly add the `active` API in the component's typing ([e956828](https://github.com/liferay/clay/commit/e95682814d3ec7ab45e65e41bba291a2da023e74))
-   **@clayui/multi-select:** maintains backwards compatibility with the `menuRenderer` API but without the new features ([63ffb84](https://github.com/liferay/clay/commit/63ffb8449ec2c8e14d433be360bae8b29a6962e3))

### Features

-   **@clayui/multi-select:** adds the possibility to ignore the item's default behavior ([5412700](https://github.com/liferay/clay/commit/5412700e3118575588907ff551a27c594d9fe4d8))
-   **@clayui/multi-select:** deprecated the `liveRegion` and `hotkeysDescription` APIs to use the `messages` API ([2cf0766](https://github.com/liferay/clay/commit/2cf07669bc295918e4bacbbaaffc1c4996b67a65))

## [3.96.1](https://github.com/liferay/clay/compare/v3.96.0...v3.96.1) (2023-05-31)

### Bug Fixes

-   **@clayui/multi-select:** fix error when not doing OOTB filter ([0da49e2](https://github.com/liferay/clay/commit/0da49e22a0483350af87ba417a6c9d1826add723))

# [3.96.0](https://github.com/liferay/clay/compare/v3.95.2...v3.96.0) (2023-05-29)

### Features

-   **@clayui/multi-select:** adds implementation of new autocomplete ([506c72f](https://github.com/liferay/clay/commit/506c72f4bcfa4beaec74d09bbf2fc0d58577cd35))

## [3.95.2](https://github.com/liferay/clay/compare/v3.95.0...v3.95.2) (2023-05-17)

**Note:** Version bump only for package @clayui/multi-select

# [3.95.0](https://github.com/liferay/clay/compare/v3.94.0...v3.95.0) (2023-05-15)

**Note:** Version bump only for package @clayui/multi-select

# [3.94.0](https://github.com/liferay/clay/compare/v3.93.0...v3.94.0) (2023-05-03)

**Note:** Version bump only for package @clayui/multi-select

# [3.93.0](https://github.com/liferay/clay/compare/v3.92.0...v3.93.0) (2023-04-19)

**Note:** Version bump only for package @clayui/multi-select

# [3.92.0](https://github.com/liferay/clay/compare/v3.91.0...v3.92.0) (2023-04-06)

**Note:** Version bump only for package @clayui/multi-select

# [3.91.0](https://github.com/liferay/clay/compare/v3.90.0...v3.91.0) (2023-03-24)

**Note:** Version bump only for package @clayui/multi-select

# [3.90.0](https://github.com/liferay/clay/compare/v3.89.0...v3.90.0) (2023-03-15)

**Note:** Version bump only for package @clayui/multi-select

# [3.89.0](https://github.com/liferay/clay/compare/v3.88.0...v3.89.0) (2023-03-01)

**Note:** Version bump only for package @clayui/multi-select

# [3.88.0](https://github.com/liferay/clay/compare/v3.87.2...v3.88.0) (2023-02-14)

**Note:** Version bump only for package @clayui/multi-select

# [3.87.0](https://github.com/liferay/clay/compare/v3.86.1...v3.87.0) (2023-02-08)

**Note:** Version bump only for package @clayui/multi-select

## [3.86.1](https://github.com/liferay/clay/compare/v3.86.0...v3.86.1) (2023-02-02)

**Note:** Version bump only for package @clayui/multi-select

# [3.86.0](https://github.com/liferay/clay/compare/v3.85.0...v3.86.0) (2023-01-31)

**Note:** Version bump only for package @clayui/multi-select

# [3.85.0](https://github.com/liferay/clay/compare/v3.84.0...v3.85.0) (2023-01-23)

### Bug Fixes

-   **@clayui/multi-select:** prevents items from having the same key ([ea62915](https://github.com/liferay/clay/commit/ea62915c1fc664fb3a68164051f596870d134983))

### Features

-   **@clayui/multi-select:** Adds new API to disallow adding custom values as label ([b858246](https://github.com/liferay/clay/commit/b85824693bcab80f2494137e06dfb96fd49a28df))
-   **@clayui/multi-select:** allows to prevent default behavior of `onPaste` and `onKeyDown` ([57e62a4](https://github.com/liferay/clay/commit/57e62a49fb26ebe344fbee140541a2dbc7e5c2e0))

# [3.84.0](https://github.com/liferay/clay/compare/v3.83.1...v3.84.0) (2022-12-23)

### Features

-   **@clayui/multi-select:** add new `alignmentByViewport` API ([ecb7409](https://github.com/liferay/clay/commit/ecb74090dc6f332ffdd8625d376d2c12db6075ec))
-   **@clayui/multi-select:** moves the visual focus from the gridcell to the label ([5686d66](https://github.com/liferay/clay/commit/5686d664b6d5544eb81967dded725ac8c058af1b))

## [3.83.1](https://github.com/liferay/clay/compare/v3.83.0...v3.83.1) (2022-12-20)

**Note:** Version bump only for package @clayui/multi-select

# [3.83.0](https://github.com/liferay/clay/compare/v3.82.0...v3.83.0) (2022-12-20)

### Bug Fixes

-   **@clayui/multi-select:** add semantic role to pills ([7f99cfb](https://github.com/liferay/clay/commit/7f99cfb4098690608a3d7b5ab5f5c1f3f9d1a5f0))
-   **@clayui/multi-select:** associate the text with the label to improve readability for the SR ([e0e79da](https://github.com/liferay/clay/commit/e0e79dad1854d7e58df95054394ce5b33118f6a7))
-   **@clayui/multi-select:** fix input alignment error with label and loss of label focus ([824d326](https://github.com/liferay/clay/commit/824d326739516eeace26ae055f8e1f69d4be0eb6))

### Features

-   **@clayui/multi-select:** add focus control on labels on remove ([1d557b2](https://github.com/liferay/clay/commit/1d557b2dfeecbcf8f2991bba33882dc2b522813b))
-   **@clayui/multi-select:** adds keyboard navigation interactions to labels ([7c6121f](https://github.com/liferay/clay/commit/7c6121f9f892718bb5de135250b38deca9e2fba5))

# [3.82.0](https://github.com/liferay/clay/compare/v3.81.0...v3.82.0) (2022-12-07)

**Note:** Version bump only for package @clayui/multi-select

# [3.81.0](https://github.com/liferay/clay/compare/v3.80.1...v3.81.0) (2022-11-30)

**Note:** Version bump only for package @clayui/multi-select

## [3.80.1](https://github.com/liferay/clay/compare/v3.80.0...v3.80.1) (2022-11-22)

**Note:** Version bump only for package @clayui/multi-select

# [3.80.0](https://github.com/liferay/clay/compare/v3.79.0...v3.80.0) (2022-11-21)

**Note:** Version bump only for package @clayui/multi-select

# [3.79.0](https://github.com/liferay/clay/compare/v3.78.2...v3.79.0) (2022-11-08)

**Note:** Version bump only for package @clayui/multi-select

## [3.78.2](https://github.com/liferay/clay/compare/v3.78.1...v3.78.2) (2022-10-25)

**Note:** Version bump only for package @clayui/multi-select

## [3.78.1](https://github.com/liferay/clay/compare/v3.78.0...v3.78.1) (2022-10-25)

**Note:** Version bump only for package @clayui/multi-select

# [3.78.0](https://github.com/liferay/clay/compare/v3.77.0...v3.78.0) (2022-10-25)

**Note:** Version bump only for package @clayui/multi-select

# [3.77.0](https://github.com/liferay/clay/compare/v3.76.0...v3.77.0) (2022-10-17)

**Note:** Version bump only for package @clayui/multi-select

## [3.75.3](https://github.com/liferay/clay/compare/v3.75.2...v3.75.3) (2022-09-29)

**Note:** Version bump only for package @clayui/multi-select

## [3.75.2](https://github.com/liferay/clay/compare/v3.75.1...v3.75.2) (2022-09-29)

**Note:** Version bump only for package @clayui/multi-select

# [3.75.0](https://github.com/liferay/clay/compare/v3.74.0...v3.75.0) (2022-09-28)

**Note:** Version bump only for package @clayui/multi-select

# [3.74.0](https://github.com/liferay/clay/compare/v3.73.0...v3.74.0) (2022-09-19)

**Note:** Version bump only for package @clayui/multi-select

# [3.73.0](https://github.com/liferay/clay/compare/v3.72.0...v3.73.0) (2022-09-13)

**Note:** Version bump only for package @clayui/multi-select

# [3.72.0](https://github.com/liferay/clay/compare/v3.71.0...v3.72.0) (2022-09-05)

**Note:** Version bump only for package @clayui/multi-select

# [3.71.0](https://github.com/liferay/clay/compare/v3.70.3...v3.71.0) (2022-08-30)

**Note:** Version bump only for package @clayui/multi-select

## [3.70.3](https://github.com/liferay/clay/compare/v3.70.2...v3.70.3) (2022-08-30)

**Note:** Version bump only for package @clayui/multi-select

## [3.70.2](https://github.com/liferay/clay/compare/v3.70.1...v3.70.2) (2022-08-30)

**Note:** Version bump only for package @clayui/multi-select

# [3.70.0](https://github.com/liferay/clay/compare/v3.69.0...v3.70.0) (2022-08-23)

**Note:** Version bump only for package @clayui/multi-select

# [3.69.0](https://github.com/liferay/clay/compare/v3.68.0...v3.69.0) (2022-08-16)

**Note:** Version bump only for package @clayui/multi-select

# [3.68.0](https://github.com/liferay/clay/compare/v3.67.0...v3.68.0) (2022-08-01)

**Note:** Version bump only for package @clayui/multi-select

# [3.67.0](https://github.com/liferay/clay/compare/v3.66.0...v3.67.0) (2022-07-25)

**Note:** Version bump only for package @clayui/multi-select

# [3.66.0](https://github.com/liferay/clay/compare/v3.65.2...v3.66.0) (2022-07-20)

**Note:** Version bump only for package @clayui/multi-select

## [3.65.2](https://github.com/liferay/clay/compare/v3.65.1...v3.65.2) (2022-07-19)

**Note:** Version bump only for package @clayui/multi-select

## [3.65.1](https://github.com/liferay/clay/compare/v3.65.0...v3.65.1) (2022-07-11)

**Note:** Version bump only for package @clayui/multi-select

# [3.65.0](https://github.com/liferay/clay/compare/v3.64.0...v3.65.0) (2022-07-11)

**Note:** Version bump only for package @clayui/multi-select

# [3.64.0](https://github.com/liferay/clay/compare/v3.63.0...v3.64.0) (2022-07-04)

**Note:** Version bump only for package @clayui/multi-select

# [3.62.0](https://github.com/liferay/clay/compare/v3.61.0...v3.62.0) (2022-06-20)

### Bug Fixes

-   **@clayui/multi-select:** Adds small example to storybook ([8bdf156](https://github.com/liferay/clay/commit/8bdf1562cc0d4b25625fc11f720b6c46cbf74c70))
-   **@clayui/multi-select:** fix error when you have a ref declared it is not possible to delete the label by pressing backspace ([685588c](https://github.com/liferay/clay/commit/685588cfabaa3f07503ac123bf8333bc23254c3c))

# [3.61.0](https://github.com/liferay/clay/compare/v3.60.1...v3.61.0) (2022-06-13)

### Bug Fixes

-   **@clayui/multi-select:** fix error when showing placeholder when it has items ([d8f7020](https://github.com/liferay/clay/commit/d8f7020663555c6d222889b3959aa6ba33c90a5f))

# [3.60.0](https://github.com/liferay/clay/compare/v3.59.0...v3.60.0) (2022-06-06)

**Note:** Version bump only for package @clayui/multi-select

# [3.58.0](https://github.com/liferay/clay/compare/v3.57.0...v3.58.0) (2022-05-23)

**Note:** Version bump only for package @clayui/multi-select

# [3.56.0](https://github.com/liferay/clay/compare/v3.55.0...v3.56.0) (2022-05-09)

**Note:** Version bump only for package @clayui/multi-select

# [3.55.0](https://github.com/liferay/clay/compare/v3.54.0...v3.55.0) (2022-05-02)

### Features

-   **@clayui/multi-select:** standardize the controlled and uncontrolled MultiSelect component behavior to `value` and `items` prop ([a6bc5cd](https://github.com/liferay/clay/commit/a6bc5cd5830757eaeb2ab44cec5c7e1cad2e5a3b))

# [3.52.0](https://github.com/liferay/clay/compare/v3.51.0...v3.52.0) (2022-04-04)

**Note:** Version bump only for package @clayui/multi-select

# [3.49.0](https://github.com/liferay/clay/compare/v3.48.0...v3.49.0) (2022-03-15)

**Note:** Version bump only for package @clayui/multi-select

# [3.48.0](https://github.com/liferay/clay/compare/v3.47.0...v3.48.0) (2022-03-07)

**Note:** Version bump only for package @clayui/multi-select

# [3.47.0](https://github.com/liferay/clay/compare/v3.46.0...v3.47.0) (2022-02-23)

**Note:** Version bump only for package @clayui/multi-select

# [3.46.0](https://github.com/liferay/clay/compare/v3.45.1...v3.46.0) (2022-02-09)

### Bug Fixes

-   **@clayui/multi-select:** fix error when adding labels with whitespace ([1a8a166](https://github.com/liferay/clay/commit/1a8a1664be7541e1ca2173334db83e07562996bd))

# [3.45.0](https://github.com/liferay/clay/compare/v3.44.2...v3.45.0) (2022-02-01)

**Note:** Version bump only for package @clayui/multi-select

# [3.43.0](https://github.com/liferay/clay/compare/v3.42.0...v3.43.0) (2021-12-29)

**Note:** Version bump only for package @clayui/multi-select

# [3.42.0](https://github.com/liferay/clay/compare/v3.41.0...v3.42.0) (2021-12-15)

**Note:** Version bump only for package @clayui/multi-select

# [3.41.0](https://github.com/liferay/clay/compare/v3.40.1...v3.41.0) (2021-12-02)

**Note:** Version bump only for package @clayui/multi-select

# [3.40.0](https://github.com/liferay/clay/compare/v3.39.0...v3.40.0) (2021-11-17)

**Note:** Version bump only for package @clayui/multi-select

# [3.39.0](https://github.com/liferay/clay/compare/v3.38.0...v3.39.0) (2021-10-29)

**Note:** Version bump only for package @clayui/multi-select

# [3.38.0](https://github.com/liferay/clay/compare/v3.37.0...v3.38.0) (2021-10-22)

**Note:** Version bump only for package @clayui/multi-select

# [3.37.0](https://github.com/liferay/clay/compare/v3.36.0...v3.37.0) (2021-10-06)

**Note:** Version bump only for package @clayui/multi-select

# [3.36.0](https://github.com/liferay/clay/compare/v3.35.3...v3.36.0) (2021-09-23)

**Note:** Version bump only for package @clayui/multi-select

## [3.35.3](https://github.com/liferay/clay/compare/v3.35.2...v3.35.3) (2021-09-09)

**Note:** Version bump only for package @clayui/multi-select

## [3.35.2](https://github.com/liferay/clay/compare/v3.35.1...v3.35.2) (2021-08-30)

**Note:** Version bump only for package @clayui/multi-select

## [3.35.1](https://github.com/liferay/clay/compare/v3.35.0...v3.35.1) (2021-08-30)

**Note:** Version bump only for package @clayui/multi-select

# [3.35.0](https://github.com/liferay/clay/compare/v3.34.0...v3.35.0) (2021-08-30)

**Note:** Version bump only for package @clayui/multi-select

# [3.32.0](https://github.com/liferay/clay/compare/v3.31.0...v3.32.0) (2021-07-28)

**Note:** Version bump only for package @clayui/multi-select

# [3.30.0](https://github.com/liferay/clay/compare/v3.29.0...v3.30.0) (2021-06-16)

**Note:** Version bump only for package @clayui/multi-select

# [3.29.0](https://github.com/liferay/clay/compare/v3.28.0...v3.29.0) (2021-05-28)

**Note:** Version bump only for package @clayui/multi-select

# [3.28.0](https://github.com/liferay/clay/compare/v3.27.0...v3.28.0) (2021-05-19)

**Note:** Version bump only for package @clayui/multi-select

# [3.27.0](https://github.com/liferay/clay/compare/v3.26.0...v3.27.0) (2021-05-05)

### Features

-   **@clayui/multi-select:** add async functionality for source items ([548aa2d](https://github.com/liferay/clay/commit/548aa2d))

## [3.25.3](https://github.com/liferay/clay/compare/v3.25.2...v3.25.3) (2021-03-24)

### Bug Fixes

-   **@clayui/multi-select:** Use `btn-outline-secondary btn-outline-borderless` instead of `btn-unstyled` for Clear All Button ([3d71cf0](https://github.com/liferay/clay/commit/3d71cf0))

## [3.25.1](https://github.com/liferay/clay/compare/v3.25.0...v3.25.1) (2021-03-05)

### Bug Fixes

-   **@clayui/multi-select:** use isomorphic helper for useLayoutEffect ([f25668d](https://github.com/liferay/clay/commit/f25668d92e691ba96b29f78669304169c48675f1))

# [3.25.0](https://github.com/liferay/clay/compare/v3.24.1...v3.25.0) (2021-02-23)

**Note:** Version bump only for package @clayui/multi-select

## [3.9.4](https://github.com/liferay/clay/compare/@clayui/multi-select@3.9.3...@clayui/multi-select@3.9.4) (2021-02-11)

**Note:** Version bump only for package @clayui/multi-select

## [3.9.3](https://github.com/liferay/clay/compare/@clayui/multi-select@3.9.2...@clayui/multi-select@3.9.3) (2021-01-27)

**Note:** Version bump only for package @clayui/multi-select

## [3.9.2](https://github.com/liferay/clay/compare/@clayui/multi-select@3.9.1...@clayui/multi-select@3.9.2) (2021-01-13)

### Bug Fixes

-   **@clayui/label:** close icon should be times-small ([5181335](https://github.com/liferay/clay/commit/5181335))

## [3.9.1](https://github.com/liferay/clay/compare/@clayui/multi-select@3.9.0...@clayui/multi-select@3.9.1) (2020-12-29)

**Note:** Version bump only for package @clayui/multi-select

# [3.9.0](https://github.com/liferay/clay/compare/@clayui/multi-select@3.8.0...@clayui/multi-select@3.9.0) (2020-12-16)

### Features

-   **@clayui/multi-select:** Add displayType and update snapshots to fit ([0c5cdcf](https://github.com/liferay/clay/commit/0c5cdcf))
-   **@clayui/multi-select:** Update dependency ([ded5a81](https://github.com/liferay/clay/commit/ded5a81))
-   **@clayui/multi-select:** Update snapshots ([51c2901](https://github.com/liferay/clay/commit/51c2901))
-   **@clayui/multi-select:** Use ClayButtonWithIcon instead of <button> ([4e9ccb1](https://github.com/liferay/clay/commit/4e9ccb1))

## [3.8.1](https://github.com/liferay/clay/compare/@clayui/multi-select@3.8.0...@clayui/multi-select@3.8.1) (2020-12-02)

**Note:** Version bump only for package @clayui/multi-select

# [3.8.0](https://github.com/liferay/clay/compare/@clayui/multi-select@3.7.0...@clayui/multi-select@3.8.0) (2020-10-01)

### Features

-   **clayui.com:** Move API tables to new files and update document tabs, rename files to use singular naming instead of plural, change mainTabURL of pagination-bar to a proper one ([d812ee9](https://github.com/liferay/clay/commit/d812ee9))
-   add displayName for all components ([cc3211d](https://github.com/liferay/clay/commit/cc3211d))

## [3.7.0](https://github.com/liferay/clay/compare/@clayui/multi-select@3.6.5...@clayui/multi-select@3.7.0) (2020-08-31)

### Features

-   **@clayui/multi-select:** improves the filter for case-sensitive or non-sequential characters ([27cb6ac](https://github.com/liferay/clay/commit/27cb6ac))

## [3.6.5](https://github.com/liferay/clay/compare/@clayui/multi-select@3.6.4...@clayui/multi-select@3.6.5) (2020-08-28)

**Note:** Version bump only for package @clayui/multi-select

## [3.6.4](https://github.com/liferay/clay/compare/@clayui/multi-select@3.6.3...@clayui/multi-select@3.6.4) (2020-08-26)

**Note:** Version bump only for package @clayui/multi-select

## [3.6.3](https://github.com/liferay/clay/compare/@clayui/multi-select@3.6.2...@clayui/multi-select@3.6.3) (2020-08-21)

**Note:** Version bump only for package @clayui/multi-select

## [3.6.2](https://github.com/liferay/clay/compare/@clayui/multi-select@3.6.1...@clayui/multi-select@3.6.2) (2020-08-11)

**Note:** Version bump only for package @clayui/multi-select

## [3.6.1](https://github.com/liferay/clay/compare/@clayui/multi-select@3.6.0...@clayui/multi-select@3.6.1) (2020-07-30)

### Bug Fixes

-   **@clayui/multi-select:** key should be ',' instead of 'Comma' ([a808f36](https://github.com/liferay/clay/commit/a808f36))

# [3.6.0](https://github.com/liferay/clay/compare/@clayui/multi-select@3.5.7...@clayui/multi-select@3.6.0) (2020-07-28)

### Bug Fixes

-   update packages to appropriate dependencies ([0026168](https://github.com/liferay/clay/commit/0026168))

### Features

-   **@clayui/shared:** Adds an object called Keys for normalize Keyboard events checkings avoiding people to using strings and care about browser compat when using React syntetic Keyboard events ([95c8ea9](https://github.com/liferay/clay/commit/95c8ea9)), closes [/github.com/facebook/react/blob/b87aabdfe1/packages/react-dom/src/events/getEventKey.js#L12-L29](https://github.com//github.com/facebook/react/blob/b87aabdfe1/packages/react-dom/src/events/getEventKey.js/issues/L12-L29)

## [3.5.7](https://github.com/liferay/clay/compare/@clayui/multi-select@3.5.6...@clayui/multi-select@3.5.7) (2020-07-14)

**Note:** Version bump only for package @clayui/multi-select

## [3.5.6](https://github.com/liferay/clay/compare/@clayui/multi-select@3.5.5...@clayui/multi-select@3.5.6) (2020-07-07)

**Note:** Version bump only for package @clayui/multi-select

## [3.5.5](https://github.com/liferay/clay/compare/@clayui/multi-select@3.5.4...@clayui/multi-select@3.5.5) (2020-06-18)

**Note:** Version bump only for package @clayui/multi-select

## [3.5.4](https://github.com/liferay/clay/compare/@clayui/multi-select@3.5.3...@clayui/multi-select@3.5.4) (2020-05-21)

**Note:** Version bump only for package @clayui/multi-select

## [3.5.3](https://github.com/liferay/clay/compare/@clayui/multi-select@3.5.2...@clayui/multi-select@3.5.3) (2020-04-24)

### Bug Fixes

-   Fix accessibility issues ([5e09db0](https://github.com/liferay/clay/commit/5e09db0))

## [3.5.2](https://github.com/liferay/clay/tree/master/packages/clay-multi-select/compare/@clayui/multi-select@3.5.1...@clayui/multi-select@3.5.2) (2020-03-26)

**Note:** Version bump only for package @clayui/multi-select

## [3.5.1](https://github.com/liferay/clay/tree/master/packages/clay-multi-select/compare/@clayui/multi-select@3.5.0...@clayui/multi-select@3.5.1) (2020-03-12)

**Note:** Version bump only for package @clayui/multi-select

# 3.5.0 (2020-02-28)

### Bug Fixes

-   add support to pass a list of objects as items and add on clear all button callback to multiselect ([9b5b3e5](https://github.com/liferay/clay/commit/9b5b3e5))
-   check if input is empty rather than checking source items ([bd4adc6](https://github.com/liferay/clay/commit/bd4adc6))
-   prevent backspace from navigating backwards ([69f6c8d](https://github.com/liferay/clay/commit/69f6c8d)), closes [#1448](https://github.com/liferay/clay/tree/master/packages/clay-multi-select/issues/1448)
-   **drop-down:** use dom-align instead of metal-position ([335ff38](https://github.com/liferay/clay/commit/335ff38))
-   **form:** remove ClayInputWithAutocomplete and move MultiSelect to its own package ([a91c8e3](https://github.com/liferay/clay/commit/a91c8e3))
-   **multi-select:** add failing test ([c6eecd0](https://github.com/liferay/clay/commit/c6eecd0))

### Features

-   **@clayui/multi-select:** adding stories ([470897a](https://github.com/liferay/clay/commit/470897a))
-   **@clayui/multi-select:** adding tests ([2185a80](https://github.com/liferay/clay/commit/2185a80))
-   **@clayui/multi-select:** adds support for DropDown.Menu content customization ([95653be](https://github.com/liferay/clay/commit/95653be))
-   **@clayui/multi-select:** extracting the filter function to a prop ([f941c74](https://github.com/liferay/clay/commit/f941c74))

## [3.4.1](https://github.com/liferay/clay/tree/master/packages/clay-multi-select/compare/@clayui/multi-select@3.4.0...@clayui/multi-select@3.4.1) (2020-02-13)

**Note:** Version bump only for package @clayui/multi-select

# [3.4.0](https://github.com/liferay/clay/tree/master/packages/clay-multi-select/compare/@clayui/multi-select@3.1.0...@clayui/multi-select@3.4.0) (2020-01-31)

### Bug Fixes

-   check if input is empty rather than checking source items ([bd4adc6](https://github.com/liferay/clay/commit/bd4adc6))
-   prevent backspace from navigating backwards ([69f6c8d](https://github.com/liferay/clay/commit/69f6c8d)), closes [#1448](https://github.com/liferay/clay/tree/master/packages/clay-multi-select/issues/1448)
-   **drop-down:** use dom-align instead of metal-position ([335ff38](https://github.com/liferay/clay/commit/335ff38))

### Features

-   **@clayui/multi-select:** adding stories ([470897a](https://github.com/liferay/clay/commit/470897a))
-   **@clayui/multi-select:** adding tests ([2185a80](https://github.com/liferay/clay/commit/2185a80))
-   **@clayui/multi-select:** extracting the filter function to a prop ([f941c74](https://github.com/liferay/clay/commit/f941c74))

# [3.3.0](https://github.com/liferay/clay/tree/master/packages/clay-multi-select/compare/@clayui/multi-select@3.1.0...@clayui/multi-select@3.3.0) (2020-01-20)

### Bug Fixes

-   **drop-down:** use dom-align instead of metal-position ([335ff38](https://github.com/liferay/clay/commit/335ff38))
-   check if input is empty rather than checking source items ([bd4adc6](https://github.com/liferay/clay/commit/bd4adc6))
-   prevent backspace from navigating backwards ([69f6c8d](https://github.com/liferay/clay/commit/69f6c8d)), closes [#1448](https://github.com/liferay/clay/tree/master/packages/clay-multi-select/issues/1448)

### Features

-   **@clayui/multi-select:** adding stories ([470897a](https://github.com/liferay/clay/commit/470897a))
-   **@clayui/multi-select:** adding tests ([2185a80](https://github.com/liferay/clay/commit/2185a80))
-   **@clayui/multi-select:** extracting the filter function to a prop ([f941c74](https://github.com/liferay/clay/commit/f941c74))

# [3.2.0](https://github.com/liferay/clay/tree/master/packages/clay-multi-select/compare/@clayui/multi-select@3.1.0...@clayui/multi-select@3.2.0) (2019-12-05)

### Bug Fixes

-   **drop-down:** use dom-align instead of metal-position ([335ff38](https://github.com/liferay/clay/commit/335ff38))
-   check if input is empty rather than checking source items ([bd4adc6](https://github.com/liferay/clay/commit/bd4adc6))
-   prevent backspace from navigating backwards ([69f6c8d](https://github.com/liferay/clay/commit/69f6c8d)), closes [#1448](https://github.com/liferay/clay/tree/master/packages/clay-multi-select/issues/1448)

### Features

-   **@clayui/multi-select:** adding stories ([470897a](https://github.com/liferay/clay/commit/470897a))
-   **@clayui/multi-select:** adding tests ([2185a80](https://github.com/liferay/clay/commit/2185a80))
-   **@clayui/multi-select:** extracting the filter function to a prop ([f941c74](https://github.com/liferay/clay/commit/f941c74))

# [3.1.0](https://github.com/liferay/clay/tree/master/packages/clay-multi-select/compare/@clayui/multi-select@3.0.2...@clayui/multi-select@3.1.0) (2019-11-07)

### Features

-   **@clayui/multi-select:** adds support for DropDown.Menu content customization ([95653be](https://github.com/liferay/clay/commit/95653be))

## [3.0.2](https://github.com/liferay/clay/tree/master/packages/clay-multi-select/compare/@clayui/multi-select@3.0.1...@clayui/multi-select@3.0.2) (2019-11-01)

**Note:** Version bump only for package @clayui/multi-select

## 3.0.1 (2019-10-28)

### Bug Fixes

-   **multi-select:** add failing test ([c6eecd0](https://github.com/liferay/clay/commit/c6eecd0))
-   add support to pass a list of objects as items and add on clear all button callback to multiselect ([9b5b3e5](https://github.com/liferay/clay/commit/9b5b3e5))
-   **form:** remove ClayInputWithAutocomplete and move MultiSelect to its own package ([a91c8e3](https://github.com/liferay/clay/commit/a91c8e3))

# 2.7.0 (2019-01-24)

# 2.6.0 (2019-01-11)

## 2.5.1 (2018-12-19)

# 2.5.0 (2018-12-10)
