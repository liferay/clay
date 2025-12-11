# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.156.0](https://github.com/liferay/clay/compare/v3.155.0...v3.156.0) (2025-12-11)

**Note:** Version bump only for package @clayui/shared

# [3.151.0](https://github.com/liferay/clay/compare/v3.150.0...v3.151.0) (2025-10-22)

### Bug Fixes

-   **@clayui/shared:** LPD-63674 Fix InternalDispatch type definition ([35bbe11](https://github.com/liferay/clay/commit/35bbe118e0691f59db2c8613d545e28e6cda6667))

# [3.148.0](https://github.com/liferay/clay/compare/v3.147.0...v3.148.0) (2025-09-18)

### Bug Fixes

-   **@clayui/core:** LPD-64908 Fix typescript error ([e4e7c0b](https://github.com/liferay/clay/commit/e4e7c0bbaa4250a6ad7a19d1ba1371206fdab6e2))
-   **@clayui/core:** LPD-64908 Include focus scope markers when checking document focus targets ([e432b1e](https://github.com/liferay/clay/commit/e432b1e4c02dea408dc7266287e3e54ac74ccd77))
-   **@clayui/core:** LPD-64908 Include focus scope markers when checking fibers ([6c0d480](https://github.com/liferay/clay/commit/6c0d480ea0ea7c4d2a38a8db0961cb66ae8141a1))
-   **@clayui/core:** LPD-64908 Remove aria-hidden and tabIndex from other uses of scope focus markers ([42b5021](https://github.com/liferay/clay/commit/42b502138a9a057b30e35d2039003d1b82a11e94))
-   **@clayui/core:** LPD-64908 Rename variables to improve code clarity ([98100be](https://github.com/liferay/clay/commit/98100bea797885b221068a39680f5149f23902aa))
-   **@clayui/shared:** LPD-53842 Use relative import to avoid adding a dependency on itself. ([0c02a72](https://github.com/liferay/clay/commit/0c02a7223f82cadc0eef35d187f460ccde7dcb3e))

### Features

-   **@clayui/core:** LPD-53842 Set the correct mobile breakpoint ([180ed57](https://github.com/liferay/clay/commit/180ed57394322106b7bf8c1c27a562f1de980228))
-   **@clayui/core:** LPD-53842 Simplify the PanelResizer API and make it a controlled component so that we no longer need to pass it a ref. ([af1157d](https://github.com/liferay/clay/commit/af1157ddf2d9dd898676604eba944d520f0ba7da))
-   **@clayui/shared:** LPD-53842 Add test for PanelResizer ([d18050a](https://github.com/liferay/clay/commit/d18050a62703dd598623ad217bd513c7f7dcec1d))
-   **@clayui/shared:** LPD-53842 Isolate resizer component to reuse it ([18e64a0](https://github.com/liferay/clay/commit/18e64a0ed2f7d8967d754385200df01379ba1ed9))

# [3.145.0](https://github.com/liferay/clay/compare/v3.144.1...v3.145.0) (2025-08-29)

### Features

-   **@clayui/core:** LPD-60257 Move usePrevious to @clayui/shared ([29c90c1](https://github.com/liferay/clay/commit/29c90c166951224c353dee2c20337a482cc7aad8))

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

### Features

-   publish clay as both CJS and ESM ([32cb387](https://github.com/liferay/clay/commit/32cb3872e825d937d2807637efdee62ff7977d7c))

# [3.142.0](https://github.com/liferay/clay/compare/@clayui/shared@3.5.1...@clayui/shared@3.142.0) (2025-08-01)

## 3.141.1 (2025-07-18)

# 3.141.0 (2025-07-15)

# 3.140.0 (2025-06-19)

### Bug Fixes

-   **@clayui/shared:** Fix typescript issue with the autocomplete. ([46f6cd1](https://github.com/liferay/clay/commit/46f6cd133bb4aa3514b093663761d1a2957d32fd))

### Features

-   **@clayui/shared:** LPD-56059 Add getLocatorValue shared method to allow for accessing a value from an object using either a string key or a function that accepts an item and returns the value. ([776070e](https://github.com/liferay/clay/commit/776070eb8fed5e127e9d675127621b1c2f8ed623))

# 3.139.0 (2025-06-10)

### Bug Fixes

-   **@clayui/shared:** LPD-56545 FocusScope gets stuck on DatePicker Menu when it's nested inside a dropdown menu ([050b87e](https://github.com/liferay/clay/commit/050b87e88b40fca8bfd80aace258e8cdd8844d3d))
-   **@clayui/shared:** LPD-56545 Overlay fails to remove inert when an inert menu is opened from another menu ([27fc256](https://github.com/liferay/clay/commit/27fc256fbdab5d3b989fa3e5da4a574c65058379))

# 3.137.0 (2025-05-30)

# 3.136.0 (2025-05-03)

# 3.132.0 (2025-03-24)

### Bug Fixes

-   **@clayui/shared:** LPD-48347 Close overlay on left click only ([f19214a](https://github.com/liferay/clay/commit/f19214aab121d0190cfedea4dc94f20d8684df8e))

### Features

-   **@clayui/drop-down:** Add support for more item types for Drill Down and compatibility with the DropDownWithItems component ([a1d09e4](https://github.com/liferay/clay/commit/a1d09e4f92d28f95efe2be739d3f45d3ccbad58d))

# 3.128.0 (2025-02-20)

### Bug Fixes

-   **@clayui/shared:** Only run hide code if menus match in Overlay ([824e33c](https://github.com/liferay/clay/commit/824e33c3a896bab3d49820fcc48ca1e1b6ff3fdd))

# 3.119.0 (2024-08-30)

### Bug Fixes

-   **@clayui/drop-down:** fixes bug with chrome blocking element focus when clicking outside the menu ([9a99238](https://github.com/liferay/clay/commit/9a99238852f27fc50e3b75ca95a2db72dd79d3ed))
-   **@clayui/shared:** remove suppression from elements before focus ([c9a9e83](https://github.com/liferay/clay/commit/c9a9e83de3fc017569d7d2e6dfb0393c5f878351))
-   **@clayui/shared:** Removes suppression of focusable elements from focus trap ([2728431](https://github.com/liferay/clay/commit/27284318283fc4c720dbd8fb86365b731a5d79fd))

# 3.116.0 (2024-06-10)

# 3.115.0 (2024-05-16)

# 3.113.0 (2024-03-28)

# 3.111.0 (2024-02-15)

# 3.109.0 (2024-01-22)

### Bug Fixes

-   **@clayui/drop-down:** Fix Dropdown doesnt close when click outside ([f5beaf9](https://github.com/liferay/clay/commit/f5beaf9cf012a0a81c7a2bcc1a440c6143ba37bc))

### Features

-   **@clayui/shared:** adds support for closing the overlay when clicking outside the body ([0a720b1](https://github.com/liferay/clay/commit/0a720b11ffe1e4d3a5fa02762c5be780093b87e2))

# 3.107.0 (2023-11-27)

## 3.106.1 (2023-10-26)

# 3.106.0 (2023-10-25)

### Bug Fixes

-   remove 'src' dir from being packaged with npm ([9383e8d](https://github.com/liferay/clay/commit/9383e8d8abb25ca3396e7c6e4dfa53bbc72691c5))
-   use package's directory for baseDir when generating type ([0a5c710](https://github.com/liferay/clay/commit/0a5c710092f36243bc8d5487f70e831295715072))

### Features

-   **@clayui/core:** add hook to handle tree navigation ([1331f57](https://github.com/liferay/clay/commit/1331f578f438a565c2d762d71f342b0f8753d289))

# 3.104.0 (2023-08-25)

### Bug Fixes

-   **@clayui/core:** improves navigation for navigating up and down when opening a Menu ([f52c93d](https://github.com/liferay/clay/commit/f52c93d121eff8c210c7bc8ffdec6a8d27ca82eb))

### Features

-   **@clayui/core:** adds new experimental Menu component ([4560451](https://github.com/liferay/clay/commit/45604517f2e589af9a86d5a88660ebd13cf460ec))

## 3.103.1 (2023-08-15)

### Bug Fixes

-   **@clayui/drop-down:** adds throttle to handle contextual menu visibility ([7d51b7a](https://github.com/liferay/clay/commit/7d51b7aa96dcd86c9e8c70cd97dec5c7c9279b73))

# 3.101.0 (2023-07-28)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when not validating value with items ([ab4421e](https://github.com/liferay/clay/commit/ab4421ede3b8b97084e694e3500b07f4ff1957f1))

# 3.100.0 (2023-07-13)

# 3.96.0 (2023-05-29)

## 3.95.2 (2023-05-17)

### Bug Fixes

-   **@clayui/shared:** fix Picker menu positioning error ([54e6d49](https://github.com/liferay/clay/commit/54e6d49dc4ae6dc69111922c16c1a6f119bb7b5a))

# 3.95.0 (2023-05-15)

### Bug Fixes

-   **@clayui/shared:** fix error when not recalculating positioning for elements with parent with scroll ([16a4c77](https://github.com/liferay/clay/commit/16a4c77ea3be35cbf52c96449f237373fe163f36))

# 3.94.0 (2023-05-03)

### Bug Fixes

-   **@clayui/shared:** fix error when not moving initial scroll to virtualized list ([4b5051e](https://github.com/liferay/clay/commit/4b5051efc5e3a216740d124afee0c4dac06588e8))

### Features

-   **@clayui/shared:** add implementation of moving scroll with virtualization in `useNavigation` hook ([fd50e8c](https://github.com/liferay/clay/commit/fd50e8cf9bee61e8295e77956c1f12188e4ce3c5))
-   **@clayui/shared:** implements navigation integration with the collection API ([7291d6b](https://github.com/liferay/clay/commit/7291d6bc0f13ec079f1097b90584380d27d74f36))

# 3.93.0 (2023-04-19)

# 3.92.0 (2023-04-06)

# 3.89.0 (2023-03-01)

# 3.88.0 (2023-02-14)

# 3.87.0 (2023-02-08)

### Bug Fixes

-   **@clayui/shared:** prevent closing the modal when clicking outside an Overlay rendered in the modal ([d363535](https://github.com/liferay/clay/commit/d36353591e43dfe46841c48006298e8a3853fb21))

### Features

-   **@clayui/shared:** adds the possibility to have overlay stacked ([1a4d281](https://github.com/liferay/clay/commit/1a4d281ab9e0aed7275c9f9a27a9d2e014ed8ab6))

## 3.86.1 (2023-02-02)

# 3.86.0 (2023-01-31)

# 3.85.0 (2023-01-23)

### Bug Fixes

-   **@clayui/core:** fix Vertical Bar component error change behavior from controlled to uncontrolled ([54b329f](https://github.com/liferay/clay/commit/54b329f0a13be5b6d59ff91d3bca1a067497e071))

### Features

-   **@clayui/core:** add new property to add className to Picker menu ([2b6fafb](https://github.com/liferay/clay/commit/2b6fafbca6b96972c1d677490f871fefa36511ac))

## 3.83.1 (2022-12-20)

### Bug Fixes

-   **@clayui/core:** fixes error when fetching the id that contains only numbers ([5c82804](https://github.com/liferay/clay/commit/5c82804f3134b9be571ab5a52552fbee58388f9c))

# 3.83.0 (2022-12-20)

### Bug Fixes

-   **@clayui/shared:** add utility function to check typeahead and fix bugs not properly clearing timeout when closing menu ([88eaab4](https://github.com/liferay/clay/commit/88eaab4f40aa5302f6312fc6e14d40ed81a867a6))

### Features

-   **@clayui/shared:** add hook to identify if it's a mobile device ([65af0e6](https://github.com/liferay/clay/commit/65af0e62f960c927d1f054b336b8f4dfc41c0682))
-   **@clayui/shared:** adds `useHover` hook to normalize hover pointer interactions ([fc1f6c2](https://github.com/liferay/clay/commit/fc1f6c297cb3ce5df87017faa23c7b0e8509eda1))
-   **@clayui/shared:** adds configuration for visual navigation and event scheduling ([6b055ad](https://github.com/liferay/clay/commit/6b055ada959d7dfc9977a1ddcf69542b8a1e2c05))
-   **@clayui/shared:** implements moving the scroll in visual focus ([614c812](https://github.com/liferay/clay/commit/614c81223dec7d53626e8c0ce860cd88853e0123))

# 3.82.0 (2022-12-07)

### Bug Fixes

-   **@clayui/shared:** fix error when losing focus in DropDown ([7f7a903](https://github.com/liferay/clay/commit/7f7a9033259b458c6ae6d999c45f2d6e8df4b7df))
-   **@clayui/shared:** fix navigation when focus trap ([3ecb858](https://github.com/liferay/clay/commit/3ecb85881703ca4a7072d55556db1e4d526521c3))
-   fix bug when scrolling page when navigating via arrow keys ([45092ec](https://github.com/liferay/clay/commit/45092ec26bf6ce6adefc5e53ab3e0d69330662fb))

### Features

-   **@clayui/shared:** add component to handle overlay for Clay components ([a911038](https://github.com/liferay/clay/commit/a91103851fe6aab734bf94649990b1a1eb5b9e3d))
-   **@clayui/shared:** add hook to handle overlay positioning ([d7427eb](https://github.com/liferay/clay/commit/d7427ebb99e5c3901a548428ac285c4fa603dbd2))

# 3.81.0 (2022-11-30)

## 3.80.1 (2022-11-22)

### Bug Fixes

-   **@clayui/shared:** fixes error when stop typing in DropDown Search ([a6ea67b](https://github.com/liferay/clay/commit/a6ea67b5f5a0e251aa9cdfcdc6c22c1c1e8fb6e7))

# 3.80.0 (2022-11-21)

### Bug Fixes

-   **@clayui/drop-down:** fix keyboard navigation for context menu ([b44c7db](https://github.com/liferay/clay/commit/b44c7db37a53720860b832f12119d40f377a438b))

### Features

-   **@clayui/shared:** Add typeahead function to list ([ce1347f](https://github.com/liferay/clay/commit/ce1347fa8dcaa90d2d09e507c357ba834468b75b))

# 3.79.0 (2022-11-08)

### Bug Fixes

-   **@clayui/shared:** fix error when alternate is with old reference ([4ae7ffe](https://github.com/liferay/clay/commit/4ae7ffe444c34a54e0c513d76e26718339a495ea))
-   **@clayui/shared:** fixes error when trying to navigate by non-visible element using `useNavigation` hook ([2345873](https://github.com/liferay/clay/commit/2345873905150ccdd5ab48054a9affdb2890f2f8))
-   **@clayui/shared:** fixes flag to switch which fiber to use to find focusable elements ([a26fc70](https://github.com/liferay/clay/commit/a26fc70744b4c04fad28e66142401a6bead4b64f))

### Features

-   **@clayui/shared:** adds new hook to handle navigation using arrow keys ([87b13a6](https://github.com/liferay/clay/commit/87b13a6f57922f233fa738bcee87cd1a7e704eae))

## 3.78.2 (2022-10-25)

### Bug Fixes

-   **@clayui/shared:** fix error when moving focus when reference is null ([bcc05cf](https://github.com/liferay/clay/commit/bcc05cf5d24ff2b6b7ba4e776e753f4bc1af06c9))

## 3.78.1 (2022-10-25)

### Bug Fixes

-   **@clayui/shared:** fix error when fiberNode may come null ([7aa0445](https://github.com/liferay/clay/commit/7aa044572f93189195a40abd5450ca0cd5451305))

# 3.78.0 (2022-10-25)

### Bug Fixes

-   **@clayui/shared:** fix error of not finding focused elements when React.Portal is under a conditional ([179cd7a](https://github.com/liferay/clay/commit/179cd7a523ebc5a4c96fcb0194e5c8873da6c367))
-   **@clayui/shared:** fixes error when identifying non-visible element as focusable ([82cc0f8](https://github.com/liferay/clay/commit/82cc0f8078810b4610f220d09792ee53f9fb3da8))

### Features

-   **@clayui/shared:** add hook to detect user interaction type ([a20e236](https://github.com/liferay/clay/commit/a20e23638e28d27da18d8d140ebb38818595f129))

# 3.77.0 (2022-10-17)

## 3.75.2 (2022-09-29)

### Bug Fixes

-   **@clayui/shared:** fix bug of not doing forwardRef when `ref` is a function ([8601622](https://github.com/liferay/clay/commit/8601622a542ea5029dc96df17d6a6d1711cf8753))

# 3.75.0 (2022-09-28)

### Bug Fixes

-   **@clayui/shared:** fix bug of getting focused elements in document in menus ([5cce01c](https://github.com/liferay/clay/commit/5cce01c92c30fe1f7d5175208e13e5fdfbafc4ca))

# 3.73.0 (2022-09-13)

# 3.71.0 (2022-08-30)

## 3.70.3 (2022-08-30)

### Bug Fixes

-   **@clayui/shared:** fix error when checking a fiber element in progress in focus management ([b4484e0](https://github.com/liferay/clay/commit/b4484e03814740e25f95291ce79963d8b014fab8))

## 3.70.2 (2022-08-30)

# 3.70.0 (2022-08-23)

# 3.69.0 (2022-08-16)

### Features

-   **@clayui/drop-down:** improves accessibility for virtual cursor ([83bdcb8](https://github.com/liferay/clay/commit/83bdcb879100dfbc68f71c048ecd214471fff0bc))

# 3.67.0 (2022-07-25)

# 3.65.0 (2022-07-11)

# 3.58.0 (2022-05-23)

### Bug Fixes

-   **@clayui/core:** revalidate the state of intermediate for recursive multiple selection when the state is controlled ([172f849](https://github.com/liferay/clay/commit/172f849fcae41ce05e1c6254267f78f070966e85))

# 3.56.0 (2022-05-09)

# 3.55.0 (2022-05-02)

### Features

-   **@clayui/clay-shared:** Add more test cases to FocusScope ([c81a6c1](https://github.com/liferay/clay/commit/c81a6c16d49f7164648e0db589a37406a2b0e30a))
-   **@clayui/clay-shared:** Update ClayPortal test cases interacting with Dropdown ([1c0415a](https://github.com/liferay/clay/commit/1c0415aaad17b8e4057e0ef5d22e25017c47a265))

# 3.52.0 (2022-04-04)

### Bug Fixes

-   **@clayui/shared:** fix error when controlling focus in React 17.x ([76f5f0d](https://github.com/liferay/clay/commit/76f5f0d964231d8442c780b44f6a320b50b9948b))

# 3.49.0 (2022-03-15)

### Features

-   **@clayui/drop-down:** add new prop to align Menu in viewport ([1c4f19b](https://github.com/liferay/clay/commit/1c4f19b25c34f6ffb9c2c7b9a99732e2a82d5eb5))

# 3.47.0 (2022-02-23)

# 3.45.0 (2022-02-01)

### Bug Fixes

-   **@clayui/shared:** fix focus control collision when having FocusScope nested ([58bd27f](https://github.com/liferay/clay/commit/58bd27fc24d6754c9662b12332e01e2b209a9e84))

# 3.40.0 (2021-11-17)

### Bug Fixes

-   **@clayui/provider:** removes dependency from ClayModal to avoid circular dependency issues ([0b8eade](https://github.com/liferay/clay/commit/0b8eade03bc6a12284662cb5e42d7b1fdb87c20f))
-   **@clayui/shared:** fixes error when considering an element with negative tabIndex ([da143f0](https://github.com/liferay/clay/commit/da143f09b21c889a3f6586af0f1aa20bd944c60b))

# 3.39.0 (2021-10-29)

# 3.38.0 (2021-10-22)

# 3.37.0 (2021-10-06)

### Bug Fixes

-   **@clayui/shared:** fix error when controlling internal state using external value and internal controller ([d17eba5](https://github.com/liferay/clay/commit/d17eba5f5653a1d33c89e2a8f08899da613a9cd7))

# 3.36.0 (2021-09-23)

## 3.35.3 (2021-09-09)

## 3.35.2 (2021-08-30)

### Bug Fixes

-   **@clayui/shared:** fix error export type from root in package distribution ([121e3cc](https://github.com/liferay/clay/commit/121e3ccaa5c51619be6c6bbe71e478b9e67ddb76))

## 3.35.1 (2021-08-30)

### Bug Fixes

-   **@clayui/shared:** fixes error when importing the type that is not available in the module ([3108383](https://github.com/liferay/clay/commit/31083831cc1c52c9d53704e39f040171eaaaee05))

# 3.35.0 (2021-08-30)

# 3.34.0 (2021-08-25)

### Bug Fixes

-   **@clayui/shared:** fixes error when getting stuck in an input masked as hidden ([4c0c5cb](https://github.com/liferay/clay/commit/4c0c5cb21dc95b10adba21a4370af19e593d9034))

# 3.29.0 (2021-05-28)

### Features

-   **@clayui/shared:** Add MouseSafeArea to the contextual menu ([7824f16](https://github.com/liferay/clay/commit/7824f16e6565cde2822d991a14f8301b7153f2a3))

# 3.28.0 (2021-05-19)

### Features

-   **@clayui/drop-down:** Add the new ContainerProps API ([b106420](https://github.com/liferay/clay/commit/b10642036b7db6bdd78b1edd9ebddd3981e560f2))
-   **@clayui/shared:** add delegate event utility ([f46b6ef](https://github.com/liferay/clay/commit/f46b6efe8f967192b9e47be3715547f26543af24))
-   **@clayui/shared:** Allow to pass className and/or id to the portal root element ([132ab1e](https://github.com/liferay/clay/commit/132ab1e1251561d489af18212569b594de5ce0dc))
-   **@clayui/shared:** Extract to a function so the div is created with all its attributes ([b7445bc](https://github.com/liferay/clay/commit/b7445bcd6f16cdda39ef7bd0af58bda2d3b1949e))
-   **@clayui/shared:** simplify function ([d326ace](https://github.com/liferay/clay/commit/d326aced089fdbacccbe73eaba3e6f8c61c99227))

# 3.27.0 (2021-05-05)

### Bug Fixes

-   **@clayui/shared:** add unit test for FocusScope ([f84332f](https://github.com/liferay/clay/commit/f84332f3f7212a22a34f90962798b61257488b60))
-   **@clayui/shared:** update and simplify logic for focus management when focus moves in and out of the react tree ([e3a100f](https://github.com/liferay/clay/commit/e3a100fe028f9bb7796a493f4b758e2cdec32838))

### Features

-   **@clayui/multi-select:** add async functionality for source items ([548aa2d](https://github.com/liferay/clay/commit/548aa2d28c54434260f75ea27ee233942e963e79))

## [3.141.1](https://github.com/liferay/clay/compare/v3.141.0...v3.141.1) (2025-07-18)

**Note:** Version bump only for package @clayui/shared

# [3.141.0](https://github.com/liferay/clay/compare/v3.140.0...v3.141.0) (2025-07-15)

**Note:** Version bump only for package @clayui/shared

# [3.140.0](https://github.com/liferay/clay/compare/v3.139.1...v3.140.0) (2025-06-19)

### Bug Fixes

-   **@clayui/shared:** Fix typescript issue with the autocomplete. ([46f6cd1](https://github.com/liferay/clay/commit/46f6cd133bb4aa3514b093663761d1a2957d32fd))

### Features

-   **@clayui/shared:** LPD-56059 Add getLocatorValue shared method to allow for accessing a value from an object using either a string key or a function that accepts an item and returns the value. ([776070e](https://github.com/liferay/clay/commit/776070eb8fed5e127e9d675127621b1c2f8ed623))

# [3.139.0](https://github.com/liferay/clay/compare/v3.138.0...v3.139.0) (2025-06-10)

### Bug Fixes

-   **@clayui/shared:** LPD-56545 FocusScope gets stuck on DatePicker Menu when it's nested inside a dropdown menu ([050b87e](https://github.com/liferay/clay/commit/050b87e88b40fca8bfd80aace258e8cdd8844d3d))
-   **@clayui/shared:** LPD-56545 Overlay fails to remove inert when an inert menu is opened from another menu ([27fc256](https://github.com/liferay/clay/commit/27fc256fbdab5d3b989fa3e5da4a574c65058379))

# [3.137.0](https://github.com/liferay/clay/compare/v3.136.0...v3.137.0) (2025-05-30)

### Bug Fixes

-   **@clayui/shared:** LPD-48347 Close overlay on left click only ([f19214a](https://github.com/liferay/clay/commit/f19214aab121d0190cfedea4dc94f20d8684df8e))

# [3.136.0](https://github.com/liferay/clay/compare/v3.135.0...v3.136.0) (2025-05-03)

**Note:** Version bump only for package @clayui/shared

# [3.132.0](https://github.com/liferay/clay/compare/v3.131.0...v3.132.0) (2025-03-24)

### Features

-   **@clayui/drop-down:** Add support for more item types for Drill Down and compatibility with the DropDownWithItems component ([a1d09e4](https://github.com/liferay/clay/commit/a1d09e4f92d28f95efe2be739d3f45d3ccbad58d))

# [3.128.0](https://github.com/liferay/clay/compare/v3.127.0...v3.128.0) (2025-02-20)

### Bug Fixes

-   **@clayui/shared:** Only run hide code if menus match in Overlay ([824e33c](https://github.com/liferay/clay/commit/824e33c3a896bab3d49820fcc48ca1e1b6ff3fdd))

# [3.119.0](https://github.com/liferay/clay/compare/v3.118.0...v3.119.0) (2024-08-30)

### Bug Fixes

-   **@clayui/drop-down:** fixes bug with chrome blocking element focus when clicking outside the menu ([9a99238](https://github.com/liferay/clay/commit/9a99238852f27fc50e3b75ca95a2db72dd79d3ed))
-   **@clayui/shared:** remove suppression from elements before focus ([c9a9e83](https://github.com/liferay/clay/commit/c9a9e83de3fc017569d7d2e6dfb0393c5f878351))
-   **@clayui/shared:** Removes suppression of focusable elements from focus trap ([2728431](https://github.com/liferay/clay/commit/27284318283fc4c720dbd8fb86365b731a5d79fd))

# [3.116.0](https://github.com/liferay/clay/compare/v3.115.2...v3.116.0) (2024-06-10)

**Note:** Version bump only for package @clayui/shared

# [3.115.0](https://github.com/liferay/clay/compare/v3.114.0...v3.115.0) (2024-05-16)

**Note:** Version bump only for package @clayui/shared

# [3.113.0](https://github.com/liferay/clay/compare/v3.112.0...v3.113.0) (2024-03-28)

**Note:** Version bump only for package @clayui/shared

# [3.111.0](https://github.com/liferay/clay/compare/v3.110.0...v3.111.0) (2024-02-15)

**Note:** Version bump only for package @clayui/shared

# [3.109.0](https://github.com/liferay/clay/compare/v3.108.0...v3.109.0) (2024-01-22)

### Bug Fixes

-   **@clayui/drop-down:** Fix Dropdown doesnt close when click outside ([f5beaf9](https://github.com/liferay/clay/commit/f5beaf9cf012a0a81c7a2bcc1a440c6143ba37bc))

### Features

-   **@clayui/shared:** adds support for closing the overlay when clicking outside the body ([0a720b1](https://github.com/liferay/clay/commit/0a720b11ffe1e4d3a5fa02762c5be780093b87e2))

# [3.107.0](https://github.com/liferay/clay/compare/v3.106.1...v3.107.0) (2023-11-27)

**Note:** Version bump only for package @clayui/shared

## [3.106.1](https://github.com/liferay/clay/compare/v3.106.0...v3.106.1) (2023-10-26)

**Note:** Version bump only for package @clayui/shared

# [3.106.0](https://github.com/liferay/clay/compare/v3.105.0...v3.106.0) (2023-10-25)

### Bug Fixes

-   remove 'src' dir from being packaged with npm ([9383e8d](https://github.com/liferay/clay/commit/9383e8d8abb25ca3396e7c6e4dfa53bbc72691c5))
-   use package's directory for baseDir when generating type ([0a5c710](https://github.com/liferay/clay/commit/0a5c710092f36243bc8d5487f70e831295715072))

### Features

-   **@clayui/core:** add hook to handle tree navigation ([1331f57](https://github.com/liferay/clay/commit/1331f578f438a565c2d762d71f342b0f8753d289))

# [3.104.0](https://github.com/liferay/clay/compare/v3.103.1...v3.104.0) (2023-08-25)

### Bug Fixes

-   **@clayui/core:** improves navigation for navigating up and down when opening a Menu ([f52c93d](https://github.com/liferay/clay/commit/f52c93d121eff8c210c7bc8ffdec6a8d27ca82eb))

### Features

-   **@clayui/core:** adds new experimental Menu component ([4560451](https://github.com/liferay/clay/commit/45604517f2e589af9a86d5a88660ebd13cf460ec))

## [3.103.1](https://github.com/liferay/clay/compare/v3.103.0...v3.103.1) (2023-08-15)

### Bug Fixes

-   **@clayui/drop-down:** adds throttle to handle contextual menu visibility ([7d51b7a](https://github.com/liferay/clay/commit/7d51b7aa96dcd86c9e8c70cd97dec5c7c9279b73))

# [3.101.0](https://github.com/liferay/clay/compare/v3.100.0...v3.101.0) (2023-07-28)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when not validating value with items ([ab4421e](https://github.com/liferay/clay/commit/ab4421ede3b8b97084e694e3500b07f4ff1957f1))

# [3.100.0](https://github.com/liferay/clay/compare/v3.99.4...v3.100.0) (2023-07-13)

**Note:** Version bump only for package @clayui/shared

# [3.96.0](https://github.com/liferay/clay/compare/v3.95.2...v3.96.0) (2023-05-29)

**Note:** Version bump only for package @clayui/shared

## [3.95.2](https://github.com/liferay/clay/compare/v3.95.0...v3.95.2) (2023-05-17)

### Bug Fixes

-   **@clayui/shared:** fix Picker menu positioning error ([54e6d49](https://github.com/liferay/clay/commit/54e6d49dc4ae6dc69111922c16c1a6f119bb7b5a))

# [3.95.0](https://github.com/liferay/clay/compare/v3.94.0...v3.95.0) (2023-05-15)

### Bug Fixes

-   **@clayui/shared:** fix error when not recalculating positioning for elements with parent with scroll ([16a4c77](https://github.com/liferay/clay/commit/16a4c77ea3be35cbf52c96449f237373fe163f36))

# [3.94.0](https://github.com/liferay/clay/compare/v3.93.0...v3.94.0) (2023-05-03)

### Bug Fixes

-   **@clayui/shared:** fix error when not moving initial scroll to virtualized list ([4b5051e](https://github.com/liferay/clay/commit/4b5051efc5e3a216740d124afee0c4dac06588e8))

### Features

-   **@clayui/shared:** add implementation of moving scroll with virtualization in `useNavigation` hook ([fd50e8c](https://github.com/liferay/clay/commit/fd50e8cf9bee61e8295e77956c1f12188e4ce3c5))
-   **@clayui/shared:** implements navigation integration with the collection API ([7291d6b](https://github.com/liferay/clay/commit/7291d6bc0f13ec079f1097b90584380d27d74f36))

# [3.93.0](https://github.com/liferay/clay/compare/v3.92.0...v3.93.0) (2023-04-19)

**Note:** Version bump only for package @clayui/shared

# [3.92.0](https://github.com/liferay/clay/compare/v3.91.0...v3.92.0) (2023-04-06)

**Note:** Version bump only for package @clayui/shared

# [3.89.0](https://github.com/liferay/clay/compare/v3.88.0...v3.89.0) (2023-03-01)

**Note:** Version bump only for package @clayui/shared

# [3.88.0](https://github.com/liferay/clay/compare/v3.87.2...v3.88.0) (2023-02-14)

**Note:** Version bump only for package @clayui/shared

# [3.87.0](https://github.com/liferay/clay/compare/v3.86.1...v3.87.0) (2023-02-08)

### Bug Fixes

-   **@clayui/shared:** prevent closing the modal when clicking outside an Overlay rendered in the modal ([d363535](https://github.com/liferay/clay/commit/d36353591e43dfe46841c48006298e8a3853fb21))

### Features

-   **@clayui/shared:** adds the possibility to have overlay stacked ([1a4d281](https://github.com/liferay/clay/commit/1a4d281ab9e0aed7275c9f9a27a9d2e014ed8ab6))

## [3.86.1](https://github.com/liferay/clay/compare/v3.86.0...v3.86.1) (2023-02-02)

**Note:** Version bump only for package @clayui/shared

# [3.86.0](https://github.com/liferay/clay/compare/v3.85.0...v3.86.0) (2023-01-31)

**Note:** Version bump only for package @clayui/shared

# [3.85.0](https://github.com/liferay/clay/compare/v3.84.0...v3.85.0) (2023-01-23)

### Bug Fixes

-   **@clayui/core:** fix Vertical Bar component error change behavior from controlled to uncontrolled ([54b329f](https://github.com/liferay/clay/commit/54b329f0a13be5b6d59ff91d3bca1a067497e071))

### Features

-   **@clayui/core:** add new property to add className to Picker menu ([2b6fafb](https://github.com/liferay/clay/commit/2b6fafbca6b96972c1d677490f871fefa36511ac))

## [3.83.1](https://github.com/liferay/clay/compare/v3.83.0...v3.83.1) (2022-12-20)

### Bug Fixes

-   **@clayui/core:** fixes error when fetching the id that contains only numbers ([5c82804](https://github.com/liferay/clay/commit/5c82804f3134b9be571ab5a52552fbee58388f9c))

# [3.83.0](https://github.com/liferay/clay/compare/v3.82.0...v3.83.0) (2022-12-20)

### Bug Fixes

-   **@clayui/shared:** add utility function to check typeahead and fix bugs not properly clearing timeout when closing menu ([88eaab4](https://github.com/liferay/clay/commit/88eaab4f40aa5302f6312fc6e14d40ed81a867a6))

### Features

-   **@clayui/shared:** add hook to identify if it's a mobile device ([65af0e6](https://github.com/liferay/clay/commit/65af0e62f960c927d1f054b336b8f4dfc41c0682))
-   **@clayui/shared:** adds `useHover` hook to normalize hover pointer interactions ([fc1f6c2](https://github.com/liferay/clay/commit/fc1f6c297cb3ce5df87017faa23c7b0e8509eda1))
-   **@clayui/shared:** adds configuration for visual navigation and event scheduling ([6b055ad](https://github.com/liferay/clay/commit/6b055ada959d7dfc9977a1ddcf69542b8a1e2c05))
-   **@clayui/shared:** implements moving the scroll in visual focus ([614c812](https://github.com/liferay/clay/commit/614c81223dec7d53626e8c0ce860cd88853e0123))

# [3.82.0](https://github.com/liferay/clay/compare/v3.81.0...v3.82.0) (2022-12-07)

### Bug Fixes

-   **@clayui/shared:** fix error when losing focus in DropDown ([7f7a903](https://github.com/liferay/clay/commit/7f7a9033259b458c6ae6d999c45f2d6e8df4b7df))
-   **@clayui/shared:** fix navigation when focus trap ([3ecb858](https://github.com/liferay/clay/commit/3ecb85881703ca4a7072d55556db1e4d526521c3))
-   fix bug when scrolling page when navigating via arrow keys ([45092ec](https://github.com/liferay/clay/commit/45092ec26bf6ce6adefc5e53ab3e0d69330662fb))

### Features

-   **@clayui/shared:** add component to handle overlay for Clay components ([a911038](https://github.com/liferay/clay/commit/a91103851fe6aab734bf94649990b1a1eb5b9e3d))
-   **@clayui/shared:** add hook to handle overlay positioning ([d7427eb](https://github.com/liferay/clay/commit/d7427ebb99e5c3901a548428ac285c4fa603dbd2))

# [3.81.0](https://github.com/liferay/clay/compare/v3.80.1...v3.81.0) (2022-11-30)

**Note:** Version bump only for package @clayui/shared

## [3.80.1](https://github.com/liferay/clay/compare/v3.80.0...v3.80.1) (2022-11-22)

### Bug Fixes

-   **@clayui/shared:** fixes error when stop typing in DropDown Search ([a6ea67b](https://github.com/liferay/clay/commit/a6ea67b5f5a0e251aa9cdfcdc6c22c1c1e8fb6e7))

# [3.80.0](https://github.com/liferay/clay/compare/v3.79.0...v3.80.0) (2022-11-21)

### Bug Fixes

-   **@clayui/drop-down:** fix keyboard navigation for context menu ([b44c7db](https://github.com/liferay/clay/commit/b44c7db37a53720860b832f12119d40f377a438b))

### Features

-   **@clayui/shared:** Add typeahead function to list ([ce1347f](https://github.com/liferay/clay/commit/ce1347fa8dcaa90d2d09e507c357ba834468b75b))

# [3.79.0](https://github.com/liferay/clay/compare/v3.78.2...v3.79.0) (2022-11-08)

### Bug Fixes

-   **@clayui/shared:** fix error when alternate is with old reference ([4ae7ffe](https://github.com/liferay/clay/commit/4ae7ffe444c34a54e0c513d76e26718339a495ea))
-   **@clayui/shared:** fixes error when trying to navigate by non-visible element using `useNavigation` hook ([2345873](https://github.com/liferay/clay/commit/2345873905150ccdd5ab48054a9affdb2890f2f8))
-   **@clayui/shared:** fixes flag to switch which fiber to use to find focusable elements ([a26fc70](https://github.com/liferay/clay/commit/a26fc70744b4c04fad28e66142401a6bead4b64f))

### Features

-   **@clayui/shared:** adds new hook to handle navigation using arrow keys ([87b13a6](https://github.com/liferay/clay/commit/87b13a6f57922f233fa738bcee87cd1a7e704eae))

## [3.78.2](https://github.com/liferay/clay/compare/v3.78.1...v3.78.2) (2022-10-25)

### Bug Fixes

-   **@clayui/shared:** fix error when moving focus when reference is null ([bcc05cf](https://github.com/liferay/clay/commit/bcc05cf5d24ff2b6b7ba4e776e753f4bc1af06c9))

## [3.78.1](https://github.com/liferay/clay/compare/v3.78.0...v3.78.1) (2022-10-25)

### Bug Fixes

-   **@clayui/shared:** fix error when fiberNode may come null ([7aa0445](https://github.com/liferay/clay/commit/7aa044572f93189195a40abd5450ca0cd5451305))

# [3.78.0](https://github.com/liferay/clay/compare/v3.77.0...v3.78.0) (2022-10-25)

### Bug Fixes

-   **@clayui/shared:** fix error of not finding focused elements when React.Portal is under a conditional ([179cd7a](https://github.com/liferay/clay/commit/179cd7a523ebc5a4c96fcb0194e5c8873da6c367))
-   **@clayui/shared:** fixes error when identifying non-visible element as focusable ([82cc0f8](https://github.com/liferay/clay/commit/82cc0f8078810b4610f220d09792ee53f9fb3da8))

### Features

-   **@clayui/shared:** add hook to detect user interaction type ([a20e236](https://github.com/liferay/clay/commit/a20e23638e28d27da18d8d140ebb38818595f129))

# [3.77.0](https://github.com/liferay/clay/compare/v3.76.0...v3.77.0) (2022-10-17)

**Note:** Version bump only for package @clayui/shared

## [3.75.2](https://github.com/liferay/clay/compare/v3.75.1...v3.75.2) (2022-09-29)

### Bug Fixes

-   **@clayui/shared:** fix bug of not doing forwardRef when `ref` is a function ([8601622](https://github.com/liferay/clay/commit/8601622a542ea5029dc96df17d6a6d1711cf8753))

# [3.75.0](https://github.com/liferay/clay/compare/v3.74.0...v3.75.0) (2022-09-28)

### Bug Fixes

-   **@clayui/shared:** fix bug of getting focused elements in document in menus ([5cce01c](https://github.com/liferay/clay/commit/5cce01c92c30fe1f7d5175208e13e5fdfbafc4ca))

# [3.73.0](https://github.com/liferay/clay/compare/v3.72.0...v3.73.0) (2022-09-13)

**Note:** Version bump only for package @clayui/shared

# [3.71.0](https://github.com/liferay/clay/compare/v3.70.3...v3.71.0) (2022-08-30)

**Note:** Version bump only for package @clayui/shared

## [3.70.3](https://github.com/liferay/clay/compare/v3.70.2...v3.70.3) (2022-08-30)

### Bug Fixes

-   **@clayui/shared:** fix error when checking a fiber element in progress in focus management ([b4484e0](https://github.com/liferay/clay/commit/b4484e03814740e25f95291ce79963d8b014fab8))

## [3.70.2](https://github.com/liferay/clay/compare/v3.70.1...v3.70.2) (2022-08-30)

**Note:** Version bump only for package @clayui/shared

# [3.70.0](https://github.com/liferay/clay/compare/v3.69.0...v3.70.0) (2022-08-23)

**Note:** Version bump only for package @clayui/shared

# [3.69.0](https://github.com/liferay/clay/compare/v3.68.0...v3.69.0) (2022-08-16)

### Features

-   **@clayui/drop-down:** improves accessibility for virtual cursor ([83bdcb8](https://github.com/liferay/clay/commit/83bdcb879100dfbc68f71c048ecd214471fff0bc))

# [3.67.0](https://github.com/liferay/clay/compare/v3.66.0...v3.67.0) (2022-07-25)

**Note:** Version bump only for package @clayui/shared

# [3.65.0](https://github.com/liferay/clay/compare/v3.64.0...v3.65.0) (2022-07-11)

**Note:** Version bump only for package @clayui/shared

# [3.58.0](https://github.com/liferay/clay/compare/v3.57.0...v3.58.0) (2022-05-23)

### Bug Fixes

-   **@clayui/core:** revalidate the state of intermediate for recursive multiple selection when the state is controlled ([172f849](https://github.com/liferay/clay/commit/172f849fcae41ce05e1c6254267f78f070966e85))

# [3.56.0](https://github.com/liferay/clay/compare/v3.55.0...v3.56.0) (2022-05-09)

**Note:** Version bump only for package @clayui/shared

# [3.55.0](https://github.com/liferay/clay/compare/v3.54.0...v3.55.0) (2022-05-02)

**Note:** Version bump only for package @clayui/shared

# [3.52.0](https://github.com/liferay/clay/compare/v3.51.0...v3.52.0) (2022-04-04)

### Bug Fixes

-   **@clayui/shared:** fix error when controlling focus in React 17.x ([76f5f0d](https://github.com/liferay/clay/commit/76f5f0d964231d8442c780b44f6a320b50b9948b))

# [3.49.0](https://github.com/liferay/clay/compare/v3.48.0...v3.49.0) (2022-03-15)

### Features

-   **@clayui/drop-down:** add new prop to align Menu in viewport ([1c4f19b](https://github.com/liferay/clay/commit/1c4f19b25c34f6ffb9c2c7b9a99732e2a82d5eb5))

# [3.47.0](https://github.com/liferay/clay/compare/v3.46.0...v3.47.0) (2022-02-23)

**Note:** Version bump only for package @clayui/shared

# [3.45.0](https://github.com/liferay/clay/compare/v3.44.2...v3.45.0) (2022-02-01)

### Bug Fixes

-   **@clayui/shared:** fix focus control collision when having FocusScope nested ([58bd27f](https://github.com/liferay/clay/commit/58bd27fc24d6754c9662b12332e01e2b209a9e84))

# [3.40.0](https://github.com/liferay/clay/compare/v3.39.0...v3.40.0) (2021-11-17)

### Bug Fixes

-   **@clayui/provider:** removes dependency from ClayModal to avoid circular dependency issues ([0b8eade](https://github.com/liferay/clay/commit/0b8eade03bc6a12284662cb5e42d7b1fdb87c20f))
-   **@clayui/shared:** fixes error when considering an element with negative tabIndex ([da143f0](https://github.com/liferay/clay/commit/da143f09b21c889a3f6586af0f1aa20bd944c60b))

# [3.39.0](https://github.com/liferay/clay/compare/v3.38.0...v3.39.0) (2021-10-29)

**Note:** Version bump only for package @clayui/shared

# [3.38.0](https://github.com/liferay/clay/compare/v3.37.0...v3.38.0) (2021-10-22)

**Note:** Version bump only for package @clayui/shared

# [3.37.0](https://github.com/liferay/clay/compare/v3.36.0...v3.37.0) (2021-10-06)

### Bug Fixes

-   **@clayui/shared:** fix error when controlling internal state using external value and internal controller ([d17eba5](https://github.com/liferay/clay/commit/d17eba5))

# [3.36.0](https://github.com/liferay/clay/compare/v3.35.3...v3.36.0) (2021-09-23)

**Note:** Version bump only for package @clayui/shared

## [3.35.3](https://github.com/liferay/clay/compare/v3.35.2...v3.35.3) (2021-09-09)

**Note:** Version bump only for package @clayui/shared

## [3.35.2](https://github.com/liferay/clay/compare/v3.35.1...v3.35.2) (2021-08-30)

### Bug Fixes

-   **@clayui/shared:** fix error export type from root in package distribution ([121e3cc](https://github.com/liferay/clay/commit/121e3cc))

## [3.35.1](https://github.com/liferay/clay/compare/v3.35.0...v3.35.1) (2021-08-30)

### Bug Fixes

-   **@clayui/shared:** fixes error when importing the type that is not available in the module ([3108383](https://github.com/liferay/clay/commit/3108383))

# [3.35.0](https://github.com/liferay/clay/compare/v3.34.0...v3.35.0) (2021-08-30)

**Note:** Version bump only for package @clayui/shared

# [3.32.0](https://github.com/liferay/clay/compare/v3.31.0...v3.32.0) (2021-07-28)

### Bug Fixes

-   **@clayui/shared:** fixes error when getting stuck in an input masked as hidden ([4c0c5cb](https://github.com/liferay/clay/commit/4c0c5cb))

# [3.29.0](https://github.com/liferay/clay/compare/v3.28.0...v3.29.0) (2021-05-28)

### Features

-   **@clayui/shared:** Add MouseSafeArea to the contextual menu ([7824f16](https://github.com/liferay/clay/commit/7824f16))

# [3.28.0](https://github.com/liferay/clay/compare/v3.27.0...v3.28.0) (2021-05-19)

### Features

-   **@clayui/drop-down:** Add the new ContainerProps API ([b106420](https://github.com/liferay/clay/commit/b106420))
-   **@clayui/shared:** add delegate event utility ([f46b6ef](https://github.com/liferay/clay/commit/f46b6ef))
-   **@clayui/shared:** Allow to pass className and/or id to the portal root element ([132ab1e](https://github.com/liferay/clay/commit/132ab1e))
-   **@clayui/shared:** Extract to a function so the div is created with all its attributes ([b7445bc](https://github.com/liferay/clay/commit/b7445bc))
-   **@clayui/shared:** simplify function ([d326ace](https://github.com/liferay/clay/commit/d326ace))

# [3.27.0](https://github.com/liferay/clay/compare/v3.26.0...v3.27.0) (2021-05-05)

### Bug Fixes

-   **@clayui/shared:** add unit test for FocusScope ([f84332f](https://github.com/liferay/clay/commit/f84332f))
-   **@clayui/shared:** update and simplify logic for focus management when focus moves in and out of the react tree ([e3a100f](https://github.com/liferay/clay/commit/e3a100f))

### Features

-   **@clayui/multi-select:** add async functionality for source items ([548aa2d](https://github.com/liferay/clay/commit/548aa2d))

## [3.5.1](https://github.com/liferay/clay/compare/@clayui/shared@3.5.0...@clayui/shared@3.5.1) (2021-02-11)

**Note:** Version bump only for package @clayui/shared

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
