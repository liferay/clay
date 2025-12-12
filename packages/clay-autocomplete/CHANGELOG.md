# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.155.0](https://github.com/liferay/clay/compare/v3.154.0...v3.155.0) (2025-11-26)

### Bug Fixes

-   **@clayui.com:** LPD-66892 Fix Autocomplete visual feedback example ([559f991](https://github.com/liferay/clay/commit/559f9914e92f712e433bd7aaaf5f2490895bd7bd))
-   **@clayui/autocomplete:** LPD-66892 Adjust variable name that controls selected state feedback only if selectedKeys is defined and includes the item ([92d5718](https://github.com/liferay/clay/commit/92d57180f5c3237e1b1895f8af446724b3b600c0))
-   **@clayui/autocomplete:** LPD-66892 Change isSelected logic to improve readability ([93ce187](https://github.com/liferay/clay/commit/93ce187e255a0882e2078ed269b17148cc7f8ce6))
-   **@clayui/autocomplete:** LPD-66892 Deprecating `active` prop in ClayAutocomplete.Item because it is no longer needed due to the use of `selectKeys` in the root component. ([3111bc5](https://github.com/liferay/clay/commit/3111bc5fce1ba050a36b4e661bf7ad0e6df6b34e))
-   **@clayui/autocomplete:** LPD-66892 Fix aria-selected to be in the 'button' instead of 'li' ([73edd10](https://github.com/liferay/clay/commit/73edd101139688920b5d8b060b7785c71c398fba))
-   **@clayui/autocomplete:** LPD-66892 Fix Autocomplete.Item match property to accept options of type number ([9a5c561](https://github.com/liferay/clay/commit/9a5c5615be9ead30ac43d827973e5e37e24adc95))
-   **@clayui/autocomplete:** LPD-66892 Fix visual feedback storybook example ([451a8f9](https://github.com/liferay/clay/commit/451a8f957fb94cb6ee3620e14487efa56318463d))
-   **@clayui/autocomplete:** LPD-66892 Fix visual feedback when an item is selected test ([4b4d449](https://github.com/liferay/clay/commit/4b4d449b1a468fea969162356490e217a2bb7bcd))
-   **@clayui/autocomplete:** LPD-66892 Move selectedKeys handle responsibility to Autocomplete.Item ([dd2b368](https://github.com/liferay/clay/commit/dd2b3685d87a4a4c73e4f6178d6bc5c7fba45f41))
-   **@clayui/autocomplete:** LPD-66892 Rollback not required accesibility changes ([bd1a23d](https://github.com/liferay/clay/commit/bd1a23d4fee0ad7c2a73e0a404fd9fea079f788c))

### Features

-   **@clayui/autocomplete:** LPD-66892 Add selectedKeys prop to improve selected state ([13b6bea](https://github.com/liferay/clay/commit/13b6bea83071b59b5dfda67cb58adaee11568046))

# [3.151.0](https://github.com/liferay/clay/compare/v3.150.0...v3.151.0) (2025-10-22)

**Note:** Version bump only for package @clayui/autocomplete

# [3.149.0](https://github.com/liferay/clay/compare/v3.148.0...v3.149.0) (2025-09-24)

### Bug Fixes

-   **autocomplete:** remove icon options ([76f2d87](https://github.com/liferay/clay/commit/76f2d878ae4b7cd4e635af7c5315e37f0a813657))

### Features

-   **autocomplete:** add new prop for adding a primary action to take in the drop down ([2d06f4f](https://github.com/liferay/clay/commit/2d06f4fe558632b603998453773f7e4f688f9a44))
-   **autocomplete:** disable text matching highlights for primaryAction in autocomplete ([a2ea94f](https://github.com/liferay/clay/commit/a2ea94f9f2891897950d0d3ae52f665569c464af))

# [3.148.0](https://github.com/liferay/clay/compare/v3.147.0...v3.148.0) (2025-09-18)

**Note:** Version bump only for package @clayui/autocomplete

# [3.146.0](https://github.com/liferay/clay/compare/v3.145.0...v3.146.0) (2025-09-01)

**Note:** Version bump only for package @clayui/autocomplete

# [3.145.0](https://github.com/liferay/clay/compare/v3.144.1...v3.145.0) (2025-08-29)

**Note:** Version bump only for package @clayui/autocomplete

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
-   **data-provider:** update exports and entry point ([8603947](https://github.com/liferay/clay/commit/8603947914ffb53b610ea23ca53a09146a2cad42))

### Features

-   publish clay as both CJS and ESM ([32cb387](https://github.com/liferay/clay/commit/32cb3872e825d937d2807637efdee62ff7977d7c))

## [3.142.2](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.142.0...@clayui/autocomplete@3.142.2) (2025-08-13)

**Note:** Version bump only for package @clayui/autocomplete

# [3.142.0](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.2.6...@clayui/autocomplete@3.142.0) (2025-08-01)

## 3.141.1 (2025-07-18)

# 3.141.0 (2025-07-15)

# 3.140.0 (2025-06-19)

### Bug Fixes

-   **@clayui/autocomplete:** Add a warning when an external starting value cannot be set due to items being objects and filterKey not being set. ([75a8b73](https://github.com/liferay/clay/commit/75a8b7307ceabacc5ef0b2af436d7eac9df023c4))
-   **@clayui/autocomplete:** Add a warning when an external starting value cannot be set due to items being objects and filterKey not being set. ([5bea09c](https://github.com/liferay/clay/commit/5bea09c3d9f566911e41e84d2fd4d8198253851a))

### Features

-   **@clayui/autocomplete:** LPD-56059 Update the autocomplete to allow filtering data that may be deeply nested. ([85d76ed](https://github.com/liferay/clay/commit/85d76ed0e5916d7317b16c02325e8cf631006b92))

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

## 3.128.2 (2025-02-21)

### Bug Fixes

-   **@clayui/autocomplete:** fixes typescript lint bug on Item component ([31d3869](https://github.com/liferay/clay/commit/31d3869f449727dfd1a570bf691c4e5c8080f1f0))

## 3.128.1 (2025-02-21)

### Bug Fixes

-   **@clayui/autocomplete:** fixes typescript lint bug ([0a7b319](https://github.com/liferay/clay/commit/0a7b319f1e509b8812294a55799585a668afca59))

# 3.128.0 (2025-02-20)

### Bug Fixes

-   fixes bug in components with generic types and sub components ([4dd37e6](https://github.com/liferay/clay/commit/4dd37e654b22206aad190d6ce5558dab1dfd2d36))
-   **www:** fixes bug in build ([aa63833](https://github.com/liferay/clay/commit/aa63833462810249e896cb9da30629275f500b0b))

### Features

-   **@clayui/autocomplete:** improves component typing to create API Table ([674b3aa](https://github.com/liferay/clay/commit/674b3aa5fe060a1b6cd8a19ee5cd9f7428fa5d47))

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

### Bug Fixes

-   **clay-autocomplete:** Remove autocomplete async filter paginated example ([6366d29](https://github.com/liferay/clay/commit/6366d296e17be2f8aac6474951cc1728a208eca5))

# 3.113.0 (2024-03-28)

# 3.112.0 (2024-03-11)

### Features

-   **@clayui/autocomplete:** update component highlight ([b6fd6a9](https://github.com/liferay/clay/commit/b6fd6a969099a5c89bc48bfa06b2ec1ccf1a28cc))

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

### Bug Fixes

-   **@clayui/autocomplete:** fix error when navigating via keyboard with the mouse over the item ([f13e062](https://github.com/liferay/clay/commit/f13e062033445f70df32bdf31d068646215c9a78))

# 3.104.0 (2023-08-25)

## 3.103.1 (2023-08-15)

## 3.101.1 (2023-07-28)

### Bug Fixes

-   **@clayui/autocomplete:** does not revalidate the value if it is reset by the controlled state ([73ec258](https://github.com/liferay/clay/commit/73ec258196572004430780bc4330137437e36377))
-   **@clayui/autocomplete:** improves value matching behavior with suggestion list when state is controlled ([5f33f5c](https://github.com/liferay/clay/commit/5f33f5c42a4dc2cef85de01743baebe2d6d1f829))

# 3.101.0 (2023-07-28)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when not validating value with items ([ab4421e](https://github.com/liferay/clay/commit/ab4421ede3b8b97084e694e3500b07f4ff1957f1))

### Features

-   **@clayui/autocomplete:** adds new API to allow custom value ([516de02](https://github.com/liferay/clay/commit/516de02e9cd2d8dbbecc60d7fc79935e377decf1))

# 3.100.0 (2023-07-13)

## 3.99.4 (2023-07-10)

### Bug Fixes

-   **@clayui/multi-select:** fix loading indicator markup in MultiSelect ([b883824](https://github.com/liferay/clay/commit/b8838247d1638524691fda2a74934e0676e6597d))

## 3.99.2 (2023-07-05)

### Bug Fixes

-   **@clayui/autocomplete:** makes new `messages` properties optional ([94eceb6](https://github.com/liferay/clay/commit/94eceb6261334272d0b3a000052a7a9592505284))

## 3.99.1 (2023-07-04)

### Bug Fixes

-   **@clayui/autocomplete:** adds warning when `filterKey` is not defined and tries to filter an option that is object ([48dd887](https://github.com/liferay/clay/commit/48dd887b7fb6afbade67a98e6d325d1068ddc6b7))
-   **@clayui/autocomplete:** fixes type inference for properties and generic type ([cfc4309](https://github.com/liferay/clay/commit/cfc4309313b46bea777ddae3f9d810ae032b2a3c))

# 3.99.0 (2023-06-28)

### Bug Fixes

-   **@clayui/autocomplete:** fix bug not announcing available options when autocomplete is open ([1dc9581](https://github.com/liferay/clay/commit/1dc9581bd2e96b7cdf250bf02c4858c5df4eb833))
-   **@clayui/autocomplete:** fixes suppressing the `+` from the value when filtering the list ([1ba8356](https://github.com/liferay/clay/commit/1ba8356fce973dce24a63b5154e9ae9370c43562))

# 3.98.0 (2023-06-20)

## 3.97.2 (2023-06-16)

### Bug Fixes

-   **@clayui/autocomplete:** fix error keeping menu open after selecting option with `menuTrigger="focus"` ([5f305f7](https://github.com/liferay/clay/commit/5f305f7962677c5e0c2b1b7a366f507755fc9947))
-   **@clayui/autocomplete:** fixes error when losing reference to nodes at each rerender ([a28aa05](https://github.com/liferay/clay/commit/a28aa050ab3dbe8d337518361289f4a4fbc87cac))
-   **@clayui/autocomplete:** fixes error when not resetting visual focus when menu is closed by custom logic ([b45c87e](https://github.com/liferay/clay/commit/b45c87e15456639def329731a0fc0a038df87906))

## 3.97.1 (2023-06-14)

# 3.97.0 (2023-06-13)

### Bug Fixes

-   **@clayui/autocomplete:** removes unnecessary use of the `dropdown-menu-indicator-start` CSS class ([ce09cd8](https://github.com/liferay/clay/commit/ce09cd814bf547e3437a45956f315a0588c52114))
-   **@clayui/multi-select:** explicitly add the `active` API in the component's typing ([e956828](https://github.com/liferay/clay/commit/e95682814d3ec7ab45e65e41bba291a2da023e74))

## 3.96.1 (2023-05-31)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when rendering two collections ([03473be](https://github.com/liferay/clay/commit/03473be98f22d52613b741528cbebec64073b771))

# 3.96.0 (2023-05-29)

### Bug Fixes

-   **@clayui/autocomplete:** don't open menu if items is null ([300fb73](https://github.com/liferay/clay/commit/300fb73452613c588d613e8d9cc687faaab99b68))

### Features

-   **@clayui/autocomplete:** adds new API to customize input ([b6a213b](https://github.com/liferay/clay/commit/b6a213b325e82d2472977463e76762252a519fe6))

## 3.95.2 (2023-05-17)

# 3.95.0 (2023-05-15)

# 3.94.0 (2023-05-03)

### Features

-   **@clayui/autocomplete:** add list virtualization for dynamic content ([9710fd7](https://github.com/liferay/clay/commit/9710fd7693f9ba14d1b2b617fc12e15f71a311e3))
-   **@clayui/autocomplete:** refactors autocomplete implementation with accessibility improvements ([1dc82e6](https://github.com/liferay/clay/commit/1dc82e63b0d51e6cc3bf2cb1c7d08f4e698e6ba1))
-   **@clayui/core:** add infinite scroll to autocomplete ([d3358b4](https://github.com/liferay/clay/commit/d3358b47f8ff872f941e4eba64abd219189110c9))

# 3.93.0 (2023-04-19)

# 3.92.0 (2023-04-06)

# 3.91.0 (2023-03-24)

# 3.90.0 (2023-03-15)

# 3.89.0 (2023-03-01)

# 3.88.0 (2023-02-14)

# 3.87.0 (2023-02-08)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when filtering autocomplete with regex special character ([079e4f7](https://github.com/liferay/clay/commit/079e4f7985a50a54dfbda36e1460204a0562a922))

## 3.86.1 (2023-02-02)

# 3.86.0 (2023-01-31)

# 3.85.0 (2023-01-23)

# 3.84.0 (2022-12-23)

## 3.83.1 (2022-12-20)

# 3.83.0 (2022-12-20)

# 3.82.0 (2022-12-07)

### Features

-   removes duplication of implementation of accessibility features for menu using Overlay component ([9d60eb9](https://github.com/liferay/clay/commit/9d60eb9670cb5dc9fc18e02e3a97f139f1db4cfd))

# 3.81.0 (2022-11-30)

## 3.80.1 (2022-11-22)

# 3.80.0 (2022-11-21)

# 3.79.0 (2022-11-08)

## 3.78.2 (2022-10-25)

## 3.78.1 (2022-10-25)

# 3.78.0 (2022-10-25)

# 3.77.0 (2022-10-17)

### Features

-   **@clayui/autocomplete:** add the Collection pattern and loading state ([ab44b4a](https://github.com/liferay/clay/commit/ab44b4affed2202020d3b8b75124e423e9668f7e))
-   **@clayui/autocomplete:** adds support for paginated data integrated with the `useResource` hook ([cfb35c1](https://github.com/liferay/clay/commit/cfb35c17f311e75c6aee06250953abfdfd422bc3))

## 3.75.3 (2022-09-29)

### Bug Fixes

-   **@clayui/autocomplete:** changes the way to identify the new behavior ([037b17c](https://github.com/liferay/clay/commit/037b17c8debd56420f9af873203ddb2847067f7a))

## 3.75.2 (2022-09-29)

### Bug Fixes

-   **@clayui/autocomplete:** fix of switching the owner of otherProps on Autocomplete ([d5ced5e](https://github.com/liferay/clay/commit/d5ced5e6d85266e25f7955249fedf904fb46de66))

# 3.75.0 (2022-09-28)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when moving focus when pressing alt + arrowdown ([b260984](https://github.com/liferay/clay/commit/b260984484f25617d2f3010ce5b8211e2075ff0f))

### Features

-   **@clayui/autocomplete:** adds accessibility to new autocomplete behavior ([f2ad617](https://github.com/liferay/clay/commit/f2ad617f8f19ad15630f8fd7afd83a126a241e4c))
-   **@clayui/autocomplete:** adds new less verbose composition with more OOTB features ([37e9e89](https://github.com/liferay/clay/commit/37e9e8977fa3b741b0619ba41607beaa97d0d976))
-   **@clayui/autocomplete:** deprecated the `onSetActive` API and replaced it with `onActiveChange` ([9ad5bcb](https://github.com/liferay/clay/commit/9ad5bcb72f057909bdac83789bb4e96a2dd28aff))

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

### Bug Fixes

-   **@clayui/autocomplete:** fix error of `alignment By Viewport` not positioning properly ([4ea771b](https://github.com/liferay/clay/commit/4ea771b2726a0ba469edca4d0e7548cbeb74d01e))

## 3.65.1 (2022-07-11)

# 3.65.0 (2022-07-11)

# 3.64.0 (2022-07-04)

# 3.62.0 (2022-06-20)

### Features

-   **@clayui/autocomplete:** Support menu alignment by Viewport ([1409c4b](https://github.com/liferay/clay/commit/1409c4b8d22073e642e12f951ebdcb76c9474669))

# 3.60.0 (2022-06-06)

# 3.58.0 (2022-05-23)

# 3.56.0 (2022-05-09)

# 3.55.0 (2022-05-02)

# 3.52.0 (2022-04-04)

# 3.49.0 (2022-03-15)

# 3.48.0 (2022-03-07)

# 3.47.0 (2022-02-23)

# 3.45.0 (2022-02-01)

# 3.43.0 (2021-12-29)

# 3.42.0 (2021-12-15)

# 3.41.0 (2021-12-02)

# 3.40.0 (2021-11-17)

# 3.39.0 (2021-10-29)

# 3.38.0 (2021-10-22)

# 3.37.0 (2021-10-06)

# 3.36.0 (2021-09-23)

### Features

-   **@clayui/autocomplete:** adds `closeOnClickOutside` API support to DropDown ([ece1061](https://github.com/liferay/clay/commit/ece1061e709dae1f2431f356516fb99089272d7b))

## 3.35.3 (2021-09-09)

## 3.35.2 (2021-08-30)

## 3.35.1 (2021-08-30)

# 3.35.0 (2021-08-30)

### Bug Fixes

-   **@clayui/autocomplete:** fixes a potential XSS vulnerability in autocomplete by removing the use of `dangerouslySetInnerHTML` ([675910c](https://github.com/liferay/clay/commit/675910cb503da91b579b9a5f208afc18567c3107))

# 3.30.0 (2021-06-16)

# 3.29.0 (2021-05-28)

# 3.28.0 (2021-05-19)

# 3.27.0 (2021-05-05)

## 3.25.1 (2021-03-05)

# 3.25.0 (2021-02-23)

## [3.141.1](https://github.com/liferay/clay/compare/v3.141.0...v3.141.1) (2025-07-18)

**Note:** Version bump only for package @clayui/autocomplete

# [3.141.0](https://github.com/liferay/clay/compare/v3.140.0...v3.141.0) (2025-07-15)

**Note:** Version bump only for package @clayui/autocomplete

# [3.140.0](https://github.com/liferay/clay/compare/v3.139.1...v3.140.0) (2025-06-19)

### Bug Fixes

-   **@clayui/autocomplete:** Add a warning when an external starting value cannot be set due to items being objects and filterKey not being set. ([75a8b73](https://github.com/liferay/clay/commit/75a8b7307ceabacc5ef0b2af436d7eac9df023c4))
-   **@clayui/autocomplete:** Add a warning when an external starting value cannot be set due to items being objects and filterKey not being set. ([5bea09c](https://github.com/liferay/clay/commit/5bea09c3d9f566911e41e84d2fd4d8198253851a))

### Features

-   **@clayui/autocomplete:** LPD-56059 Update the autocomplete to allow filtering data that may be deeply nested. ([85d76ed](https://github.com/liferay/clay/commit/85d76ed0e5916d7317b16c02325e8cf631006b92))

## [3.139.1](https://github.com/liferay/clay/compare/v3.139.0...v3.139.1) (2025-06-16)

**Note:** Version bump only for package @clayui/autocomplete

# [3.139.0](https://github.com/liferay/clay/compare/v3.138.0...v3.139.0) (2025-06-10)

**Note:** Version bump only for package @clayui/autocomplete

# [3.138.0](https://github.com/liferay/clay/compare/v3.137.0...v3.138.0) (2025-06-02)

**Note:** Version bump only for package @clayui/autocomplete

# [3.137.0](https://github.com/liferay/clay/compare/v3.136.0...v3.137.0) (2025-05-30)

**Note:** Version bump only for package @clayui/autocomplete

# [3.136.0](https://github.com/liferay/clay/compare/v3.135.0...v3.136.0) (2025-05-03)

**Note:** Version bump only for package @clayui/autocomplete

# [3.135.0](https://github.com/liferay/clay/compare/v3.134.0...v3.135.0) (2025-04-22)

**Note:** Version bump only for package @clayui/autocomplete

# [3.134.0](https://github.com/liferay/clay/compare/v3.133.0...v3.134.0) (2025-04-10)

**Note:** Version bump only for package @clayui/autocomplete

# [3.133.0](https://github.com/liferay/clay/compare/v3.132.1...v3.133.0) (2025-03-28)

**Note:** Version bump only for package @clayui/autocomplete

## [3.132.1](https://github.com/liferay/clay/compare/v3.132.0...v3.132.1) (2025-03-24)

**Note:** Version bump only for package @clayui/autocomplete

# [3.132.0](https://github.com/liferay/clay/compare/v3.131.0...v3.132.0) (2025-03-24)

**Note:** Version bump only for package @clayui/autocomplete

# [3.131.0](https://github.com/liferay/clay/compare/v3.130.0...v3.131.0) (2025-03-20)

**Note:** Version bump only for package @clayui/autocomplete

# [3.130.0](https://github.com/liferay/clay/compare/v3.129.1...v3.130.0) (2025-03-12)

**Note:** Version bump only for package @clayui/autocomplete

# [3.129.0](https://github.com/liferay/clay/compare/v3.128.3...v3.129.0) (2025-02-27)

**Note:** Version bump only for package @clayui/autocomplete

## [3.128.2](https://github.com/liferay/clay/compare/v3.128.1...v3.128.2) (2025-02-21)

### Bug Fixes

-   **@clayui/autocomplete:** fixes typescript lint bug on Item component ([31d3869](https://github.com/liferay/clay/commit/31d3869f449727dfd1a570bf691c4e5c8080f1f0))

## [3.128.1](https://github.com/liferay/clay/compare/v3.128.0...v3.128.1) (2025-02-21)

### Bug Fixes

-   **@clayui/autocomplete:** fixes typescript lint bug ([0a7b319](https://github.com/liferay/clay/commit/0a7b319f1e509b8812294a55799585a668afca59))

# [3.128.0](https://github.com/liferay/clay/compare/v3.127.0...v3.128.0) (2025-02-20)

### Bug Fixes

-   fixes bug in components with generic types and sub components ([4dd37e6](https://github.com/liferay/clay/commit/4dd37e654b22206aad190d6ce5558dab1dfd2d36))
-   **www:** fixes bug in build ([aa63833](https://github.com/liferay/clay/commit/aa63833462810249e896cb9da30629275f500b0b))

### Features

-   **@clayui/autocomplete:** improves component typing to create API Table ([674b3aa](https://github.com/liferay/clay/commit/674b3aa5fe060a1b6cd8a19ee5cd9f7428fa5d47))

# [3.127.0](https://github.com/liferay/clay/compare/v3.126.0...v3.127.0) (2025-01-23)

**Note:** Version bump only for package @clayui/autocomplete

# [3.125.0](https://github.com/liferay/clay/compare/v3.124.0...v3.125.0) (2025-01-13)

**Note:** Version bump only for package @clayui/autocomplete

# [3.124.0](https://github.com/liferay/clay/compare/v3.123.1...v3.124.0) (2024-12-18)

**Note:** Version bump only for package @clayui/autocomplete

## [3.123.1](https://github.com/liferay/clay/compare/v3.123.0...v3.123.1) (2024-11-27)

**Note:** Version bump only for package @clayui/autocomplete

# [3.123.0](https://github.com/liferay/clay/compare/v3.122.0...v3.123.0) (2024-11-21)

**Note:** Version bump only for package @clayui/autocomplete

# [3.122.0](https://github.com/liferay/clay/compare/v3.121.0...v3.122.0) (2024-11-13)

**Note:** Version bump only for package @clayui/autocomplete

# [3.121.0](https://github.com/liferay/clay/compare/v3.120.0...v3.121.0) (2024-10-17)

**Note:** Version bump only for package @clayui/autocomplete

# [3.120.0](https://github.com/liferay/clay/compare/v3.119.1...v3.120.0) (2024-09-13)

**Note:** Version bump only for package @clayui/autocomplete

# [3.119.0](https://github.com/liferay/clay/compare/v3.118.0...v3.119.0) (2024-08-30)

**Note:** Version bump only for package @clayui/autocomplete

# [3.118.0](https://github.com/liferay/clay/compare/v3.117.0...v3.118.0) (2024-08-13)

**Note:** Version bump only for package @clayui/autocomplete

# [3.117.0](https://github.com/liferay/clay/compare/v3.116.1...v3.117.0) (2024-07-30)

**Note:** Version bump only for package @clayui/autocomplete

## [3.116.1](https://github.com/liferay/clay/compare/v3.116.0...v3.116.1) (2024-06-27)

**Note:** Version bump only for package @clayui/autocomplete

# [3.116.0](https://github.com/liferay/clay/compare/v3.115.2...v3.116.0) (2024-06-10)

**Note:** Version bump only for package @clayui/autocomplete

## [3.115.1](https://github.com/liferay/clay/compare/v3.115.0...v3.115.1) (2024-05-21)

**Note:** Version bump only for package @clayui/autocomplete

# [3.115.0](https://github.com/liferay/clay/compare/v3.114.0...v3.115.0) (2024-05-16)

**Note:** Version bump only for package @clayui/autocomplete

# [3.114.0](https://github.com/liferay/clay/compare/v3.113.0...v3.114.0) (2024-04-22)

### Bug Fixes

-   **clay-autocomplete:** Remove autocomplete async filter paginated example ([6366d29](https://github.com/liferay/clay/commit/6366d296e17be2f8aac6474951cc1728a208eca5))

# [3.113.0](https://github.com/liferay/clay/compare/v3.112.0...v3.113.0) (2024-03-28)

**Note:** Version bump only for package @clayui/autocomplete

# [3.112.0](https://github.com/liferay/clay/compare/v3.111.1...v3.112.0) (2024-03-11)

### Features

-   **@clayui/autocomplete:** update component highlight ([b6fd6a9](https://github.com/liferay/clay/commit/b6fd6a969099a5c89bc48bfa06b2ec1ccf1a28cc))

# [3.111.0](https://github.com/liferay/clay/compare/v3.110.0...v3.111.0) (2024-02-15)

**Note:** Version bump only for package @clayui/autocomplete

# [3.109.0](https://github.com/liferay/clay/compare/v3.108.0...v3.109.0) (2024-01-22)

**Note:** Version bump only for package @clayui/autocomplete

# [3.108.0](https://github.com/liferay/clay/compare/v3.107.1...v3.108.0) (2023-12-12)

**Note:** Version bump only for package @clayui/autocomplete

## [3.107.1](https://github.com/liferay/clay/compare/v3.107.0...v3.107.1) (2023-11-27)

**Note:** Version bump only for package @clayui/autocomplete

# [3.107.0](https://github.com/liferay/clay/compare/v3.106.1...v3.107.0) (2023-11-27)

**Note:** Version bump only for package @clayui/autocomplete

## [3.106.1](https://github.com/liferay/clay/compare/v3.106.0...v3.106.1) (2023-10-26)

**Note:** Version bump only for package @clayui/autocomplete

# [3.106.0](https://github.com/liferay/clay/compare/v3.105.0...v3.106.0) (2023-10-25)

### Bug Fixes

-   remove 'src' dir from being packaged with npm ([9383e8d](https://github.com/liferay/clay/commit/9383e8d8abb25ca3396e7c6e4dfa53bbc72691c5))
-   use package's directory for baseDir when generating type ([0a5c710](https://github.com/liferay/clay/commit/0a5c710092f36243bc8d5487f70e831295715072))

# [3.105.0](https://github.com/liferay/clay/compare/v3.104.0...v3.105.0) (2023-09-15)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when navigating via keyboard with the mouse over the item ([f13e062](https://github.com/liferay/clay/commit/f13e062033445f70df32bdf31d068646215c9a78))

# [3.104.0](https://github.com/liferay/clay/compare/v3.103.1...v3.104.0) (2023-08-25)

**Note:** Version bump only for package @clayui/autocomplete

## [3.103.1](https://github.com/liferay/clay/compare/v3.103.0...v3.103.1) (2023-08-15)

**Note:** Version bump only for package @clayui/autocomplete

## [3.101.1](https://github.com/liferay/clay/compare/v3.101.0...v3.101.1) (2023-07-28)

### Bug Fixes

-   **@clayui/autocomplete:** does not revalidate the value if it is reset by the controlled state ([73ec258](https://github.com/liferay/clay/commit/73ec258196572004430780bc4330137437e36377))
-   **@clayui/autocomplete:** improves value matching behavior with suggestion list when state is controlled ([5f33f5c](https://github.com/liferay/clay/commit/5f33f5c42a4dc2cef85de01743baebe2d6d1f829))

# [3.101.0](https://github.com/liferay/clay/compare/v3.100.0...v3.101.0) (2023-07-28)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when not validating value with items ([ab4421e](https://github.com/liferay/clay/commit/ab4421ede3b8b97084e694e3500b07f4ff1957f1))

### Features

-   **@clayui/autocomplete:** adds new API to allow custom value ([516de02](https://github.com/liferay/clay/commit/516de02e9cd2d8dbbecc60d7fc79935e377decf1))

# [3.100.0](https://github.com/liferay/clay/compare/v3.99.4...v3.100.0) (2023-07-13)

**Note:** Version bump only for package @clayui/autocomplete

## [3.99.4](https://github.com/liferay/clay/compare/v3.99.3...v3.99.4) (2023-07-10)

### Bug Fixes

-   **@clayui/multi-select:** fix loading indicator markup in MultiSelect ([b883824](https://github.com/liferay/clay/commit/b8838247d1638524691fda2a74934e0676e6597d))

## [3.99.2](https://github.com/liferay/clay/compare/v3.99.1...v3.99.2) (2023-07-05)

### Bug Fixes

-   **@clayui/autocomplete:** makes new `messages` properties optional ([94eceb6](https://github.com/liferay/clay/commit/94eceb6261334272d0b3a000052a7a9592505284))

## [3.99.1](https://github.com/liferay/clay/compare/v3.99.0...v3.99.1) (2023-07-04)

### Bug Fixes

-   **@clayui/autocomplete:** adds warning when `filterKey` is not defined and tries to filter an option that is object ([48dd887](https://github.com/liferay/clay/commit/48dd887b7fb6afbade67a98e6d325d1068ddc6b7))
-   **@clayui/autocomplete:** fixes type inference for properties and generic type ([cfc4309](https://github.com/liferay/clay/commit/cfc4309313b46bea777ddae3f9d810ae032b2a3c))

# [3.99.0](https://github.com/liferay/clay/compare/v3.98.0...v3.99.0) (2023-06-28)

### Bug Fixes

-   **@clayui/autocomplete:** fix bug not announcing available options when autocomplete is open ([1dc9581](https://github.com/liferay/clay/commit/1dc9581bd2e96b7cdf250bf02c4858c5df4eb833))
-   **@clayui/autocomplete:** fixes suppressing the `+` from the value when filtering the list ([1ba8356](https://github.com/liferay/clay/commit/1ba8356fce973dce24a63b5154e9ae9370c43562))

# [3.98.0](https://github.com/liferay/clay/compare/v3.97.2...v3.98.0) (2023-06-20)

**Note:** Version bump only for package @clayui/autocomplete

## [3.97.2](https://github.com/liferay/clay/compare/v3.97.1...v3.97.2) (2023-06-16)

### Bug Fixes

-   **@clayui/autocomplete:** fix error keeping menu open after selecting option with `menuTrigger="focus"` ([5f305f7](https://github.com/liferay/clay/commit/5f305f7962677c5e0c2b1b7a366f507755fc9947))
-   **@clayui/autocomplete:** fixes error when losing reference to nodes at each rerender ([a28aa05](https://github.com/liferay/clay/commit/a28aa050ab3dbe8d337518361289f4a4fbc87cac))
-   **@clayui/autocomplete:** fixes error when not resetting visual focus when menu is closed by custom logic ([b45c87e](https://github.com/liferay/clay/commit/b45c87e15456639def329731a0fc0a038df87906))

## [3.97.1](https://github.com/liferay/clay/compare/v3.97.0...v3.97.1) (2023-06-14)

**Note:** Version bump only for package @clayui/autocomplete

# [3.97.0](https://github.com/liferay/clay/compare/v3.96.1...v3.97.0) (2023-06-13)

### Bug Fixes

-   **@clayui/autocomplete:** removes unnecessary use of the `dropdown-menu-indicator-start` CSS class ([ce09cd8](https://github.com/liferay/clay/commit/ce09cd814bf547e3437a45956f315a0588c52114))
-   **@clayui/multi-select:** explicitly add the `active` API in the component's typing ([e956828](https://github.com/liferay/clay/commit/e95682814d3ec7ab45e65e41bba291a2da023e74))

## [3.96.1](https://github.com/liferay/clay/compare/v3.96.0...v3.96.1) (2023-05-31)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when rendering two collections ([03473be](https://github.com/liferay/clay/commit/03473be98f22d52613b741528cbebec64073b771))

# [3.96.0](https://github.com/liferay/clay/compare/v3.95.2...v3.96.0) (2023-05-29)

### Bug Fixes

-   **@clayui/autocomplete:** don't open menu if items is null ([300fb73](https://github.com/liferay/clay/commit/300fb73452613c588d613e8d9cc687faaab99b68))

### Features

-   **@clayui/autocomplete:** adds new API to customize input ([b6a213b](https://github.com/liferay/clay/commit/b6a213b325e82d2472977463e76762252a519fe6))

## [3.95.2](https://github.com/liferay/clay/compare/v3.95.0...v3.95.2) (2023-05-17)

**Note:** Version bump only for package @clayui/autocomplete

# [3.95.0](https://github.com/liferay/clay/compare/v3.94.0...v3.95.0) (2023-05-15)

**Note:** Version bump only for package @clayui/autocomplete

# [3.94.0](https://github.com/liferay/clay/compare/v3.93.0...v3.94.0) (2023-05-03)

### Features

-   **@clayui/autocomplete:** add list virtualization for dynamic content ([9710fd7](https://github.com/liferay/clay/commit/9710fd7693f9ba14d1b2b617fc12e15f71a311e3))
-   **@clayui/autocomplete:** refactors autocomplete implementation with accessibility improvements ([1dc82e6](https://github.com/liferay/clay/commit/1dc82e63b0d51e6cc3bf2cb1c7d08f4e698e6ba1))
-   **@clayui/core:** add infinite scroll to autocomplete ([d3358b4](https://github.com/liferay/clay/commit/d3358b47f8ff872f941e4eba64abd219189110c9))

# [3.93.0](https://github.com/liferay/clay/compare/v3.92.0...v3.93.0) (2023-04-19)

**Note:** Version bump only for package @clayui/autocomplete

# [3.92.0](https://github.com/liferay/clay/compare/v3.91.0...v3.92.0) (2023-04-06)

**Note:** Version bump only for package @clayui/autocomplete

# [3.91.0](https://github.com/liferay/clay/compare/v3.90.0...v3.91.0) (2023-03-24)

**Note:** Version bump only for package @clayui/autocomplete

# [3.90.0](https://github.com/liferay/clay/compare/v3.89.0...v3.90.0) (2023-03-15)

**Note:** Version bump only for package @clayui/autocomplete

# [3.89.0](https://github.com/liferay/clay/compare/v3.88.0...v3.89.0) (2023-03-01)

**Note:** Version bump only for package @clayui/autocomplete

# [3.88.0](https://github.com/liferay/clay/compare/v3.87.2...v3.88.0) (2023-02-14)

**Note:** Version bump only for package @clayui/autocomplete

# [3.87.0](https://github.com/liferay/clay/compare/v3.86.1...v3.87.0) (2023-02-08)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when filtering autocomplete with regex special character ([079e4f7](https://github.com/liferay/clay/commit/079e4f7985a50a54dfbda36e1460204a0562a922))

## [3.86.1](https://github.com/liferay/clay/compare/v3.86.0...v3.86.1) (2023-02-02)

**Note:** Version bump only for package @clayui/autocomplete

# [3.86.0](https://github.com/liferay/clay/compare/v3.85.0...v3.86.0) (2023-01-31)

**Note:** Version bump only for package @clayui/autocomplete

# [3.85.0](https://github.com/liferay/clay/compare/v3.84.0...v3.85.0) (2023-01-23)

**Note:** Version bump only for package @clayui/autocomplete

# [3.84.0](https://github.com/liferay/clay/compare/v3.83.1...v3.84.0) (2022-12-23)

**Note:** Version bump only for package @clayui/autocomplete

## [3.83.1](https://github.com/liferay/clay/compare/v3.83.0...v3.83.1) (2022-12-20)

**Note:** Version bump only for package @clayui/autocomplete

# [3.83.0](https://github.com/liferay/clay/compare/v3.82.0...v3.83.0) (2022-12-20)

**Note:** Version bump only for package @clayui/autocomplete

# [3.82.0](https://github.com/liferay/clay/compare/v3.81.0...v3.82.0) (2022-12-07)

### Features

-   removes duplication of implementation of accessibility features for menu using Overlay component ([9d60eb9](https://github.com/liferay/clay/commit/9d60eb9670cb5dc9fc18e02e3a97f139f1db4cfd))

# [3.81.0](https://github.com/liferay/clay/compare/v3.80.1...v3.81.0) (2022-11-30)

**Note:** Version bump only for package @clayui/autocomplete

## [3.80.1](https://github.com/liferay/clay/compare/v3.80.0...v3.80.1) (2022-11-22)

**Note:** Version bump only for package @clayui/autocomplete

# [3.80.0](https://github.com/liferay/clay/compare/v3.79.0...v3.80.0) (2022-11-21)

**Note:** Version bump only for package @clayui/autocomplete

# [3.79.0](https://github.com/liferay/clay/compare/v3.78.2...v3.79.0) (2022-11-08)

**Note:** Version bump only for package @clayui/autocomplete

## [3.78.2](https://github.com/liferay/clay/compare/v3.78.1...v3.78.2) (2022-10-25)

**Note:** Version bump only for package @clayui/autocomplete

## [3.78.1](https://github.com/liferay/clay/compare/v3.78.0...v3.78.1) (2022-10-25)

**Note:** Version bump only for package @clayui/autocomplete

# [3.78.0](https://github.com/liferay/clay/compare/v3.77.0...v3.78.0) (2022-10-25)

**Note:** Version bump only for package @clayui/autocomplete

# [3.77.0](https://github.com/liferay/clay/compare/v3.76.0...v3.77.0) (2022-10-17)

### Features

-   **@clayui/autocomplete:** add the Collection pattern and loading state ([ab44b4a](https://github.com/liferay/clay/commit/ab44b4affed2202020d3b8b75124e423e9668f7e))
-   **@clayui/autocomplete:** adds support for paginated data integrated with the `useResource` hook ([cfb35c1](https://github.com/liferay/clay/commit/cfb35c17f311e75c6aee06250953abfdfd422bc3))

## [3.75.3](https://github.com/liferay/clay/compare/v3.75.2...v3.75.3) (2022-09-29)

### Bug Fixes

-   **@clayui/autocomplete:** changes the way to identify the new behavior ([037b17c](https://github.com/liferay/clay/commit/037b17c8debd56420f9af873203ddb2847067f7a))

## [3.75.2](https://github.com/liferay/clay/compare/v3.75.1...v3.75.2) (2022-09-29)

### Bug Fixes

-   **@clayui/autocomplete:** fix of switching the owner of otherProps on Autocomplete ([d5ced5e](https://github.com/liferay/clay/commit/d5ced5e6d85266e25f7955249fedf904fb46de66))

# [3.75.0](https://github.com/liferay/clay/compare/v3.74.0...v3.75.0) (2022-09-28)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when moving focus when pressing alt + arrowdown ([b260984](https://github.com/liferay/clay/commit/b260984484f25617d2f3010ce5b8211e2075ff0f))

### Features

-   **@clayui/autocomplete:** adds accessibility to new autocomplete behavior ([f2ad617](https://github.com/liferay/clay/commit/f2ad617f8f19ad15630f8fd7afd83a126a241e4c))
-   **@clayui/autocomplete:** adds new less verbose composition with more OOTB features ([37e9e89](https://github.com/liferay/clay/commit/37e9e8977fa3b741b0619ba41607beaa97d0d976))
-   **@clayui/autocomplete:** deprecated the `onSetActive` API and replaced it with `onActiveChange` ([9ad5bcb](https://github.com/liferay/clay/commit/9ad5bcb72f057909bdac83789bb4e96a2dd28aff))

# [3.74.0](https://github.com/liferay/clay/compare/v3.73.0...v3.74.0) (2022-09-19)

**Note:** Version bump only for package @clayui/autocomplete

# [3.73.0](https://github.com/liferay/clay/compare/v3.72.0...v3.73.0) (2022-09-13)

**Note:** Version bump only for package @clayui/autocomplete

# [3.72.0](https://github.com/liferay/clay/compare/v3.71.0...v3.72.0) (2022-09-05)

**Note:** Version bump only for package @clayui/autocomplete

# [3.71.0](https://github.com/liferay/clay/compare/v3.70.3...v3.71.0) (2022-08-30)

**Note:** Version bump only for package @clayui/autocomplete

## [3.70.3](https://github.com/liferay/clay/compare/v3.70.2...v3.70.3) (2022-08-30)

**Note:** Version bump only for package @clayui/autocomplete

## [3.70.2](https://github.com/liferay/clay/compare/v3.70.1...v3.70.2) (2022-08-30)

**Note:** Version bump only for package @clayui/autocomplete

# [3.70.0](https://github.com/liferay/clay/compare/v3.69.0...v3.70.0) (2022-08-23)

**Note:** Version bump only for package @clayui/autocomplete

# [3.69.0](https://github.com/liferay/clay/compare/v3.68.0...v3.69.0) (2022-08-16)

**Note:** Version bump only for package @clayui/autocomplete

# [3.68.0](https://github.com/liferay/clay/compare/v3.67.0...v3.68.0) (2022-08-01)

**Note:** Version bump only for package @clayui/autocomplete

# [3.67.0](https://github.com/liferay/clay/compare/v3.66.0...v3.67.0) (2022-07-25)

**Note:** Version bump only for package @clayui/autocomplete

# [3.66.0](https://github.com/liferay/clay/compare/v3.65.2...v3.66.0) (2022-07-20)

**Note:** Version bump only for package @clayui/autocomplete

## [3.65.2](https://github.com/liferay/clay/compare/v3.65.1...v3.65.2) (2022-07-19)

### Bug Fixes

-   **@clayui/autocomplete:** fix error of `alignment By Viewport` not positioning properly ([4ea771b](https://github.com/liferay/clay/commit/4ea771b2726a0ba469edca4d0e7548cbeb74d01e))

## [3.65.1](https://github.com/liferay/clay/compare/v3.65.0...v3.65.1) (2022-07-11)

**Note:** Version bump only for package @clayui/autocomplete

# [3.65.0](https://github.com/liferay/clay/compare/v3.64.0...v3.65.0) (2022-07-11)

**Note:** Version bump only for package @clayui/autocomplete

# [3.64.0](https://github.com/liferay/clay/compare/v3.63.0...v3.64.0) (2022-07-04)

**Note:** Version bump only for package @clayui/autocomplete

# [3.62.0](https://github.com/liferay/clay/compare/v3.61.0...v3.62.0) (2022-06-20)

### Features

-   **@clayui/autocomplete:** Support menu alignment by Viewport ([1409c4b](https://github.com/liferay/clay/commit/1409c4b8d22073e642e12f951ebdcb76c9474669))

# [3.60.0](https://github.com/liferay/clay/compare/v3.59.0...v3.60.0) (2022-06-06)

**Note:** Version bump only for package @clayui/autocomplete

# [3.58.0](https://github.com/liferay/clay/compare/v3.57.0...v3.58.0) (2022-05-23)

**Note:** Version bump only for package @clayui/autocomplete

# [3.56.0](https://github.com/liferay/clay/compare/v3.55.0...v3.56.0) (2022-05-09)

**Note:** Version bump only for package @clayui/autocomplete

# [3.55.0](https://github.com/liferay/clay/compare/v3.54.0...v3.55.0) (2022-05-02)

**Note:** Version bump only for package @clayui/autocomplete

# [3.52.0](https://github.com/liferay/clay/compare/v3.51.0...v3.52.0) (2022-04-04)

**Note:** Version bump only for package @clayui/autocomplete

# [3.49.0](https://github.com/liferay/clay/compare/v3.48.0...v3.49.0) (2022-03-15)

**Note:** Version bump only for package @clayui/autocomplete

# [3.48.0](https://github.com/liferay/clay/compare/v3.47.0...v3.48.0) (2022-03-07)

**Note:** Version bump only for package @clayui/autocomplete

# [3.47.0](https://github.com/liferay/clay/compare/v3.46.0...v3.47.0) (2022-02-23)

**Note:** Version bump only for package @clayui/autocomplete

# [3.45.0](https://github.com/liferay/clay/compare/v3.44.2...v3.45.0) (2022-02-01)

**Note:** Version bump only for package @clayui/autocomplete

# [3.43.0](https://github.com/liferay/clay/compare/v3.42.0...v3.43.0) (2021-12-29)

**Note:** Version bump only for package @clayui/autocomplete

# [3.42.0](https://github.com/liferay/clay/compare/v3.41.0...v3.42.0) (2021-12-15)

**Note:** Version bump only for package @clayui/autocomplete

# [3.41.0](https://github.com/liferay/clay/compare/v3.40.1...v3.41.0) (2021-12-02)

**Note:** Version bump only for package @clayui/autocomplete

# [3.40.0](https://github.com/liferay/clay/compare/v3.39.0...v3.40.0) (2021-11-17)

**Note:** Version bump only for package @clayui/autocomplete

# [3.39.0](https://github.com/liferay/clay/compare/v3.38.0...v3.39.0) (2021-10-29)

**Note:** Version bump only for package @clayui/autocomplete

# [3.38.0](https://github.com/liferay/clay/compare/v3.37.0...v3.38.0) (2021-10-22)

**Note:** Version bump only for package @clayui/autocomplete

# [3.37.0](https://github.com/liferay/clay/compare/v3.36.0...v3.37.0) (2021-10-06)

**Note:** Version bump only for package @clayui/autocomplete

# [3.36.0](https://github.com/liferay/clay/compare/v3.35.3...v3.36.0) (2021-09-23)

### Features

-   **@clayui/autocomplete:** adds `closeOnClickOutside` API support to DropDown ([ece1061](https://github.com/liferay/clay/commit/ece1061))

## [3.35.3](https://github.com/liferay/clay/compare/v3.35.2...v3.35.3) (2021-09-09)

**Note:** Version bump only for package @clayui/autocomplete

## [3.35.2](https://github.com/liferay/clay/compare/v3.35.1...v3.35.2) (2021-08-30)

**Note:** Version bump only for package @clayui/autocomplete

## [3.35.1](https://github.com/liferay/clay/compare/v3.35.0...v3.35.1) (2021-08-30)

**Note:** Version bump only for package @clayui/autocomplete

# [3.35.0](https://github.com/liferay/clay/compare/v3.34.0...v3.35.0) (2021-08-30)

**Note:** Version bump only for package @clayui/autocomplete

# [3.32.0](https://github.com/liferay/clay/compare/v3.31.0...v3.32.0) (2021-07-28)

### Bug Fixes

-   **@clayui/autocomplete:** fixes a potential XSS vulnerability in autocomplete by removing the use of `dangerouslySetInnerHTML` ([675910c](https://github.com/liferay/clay/commit/675910c))

# [3.30.0](https://github.com/liferay/clay/compare/v3.29.0...v3.30.0) (2021-06-16)

**Note:** Version bump only for package @clayui/autocomplete

# [3.29.0](https://github.com/liferay/clay/compare/v3.28.0...v3.29.0) (2021-05-28)

**Note:** Version bump only for package @clayui/autocomplete

# [3.28.0](https://github.com/liferay/clay/compare/v3.27.0...v3.28.0) (2021-05-19)

**Note:** Version bump only for package @clayui/autocomplete

# [3.27.0](https://github.com/liferay/clay/compare/v3.26.0...v3.27.0) (2021-05-05)

**Note:** Version bump only for package @clayui/autocomplete

## [3.25.1](https://github.com/liferay/clay/compare/v3.25.0...v3.25.1) (2021-03-05)

**Note:** Version bump only for package @clayui/autocomplete

# [3.25.0](https://github.com/liferay/clay/compare/v3.24.1...v3.25.0) (2021-02-23)

**Note:** Version bump only for package @clayui/autocomplete

## [3.2.6](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.2.5...@clayui/autocomplete@3.2.6) (2021-02-11)

**Note:** Version bump only for package @clayui/autocomplete

## [3.2.5](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.2.4...@clayui/autocomplete@3.2.5) (2021-01-27)

**Note:** Version bump only for package @clayui/autocomplete

## [3.2.4](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.2.3...@clayui/autocomplete@3.2.4) (2021-01-13)

**Note:** Version bump only for package @clayui/autocomplete

## [3.2.3](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.2.2...@clayui/autocomplete@3.2.3) (2020-12-29)

**Note:** Version bump only for package @clayui/autocomplete

## [3.2.2](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.2.0...@clayui/autocomplete@3.2.2) (2020-12-16)

**Note:** Version bump only for package @clayui/autocomplete

## [3.2.1](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.2.0...@clayui/autocomplete@3.2.1) (2020-12-02)

**Note:** Version bump only for package @clayui/autocomplete

# [3.2.0](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.1.12...@clayui/autocomplete@3.2.0) (2020-10-01)

### Features

-   **clayui.com:** Move API tables to new files and update document tabs, rename files to use singular naming instead of plural, change mainTabURL of pagination-bar to a proper one ([d812ee9](https://github.com/liferay/clay/commit/d812ee9))
-   add displayName for all components ([cc3211d](https://github.com/liferay/clay/commit/cc3211d))

## [3.1.12](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.1.11...@clayui/autocomplete@3.1.12) (2020-08-28)

**Note:** Version bump only for package @clayui/autocomplete

## [3.1.11](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.1.10...@clayui/autocomplete@3.1.11) (2020-08-26)

**Note:** Version bump only for package @clayui/autocomplete

## [3.1.10](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.1.9...@clayui/autocomplete@3.1.10) (2020-08-21)

**Note:** Version bump only for package @clayui/autocomplete

## [3.1.9](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.1.8...@clayui/autocomplete@3.1.9) (2020-08-11)

**Note:** Version bump only for package @clayui/autocomplete

## [3.1.8](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.1.7...@clayui/autocomplete@3.1.8) (2020-07-28)

**Note:** Version bump only for package @clayui/autocomplete

## [3.1.7](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.1.6...@clayui/autocomplete@3.1.7) (2020-07-14)

**Note:** Version bump only for package @clayui/autocomplete

## [3.1.6](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.1.5...@clayui/autocomplete@3.1.6) (2020-07-07)

**Note:** Version bump only for package @clayui/autocomplete

## [3.1.5](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.1.4...@clayui/autocomplete@3.1.5) (2020-06-18)

**Note:** Version bump only for package @clayui/autocomplete

## [3.1.4](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.1.3...@clayui/autocomplete@3.1.4) (2020-05-21)

**Note:** Version bump only for package @clayui/autocomplete

## [3.1.3](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.1.2...@clayui/autocomplete@3.1.3) (2020-04-24)

**Note:** Version bump only for package @clayui/autocomplete

## [3.1.2](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/compare/@clayui/autocomplete@3.1.1...@clayui/autocomplete@3.1.2) (2020-03-26)

### Bug Fixes

-   **@clayui/autocomplete:** Adds missing `aria-label` attr on Autocomplete stories ([b56a68a](https://github.com/liferay/clay/commit/b56a68a))

## [3.1.1](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/compare/@clayui/autocomplete@3.1.0...@clayui/autocomplete@3.1.1) (2020-03-12)

**Note:** Version bump only for package @clayui/autocomplete

# 3.1.0 (2020-02-28)

### Bug Fixes

-   add displayName to context for dev tools ([82e1e8c](https://github.com/liferay/clay/commit/82e1e8c))
-   bump all components to alpha.1 ([afabdec](https://github.com/liferay/clay/commit/afabdec))
-   normalize names of components ([3a0abea](https://github.com/liferay/clay/commit/3a0abea))
-   **@clayui/autocomplete:** adds React.forwardRef to Autocomplete for FocusScope to have reference from element ([0bbde5a](https://github.com/liferay/clay/commit/0bbde5a))
-   **@clayui/autocomplete:** use FocusScope component ([5e481d4](https://github.com/liferay/clay/commit/5e481d4))
-   ref callbacks are first calling with null. https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs ([fec52cb](https://github.com/liferay/clay/commit/fec52cb))
-   update components to include 'types' and 'ts:main' package keys ([9e24b59](https://github.com/liferay/clay/commit/9e24b59))
-   **@clayui/button:** fix error when using private name when generating declaration files ([e8d8027](https://github.com/liferay/clay/commit/e8d8027)), closes [/github.com/Microsoft/TypeScript/issues/6307#issuecomment-360182089](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/issues/issuecomment-360182089)

### Features

-   **Autocomplete:** Create ClayAutocomplete component ([6752c6d](https://github.com/liferay/clay/commit/6752c6d))
-   **clay-form:** create high-level InputWithAutocomplete component ([692610a](https://github.com/liferay/clay/commit/692610a))
-   **clay-shared:** add keyboard hooks for lists and add demo under autocomplete ([3622453](https://github.com/liferay/clay/commit/3622453))
-   **ClayAutocomplete.Item:** add Item component to match values inserted in the input element ([372594c](https://github.com/liferay/clay/commit/372594c))
-   update react-testing-library to be @testing-library/react ([bd78145](https://github.com/liferay/clay/commit/bd78145))
-   **form:** add helper components for markup ([3ce63d4](https://github.com/liferay/clay/commit/3ce63d4))

## [3.0.7](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/compare/@clayui/autocomplete@3.0.6...@clayui/autocomplete@3.0.7) (2020-02-13)

**Note:** Version bump only for package @clayui/autocomplete

## [3.0.6](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/compare/@clayui/autocomplete@3.0.3...@clayui/autocomplete@3.0.6) (2020-01-31)

### Bug Fixes

-   **@clayui/button:** fix error when using private name when generating declaration files ([e8d8027](https://github.com/liferay/clay/commit/e8d8027)), closes [/github.com/Microsoft/TypeScript/issues/6307#issuecomment-360182089](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/issues/issuecomment-360182089)

## [3.0.5](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/compare/@clayui/autocomplete@3.0.3...@clayui/autocomplete@3.0.5) (2020-01-20)

### Bug Fixes

-   **@clayui/button:** fix error when using private name when generating declaration files ([e8d8027](https://github.com/liferay/clay/commit/e8d8027)), closes [/github.com/Microsoft/TypeScript/issues/6307#issuecomment-360182089](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/issues/issuecomment-360182089)

## [3.0.4](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/compare/@clayui/autocomplete@3.0.3...@clayui/autocomplete@3.0.4) (2019-12-05)

### Bug Fixes

-   **@clayui/button:** fix error when using private name when generating declaration files ([e8d8027](https://github.com/liferay/clay/commit/e8d8027)), closes [/github.com/Microsoft/TypeScript/issues/6307#issuecomment-360182089](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/issues/issuecomment-360182089)

## [3.0.3](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/compare/@clayui/autocomplete@3.0.2...@clayui/autocomplete@3.0.3) (2019-11-07)

**Note:** Version bump only for package @clayui/autocomplete

## [3.0.2](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/compare/@clayui/autocomplete@3.0.1...@clayui/autocomplete@3.0.2) (2019-11-01)

**Note:** Version bump only for package @clayui/autocomplete

## [3.0.1](https://github.com/liferay/clay/tree/master/packages/clay-autocomplete/compare/@clayui/autocomplete@3.0.0...@clayui/autocomplete@3.0.1) (2019-10-28)

### Bug Fixes

-   ref callbacks are first calling with null. https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs ([fec52cb](https://github.com/liferay/clay/commit/fec52cb))
