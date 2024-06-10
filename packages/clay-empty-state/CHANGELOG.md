# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.116.0](https://github.com/liferay/clay/compare/v3.115.2...v3.116.0) (2024-06-10)

**Note:** Version bump only for package @clayui/empty-state

## [3.115.2](https://github.com/liferay/clay/compare/v3.115.1...v3.115.2) (2024-05-24)

### Bug Fixes

-   **@clayui/empty-state:** fixes bug when always trying to render the image for reduced motion when disabled ([1b117d0](https://github.com/liferay/clay/commit/1b117d03555ddfa8eb70fb7ce169d4e71a9f43d9))

## [3.115.1](https://github.com/liferay/clay/compare/v3.115.0...v3.115.1) (2024-05-21)

**Note:** Version bump only for package @clayui/empty-state

# [3.114.0](https://github.com/liferay/clay/compare/v3.113.0...v3.114.0) (2024-04-22)

### Features

-   **@clayui/empty-state:** LPD-21741 Add new SVG empty, success and search state ([0afe5f5](https://github.com/liferay/clay/commit/0afe5f553cd309d9125fd259ec61b27c0c9b0770))
-   **@clayui/empty-state:** LPD-21741 add SVG file and change paths ([e6de535](https://github.com/liferay/clay/commit/e6de5358c45ebca7585154f7972b88e00fb9d307))
-   **@clayui/empty-state:** LPD-21741 adjusting the props name to state and removes redundancy ([d2e32a5](https://github.com/liferay/clay/commit/d2e32a5b6bc17f5e5fddc3b77e1dcfc710f863dd))
-   **@clayui/empty-state:** LPD-21741 change snapshot and update jest config ([51a31c4](https://github.com/liferay/clay/commit/51a31c4663acf6d308dc5e1afe2ffa27d4360ce1))
-   **@clayui/empty-state:** LPD-21741 Change style to include reduce motion ([da98cfa](https://github.com/liferay/clay/commit/da98cfac3a9fe54f2eaa300744af57121aeb85cb))
-   **@clayui/empty-state:** LPD-21741 Cleanup and adjustment of success SVG ([7455b58](https://github.com/liferay/clay/commit/7455b58a60bbdf3c954096076c3e622e11c3ed24))
-   **@clayui/empty-state:** LPD-21741 Cleanup and update stories ([a0a3f31](https://github.com/liferay/clay/commit/a0a3f31dcfdbdacdfc00c785cca15042a0ef7eb1))
-   **@clayui/empty-state:** LPD-21741 Move style inline, keep animations styles on Clay CSS ([d84528f](https://github.com/liferay/clay/commit/d84528f51032129b41eaf18efb68f944bea63e13))
-   **@clayui/empty-state:** LPD-21741 remove changes to the empty state component ([bb132b3](https://github.com/liferay/clay/commit/bb132b346f86f19a0cb32995cef80936bf46bf81))
-   **@clayui/empty-state:** LPD-21741 SF ([19b1a0d](https://github.com/liferay/clay/commit/19b1a0de2e8be08ae5d0abd2596b33469784c2cc))
-   **@clayui/empty-state:** LPD-21741 Update docs ([593bdd5](https://github.com/liferay/clay/commit/593bdd51a3b48f5c6bf891c33e79cba75b35e726))
-   **@clayui/empty-state:** LPD-21741 Update docs and add SVG on pathname match ([22c541b](https://github.com/liferay/clay/commit/22c541b09bf58c97b998ad982acfffd17f667f88))
-   **@clayui/empty-state:** LPD-21741 update snapshot ([40ebe8b](https://github.com/liferay/clay/commit/40ebe8b3bf67ab24da8cc90d936a7f19307f3dad))
-   **@clayui/empty-state:** LPD-21741 Update snapshots ([e03f190](https://github.com/liferay/clay/commit/e03f19010830aba90f50ad372f464433635c3720))
-   **@clayui/empty-state:** LPD-21741 Update tests, snapshots and size limit ([2d84b51](https://github.com/liferay/clay/commit/2d84b51f97c7f8187b8c88da96eccd2da7a50fba))

# [3.111.0](https://github.com/liferay/clay/compare/v3.110.0...v3.111.0) (2024-02-15)

**Note:** Version bump only for package @clayui/empty-state

## [3.106.1](https://github.com/liferay/clay/compare/v3.106.0...v3.106.1) (2023-10-26)

**Note:** Version bump only for package @clayui/empty-state

# [3.106.0](https://github.com/liferay/clay/compare/v3.105.0...v3.106.0) (2023-10-25)

### Bug Fixes

-   remove 'src' dir from being packaged with npm ([9383e8d](https://github.com/liferay/clay/commit/9383e8d8abb25ca3396e7c6e4dfa53bbc72691c5))
-   use package's directory for baseDir when generating type ([0a5c710](https://github.com/liferay/clay/commit/0a5c710092f36243bc8d5487f70e831295715072))

# [3.101.0](https://github.com/liferay/clay/compare/v3.100.0...v3.101.0) (2023-07-28)

### Bug Fixes

-   **@clayui/empty-state:** Use url constructor instead ([cd4d275](https://github.com/liferay/clay/commit/cd4d27542721cad88378096e7a02927aee831ed3))

### Features

-   **@clayui/empty-state:** Output a reduced motion image by default ([0e26922](https://github.com/liferay/clay/commit/0e269227afb155328a7a6936ad4f1a0864f59844))

# [3.94.0](https://github.com/liferay/clay/compare/v3.93.0...v3.94.0) (2023-05-03)

### Bug Fixes

-   **@clayui/empty-state:** Adds props imgSrcReducedMotion and imgPropsReducedMotion ([aa39994](https://github.com/liferay/clay/commit/aa399947943ab836f7311b5369df2fbb83cc946c))
-   **@clayui/empty-state:** Should only output d-none-c-prefers-reduced-motion if there is a value for imgSrcReducedMotion ([d428502](https://github.com/liferay/clay/commit/d4285023e89107d7c17487c4f50e56e2d630a883))

# [3.92.0](https://github.com/liferay/clay/compare/v3.91.0...v3.92.0) (2023-04-06)

### Bug Fixes

-   **@clayui/empty-state:** Empty alt attribute ([8871eb9](https://github.com/liferay/clay/commit/8871eb98833a40fd7feafda8a0426bbc4faca9ab))
-   **@clayui/empty-state:** Update snapshot ([dac2adb](https://github.com/liferay/clay/commit/dac2adbc0de7a94634efc9a9dc13d33407723c0f))

# [3.90.0](https://github.com/liferay/clay/compare/v3.89.0...v3.90.0) (2023-03-15)

### Features

-   **@clayui/empty-state:** always render the title ([aa887e8](https://github.com/liferay/clay/commit/aa887e89d060665deb037e21ce8ce4b16d18ac69))

# [3.65.0](https://github.com/liferay/clay/compare/v3.64.0...v3.65.0) (2022-07-11)

**Note:** Version bump only for package @clayui/empty-state

# [3.56.0](https://github.com/liferay/clay/compare/v3.55.0...v3.56.0) (2022-05-09)

**Note:** Version bump only for package @clayui/empty-state

# [3.52.0](https://github.com/liferay/clay/compare/v3.51.0...v3.52.0) (2022-04-04)

### Features

-   **@clay/empty-state:** Enable users to not render title related markup on empty-state ([608378b](https://github.com/liferay/clay/commit/608378b15985f273845d0fee7a91e486b4c78666))

# [3.47.0](https://github.com/liferay/clay/compare/v3.46.0...v3.47.0) (2022-02-23)

### Bug Fixes

-   **@clayui/empty-state:** Update classNames from two objects into one ([f090ab4](https://github.com/liferay/clay/commit/f090ab44f7ea466285bf76463f1c58a6ec48d743))
-   **@clayui/empty-state:** Update SCSS variables of small empty-state ([8f64846](https://github.com/liferay/clay/commit/8f64846a6a455b790d08f00e8b29383567a7d967))
-   make format:changed check for scss files ([6588e27](https://github.com/liferay/clay/commit/6588e27f703773af63bb8992b1bc53bcb5649fc6))

### Features

-   **clayui/empty-state:** Include Small property in empty state component ([a073233](https://github.com/liferay/clay/commit/a0732338454dfeccab4a0961392d218a2109891f))

# [3.40.0](https://github.com/liferay/clay/compare/v3.39.0...v3.40.0) (2021-11-17)

**Note:** Version bump only for package @clayui/empty-state

# [3.39.0](https://github.com/liferay/clay/compare/v3.38.0...v3.39.0) (2021-10-29)

**Note:** Version bump only for package @clayui/empty-state

# [3.38.0](https://github.com/liferay/clay/compare/v3.37.0...v3.38.0) (2021-10-22)

**Note:** Version bump only for package @clayui/empty-state

# [3.37.0](https://github.com/liferay/clay/compare/v3.36.0...v3.37.0) (2021-10-06)

**Note:** Version bump only for package @clayui/empty-state

# [3.32.0](https://github.com/liferay/clay/compare/v3.31.0...v3.32.0) (2021-07-28)

**Note:** Version bump only for package @clayui/empty-state

# [3.2.0](https://github.com/liferay/clay/compare/@clayui/empty-state@3.1.0...@clayui/empty-state@3.2.0) (2020-05-21)

### Bug Fixes

-   **clayui.com:** update empty-state docs ([fc618c6](https://github.com/liferay/clay/commit/fc618c6))

### Features

-   **@clayui/empty-state:** Add prop description ([96dab75](https://github.com/liferay/clay/commit/96dab75))
-   **clayui.com:** Add documentation for Empty State ([6eedb36](https://github.com/liferay/clay/commit/6eedb36))

# [3.1.0](https://github.com/liferay/clay/compare/@clayui/empty-state@3.0.0...@clayui/empty-state@3.1.0) (2020-04-24)

### Features

-   **@clayui/form:** DualListbox & Selectbox ([0ad5de4](https://github.com/liferay/clay/commit/0ad5de4))
