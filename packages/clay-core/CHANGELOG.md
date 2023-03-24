# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.91.0](https://github.com/liferay/clay/compare/v3.90.0...v3.91.0) (2023-03-24)

### Bug Fixes

-   **@clayui/core:** Vertical Bar declare main mouse button as constant ([ccb1068](https://github.com/liferay/clay/commit/ccb1068c593032353754850a33b39734fb37b08b))
-   **@clayui/core:** Vertical Bar don't update panel if cursor is less or more than panel width ([781ffcc](https://github.com/liferay/clay/commit/781ffcc9d56c9bd223ca2050996f527179e71365))
-   **@clayui/core:** Vertical Bar stop updating panel after min/max width reached ([7541959](https://github.com/liferay/clay/commit/754195962f6ab24dda4e5f3f0f1da93bdcee48af))

### Features

-   **@clayui/core:** adds `panelWidth` controlled implementation ([96b6373](https://github.com/liferay/clay/commit/96b63738e4f32138c4222e4941cd98298179b5b8))
-   **@clayui/core:** Vertical Bar adds resizing to VerticalBar.Panel ([82fe064](https://github.com/liferay/clay/commit/82fe064122c9cd7caae8efa21bf700e874fe64a8))

# [3.90.0](https://github.com/liferay/clay/compare/v3.89.0...v3.90.0) (2023-03-15)

**Note:** Version bump only for package @clayui/core

# [3.89.0](https://github.com/liferay/clay/compare/v3.88.0...v3.89.0) (2023-03-01)

### Bug Fixes

-   **@clayui/core:** fix error when not rendering drag button when Item is just string ([96c5646](https://github.com/liferay/clay/commit/96c5646c646e5a65fe29489e02296b6ece65d110))
-   **@clayui/core:** fixes bug when not focus on actions ([78dd821](https://github.com/liferay/clay/commit/78dd8214a4914e5293040456649176ca55099e8d))

### Features

-   **@clayui/core:** adds implementation to track most recent focus on component ([efa266e](https://github.com/liferay/clay/commit/efa266e612440921782bdd27415de050cb19df58))

# [3.88.0](https://github.com/liferay/clay/compare/v3.87.2...v3.88.0) (2023-02-14)

### Bug Fixes

-   **@clayui/core:** fix bug that does not expand an asynchronous node with cursor ([67e4f13](https://github.com/liferay/clay/commit/67e4f13b592c819a0cd85cf739aa43a702df1cc0))

### Features

-   **@clayui/core:** add TextHighlight component ([9c65e16](https://github.com/liferay/clay/commit/9c65e16e03d2403adb0f052b54f1f9994d0a1625))
-   **@clayui/core:** adds API for internationalization of announcer messages ([ace6890](https://github.com/liferay/clay/commit/ace689050816548ea00c08e6b6d4c356bb5f3c74))
-   **@clayui/core:** adds drag and drop accessibility when use keyboard ([ab87a57](https://github.com/liferay/clay/commit/ab87a574ddbd7cc7cd7334a50aeeaf0a6652a31a))
-   **@clayui/core:** adds initial implementation of drag and drop via keyboard in treeview ([c96552b](https://github.com/liferay/clay/commit/c96552b3bbc5ab9633189b999125d097daa08de4))
-   **@clayui/core:** improves the accessibility of item binding with groups and fixes the bug with not announcing correctly when starting the drag ([3dd93d1](https://github.com/liferay/clay/commit/3dd93d1e5a8beb7ed13b2febee655ed9bd0fe928))

# [3.87.0](https://github.com/liferay/clay/compare/v3.86.1...v3.87.0) (2023-02-08)

### Features

-   **@clayui/core:** adds new selection API to configure more options ([7839fa2](https://github.com/liferay/clay/commit/7839fa2c801ba2d4736fffd85c7b141551b69a70))

## [3.86.1](https://github.com/liferay/clay/compare/v3.86.0...v3.86.1) (2023-02-02)

**Note:** Version bump only for package @clayui/core

# [3.86.0](https://github.com/liferay/clay/compare/v3.85.0...v3.86.0) (2023-01-31)

### Bug Fixes

-   **@clayui/core:** announce item description when opening menu in Picker component ([7509ef7](https://github.com/liferay/clay/commit/7509ef7de1a7f07fc94e79446d9a3321f5fa9a06))
-   **@clayui/core:** fix `selection.toggle` typing error ([a61329f](https://github.com/liferay/clay/commit/a61329fb0e31f3b731fcb9e3cca52512c9010a86))
-   **@clayui/core:** fix Picker accessibility error on Apple devices with VoiceOver ([b3f56b2](https://github.com/liferay/clay/commit/b3f56b20e1c96f5547eda645b86fa95576168289))

### Features

-   **@clayui/core:** adds simple implementation for LiveAnnouncer ([cd0fd12](https://github.com/liferay/clay/commit/cd0fd12f92d6d4d8ebcf506b92360acbcb0522f2))

# [3.85.0](https://github.com/liferay/clay/compare/v3.84.0...v3.85.0) (2023-01-23)

### Bug Fixes

-   **@clayui/core:** fix Vertical Bar component error change behavior from controlled to uncontrolled ([54b329f](https://github.com/liferay/clay/commit/54b329f0a13be5b6d59ff91d3bca1a067497e071))

### Features

-   **@clayui/core:** add API to disable visual state of indeterminate and change selectionMode on manual selection ([02aa88b](https://github.com/liferay/clay/commit/02aa88bb10df3a26348942309bc326859c155aa9))
-   **@clayui/core:** add new property to add className to Picker menu ([2b6fafb](https://github.com/liferay/clay/commit/2b6fafbca6b96972c1d677490f871fefa36511ac))

# [3.84.0](https://github.com/liferay/clay/compare/v3.83.1...v3.84.0) (2022-12-23)

### Bug Fixes

-   **@clayui/core:** update Picker select icon ([637d5fc](https://github.com/liferay/clay/commit/637d5fc4cfe11954e8d80d8c6028292a00198207))

## [3.83.1](https://github.com/liferay/clay/compare/v3.83.0...v3.83.1) (2022-12-20)

### Bug Fixes

-   **@clayui/core:** computes nested collections to mount the layout ([047c927](https://github.com/liferay/clay/commit/047c92713aab31e57c064935750eeb2bf3cea8b7))
-   **@clayui/core:** fixes error when fetching the id that contains only numbers ([5c82804](https://github.com/liferay/clay/commit/5c82804f3134b9be571ab5a52552fbee58388f9c))

# [3.83.0](https://github.com/liferay/clay/compare/v3.82.0...v3.83.0) (2022-12-20)

### Features

-   **@clayui/core:** add ARIA properties to Option and Text component ([2c41e18](https://github.com/liferay/clay/commit/2c41e182fdfef0c37b088c57c0eaa4f8468bbd29))
-   **@clayui/core:** add typeahead support when menu is closed ([10a2681](https://github.com/liferay/clay/commit/10a2681e4543732705232914875bd18554958f74))
-   **@clayui/core:** adds hybrid component implementation to use native selector on mobile device ([a987646](https://github.com/liferay/clay/commit/a987646d2c44b553d7718fa682c44f88985e0030))
-   **@clayui/core:** Adds new Picker/Custom Select component ([be6dc86](https://github.com/liferay/clay/commit/be6dc86aeea79ec4d31e9fdfc26ea0a61c731d09))
-   **@clayui/core:** adds shortcut jump for PageUp and PageDown ([d46c286](https://github.com/liferay/clay/commit/d46c286c49ceb0e6d1c2ac1f65c45f6334e55aea))
-   **@clayui/core:** when leaving the focus of the Picker selects the option with visual focus ([be57258](https://github.com/liferay/clay/commit/be57258c482a566df266754c7f80f62e4d5188a2))
-   **@clayui/shared:** differentiates focus and hover for accessibility focus ([cf46b07](https://github.com/liferay/clay/commit/cf46b072b91968bb0cf4dd489b0c2ccf38d80672))

# [3.82.0](https://github.com/liferay/clay/compare/v3.81.0...v3.82.0) (2022-12-07)

**Note:** Version bump only for package @clayui/core

# [3.81.0](https://github.com/liferay/clay/compare/v3.80.1...v3.81.0) (2022-11-30)

### Bug Fixes

-   **@clayui/core:** fix bug not updating indexes when items move ([54100be](https://github.com/liferay/clay/commit/54100be5eddfff85dc76dd97982e4ecab1e5963b))
-   **@clayui/core:** fix error when moving items in tree view ([ab20a44](https://github.com/liferay/clay/commit/ab20a44c060cb3baaf660373824d0c2b0bfb766f))
-   **@clayui/core:** only expands the item if the intent to move is inside the item ([fd09e05](https://github.com/liferay/clay/commit/fd09e05ac400e456446797399900eaaee7f54e5a))
-   **@clayui/core:** when the item is expanded it only allows moving to middle and top ([7e30197](https://github.com/liferay/clay/commit/7e30197f44eab1e3685590b6a2ae259283fc219c))

## [3.80.1](https://github.com/liferay/clay/compare/v3.80.0...v3.80.1) (2022-11-22)

**Note:** Version bump only for package @clayui/core

# [3.80.0](https://github.com/liferay/clay/compare/v3.79.0...v3.80.0) (2022-11-21)

**Note:** Version bump only for package @clayui/core

# [3.79.0](https://github.com/liferay/clay/compare/v3.78.2...v3.79.0) (2022-11-08)

### Bug Fixes

-   **@clayui/core:** fixes error of actions not being navigable via keyboard in TreeView ([7849603](https://github.com/liferay/clay/commit/78496033105b69431895623fbab4b898e40da8f9))

### Features

-   **@clayui/core:** add accessibility improvements to VerticalBar ([eb76fcc](https://github.com/liferay/clay/commit/eb76fcc1c65c2aaf503fa0569e93fbfdcdc40ce9))
-   **@clayui/core:** add index data when moving item in TreeView ([0047d40](https://github.com/liferay/clay/commit/0047d408b1530275c71edc8063654c5d28248536))
-   **@clayui/core:** adds new `onItemHover` property to TreeView ([5f54076](https://github.com/liferay/clay/commit/5f54076a4cf422107907885bb8285b192de8d644))

## [3.78.2](https://github.com/liferay/clay/compare/v3.78.1...v3.78.2) (2022-10-25)

**Note:** Version bump only for package @clayui/core

## [3.78.1](https://github.com/liferay/clay/compare/v3.78.0...v3.78.1) (2022-10-25)

**Note:** Version bump only for package @clayui/core

# [3.78.0](https://github.com/liferay/clay/compare/v3.77.0...v3.78.0) (2022-10-25)

**Note:** Version bump only for package @clayui/core

# [3.77.0](https://github.com/liferay/clay/compare/v3.76.0...v3.77.0) (2022-10-17)

### Features

-   **@clayui/autocomplete:** adds support for paginated data integrated with the `useResource` hook ([cfb35c1](https://github.com/liferay/clay/commit/cfb35c17f311e75c6aee06250953abfdfd422bc3))

# [3.76.0](https://github.com/liferay/clay/compare/v3.75.3...v3.76.0) (2022-10-11)

### Bug Fixes

-   **@clayui/core:** fix reference error when loading more items and expand ([b61697c](https://github.com/liferay/clay/commit/b61697cc1343bbadc8f59d6797c95a8e0ebc0c4b))

### Features

-   **@clayui/core:** add `expandable` API public to TreeView ([28f762d](https://github.com/liferay/clay/commit/28f762d7d7fd93771c487bd07fc67f158169e28b))
-   **@clayui/core:** add possibility to specify item name key ([e74d9df](https://github.com/liferay/clay/commit/e74d9df0eedacedfd43c1624073dcb1751808529))
-   **@clayui/core:** add possibility to specify that an item has children, so caret is shown even if children haven't loaded ([4868084](https://github.com/liferay/clay/commit/4868084503c1685c5067a445d4c802c2fa64a970))
-   **@clayui/core:** adds API to set heading fontSize independent of tag ([b8554ee](https://github.com/liferay/clay/commit/b8554ee91c7659d9fd340f317e56b12163fad113))
-   **@clayui/core:** adds support for `onItemMove` to decide if item should be droppable ([0f034ed](https://github.com/liferay/clay/commit/0f034ed1621ececa780fa812fc8bd161c643f42d))
-   **@clayui/core:** adds support for disabling drag and drop of a specific item from TreeView ([4258fc4](https://github.com/liferay/clay/commit/4258fc4b7ab4671fbfe68a203c44e8332ef744e8))
-   **@clayui/core:** prevent drag preview to be shown in other drag and drop contexts ([8e1e915](https://github.com/liferay/clay/commit/8e1e9153e2bcd83fc6d4b39301fa1d89838e324a))

## [3.75.2](https://github.com/liferay/clay/compare/v3.75.1...v3.75.2) (2022-09-29)

**Note:** Version bump only for package @clayui/core

## [3.75.1](https://github.com/liferay/clay/compare/v3.75.0...v3.75.1) (2022-09-28)

### Bug Fixes

-   **@clayui/core:** fixes error of duplicating element rendering in TreeView ([f242a1e](https://github.com/liferay/clay/commit/f242a1ed0fe07edf781b20578c6cc255c8694eb0))

# [3.75.0](https://github.com/liferay/clay/compare/v3.74.0...v3.75.0) (2022-09-28)

### Features

-   **@clayui/core:** add paginated data support ([1c3e3d8](https://github.com/liferay/clay/commit/1c3e3d86014c19217e0d64f86a426bcfb63108b7))
-   **@clayui/core:** add single cursor per item ([b5b3bb3](https://github.com/liferay/clay/commit/b5b3bb327721c68b03cdb2de9f5433c8c64a34ec))
-   **@clayui/core:** adds the possibility to render non-Clay elements inside the TreeView.Item ([01dcf32](https://github.com/liferay/clay/commit/01dcf32da8c5a10e7c876f951ecc128c7f8ecc7b))

# [3.74.0](https://github.com/liferay/clay/compare/v3.73.0...v3.74.0) (2022-09-19)

### Bug Fixes

-   **@clayui/core:** fix error of TreeView actions not disappearing ([33ff8ac](https://github.com/liferay/clay/commit/33ff8ac9b67fd178f92474cb6c1ebf65194780af))

# [3.73.0](https://github.com/liferay/clay/compare/v3.72.0...v3.73.0) (2022-09-13)

**Note:** Version bump only for package @clayui/core

# [3.72.0](https://github.com/liferay/clay/compare/v3.71.0...v3.72.0) (2022-09-05)

**Note:** Version bump only for package @clayui/core

# [3.71.0](https://github.com/liferay/clay/compare/v3.70.3...v3.71.0) (2022-08-30)

**Note:** Version bump only for package @clayui/core

## [3.70.3](https://github.com/liferay/clay/compare/v3.70.2...v3.70.3) (2022-08-30)

**Note:** Version bump only for package @clayui/core

## [3.70.2](https://github.com/liferay/clay/compare/v3.70.1...v3.70.2) (2022-08-30)

**Note:** Version bump only for package @clayui/core

# [3.70.0](https://github.com/liferay/clay/compare/v3.69.0...v3.70.0) (2022-08-23)

### Features

-   **@clayui/core:** Add list virtualization pattern in collection ([cd3d101](https://github.com/liferay/clay/commit/cd3d1015f134c64dd7445e16949f678215ac7b31))
-   **@clayui/core:** adds virtualization support to VerticalBar.Bar ([de5679e](https://github.com/liferay/clay/commit/de5679ef7a2f1e0dfe7afb06d8400b53e211d3d5))

# [3.69.0](https://github.com/liferay/clay/compare/v3.68.0...v3.69.0) (2022-08-16)

**Note:** Version bump only for package @clayui/core

# [3.68.0](https://github.com/liferay/clay/compare/v3.67.0...v3.68.0) (2022-08-01)

**Note:** Version bump only for package @clayui/core

# [3.67.0](https://github.com/liferay/clay/compare/v3.66.0...v3.67.0) (2022-07-25)

**Note:** Version bump only for package @clayui/core

# [3.66.0](https://github.com/liferay/clay/compare/v3.65.2...v3.66.0) (2022-07-20)

**Note:** Version bump only for package @clayui/core

## [3.65.2](https://github.com/liferay/clay/compare/v3.65.1...v3.65.2) (2022-07-19)

**Note:** Version bump only for package @clayui/core

## [3.65.1](https://github.com/liferay/clay/compare/v3.65.0...v3.65.1) (2022-07-11)

**Note:** Version bump only for package @clayui/core

# [3.65.0](https://github.com/liferay/clay/compare/v3.64.0...v3.65.0) (2022-07-11)

### Features

-   **@clayui/core:** adds new `onItemMove` API ([3815731](https://github.com/liferay/clay/commit/3815731dbf304923970802176c56342a563c6194))

# [3.64.0](https://github.com/liferay/clay/compare/v3.63.0...v3.64.0) (2022-07-04)

### Features

-   **@clayui/core:** add new `noHover` property to remove item hover ([cf52960](https://github.com/liferay/clay/commit/cf52960b79272fa90702854d05e0f3eb48c87494))
-   **@clayui/core:** adds new `active` property to TreeView.Item ([9c3cc1c](https://github.com/liferay/clay/commit/9c3cc1ceb7b874f963f23eab0cb621ffa87265bd))
-   **@clayui/core:** adds new API to control node expand state in TreeView ([216fc36](https://github.com/liferay/clay/commit/216fc36524b2d01bd61d4a3a7e7e9c34ad094ffc))

# [3.62.0](https://github.com/liferay/clay/compare/v3.61.0...v3.62.0) (2022-06-20)

**Note:** Version bump only for package @clayui/core

# [3.61.0](https://github.com/liferay/clay/compare/v3.60.1...v3.61.0) (2022-06-13)

### Bug Fixes

-   **@clayui/core:** fixes error when there is no box-shadow in the panel when position the VerticalBar on the left side ([9121847](https://github.com/liferay/clay/commit/91218470d9b1600953c06b68e390af71f3dacfe5))

# [3.60.0](https://github.com/liferay/clay/compare/v3.59.0...v3.60.0) (2022-06-06)

### Features

-   **@clayui/core:** adds the implementation of the Vertical Bar component ([23a1637](https://github.com/liferay/clay/commit/23a1637e8ebac46d9815d334bae1296736979542))

# [3.58.0](https://github.com/liferay/clay/compare/v3.57.0...v3.58.0) (2022-05-23)

### Bug Fixes

-   **@clayui/core:** revalidate the state of intermediate for recursive multiple selection when the state is controlled ([172f849](https://github.com/liferay/clay/commit/172f849fcae41ce05e1c6254267f78f070966e85))

### Features

-   **@clayui/core:** adds new `onSelect` API to TreeView ([aca1322](https://github.com/liferay/clay/commit/aca132291f4ead5bded706e9585af4197c0b5e42))
-   **@clayui/core:** adds OOTB support for Text component in TreeView.Item/ItemStack ([cf32759](https://github.com/liferay/clay/commit/cf327597e8e3afbe6f78390008ea9aa6b25612ff))
-   **@clayui/core:** calls onKeyDown on Item and ItemStack if defined ([e5dfbf1](https://github.com/liferay/clay/commit/e5dfbf15024c6a8c85be78ac4d9a00ae8be56d06))

# [3.57.0](https://github.com/liferay/clay/compare/v3.56.0...v3.57.0) (2022-05-16)

### Features

-   **@clayui/core:** adds new API to expand node via double click in TreeView ([82cea51](https://github.com/liferay/clay/commit/82cea51363cfde5a27ce01573296e10e8e5bfc73))

# [3.56.0](https://github.com/liferay/clay/compare/v3.55.0...v3.56.0) (2022-05-09)

### Bug Fixes

-   updates broken storybook links in documentation ([22fc1c6](https://github.com/liferay/clay/commit/22fc1c684a92ada9aac73c9c7090c6cbca960f9d))

# [3.55.0](https://github.com/liferay/clay/compare/v3.54.0...v3.55.0) (2022-05-02)

### Bug Fixes

-   **@clayui/core:** the Heading tag follows the level definition ([956bc0b](https://github.com/liferay/clay/commit/956bc0b11f24ce55ef9f34b82dc395e4a4f40e20))
-   **clayui/chore:** Update index.ts to export both components ([a823b41](https://github.com/liferay/clay/commit/a823b411525547fc81f2d1f22650607e4afc58b5))
-   **clayui/chore:** Update stories in Heading and Text ([c870a2c](https://github.com/liferay/clay/commit/c870a2c111ce58b1c3e63517ddb82ac8f8c13d03))
-   **clayui/core:** Change export type to inline one ([01e0e35](https://github.com/liferay/clay/commit/01e0e35a402e3c81e0919e8807aa45939a308dfc))
-   **clayui/core:** SF ([5065c80](https://github.com/liferay/clay/commit/5065c80485c350d577dd212916c007acd8461f6f))
-   **clayui/core:** SF ([1602a02](https://github.com/liferay/clay/commit/1602a02fafa983c717ded5213b9b32c2fb9a0fb5))
-   **clayui/core:** Some code refactor. Pending some changes ([d1eed16](https://github.com/liferay/clay/commit/d1eed16a3d9717a921665ed3bcc247970a45585f))

### Features

-   **@clayui/core:** Adding Text component and Heading test cases ([c3a542c](https://github.com/liferay/clay/commit/c3a542c0472680d7d70ec120b53e305df185097c))
-   **@clayui/core:** Adding Text test cases ([0598b77](https://github.com/liferay/clay/commit/0598b771a652e86156e0a0abd404750e08a59bde))
-   Adding font-style monospace property ([43f16e2](https://github.com/liferay/clay/commit/43f16e2fbed04afef1be8598bee0772a5ce886b3))
-   **clayui/core:** Adding Heading and Text documentation ([0292834](https://github.com/liferay/clay/commit/02928348f0b1c657b773c2eb33ba9fc67d24fb83))
-   **clayui/core:** Delete React.FC. Adding tests related to truncate, color and default props ([d81e5db](https://github.com/liferay/clay/commit/d81e5db193e0d7514b33648ba6036efe39811560))
-   **clayui/core:** New Text API to determine the test tag. Coding refactor and update interface to type props ([05589b9](https://github.com/liferay/clay/commit/05589b97ab1c7ac0c525e60173198c2114aca702))

# [3.53.0](https://github.com/liferay/clay/compare/v3.52.0...v3.53.0) (2022-04-12)

### Features

-   **@clayui/core:** adds the new OverlayMask component ([a9b40cb](https://github.com/liferay/clay/commit/a9b40cb11862669d63b6fc724e0b210215d2bec7))

# [3.52.0](https://github.com/liferay/clay/compare/v3.51.0...v3.52.0) (2022-04-04)

**Note:** Version bump only for package @clayui/core

# [3.50.0](https://github.com/liferay/clay/compare/v3.49.0...v3.50.0) (2022-03-21)

### Bug Fixes

-   **@clayui/core:** fixes error when removing parent's intermediate state when item's sibling is intermediate ([782ea42](https://github.com/liferay/clay/commit/782ea426feae8a4e89c24585c16146f4f14a5efa))

# [3.49.0](https://github.com/liferay/clay/compare/v3.48.0...v3.49.0) (2022-03-15)

### Bug Fixes

-   **@clayui/core:** fix error when not rendering component after string with TreeView.Item ([1d275a8](https://github.com/liferay/clay/commit/1d275a8c948dfcfab9206a03b59c6c9d948ce29f))

### Features

-   **@clayui/core:** adds new properties to set the initial value of properties that can be controlled ([bdfb6b0](https://github.com/liferay/clay/commit/bdfb6b063cc4cd00365609d2f7ce0f525ac16045))
-   **@clayui/drop-down:** make it possible to render the menu lazily ([1e4e565](https://github.com/liferay/clay/commit/1e4e5655503645358245a200e72c8ca711f72956))

# [3.48.0](https://github.com/liferay/clay/compare/v3.47.0...v3.48.0) (2022-03-07)

**Note:** Version bump only for package @clayui/core

# [3.47.0](https://github.com/liferay/clay/compare/v3.46.0...v3.47.0) (2022-02-23)

### Bug Fixes

-   **@clayui/core:** avoid scrolling when selecting a node ([e1c7091](https://github.com/liferay/clay/commit/e1c7091e21cf965d2f7b637f9f55e6279cb891b6)), closes [#4663](https://github.com/liferay/clay/issues/4663)
-   **@clayui/core:** fix error when not updating parent's loc ([3ace427](https://github.com/liferay/clay/commit/3ace427f6107efac0652049bbab38cb6354fda4b))
-   **@clayui/core:** fix error when showing expander when `nestedKey` does not exist in the item ([cd4a4d2](https://github.com/liferay/clay/commit/cd4a4d2772fb43010fb8954973b66e0dfa4fa839))
-   **@clayui/core:** fixes error when having condition in the children of TreeView.Item and TreeView.ItemStack the last element is positioned to the right ([0e121d3](https://github.com/liferay/clay/commit/0e121d36dc407c3f328f252db8385cf17ced244a))
-   **@clayui/core:** fixes the error of not revalidating the intermediate state of the selected item's parents in the first render and expands the items ([379ca72](https://github.com/liferay/clay/commit/379ca72b5d773e1882898c0560efbb342c7348e4))

### Features

-   **@clayui/core:** add API to disable item and expander disable optionally ([4cc104d](https://github.com/liferay/clay/commit/4cc104d9d7978764060c407a0e311a626cb2415d))

# [3.46.0](https://github.com/liferay/clay/compare/v3.45.1...v3.46.0) (2022-02-09)

### Bug Fixes

-   **@clayui/core:** fix error when selecting parent nodes and controlling intermediate state in multiple selection ([2174128](https://github.com/liferay/clay/commit/2174128202457d54be34ee99d3ffd65281e40ed2))

### Features

-   **@clayui/core:** allow configuring the drag and drop context ([59f9f58](https://github.com/liferay/clay/commit/59f9f583a589dfb1494eb82ad2ca0e0fa7e2ed1d))

## [3.45.1](https://github.com/liferay/clay/compare/v3.45.0...v3.45.1) (2022-02-02)

### Bug Fixes

-   **@clayui/core:** avoid converting key type to string when using public method of selection.has() ([7c9413a](https://github.com/liferay/clay/commit/7c9413a9e8da28709107648823c96c21fc4f8989))
-   **@clayui/core:** fix error when converting key to string when it is of type number ([201d72f](https://github.com/liferay/clay/commit/201d72f84023324297cf0a7eb4f6e66ef72a1a09))
-   **@clayui/core:** fix error when propagating event when clicking expander ([56f56d6](https://github.com/liferay/clay/commit/56f56d60a0a3a2a032d479b16d5230d9b8c268e7))
-   **@clayui/core:** fixes error when not showing expander with static content ([e96ffb0](https://github.com/liferay/clay/commit/e96ffb0cf87c86d0bb345d6df146a7ba61e7a28c))
-   **@clayui/core:** fixes error when the child of `TreeView.ItemStack` is of type number ([7b3531f](https://github.com/liferay/clay/commit/7b3531fc5466c2a08d1e923f8d0158d6b185d51a))

# [3.45.0](https://github.com/liferay/clay/compare/v3.44.2...v3.45.0) (2022-02-01)

### Bug Fixes

-   **@clayui/core:** add a default value to nestedKey ([075221d](https://github.com/liferay/clay/commit/075221ddc826f98a8de8999dc90708cb2d637f72)), closes [#4584](https://github.com/liferay/clay/issues/4584)
-   **@clayui/core:** Change .treeview-item.disabled to .treeview-item-dragging ([b87b6b8](https://github.com/liferay/clay/commit/b87b6b8d80f53ba91681a6d3e64afc8ed9c287a7))
-   **@clayui/core:** hide expander icon on nodes that don't have chidren ([d705fc6](https://github.com/liferay/clay/commit/d705fc6d93ef50a44a70672bfc1e9b284041c903)), closes [#4581](https://github.com/liferay/clay/issues/4581)

### Features

-   **@clayui/core:** allow passing extra css classes to expander button ([91d40a2](https://github.com/liferay/clay/commit/91d40a27059cc1a5a6206fef7f96cb5eb5c30e51)), closes [#4589](https://github.com/liferay/clay/issues/4589)

## [3.44.1](https://github.com/liferay/clay/compare/v3.44.0...v3.44.1) (2022-01-11)

### Bug Fixes

-   **@clayui/core:** remove the context property from DndProvider ([4faf0ea](https://github.com/liferay/clay/commit/4faf0ea2049744b0587afec3ca2ee02bf916fe4d))

## [3.43.1](https://github.com/liferay/clay/compare/v3.43.0...v3.43.1) (2022-01-04)

### Bug Fixes

-   **@clayui/core:** avoid async/await in TreeViewItem ([78f8585](https://github.com/liferay/clay/commit/78f8585f4974e9126aa61afae64454b58df52964)), closes [#4529](https://github.com/liferay/clay/issues/4529) [#4531](https://github.com/liferay/clay/issues/4531)
-   **@clayui/core:** don't export TreeView as UNSAFE_TreeView ([fc54a6e](https://github.com/liferay/clay/commit/fc54a6e84aacbff192072aa07601eb8f884fbd58)), closes [#4528](https://github.com/liferay/clay/issues/4528) [#4531](https://github.com/liferay/clay/issues/4531) [#4532](https://github.com/liferay/clay/issues/4532)

# [3.43.0](https://github.com/liferay/clay/compare/v3.42.0...v3.43.0) (2021-12-29)

### Features

-   **@clayui/core:** expand child nodes when parent is checked ([606322a](https://github.com/liferay/clay/commit/606322ace1bba75c1d1ba152a067082e1788c0fd)), closes [#4523](https://github.com/liferay/clay/issues/4523)

# [3.42.0](https://github.com/liferay/clay/compare/v3.41.0...v3.42.0) (2021-12-15)

**Note:** Version bump only for package @clayui/core

# [3.41.0](https://github.com/liferay/clay/compare/v3.40.1...v3.41.0) (2021-12-02)

### Bug Fixes

-   **@clayui/core:** Disable checkbox while loading ([3893df3](https://github.com/liferay/clay/commit/3893df3669bb9ef7039f8556d0a14a9df5e194a5))

### Features

-   **@clayui/core:** add a loading indicator to the TreeView ([7704b93](https://github.com/liferay/clay/commit/7704b93edfa91160d678efc5359938d585600bfc)), closes [#4443](https://github.com/liferay/clay/issues/4443)

# [3.40.0](https://github.com/liferay/clay/compare/v3.39.0...v3.40.0) (2021-11-17)

### Features

-   **@clayui/core:** add an onRenameItem callback ([779f3da](https://github.com/liferay/clay/commit/779f3da83e889c382e39efabef872fc58f1e210a))
-   **@clayui/core:** make it possible to enable or disable drag and drop ([5367061](https://github.com/liferay/clay/commit/536706168e53b427d95fce5dacf18467f6f005ab))

# [3.39.0](https://github.com/liferay/clay/compare/v3.38.0...v3.39.0) (2021-10-29)

**Note:** Version bump only for package @clayui/core

# [3.38.0](https://github.com/liferay/clay/compare/v3.37.0...v3.38.0) (2021-10-22)

### Bug Fixes

-   **@clayui/core:** fix formatting error ([d79f5a6](https://github.com/liferay/clay/commit/d79f5a6908f8c3ee30b28824f935cadcca7240ed))
-   **@clayui/core:** fix the indentation of TreeView nodes when the item is a leaf ([6c44389](https://github.com/liferay/clay/commit/6c44389f1352167c091d5efa143770f1b4a4722f))

### Features

-   **@clayui/core:** adds `onLoadMore` API to TreeView ([ff972d7](https://github.com/liferay/clay/commit/ff972d73ffcddd24b06b51f26e11270044fbdbbd))
-   **@clayui/core:** implement "load more" to aggregate the state ([1fd9b62](https://github.com/liferay/clay/commit/1fd9b62cbdd504a2ff45f4480920913de9f7cf89))

# [3.37.0](https://github.com/liferay/clay/compare/v3.36.0...v3.37.0) (2021-10-06)

### Bug Fixes

-   **@clayui/core:** fix drag layer position ([37a2536](https://github.com/liferay/clay/commit/37a2536))
-   **@clayui/core:** fix error when moving item up, down and add to children ([f9fbe91](https://github.com/liferay/clay/commit/f9fbe91))

### Features

-   **@clayui/core:** add initial dnd implementation for TreeView ([fe1e286](https://github.com/liferay/clay/commit/fe1e286))
-   **@clayui/core:** adds the implementation of modifying the Tree by copying the partial structure ([4b67f61](https://github.com/liferay/clay/commit/4b67f61))
-   **@clayui/core:** implement move functionality for tree ([a0ea6e5](https://github.com/liferay/clay/commit/a0ea6e5))

# [3.36.0](https://github.com/liferay/clay/compare/v3.35.3...v3.36.0) (2021-09-23)

### Bug Fixes

-   **@clayui/core:** add missing dependencies ([8802933](https://github.com/liferay/clay/commit/8802933))
-   **@clayui/core:** fixes error of not controlled state for selectedKeys ([f78aad9](https://github.com/liferay/clay/commit/f78aad9))
-   **@clayui/core:** fixes error of not selecting all children regardless of state ([cdc921d](https://github.com/liferay/clay/commit/cdc921d))
-   **@clayui/core:** fixes error when expanding Node when selecting in TreeView ([00a9559](https://github.com/liferay/clay/commit/00a9559))
-   **@clayui/core:** Fixes error when not keeping node expandable when it starts as true ([236039b](https://github.com/liferay/clay/commit/236039b))

### Features

-   **@clayui/core:** Add `expanderIcons` API to change icons throughout the structure ([455002c](https://github.com/liferay/clay/commit/455002c))
-   **@clayui/core:** Add initial sketch of components to TreeView ([234e4f6](https://github.com/liferay/clay/commit/234e4f6))
-   **@clayui/core:** adds functionality for expandable nodes and nested nodes ([b103398](https://github.com/liferay/clay/commit/b103398))
-   **@clayui/core:** adds multiple selection implementation for Tree View ([281ec20](https://github.com/liferay/clay/commit/281ec20))
-   **@clayui/core:** adds support for flat items with dynamic content ([5ef9405](https://github.com/liferay/clay/commit/5ef9405))

## [3.35.3](https://github.com/liferay/clay/compare/v3.35.2...v3.35.3) (2021-09-09)

**Note:** Version bump only for package @clayui/core

## [3.35.2](https://github.com/liferay/clay/compare/v3.35.1...v3.35.2) (2021-08-30)

**Note:** Version bump only for package @clayui/core

## [3.35.1](https://github.com/liferay/clay/compare/v3.35.0...v3.35.1) (2021-08-30)

**Note:** Version bump only for package @clayui/core

# [3.35.0](https://github.com/liferay/clay/compare/v3.34.0...v3.35.0) (2021-08-30)

**Note:** Version bump only for package @clayui/core

# [3.34.0](https://github.com/liferay/clay/compare/v3.33.1...v3.34.0) (2021-08-25)

**Note:** Version bump only for package @clayui/core

# [3.32.0](https://github.com/liferay/clay/compare/v3.31.0...v3.32.0) (2021-07-28)

### Features

-   **@clayui/core:** Add Provider component and the new `@clayui/core` package ([1d4e4b3](https://github.com/liferay/clay/commit/1d4e4b3))
-   **@clayui/core:** adds `theme` API to Provider ([e7bae7d](https://github.com/liferay/clay/commit/e7bae7d))

# Change Log
