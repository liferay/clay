# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.148.0](https://github.com/liferay/clay/compare/v3.147.0...v3.148.0) (2025-09-18)

**Note:** Version bump only for package @clayui/data-provider

# [3.145.0](https://github.com/liferay/clay/compare/v3.144.1...v3.145.0) (2025-08-29)

**Note:** Version bump only for package @clayui/data-provider

## [3.144.1](https://github.com/liferay/clay/compare/v3.144.0...v3.144.1) (2025-08-29)

### Bug Fixes

-   make sure peerDependencies for react aren't too greedy ([72c4612](https://github.com/liferay/clay/commit/72c4612944bcfe61c51c0d224ac145f76a819a62))

## [3.143.2](https://github.com/liferay/clay/compare/v3.143.1...v3.143.2) (2025-08-22)

### Bug Fixes

-   types should always be first ([b1fcc40](https://github.com/liferay/clay/commit/b1fcc40a68d9a6bd2d285820baea4b17d1045ab6))

## [3.143.1](https://github.com/liferay/clay/compare/v3.143.0...v3.143.1) (2025-08-22)

### Bug Fixes

-   include types in the npm exports configuration ([ad973f0](https://github.com/liferay/clay/commit/ad973f0faea57569480d802096a689889ac036c9))

# [3.143.0](https://github.com/liferay/clay/compare/v3.141.1...v3.143.0) (2025-08-15)

### Bug Fixes

-   **data-provider:** fix types exported that are enums ([c85278e](https://github.com/liferay/clay/commit/c85278eb447aa578053c178ba3a9bf544a3c7526))
-   **data-provider:** remove checks on the DOM because it is unpredictable due to React 18 batch updating, we only want to assert that polling is working as expected so we can just use jest.advanceTimersByTime ([ef6e68a](https://github.com/liferay/clay/commit/ef6e68aa57aa03a088434c8998191990da80ccde))
-   **data-provider:** update exports and entry point ([8603947](https://github.com/liferay/clay/commit/8603947914ffb53b610ea23ca53a09146a2cad42))

### Features

-   publish clay as both CJS and ESM ([32cb387](https://github.com/liferay/clay/commit/32cb3872e825d937d2807637efdee62ff7977d7c))

# [3.142.0](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.10...@clayui/data-provider@3.142.0) (2025-08-01)

### Bug Fixes

-   **data-provider:** remove checks on the DOM because it is unpredictable due to React 18 batch updating, we only want to assert that polling is working as expected so we can just use jest.advanceTimersByTime ([ef6e68a](https://github.com/liferay/clay/commit/ef6e68aa57aa03a088434c8998191990da80ccde))

## 3.141.1 (2025-07-18)

# 3.141.0 (2025-07-15)

# 3.140.0 (2025-06-19)

# 3.139.0 (2025-06-10)

# 3.137.0 (2025-05-30)

# 3.136.0 (2025-05-03)

# 3.132.0 (2025-03-24)

# 3.128.0 (2025-02-20)

### Features

-   **@clayui/data-provider:** improves component typing to create API DataProvider ([00ae6b8](https://github.com/liferay/clay/commit/00ae6b8d56f776a2638a1d5507ad1df9c7ca534f))

# 3.119.0 (2024-08-30)

# 3.116.0 (2024-06-10)

# 3.115.0 (2024-05-16)

# 3.113.0 (2024-03-28)

# 3.111.0 (2024-02-15)

# 3.109.0 (2024-01-22)

# 3.107.0 (2023-11-27)

## 3.106.1 (2023-10-26)

# 3.106.0 (2023-10-25)

### Bug Fixes

-   remove 'src' dir from being packaged with npm ([9383e8d](https://github.com/liferay/clay/commit/9383e8d8abb25ca3396e7c6e4dfa53bbc72691c5))
-   use package's directory for baseDir when generating type ([0a5c710](https://github.com/liferay/clay/commit/0a5c710092f36243bc8d5487f70e831295715072))

### Features

-   **@clayui/data-provider:** adds sortable support ([a202306](https://github.com/liferay/clay/commit/a202306426b6bc5fa1d6b41bf3418d0a6f489b38))

# 3.104.0 (2023-08-25)

## 3.103.1 (2023-08-15)

# 3.101.0 (2023-07-28)

# 3.100.0 (2023-07-13)

# 3.96.0 (2023-05-29)

## 3.95.2 (2023-05-17)

# 3.95.0 (2023-05-15)

# 3.94.0 (2023-05-03)

# 3.93.0 (2023-04-19)

# 3.92.0 (2023-04-06)

# 3.89.0 (2023-03-01)

# 3.88.0 (2023-02-14)

# 3.87.0 (2023-02-08)

## 3.86.1 (2023-02-02)

# 3.86.0 (2023-01-31)

# 3.85.0 (2023-01-23)

## 3.83.1 (2022-12-20)

# 3.83.0 (2022-12-20)

# 3.82.0 (2022-12-07)

# 3.81.0 (2022-11-30)

## 3.80.1 (2022-11-22)

# 3.80.0 (2022-11-21)

# 3.79.0 (2022-11-08)

## 3.78.2 (2022-10-25)

## 3.78.1 (2022-10-25)

# 3.78.0 (2022-10-25)

# 3.77.0 (2022-10-17)

### Bug Fixes

-   **@clayui/data-provider:** fix error when grouping data in refetch ([64cfa70](https://github.com/liferay/clay/commit/64cfa7071e07ca71d540664b36ff19b333b35054))
-   **@clayui/data-provider:** reset cursor when refetch without cache policy ([98e2ce3](https://github.com/liferay/clay/commit/98e2ce3fcc72486352ef97df3a2cdcb719cc1e1c))

### Features

-   **@clayui/data-provider:** add `useResource` controlled AbortController ([146f53b](https://github.com/liferay/clay/commit/146f53b51bcd5dbb1a48a1ae9e573e6c4424a971))

## 3.75.2 (2022-09-29)

# 3.75.0 (2022-09-28)

# 3.73.0 (2022-09-13)

### Bug Fixes

-   **@clayui/data-provider:** fixes error when not activating suspense ([a563a87](https://github.com/liferay/clay/commit/a563a872ffdaa9d825ba796ee2e99bb8c625b917))

# 3.72.0 (2022-09-05)

### Features

-   **@clayui/data-provider:** improves the creation of the unique identifier of the request ([c9e753c](https://github.com/liferay/clay/commit/c9e753c0a8531afd7a275b474c295bf86ec1cf61))

# 3.71.0 (2022-08-30)

### Features

-   **@clayui/data-provider:** instantiates the DataClient locally if the Provider is not declared ([536dd34](https://github.com/liferay/clay/commit/536dd345759c88181dea19f59a71da3655d6f64a))

## 3.70.3 (2022-08-30)

## 3.70.2 (2022-08-30)

### Bug Fixes

-   **@clayui/data-provider:** fixes error of not retrieving initial cache value when there are multiple instances for the same endpoint ([9a37620](https://github.com/liferay/clay/commit/9a376200153cdbd2dd4e61339dae3b9ac282443a))

# 3.70.0 (2022-08-23)

### Bug Fixes

-   **@clayui/data-provider:** fix the tests ([71672be](https://github.com/liferay/clay/commit/71672bebe69e3dd62d005398b015e8422dade399))

### Features

-   **@clayui/data-provider:** adds functionality to load paginated data ([b2acb27](https://github.com/liferay/clay/commit/b2acb2729939cbb7e23621987a9b95b4d4004bd4))
-   **@clayui/data-provider:** adds integration with React.Suspense and ErrorBoundary ([0c604fe](https://github.com/liferay/clay/commit/0c604fe9126133eab54423dba99962bb97e566e4))
-   **@clayui/provider:** add client initialization to `useResource` hook ([ee5a8a8](https://github.com/liferay/clay/commit/ee5a8a8661a12cd1c0f91c0b129c1b1da8f8c2f1))

# 3.69.0 (2022-08-16)

# 3.67.0 (2022-07-25)

# 3.65.0 (2022-07-11)

# 3.58.0 (2022-05-23)

# 3.56.0 (2022-05-09)

# 3.55.0 (2022-05-02)

# 3.52.0 (2022-04-04)

# 3.49.0 (2022-03-15)

# 3.47.0 (2022-02-23)

# 3.45.0 (2022-02-01)

# 3.40.0 (2021-11-17)

# 3.39.0 (2021-10-29)

# 3.38.0 (2021-10-22)

# 3.37.0 (2021-10-06)

# 3.36.0 (2021-09-23)

## 3.35.3 (2021-09-09)

## 3.35.2 (2021-08-30)

## 3.35.1 (2021-08-30)

# 3.35.0 (2021-08-30)

# 3.29.0 (2021-05-28)

# 3.28.0 (2021-05-19)

# 3.27.0 (2021-05-05)

## [3.141.1](https://github.com/liferay/clay/compare/v3.141.0...v3.141.1) (2025-07-18)

**Note:** Version bump only for package @clayui/data-provider

# [3.141.0](https://github.com/liferay/clay/compare/v3.140.0...v3.141.0) (2025-07-15)

**Note:** Version bump only for package @clayui/data-provider

# [3.140.0](https://github.com/liferay/clay/compare/v3.139.1...v3.140.0) (2025-06-19)

**Note:** Version bump only for package @clayui/data-provider

# [3.139.0](https://github.com/liferay/clay/compare/v3.138.0...v3.139.0) (2025-06-10)

**Note:** Version bump only for package @clayui/data-provider

# [3.137.0](https://github.com/liferay/clay/compare/v3.136.0...v3.137.0) (2025-05-30)

**Note:** Version bump only for package @clayui/data-provider

# [3.136.0](https://github.com/liferay/clay/compare/v3.135.0...v3.136.0) (2025-05-03)

**Note:** Version bump only for package @clayui/data-provider

# [3.132.0](https://github.com/liferay/clay/compare/v3.131.0...v3.132.0) (2025-03-24)

**Note:** Version bump only for package @clayui/data-provider

# [3.128.0](https://github.com/liferay/clay/compare/v3.127.0...v3.128.0) (2025-02-20)

### Features

-   **@clayui/data-provider:** improves component typing to create API DataProvider ([00ae6b8](https://github.com/liferay/clay/commit/00ae6b8d56f776a2638a1d5507ad1df9c7ca534f))

# [3.119.0](https://github.com/liferay/clay/compare/v3.118.0...v3.119.0) (2024-08-30)

**Note:** Version bump only for package @clayui/data-provider

# [3.116.0](https://github.com/liferay/clay/compare/v3.115.2...v3.116.0) (2024-06-10)

**Note:** Version bump only for package @clayui/data-provider

# [3.115.0](https://github.com/liferay/clay/compare/v3.114.0...v3.115.0) (2024-05-16)

**Note:** Version bump only for package @clayui/data-provider

# [3.113.0](https://github.com/liferay/clay/compare/v3.112.0...v3.113.0) (2024-03-28)

**Note:** Version bump only for package @clayui/data-provider

# [3.111.0](https://github.com/liferay/clay/compare/v3.110.0...v3.111.0) (2024-02-15)

**Note:** Version bump only for package @clayui/data-provider

# [3.109.0](https://github.com/liferay/clay/compare/v3.108.0...v3.109.0) (2024-01-22)

**Note:** Version bump only for package @clayui/data-provider

# [3.107.0](https://github.com/liferay/clay/compare/v3.106.1...v3.107.0) (2023-11-27)

**Note:** Version bump only for package @clayui/data-provider

## [3.106.1](https://github.com/liferay/clay/compare/v3.106.0...v3.106.1) (2023-10-26)

**Note:** Version bump only for package @clayui/data-provider

# [3.106.0](https://github.com/liferay/clay/compare/v3.105.0...v3.106.0) (2023-10-25)

### Bug Fixes

-   remove 'src' dir from being packaged with npm ([9383e8d](https://github.com/liferay/clay/commit/9383e8d8abb25ca3396e7c6e4dfa53bbc72691c5))
-   use package's directory for baseDir when generating type ([0a5c710](https://github.com/liferay/clay/commit/0a5c710092f36243bc8d5487f70e831295715072))

### Features

-   **@clayui/data-provider:** adds sortable support ([a202306](https://github.com/liferay/clay/commit/a202306426b6bc5fa1d6b41bf3418d0a6f489b38))

# [3.104.0](https://github.com/liferay/clay/compare/v3.103.1...v3.104.0) (2023-08-25)

**Note:** Version bump only for package @clayui/data-provider

## [3.103.1](https://github.com/liferay/clay/compare/v3.103.0...v3.103.1) (2023-08-15)

**Note:** Version bump only for package @clayui/data-provider

# [3.101.0](https://github.com/liferay/clay/compare/v3.100.0...v3.101.0) (2023-07-28)

**Note:** Version bump only for package @clayui/data-provider

# [3.100.0](https://github.com/liferay/clay/compare/v3.99.4...v3.100.0) (2023-07-13)

**Note:** Version bump only for package @clayui/data-provider

# [3.96.0](https://github.com/liferay/clay/compare/v3.95.2...v3.96.0) (2023-05-29)

**Note:** Version bump only for package @clayui/data-provider

## [3.95.2](https://github.com/liferay/clay/compare/v3.95.0...v3.95.2) (2023-05-17)

**Note:** Version bump only for package @clayui/data-provider

# [3.95.0](https://github.com/liferay/clay/compare/v3.94.0...v3.95.0) (2023-05-15)

**Note:** Version bump only for package @clayui/data-provider

# [3.94.0](https://github.com/liferay/clay/compare/v3.93.0...v3.94.0) (2023-05-03)

**Note:** Version bump only for package @clayui/data-provider

# [3.93.0](https://github.com/liferay/clay/compare/v3.92.0...v3.93.0) (2023-04-19)

**Note:** Version bump only for package @clayui/data-provider

# [3.92.0](https://github.com/liferay/clay/compare/v3.91.0...v3.92.0) (2023-04-06)

**Note:** Version bump only for package @clayui/data-provider

# [3.89.0](https://github.com/liferay/clay/compare/v3.88.0...v3.89.0) (2023-03-01)

**Note:** Version bump only for package @clayui/data-provider

# [3.88.0](https://github.com/liferay/clay/compare/v3.87.2...v3.88.0) (2023-02-14)

**Note:** Version bump only for package @clayui/data-provider

# [3.87.0](https://github.com/liferay/clay/compare/v3.86.1...v3.87.0) (2023-02-08)

**Note:** Version bump only for package @clayui/data-provider

## [3.86.1](https://github.com/liferay/clay/compare/v3.86.0...v3.86.1) (2023-02-02)

**Note:** Version bump only for package @clayui/data-provider

# [3.86.0](https://github.com/liferay/clay/compare/v3.85.0...v3.86.0) (2023-01-31)

**Note:** Version bump only for package @clayui/data-provider

# [3.85.0](https://github.com/liferay/clay/compare/v3.84.0...v3.85.0) (2023-01-23)

**Note:** Version bump only for package @clayui/data-provider

## [3.83.1](https://github.com/liferay/clay/compare/v3.83.0...v3.83.1) (2022-12-20)

**Note:** Version bump only for package @clayui/data-provider

# [3.83.0](https://github.com/liferay/clay/compare/v3.82.0...v3.83.0) (2022-12-20)

**Note:** Version bump only for package @clayui/data-provider

# [3.82.0](https://github.com/liferay/clay/compare/v3.81.0...v3.82.0) (2022-12-07)

**Note:** Version bump only for package @clayui/data-provider

# [3.81.0](https://github.com/liferay/clay/compare/v3.80.1...v3.81.0) (2022-11-30)

**Note:** Version bump only for package @clayui/data-provider

## [3.80.1](https://github.com/liferay/clay/compare/v3.80.0...v3.80.1) (2022-11-22)

**Note:** Version bump only for package @clayui/data-provider

# [3.80.0](https://github.com/liferay/clay/compare/v3.79.0...v3.80.0) (2022-11-21)

**Note:** Version bump only for package @clayui/data-provider

# [3.79.0](https://github.com/liferay/clay/compare/v3.78.2...v3.79.0) (2022-11-08)

**Note:** Version bump only for package @clayui/data-provider

## [3.78.2](https://github.com/liferay/clay/compare/v3.78.1...v3.78.2) (2022-10-25)

**Note:** Version bump only for package @clayui/data-provider

## [3.78.1](https://github.com/liferay/clay/compare/v3.78.0...v3.78.1) (2022-10-25)

**Note:** Version bump only for package @clayui/data-provider

# [3.78.0](https://github.com/liferay/clay/compare/v3.77.0...v3.78.0) (2022-10-25)

**Note:** Version bump only for package @clayui/data-provider

# [3.77.0](https://github.com/liferay/clay/compare/v3.76.0...v3.77.0) (2022-10-17)

### Bug Fixes

-   **@clayui/data-provider:** fix error when grouping data in refetch ([64cfa70](https://github.com/liferay/clay/commit/64cfa7071e07ca71d540664b36ff19b333b35054))
-   **@clayui/data-provider:** reset cursor when refetch without cache policy ([98e2ce3](https://github.com/liferay/clay/commit/98e2ce3fcc72486352ef97df3a2cdcb719cc1e1c))

### Features

-   **@clayui/data-provider:** add `useResource` controlled AbortController ([146f53b](https://github.com/liferay/clay/commit/146f53b51bcd5dbb1a48a1ae9e573e6c4424a971))

## [3.75.2](https://github.com/liferay/clay/compare/v3.75.1...v3.75.2) (2022-09-29)

**Note:** Version bump only for package @clayui/data-provider

# [3.75.0](https://github.com/liferay/clay/compare/v3.74.0...v3.75.0) (2022-09-28)

**Note:** Version bump only for package @clayui/data-provider

# [3.73.0](https://github.com/liferay/clay/compare/v3.72.0...v3.73.0) (2022-09-13)

### Bug Fixes

-   **@clayui/data-provider:** fixes error when not activating suspense ([a563a87](https://github.com/liferay/clay/commit/a563a872ffdaa9d825ba796ee2e99bb8c625b917))

# [3.72.0](https://github.com/liferay/clay/compare/v3.71.0...v3.72.0) (2022-09-05)

### Features

-   **@clayui/data-provider:** improves the creation of the unique identifier of the request ([c9e753c](https://github.com/liferay/clay/commit/c9e753c0a8531afd7a275b474c295bf86ec1cf61))

# [3.71.0](https://github.com/liferay/clay/compare/v3.70.3...v3.71.0) (2022-08-30)

### Features

-   **@clayui/data-provider:** instantiates the DataClient locally if the Provider is not declared ([536dd34](https://github.com/liferay/clay/commit/536dd345759c88181dea19f59a71da3655d6f64a))

## [3.70.3](https://github.com/liferay/clay/compare/v3.70.2...v3.70.3) (2022-08-30)

**Note:** Version bump only for package @clayui/data-provider

## [3.70.2](https://github.com/liferay/clay/compare/v3.70.1...v3.70.2) (2022-08-30)

### Bug Fixes

-   **@clayui/data-provider:** fixes error of not retrieving initial cache value when there are multiple instances for the same endpoint ([9a37620](https://github.com/liferay/clay/commit/9a376200153cdbd2dd4e61339dae3b9ac282443a))

# [3.70.0](https://github.com/liferay/clay/compare/v3.69.0...v3.70.0) (2022-08-23)

### Bug Fixes

-   **@clayui/data-provider:** fix the tests ([71672be](https://github.com/liferay/clay/commit/71672bebe69e3dd62d005398b015e8422dade399))

### Features

-   **@clayui/data-provider:** adds functionality to load paginated data ([b2acb27](https://github.com/liferay/clay/commit/b2acb2729939cbb7e23621987a9b95b4d4004bd4))
-   **@clayui/data-provider:** adds integration with React.Suspense and ErrorBoundary ([0c604fe](https://github.com/liferay/clay/commit/0c604fe9126133eab54423dba99962bb97e566e4))
-   **@clayui/provider:** add client initialization to `useResource` hook ([ee5a8a8](https://github.com/liferay/clay/commit/ee5a8a8661a12cd1c0f91c0b129c1b1da8f8c2f1))

# [3.69.0](https://github.com/liferay/clay/compare/v3.68.0...v3.69.0) (2022-08-16)

**Note:** Version bump only for package @clayui/data-provider

# [3.67.0](https://github.com/liferay/clay/compare/v3.66.0...v3.67.0) (2022-07-25)

**Note:** Version bump only for package @clayui/data-provider

# [3.65.0](https://github.com/liferay/clay/compare/v3.64.0...v3.65.0) (2022-07-11)

**Note:** Version bump only for package @clayui/data-provider

# [3.58.0](https://github.com/liferay/clay/compare/v3.57.0...v3.58.0) (2022-05-23)

**Note:** Version bump only for package @clayui/data-provider

# [3.56.0](https://github.com/liferay/clay/compare/v3.55.0...v3.56.0) (2022-05-09)

**Note:** Version bump only for package @clayui/data-provider

# [3.55.0](https://github.com/liferay/clay/compare/v3.54.0...v3.55.0) (2022-05-02)

**Note:** Version bump only for package @clayui/data-provider

# [3.52.0](https://github.com/liferay/clay/compare/v3.51.0...v3.52.0) (2022-04-04)

**Note:** Version bump only for package @clayui/data-provider

# [3.49.0](https://github.com/liferay/clay/compare/v3.48.0...v3.49.0) (2022-03-15)

**Note:** Version bump only for package @clayui/data-provider

# [3.47.0](https://github.com/liferay/clay/compare/v3.46.0...v3.47.0) (2022-02-23)

**Note:** Version bump only for package @clayui/data-provider

# [3.45.0](https://github.com/liferay/clay/compare/v3.44.2...v3.45.0) (2022-02-01)

**Note:** Version bump only for package @clayui/data-provider

# [3.40.0](https://github.com/liferay/clay/compare/v3.39.0...v3.40.0) (2021-11-17)

**Note:** Version bump only for package @clayui/data-provider

# [3.39.0](https://github.com/liferay/clay/compare/v3.38.0...v3.39.0) (2021-10-29)

**Note:** Version bump only for package @clayui/data-provider

# [3.38.0](https://github.com/liferay/clay/compare/v3.37.0...v3.38.0) (2021-10-22)

**Note:** Version bump only for package @clayui/data-provider

# [3.37.0](https://github.com/liferay/clay/compare/v3.36.0...v3.37.0) (2021-10-06)

**Note:** Version bump only for package @clayui/data-provider

# [3.36.0](https://github.com/liferay/clay/compare/v3.35.3...v3.36.0) (2021-09-23)

**Note:** Version bump only for package @clayui/data-provider

## [3.35.3](https://github.com/liferay/clay/compare/v3.35.2...v3.35.3) (2021-09-09)

**Note:** Version bump only for package @clayui/data-provider

## [3.35.2](https://github.com/liferay/clay/compare/v3.35.1...v3.35.2) (2021-08-30)

**Note:** Version bump only for package @clayui/data-provider

## [3.35.1](https://github.com/liferay/clay/compare/v3.35.0...v3.35.1) (2021-08-30)

**Note:** Version bump only for package @clayui/data-provider

# [3.35.0](https://github.com/liferay/clay/compare/v3.34.0...v3.35.0) (2021-08-30)

**Note:** Version bump only for package @clayui/data-provider

# [3.32.0](https://github.com/liferay/clay/compare/v3.31.0...v3.32.0) (2021-07-28)

**Note:** Version bump only for package @clayui/data-provider

# [3.29.0](https://github.com/liferay/clay/compare/v3.28.0...v3.29.0) (2021-05-28)

**Note:** Version bump only for package @clayui/data-provider

# [3.28.0](https://github.com/liferay/clay/compare/v3.27.0...v3.28.0) (2021-05-19)

**Note:** Version bump only for package @clayui/data-provider

# [3.27.0](https://github.com/liferay/clay/compare/v3.26.0...v3.27.0) (2021-05-05)

**Note:** Version bump only for package @clayui/data-provider

## [3.3.10](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.9...@clayui/data-provider@3.3.10) (2021-02-11)

**Note:** Version bump only for package @clayui/data-provider

## [3.3.9](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.8...@clayui/data-provider@3.3.9) (2021-01-27)

**Note:** Version bump only for package @clayui/data-provider

## [3.3.8](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.7...@clayui/data-provider@3.3.8) (2021-01-13)

**Note:** Version bump only for package @clayui/data-provider

## [3.3.7](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.5...@clayui/data-provider@3.3.7) (2020-12-16)

**Note:** Version bump only for package @clayui/data-provider

## [3.3.6](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.5...@clayui/data-provider@3.3.6) (2020-12-02)

**Note:** Version bump only for package @clayui/data-provider

## [3.3.5](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.4...@clayui/data-provider@3.3.5) (2020-10-01)

**Note:** Version bump only for package @clayui/data-provider

## [3.3.4](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.3...@clayui/data-provider@3.3.4) (2020-08-28)

**Note:** Version bump only for package @clayui/data-provider

## [3.3.3](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.2...@clayui/data-provider@3.3.3) (2020-08-26)

**Note:** Version bump only for package @clayui/data-provider

## [3.3.2](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.1...@clayui/data-provider@3.3.2) (2020-08-11)

### Bug Fixes

-   **@clayui/data-provider:** checks if the request body is read using request.bodyUsed ([315ada3](https://github.com/liferay/clay/commit/315ada3))

## [3.3.1](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.0...@clayui/data-provider@3.3.1) (2020-07-28)

### Bug Fixes

-   update packages to appropriate dependencies ([0026168](https://github.com/liferay/clay/commit/0026168))

# [3.3.0](https://github.com/liferay/clay/compare/@clayui/data-provider@3.2.1...@clayui/data-provider@3.3.0) (2020-07-14)

### Features

-   **@clayui/data-provider:** Adds the new fetcher API and deprecated the link behavior in accepting async function ([#3417](https://github.com/liferay/clay/issues/3417)) ([733a89f](https://github.com/liferay/clay/commit/733a89f))

## [3.2.1](https://github.com/liferay/clay/compare/@clayui/data-provider@3.2.0...@clayui/data-provider@3.2.1) (2020-07-07)

**Note:** Version bump only for package @clayui/data-provider

# [3.2.0](https://github.com/liferay/clay/compare/@clayui/data-provider@3.1.1...@clayui/data-provider@3.2.0) (2020-06-18)

### Features

-   **clayui.com:** Improve API docs - Make displayNames consistent ([5a33822](https://github.com/liferay/clay/commit/5a33822))

## [3.1.1](https://github.com/liferay/clay/compare/@clayui/data-provider@3.1.0...@clayui/data-provider@3.1.1) (2020-04-24)

### Bug Fixes

-   Fix accessibility issues ([5e09db0](https://github.com/liferay/clay/commit/5e09db0))

# 3.1.0 (2020-02-28)

### Bug Fixes

-   **@clayui/data-provider:** add LRUCache implementation ([e3794c4](https://github.com/liferay/clay/commit/e3794c4))
-   **@clayui/data-provider:** fix warning message ([eebfec4](https://github.com/liferay/clay/commit/eebfec4))
-   **@clayui/data-provider:** replace setInterval in favor of setTimeout and polling engine improvements ([a028394](https://github.com/liferay/clay/commit/a028394))
-   **clay-data-provider:** remove metal-uri dependency in favor of URL ([192a1c8](https://github.com/liferay/clay/commit/192a1c8))
-   **clay-data-provider:** use more explicit types in tests ([35fc37c](https://github.com/liferay/clay/commit/35fc37c))
-   **DataProvider:** export useResource hook ([22c9509](https://github.com/liferay/clay/commit/22c9509))
-   **DataProvider:** Make children required ([3c50e75](https://github.com/liferay/clay/commit/3c50e75))
-   **DataProvider:** stop giving error of no definition when generating the API in the documentation ([5fcf296](https://github.com/liferay/clay/commit/5fcf296))
-   **useResource:** Add firstRender reference to avoid two API fetch ([28ee861](https://github.com/liferay/clay/commit/28ee861))
-   **useResource:** Only check if the fetchOptions.method is GET if exits ([cb1be84](https://github.com/liferay/clay/commit/cb1be84))
-   add displayName to context for dev tools ([82e1e8c](https://github.com/liferay/clay/commit/82e1e8c))
-   Makes fetchRetry properties optional ([67f5b22](https://github.com/liferay/clay/commit/67f5b22))
-   update components to include 'types' and 'ts:main' package keys ([9e24b59](https://github.com/liferay/clay/commit/9e24b59))

### Features

-   Add metal-uri and custom types ([ec6854e](https://github.com/liferay/clay/commit/ec6854e))
-   Create DataProvider component and useResource hook in React ([086c3c0](https://github.com/liferay/clay/commit/086c3c0))
-   Move useDebounce to clay-shared ([fcf1ceb](https://github.com/liferay/clay/commit/fcf1ceb))
-   update react-testing-library to be @testing-library/react ([bd78145](https://github.com/liferay/clay/commit/bd78145))
-   **@clayui/data-provider:** pass formatted variables when link is a function ([5fbbefc](https://github.com/liferay/clay/commit/5fbbefc))

## [3.0.7](https://github.com/liferay/clay/tree/master/packages/clay-data-provider/compare/@clayui/data-provider@3.0.6...@clayui/data-provider@3.0.7) (2020-02-13)

### Bug Fixes

-   **@clayui/data-provider:** fix warning message ([eebfec4](https://github.com/liferay/clay/commit/eebfec4))
-   **useResource:** Only check if the fetchOptions.method is GET if exits ([cb1be84](https://github.com/liferay/clay/commit/cb1be84))

## [3.0.6](https://github.com/liferay/clay/tree/master/packages/clay-data-provider/compare/@clayui/data-provider@3.0.3...@clayui/data-provider@3.0.6) (2020-01-31)

**Note:** Version bump only for package @clayui/data-provider

## [3.0.5](https://github.com/liferay/clay/tree/master/packages/clay-data-provider/compare/@clayui/data-provider@3.0.3...@clayui/data-provider@3.0.5) (2020-01-20)

**Note:** Version bump only for package @clayui/data-provider

## [3.0.4](https://github.com/liferay/clay/tree/master/packages/clay-data-provider/compare/@clayui/data-provider@3.0.3...@clayui/data-provider@3.0.4) (2019-12-05)

**Note:** Version bump only for package @clayui/data-provider

## [3.0.3](https://github.com/liferay/clay/tree/master/packages/clay-data-provider/compare/@clayui/data-provider@3.0.2...@clayui/data-provider@3.0.3) (2019-11-07)

### Bug Fixes

-   **@clayui/data-provider:** replace setInterval in favor of setTimeout and polling engine improvements ([a028394](https://github.com/liferay/clay/commit/a028394))

## [3.0.2](https://github.com/liferay/clay/tree/master/packages/clay-data-provider/compare/@clayui/data-provider@3.0.1...@clayui/data-provider@3.0.2) (2019-11-01)

**Note:** Version bump only for package @clayui/data-provider

## [3.0.1](https://github.com/liferay/clay/tree/master/packages/clay-data-provider/compare/@clayui/data-provider@3.0.0...@clayui/data-provider@3.0.1) (2019-10-28)

**Note:** Version bump only for package @clayui/data-provider
