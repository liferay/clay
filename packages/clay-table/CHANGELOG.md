# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.111.0](https://github.com/liferay/clay/compare/v3.110.0...v3.111.0) (2024-02-15)

**Note:** Version bump only for package @clayui/table

# [3.108.0](https://github.com/liferay/clay/compare/v3.107.1...v3.108.0) (2023-12-12)

### Features

-   **@clayui/table:** adds the border to the head by default ([fb2cbdb](https://github.com/liferay/clay/commit/fb2cbdb7ac749756ff4c1749056af54bed9441fe))
-   **@clayui/table:** sets striped by default ([2ee5787](https://github.com/liferay/clay/commit/2ee5787ef5c2bd83aa66632014577a797645081c))

## [3.106.1](https://github.com/liferay/clay/compare/v3.106.0...v3.106.1) (2023-10-26)

**Note:** Version bump only for package @clayui/table

# [3.106.0](https://github.com/liferay/clay/compare/v3.105.0...v3.106.0) (2023-10-25)

### Bug Fixes

-   remove 'src' dir from being packaged with npm ([9383e8d](https://github.com/liferay/clay/commit/9383e8d8abb25ca3396e7c6e4dfa53bbc72691c5))
-   use package's directory for baseDir when generating type ([0a5c710](https://github.com/liferay/clay/commit/0a5c710092f36243bc8d5487f70e831295715072))

### Features

-   **@clayui/core:** adds controlled and uncontrolled expandable state ([56f3d8f](https://github.com/liferay/clay/commit/56f3d8f8c1afa43d8ca66973890948f9a78ab413))

# [3.56.0](https://github.com/liferay/clay/compare/v3.55.0...v3.56.0) (2022-05-09)

**Note:** Version bump only for package @clayui/table

# [3.40.0](https://github.com/liferay/clay/compare/v3.39.0...v3.40.0) (2021-11-17)

**Note:** Version bump only for package @clayui/table

# [3.39.0](https://github.com/liferay/clay/compare/v3.38.0...v3.39.0) (2021-10-29)

**Note:** Version bump only for package @clayui/table

# [3.38.0](https://github.com/liferay/clay/compare/v3.37.0...v3.38.0) (2021-10-22)

**Note:** Version bump only for package @clayui/table

# [3.37.0](https://github.com/liferay/clay/compare/v3.36.0...v3.37.0) (2021-10-06)

**Note:** Version bump only for package @clayui/table

# [3.32.0](https://github.com/liferay/clay/compare/v3.31.0...v3.32.0) (2021-07-28)

**Note:** Version bump only for package @clayui/table

# [3.29.0](https://github.com/liferay/clay/compare/v3.28.0...v3.29.0) (2021-05-28)

### Bug Fixes

-   **@clayui/table:** Fixes lint error ([9dec4a4](https://github.com/liferay/clay/commit/9dec4a4))

### Features

-   **@clayui/table:** Adds the `noWrap` prop to ClayTable.Cell ([da88293](https://github.com/liferay/clay/commit/da88293))

# [3.1.0](https://github.com/liferay/clay/compare/@clayui/table@3.0.7...@clayui/table@3.1.0) (2020-10-01)

### Features

-   **clayui.com:** Move API tables to new files and update document tabs, rename files to use singular naming instead of plural, change mainTabURL of pagination-bar to a proper one ([d812ee9](https://github.com/liferay/clay/commit/d812ee9))
-   **clayui.com:** Revert the change made to headings used, rename stickers and tables to sticker and table respectively, also change some wording ([791dabe](https://github.com/liferay/clay/commit/791dabe))
-   **clayui.com:** Update content structure: Checkbox, Management Toolbar, Select Box, Sticker, Table & Tabs ([0fcd54a](https://github.com/liferay/clay/commit/0fcd54a))
-   add displayName for all components ([cc3211d](https://github.com/liferay/clay/commit/cc3211d))

## [3.0.7](https://github.com/liferay/clay/compare/@clayui/table@4.0.0...@clayui/table@3.0.7) (2020-04-24)

### Bug Fixes

-   Fix accessibility issues ([5e09db0](https://github.com/liferay/clay/commit/5e09db0))

# 4.0.0 (2020-02-28)

### Bug Fixes

-   **@clayui/table:** Force `expanded` property for truncating texts because is only possible truncate our texts when the cell is expanded. ([e493a85](https://github.com/liferay/clay/commit/e493a85))
-   **@clayui/table:** Set `false` as default on cell truncating behavior ([c34c410](https://github.com/liferay/clay/commit/c34c410))
-   ignore case when sorting props ([7c9ae28](https://github.com/liferay/clay/commit/7c9ae28))
-   normalize names of components ([3a0abea](https://github.com/liferay/clay/commit/3a0abea))
-   update components to include 'types' and 'ts:main' package keys ([9e24b59](https://github.com/liferay/clay/commit/9e24b59))
-   **table:** add forwardRef to table components ([189a3dc](https://github.com/liferay/clay/commit/189a3dc))
-   **table:** Positioning `table-responsive` classes on a parent `div` wrapping `table` ([57465dd](https://github.com/liferay/clay/commit/57465dd))

### Features

-   update react-testing-library to be @testing-library/react ([bd78145](https://github.com/liferay/clay/commit/bd78145))
-   **@clayui/table:** `bordered` property was renamed to `borderedColumns` due consistency and `borderless` property was added ([#2387](https://github.com/liferay/clay/commit/023ef53))
-   **@clayui/table:** Adds `truncate` property to Table Cell ([441dd6a](https://github.com/liferay/clay/commit/441dd6a))
-   **form:** add helper components for markup ([3ce63d4](https://github.com/liferay/clay/commit/3ce63d4))

### BREAKING CHANGES

-   **@clayui/table:** A property was renamed.

## [3.0.6](https://github.com/liferay/clay/tree/master/packages/clay-table/compare/@clayui/table@3.0.3...@clayui/table@3.0.6) (2020-01-31)

### Bug Fixes

-   **table:** add forwardRef to table components ([189a3dc](https://github.com/liferay/clay/commit/189a3dc))

## [3.0.5](https://github.com/liferay/clay/tree/master/packages/clay-table/compare/@clayui/table@3.0.3...@clayui/table@3.0.5) (2020-01-20)

### Bug Fixes

-   **table:** add forwardRef to table components ([189a3dc](https://github.com/liferay/clay/commit/189a3dc))

## [3.0.4](https://github.com/liferay/clay/tree/master/packages/clay-table/compare/@clayui/table@3.0.3...@clayui/table@3.0.4) (2019-12-05)

### Bug Fixes

-   **table:** add forwardRef to table components ([189a3dc](https://github.com/liferay/clay/commit/189a3dc))

## [3.0.3](https://github.com/liferay/clay/tree/master/packages/clay-table/compare/@clayui/table@3.0.2...@clayui/table@3.0.3) (2019-11-07)

**Note:** Version bump only for package @clayui/table

## [3.0.2](https://github.com/liferay/clay/tree/master/packages/clay-table/compare/@clayui/table@3.0.1...@clayui/table@3.0.2) (2019-11-01)

**Note:** Version bump only for package @clayui/table

## [3.0.1](https://github.com/liferay/clay/tree/master/packages/clay-table/compare/@clayui/table@3.0.0...@clayui/table@3.0.1) (2019-10-28)

**Note:** Version bump only for package @clayui/table
