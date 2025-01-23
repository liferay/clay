# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.127.0](https://github.com/liferay/clay/compare/v3.126.0...v3.127.0) (2025-01-23)

### Features

-   **@clayui/language-picker:** LPD-45714 Add defaultActive prop ([ef3b2fa](https://github.com/liferay/clay/commit/ef3b2fa7583fadda12fd01c53f69ed2b85aa3c0d))
-   **@clayui/language-picker:** LPD-45714 Add defaultLocaleId to the API ([559b176](https://github.com/liferay/clay/commit/559b1761af9a1361bc0f341bd4de39132efd58f9))
-   **@clayui/language-picker:** LPD-45714 Add defaultSelectedLocaleId ([29a032b](https://github.com/liferay/clay/commit/29a032bfa6d036f81032c614b793eb84722cfc18))
-   **@clayui/language-picker:** LPD-45714 Export component as LanguagePicker ([b030db1](https://github.com/liferay/clay/commit/b030db1e788bc943332e3a08b9dac78e3a844501))
-   **@clayui/language-picker:** LPD-45714 Make the language picker work in an uncontrolled way ([6f0a6c0](https://github.com/liferay/clay/commit/6f0a6c08a7617448666bee60fc1625878af98183))
-   **@clayui/language-picker:** LPD-45714 Move component to clay-core ([1ebff3b](https://github.com/liferay/clay/commit/1ebff3b6f71fa091d94eb0dc8de358c8f818f132))
-   **@clayui/language-picker:** LPD-45714 Move the label for the SR to the Option component ([effc1b6](https://github.com/liferay/clay/commit/effc1b6cb8f513b3252cc58389a147ea7456ce5d))
-   **@clayui/language-picker:** LPD-45714 Remove unnecessary href ([077031a](https://github.com/liferay/clay/commit/077031aac7720234057be058f3ccb48cb9c5c5fd))
-   **@clayui/language-picker:** LPD-45714 Rename labels to messages ([ca04d51](https://github.com/liferay/clay/commit/ca04d5137dcce223c377b4fc3f8e77ba042a8eb5))
-   **@clayui/language-picker:** LPD-45714 Replace displayName by name ([35025a8](https://github.com/liferay/clay/commit/35025a821bb26c12d848da382c5d59eb72746d0f))
-   **@clayui/language-picker:** LPD-45714 Replace selectedLocale with selectedLocaleId to be consistent with the design of the onSelectedLocaleChange API ([b68567e](https://github.com/liferay/clay/commit/b68567e244e1efb282ca607fc8e230e0122cb402))
-   **@clayui/language-picker:** LPD-45714 Update tests ([983d7fc](https://github.com/liferay/clay/commit/983d7fc502792122f361d22c024bba98ea338cd8))
-   **@clayui/language-picker:** LPD-45714 Wrap label to add right margin ([9eaf740](https://github.com/liferay/clay/commit/9eaf740f22f14de05dd0a7fbaaf7a898c2dd52b6))
-   **@clayui/vertical-nav:** LPD-46396 - Include an aria-label property on the Clay Vertical Navigation component and ensure its proper implementation in usage. ([e86d6cc](https://github.com/liferay/clay/commit/e86d6ccc46ea2566146e110f453a5e4b1d1bf7bb))
-   **@clayui/vertical-nav:** LPD-46396 - Update stories ([2fc9c3d](https://github.com/liferay/clay/commit/2fc9c3d80f028f8c0d26da2fb28db33532a60d88))
-   **@clayui/vertical-nav:** LPD-46396 - Update tests and snapshots ([859c893](https://github.com/liferay/clay/commit/859c893ea28d7dbeaf8719e594ebe5ae3b294ba6))

# [3.125.0](https://github.com/liferay/clay/compare/v3.124.0...v3.125.0) (2025-01-13)

**Note:** Version bump only for package @clayui/core

# [3.124.0](https://github.com/liferay/clay/compare/v3.123.1...v3.124.0) (2024-12-18)

### Bug Fixes

-   **@clayui/core:** fixes bug when keeping the column visible when it should be hidden ([2bcbcf3](https://github.com/liferay/clay/commit/2bcbcf3a6448675252106c17c50e5ebc44ebac03))
-   **@clayui/core:** fixes bug when updating the state at render time a… 27bf8ca …nd the number of table columns when the state changes ([1b4a50e](https://github.com/liferay/clay/commit/1b4a50ef505ba0fc15871d00b755e8829445005c))
-   **@clayui/core:** fixes keyboard navigation bug for VerticalNav with `displayType` primary ([40dfe9b](https://github.com/liferay/clay/commit/40dfe9b9eff8f8fc93b3d3500c9c7ac887fdbf2a))

### Features

-   **@clayui/core:** LPD-40160 Add displayType primary for VerticalNav for CMS Product Menu variant ([8cbefc8](https://github.com/liferay/clay/commit/8cbefc8b9ac21e85d3c1566709d53dc15924fff7))
-   **@clayui/core:** LPD-40160 Add floating menubar action button ([1a2e082](https://github.com/liferay/clay/commit/1a2e082a906c463a91cd2a0d2058b5e713ae6669))
-   **@clayui/core:** LPD-40160 Add floating menubar action button ([7782b3a](https://github.com/liferay/clay/commit/7782b3a204a96bfe70f66970051ce818ea5f1007))

# [3.123.0](https://github.com/liferay/clay/compare/v3.122.0...v3.123.0) (2024-11-21)

### Features

-   **@clayui/table:** LPD-42395 Add tooltips to table action buttons in Clay Table ([2834a18](https://github.com/liferay/clay/commit/2834a1823c064d035d223aaf0fe4dfbb14f161fd))
-   **@clayui/table:** LPD-42395 Update snapshot ([09038db](https://github.com/liferay/clay/commit/09038db3141e12383efc68905240890568a74337))

# [3.122.0](https://github.com/liferay/clay/compare/v3.121.0...v3.122.0) (2024-11-13)

### Bug Fixes

-   **@clayui/core:** LPD-39956 - Not render left arrow button when child array is empty ([2d154b4](https://github.com/liferay/clay/commit/2d154b422c494ffd5c9809d892352734a544f7ea))
-   **@clayui/core:** LPD-39956 - Update tests ([eb0c15a](https://github.com/liferay/clay/commit/eb0c15a9f7a4e3f4418c6ad00868d3f297331900))
-   **@clayui/picker:** LPD-38518 - Add case test for picker option ([97b6bbb](https://github.com/liferay/clay/commit/97b6bbbf777c1127b9545c66b7051fb967cc802d))
-   **@clayui/picker:** LPD-38518 - Add prop "href" to handle options with links ([2392cb9](https://github.com/liferay/clay/commit/2392cb972a15194a7751ba8cbcbbc59997f73e63))

### Features

-   **@clayui/core:** add new API to set item id key for table ([c5b49d3](https://github.com/liferay/clay/commit/c5b49d3ecd8f75da616c9c2a4b35e2b32cb86bc5))

# [3.121.0](https://github.com/liferay/clay/compare/v3.120.0...v3.121.0) (2024-10-17)

### Features

-   **@clayui/core:** Update sorting icons for the Clay Table. ([ac89778](https://github.com/liferay/clay/commit/ac8977871220ab1bdad2ea81fd54a7f25943f19a))

# [3.120.0](https://github.com/liferay/clay/compare/v3.119.1...v3.120.0) (2024-09-13)

### Features

-   **@clayui/core:** LPD-35826 Add unity test to check if props prefixed by "data-" are rendered as attributes in the option element ([3be3a12](https://github.com/liferay/clay/commit/3be3a120598b89de327a8b771034f43149154fe7))
-   **@clayui/core:** LPD-35826 Allow props prefixed by "data-" to be rendered as attributes in Picker's Options ([75d052d](https://github.com/liferay/clay/commit/75d052da00a2a495916e6a0058c44f6a63286504))
-   **@clayui/core:** LPD-35826 Update unit tests snapshots ([ca7c524](https://github.com/liferay/clay/commit/ca7c5243d44ff5df25295481a3510aca1a802291))

# [3.119.0](https://github.com/liferay/clay/compare/v3.118.0...v3.119.0) (2024-08-30)

**Note:** Version bump only for package @clayui/core

# [3.118.0](https://github.com/liferay/clay/compare/v3.117.0...v3.118.0) (2024-08-13)

### Bug Fixes

-   **@clayui/tree-view:** LPD-1277 Add aria-labelledby to correlate treeview label with checkbox ([dfd826a](https://github.com/liferay/clay/commit/dfd826a02fb7f0c16d54ed99ecda4a55ef684447))
-   **@clayui/tree-view:** LPD-1277 Update snapshots ([d368dce](https://github.com/liferay/clay/commit/d368dce9cab6e5cb45410df4d48816dad1dccdca))

# [3.117.0](https://github.com/liferay/clay/compare/v3.116.1...v3.117.0) (2024-07-30)

**Note:** Version bump only for package @clayui/core

## [3.116.1](https://github.com/liferay/clay/compare/v3.116.0...v3.116.1) (2024-06-27)

### Bug Fixes

-   **@clayui/picker:** LPD-28522 Add min width and change function logic ([2f97b9b](https://github.com/liferay/clay/commit/2f97b9b7a56e688f015461a989fd287cee3110c2))
-   **@clayui/picker:** LPD-28522 Add option to add auto width ([d8517dd](https://github.com/liferay/clay/commit/d8517dd5bc405bf78c84ed238dfc0c7352700a95))
-   **@clayui/picker:** LPD-28522 Update picker stories and test config ([e11d87b](https://github.com/liferay/clay/commit/e11d87bc98247fe0fe40c2202313f2b25d17295d))
-   **@clayui/picker:** LPD-28522 Update snapshot ([9985cc5](https://github.com/liferay/clay/commit/9985cc51209dde65faef5fc4e10bccbbd83dda54))

# [3.116.0](https://github.com/liferay/clay/compare/v3.115.2...v3.116.0) (2024-06-10)

### Bug Fixes

-   **@clayui/table:** fixes bug when hiding all columns ([27d0aee](https://github.com/liferay/clay/commit/27d0aee7e048a5ce78d730bab3a8e0695757e6cc))

## [3.115.1](https://github.com/liferay/clay/compare/v3.115.0...v3.115.1) (2024-05-21)

### Bug Fixes

-   **@clayui/core:** Fixes bug when rendering the last columns visibility cell for dynamic rendering ([8621482](https://github.com/liferay/clay/commit/862148209afc3952c27ab8018c4e3cb598ebfe0e))

# [3.115.0](https://github.com/liferay/clay/compare/v3.114.0...v3.115.0) (2024-05-16)

### Bug Fixes

-   **@clayui/core:** fixes bug when not rendering the action cell ([5f6eec5](https://github.com/liferay/clay/commit/5f6eec58859d9153a19a92cddcee0d8cc5a2c9fa))

### Features

-   **@clayui/core:** add new API to omit a column to columns visibility ([2e8d0f6](https://github.com/liferay/clay/commit/2e8d0f60d886251063b1833a38c4c72c8e07f051))
-   **@clayui/core:** adds new width API for the picker ([c37d3d4](https://github.com/liferay/clay/commit/c37d3d466c5b9ec35e109ffc43f14be04b7a96dc))
-   **@clayui/core:** changes the API behavior to only define the width ([17681fb](https://github.com/liferay/clay/commit/17681fb2ab356237a10cff11a0cc5ba82eb6720a))

# [3.114.0](https://github.com/liferay/clay/compare/v3.113.0...v3.114.0) (2024-04-22)

### Bug Fixes

-   **@clayui/core:** fixes bug when changing column visibility when there is only one column visible and disabled ([bdfcd86](https://github.com/liferay/clay/commit/bdfcd867f50b73efae4569ce3b86c18eedbcc83a))

# [3.113.0](https://github.com/liferay/clay/compare/v3.112.0...v3.113.0) (2024-03-28)

### Features

-   **@clayui/core:** adds the `index` available in the item collection API ([06fc444](https://github.com/liferay/clay/commit/06fc4449e85dc7c89b27c94f46f98a5a70a68a4b))

# [3.112.0](https://github.com/liferay/clay/compare/v3.111.1...v3.112.0) (2024-03-11)

### Bug Fixes

-   **@clayui/core:** fixes bug when switching column visibility ([89a8f07](https://github.com/liferay/clay/commit/89a8f078ef78aeaab3a4056c2522d21ca5811a8c))
-   **@clayui/core:** fixes columns visibility initial state behavior ([34614f8](https://github.com/liferay/clay/commit/34614f8275da1575424c8ae553d604c88b6f84a5))
-   **@clayui/core:** remove `hiddenColumns` API in favor of `visibleColumns` ([5c05be4](https://github.com/liferay/clay/commit/5c05be4ee081d074a59095145f0397277ebf97f7))
-   **@clayui/pagination:** LPD-1285 accessibility issues on prev, next and ellipsis buttons ([640dd96](https://github.com/liferay/clay/commit/640dd960aaab0e67255ec46d121717b36a20133b))

### Features

-   **@clayui/core:** update component highlight ([0993f12](https://github.com/liferay/clay/commit/0993f12909003a6cffa55f642d3bd272e5e6cad9))

# [3.111.0](https://github.com/liferay/clay/compare/v3.110.0...v3.111.0) (2024-02-15)

### Bug Fixes

-   **@clayui/core:** fixes bug when clicking on item does not select ([eadd182](https://github.com/liferay/clay/commit/eadd18246c2e32fb8d8dbb32a299e6d6a8727a15))
-   **@clayui/core:** fixes bug when not focusing on the first item ([f82643f](https://github.com/liferay/clay/commit/f82643f9bc651db841fc65cce22ee47e6af0c183))
-   **@clayui/core:** fixes bug when visual focus is lost when items are updated in Picker ([202962b](https://github.com/liferay/clay/commit/202962bd0c51e854994016021715e83751f4c549))
-   **@clayui/core:** fixes navigation to just Switch component instead of item ([14ad2a6](https://github.com/liferay/clay/commit/14ad2a6b85cb46c5653d065d3c77553fb599cb12))
-   **@clayui/core:** LPS-203851 fixes bug when keeping DropDown open in TreeView actions in Firefox ([f1a7dc6](https://github.com/liferay/clay/commit/f1a7dc650b2d10b8e64d93455feee2ba8205fd84))

# [3.109.0](https://github.com/liferay/clay/compare/v3.108.0...v3.109.0) (2024-01-22)

### Bug Fixes

-   **@clayui/core:** fixes error when not navigating through the head with sortable enabled and fixes error when expanding unnecessarily ([dbe7aff](https://github.com/liferay/clay/commit/dbe7aff9edb13a338f30a78e0a52f82c0eacd123))
-   **@clayui/core:** Table move table-sort to table element ([ce7acf2](https://github.com/liferay/clay/commit/ce7acf2330e2ec0d410ddd002bdadd47cfe4792b))
-   **@clayui/core:** updates the sort icon for table ([fda0727](https://github.com/liferay/clay/commit/fda0727922e0dd0b5bc16a59b3c6d25fdc7b679e))
-   **@clayui/pagination:** Fix select pages from ellipsis dropdown ([8b73a6d](https://github.com/liferay/clay/commit/8b73a6da1f10f00acfe1d8137ffac00a04ff9a21))
-   **@clayui/picker:** Update snapshot ([c6e38b1](https://github.com/liferay/clay/commit/c6e38b1223c42348080b466fab64acbf3556723a))
-   **@clayui/picker:** Update Picker markup with aria-controls ([c2b6b83](https://github.com/liferay/clay/commit/c2b6b8308f23e3d1b5792054d7afcfd103034824))
-   **@clayui/vertical-nav:** Add aria-controls on vertical navbar itens and change role to menuitem ([7e2a35b](https://github.com/liferay/clay/commit/7e2a35b95912b44a47fe159658dae8bc568466e8))
-   **@clayui/vertical-nav:** Update tests and snapshots ([714281d](https://github.com/liferay/clay/commit/714281ddce37d70fcb6cf716bfdaf2f1bbe142cc))

### Features

-   **@clayui/core:** Adds attribute sortAriaLabel on Cell for custom aria-label on sort button ([c5675c0](https://github.com/liferay/clay/commit/c5675c0443b4ec25273a4172589e3656cdaabfd7))
-   **@clayui/core:** adds column visibility feature ([65a07d0](https://github.com/liferay/clay/commit/65a07d00d3db7b1e36c1594c3c43dc8379d2f9cb))

# [3.108.0](https://github.com/liferay/clay/compare/v3.107.1...v3.108.0) (2023-12-12)

### Bug Fixes

-   **@clayui/core:** fix accessibility error for `aria-colindex` value ([931f426](https://github.com/liferay/clay/commit/931f426d24499e8deeb517194d56a60dc4193877))
-   **@clayui/vertical-nav:** Fix focusable vertica navbar when item has active property equals to false ([aa3078b](https://github.com/liferay/clay/commit/aa3078be54ed2d22f699b1f4736b58e1e84bd0a7))

### Features

-   **@clayui/core:** add new API to define the `size` to table ([23d3384](https://github.com/liferay/clay/commit/23d338487bb1bf034a1d5ac54d54381c54cd3ee6))
-   **@clayui/core:** add the example of Sections with Table ([0b4bfe4](https://github.com/liferay/clay/commit/0b4bfe4f984272512a0dc29dfbe316fee2c8eb76))
-   **@clayui/table:** adds the border to the head by default ([fb2cbdb](https://github.com/liferay/clay/commit/fb2cbdb7ac749756ff4c1749056af54bed9441fe))

## [3.107.1](https://github.com/liferay/clay/compare/v3.107.0...v3.107.1) (2023-11-27)

### Bug Fixes

-   **@clayui/core:** fixes error when deselecting the indeterminate state for pre selected items in the first render ([997461e](https://github.com/liferay/clay/commit/997461efe9bcd1f91334e1a1a3f9c50e131e50ac))

# [3.107.0](https://github.com/liferay/clay/compare/v3.106.1...v3.107.0) (2023-11-27)

### Bug Fixes

-   **@clayui/core:** fix infinite loop error in table ([a027700](https://github.com/liferay/clay/commit/a02770055dddb193aa2708da581794aad0f50f4c))
-   **@clayui/core:** fixes bug when rendering LiveAnnouncer on server side ([5765be2](https://github.com/liferay/clay/commit/5765be264c5898d211220a995c17aa4f235f52e1))
-   **@clayui/core:** fixes error when cleaning up the collection for explicitly nested collections ([e0714d1](https://github.com/liferay/clay/commit/e0714d1a089f951042364780d705ca89faaff8c0))

### Features

-   **@clayui/core:** adds asynchronous loading for Table items with nested row ([f1aea66](https://github.com/liferay/clay/commit/f1aea664a29c7b411e41ddf9d58c57f296a2c955))

## [3.106.1](https://github.com/liferay/clay/compare/v3.106.0...v3.106.1) (2023-10-26)

**Note:** Version bump only for package @clayui/core

# [3.106.0](https://github.com/liferay/clay/compare/v3.105.0...v3.106.0) (2023-10-25)

### Bug Fixes

-   **@clayui/core:** does not render the child items of an unexpanded item ([e308365](https://github.com/liferay/clay/commit/e30836554f424480e443c07342eb8f987f2b8428))
-   **@clayui/core:** fixes nested focus error ([e8e339c](https://github.com/liferay/clay/commit/e8e339c1f83b7a9f94a75a5f36baf9fc482e628c))
-   remove 'src' dir from being packaged with npm ([9383e8d](https://github.com/liferay/clay/commit/9383e8d8abb25ca3396e7c6e4dfa53bbc72691c5))
-   use package's directory for baseDir when generating type ([0a5c710](https://github.com/liferay/clay/commit/0a5c710092f36243bc8d5487f70e831295715072))

### Features

-   **@clayui/core:** add hook to handle tree navigation ([1331f57](https://github.com/liferay/clay/commit/1331f578f438a565c2d762d71f342b0f8753d289))
-   **@clayui/core:** adds base implementation for rendering a table tree into an accessible list ([1fb9d6e](https://github.com/liferay/clay/commit/1fb9d6ecd8887b105f272bdaa972bd7e47cd420c))
-   **@clayui/core:** adds controlled and uncontrolled expandable state ([56f3d8f](https://github.com/liferay/clay/commit/56f3d8f8c1afa43d8ca66973890948f9a78ab413))
-   **@clayui/core:** adds keyboard interaction for the Home and End keys ([d2224ed](https://github.com/liferay/clay/commit/d2224ed9d70b1eed37cc4fa5870e8853f64ed211))
-   **@clayui/core:** adds keyboard navigation interactions to row ([4a7f290](https://github.com/liferay/clay/commit/4a7f2909a95b674ae84f657c980a0295fb16e7b3))
-   **@clayui/core:** adds new API to handle column sorting with accessibility support ([4a13361](https://github.com/liferay/clay/commit/4a13361065b710453c336bc10cc3c5c6b9858aac))
-   **@clayui/core:** adds the implementation of the new data-oriented composition for Table ([d68bcaa](https://github.com/liferay/clay/commit/d68bcaa2efc725eac7e57d7fd1bf20f10e64aaa3))
-   **@clayui/core:** makes the new table component public ([f2a686e](https://github.com/liferay/clay/commit/f2a686ed2a940e9d0378586671b4543be8c5773e))

# [3.104.0](https://github.com/liferay/clay/compare/v3.103.1...v3.104.0) (2023-08-25)

### Bug Fixes

-   **@clayui/core:** fix error when interacting with TreeView using SR JAWS ([7933620](https://github.com/liferay/clay/commit/7933620ae9dc9ff356ae1692054674978152d365))
-   **@clayui/core:** improves navigation for navigating up and down when opening a Menu ([f52c93d](https://github.com/liferay/clay/commit/f52c93d121eff8c210c7bc8ffdec6a8d27ca82eb))

### Features

-   **@clayui/core:** adds new experimental Menu component ([4560451](https://github.com/liferay/clay/commit/45604517f2e589af9a86d5a88660ebd13cf460ec))

## [3.103.1](https://github.com/liferay/clay/compare/v3.103.0...v3.103.1) (2023-08-15)

### Bug Fixes

-   **@clayui/core:** fix error not having forwardRef for list ([fc5aaca](https://github.com/liferay/clay/commit/fc5aaca12f249389b82cbf6d0f78f8336431a584))
-   **@clayui/core:** Implements the use of cursor to reference unique items to move items in the tree ([51294c2](https://github.com/liferay/clay/commit/51294c2a7f122f51bcf50c542e451e131e00a1ed))

# [3.101.0](https://github.com/liferay/clay/compare/v3.100.0...v3.101.0) (2023-07-28)

**Note:** Version bump only for package @clayui/core

# [3.100.0](https://github.com/liferay/clay/compare/v3.99.4...v3.100.0) (2023-07-13)

### Bug Fixes

-   **@clayui/core:** fix error when validating focus without any element ([b8196ac](https://github.com/liferay/clay/commit/b8196acc087dba8a28c65dabfbda2cdf8a8048b2))

## [3.99.4](https://github.com/liferay/clay/compare/v3.99.3...v3.99.4) (2023-07-10)

### Bug Fixes

-   **@clayui/core:** fix collection rendering performance bottleneck ([ecf3155](https://github.com/liferay/clay/commit/ecf315594c07a26bed72aba5f734806e76e56a92))

## [3.99.1](https://github.com/liferay/clay/compare/v3.99.0...v3.99.1) (2023-07-04)

### Bug Fixes

-   **@clayui/core:** fix bug losing component focus when item is removed from DOM ([080b315](https://github.com/liferay/clay/commit/080b31586a9c6fe2c3b3f07ab547be329daa9203))
-   **@clayui/core:** fix error when updating state after component is unmounted ([8a43055](https://github.com/liferay/clay/commit/8a430550f6ff12f19475f4843c6c736a2a5240bb))
-   **@clayui/core:** fix position of TreeView drag preview ([253b784](https://github.com/liferay/clay/commit/253b7846c42c8ebc525605922017ea1d52d8e1d2))
-   **@clayui/core:** fix types for collection with support for string and number ([36cce77](https://github.com/liferay/clay/commit/36cce77a0e962de48148ed24f7c465b67c6cdd36))

# [3.99.0](https://github.com/liferay/clay/compare/v3.98.0...v3.99.0) (2023-06-28)

### Bug Fixes

-   **@clayui/autocomplete:** fix bug not announcing available options when autocomplete is open ([1dc9581](https://github.com/liferay/clay/commit/1dc9581bd2e96b7cdf250bf02c4858c5df4eb833))

### Features

-   **@clayui/core:** adds feature parity for `onItemMove` and `onItemHover` with drag and drop via keyboard ([dfa8e9e](https://github.com/liferay/clay/commit/dfa8e9ef86a43bb3f9a25aef7deb20abf215a783))
-   **@clayui/core:** allow returning false to cancel hover ([764210d](https://github.com/liferay/clay/commit/764210d3373495f0c3c8481ee25490250630c6a0))
-   **@clayui/core:** disable drop when not a valid target by `onItemHover` ([006eef6](https://github.com/liferay/clay/commit/006eef675d57ee8fb6daafb7321fb399872f8774))

# [3.98.0](https://github.com/liferay/clay/compare/v3.97.2...v3.98.0) (2023-06-20)

### Bug Fixes

-   **@clayui/core:** fixes bug with not correctly handling visibility state of arrow buttons ([ff08e9f](https://github.com/liferay/clay/commit/ff08e9fd101c445ba96e39b3b838edf0fb9efbac))
-   **@clayui/date-picker:** fixes error when not selecting the year ([747f09e](https://github.com/liferay/clay/commit/747f09e8d3d716eda68d3e080b3efd9592ecf26c))

### Features

-   **@clayui/core:** Picker add dropdown-menu-height-lg class to year picker ([c092968](https://github.com/liferay/clay/commit/c09296806d4505cabb47d92ecd5896db795caf41))
-   **@clayui/core:** Picker use dropdown-item-scroll classes ([ec90630](https://github.com/liferay/clay/commit/ec90630785725d043ca6fcca887ad970331859ff))

## [3.97.1](https://github.com/liferay/clay/compare/v3.97.0...v3.97.1) (2023-06-14)

### Bug Fixes

-   **@clayui/core:** fix the order of importance for using the item id of a collection ([b40958e](https://github.com/liferay/clay/commit/b40958e87f2b9442c7caae87209837a3a0398592))

# [3.97.0](https://github.com/liferay/clay/compare/v3.96.1...v3.97.0) (2023-06-13)

### Bug Fixes

-   **@clayui/core:** Add the missing id so that the screen reader makes a correct reading ([ff5df5c](https://github.com/liferay/clay/commit/ff5df5c29b6a37a19c1c6cb7537b6e9c81f28603))
-   **@clayui/core:** fix error when submitting the form ([75e07fe](https://github.com/liferay/clay/commit/75e07fef03a3695d14bef73cba84ff585193883e))
-   **@clayui/core:** fix typo ([665a5e3](https://github.com/liferay/clay/commit/665a5e3c6c6e7199fea8dcfaf7c3cdc5441bb915))

# [3.96.0](https://github.com/liferay/clay/compare/v3.95.2...v3.96.0) (2023-05-29)

### Bug Fixes

-   **@clayui/core:** fixes bug with not having a focusable item when there is no active item ([f852f26](https://github.com/liferay/clay/commit/f852f26244eabf7464a285b2aa2d72bba14f4853))

### Features

-   **@clayui/core:** add backward compatibility for VerticalNav ([bc1c59c](https://github.com/liferay/clay/commit/bc1c59ceadda34d9519806a5840c02b56ea58297))
-   **@clayui/core:** adds new `active` API to VerticalNav ([ebec342](https://github.com/liferay/clay/commit/ebec342f3f9b79abf86f25ab12f00754ee3952fa))

## [3.95.2](https://github.com/liferay/clay/compare/v3.95.0...v3.95.2) (2023-05-17)

**Note:** Version bump only for package @clayui/core

# [3.95.0](https://github.com/liferay/clay/compare/v3.94.0...v3.95.0) (2023-05-15)

### Bug Fixes

-   **@clayui/core:** fix error when not disabling item drag and drop via keyboard ([5646c63](https://github.com/liferay/clay/commit/5646c632d123af43523a6fd7c81359a570e0de94))

### Features

-   **@clayui/core:** add basic snapshot tests for Vertical Nav ([52a4a91](https://github.com/liferay/clay/commit/52a4a91dbad8570efbb70c3b7bf2abeffa229bbe))
-   **@clayui/nav:** add new composition to Vertical Nav with collection API ([80d1a6e](https://github.com/liferay/clay/commit/80d1a6ec88de531af6595d7bdec61f0d8af8fe6e))

# [3.94.0](https://github.com/liferay/clay/compare/v3.93.0...v3.94.0) (2023-05-03)

### Bug Fixes

-   **@clayui/core:** fix collection wrapper error ([7ad663a](https://github.com/liferay/clay/commit/7ad663a3263d97d7689a5f754e5681333f97a929))
-   **@clayui/core:** fix obsolete state of collection item and render not found component when state is controlled ([a0c7323](https://github.com/liferay/clay/commit/a0c732376328d09e35e972dcb7d9b25f789bd4ad))
-   **@clayui/core:** register the items in the collection after filtering with static content ([bed4573](https://github.com/liferay/clay/commit/bed4573ff572d2bba39be784b4323e7ffad52c6d))

### Features

-   **@clayui/core:** Add API to collection to return list with ids ([10cc1bb](https://github.com/liferay/clay/commit/10cc1bbcfaaa903f03ac804cb01000d99de99226))
-   **@clayui/core:** add API to get the last item of the collection ([54149c0](https://github.com/liferay/clay/commit/54149c015f90bd7c9ca77e05d15e16e08f042775))
-   **@clayui/core:** adds infinite scroll feature to collection ([0248e36](https://github.com/liferay/clay/commit/0248e365f2384fddc4c2c5f60ea20afad22e8941))
-   **@clayui/core:** adds new API to render a not found element in the collection ([8f15cab](https://github.com/liferay/clay/commit/8f15cab011b4acf6b45334689a247646dbede360))
-   **@clayui/core:** adds the step of extracting data from the collection separate from the rendering ([87ca0a4](https://github.com/liferay/clay/commit/87ca0a4b9f1317d4dbc3aa60c0abb12401255579))
-   **@clayui/core:** update the react-virtual package and refactor the infinite scroll implementation ([88b8334](https://github.com/liferay/clay/commit/88b8334f9cc5c8353df7e3f03f650525cfe93507))

# [3.93.0](https://github.com/liferay/clay/compare/v3.92.0...v3.93.0) (2023-04-19)

### Bug Fixes

-   **@clayui/focus-trap:** Add display contents to ignore the element itself ([6e772ff](https://github.com/liferay/clay/commit/6e772ffbf4cdbdac1e0ab2aad57bb5427ca44cce))
-   **@clayui/focus-trap:** Improve the description of the component ([d5d2786](https://github.com/liferay/clay/commit/d5d27865ec6d86e44a481964c7bcd0d077980de8))
-   **@clayui/focus-trap:** Prevent focus if focusableElements is empty ([6b61c4c](https://github.com/liferay/clay/commit/6b61c4c9312aaf9440fd0423bfa76effea8a3354))
-   **@clayui/focus-trap:** Update snapshot ([014170f](https://github.com/liferay/clay/commit/014170f5f051730efbe673ff994e3b6344fb58c8))

### Features

-   **@clayui/core:** add motion reduction ([509e6dc](https://github.com/liferay/clay/commit/509e6dcac80d0f86a3d581da1e2b47f014dff605))

# [3.92.0](https://github.com/liferay/clay/compare/v3.91.0...v3.92.0) (2023-04-06)

### Bug Fixes

-   **@clayui/core:** always shows the drag and drop icon ([9395174](https://github.com/liferay/clay/commit/9395174bbe099a6b4af8fddeabe79e8a7f90a332))
-   **@clayui/core:** prevents JS from breaking component implementation ([3796b55](https://github.com/liferay/clay/commit/3796b5513a5886b5d23e20a32e6a9e12497f89b4))
-   **@clayui/core:** Vertical Bar open panel shouldn't disappear on resize ([127b1c4](https://github.com/liferay/clay/commit/127b1c46121af093314b0371343b7dc996a5330d))

### Features

-   **@clayui/core:** adds suppression of elements outside the scope of focus ([f96fc60](https://github.com/liferay/clay/commit/f96fc603022c6ffab1bc86011137acd7910a6cd3))
-   **@clayui/focus-trap:** Add documentation for FocusTrap ([3c8a1df](https://github.com/liferay/clay/commit/3c8a1df89c8ac41cfdd461b9e7f0395440138980))
-   **@clayui/focus-trap:** Add FocusTrap component ([8ecba27](https://github.com/liferay/clay/commit/8ecba2772cdbc99e3ee057f7b6ac7435b1b20e74))
-   **@clayui/focus-trap:** Add new props to focus on another element than the first ([72093cd](https://github.com/liferay/clay/commit/72093cd6dfa915de52f39e4a099a031e0976d858))
-   **@clayui/focus-trap:** Add stories for FocusTrap component ([99ab581](https://github.com/liferay/clay/commit/99ab5811ead8419576f73c052d65c5463ab3acaf))
-   **@clayui/focus-trap:** Add tests for FocusTrap ([af2e8f6](https://github.com/liferay/clay/commit/af2e8f6bf1fc44df02fe3d995a2e37840567e318))

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
