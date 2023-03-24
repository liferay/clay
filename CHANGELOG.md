# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.91.0](https://github.com/liferay/clay/compare/v3.90.0...v3.91.0) (2023-03-24)

### Bug Fixes

-   **@clayui/core:** Vertical Bar declare main mouse button as constant ([ccb1068](https://github.com/liferay/clay/commit/ccb1068c593032353754850a33b39734fb37b08b))
-   **@clayui/core:** Vertical Bar don't update panel if cursor is less or more than panel width ([781ffcc](https://github.com/liferay/clay/commit/781ffcc9d56c9bd223ca2050996f527179e71365))
-   **@clayui/core:** Vertical Bar stop updating panel after min/max width reached ([7541959](https://github.com/liferay/clay/commit/754195962f6ab24dda4e5f3f0f1da93bdcee48af))
-   **@clayui/css:** Navigation Bar focus outline should be rounded ([a9dfdc0](https://github.com/liferay/clay/commit/a9dfdc037fa832ffd84839bdb4dd4d7f4c640282))
-   **@clayui/css:** Removes nav-underline from Clay and Cadmin ([642c479](https://github.com/liferay/clay/commit/642c47964a48a1337220fd011ebcf4c5246455e0))
-   **@clayui/css:** Resizer shouldn't select text when dragging ([e2842c0](https://github.com/liferay/clay/commit/e2842c0cb455804de3a97d093c5a90df72f2c49f))
-   **@clayui/css:** Treeview btn should inherit component's color ([4e733f9](https://github.com/liferay/clay/commit/4e733f9fcb6b8f853f2150ba2bb2cce10f6e5c42))
-   **@clayui/pagination-bar:** fix bug in documentation example ([8924412](https://github.com/liferay/clay/commit/8924412729baa8a35f4e3729a632d5399fcab93f))
-   **@clayui/tabs:** Tabs deprecate `displayType` and `modern` attributes ([196abec](https://github.com/liferay/clay/commit/196abec5383d05f9af15af6893e9062fc32ba1c9))

### Features

-   **@clayui/core:** adds `panelWidth` controlled implementation ([96b6373](https://github.com/liferay/clay/commit/96b63738e4f32138c4222e4941cd98298179b5b8))
-   **@clayui/core:** Vertical Bar adds resizing to VerticalBar.Panel ([82fe064](https://github.com/liferay/clay/commit/82fe064122c9cd7caae8efa21bf700e874fe64a8))
-   **@clayui/css:** Atlas and Cadmin update nav-tabs styles ([2e7aae2](https://github.com/liferay/clay/commit/2e7aae2665b467d28f79c79a01060c0aca4edb00))
-   **@clayui/css:** Cadmin and Clay adds c-horizontal-resizer component ([9dec76c](https://github.com/liferay/clay/commit/9dec76c72f3e0e71ddc0ae59f310ab404bee697b))
-   **@clayui/tabs:** force style for tabs ([859ef65](https://github.com/liferay/clay/commit/859ef65a552c2b8ad04c04fec1ad505c53c6dd40))

### BREAKING CHANGES

-   **@clayui/tabs:** The default value for the `modern` attribute is now `false`. You will need to set the `modern` attribute on `ClayTabs` to get the `nav-underline` class.
-   **@clayui/css:** The class `.nav-underline` was removed

# [3.90.0](https://github.com/liferay/clay/compare/v3.89.0...v3.90.0) (2023-03-15)

### Bug Fixes

-   **@clayui/css:** Cadmin Pagination active state should have more contrast ([a09539a](https://github.com/liferay/clay/commit/a09539ad61c408fd9abd63790fc0c1308f232537))
-   **@clayui/css:** Clay and Cadmin Menubar make collapsed nav 100% wide ([ef3d431](https://github.com/liferay/clay/commit/ef3d431c223f4bfef1daf9539369bbb43176b646))
-   **@clayui/css:** Mixins Breakpoints don't output any styles if the breakpoint is `c-unset` ([a8a02e2](https://github.com/liferay/clay/commit/a8a02e226a19b65fc4750e929fcca7364e8eeaa3))
-   **@clayui/css:** Mixins Menubar update to use media query pattern ([c6d9c16](https://github.com/liferay/clay/commit/c6d9c168742cf2b4411f919ba4376fbd6a75ffdf))
-   **@clayui/date-picker:** Dependency array of UseCallback should include every dependencies of the memoized function ([38f859e](https://github.com/liferay/clay/commit/38f859ed8d65b44c78f7e6208311d5a66fc5810c))
-   **@clayui/date-picker:** fix focus bug in date picker ([613d041](https://github.com/liferay/clay/commit/613d0412961aa3073b9de4736561efec0435bb84))
-   **@clayui/date-picker:** updateDate is memoized without dateFormat dependency ([827acff](https://github.com/liferay/clay/commit/827acff5a5c26fe54f8c77be488b2f94162ac83f))
-   **@clayui/navigation-bar:** Mobile nav should push content down instead of overlaying ([0176e40](https://github.com/liferay/clay/commit/0176e40536a6c07eca67ef88651f8e9abcf44677))

### Features

-   **@clayui/css:** add new `angle-double` icons ([04e8bb0](https://github.com/liferay/clay/commit/04e8bb08b7b733cac9e280b240f4109da8163df9))
-   **@clayui/css:** add new `field-area` icon ([a0382b2](https://github.com/liferay/clay/commit/a0382b2a6984c8bad3347cfad57480c9323bc2b1))
-   **@clayui/css:** add new `km-KH` icon ([9b2c70e](https://github.com/liferay/clay/commit/9b2c70ed7bb1222e9ed18a0f0bd376f8e5511946))
-   **@clayui/empty-state:** always render the title ([aa887e8](https://github.com/liferay/clay/commit/aa887e89d060665deb037e21ce8ce4b16d18ac69))

# [3.89.0](https://github.com/liferay/clay/compare/v3.88.0...v3.89.0) (2023-03-01)

### Bug Fixes

-   **@clayui/core:** fix error when not rendering drag button when Item is just string ([96c5646](https://github.com/liferay/clay/commit/96c5646c646e5a65fe29489e02296b6ece65d110))
-   **@clayui/core:** fixes bug when not focus on actions ([78dd821](https://github.com/liferay/clay/commit/78dd8214a4914e5293040456649176ca55099e8d))
-   **@clayui/css:** Buttons increase font-weight of text in btn-monospaced ([0e92f96](https://github.com/liferay/clay/commit/0e92f96cdb5732cc0008e75d107f96d73d416cda))
-   **@clayui/css:** Links change spacing between text and icon back to 8px ([3309eb9](https://github.com/liferay/clay/commit/3309eb95bff3b31964cdfbd303460b77419b586a))
-   **@clayui/css:** nav-underline and navigation-bar-light should use primary-l0 for active highlight ([fdeb072](https://github.com/liferay/clay/commit/fdeb07208a7f4cf21ac2916587cb91d5c7d1be2c))

### Features

-   **@clayui/core:** adds implementation to track most recent focus on component ([efa266e](https://github.com/liferay/clay/commit/efa266e612440921782bdd27415de050cb19df58))
-   **@clayui/css:** Global Functions adds clay-map-merge ([901f288](https://github.com/liferay/clay/commit/901f28895166e201b1d322729630328a4173a879))
-   **@clayui/css:** Globals adds `$c-root` map for outputting custom properties ([8afe1b6](https://github.com/liferay/clay/commit/8afe1b6dfdec119d258e0721cbae3cf3766e3751))
-   **@clayui/css:** Globals adds `$clay-root` map for outputting custom properties ([49f05c7](https://github.com/liferay/clay/commit/49f05c725ad24f5fc6470083a1d66dd8e3a23827))
-   **@clayui/css:** Globals adds $primary-l0 ([d76fb5c](https://github.com/liferay/clay/commit/d76fb5cc6f866056bab9229e2bace3aaee0ee8d1))
-   **@clayui/css:** Moves c-root to the end of variables file ([ea82657](https://github.com/liferay/clay/commit/ea8265774603ebfd7852c78c92652ac46208d8fe))
-   **@clayui/drop-down:** add new prop to pass props to DropDown.Search button ([47604f3](https://github.com/liferay/clay/commit/47604f38c99fe294d3e96a420aab0e4699548293))

# [3.88.0](https://github.com/liferay/clay/compare/v3.87.2...v3.88.0) (2023-02-14)

### Bug Fixes

-   **@clayui/core:** fix bug that does not expand an asynchronous node with cursor ([67e4f13](https://github.com/liferay/clay/commit/67e4f13b592c819a0cd85cf739aa43a702df1cc0))
-   **@clayui/css:** Adjust list-group-text and subtext to match Lexicon specs ([193d92a](https://github.com/liferay/clay/commit/193d92af01be86e4995813106f560d4fe317e6e7))

### Features

-   **@clayui/core:** add TextHighlight component ([9c65e16](https://github.com/liferay/clay/commit/9c65e16e03d2403adb0f052b54f1f9994d0a1625))
-   **@clayui/core:** adds API for internationalization of announcer messages ([ace6890](https://github.com/liferay/clay/commit/ace689050816548ea00c08e6b6d4c356bb5f3c74))
-   **@clayui/core:** adds drag and drop accessibility when use keyboard ([ab87a57](https://github.com/liferay/clay/commit/ab87a574ddbd7cc7cd7334a50aeeaf0a6652a31a))
-   **@clayui/core:** adds initial implementation of drag and drop via keyboard in treeview ([c96552b](https://github.com/liferay/clay/commit/c96552b3bbc5ab9633189b999125d097daa08de4))
-   **@clayui/core:** improves the accessibility of item binding with groups and fixes the bug with not announcing correctly when starting the drag ([3dd93d1](https://github.com/liferay/clay/commit/3dd93d1e5a8beb7ed13b2febee655ed9bd0fe928))
-   **@clayui/link:** add extra aria-label when target is `_blank` ([6268a88](https://github.com/liferay/clay/commit/6268a8853bab3ea411773238c16a3f6750e70f6c))
-   **@clayui/tabs:** adds `forwardRef` to Tabs components ([a1792ce](https://github.com/liferay/clay/commit/a1792cea9a05d41ef177993a7c724fe673c9673f))

## [3.87.2](https://github.com/liferay/clay/compare/v3.87.1...v3.87.2) (2023-02-08)

### Bug Fixes

-   **@clayui/css:** use `clay-saturate` instead of `saturate` ([c3cc7ba](https://github.com/liferay/clay/commit/c3cc7ba5cca479250adc15c114e87670a45b5654))

## [3.87.1](https://github.com/liferay/clay/compare/v3.87.0...v3.87.1) (2023-02-08)

### Bug Fixes

-   **@clayui/css:** fix build error when `$secondary` variable is a CSS variable ([10da9f2](https://github.com/liferay/clay/commit/10da9f27846284f18be9cbd919498efb09762d07))

# [3.87.0](https://github.com/liferay/clay/compare/v3.86.1...v3.87.0) (2023-02-08)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when filtering autocomplete with regex special character ([079e4f7](https://github.com/liferay/clay/commit/079e4f7985a50a54dfbda36e1460204a0562a922))
-   **@clayui/css:** Atlas Dropdown items should be 32px tall ([237f8fd](https://github.com/liferay/clay/commit/237f8fd744d4f8c5fa259c20e2837500301e6f31))
-   **@clayui/css:** Buttons btn-secondary should have darker border for better contrast ([336bdc3](https://github.com/liferay/clay/commit/336bdc3c290e1ec2c2994618ddbca93669a0eab9))
-   **@clayui/css:** Cadmin declare font size for btn-monospaced size variants ([2e85acd](https://github.com/liferay/clay/commit/2e85acde4b9a8521c77d94054994a53dc3c457a2))
-   **@clayui/css:** Cadmin text-# utilities should use px values ([a47aa7e](https://github.com/liferay/clay/commit/a47aa7e506c460db81727dca5e3b4ae03a50f850))
-   **@clayui/modal:** fixes error when closing the modal and not removing elements with inert ([1e99716](https://github.com/liferay/clay/commit/1e997160e7edada2fbc1ee4b928cbfe9ac54a40d))
-   **@clayui/shared:** prevent closing the modal when clicking outside an Overlay rendered in the modal ([d363535](https://github.com/liferay/clay/commit/d36353591e43dfe46841c48006298e8a3853fb21))

### Features

-   **@clayui/core:** adds new selection API to configure more options ([7839fa2](https://github.com/liferay/clay/commit/7839fa2c801ba2d4736fffd85c7b141551b69a70))
-   **@clayui/shared:** adds the possibility to have overlay stacked ([1a4d281](https://github.com/liferay/clay/commit/1a4d281ab9e0aed7275c9f9a27a9d2e014ed8ab6))
-   **@clayui/tabs:** adds the pattern of uncontrolled to the `active` property of Tabs.Item in the new composition ([fd5299a](https://github.com/liferay/clay/commit/fd5299a6148f67de85b4d8f565ce2331f137472e))

## [3.86.1](https://github.com/liferay/clay/compare/v3.86.0...v3.86.1) (2023-02-02)

### Bug Fixes

-   **@clayui/css:** Cadmin Alert update alert-secondary to match new Lexicon colors ([8eab38d](https://github.com/liferay/clay/commit/8eab38d8728b1c70dbd9f25f8ca4305a712c2723))
-   **@clayui/css:** List Group removes default color on `.list-group` ([f314a43](https://github.com/liferay/clay/commit/f314a43f36ed8e42a515a530973004979c149b59))

# [3.86.0](https://github.com/liferay/clay/compare/v3.85.0...v3.86.0) (2023-01-31)

### Bug Fixes

-   **@clayui/core:** announce item description when opening menu in Picker component ([7509ef7](https://github.com/liferay/clay/commit/7509ef7de1a7f07fc94e79446d9a3321f5fa9a06))
-   **@clayui/core:** fix `selection.toggle` typing error ([a61329f](https://github.com/liferay/clay/commit/a61329fb0e31f3b731fcb9e3cca52512c9010a86))
-   **@clayui/core:** fix Picker accessibility error on Apple devices with VoiceOver ([b3f56b2](https://github.com/liferay/clay/commit/b3f56b20e1c96f5547eda645b86fa95576168289))
-   **@clayui/css:** Empty State add bigger margin-bottom on image ([e19f587](https://github.com/liferay/clay/commit/e19f587da161c40a376228706f81c11086057f0c))
-   **@clayui/css:** Readd text-underline and add text-none ([5f7f691](https://github.com/liferay/clay/commit/5f7f691ff69b93ead8204eed674fbd43664cc105))
-   **@clayui/css:** Text decoration utility selector typo ([8970d78](https://github.com/liferay/clay/commit/8970d78574ac9a75897646b93603e768049eca0d))
-   **@clayui/date-picker:** Date Range should be selectable with a single click ([ecd4c94](https://github.com/liferay/clay/commit/ecd4c942617244df6797bc69d5659957f7590540))

### Features

-   **@clayui/core:** adds simple implementation for LiveAnnouncer ([cd0fd12](https://github.com/liferay/clay/commit/cd0fd12f92d6d4d8ebcf506b92360acbcb0522f2))

# [3.85.0](https://github.com/liferay/clay/compare/v3.84.0...v3.85.0) (2023-01-23)

### Bug Fixes

-   **@clayui/core:** fix Vertical Bar component error change behavior from controlled to uncontrolled ([54b329f](https://github.com/liferay/clay/commit/54b329f0a13be5b6d59ff91d3bca1a067497e071))
-   **@clayui/css:** Atlas Alert update secondary colors ([9d85766](https://github.com/liferay/clay/commit/9d857661ba8e554be63eb8b071b91dd2800f66d3))
-   **@clayui/css:** Atlas Pagination active state should have more contrast ([7e26618](https://github.com/liferay/clay/commit/7e266186b762aa2bf7f89bccca32f33ae9c84125))
-   **@clayui/css:** Cadmin Navigation Bar nav-link should inherit font size ([b30e861](https://github.com/liferay/clay/commit/b30e8616970d741d60b669191db3e9a02953c675))
-   **@clayui/css:** Custom Checkbox and Radio border-color should have better contrast ([77bdad4](https://github.com/liferay/clay/commit/77bdad4e4852a8ded6d1ce3346af9dd7d9aaf037))
-   **@clayui/css:** Mixins clay-select-variant adds hover states ([f6bb985](https://github.com/liferay/clay/commit/f6bb985e21db606f10586e734bdda2cb8240c3cf))
-   **@clayui/css:** Navigation Bar nav-link should inherit font size from parent ([a359c32](https://github.com/liferay/clay/commit/a359c3235a275ee001e1b9e9ff0eb9114095c12d))
-   **@clayui/css:** Navigation Bar remove default btn border from .btn.nav-link ([6468728](https://github.com/liferay/clay/commit/64687286c5b7caf138c2a011790698b248c56c71))
-   **@clayui/css:** Pagination adds cursor pointer to link for tags without href ([c988ce7](https://github.com/liferay/clay/commit/c988ce7ea16e39b78cb8038981b08995b45a3b6e))
-   **@clayui/css:** Select box selected state should have darker background-color ([1890825](https://github.com/liferay/clay/commit/1890825e1385c0083c76a163d50e77d9949b3b78))
-   **@clayui/link:** Source Format ([ebc9464](https://github.com/liferay/clay/commit/ebc9464650f9810ac5a8b67a31453ea8d9adf09a))
-   **@clayui/modal:** only moves focus to dialog when content has rendered ([421e4fd](https://github.com/liferay/clay/commit/421e4fd2659141502cd683b0d9c9ae7475f05e5b))
-   **@clayui/modal:** restore trigger focus when closing modal ([146c939](https://github.com/liferay/clay/commit/146c939a4d95a2fb654b868637b172cdfeab09dc))
-   **@clayui/multi-select:** prevents items from having the same key ([ea62915](https://github.com/liferay/clay/commit/ea62915c1fc664fb3a68164051f596870d134983))
-   **@clayui/navigation-bar:** Removes classes btn-unstyled and link-unstyled from nav-link ([10419a7](https://github.com/liferay/clay/commit/10419a73920cf9c6138c8198007b45e1fa39546f))
-   **@clayui/pagination-bar:** PaginationBarWithBasicItems shouldn't render if totalItems is 0 ([13519e8](https://github.com/liferay/clay/commit/13519e89e5c381627574e06b9bdf0277737e91ee))
-   **@clayui/pagination:** Adds tabindex to links with no href ([566ae6b](https://github.com/liferay/clay/commit/566ae6b56f7bf10bbbbaa8140ab626f2666ab077))
-   **@clayui/pagination:** fix error when `totalPages` is 0 ([16d6094](https://github.com/liferay/clay/commit/16d60941ecd7d5f50c0cd5d51ff6bb925cc26707))
-   **@clayui/pagination:** remove link from Prev and Next when disabled ([6552d93](https://github.com/liferay/clay/commit/6552d93a6c103c9c8e9bfc1fbcc654821afeaea0))

### Features

-   **@clayui/alert:** Adds a secondary variant and symbol attribute ([b3ebd3e](https://github.com/liferay/clay/commit/b3ebd3ef25a50058a92cd823ab3d467535dcc146))
-   **@clayui/core:** add API to disable visual state of indeterminate and change selectionMode on manual selection ([02aa88b](https://github.com/liferay/clay/commit/02aa88bb10df3a26348942309bc326859c155aa9))
-   **@clayui/core:** add new property to add className to Picker menu ([2b6fafb](https://github.com/liferay/clay/commit/2b6fafbca6b96972c1d677490f871fefa36511ac))
-   **@clayui/css:** Cadmin adds c-link ([f0b4d3a](https://github.com/liferay/clay/commit/f0b4d3ace756c9a362e8f0af91493232740dbc1f))
-   **@clayui/css:** Links adds c-link to be used with utility classes ([156446b](https://github.com/liferay/clay/commit/156446b998d669345502b2fe49157f6a4906d6bd))
-   **@clayui/css:** Mixins clay-link adds ability to create variants ([60e9662](https://github.com/liferay/clay/commit/60e966265304dc12b39b5748ceb50ea477f2b91b))
-   **@clayui/css:** Utilities adds text-decoration-underline ([9b4873d](https://github.com/liferay/clay/commit/9b4873dd287fc1c2bf7dba693b7402f9fff5d62c))
-   **@clayui/link:** Adds new displayTypes, decoration, fontSize, and weight properties ([43bd938](https://github.com/liferay/clay/commit/43bd9383726136f56bb8fd0e897f1ea0bd78fe39))
-   **@clayui/modal:** allows modifying the `role` of the modal ([6ec5de2](https://github.com/liferay/clay/commit/6ec5de20b02d6a2c7f112a83ed9a751c2bad597d))
-   **@clayui/multi-select:** Adds new API to disallow adding custom values as label ([b858246](https://github.com/liferay/clay/commit/b85824693bcab80f2494137e06dfb96fd49a28df))
-   **@clayui/multi-select:** allows to prevent default behavior of `onPaste` and `onKeyDown` ([57e62a4](https://github.com/liferay/clay/commit/57e62a49fb26ebe344fbee140541a2dbc7e5c2e0))
-   **@clayui/nav:** add prop to remove `aria-current` from `VerticalNav` component ([5502734](https://github.com/liferay/clay/commit/5502734d034e8584307b1c30692e84cae7e2886a))
-   **@clayui/navigation-bar:** add prop to remove `aria-current` from `NavigationBar` component ([a872c2c](https://github.com/liferay/clay/commit/a872c2c65c90def154b3b60343603875663b05de))
-   **@clayui/pagination-bar:** change the DropDown component to the Picker in the high-level component ([6a641d4](https://github.com/liferay/clay/commit/6a641d48cfa14630d68c146527b7afbfff836d21))

# [3.84.0](https://github.com/liferay/clay/compare/v3.83.1...v3.84.0) (2022-12-23)

### Bug Fixes

-   **@clayui/core:** update Picker select icon ([637d5fc](https://github.com/liferay/clay/commit/637d5fc4cfe11954e8d80d8c6028292a00198207))
-   **@clayui/css:** Sidebar should be able to overwrite focus styles on sidenav-start and sidenav-end ([2edc530](https://github.com/liferay/clay/commit/2edc53053cc0a8169039f40e6c5831667ad7cbdd))

### Features

-   **@clayui/multi-select:** add new `alignmentByViewport` API ([ecb7409](https://github.com/liferay/clay/commit/ecb74090dc6f332ffdd8625d376d2c12db6075ec))
-   **@clayui/multi-select:** moves the visual focus from the gridcell to the label ([5686d66](https://github.com/liferay/clay/commit/5686d664b6d5544eb81967dded725ac8c058af1b))

## [3.83.1](https://github.com/liferay/clay/compare/v3.83.0...v3.83.1) (2022-12-20)

### Bug Fixes

-   **@clayui/core:** computes nested collections to mount the layout ([047c927](https://github.com/liferay/clay/commit/047c92713aab31e57c064935750eeb2bf3cea8b7))
-   **@clayui/core:** fixes error when fetching the id that contains only numbers ([5c82804](https://github.com/liferay/clay/commit/5c82804f3134b9be571ab5a52552fbee58388f9c))
-   **@clayui/css:** Mixins clay-select-variant `$option` should be scoped to the selector ([4f08997](https://github.com/liferay/clay/commit/4f08997965343b5592a7b5ecf91444424fa54b2b))

# [3.83.0](https://github.com/liferay/clay/compare/v3.82.0...v3.83.0) (2022-12-20)

### Bug Fixes

-   **@clayui/button:** improves the error message for button accessibility and the ButtonWithIcon component type ([2801f97](https://github.com/liferay/clay/commit/2801f978157a3b7781fc49f8ac3b9f85e90da0e6))
-   **@clayui/css:** Bootstrap spinners are broken ([9fabd50](https://github.com/liferay/clay/commit/9fabd5012c37d42c96fd882d2eb19e2d15ec4113))
-   **@clayui/css:** Forms button.form-control-select should be left aligned ([63a140f](https://github.com/liferay/clay/commit/63a140f482aac5bfa8bae5cf703340913aa7304b))
-   **@clayui/css:** Mixins clay-dropdown-item-variant adds .hover and .focus ([92221ef](https://github.com/liferay/clay/commit/92221ef3e5bb23ccb7bf57837dbcfdd78ce23fb7))
-   **@clayui/css:** Mixins form-control-variant and clay-select-variant should output .hover ([3823eef](https://github.com/liferay/clay/commit/3823eef969b53b96ea9171fc4128ec857af253a8))
-   **@clayui/css:** Sidebar adds focus state ([89443e5](https://github.com/liferay/clay/commit/89443e56a279e4db016726885aedb446feca130c))
-   **@clayui/drop-down:** fix menu reference error ([4f70e1e](https://github.com/liferay/clay/commit/4f70e1e063ea751a2ad7053f2bd651fa90a4de63))
-   **@clayui/multi-select:** add semantic role to pills ([7f99cfb](https://github.com/liferay/clay/commit/7f99cfb4098690608a3d7b5ab5f5c1f3f9d1a5f0))
-   **@clayui/multi-select:** associate the text with the label to improve readability for the SR ([e0e79da](https://github.com/liferay/clay/commit/e0e79dad1854d7e58df95054394ce5b33118f6a7))
-   **@clayui/multi-select:** fix input alignment error with label and loss of label focus ([824d326](https://github.com/liferay/clay/commit/824d326739516eeace26ae055f8e1f69d4be0eb6))
-   **@clayui/pagination:** Items should be links only ([d3c09be](https://github.com/liferay/clay/commit/d3c09be75afc28b9a6924dd33b0d67b3842c8c1a))
-   **@clayui/pagination:** Map aria-label to the nav element ([7500043](https://github.com/liferay/clay/commit/750004328032cee3c9e4146f164be1f91b68a47a))
-   **@clayui/pagination:** preventDefault on ClayLink when there is no href and SF ([1264f24](https://github.com/liferay/clay/commit/1264f242338bb794a66ab33d262677c42509a0f7))
-   **@clayui/pagination:** Use @clayui/shared sub to replace placeholder text ([d99aa66](https://github.com/liferay/clay/commit/d99aa66259c9d83a0da809d677e1b2620d6653d1))
-   **@clayui/shared:** add utility function to check typeahead and fix bugs not properly clearing timeout when closing menu ([88eaab4](https://github.com/liferay/clay/commit/88eaab4f40aa5302f6312fc6e14d40ed81a867a6))

### Features

-   **@clayui/core:** add ARIA properties to Option and Text component ([2c41e18](https://github.com/liferay/clay/commit/2c41e182fdfef0c37b088c57c0eaa4f8468bbd29))
-   **@clayui/core:** add typeahead support when menu is closed ([10a2681](https://github.com/liferay/clay/commit/10a2681e4543732705232914875bd18554958f74))
-   **@clayui/core:** adds hybrid component implementation to use native selector on mobile device ([a987646](https://github.com/liferay/clay/commit/a987646d2c44b553d7718fa682c44f88985e0030))
-   **@clayui/core:** Adds new Picker/Custom Select component ([be6dc86](https://github.com/liferay/clay/commit/be6dc86aeea79ec4d31e9fdfc26ea0a61c731d09))
-   **@clayui/core:** adds shortcut jump for PageUp and PageDown ([d46c286](https://github.com/liferay/clay/commit/d46c286c49ceb0e6d1c2ac1f65c45f6334e55aea))
-   **@clayui/core:** when leaving the focus of the Picker selects the option with visual focus ([be57258](https://github.com/liferay/clay/commit/be57258c482a566df266754c7f80f62e4d5188a2))
-   **@clayui/css:** add display `contents` utility ([e92be6a](https://github.com/liferay/clay/commit/e92be6a86763eb054edea89c50265b37149fd79b))
-   **@clayui/css:** Cadmin Forms adds form-control-select-secondary ([c66ef0f](https://github.com/liferay/clay/commit/c66ef0fdcd33f1b30377d3ff25c3e4d8b887f3f4))
-   **@clayui/css:** Dropdown adds dropdown-menu-select variant ([13680ed](https://github.com/liferay/clay/commit/13680edfd39880d4014f7d74c98e2753028d9632))
-   **@clayui/css:** Forms adds form-control-select-secondary ([8ab290e](https://github.com/liferay/clay/commit/8ab290efe28ce4d8fc634c46d7a7fd53a6efc958))
-   **@clayui/css:** Mixins clay-dropdown-menu-variant adds ability to style more sub components ([1527b71](https://github.com/liferay/clay/commit/1527b71a6cdb84926a65d1580614d2db09f56bc1))
-   **@clayui/css:** Mixins clay-form-control-variant adds active state ([92c1b0a](https://github.com/liferay/clay/commit/92c1b0aa2bfbaec25137ed7c1bdf35e436d0c909))
-   **@clayui/multi-select:** add focus control on labels on remove ([1d557b2](https://github.com/liferay/clay/commit/1d557b2dfeecbcf8f2991bba33882dc2b522813b))
-   **@clayui/multi-select:** adds keyboard navigation interactions to labels ([7c6121f](https://github.com/liferay/clay/commit/7c6121f9f892718bb5de135250b38deca9e2fba5))
-   **@clayui/pagination:** PaginationWithBasicItems should have aria-labels by default ([262d686](https://github.com/liferay/clay/commit/262d68636d4d2432442e86ab9943c1355eb63e96))
-   **@clayui/pagination:** Wraps pagination in nav element and adds navProps attribute ([d17a125](https://github.com/liferay/clay/commit/d17a12529c16fcd34962cf7fa57a8aa08dc0db67))
-   **@clayui/shared:** add hook to identify if it's a mobile device ([65af0e6](https://github.com/liferay/clay/commit/65af0e62f960c927d1f054b336b8f4dfc41c0682))
-   **@clayui/shared:** adds `useHover` hook to normalize hover pointer interactions ([fc1f6c2](https://github.com/liferay/clay/commit/fc1f6c297cb3ce5df87017faa23c7b0e8509eda1))
-   **@clayui/shared:** adds configuration for visual navigation and event scheduling ([6b055ad](https://github.com/liferay/clay/commit/6b055ada959d7dfc9977a1ddcf69542b8a1e2c05))
-   **@clayui/shared:** differentiates focus and hover for accessibility focus ([cf46b07](https://github.com/liferay/clay/commit/cf46b072b91968bb0cf4dd489b0c2ccf38d80672))
-   **@clayui/shared:** implements moving the scroll in visual focus ([614c812](https://github.com/liferay/clay/commit/614c81223dec7d53626e8c0ce860cd88853e0123))

# [3.82.0](https://github.com/liferay/clay/compare/v3.81.0...v3.82.0) (2022-12-07)

### Bug Fixes

-   **@clayui/breadcrumb:** add `aria-label` and `title` to ellipsis ([7905087](https://github.com/liferay/clay/commit/7905087c927396c74f5a9230d9d5b29a6aeebb30))
-   **@clayui/button:** update warning text ([a1e571b](https://github.com/liferay/clay/commit/a1e571bbdf959b20e2ec544e7dc278d65fce328d))
-   **@clayui/css:** Cadmin normalize Sass map keys to be closer to the selector name ([66dbd7a](https://github.com/liferay/clay/commit/66dbd7ab604a754f60801197f10a60202b7787a4))
-   **@clayui/css:** Mixins clay-css adds gap and row-gap to properties ([ba0447c](https://github.com/liferay/clay/commit/ba0447c44ad5d13b6b367f06874209c74e3dcee2))
-   **@clayui/css:** Mixins clay-modal-variant keys should be closer to the selector name ([60439a6](https://github.com/liferay/clay/commit/60439a6ea237b4cc5c73570f5f5f15e39dfe2911))
-   **@clayui/css:** Mixins clay-tbar-variant fix typo in `.tbar-divider-after` selector ([651c34a](https://github.com/liferay/clay/commit/651c34a1ff8cce6f467984deb1e042eadd0f4caa))
-   **@clayui/css:** Mixins keys should be closer to the selector name ([8ad67a5](https://github.com/liferay/clay/commit/8ad67a5ca3d8b222de6643f777e6d70e46e8b4b2))
-   **@clayui/css:** Normalize Sass map keys to be closer to the selector name ([3af7cde](https://github.com/liferay/clay/commit/3af7cdeb52b822079100ae9cc8324f182ba17d7e))
-   **@clayui/css:** Progress Bar variant keys should be closer to the selector name ([68aea6c](https://github.com/liferay/clay/commit/68aea6c09afc4e81d369693890fd3490e573a844))
-   **@clayui/date-picker:** moves focus to selected cell when clicking dot button ([9d0d8d1](https://github.com/liferay/clay/commit/9d0d8d1326ab4752d28fb6367ee0ee066cffc46c))
-   **@clayui/modal:** fix double click in the file select window in case outside of the modal ([fd24158](https://github.com/liferay/clay/commit/fd241587a9068397af5e405696b613910330f2dc))
-   **@clayui/pagination-bar:** add `aria-label` and `title` to ellipsis ([c1124ac](https://github.com/liferay/clay/commit/c1124acc7c82c0bd3b736c506804a7aa4b356b3c))
-   **@clayui/pagination:** add `aria-label` and `title` to ellipsis ([be831e5](https://github.com/liferay/clay/commit/be831e582f9c54c37535fd4267caff19c7ed74d8))
-   **@clayui/panel:** Remove fixed height after panel is shown ([07aea35](https://github.com/liferay/clay/commit/07aea35a767dd85a9e927df0fc4b3671174907e5))
-   **@clayui/shared:** fix error when losing focus in DropDown ([7f7a903](https://github.com/liferay/clay/commit/7f7a9033259b458c6ae6d999c45f2d6e8df4b7df))
-   **@clayui/shared:** fix navigation when focus trap ([3ecb858](https://github.com/liferay/clay/commit/3ecb85881703ca4a7072d55556db1e4d526521c3))
-   fix bug when scrolling page when navigating via arrow keys ([45092ec](https://github.com/liferay/clay/commit/45092ec26bf6ce6adefc5e53ab3e0d69330662fb))

### Features

-   **@clayui/alert:** adds possibility to remove alert attribute ([222e2ee](https://github.com/liferay/clay/commit/222e2eefceefb94d2071fce304929a8d97fc44e4))
-   **@clayui/css:** Cadmin Utilities adds 5 levels of gap utilities ([2ebeb50](https://github.com/liferay/clay/commit/2ebeb507cc933ac3a0600bf150541e697612ebd2))
-   **@clayui/css:** Utilities adds 5 levels of gap utilities ([c095efd](https://github.com/liferay/clay/commit/c095efd483d9bd37d6ed4a870f4ad1b5aedab767))
-   **@clayui/date-picker:** implements keyboard navigation to DatePicker ([c8b0a13](https://github.com/liferay/clay/commit/c8b0a13f62623ae080e5777760ad1296619eafe8))
-   **@clayui/shared:** add component to handle overlay for Clay components ([a911038](https://github.com/liferay/clay/commit/a91103851fe6aab734bf94649990b1a1eb5b9e3d))
-   **@clayui/shared:** add hook to handle overlay positioning ([d7427eb](https://github.com/liferay/clay/commit/d7427ebb99e5c3901a548428ac285c4fa603dbd2))
-   removes duplication of implementation of accessibility features for menu using Overlay component ([9d60eb9](https://github.com/liferay/clay/commit/9d60eb9670cb5dc9fc18e02e3a97f139f1db4cfd))

# [3.81.0](https://github.com/liferay/clay/compare/v3.80.1...v3.81.0) (2022-11-30)

### Bug Fixes

-   **@clayui/core:** fix bug not updating indexes when items move ([54100be](https://github.com/liferay/clay/commit/54100be5eddfff85dc76dd97982e4ecab1e5963b))
-   **@clayui/core:** fix error when moving items in tree view ([ab20a44](https://github.com/liferay/clay/commit/ab20a44c060cb3baaf660373824d0c2b0bfb766f))
-   **@clayui/core:** only expands the item if the intent to move is inside the item ([fd09e05](https://github.com/liferay/clay/commit/fd09e05ac400e456446797399900eaaee7f54e5a))
-   **@clayui/core:** when the item is expanded it only allows moving to middle and top ([7e30197](https://github.com/liferay/clay/commit/7e30197f44eab1e3685590b6a2ae259283fc219c))
-   **@clayui/css:** Cadmin replace improper clay-container with clay-css mixins ([841dc91](https://github.com/liferay/clay/commit/841dc91b3a60fcc1f42ccaf4e4835e0343bcedf4))
-   **@clayui/css:** Replace improper clay-container with clay-css mixins ([1ddf44b](https://github.com/liferay/clay/commit/1ddf44b91076ccbec9bc4d86eb6a0cc317d6fd1f))
-   **@clayui/drop-down:** close drilldown menu returns to initial state ([756e5f5](https://github.com/liferay/clay/commit/756e5f50328c4c071080524495767c3e82c658a8))
-   **@clayui/drop-down:** fix error add aria-hidden="true" in active Drilldown menu ([43d488f](https://github.com/liferay/clay/commit/43d488fa06250db62bd0ed4c967f1f9ff24bbe91))

### Features

-   **@clayui/button:** add warning when button with icon has not declared `aria-label` attribute ([cb23cd3](https://github.com/liferay/clay/commit/cb23cd3426255c3e551029a999de58e26e2fddae))
-   **@clayui/css:** Modularize most Clay CSS components ([e39673a](https://github.com/liferay/clay/commit/e39673aad55fe2e6a23c7f8e9d2265d27211512c))
-   **@clayui/drop-down:** adds API to set aria-label of Drilldown stuff ([9ea0b9b](https://github.com/liferay/clay/commit/9ea0b9b86ff68fa51dabb778598f493dc090a42c))
-   **@clayui/modal:** add `aria-modal` attribute to dialog ([e47fc57](https://github.com/liferay/clay/commit/e47fc57b961496ca3fca60b3f3fd5b7735def3a4))

## [3.80.1](https://github.com/liferay/clay/compare/v3.80.0...v3.80.1) (2022-11-22)

### Bug Fixes

-   **@clayui/drop-down:** moves focus to first focusable item when pressing down key on trigger ([bd1b114](https://github.com/liferay/clay/commit/bd1b114025870a2d5b95814d56b82b93fc5cdad9))
-   **@clayui/shared:** fixes error when stop typing in DropDown Search ([a6ea67b](https://github.com/liferay/clay/commit/a6ea67b5f5a0e251aa9cdfcdc6c22c1c1e8fb6e7))

# [3.80.0](https://github.com/liferay/clay/compare/v3.79.0...v3.80.0) (2022-11-21)

### Bug Fixes

-   **@clayui/date-picker:** Map id attribute to .form-control ([b53a81a](https://github.com/liferay/clay/commit/b53a81a98defdb248d5ad86739e766efc88e4dec))
-   **@clayui/drop-down:** adds keyboard navigation with looped arrow keys ([c919b22](https://github.com/liferay/clay/commit/c919b226a1f38750042856157f1b45f76306461c))
-   **@clayui/drop-down:** associates the contextual item with the menu and fixes assertive aria for SRs with contextual menu ([b62b7ba](https://github.com/liferay/clay/commit/b62b7ba93f4f566363a8c7666743594956625f35))
-   **@clayui/drop-down:** disable tabbing of Menu elements ([81c0b20](https://github.com/liferay/clay/commit/81c0b20452008e15f8c0184cdd1318bad7cab488))
-   **@clayui/drop-down:** fix keyboard navigation for context menu ([b44c7db](https://github.com/liferay/clay/commit/b44c7db37a53720860b832f12119d40f377a438b))
-   **@clayui/tooltip:** persist the title attribute when navigate via keyboard ([44fe7c4](https://github.com/liferay/clay/commit/44fe7c4113a0889a109f3d71435800468b9ab94a))

### Features

-   **@clayui/date-picker:** improves semantic accessibility for the component ([60a7f76](https://github.com/liferay/clay/commit/60a7f7616563faa15817b4daa3525bd842260ef3))
-   **@clayui/drop-down:** enable typeahead for menu ([6287f96](https://github.com/liferay/clay/commit/6287f9635e7deeb3973b42f8db4ca62ef7bed7d3))
-   **@clayui/shared:** Add typeahead function to list ([ce1347f](https://github.com/liferay/clay/commit/ce1347fa8dcaa90d2d09e507c357ba834468b75b))
-   **@clayui/time-picker:** Add id prop that sets id on `clay-time-hours` ([63a151b](https://github.com/liferay/clay/commit/63a151bb5168f776caf6bd22ac8edf1c207945e4))

### BREAKING CHANGES

-   **@clayui/date-picker:** The `id` attribute now maps to `.form-control`

# [3.79.0](https://github.com/liferay/clay/compare/v3.78.2...v3.79.0) (2022-11-08)

### Bug Fixes

-   **@clay/modal:** fix error of content outside the modal is still navigable with JAWS ([b20531e](https://github.com/liferay/clay/commit/b20531eacaf54d2e0cf403d93c1387f839d92682))
-   **@clayui/core:** fixes error of actions not being navigable via keyboard in TreeView ([7849603](https://github.com/liferay/clay/commit/78496033105b69431895623fbab4b898e40da8f9))
-   **@clayui/drop-down:** fix error when not properly rendering markup for simplified collection ([e0c4fcf](https://github.com/liferay/clay/commit/e0c4fcfd2ad1125e7de980a1be09c7d906b4c722))
-   **@clayui/nav:** fix bug when reversing `initialExpanded` state ([6fefa44](https://github.com/liferay/clay/commit/6fefa4490defbc3172eb5b163d472fd5b7094f84))
-   **@clayui/shared:** fix error when alternate is with old reference ([4ae7ffe](https://github.com/liferay/clay/commit/4ae7ffe444c34a54e0c513d76e26718339a495ea))
-   **@clayui/shared:** fixes error when trying to navigate by non-visible element using `useNavigation` hook ([2345873](https://github.com/liferay/clay/commit/2345873905150ccdd5ab48054a9affdb2890f2f8))
-   **@clayui/shared:** fixes flag to switch which fiber to use to find focusable elements ([a26fc70](https://github.com/liferay/clay/commit/a26fc70744b4c04fad28e66142401a6bead4b64f))
-   **@clayui/tabs:** add configurable tabIndex property to TabPane component ([b5b37ce](https://github.com/liferay/clay/commit/b5b37ce855c122db2aeddfd47afbe1ad4f301179))
-   **@clayui/tabs:** associate the panel label with the tab ([40dbdba](https://github.com/liferay/clay/commit/40dbdba6958ae0ca02440c9e524d34d279494ad4))
-   **@clayui/tabs:** fix error when trying to clone an invalid element ([26d0200](https://github.com/liferay/clay/commit/26d0200f9910fcc3102ca5d44a06a77f8b4cb798))
-   **@clayui/tooltip:** fixes error when not aligning the tooltip with focus in sequence of elements ([0d3e415](https://github.com/liferay/clay/commit/0d3e415746f33e62b7eb68e798c19c3ce5173b23))

### Features

-   **@clayui/color-picker:** Adds splotchTitle to pass custom title to the input group splotch ([56eec39](https://github.com/liferay/clay/commit/56eec39fe84245dc1378dd966d2c09131bd9a838))
-   **@clayui/core:** add accessibility improvements to VerticalBar ([eb76fcc](https://github.com/liferay/clay/commit/eb76fcc1c65c2aaf503fa0569e93fbfdcdc40ce9))
-   **@clayui/core:** add index data when moving item in TreeView ([0047d40](https://github.com/liferay/clay/commit/0047d408b1530275c71edc8063654c5d28248536))
-   **@clayui/core:** adds new `onItemHover` property to TreeView ([5f54076](https://github.com/liferay/clay/commit/5f54076a4cf422107907885bb8285b192de8d644))
-   **@clayui/drop-down:** add collection pattern ([2335ef2](https://github.com/liferay/clay/commit/2335ef28bb670a0ea145ddc2d8b2bd9ef68c9faa))
-   **@clayui/nav:** add accessibility to the Vertical Nav component ([7b4ddfe](https://github.com/liferay/clay/commit/7b4ddfeb462c2d2df4b606e97ce9a3d6e0b3d3a7))
-   **@clayui/nav:** adds keyboard interaction when moving through nested elements in VerticalNav ([626633c](https://github.com/liferay/clay/commit/626633c8af356bfa49b9228af7ef4a1226768cef))
-   **@clayui/shared:** adds new hook to handle navigation using arrow keys ([87b13a6](https://github.com/liferay/clay/commit/87b13a6f57922f233fa738bcee87cd1a7e704eae))
-   **@clayui/shared:** adds new hook to handle navigation using arrow keys ([77a6aab](https://github.com/liferay/clay/commit/77a6aab68a674363e4471d547f31782c383d9221))
-   **@clayui/tabs:** adds new compositing pattern ([c7fe61e](https://github.com/liferay/clay/commit/c7fe61e48f0b8dd23273467e40010973f7ecd7aa))

## [3.78.2](https://github.com/liferay/clay/compare/v3.78.1...v3.78.2) (2022-10-25)

### Bug Fixes

-   **@clayui/shared:** fix error when moving focus when reference is null ([bcc05cf](https://github.com/liferay/clay/commit/bcc05cf5d24ff2b6b7ba4e776e753f4bc1af06c9))

## [3.78.1](https://github.com/liferay/clay/compare/v3.78.0...v3.78.1) (2022-10-25)

### Bug Fixes

-   **@clayui/shared:** fix error when fiberNode may come null ([7aa0445](https://github.com/liferay/clay/commit/7aa044572f93189195a40abd5450ca0cd5451305))

# [3.78.0](https://github.com/liferay/clay/compare/v3.77.0...v3.78.0) (2022-10-25)

### Bug Fixes

-   **@clayui/css:** Cadmin Management and Navigation Bar only output media queries for md breakpoint ([617d696](https://github.com/liferay/clay/commit/617d696b2a6efe5739671e103e849dc6ac2777db))
-   **@clayui/css:** Mixin clay-navbar-expand-variant shouldn't style `.btn-unstyled` ([04615be](https://github.com/liferay/clay/commit/04615be71d48342bb2d4048e1cdc59f5201d2370))
-   **@clayui/drop-down:** fix error when esc open menu ([9ecc8e4](https://github.com/liferay/clay/commit/9ecc8e4acdebaa60f72ca3f13c22e138518d4540))
-   **@clayui/drop-down:** fix focus order error ([3062d5e](https://github.com/liferay/clay/commit/3062d5ed09292e187529749607f39f965ed71ae2))
-   **@clayui/shared:** fix error of not finding focused elements when React.Portal is under a conditional ([179cd7a](https://github.com/liferay/clay/commit/179cd7a523ebc5a4c96fcb0194e5c8873da6c367))
-   **@clayui/shared:** fixes error when identifying non-visible element as focusable ([82cc0f8](https://github.com/liferay/clay/commit/82cc0f8078810b4610f220d09792ee53f9fb3da8))
-   **clayui.com:** Github link accessibility fixe ([90e380c](https://github.com/liferay/clay/commit/90e380c43866fca915b754acda440fb4f8174c27))

### Features

-   **@clayui/css:** Mixins `clay-navbar-size` don't output media-query styles ([7ddcb52](https://github.com/liferay/clay/commit/7ddcb52498d865c4e6003c47a7c91e19dba782a6))
-   **@clayui/shared:** add hook to detect user interaction type ([a20e236](https://github.com/liferay/clay/commit/a20e23638e28d27da18d8d140ebb38818595f129))
-   **@clayui/tabs:** add new API to configure browsing behavior between tabs ([30595be](https://github.com/liferay/clay/commit/30595bed1d5ec2de1a7d3d1759d6a2398c904c76))

# [3.77.0](https://github.com/liferay/clay/compare/v3.76.0...v3.77.0) (2022-10-17)

### Bug Fixes

-   **@clayui/data-provider:** fix error when grouping data in refetch ([64cfa70](https://github.com/liferay/clay/commit/64cfa7071e07ca71d540664b36ff19b333b35054))
-   **@clayui/data-provider:** reset cursor when refetch without cache policy ([98e2ce3](https://github.com/liferay/clay/commit/98e2ce3fcc72486352ef97df3a2cdcb719cc1e1c))
-   **@clayui/tabs:** sets `tabIndex=-1` when not active and `tabIndex=0` for the tabpanel ([cbd8710](https://github.com/liferay/clay/commit/cbd8710491b4262000b0af43244977351429228b))
-   **clayui.com:** General accessibility fixes ([df18552](https://github.com/liferay/clay/commit/df185521ee55c0a398e9acef2f0ec22e5616e1ba))

### Features

-   **@clayui/autocomplete:** add the Collection pattern and loading state ([ab44b4a](https://github.com/liferay/clay/commit/ab44b4affed2202020d3b8b75124e423e9668f7e))
-   **@clayui/autocomplete:** adds support for paginated data integrated with the `useResource` hook ([cfb35c1](https://github.com/liferay/clay/commit/cfb35c17f311e75c6aee06250953abfdfd422bc3))
-   **@clayui/data-provider:** add `useResource` controlled AbortController ([146f53b](https://github.com/liferay/clay/commit/146f53b51bcd5dbb1a48a1ae9e573e6c4424a971))
-   **@clayui/drop-down:** add `forwardRef` to ItemList ([9143196](https://github.com/liferay/clay/commit/9143196bfc0340e3316b5b1997c395a676034d60))
-   **@clayui/drop-down:** move style prop to Item container ([4bc2fd4](https://github.com/liferay/clay/commit/4bc2fd47c38c17b655c590a2d0c269ccefcad8ff))

# [3.76.0](https://github.com/liferay/clay/compare/v3.75.3...v3.76.0) (2022-10-11)

### Bug Fixes

-   **@clayui/core:** fix reference error when loading more items and expand ([b61697c](https://github.com/liferay/clay/commit/b61697cc1343bbadc8f59d6797c95a8e0ebc0c4b))
-   **@clayui/css:** Cadmin convert properties that use button focus, disabled, and transition variables ([2115b66](https://github.com/liferay/clay/commit/2115b66ed8ee09ea3ee1339c8606d09230719d3c))
-   **@clayui/css:** Cadmin Links `.component-action` and `.link-outline` should have focus shadow ([d646ef1](https://github.com/liferay/clay/commit/d646ef15e2ff5d18f7c440df14699a3a0c20e769))
-   **@clayui/css:** Global Functions speed up `map-deep-get` ([51123e9](https://github.com/liferay/clay/commit/51123e967940ee2563470258ed87662411cdf306))
-   **@clayui/css:** Links `.component-action` and `.link-outline` should have focus shadow ([4cd0681](https://github.com/liferay/clay/commit/4cd0681303b0322258d42faaa20717a53999a83f))
-   **@clayui/css:** Mixins check if parameter is map to avoid Sass error ([0441281](https://github.com/liferay/clay/commit/0441281a84763f14e53bd5d24f1cd2fa8a5464bf))
-   **clayui.com:** fix search error on blog page ([baaa977](https://github.com/liferay/clay/commit/baaa977cbd8b9122180dc990bc1e549207daaa1d))

### Features

-   **@clayui/core:** add `expandable` API public to TreeView ([28f762d](https://github.com/liferay/clay/commit/28f762d7d7fd93771c487bd07fc67f158169e28b))
-   **@clayui/core:** add possibility to specify item name key ([e74d9df](https://github.com/liferay/clay/commit/e74d9df0eedacedfd43c1624073dcb1751808529))
-   **@clayui/core:** add possibility to specify that an item has children, so caret is shown even if children haven't loaded ([4868084](https://github.com/liferay/clay/commit/4868084503c1685c5067a445d4c802c2fa64a970))
-   **@clayui/core:** adds API to set heading fontSize independent of tag ([b8554ee](https://github.com/liferay/clay/commit/b8554ee91c7659d9fd340f317e56b12163fad113))
-   **@clayui/core:** adds support for `onItemMove` to decide if item should be droppable ([0f034ed](https://github.com/liferay/clay/commit/0f034ed1621ececa780fa812fc8bd161c643f42d))
-   **@clayui/core:** adds support for disabling drag and drop of a specific item from TreeView ([4258fc4](https://github.com/liferay/clay/commit/4258fc4b7ab4671fbfe68a203c44e8332ef744e8))
-   **@clayui/core:** prevent drag preview to be shown in other drag and drop contexts ([8e1e915](https://github.com/liferay/clay/commit/8e1e9153e2bcd83fc6d4b39301fa1d89838e324a))
-   **@clayui/css:** Cadmin Globals adds transition and disabled opacity component variables for easier reuse ([107d19a](https://github.com/liferay/clay/commit/107d19a7f268913247cbf80cdefa70080532637e))
-   **@clayui/css:** Decouple button variables from other components ([f0f357d](https://github.com/liferay/clay/commit/f0f357d83024f45baa7e3a5e05a75e127996c25b))
-   **@clayui/css:** Globals adds transition and disabled opacity component variables for easier reuse ([33e7cef](https://github.com/liferay/clay/commit/33e7cef87593dc9ff243515071b4f4d32c83c3ed))

## [3.75.3](https://github.com/liferay/clay/compare/v3.75.2...v3.75.3) (2022-09-29)

### Bug Fixes

-   **@clayui/autocomplete:** changes the way to identify the new behavior ([037b17c](https://github.com/liferay/clay/commit/037b17c8debd56420f9af873203ddb2847067f7a))

## [3.75.2](https://github.com/liferay/clay/compare/v3.75.1...v3.75.2) (2022-09-29)

### Bug Fixes

-   **@clayui/autocomplete:** fix of switching the owner of otherProps on Autocomplete ([d5ced5e](https://github.com/liferay/clay/commit/d5ced5e6d85266e25f7955249fedf904fb46de66))
-   **@clayui/shared:** fix bug of not doing forwardRef when `ref` is a function ([8601622](https://github.com/liferay/clay/commit/8601622a542ea5029dc96df17d6a6d1711cf8753))

## [3.75.1](https://github.com/liferay/clay/compare/v3.75.0...v3.75.1) (2022-09-28)

### Bug Fixes

-   **@clayui/core:** fixes error of duplicating element rendering in TreeView ([f242a1e](https://github.com/liferay/clay/commit/f242a1ed0fe07edf781b20578c6cc255c8694eb0))

# [3.75.0](https://github.com/liferay/clay/compare/v3.74.0...v3.75.0) (2022-09-28)

### Bug Fixes

-   **@clayui/autocomplete:** fix error when moving focus when pressing alt + arrowdown ([b260984](https://github.com/liferay/clay/commit/b260984484f25617d2f3010ce5b8211e2075ff0f))
-   **@clayui/shared:** fix bug of getting focused elements in document in menus ([5cce01c](https://github.com/liferay/clay/commit/5cce01c92c30fe1f7d5175208e13e5fdfbafc4ca))

### Features

-   **@clayui/autocomplete:** adds accessibility to new autocomplete behavior ([f2ad617](https://github.com/liferay/clay/commit/f2ad617f8f19ad15630f8fd7afd83a126a241e4c))
-   **@clayui/autocomplete:** adds new less verbose composition with more OOTB features ([37e9e89](https://github.com/liferay/clay/commit/37e9e8977fa3b741b0619ba41607beaa97d0d976))
-   **@clayui/autocomplete:** deprecated the `onSetActive` API and replaced it with `onActiveChange` ([9ad5bcb](https://github.com/liferay/clay/commit/9ad5bcb72f057909bdac83789bb4e96a2dd28aff))
-   **@clayui/core:** add paginated data support ([1c3e3d8](https://github.com/liferay/clay/commit/1c3e3d86014c19217e0d64f86a426bcfb63108b7))
-   **@clayui/core:** add single cursor per item ([b5b3bb3](https://github.com/liferay/clay/commit/b5b3bb327721c68b03cdb2de9f5433c8c64a34ec))
-   **@clayui/core:** adds the possibility to render non-Clay elements inside the TreeView.Item ([01dcf32](https://github.com/liferay/clay/commit/01dcf32da8c5a10e7c876f951ecc128c7f8ecc7b))
-   **@clayui/css:** Functions `map-deep-merge` shouldn't merge maps if `merge: false` ([2e68bfe](https://github.com/liferay/clay/commit/2e68bfe6833421c999fbd8ee2b596ae697e13756))
-   **@clayui/css:** SVG Icons updates mobile icons ([13c4e21](https://github.com/liferay/clay/commit/13c4e211f59be74d9ffb19fc7a95ddcaf4abe6d9))

# [3.74.0](https://github.com/liferay/clay/compare/v3.73.0...v3.74.0) (2022-09-19)

### Bug Fixes

-   **@clayui/core:** fix error of TreeView actions not disappearing ([33ff8ac](https://github.com/liferay/clay/commit/33ff8ac9b67fd178f92474cb6c1ebf65194780af))
-   **@clayui/css:** Atlas Unchecked Disabled Custom Checkbox should have border color secondary-l3 ([23e09ae](https://github.com/liferay/clay/commit/23e09aed83af656abe61bc5bad841b06b09b8d53))
-   **@clayui/css:** Cadmin Tables removes table row variants, these are unused in admin ([a12d65c](https://github.com/liferay/clay/commit/a12d65c40044dc5a2f4c1de81561f9ee8ee8ebaa))
-   **@clayui/css:** Tables table row variants should style the background ([45024a2](https://github.com/liferay/clay/commit/45024a2a8499c97c3561ce0ab5005c5c006c1479))

### Features

-   **@clayui/css:** Base, Atlas, Cadmin Custom Checkbox adds readonly disabled styles ([39c6ad0](https://github.com/liferay/clay/commit/39c6ad0a5acefe5c337c0fd3d531ca33bc03f903))
-   **@clayui/css:** Cadmin Custom Checkbox adds readonly styles ([3ec6b85](https://github.com/liferay/clay/commit/3ec6b85cffc57a64c3ea36c091fb01e46517e109))
-   **@clayui/css:** Custom Checkbox adds readonly styles ([e7481e7](https://github.com/liferay/clay/commit/e7481e79c9907723664b23dd8a9d8f6a17b6144f))
-   **@clayui/css:** Mixins `clay-custom-control-input-variant` adds option to configure readonly ([302bd13](https://github.com/liferay/clay/commit/302bd132f0b77637985f9a0ff92175c1b5e2d45d))
-   **@clayui/css:** Mixins `clay-custom-control-input-variant` adds option to configure readonly disabled ([2e80a2d](https://github.com/liferay/clay/commit/2e80a2dc15b6161e34933215a8ffd1cb22d35058))
-   **@clayui/form:** add `aria-disabled` when `readOnly` is enabled in the checkbox ([003a6a3](https://github.com/liferay/clay/commit/003a6a3335fbd39d20b25e23f33b518201fe3a66))

# [3.73.0](https://github.com/liferay/clay/compare/v3.72.0...v3.73.0) (2022-09-13)

### Bug Fixes

-   **@clayui/button:** Storybook adds rounded and shape ([cffacb1](https://github.com/liferay/clay/commit/cffacb18a425af50fe635e94edd9276fdc279b39))
-   **@clayui/css:** Cadmin Buttons use transparent border for solid buttons ([8357269](https://github.com/liferay/clay/commit/83572697500a621f18b1e4a1adc9fc78a922d9d9))
-   **@clayui/css:** Functions `clay-get-fallback()` should return custom property if no fallback value ([242216a](https://github.com/liferay/clay/commit/242216ae188a2d59db950e00dd0daa27d05d57c1))
-   **@clayui/data-provider:** fixes error when not activating suspense ([a563a87](https://github.com/liferay/clay/commit/a563a872ffdaa9d825ba796ee2e99bb8c625b917))
-   **@clayui/drop-down:** fix error when not focusing on first item of DropDown ([bc03292](https://github.com/liferay/clay/commit/bc032921d261545d70577eab2ac24fa662959cfb))

### Features

-   **@clayui/button:** Adds rounded and size attributes to output pill and different size buttons ([7ce56ff](https://github.com/liferay/clay/commit/7ce56ffe80890fea318e82245770d3403ded586d))
-   **@clayui/css:** Buttons adds a 24px tall button, `btn-xs` ([fadeb3a](https://github.com/liferay/clay/commit/fadeb3ad559ea5c82892c2ca88e8f5a7ae752dd4))
-   **@clayui/css:** Cadmin Buttons adds a 24px tall button, `btn-xs` ([06f56f6](https://github.com/liferay/clay/commit/06f56f609d98c9847e71019ced9ae7ec93b62d55))
-   **@clayui/css:** SVG Icons adds Argentina, Mexico, and Columbia flags ([8d5a33c](https://github.com/liferay/clay/commit/8d5a33c5690286d1fdb4f4831172f969eea4d69b))
-   **clayui.com:** Add aria changes and improve compatibility ([1b1bab0](https://github.com/liferay/clay/commit/1b1bab00f0ce704f35a62658b7fbd63f8016a88b))
-   **clayui.com:** Add JS key shortcut for linux and windows ([25fe337](https://github.com/liferay/clay/commit/25fe33721673a6b6fd6360d7dbd6fc19fd3f77f0))
-   **clayui.com:** Add key shortcut keys by platform type and hiding it in mobile ([e6a5561](https://github.com/liferay/clay/commit/e6a5561e71fce1ed736dae4a591e0153aa26eb7e))

# [3.72.0](https://github.com/liferay/clay/compare/v3.71.0...v3.72.0) (2022-09-05)

### Bug Fixes

-   **@clayui/drop-down:** fixes error when not moving focus to element in menu when renderMenuOnClick property is set ([2daac65](https://github.com/liferay/clay/commit/2daac65928b9f9d4c9503bc7ba1163173b530ff5))

### Features

-   **@clayui/data-provider:** improves the creation of the unique identifier of the request ([c9e753c](https://github.com/liferay/clay/commit/c9e753c0a8531afd7a275b474c295bf86ec1cf61))
-   **clayui.com:** Add Accessibility bar links ([213c0ff](https://github.com/liferay/clay/commit/213c0ff0cb70a5e2a6cb6324933b3ae4857932e4))
-   **clayui.com:** Add accesskey K for search ([7175a5e](https://github.com/liferay/clay/commit/7175a5e66fe77691e812e29f90d1f8d1abae2b41))
-   **clayui.com:** Add aria-keyshortcuts ([ace856f](https://github.com/liferay/clay/commit/ace856ff64607a9d8cdde81411580cad7919bc77))

# [3.71.0](https://github.com/liferay/clay/compare/v3.70.3...v3.71.0) (2022-08-30)

### Features

-   **@clayui/data-provider:** instantiates the DataClient locally if the Provider is not declared ([536dd34](https://github.com/liferay/clay/commit/536dd345759c88181dea19f59a71da3655d6f64a))

## [3.70.3](https://github.com/liferay/clay/compare/v3.70.2...v3.70.3) (2022-08-30)

### Bug Fixes

-   **@clayui/shared:** fix error when checking a fiber element in progress in focus management ([b4484e0](https://github.com/liferay/clay/commit/b4484e03814740e25f95291ce79963d8b014fab8))

## [3.70.2](https://github.com/liferay/clay/compare/v3.70.1...v3.70.2) (2022-08-30)

### Bug Fixes

-   **@clayui/data-provider:** fixes error of not retrieving initial cache value when there are multiple instances for the same endpoint ([9a37620](https://github.com/liferay/clay/commit/9a376200153cdbd2dd4e61339dae3b9ac282443a))
-   **@clayui/provider:** stabilizes the DataClient reference ([319bff8](https://github.com/liferay/clay/commit/319bff8a771a847eb53d399090065f197670d46b))

## [3.70.1](https://github.com/liferay/clay/compare/v3.70.0...v3.70.1) (2022-08-24)

**Note:** Version bump only for package clay

# [3.70.0](https://github.com/liferay/clay/compare/v3.69.0...v3.70.0) (2022-08-23)

### Bug Fixes

-   **@clayui/css:** Buttons palette maps should output the selector `.btn` when using the key `btn` ([306dfa4](https://github.com/liferay/clay/commit/306dfa4b41805a8edcb477c11d4d5833cd2b1af1))
-   **@clayui/css:** Menubar (Vertical Nav) update hover, focus, active colors to match Lexicon ([5a74890](https://github.com/liferay/clay/commit/5a7489085eaca4aad6ef07ea22671195f6192c94))
-   **@clayui/css:** Mixins `clay-button-variant` add option to pass styles to `:focus:hover` ([b3a766d](https://github.com/liferay/clay/commit/b3a766db561c1f4d4f095c144d3a5056a6f2dfd0))
-   **@clayui/data-provider:** fix the tests ([71672be](https://github.com/liferay/clay/commit/71672bebe69e3dd62d005398b015e8422dade399))

### Features

-   **@clayui/core:** Add list virtualization pattern in collection ([cd3d101](https://github.com/liferay/clay/commit/cd3d1015f134c64dd7445e16949f678215ac7b31))
-   **@clayui/core:** adds virtualization support to VerticalBar.Bar ([de5679e](https://github.com/liferay/clay/commit/de5679ef7a2f1e0dfe7afb06d8400b53e211d3d5))
-   **@clayui/data-provider:** adds functionality to load paginated data ([b2acb27](https://github.com/liferay/clay/commit/b2acb2729939cbb7e23621987a9b95b4d4004bd4))
-   **@clayui/data-provider:** adds integration with React.Suspense and ErrorBoundary ([0c604fe](https://github.com/liferay/clay/commit/0c604fe9126133eab54423dba99962bb97e566e4))
-   **@clayui/provider:** add client initialization to `useResource` hook ([ee5a8a8](https://github.com/liferay/clay/commit/ee5a8a8661a12cd1c0f91c0b129c1b1da8f8c2f1))
-   **clayui.com:** improves the readability of descriptions in the API table and the style ([6fe889d](https://github.com/liferay/clay/commit/6fe889da77235b1cda485dafa6e7e9e9fcdf2799))

# [3.69.0](https://github.com/liferay/clay/compare/v3.68.0...v3.69.0) (2022-08-16)

### Bug Fixes

-   **@clayui/css:** Buttons `$btn-palette` and `$btn-outline-palette` should support keys prefixed with `btn-` ([3de823e](https://github.com/liferay/clay/commit/3de823e70a02b1f3d916220add4566e946824163))
-   **@clayui/css:** Cadmin Buttons btn-monospaced icons should be centered ([7042cf0](https://github.com/liferay/clay/commit/7042cf0fecd92d6360e71b39d8a855fcf934ca6c))
-   **@clayui/css:** Mixins `clay-css` should accept `c-unset` as a value to reset a property ([a4fb956](https://github.com/liferay/clay/commit/a4fb95672fdfd7eae1538b3be40786aa60b9626f))
-   **@clayui/css:** Use `c-unset` instead of `$c-unset` to reset property values ([09fbde1](https://github.com/liferay/clay/commit/09fbde1a6a9d9cb6346cc5ab350940c31afe38e5))
-   **@clayui/drop-down:** Improves group semantics for DropDown ([7d0e1b7](https://github.com/liferay/clay/commit/7d0e1b716f8217c3b4d0437a22e6e9dff3eeffcb))
-   **@clayui/tooltip): Revert "fix(@clayui/tooltip:** adds the option to disappear the floating tooltip after a while" ([43b64b9](https://github.com/liferay/clay/commit/43b64b9e0ca7b503b022f69f2aa710dd51770114))
-   **@clayui/tooltip:** adds the option to disappear the floating tooltip after a while ([7438e62](https://github.com/liferay/clay/commit/7438e62797131336b6547ffd986ff977c7a59d0d))
-   **@clayui/tooltip:** remove the behavior of moving the tooltip when the mouse moves ([51585ff](https://github.com/liferay/clay/commit/51585ffb16fe0dea68086ed9c320db381d788215))

### Features

-   **@clayui/drop-down:** adds option to open menu when pressing ArrowDown and Spacebar ([c72a181](https://github.com/liferay/clay/commit/c72a181dec53e3bd234bf18a191a486586d7f9f1))
-   **@clayui/drop-down:** enable move cursor using left and right arrow keys ([9006b62](https://github.com/liferay/clay/commit/9006b6281115a9a3a9b434b6e90288b048495df1))
-   **@clayui/drop-down:** improves accessibility for virtual cursor ([83bdcb8](https://github.com/liferay/clay/commit/83bdcb879100dfbc68f71c048ecd214471fff0bc))

# [3.68.0](https://github.com/liferay/clay/compare/v3.67.0...v3.68.0) (2022-08-01)

### Bug Fixes

-   **@clayui/css:** Atlas and Cadmin dropdown-item should have 16px left and right padding ([77cd63b](https://github.com/liferay/clay/commit/77cd63b738da9fac1eff52ab930a9aacbfc8cf6e))
-   **@clayui/css:** Cadmin `<label>` element should have `position: static` ([f11bac0](https://github.com/liferay/clay/commit/f11bac0ad8c79e779b185131936185d97710f0a2))
-   **@clayui/css:** Cadmin use calc() instead of Sass math so we can handle mixed units better ([253cf28](https://github.com/liferay/clay/commit/253cf28fb7a6ed3d64deadc664267ed5a092c152))
-   **@clayui/css:** Dropdown use calc() instead of Sass math to calculate padding for dropdown-item-indicator ([fd8cad0](https://github.com/liferay/clay/commit/fd8cad0dfaa6a38a393f75768250b0a9415dee5f))
-   **@clayui/css:** Use calc() instead of Sass math so we can handle mixed units better ([4e4bd51](https://github.com/liferay/clay/commit/4e4bd512973b58ed811644f317fca39ff1718fb1))
-   **@clayui/drop-down:** avoid adding focus event when drop down is closed ([5e68f54](https://github.com/liferay/clay/commit/5e68f54494efce03e1f42c85552fbf39afe0634a))
-   **@clayui/drop-down:** move focus to button when closing dropdown ([fde657e](https://github.com/liferay/clay/commit/fde657eba339e7514766bdb4a4e901ab106364ac))

### Features

-   **@clayui/drop-down:** Adds the new API in DropDown to close the dropdown when clicking on the item ([6e4e133](https://github.com/liferay/clay/commit/6e4e1331328c90d83efdd5f8d9208ebbcef3b8e7))

# [3.67.0](https://github.com/liferay/clay/compare/v3.66.0...v3.67.0) (2022-07-25)

### Bug Fixes

-   **@clayui/navigation-bar:** set aria-current based off of the status of active ([81bcc8f](https://github.com/liferay/clay/commit/81bcc8fb2e6578e4656da520666f85b25884e2f5))
-   **@clayui/navigation-bar:** set it to 'page', not just 'true' ([80bf118](https://github.com/liferay/clay/commit/80bf11806e2a455daf4c15daacd4a6de19b69ca1))

### Features

-   **@clayui/tooltip:** adds new properties to configure the tooltip to be floating ([c598ca3](https://github.com/liferay/clay/commit/c598ca335b96cafe01848fabdf020135126c9ff9))

# [3.66.0](https://github.com/liferay/clay/compare/v3.65.2...v3.66.0) (2022-07-20)

### Features

-   **@clayui/drop-down:** add new `roleItem` property to set item role ([de82351](https://github.com/liferay/clay/commit/de823511b861a5022e7cc902de043211d5180ede))

## [3.65.2](https://github.com/liferay/clay/compare/v3.65.1...v3.65.2) (2022-07-19)

### Bug Fixes

-   **@clayui.css:** Removes uses of unnecessary setter functions ([67646f1](https://github.com/liferay/clay/commit/67646f1aedc96657c8ac381ba74d34ee6071fccb))
-   **@clayui/autocomplete:** fix error of `alignment By Viewport` not positioning properly ([4ea771b](https://github.com/liferay/clay/commit/4ea771b2726a0ba469edca4d0e7548cbeb74d01e))
-   **@clayui/drop-down:** fixes error when losing focus using arrow keys in Drilldown and improves accessibility ([15aeddf](https://github.com/liferay/clay/commit/15aeddf99aff6799639ecdb4aaecad966cb9ae3e))
-   **@clayui/drop-down:** improve the accessibility of `DropDownWithItems` ([68eec9e](https://github.com/liferay/clay/commit/68eec9e2f2adb338b87d06d810f01126ca266d10))
-   **@clayui/drop-down:** improves DropDown accessibility ([e420a85](https://github.com/liferay/clay/commit/e420a850f657c027a34c79ee8e13a21df1bce0eb))

## [3.65.1](https://github.com/liferay/clay/compare/v3.65.0...v3.65.1) (2022-07-11)

**Note:** Version bump only for package clay

# [3.65.0](https://github.com/liferay/clay/compare/v3.64.0...v3.65.0) (2022-07-11)

### Bug Fixes

-   **@clayui/alert:** Simplifying ([cac8e75](https://github.com/liferay/clay/commit/cac8e75fdea31a16b09835b02a88eb2610ce5feb))
-   **@clayui/alert:** Unset flex property for feedback variant ([0450de5](https://github.com/liferay/clay/commit/0450de5459e33da9957983b481d0fb0016f5f4ea))
-   **@clayui/alert:** Use default line height for alert icon ([31a2911](https://github.com/liferay/clay/commit/31a2911f1331b04f93d6d1a987cce5c1a7dbdfbe))
-   **@clayui/alert:** Use flex baseline for alert icon ([9d6b75a](https://github.com/liferay/clay/commit/9d6b75ae7c0a27f983b760321d03fdd257c46d52))
-   **@clayui/css:** (cadmin) fix indicator alignment in alert ([029865a](https://github.com/liferay/clay/commit/029865a5af7303cb981c4f9ff55a4c965370ad69))
-   **@clayui/css:** Add option to generate placeholders separately in component variant maps ([b638999](https://github.com/liferay/clay/commit/b6389997ffc04c494a63e1a512417429261d66b5))
-   **@clayui/css:** Alert Indicator SF and adjust alignment in base theme ([6d7efa3](https://github.com/liferay/clay/commit/6d7efa37fbc6a74c2a731eb8f26907c98ea9139d))
-   **@clayui/css:** Cadmin add option to generate placeholders separately in component variant maps ([30612d9](https://github.com/liferay/clay/commit/30612d9a54eff023b153754d0254fa012ff95754))
-   **@clayui/css:** Form Validation disables validation icons ([f0b2daf](https://github.com/liferay/clay/commit/f0b2daf0f33d1cca989bbc67e8e807b3900dab66))
-   **@clayui/css:** Utilities update inline-scroller focus ring ([50e3800](https://github.com/liferay/clay/commit/50e380031b083993b3e74d6569bb1ee20e2df462))
-   **@clayui/drop-down:** Pass role as a parameter to items in dropdown ([a5cfd72](https://github.com/liferay/clay/commit/a5cfd72608beddc0b0d29ab3d44163f57b5d9a01))
-   **@clayui/tooltip:** adds the possibility to hover over the tooltip ([8b9b256](https://github.com/liferay/clay/commit/8b9b256db39be0a8f7708648946cec6faeb92bb1))
-   **clayui.com:** fix clipboard error in examples ([3ad788b](https://github.com/liferay/clay/commit/3ad788b5ae3a34ae1375097c371b58e629d3490c))

### Features

-   **@clayui/core:** adds new `onItemMove` API ([3815731](https://github.com/liferay/clay/commit/3815731dbf304923970802176c56342a563c6194))
-   **@clayui/css:** Mixins `clay-css` adds option to output a Sass `[@extend](https://github.com/extend)` with the `extend` key ([eb6206b](https://github.com/liferay/clay/commit/eb6206bef95012513c2077ad1015ce8ddc9321d8))

# [3.64.0](https://github.com/liferay/clay/compare/v3.63.0...v3.64.0) (2022-07-04)

### Bug Fixes

-   **@clayui/css:** Cadmin Multi Select form text should have the same spacing as it's form-control counter part ([3728ff9](https://github.com/liferay/clay/commit/3728ff95bc491254a0b81751e2e388b15b5576a7))
-   **@clayui/css:** Multi Select form text should have the same spacing as it's form-control counter part ([80d1ebd](https://github.com/liferay/clay/commit/80d1ebd438a216130c951b92be23504f054cd112))

### Features

-   **@clayui/core:** add new `noHover` property to remove item hover ([cf52960](https://github.com/liferay/clay/commit/cf52960b79272fa90702854d05e0f3eb48c87494))
-   **@clayui/core:** adds new `active` property to TreeView.Item ([9c3cc1c](https://github.com/liferay/clay/commit/9c3cc1ceb7b874f963f23eab0cb621ffa87265bd))
-   **@clayui/core:** adds new API to control node expand state in TreeView ([216fc36](https://github.com/liferay/clay/commit/216fc36524b2d01bd61d4a3a7e7e9c34ad094ffc))
-   **@clayui/css:** (cadmin) add support class to remove hover from treeview link ([53bd134](https://github.com/liferay/clay/commit/53bd1347b7b5b89f9934875487fdfcc511c995f7))
-   **@clayui/css:** add new `hierarchy` icon ([b66c092](https://github.com/liferay/clay/commit/b66c092665ae6d06bb4f59e2bbf8526c74847b80))
-   **@clayui/css:** add support class to remove hover from treeview link ([a41c831](https://github.com/liferay/clay/commit/a41c83122690a1fb229fb3e89f8e65c9d89498b5))
-   **@clayui/drop-down:** Allow setting a default selected value for the radiogroup ([f159071](https://github.com/liferay/clay/commit/f159071adaf2b092152f6c35392dae9387be5797))

# [3.63.0](https://github.com/liferay/clay/compare/v3.62.0...v3.63.0) (2022-06-27)

### Bug Fixes

-   **@clayui/css:** fix syntax error in conditional declaration ([3d19936](https://github.com/liferay/clay/commit/3d199365de3eed8decf2b48301abbde89dc308a9))
-   **@clayui/css:** Grid compare the breakpoint positions instead of the `$cadmin-container-max-widths` values ([1e0782c](https://github.com/liferay/clay/commit/1e0782c475aea4b837d1dea952fcb1026889934b))
-   **@clayui/css:** Grid compare the breakpoint positions instead of the `$container-max-widths` values ([89aaeee](https://github.com/liferay/clay/commit/89aaeee54c42b2a4a4236cafa3fa83e47941b164))
-   **@clayui/css:** Loaders and Cadmin Loaders don't generate placeholders for `$loading-animation-palette` ([d762f00](https://github.com/liferay/clay/commit/d762f0064fb46b7b43b0adc308b92002ddf470f4))

### Features

-   **@clayui/css:** SVG Icons adds no-bot.svg ([94b69f0](https://github.com/liferay/clay/commit/94b69f0d46c330a2a078bdb17e04020fcab3d737))

# [3.62.0](https://github.com/liferay/clay/compare/v3.61.0...v3.62.0) (2022-06-20)

### Bug Fixes

-   **@clayui/css:** Cadmin Clay Multi Select should have small size ([e256838](https://github.com/liferay/clay/commit/e256838046b41f885ab0b7f70afd4b58582d8314))
-   **@clayui/css:** Cadmin Reference Mark vertical alignment when it is used directly on the icon ([f530f47](https://github.com/liferay/clay/commit/f530f478133ac9548e94ebcf499ec4dc064bd202))
-   **@clayui/css:** Clay Multi Select should have small size ([818621f](https://github.com/liferay/clay/commit/818621fa0a5abf68abfcc2af8b07bd4b9d6eec04))
-   **@clayui/css:** Global Functions add fallback value for $cadmin variables ([a12777a](https://github.com/liferay/clay/commit/a12777a399d619cd205a7f73caabe02eec70798b)), closes [#4925](https://github.com/liferay/clay/issues/4925)
-   **@clayui/css:** Mixins `clay-button-variant` directly use `clay-unset-placeholder` to clear `[@extend](https://github.com/extend)` ([dcd3999](https://github.com/liferay/clay/commit/dcd39997a5f63ba476d0a66e9089c447e546a35e))
-   **@clayui/css:** Reference Mark vertical alignment when it is used directly on the icon ([e014a8c](https://github.com/liferay/clay/commit/e014a8c6e49fcb90916a3b3a412e30ae02636054))
-   **@clayui/drop-down:** fix bug of calling setActive method when the menu is invisible ([1e3efcf](https://github.com/liferay/clay/commit/1e3efcfcd126f44c0f98547fe9416801d9da5641))
-   **@clayui/multi-select:** Adds small example to storybook ([8bdf156](https://github.com/liferay/clay/commit/8bdf1562cc0d4b25625fc11f720b6c46cbf74c70))
-   **@clayui/multi-select:** fix error when you have a ref declared it is not possible to delete the label by pressing backspace ([685588c](https://github.com/liferay/clay/commit/685588cfabaa3f07503ac123bf8333bc23254c3c))

### Features

-   **@clayui/autocomplete:** Support menu alignment by Viewport ([1409c4b](https://github.com/liferay/clay/commit/1409c4b8d22073e642e12f951ebdcb76c9474669))
-   **@clayui/css:** Global Functions provide default grid breakpoints map for breakpoint functions ([66ad9e1](https://github.com/liferay/clay/commit/66ad9e19d9b966c0058385e76b2b61f64e025af0))
-   **@clayui/css:** Mixins clay-form-control-variant adds more configuration items ([6689c99](https://github.com/liferay/clay/commit/6689c996609585c6ae2e93791cfbbee5edbf4a37))
-   **@clayui/css:** Mixins clay-input-group-item-variant moved .label to clay-form-control-variant ([2a22cf3](https://github.com/liferay/clay/commit/2a22cf3ee22b6c1ef0bc6684f731c3ace5090ef8))
-   **@clayui/css:** Mixins provide a default value if cadmin variables don't exist ([11e026b](https://github.com/liferay/clay/commit/11e026bf34ad9db4a166a7b2fd7ae671c285afc3))

### Reverts

-   Revert "feat(@clayui/css): Global Functions `math-sign` adds warning message if type isn't supported" ([8026ce5](https://github.com/liferay/clay/commit/8026ce5940aca8fe3d71b859a0d3e84b8b2841f7))

# [3.61.0](https://github.com/liferay/clay/compare/v3.60.1...v3.61.0) (2022-06-13)

### Bug Fixes

-   **@clayui/color-picker:** fix error when `onBlur` method is declared but not called ([fd72c5b](https://github.com/liferay/clay/commit/fd72c5b7de270f725f9493ecb7e2ccb4ccd49473))
-   **@clayui/core:** fixes error when there is no box-shadow in the panel when position the VerticalBar on the left side ([9121847](https://github.com/liferay/clay/commit/91218470d9b1600953c06b68e390af71f3dacfe5))
-   **@clayui/css:** .sidebar-light box shadows should be positioned correctly ([d41e77a](https://github.com/liferay/clay/commit/d41e77a33022a521e0917bc93a9244908909efe9))
-   **@clayui/css:** Cadmin Sidebar adds sidebar-dark-l2 variant ([c79e226](https://github.com/liferay/clay/commit/c79e226b8718825e5a7be676c9672cd51bac0a55))
-   **@clayui/css:** fix error of loading indicator create scroll when the parent is over cadmin ([9d562fe](https://github.com/liferay/clay/commit/9d562fe88aaaaecca10ec84a949304247ea18d84))
-   **@clayui/css:** Global Variables remove math function parenthesis from $spacers ([d2ea301](https://github.com/liferay/clay/commit/d2ea3015ea536b4f67529d4d0268c5562d1ae6c0))
-   **@clayui/css:** Mixins clay-sidebar-variant updates ([eb714f3](https://github.com/liferay/clay/commit/eb714f3e1d77fb2558b7500008008cc87bdac7c5))
-   **@clayui/css:** Mixins clay-sticker-variant and clay-panel-variant check if parameter is type map ([a694e0c](https://github.com/liferay/clay/commit/a694e0cacab8ee0cf08591d373e466234ddfed5c))
-   **@clayui/css:** Sidebar adds sidebar-dark-l2 variant ([f559946](https://github.com/liferay/clay/commit/f559946895322b70d7959868ebd21bafca697a40))
-   **@clayui/multi-select:** fix error when showing placeholder when it has items ([d8f7020](https://github.com/liferay/clay/commit/d8f7020663555c6d222889b3959aa6ba33c90a5f))

### Features

-   **@clayui/css:** Global Functions `math-sign` adds warning message if type isn't supported ([5ce2840](https://github.com/liferay/clay/commit/5ce284068ae212360f7d0551409b55372e6d4aab))
-   **@clayui/css:** Global Functions adds `clay-parent()` and `clay-insert-before()` ([23a767d](https://github.com/liferay/clay/commit/23a767d983004a4cb126ecd7cf6684ce1408c377))
-   **@clayui/css:** Mixins clay-alert-variant adds custom-selector key ([da99c94](https://github.com/liferay/clay/commit/da99c943f153f249a51507f6e225f0cda85a76c4))
-   **@clayui/css:** Mixins clay-sidebar-variant adds option to customize sidenav-end and sidenav-start ([d6c7939](https://github.com/liferay/clay/commit/d6c79398f173451285b2750e0ea8a6d7eb7b2762))

## [3.60.1](https://github.com/liferay/clay/compare/v3.60.0...v3.60.1) (2022-06-08)

### Bug Fixes

-   **@clayui/css:** Loading Animation move animation to pseudo elements ([e9fb6a7](https://github.com/liferay/clay/commit/e9fb6a7f5932b36f0c836a64c748d8ce88a0ee1d))

# [3.60.0](https://github.com/liferay/clay/compare/v3.59.0...v3.60.0) (2022-06-06)

### Bug Fixes

-   **@clayui/css:** Buttons removes extensions `loading-animation` variants ([c9d73ed](https://github.com/liferay/clay/commit/c9d73edd317bd317e175ea63fb3f229b7c1b10bd))
-   **@clayui/css:** c-slideout should use display: flex on tbar-stacked for show/transition ([0a95c59](https://github.com/liferay/clay/commit/0a95c592cbaaf604221a804d585507c33909045a))
-   **@clayui/css:** Cadmin Buttons removes extensions `loading-animation` variants ([ed9e0dd](https://github.com/liferay/clay/commit/ed9e0dd84d14f5e7a4f308458bdc1be4284a25c4))
-   **@clayui/css:** Cadmin Utilities unset `font-size` on `.inline-item .loading-animation` ([57b4602](https://github.com/liferay/clay/commit/57b4602eb8e901e2292f34438900eb63f6a4c114))
-   **@clayui/css:** Mixins clay-slideout-variant remove setter functions ([e21665d](https://github.com/liferay/clay/commit/e21665de62a7efa1649fcfdd988472d2b7047935))
-   **@clayui/css:** Updates content property values to conform to what is allowed by OAW Tracker ([77dd43a](https://github.com/liferay/clay/commit/77dd43a3ae68233914d406c5613da64cd6e1f77b))
-   **@clayui/css:** Utilities unset `font-size` on `.inline-item .loading-animation` ([f1106e3](https://github.com/liferay/clay/commit/f1106e376a0287572b41439187e1f304b9f9a4e5))
-   **@clayui/loading-indicator:** Deprecate small and light attributes ([4011083](https://github.com/liferay/clay/commit/40110837162ccc2e1da760e762e17cb3c2fa2f15))
-   storybook LoadingIndicator adds displayType, shape, and size ([6a98f20](https://github.com/liferay/clay/commit/6a98f201da7e9bce4932e2eec5f3be22f3f39755))

### Features

-   **@clayui/core:** adds the implementation of the Vertical Bar component ([23a1637](https://github.com/liferay/clay/commit/23a1637e8ebac46d9815d334bae1296736979542))
-   **@clayui/css:** Cadmin Loaders updates dotted styles to be circle thing with gradient and add `loading-animation-squares` ([82f7a0f](https://github.com/liferay/clay/commit/82f7a0fe9e467074a1d8aad446cc20c8d20ad539))
-   **@clayui/css:** Global `clay-css` mixin accept more properties ([e1e8dc8](https://github.com/liferay/clay/commit/e1e8dc8d68a4dd3118b099914f6e82f4eef2e698))
-   **@clayui/css:** Loaders updates dotted styles to be circle thing with gradient and add `loading-animation-squares` ([aae79ad](https://github.com/liferay/clay/commit/aae79adaabf68938c83c9ef3e170232ab49478f1))
-   **@clayui/css:** Mixins Loaders adds `clay-spinner-variant` ([1865a1d](https://github.com/liferay/clay/commit/1865a1d818f6b3e182037d21c363c27691dc390b))
-   **@clayui/loading-indicator:** Adds more attributes ([0b7627a](https://github.com/liferay/clay/commit/0b7627a4cd1d887b3bc2b1c12dcd0b63795e2f62))

### BREAKING CHANGES

-   **@clayui/css:** `loading-animation` received a breaking style update. See https://clayui.com/docs/components/loading-indicator/markup.html on how to revert back to the dotted style.
-   **@clayui/css:** `loading-animation` received a breaking style update. See https://clayui.com/docs/components/loading-indicator/markup.html on how to revert back to the dotted style.

# [3.59.0](https://github.com/liferay/clay/compare/v3.58.1...v3.59.0) (2022-05-30)

### Bug Fixes

-   **@clayui/date-picker:** updates Date Picker state when component is controlled ([adda584](https://github.com/liferay/clay/commit/adda58428a28a5ca22df6b24d68a386851a15378))

### Features

-   **@clayui/pagination-bar:** Add flag disableEllipsis to PaginationBarWithBasicItems ([5cb8105](https://github.com/liferay/clay/commit/5cb8105c84b6623b84ab63dd87b02e9d358969de)), closes [#4886](https://github.com/liferay/clay/issues/4886)

# [3.58.0](https://github.com/liferay/clay/compare/v3.57.0...v3.58.0) (2022-05-23)

### Bug Fixes

-   **@clayui/core:** revalidate the state of intermediate for recursive multiple selection when the state is controlled ([172f849](https://github.com/liferay/clay/commit/172f849fcae41ce05e1c6254267f78f070966e85))
-   **@clayui/css:** Cadmin tables should use clay mixin pattern ([619bd1c](https://github.com/liferay/clay/commit/619bd1c0b8b3594db36c7ff06a717bfff1084682))
-   **@clayui/css:** Cadmin tables use newer keys in maps ([ab387d3](https://github.com/liferay/clay/commit/ab387d318dfe01a0b6675e719a1bde1cff0e91e9))
-   **@clayui/css:** Cadmin Treeview `btn` should be 24px tall and adds `show-quick-actions-on-hover` ([e31e0b6](https://github.com/liferay/clay/commit/e31e0b61dd68758a57064ca9cbfb8b3ce2d15ae9))
-   **@clayui/css:** Tables group table maps better and fix double border on table-list ([833bcb4](https://github.com/liferay/clay/commit/833bcb41d12b5788ca9d4968fe5c1ddb83baa563))
-   **@clayui/css:** Tables should use clay mixin pattern ([28281e3](https://github.com/liferay/clay/commit/28281e32a4743b882def29aa7b0521af96c9502f))
-   **@clayui/css:** Treeview `btn` should be 24px tall and adds show-quick-actions-on-hover ([65b41b6](https://github.com/liferay/clay/commit/65b41b61f4de8b6160cca1818d6f5130867c59f6))
-   **@clayui/css:** Treeview and Cadmin Treeview vertically center items in treeview-link ([2cc9aa2](https://github.com/liferay/clay/commit/2cc9aa28b6619821797631abd849d0dc5c90cde5))
-   **@clayui/css:** Treeview removes component-action show on hover in favor of show-quick-actions-on-hover ([ed87780](https://github.com/liferay/clay/commit/ed8778029ff3af6ab86aea9deb553ec30cdf4f51))

### Features

-   **@clayui/core:** adds new `onSelect` API to TreeView ([aca1322](https://github.com/liferay/clay/commit/aca132291f4ead5bded706e9585af4197c0b5e42))
-   **@clayui/core:** adds OOTB support for Text component in TreeView.Item/ItemStack ([cf32759](https://github.com/liferay/clay/commit/cf327597e8e3afbe6f78390008ea9aa6b25612ff))
-   **@clayui/core:** calls onKeyDown on Item and ItemStack if defined ([e5dfbf1](https://github.com/liferay/clay/commit/e5dfbf15024c6a8c85be78ac4d9a00ae8be56d06))
-   **@clayui/css:** Adds icons folder-lock and folder-lock-line ([d010847](https://github.com/liferay/clay/commit/d010847247fdf45c58ebd8989bcd66f7e1c870d7))
-   **@clayui/css:** Mixins add clay-table-variant ([653f985](https://github.com/liferay/clay/commit/653f985057131baff5c8dc2fd84f78f1e6b4d1aa))

# [3.57.0](https://github.com/liferay/clay/compare/v3.56.0...v3.57.0) (2022-05-16)

### Bug Fixes

-   **@clayui/css:** Treeview and Cadmin Treeview update font size of icons ([1f3d599](https://github.com/liferay/clay/commit/1f3d5997fc83b9a3fe3838241f7e24c7ffecf0b9))
-   **@clayui/date-picker:** fix date picker error not starting with default values using controlled or uncontrolled ([434fb7b](https://github.com/liferay/clay/commit/434fb7b379a7bbad95284f891b893e2c5b12b956))
-   **@clayui/multi-step-nav:** fix color of steps according to lexicon ([c674346](https://github.com/liferay/clay/commit/c67434603abbb3ecdc64527270a223ff495c97d1))

### Features

-   **@clayui/core:** adds new API to expand node via double click in TreeView ([82cea51](https://github.com/liferay/clay/commit/82cea51363cfde5a27ce01573296e10e8e5bfc73))
-   **@clayui/css:** add new `ca-ES-valencia` icon ([74c98d4](https://github.com/liferay/clay/commit/74c98d42f6783bb9e6724bbc2f8f46a37293cdd8))

# [3.56.0](https://github.com/liferay/clay/compare/v3.55.0...v3.56.0) (2022-05-09)

### Bug Fixes

-   **@clayui/css:** \_license-text.scss should update when running yarn compile ([42cddec](https://github.com/liferay/clay/commit/42cddec935b1cc2cb438eba3bc4a21e372c07748))
-   **@clayui/css:** Alerts deprecate `$alert-*-level` variables ([4e04372](https://github.com/liferay/clay/commit/4e043721de6b311f07c1ebd0d4226d2fbc473be6))
-   **@clayui/css:** Breadcrumbs convert to Clay mixin pattern ([dc309fb](https://github.com/liferay/clay/commit/dc309fb031409b0dfc7fe810ef25ac2a20b3c149))
-   **@clayui/css:** Cadmin breadcrumbs convert to Clay mixin pattern ([9c5b555](https://github.com/liferay/clay/commit/9c5b55507433ea6f66e2f102157b8de739366461))
-   **@clayui/css:** Functions add the parameter $fallback to clay color functions ([73260e9](https://github.com/liferay/clay/commit/73260e9e4c2882e4431a31ad9fe5b27425e11ae2))
-   **@clayui/css:** Range `clay-range-input` convert to use newer keys ([0666c44](https://github.com/liferay/clay/commit/0666c441d2f9bfb8afaba1d72156341d8ca6ea7b))
-   **@clayui/css:** Sidebar long text with no white space should break to new line in component-title and subtitle ([795684e](https://github.com/liferay/clay/commit/795684ea703a1c246d23f9f6ec4a8c1a6dc142ba))
-   **@clayui/css:** Tables deprecate `$table-*-level` variables ([b64bdb5](https://github.com/liferay/clay/commit/b64bdb52a0d2748084298e3018c930a0c71388fc))
-   **@clayui/tooltip:** cancel scheduled tooltip before scheduling new one ([62551b8](https://github.com/liferay/clay/commit/62551b87af77d6b15d95d80c47525c1071237605))
-   updates broken storybook links in documentation ([22fc1c6](https://github.com/liferay/clay/commit/22fc1c684a92ada9aac73c9c7090c6cbca960f9d))

### Features

-   **@clayui/css:** Mixins clay-range-input-variant updates ([2de97c4](https://github.com/liferay/clay/commit/2de97c45b13ed8b9462126ec4ba788535c430052))
-   **@clayui/modal:** Add a children property to IProps as a ReactNode to avoid warning error ([f8f56c9](https://github.com/liferay/clay/commit/f8f56c92a5e5bac86421a06b15cc1815b0161aab)), closes [#4843](https://github.com/liferay/clay/issues/4843)
-   **clayui.com:** add deprecated prop badge to doc ([0d55bdf](https://github.com/liferay/clay/commit/0d55bdfc4f56d584d2838645476e604d520889d6))

# [3.55.0](https://github.com/liferay/clay/compare/v3.54.0...v3.55.0) (2022-05-02)

### Bug Fixes

-   **@clayui/core:** the Heading tag follows the level definition ([956bc0b](https://github.com/liferay/clay/commit/956bc0b11f24ce55ef9f34b82dc395e4a4f40e20))
-   **@clayui/css:** Adds unit values to border-radius and border-width 0 values ([c39cb2e](https://github.com/liferay/clay/commit/c39cb2e0666457f57e181bb9567c309847e75503))
-   **@clayui/css:** Atlas .btn.active:focus should have outline ([0162df4](https://github.com/liferay/clay/commit/0162df4ec3c7b81247065ec8e160cfee316b0d92))
-   **@clayui/css:** Atlas remove extra `$code-color` variable ([5b4d621](https://github.com/liferay/clay/commit/5b4d62118038ea4ff38c65485eb9207353581f6e))
-   **@clayui/css:** Mixins clay-button-variant should be able to style .active:focus ([9862e79](https://github.com/liferay/clay/commit/9862e79a76ae7fe558b2b857c03cd680d074b35f))
-   **@clayui/css:** Replace `$spacer * 0.5` with fixed values, it plays better with calc() ([121abde](https://github.com/liferay/clay/commit/121abdeef5784d4ebab2d7aa0bffb7f17b4f7ec0))
-   **@clayui/css:** Source format the way we write multiple box-shadows ([61f8f02](https://github.com/liferay/clay/commit/61f8f02f73144b3accc2759c4578ae7a4e5e495d))
-   **@clayui/css:** Tables use calc() to make fatter border widths in thead and tbody ([e9cc407](https://github.com/liferay/clay/commit/e9cc4077f62b371bb0a6cb83314898442910d735))
-   **clayui/chore:** Update index.ts to export both components ([a823b41](https://github.com/liferay/clay/commit/a823b411525547fc81f2d1f22650607e4afc58b5))
-   **clayui/chore:** Update stories in Heading and Text ([c870a2c](https://github.com/liferay/clay/commit/c870a2c111ce58b1c3e63517ddb82ac8f8c13d03))
-   **clayui/core:** Change export type to inline one ([01e0e35](https://github.com/liferay/clay/commit/01e0e35a402e3c81e0919e8807aa45939a308dfc))
-   **clayui/core:** SF ([5065c80](https://github.com/liferay/clay/commit/5065c80485c350d577dd212916c007acd8461f6f))
-   **clayui/core:** SF ([1602a02](https://github.com/liferay/clay/commit/1602a02fafa983c717ded5213b9b32c2fb9a0fb5))
-   **clayui/core:** Some code refactor. Pending some changes ([d1eed16](https://github.com/liferay/clay/commit/d1eed16a3d9717a921665ed3bcc247970a45585f))

### Features

-   **@clayui/color-picker:** standardize the controlled and uncontrolled component behavior to `value` prop ([7a435c5](https://github.com/liferay/clay/commit/7a435c5b980976537201ba45ddf8ff034184aad3))
-   **@clayui/core:** Adding Text component and Heading test cases ([c3a542c](https://github.com/liferay/clay/commit/c3a542c0472680d7d70ec120b53e305df185097c))
-   **@clayui/core:** Adding Text test cases ([0598b77](https://github.com/liferay/clay/commit/0598b771a652e86156e0a0abd404750e08a59bde))
-   **@clayui/date-picker:** standardize the controlled and uncontrolled component behavior to `value` prop ([4183972](https://github.com/liferay/clay/commit/41839726ad26e0abb8c681f3d2e8af0d090afbf3))
-   **@clayui/drop-down:** standardize the controlled and uncontrolled component behavior to `active` prop ([49afcdb](https://github.com/liferay/clay/commit/49afcdb4534db2d14bb993cf5a75b9c36381981e))
-   **@clayui/form:** standardize the controlled and uncontrolled ClayRadioGroup component behavior to `value` prop ([478c5ae](https://github.com/liferay/clay/commit/478c5ae598b864a90e127c61373511993d9fc1e5))
-   **@clayui/management-toolbar:** Deprecate ClayManagementToolbar ([744b46e](https://github.com/liferay/clay/commit/744b46e54c322fae32d00f2b1cd4762a25e4e5c9))
-   **@clayui/modal:** add the state of open and close in `useModal` hook to be controlled ([c62ac62](https://github.com/liferay/clay/commit/c62ac62508d67c482a1c14a17471d87cf8453f45))
-   **@clayui/modal:** change ModalProvider actions to be readable ([671b011](https://github.com/liferay/clay/commit/671b0119680abfe7bbf46a2e58c9d7a92f4c436c))
-   **@clayui/multi-select:** standardize the controlled and uncontrolled MultiSelect component behavior to `value` and `items` prop ([a6bc5cd](https://github.com/liferay/clay/commit/a6bc5cd5830757eaeb2ab44cec5c7e1cad2e5a3b))
-   **@clayui/multi-step-nav:** adds controlled component standardization and deprecates properties with inconsistent naming ([da60dad](https://github.com/liferay/clay/commit/da60dad783d11d6abd8f8ed38d1a1bd44e9832e0))
-   **@clayui/pagination-bar:** standardizes properties for the controlled and uncontrolled component ([bd25cf6](https://github.com/liferay/clay/commit/bd25cf6a28eff89ddf203140af7b59af506ca6e0))
-   **@clayui/pagination:** standardizes properties for the controlled and uncontrolled component ([16ef746](https://github.com/liferay/clay/commit/16ef7469ef26c4286bcfcb69eea01c671bb71dcb))
-   **@clayui/popover:** standardizes properties for the controlled and uncontrolled component ([e27a654](https://github.com/liferay/clay/commit/e27a6541f1e6d9fe832db3a9a561a531aa06a35d))
-   **@clayui/slider:** standardizes properties for the controlled and uncontrolled component ([6c1cae3](https://github.com/liferay/clay/commit/6c1cae3f2cf2192fbd5d1a20e0c76c8c7081fe8e))
-   **@clayui/time-picker:** standardizes properties for the controlled and uncontrolled component ([882ab9d](https://github.com/liferay/clay/commit/882ab9d2fb709fc997d0c364a5651d5aa7029fe9))
-   Adding font-style monospace property ([43f16e2](https://github.com/liferay/clay/commit/43f16e2fbed04afef1be8598bee0772a5ce886b3))
-   **clayui/core:** Adding Heading and Text documentation ([0292834](https://github.com/liferay/clay/commit/02928348f0b1c657b773c2eb33ba9fc67d24fb83))
-   **clayui/core:** Delete React.FC. Adding tests related to truncate, color and default props ([d81e5db](https://github.com/liferay/clay/commit/d81e5db193e0d7514b33648ba6036efe39811560))
-   **clayui/core:** New Text API to determine the test tag. Coding refactor and update interface to type props ([05589b9](https://github.com/liferay/clay/commit/05589b97ab1c7ac0c525e60173198c2114aca702))

# [3.54.0](https://github.com/liferay/clay/compare/v3.53.0...v3.54.0) (2022-04-25)

### Features

-   **@clayui/css:** Add new `diagonal-line` icon ([50f896f](https://github.com/liferay/clay/commit/50f896f10c05a696b6cf53e083d0b017b29dad68))
-   **@clayui/css:** regen `_lx-icons-generated.scss` file ([4444838](https://github.com/liferay/clay/commit/444483860914d22d03e9c6eb01518f3f409fba7e))

# [3.53.0](https://github.com/liferay/clay/compare/v3.52.0...v3.53.0) (2022-04-12)

### Bug Fixes

-   **@clayui/css:** Forms input sizes should be generated using the Clay Mixin pattern ([ad9792e](https://github.com/liferay/clay/commit/ad9792e58400b9e2da87f7aa48cfb39f2a1e5256))
-   **@clayui/css:** Management Bar Primary we are passing unsupported property names in the disabled state ([73bff8c](https://github.com/liferay/clay/commit/73bff8cae8b63b82be1af107dc7d3dd1e310def3)), closes [#4792](https://github.com/liferay/clay/issues/4792)
-   **@clayui/css:** Mixins `clay-generate-media-breakpoints` not outputting media queries ([2e415b9](https://github.com/liferay/clay/commit/2e415b995b122ec7753a61328254ca7226a799f7))
-   **@clayui/css:** Mixins clay-close should check if parameter is a map ([01c437d](https://github.com/liferay/clay/commit/01c437de6695b2e38bcaedfac6bf2bf9261ebc7b))
-   **@clayui/css:** Popovers adds popover-secondary ([2358ddf](https://github.com/liferay/clay/commit/2358ddf61a3bbf335b30413606be820a50d78fec))

### Features

-   **@clayui/clay-shared:** Add more test cases to FocusScope ([c81a6c1](https://github.com/liferay/clay/commit/c81a6c16d49f7164648e0db589a37406a2b0e30a))
-   **@clayui/clay-shared:** Update ClayPortal test cases interacting with Dropdown ([1c0415a](https://github.com/liferay/clay/commit/1c0415aaad17b8e4057e0ef5d22e25017c47a265))
-   **@clayui/core:** adds the new OverlayMask component ([a9b40cb](https://github.com/liferay/clay/commit/a9b40cb11862669d63b6fc724e0b210215d2bec7))
-   **@clayui/css:** Add new `opacity`, `border-width` and `border-style` icons ([a22c388](https://github.com/liferay/clay/commit/a22c3884172a63e711602a483437abccce2425ba))
-   **@clayui/css:** adds new classes to remove header border and wider for popover ([576789b](https://github.com/liferay/clay/commit/576789b0888155f3f3eb44892a8f79321dc7da86))
-   **@clayui/css:** Cadmin Popover adds popover-secondary ([0e42484](https://github.com/liferay/clay/commit/0e424848a0649f417c4f412aaff0519d9b9376a9))
-   **@clayui/css:** generate `_lx-icons-generated.scss` file ([cf346da](https://github.com/liferay/clay/commit/cf346da4557f2806e7f5c7b5ed5ee45771989b5c))
-   **@clayui/css:** Mixins `clay-form-control-variant` should generate media query styles ([4bb42f7](https://github.com/liferay/clay/commit/4bb42f7f943ed25e291125e7dcd8945259c87078))
-   **@clayui/popover:** adds `offset` prop and improves trigger reference support ([48ef287](https://github.com/liferay/clay/commit/48ef2878157568a650e88e474c9c4fe6f4cd0615))
-   **@clayui/popover:** Adds displayType ([bdb1d70](https://github.com/liferay/clay/commit/bdb1d70324983a85ad3cef6841338d08b6fa73bd))
-   **@clayui/popover:** adds new properties to borderless and wider ([1293041](https://github.com/liferay/clay/commit/1293041b9bfa449b68ae40aec13c5cba8927280b))
-   **@clayui/popover:** replace `wider` prop with `size` and change css class name ([4d4b5fb](https://github.com/liferay/clay/commit/4d4b5fbaac38aa63669876b087d3c2cb6d7f99de))

# [3.52.0](https://github.com/liferay/clay/compare/v3.51.0...v3.52.0) (2022-04-04)

### Bug Fixes

-   **@clayui/clay-tabs:** Insert displayType for nav-tabs and nav-underline classes ([10ddb29](https://github.com/liferay/clay/commit/10ddb29a88884e05d4d4f71caec111a58c809bb7))
-   **@clayui/drop-down:** fix contextual menu error not rendering icons without spaces ([a115add](https://github.com/liferay/clay/commit/a115add1d60ff61012013932cbff42af31aff70e))
-   **@clayui/navigation-bar:** add truncate text OOTB to ClayNavigationBar.Item ([b8a53a2](https://github.com/liferay/clay/commit/b8a53a20d81e10fa065997d740fc000f58334a0c))
-   **@clayui/navigator-bar:** Long text in Item is truncated ([587171d](https://github.com/liferay/clay/commit/587171d48bcfff641135176a2fae493c695d95b6))
-   **@clayui/shared:** fix error when controlling focus in React 17.x ([76f5f0d](https://github.com/liferay/clay/commit/76f5f0d964231d8442c780b44f6a320b50b9948b))

### Features

-   **@clay/empty-state:** Enable users to not render title related markup on empty-state ([608378b](https://github.com/liferay/clay/commit/608378b15985f273845d0fee7a91e486b4c78666))
-   **@clayui/clay-tabs:** Adding additional new tests ([d74322c](https://github.com/liferay/clay/commit/d74322c4820ef1f0bbb9c0c64263f82c39d70576))
-   **@clayui/clay-tabs:** Remain modern prop and overrides displayType. Update in BREAKING.md ([cb9eb31](https://github.com/liferay/clay/commit/cb9eb31d3da70de3ccdb653a9e574da497d6ee84))
-   **@clayui/color-picker:** Add more test cases in color-picker ([89e5ef6](https://github.com/liferay/clay/commit/89e5ef6b4d91f43d6cbd072daaa37e1f6b0c9fb9))
-   **@clayui/color-picker:** Adding more test cases and change snapshots by expect functions ([6ef292c](https://github.com/liferay/clay/commit/6ef292c48e6da6f8606db4616f1ff5f8d01bd871))
-   **@clayui/color-picker:** Update snapshots ([e71da9d](https://github.com/liferay/clay/commit/e71da9d9304684b73e24fe5b9dff3e4380cbfdc3))
-   **@clayui/color-picker:** Updates in test case title and not expecting splotch clicked ([6b5ff9f](https://github.com/liferay/clay/commit/6b5ff9f27b9472cae7f0fb76a15accb363b65117))
-   **@clayui/modal:** When using ClayModalProvider, `footer`,`header` properties now are optional ([4bcbac2](https://github.com/liferay/clay/commit/4bcbac2d42be1c3d58876bbf65cd2e6d86c1b6fc))
-   **@clayui/navigation-bar:** add the `nav-link` class by default for Clay components ([c6cff02](https://github.com/liferay/clay/commit/c6cff020911b8080112f0b97199b353f996836f7))

# [3.51.0](https://github.com/liferay/clay/compare/v3.50.0...v3.51.0) (2022-03-28)

### Bug Fixes

-   **@clayui/css:** Dropdown removes `pointer-events: none` from `.dropdown-item.active` ([e36ba48](https://github.com/liferay/clay/commit/e36ba4833290fa41affe3091d27766e0250d8b58))
-   **@clayui/css:** Map new `$font-scale`s to `$font-size-*` variables ([41edc3b](https://github.com/liferay/clay/commit/41edc3b7f176650b6f37f397cf1d9eb05c2f0c18))
-   **@clayui/css:** Mixin `clay-navbar-variant` get `focus, color` instead of `focus-color` ([606f8ee](https://github.com/liferay/clay/commit/606f8ee431f06a9df3d554096c0927180c6d7522))
-   **@clayui/css:** Mixin clay-nav-nested use css calc() to calculate left padding ([b1e6d1e](https://github.com/liferay/clay/commit/b1e6d1e554039428436a395f166b338e534ea96b))
-   **@clayui/css:** Removes duplicate mixins \_assert-ascending and \_assert-starts-at-zero ([23c72d6](https://github.com/liferay/clay/commit/23c72d64f0bdf6721611ad37527b3beeca38aeda))
-   **@clayui/css:** SVG Icons update shopping-cart.svg to new design ([8044608](https://github.com/liferay/clay/commit/804460816b4608903c33555057957b978d868342))
-   **@clayui/css:** Table removes `border-width: 0` from `.table-responsive > .table-bordered` ([7ddedba](https://github.com/liferay/clay/commit/7ddedba5da821d4c7e26ee3ec57af6fdff0956e7))
-   **@clayui/css:** Utilities Close use newer keys in Sass map ([9d8c40e](https://github.com/liferay/clay/commit/9d8c40ec949ae3199be62a00663a173b6fd70d50))
-   **@clayui/css:** Utilities update `.text-*` values to be generated by the `$font-scale` map ([938a801](https://github.com/liferay/clay/commit/938a801ce0640ab9c8991f1dce61b3e8d01874d8))

### Features

-   **@clayui/css:** Generate \_lx-icons-generated.scss ([deeccbb](https://github.com/liferay/clay/commit/deeccbbd43a348b49d23cd07ff0a91576e6d3299))
-   **@clayui/css:** Globals adds `$font-scale` map for setting a Design System's progression of font sizes ([7e7107d](https://github.com/liferay/clay/commit/7e7107d628a8311987fe9d664d07826c082f5355))
-   **@clayui/css:** Mixins `clay-navbar-size` should use `calc` instead of Sass arithmetic ([9728edb](https://github.com/liferay/clay/commit/9728edb2bcc0adea58d48ebad1e7cb995ad2a480))
-   **@clayui/css:** SVG Icons adds cookie and Commerce icons ([fb49037](https://github.com/liferay/clay/commit/fb490378d66e4ef2a7d7e27cdcd519d7a28095ba))
-   **@clayui/css:** Use `calc` instead of Sass arithmetic for scaling font sizes ([1e1b734](https://github.com/liferay/clay/commit/1e1b7343dc33a74a8ad35b170adcab93a39d1e83))

# [3.50.0](https://github.com/liferay/clay/compare/v3.49.0...v3.50.0) (2022-03-21)

### Bug Fixes

-   **@clayui.com:** add a sass function to fix table border-radius issue ([8fe4b05](https://github.com/liferay/clay/commit/8fe4b05ca7e86bbc07215cb0cfde5d56af9e690e))
-   **@clayui.com:** requested chages for PR ([ad5f1c2](https://github.com/liferay/clay/commit/ad5f1c286ecb8f6ad9dcea1bfc1f3d1311d035d2))
-   **@clayui/core:** fixes error when removing parent's intermediate state when item's sibling is intermediate ([782ea42](https://github.com/liferay/clay/commit/782ea426feae8a4e89c24585c16146f4f14a5efa))
-   **@clayui/css:** Functions `clay-border-radius-inner` simplification and error checking ([9c1d5f4](https://github.com/liferay/clay/commit/9c1d5f41100e9afdfddfe60c93c42b5e327355cb))
-   **@clayui/css:** Table List move inner border-radius styles to Sass variables ([47922c7](https://github.com/liferay/clay/commit/47922c791f82d51e94c639aef7f362877eb1c182))

### Features

-   **@clayui/color-picker:** add color validation in input ([203649f](https://github.com/liferay/clay/commit/203649fb258f26b70650f58c7853ac8835687c03))
-   **@clayui/modal:** improves ClayModal component accessibility ([60b24fc](https://github.com/liferay/clay/commit/60b24fc4ba8dc748474a67323e625bbaa6aab867))

# [3.49.0](https://github.com/liferay/clay/compare/v3.48.0...v3.49.0) (2022-03-15)

### Bug Fixes

-   **@clayui/color-picker:** Changes to improve inconsistent behavior in some scenarios ([85adf72](https://github.com/liferay/clay/commit/85adf727784d0e5a986cabd3124df77489a2b627))
-   **@clayui/color-picker:** Current colour persist and Hue component synchronization ([07c2552](https://github.com/liferay/clay/commit/07c255200ae0213935f78af651ce5d85df030b55))
-   **@clayui/color-picker:** fixes error of adding repeated colors in custom ([e3fb905](https://github.com/liferay/clay/commit/e3fb905ead79c1217cb7d6eb0ed89ce9df725cf9))
-   **@clayui/color-picker:** fixes error when clicking on a white custom splotch does not update editor and input ([b5e0189](https://github.com/liferay/clay/commit/b5e0189115c2f9b98cbdbb444e5e4fcc8eaa4ef0))
-   **@clayui/color-picker:** Hue behaviour solved and workflow changes ([46821d7](https://github.com/liferay/clay/commit/46821d7e9fc76283e26fbbd4a7e8f08590b7efad))
-   **@clayui/color-picker:** Removing costumize hook ([20fd191](https://github.com/liferay/clay/commit/20fd1919d9acdea016bad5e56878ad3589aa111d))
-   **@clayui/core:** fix error when not rendering component after string with TreeView.Item ([1d275a8](https://github.com/liferay/clay/commit/1d275a8c948dfcfab9206a03b59c6c9d948ce29f))
-   **@clayui/css:** Forms .form-control-tag-group .label (Multiselect) remove references to deprecated keys ([39b360f](https://github.com/liferay/clay/commit/39b360f122ab0fb9a95435fac436b57b1ca6d85a)), closes [#4712](https://github.com/liferay/clay/issues/4712)

### Features

-   **@clayui/core:** adds new properties to set the initial value of properties that can be controlled ([bdfb6b0](https://github.com/liferay/clay/commit/bdfb6b063cc4cd00365609d2f7ce0f525ac16045))
-   **@clayui/drop-down:** add new prop to align Menu in viewport ([1c4f19b](https://github.com/liferay/clay/commit/1c4f19b25c34f6ffb9c2c7b9a99732e2a82d5eb5))
-   **@clayui/drop-down:** make it possible to render the menu lazily ([1e4e565](https://github.com/liferay/clay/commit/1e4e5655503645358245a200e72c8ca711f72956))

# [3.48.0](https://github.com/liferay/clay/compare/v3.47.0...v3.48.0) (2022-03-07)

### Bug Fixes

-   **@clayui/css:** Stickers fix typo `sticker-bottomr-right` to `sticker-bottom-right` ([93177c7](https://github.com/liferay/clay/commit/93177c76387bda84bc0be6a9e77fe55334449574)), closes [#4703](https://github.com/liferay/clay/issues/4703)
-   **@clayui/css:** Updates `content` property values to conform to what is allowed by OAW Tracker ([9028d38](https://github.com/liferay/clay/commit/9028d38f42a322cca91bc2c9e5f7c8bc0364d34b))
-   **@clayui/pagination:** fix accessibility error for pagination with links when item is active ([93d57b8](https://github.com/liferay/clay/commit/93d57b8b414a9fa0bd4b03d4008fbe3573bc088c))
-   **@clayui/pagination:** LPS-148048 Disable the button to the current page to avoid accesibility issues ([83b6cea](https://github.com/liferay/clay/commit/83b6cea7c9fa1c998cb18b24dbbed3d253653192))
-   **@clayui/pagination:** LPS-148048 Fix path in the package.json file ([7995449](https://github.com/liferay/clay/commit/7995449139d3ba94c31d9294fee4f1714f559e4c))
-   **@clayui/pagination:** LPS-148048 regen snapshots ([4367010](https://github.com/liferay/clay/commit/4367010721180d2a9b5afaa44d88ad72947ebf5f))
-   **@clayui/pagination:** LPS-148048 regen snapshots ([22fbec0](https://github.com/liferay/clay/commit/22fbec060301019639f204c82c3ca06d0a19e349))

### Features

-   **@clayui/css:** Adds placeholder comments that can be replaced with Sass [@use](https://github.com/use) rules ([58c014b](https://github.com/liferay/clay/commit/58c014ba593958714b480553fcc19c4fe300e42f)), closes [#4713](https://github.com/liferay/clay/issues/4713)
-   **@clayui/css:** Dropdown provide more customization for `.dropdown-menu .alert` ([2640ef8](https://github.com/liferay/clay/commit/2640ef8c7b598e152e12738169b0a11728f00781))
-   **@clayui/css:** Mixins `clay-alert-variant` adds customization for `:first-child` and `:last-child` ([d8d8b6a](https://github.com/liferay/clay/commit/d8d8b6a5157f8e2f467c0467e8aae9a49834a7c4))
-   **@clayui/css:** Mixins `clay-dropdown-menu-variant` adds customization for `.alert` and `.alert-fluid` ([e5ce8cc](https://github.com/liferay/clay/commit/e5ce8ccfd4055c9db97654aea35adec252316961))
-   **@clayui/drop-down:** Render Menu only after trigger is clicked the first time ([1d90d45](https://github.com/liferay/clay/commit/1d90d454d9b2d242dd2d491e4525e815553e9fa3))
-   **@clayui/drop-down:** Update tests ([ab564dd](https://github.com/liferay/clay/commit/ab564ddb95de1e01cb690cd458e5ac3aad634946))

# [3.47.0](https://github.com/liferay/clay/compare/v3.46.0...v3.47.0) (2022-02-23)

### Bug Fixes

-   **@clayui/core:** avoid scrolling when selecting a node ([e1c7091](https://github.com/liferay/clay/commit/e1c7091e21cf965d2f7b637f9f55e6279cb891b6)), closes [#4663](https://github.com/liferay/clay/issues/4663)
-   **@clayui/core:** fix error when not updating parent's loc ([3ace427](https://github.com/liferay/clay/commit/3ace427f6107efac0652049bbab38cb6354fda4b))
-   **@clayui/core:** fix error when showing expander when `nestedKey` does not exist in the item ([cd4a4d2](https://github.com/liferay/clay/commit/cd4a4d2772fb43010fb8954973b66e0dfa4fa839))
-   **@clayui/core:** fixes error when having condition in the children of TreeView.Item and TreeView.ItemStack the last element is positioned to the right ([0e121d3](https://github.com/liferay/clay/commit/0e121d36dc407c3f328f252db8385cf17ced244a))
-   **@clayui/core:** fixes the error of not revalidating the intermediate state of the selected item's parents in the first render and expands the items ([379ca72](https://github.com/liferay/clay/commit/379ca72b5d773e1882898c0560efbb342c7348e4))
-   **@clayui/css:** Cadmin Treeview adds disabled styles to `treeview-link` ([d9a3dc3](https://github.com/liferay/clay/commit/d9a3dc30dec94276087f2468e96782e0ec9ad36e))
-   **@clayui/css:** fix formatting ([07f3b6b](https://github.com/liferay/clay/commit/07f3b6b1abc9515a256bfff58df006098a9737f4))
-   **@clayui/css:** Treeview adds disabled styles to `treeview-link` ([ca11c9a](https://github.com/liferay/clay/commit/ca11c9ac2e0a96e6598ad32f65587a1a6300ec22))
-   **@clayui/empty-state:** Update classNames from two objects into one ([f090ab4](https://github.com/liferay/clay/commit/f090ab44f7ea466285bf76463f1c58a6ec48d743))
-   **@clayui/empty-state:** Update SCSS variables of small empty-state ([8f64846](https://github.com/liferay/clay/commit/8f64846a6a455b790d08f00e8b29383567a7d967))
-   **@clayui/localized-input:** fix typo ([7c2957f](https://github.com/liferay/clay/commit/7c2957f7e4d5272ab17cb99808df7e9fe8226790))
-   **clayui.com:** nav-toc is too wide, overlays examples ([b4bd694](https://github.com/liferay/clay/commit/b4bd694bd84fbc701b00258464d608e86104a404))
-   **clayui.com:** nav-toc-absolute is too wide, overlays examples ([817f63c](https://github.com/liferay/clay/commit/817f63c681e150ea325705359d2f2b679385537e))
-   make format:changed check for scss files ([6588e27](https://github.com/liferay/clay/commit/6588e27f703773af63bb8992b1bc53bcb5649fc6))

### Features

-   **@clayui/core:** add API to disable item and expander disable optionally ([4cc104d](https://github.com/liferay/clay/commit/4cc104d9d7978764060c407a0e311a626cb2415d))
-   **@clayui/css:** Cadmin Cards convert base classes to Clay mixin pattern ([00a8de7](https://github.com/liferay/clay/commit/00a8de75759b98292d43dd27af78444be4a3b557))
-   **@clayui/css:** Cadmin update `clay-text-typography` maps to use the `href` key ([13240cf](https://github.com/liferay/clay/commit/13240cfdcb7915cf617dc30536480b04438f1d56))
-   **@clayui/css:** Cards convert base classes to Clay mixin pattern ([6f65e74](https://github.com/liferay/clay/commit/6f65e746ebfe37d6b12526e6c5c42bd336714ed0))
-   **@clayui/css:** Mixin Links `clay-text-typography` use `href` for styling links ([1a428df](https://github.com/liferay/clay/commit/1a428dfe5a0a4317fdde4166ef2ceee5645afefb))
-   **@clayui/css:** Mixins adds more options to `clay-card-variant` and `clay-card-section-variant` ([545830d](https://github.com/liferay/clay/commit/545830d674d3c50b140db8b40c5a983e8af46660))
-   **@clayui/css:** Update `clay-text-typography` maps to use the `href` key ([9c99628](https://github.com/liferay/clay/commit/9c996280fbafafead92f0c02024df44e81a56a87))
-   **@clayui/date-picker:** adds a new `yearsCheck` prop to be able to disable the check if the year is within the years range ([c8b26e9](https://github.com/liferay/clay/commit/c8b26e9cd7eeea86af92f6690404b8ef9159e2f4))
-   **clayui/empty-state:** Include Small property in empty state component ([a073233](https://github.com/liferay/clay/commit/a0732338454dfeccab4a0961392d218a2109891f))

# [3.46.0](https://github.com/liferay/clay/compare/v3.45.1...v3.46.0) (2022-02-09)

### Bug Fixes

-   **@clayui/color-picker:** fixes error when not syncing the field state with the editor when there are no palettes ([097b76a](https://github.com/liferay/clay/commit/097b76a4379c2d59e14a89d5067725af762d1962))
-   **@clayui/core:** fix error when selecting parent nodes and controlling intermediate state in multiple selection ([2174128](https://github.com/liferay/clay/commit/2174128202457d54be34ee99d3ffd65281e40ed2))
-   **@clayui/css:** Buttons fix alignment of icons in flex items ([72993f2](https://github.com/liferay/clay/commit/72993f20c77b33e7985464fc4b710a9afc4d3c03))
-   **@clayui/css:** Mixins `clay-button-variant` customize `.btn .inline-item .lexicon-icon` ([baf9e10](https://github.com/liferay/clay/commit/baf9e1026efc7eb1c422b19c75a359c09669b21c))
-   **@clayui/date-picker:** Adding some changes related to time reset and refactoring code ([dd4d2e8](https://github.com/liferay/clay/commit/dd4d2e835ec5ff5ca8068ddc04255ac1712e8d48))
-   **@clayui/date-picker:** fix bug when not changing time to current time when clicking on dot button ([5daa1f1](https://github.com/liferay/clay/commit/5daa1f10a12a426caea6c6ffffa6e6e719d8859e))
-   **@clayui/date-picker:** fix error in always adding ampm when user is typing ([d5502e4](https://github.com/liferay/clay/commit/d5502e4cff31c1db56981d33dafdf794e8a4029d))
-   **@clayui/date-picker:** fix error when formatting time using 12 hours ([8061529](https://github.com/liferay/clay/commit/8061529170f421cf30d2133a1b8570deaf178a5a))
-   **@clayui/date-picker:** Removing initialized variables ([997e10f](https://github.com/liferay/clay/commit/997e10f0743e06b95ed360d47614e35c15c9b655))
-   **@clayui/date-picker:** Reset actual date when input string is empty ([94de1ae](https://github.com/liferay/clay/commit/94de1ae27a83e328a173481b3c1a3705b9fb0e93))
-   **@clayui/multi-select:** fix error when adding labels with whitespace ([1a8a166](https://github.com/liferay/clay/commit/1a8a1664be7541e1ca2173334db83e07562996bd))

### Features

-   **@clayui/core:** allow configuring the drag and drop context ([59f9f58](https://github.com/liferay/clay/commit/59f9f583a589dfb1494eb82ad2ca0e0fa7e2ed1d))
-   **@clayui/css:** Aspect Ratio adds `aspect-ratio-8-to-3` (37.5%) ([7b7f9c2](https://github.com/liferay/clay/commit/7b7f9c2f7b49ed1a72cdf41b2d160e69a14ab83b))
-   **@clayui/css:** Cadmin Aspect Ratio adds `aspect-ratio-8-to-3` (37.5%) ([5705ad5](https://github.com/liferay/clay/commit/5705ad5a16f6185ce9573000fe7cb741e01e7a35))
-   **@clayui/css:** Cadmin Type convert `.display-*` components to `clay-css` mixin pattern ([3de7a63](https://github.com/liferay/clay/commit/3de7a6345835e43050cde76ed0b8eeb4b04c4a71))
-   **@clayui/css:** Cadmin Type convert h1-h6 to clay-css mixin pattern ([332f1fa](https://github.com/liferay/clay/commit/332f1faedf9ab5f1ca4337fd7a15be2ad44a5bf1))
-   **@clayui/css:** Cadmin Utilities adds `text-1` through `text-11` for font-sizes ([80e1097](https://github.com/liferay/clay/commit/80e109719293f27d12eb6d5ece2a28a7eaf99993))
-   **@clayui/css:** Mixins Grid adds `clay-generate-media-breakpoints` ([c18ebd2](https://github.com/liferay/clay/commit/c18ebd2c78bbce463687edb03c0d4f651b0e03d6))
-   **@clayui/css:** SVG Icons adds export ([0e67571](https://github.com/liferay/clay/commit/0e67571dd6af05cc9fa2fd703e041b6606ec0a1f))
-   **@clayui/css:** Type convert `.display-*` components to `clay-css` mixin pattern ([e201fcc](https://github.com/liferay/clay/commit/e201fcc2ebec60880190d5f288a1c6e16d554e33))
-   **@clayui/css:** Type convert h1-h6 to clay-css mixin pattern ([19dcfc3](https://github.com/liferay/clay/commit/19dcfc3e1c73c2d61c49d361f18310b79970da1d))
-   **@clayui/css:** Utilities adds `text-1` through `text-11` for font-sizes ([4ce046c](https://github.com/liferay/clay/commit/4ce046c7c3b2b06523105afce664a563f69bc069))
-   **clay-pagination:** allow disabling ellipsis button in pagination ([4e4e84c](https://github.com/liferay/clay/commit/4e4e84c73120ff110acd777a409d8d370361f909))

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
-   **@clayui/css:** Cadmin Links removes unnecessary `setter()` from `.component-icon` ([130e708](https://github.com/liferay/clay/commit/130e70801b306488d49aba033ee7267052dae4b1))
-   **@clayui/css:** Cadmin reset `nav-link` pseudo elements ([7038224](https://github.com/liferay/clay/commit/70382242428a0634fa24f4afa2639d2d3fbf8e1d))
-   **@clayui/css:** Cadmin reset Custom Checkbox and Radio pseudo elements ([dbbbb02](https://github.com/liferay/clay/commit/dbbbb024dbd38807631041d0b48a74efe74a657b))
-   **@clayui/css:** Cadmin Treeview removes `setter()`, no longer necessary ([1d4d4a9](https://github.com/liferay/clay/commit/1d4d4a94ee76c14877a36ad72a1085d6de04f205))
-   **@clayui/css:** Cadmin Treeview use `box-shadow` instead of border to indicate drop zone ([58ca599](https://github.com/liferay/clay/commit/58ca5999ca573288dd42e7d1350d9ae42f4f6fd2))
-   **@clayui/css:** Forms `label` inside `form-control` should use `min-height` ([108d442](https://github.com/liferay/clay/commit/108d442ea15cd98ade17df20b44583dc41dc9543))
-   **@clayui/css:** Forms use mixin `clay-label-variant` instead of deprecated `clay-label-size` ([a0c15fc](https://github.com/liferay/clay/commit/a0c15fc5fc69bf58fa067956e0db760a2952e6f0))
-   **@clayui/css:** Treeview renames the key `link` to `treeview-link` ([8378346](https://github.com/liferay/clay/commit/8378346bb63c341cb7558fd69b6a3c68567d35cc))
-   **@clayui/css:** Treeview replaces `.treeview-item.disabled` with `.treeview-item-dragging` ([a9f88d0](https://github.com/liferay/clay/commit/a9f88d0253a222d3bc79ea077375e22e1919df3a))
-   **@clayui/css:** Treeview use `box-shadow` instead of border to indicate drop zone ([fb93ca7](https://github.com/liferay/clay/commit/fb93ca7d369f41633d9c2f6d40e684a7e16dcb88))
-   **@clayui/date-picker:** fix time picker default value ([770639f](https://github.com/liferay/clay/commit/770639f1e37486c2844cc3b95e05f36659de3ebf))
-   **@clayui/date-picker:** fixes error when not formatting time in 12hours when passing to time picker ([2090eb4](https://github.com/liferay/clay/commit/2090eb495f20841259d4ad55381480237eb2b931))
-   **@clayui/shared:** fix focus control collision when having FocusScope nested ([58bd27f](https://github.com/liferay/clay/commit/58bd27fc24d6754c9662b12332e01e2b209a9e84))

### Features

-   **@clayui/core:** allow passing extra css classes to expander button ([91d40a2](https://github.com/liferay/clay/commit/91d40a27059cc1a5a6206fef7f96cb5eb5c30e51)), closes [#4589](https://github.com/liferay/clay/issues/4589)
-   **@clayui/css:** Adds treeview component ([776f4bb](https://github.com/liferay/clay/commit/776f4bbb7ecc5ef8d19e44fc315d07b4ff203efc))
-   **@clayui/css:** Links adds `component-text` and `component-icon` ([5188985](https://github.com/liferay/clay/commit/51889857b1b8ee4b920dcf8b8de779832dba2875))
-   **@clayui/popover:** close the popover when the ESC key is pressed ([c49cf89](https://github.com/liferay/clay/commit/c49cf893e11e5a19954f93541c2817f45ec8f93b)), closes [#4567](https://github.com/liferay/clay/issues/4567)
-   add plain/common API for button links ([7148450](https://github.com/liferay/clay/commit/7148450cae6b2d90e6052ececc84743daa8077c0))

## [3.44.2](https://github.com/liferay/clay/compare/v3.44.1...v3.44.2) (2022-01-12)

### Bug Fixes

-   **@clayui/css:** Cadmin Nav adds `background-color` to `.active` pseudo element ([865b037](https://github.com/liferay/clay/commit/865b037338d3f10c28823c076aa3f93a525dbf5e)), closes [#4562](https://github.com/liferay/clay/issues/4562)
-   **@clayui/css:** Mixins `clay-button-variant` removes unnecessary `setter()`'s ([3709d7f](https://github.com/liferay/clay/commit/3709d7fae89656e9fa3db2acc3ba0b539cbb8c2b)), closes [#4550](https://github.com/liferay/clay/issues/4550)

## [3.44.1](https://github.com/liferay/clay/compare/v3.44.0...v3.44.1) (2022-01-11)

### Bug Fixes

-   **@clayui/core:** remove the context property from DndProvider ([4faf0ea](https://github.com/liferay/clay/commit/4faf0ea2049744b0587afec3ca2ee02bf916fe4d))
-   **@clayui/css:** Mixins `clay-card-variant` allow styling before and after psuedo elements ([69f1d38](https://github.com/liferay/clay/commit/69f1d38a8d626c11e68bc82569698e7caa9e164b)), closes [#4554](https://github.com/liferay/clay/issues/4554)

# [3.44.0](https://github.com/liferay/clay/compare/v3.43.1...v3.44.0) (2022-01-10)

### Bug Fixes

-   **@clayui/css:** Cadmin Input Groups `input-group-sm` missing mixin declaration ([d7027be](https://github.com/liferay/clay/commit/d7027be048b1cbc21795bf961ea4e53ac2395f53)), closes [#4537](https://github.com/liferay/clay/issues/4537)
-   **@clayui/css:** Cards `form-check-card` remove duplicate hover state style ([17ea640](https://github.com/liferay/clay/commit/17ea640507edd0789366d418c730a6f8c5e7f02d))
-   **@clayui/css:** Mixins Cards check if parameter is map to avoid must be a map error ([2174587](https://github.com/liferay/clay/commit/21745877e04375b22bcccc069c9e9825b05fe9ed))
-   **@clayui/css:** Mixins Custom Forms remove `setter()`, no longer needed ([4cb30ce](https://github.com/liferay/clay/commit/4cb30ce52bcc3e04daa6be32056bb4dc89100059))

### Features

-   **@clayui/css:** Cadmin Nav adds `nav-divider` and `nav-divider-end` ([66ba6ce](https://github.com/liferay/clay/commit/66ba6ced48e5e30b6635eb0c19c7d7c631166a63))
-   **@clayui/css:** Cards `form-check-card` checkbox/radio input should be hidden unless position utilities are used ([3120797](https://github.com/liferay/clay/commit/31207976cd1bffb0c4b2309d47a2121232902f38)), closes [#4544](https://github.com/liferay/clay/issues/4544)
-   **@clayui/css:** Cards `form-check-card` convert to Clay mixin pattern ([5b4424b](https://github.com/liferay/clay/commit/5b4424b38eb9f5e6e18ecfb7eb4e1231eb26ba78))
-   **@clayui/css:** Mixin `clay-card-variant` make `form-check-card` and `form-check-input` customizable ([c6a3a6f](https://github.com/liferay/clay/commit/c6a3a6f2c8b00c930b4a0c0b3ab5990cc743933d))
-   **@clayui/css:** Mixins `clay-custom-control-input-variant` add option to customize card ([87682d2](https://github.com/liferay/clay/commit/87682d2c9f2392896f27bbd1a36433e9c96918a3))
-   **@clayui/css:** Mixins `clay-navbar-variant` adds option to customize `nav-divider` and `nav-divider-end` ([e58c23e](https://github.com/liferay/clay/commit/e58c23e8465daf1b46235d3e7e228658b13326e9))
-   **@clayui/css:** Mixins Card adds `clay-form-check-card-variant` ([a834502](https://github.com/liferay/clay/commit/a8345029dac2ffdcdf9e59ea77d22224aa27f5dc))
-   **@clayui/css:** Nav adds `nav-divider` and `nav-divider-end` ([600a379](https://github.com/liferay/clay/commit/600a379eebea42761ff36ae1e0b52f804465b854))
-   **@clayui/css:** SVG Icons adds date-time ([4bf8d4c](https://github.com/liferay/clay/commit/4bf8d4cf7125f99b7948728cb873ed565115b30b))
-   **@clayui/popover:** add a closeOnClickOutside prop ([bd722a9](https://github.com/liferay/clay/commit/bd722a997961b7b18b1d0c9929c016cd0606e4e4)), closes [#4536](https://github.com/liferay/clay/issues/4536)

## [3.43.1](https://github.com/liferay/clay/compare/v3.43.0...v3.43.1) (2022-01-04)

### Bug Fixes

-   **@clayui/core:** avoid async/await in TreeViewItem ([78f8585](https://github.com/liferay/clay/commit/78f8585f4974e9126aa61afae64454b58df52964)), closes [#4529](https://github.com/liferay/clay/issues/4529) [#4531](https://github.com/liferay/clay/issues/4531)
-   **@clayui/core:** don't export TreeView as UNSAFE_TreeView ([fc54a6e](https://github.com/liferay/clay/commit/fc54a6e84aacbff192072aa07601eb8f884fbd58)), closes [#4528](https://github.com/liferay/clay/issues/4528) [#4531](https://github.com/liferay/clay/issues/4531) [#4532](https://github.com/liferay/clay/issues/4532)

# [3.43.0](https://github.com/liferay/clay/compare/v3.42.0...v3.43.0) (2021-12-29)

### Bug Fixes

-   **@clayui/card:** remove unnecessary backgroundImageAspectRatio property ([720a38d](https://github.com/liferay/clay/commit/720a38deafe081bb629c2072f810a0a4ed9579cf))
-   **@clayui/css:** Alerts set `white-space: normal` ([2cc5b51](https://github.com/liferay/clay/commit/2cc5b51cb5d7d599a31422ba3fbabefa1961409f))
-   **@clayui/css:** Atlas Buttons some disabled button-outline variants have white text on hover ([fb9c4fe](https://github.com/liferay/clay/commit/fb9c4fe90eeac731040b17b67a495db5d6126604))
-   **@clayui/css:** Cadmin Alerts set `white-space: normal` ([bca3c47](https://github.com/liferay/clay/commit/bca3c4756fe955f64ebd782e148e576fc2b3feaf))
-   **@clayui/css:** Cadmin convert a few places where we are still using slash as division ([beaf881](https://github.com/liferay/clay/commit/beaf88176faa61d255bc3b5f85f241289c13b2d3))
-   **@clayui/css:** Mixin `clay-label-variant` check if parameter is map to avoid not a map error ([2153059](https://github.com/liferay/clay/commit/2153059fd85641fc8a68b522a9f4c6c2a8101833))
-   **@clayui/css:** Mixins `clay-dropdown-item-variant` split up `&.autofit-row` and `.autofit-row` ([a314710](https://github.com/liferay/clay/commit/a314710648299206b6b1b36d55a83eb673dcfa51))
-   **@clayui/css:** Mixins `clay-dropdown-menu-variant` allow customizing `.dropdown-item` ([45cb0e5](https://github.com/liferay/clay/commit/45cb0e55ded31ef6bac7051daafb2195acbffd7d))
-   **@clayui/css:** Mixins `clay-nav-variant` don't set to empty map ([22f183d](https://github.com/liferay/clay/commit/22f183db56be3806fc7e8aaeae0fa1ff81bbcac4))
-   **@clayui/navigation-bar:** fix error when rendering only one Item ([b3917bb](https://github.com/liferay/clay/commit/b3917bb980ac672ba2a4505d4c249c43102a06fa))
-   **@clayui/navigation-bar:** let children be an array or a single child ([5ed78ae](https://github.com/liferay/clay/commit/5ed78ae68f3baa98cbb8b3ccfba19be0f037ebe4))

### Features

-   **@clayui/core:** expand child nodes when parent is checked ([606322a](https://github.com/liferay/clay/commit/606322ace1bba75c1d1ba152a067082e1788c0fd)), closes [#4523](https://github.com/liferay/clay/issues/4523)
-   **@clayui/css::** Mixin update `clay-nav-variant` to output selectors related to nav ([743d75a](https://github.com/liferay/clay/commit/743d75a87ba9c4bfc9d00e5d7f4ee13d5da73700))
-   **@clayui/css:** Buttons allow a variety of button variants via `$btn-palette` / `$btn-outline-palette` ([3d46a41](https://github.com/liferay/clay/commit/3d46a41cdff663ff044c722f8a14c94ddeaff307))
-   **@clayui/css:** Buttons allow setting a variety of button sizes via `$btn-sizes` and `$btn-monospaced-sizes` ([a29764a](https://github.com/liferay/clay/commit/a29764a1e9bfe71636fae0c6741f8ec1500466ed))
-   **@clayui/css:** Cadmin Dropdown adds `dropdown-menu-width-shrink` ([1d86dfa](https://github.com/liferay/clay/commit/1d86dfa0a4ae2259d0df3913e642c4c42c394a04))
-   **@clayui/css:** Cadmin Input Group convert to Clay mixin pattern ([4d1592b](https://github.com/liferay/clay/commit/4d1592b4c4e953b337ee20f95bb51f7079f1b668))
-   **@clayui/css:** Cadmin Nav convert to using `clay-css` mixin pattern ([d79e115](https://github.com/liferay/clay/commit/d79e115b3f9042349934142d5a1861ea10898d3b))
-   **@clayui/css:** Dropdown adds `dropdown-menu-width-shrink` ([b5f9a8d](https://github.com/liferay/clay/commit/b5f9a8d6e6cd7a40967eebbdaf3c68180fb8c290))
-   **@clayui/css:** Input Group convert to Clay mixin pattern ([98d8319](https://github.com/liferay/clay/commit/98d8319d37d79a48de79ecae5db65484e84ab8f6))
-   **@clayui/css:** Mixin `clay-form-control-variant` adds `input-group-inset-item` ([391e5d9](https://github.com/liferay/clay/commit/391e5d99a9787d6c458582eefefdf3245a454ad5))
-   **@clayui/css:** Mixin adds `clay-input-group-variant`, `clay-input-group-item-variant` ([6e02e60](https://github.com/liferay/clay/commit/6e02e60f30ccc4a1dad82e9679030167746bdb8b))
-   **@clayui/css:** Nav convert to using `clay-css` mixin pattern ([03881e7](https://github.com/liferay/clay/commit/03881e76636698adfb9807bd896bbaf26263f1ab))
-   **@clayui/date-picker:** adds 12-hour time support ([43863ce](https://github.com/liferay/clay/commit/43863ce20d92ea7dffce06f1071192a68e7eae80))
-   **@clayui/drop-down:** adds `shrink` modifier support to DropDown.Menu ([e770a1f](https://github.com/liferay/clay/commit/e770a1f47f53705e94aec9ba0abbf2a079fe3bbf))
-   **@clayui/multi-step-nav:** add the new `indicatorLabel` API to indicate the position of the indicator label ([bb43ff8](https://github.com/liferay/clay/commit/bb43ff8d538e96e9ac5d6b635ef937abc112657a))

# [3.42.0](https://github.com/liferay/clay/compare/v3.41.0...v3.42.0) (2021-12-15)

### Bug Fixes

-   **@clayui/color-picker:** Add active and onActiveChange props ([4c7c683](https://github.com/liferay/clay/commit/4c7c68365b609ba11220f4ca65ed41459e878701))
-   **@clayui/css:** Atlas Pagination focus shadow should match Lexicon's ([1f677e2](https://github.com/liferay/clay/commit/1f677e2566162aa7f6618dcdd03cf2beea98e8e3))
-   **@clayui/css:** Button Group `.dropdown-toggle-split` should use calc to calculate padding ([8d88a2d](https://github.com/liferay/clay/commit/8d88a2d913cbb4b71cfd1db2121c69b91ce51291)), closes [#4499](https://github.com/liferay/clay/issues/4499)
-   **@clayui/css:** Cadmin convert maps being passed into `clay-navbar-variant` to use new keys ([8aa1044](https://github.com/liferay/clay/commit/8aa104429e988dfd26d4a8c982e9612d5ec775e5))
-   **@clayui/css:** Cadmin Navbar Component Variants only output media query (md) styles used in DXP ([2477c7e](https://github.com/liferay/clay/commit/2477c7e2f00d7312b09f34b7285794e45063740f))
-   **@clayui/css:** Cadmin Pagination update map keys to use newer keys ([9beabca](https://github.com/liferay/clay/commit/9beabcaf3b80c66f0d733b3e5e521baef5029022))
-   **@clayui/css:** Convert maps being passed into `clay-navbar-variant` to use new keys ([4f4ba86](https://github.com/liferay/clay/commit/4f4ba86b9e52832f3f0fc7bae03e52373ea01b3d))
-   **@clayui/css:** Declares `border-color` and `border-style` for Management Bar and Navigation Bar base ([e67c284](https://github.com/liferay/clay/commit/e67c284da1be8c973f8dd61dc2d5aeb3c5b882b9))
-   **@clayui/css:** Mixin `clay-button-variant` unbundles `.show` from `.active` ([73227a0](https://github.com/liferay/clay/commit/73227a04e1eede6c8a6af36ec35674366480e98a))
-   **@clayui/css:** Mixin `clay-toggle-switch-bar-variant` adds `.button-icon-off` selector ([6d3e8fe](https://github.com/liferay/clay/commit/6d3e8fe316745272674df665e62ff64d7836bdee)), closes [#4486](https://github.com/liferay/clay/issues/4486)
-   **@clayui/css:** Mixins \_links.scss check if parameter is type map before processing ([385fd6b](https://github.com/liferay/clay/commit/385fd6bc8c31a2f781b547ad5f46baf138654093))
-   **@clayui/css:** Mixins `clay-link` and `clay-close` Removes the `.show > &` selector ([9b523cf](https://github.com/liferay/clay/commit/9b523cfb010eda51b87dcdaf2ca79547cf4b2d03))
-   **@clayui/css:** Mixins `clay-navbar-variant` convert to `clay-css` mixin pattern ([59b722b](https://github.com/liferay/clay/commit/59b722b264ed286457a9cbb7570e859f900b632d))
-   **@clayui/css:** Mixins `clay-navbar-variant` don't output properties if param is empty map ([e6230e7](https://github.com/liferay/clay/commit/e6230e7fefd6925b3f1a1006c347ee193fbdadd6))
-   **@clayui/css:** Mixins check if parameter is map to avoid must be a map error ([a128597](https://github.com/liferay/clay/commit/a12859733069ae5be9acac6a1a21db1aaf0b374c))
-   **@clayui/css:** Multi Step Nav use calc to calculate sizing for CSS variable compatibility ([96dde7e](https://github.com/liferay/clay/commit/96dde7efd773d8ea06455bb59fa71ee66eebe8d4)), closes [#4498](https://github.com/liferay/clay/issues/4498)
-   **@clayui/css:** Navbar Component Variants only output media query (md) styles used in DXP ([7435d7d](https://github.com/liferay/clay/commit/7435d7d9df9de832fbf0ec7d671d2c5336a2665b))
-   **@clayui/css:** replace filter icon ([8231dae](https://github.com/liferay/clay/commit/8231daec61ec59df1ca25f3fcd56320ef582d214)), closes [#4490](https://github.com/liferay/clay/issues/4490)
-   **@clayui/css:** Toggle Switch increase specificity of `simple-toggle-switch` ([8f86cd6](https://github.com/liferay/clay/commit/8f86cd662d2d25be6166edaebccf14f4841d2b7b)), closes [#4484](https://github.com/liferay/clay/issues/4484)
-   **@clayui/form:** add missing "textarea" type to Input's component prop ([b0a3b89](https://github.com/liferay/clay/commit/b0a3b8915d9a5a04838d684b41b9a3a53d9fdc05)), closes [#4477](https://github.com/liferay/clay/issues/4477)
-   **clayui.com:** updates Google Analytics ID ([f6976f4](https://github.com/liferay/clay/commit/f6976f40642a35c4d24ef11ba8b31e633af9eb40))

### Features

-   **@clayui/css:** Cadmin Pagination convert to use clay mixins ([56947b5](https://github.com/liferay/clay/commit/56947b5d3c224de94a6c0a58141bc6f584e73837))
-   **@clayui/css:** Cadmin Popovers generate styles using `clay-css` mixin ([d40ef1f](https://github.com/liferay/clay/commit/d40ef1f149d4c3cfdcc17f193f6ecebbd56ecd99))
-   **@clayui/css:** Cadmin Tooltip generate styles using `clay-tooltip-variant` mixin ([df4011e](https://github.com/liferay/clay/commit/df4011e986ab82722d1bf660d4f285bfa8beee7c))
-   **@clayui/css:** Mixins `clay-button-variant` adds option to style `::before` and `::after` ([4003b59](https://github.com/liferay/clay/commit/4003b5921848105c32e1fdb379b3caee388cd070))
-   **@clayui/css:** Mixins `clay-navbar-variant` should be able to output `clay-navbar-size` selectors ([ffaee2a](https://github.com/liferay/clay/commit/ffaee2ad2dca18b042faedbaffb88bd93b138d2a))
-   **@clayui/css:** Mixins adds `clay-pagination-items-per-page-variant` and `clay-pagination-variant` ([84fff62](https://github.com/liferay/clay/commit/84fff623bf2e8d58d370a9dfdbf9e4c0a101af82))
-   **@clayui/css:** Mixins adds `clay-popover-variant` ([9dc84b1](https://github.com/liferay/clay/commit/9dc84b1ec6b10d81b12cdcd7960915441b0b37ae))
-   **@clayui/css:** Mixins adds `clay-tooltip-variant` ([5bb6319](https://github.com/liferay/clay/commit/5bb631962c8217d4d208f0371991a2e64a9e5953))
-   **@clayui/css:** Pagination convert to use clay mixins ([188ed54](https://github.com/liferay/clay/commit/188ed5460ac9279a34835729a7224b0ebe819faf))
-   **@clayui/css:** Popovers generate styles using `clay-css` mixin ([6a5c2f6](https://github.com/liferay/clay/commit/6a5c2f6f8b30e9f9a69bcd278a4cd1f39cd6c0cb))
-   **@clayui/css:** Tooltip generate styles using `clay-tooltip-variant` mixin ([20f89e5](https://github.com/liferay/clay/commit/20f89e5030bad35296064e04fd6d4cedcbb97573))

### BREAKING CHANGES

-   **@clayui/css:** We previously output `navbar-expand-{sm|md|lg|xl}` for the variants of:

    -   Application Bar
    -   Management Bar
    -   Navigation Bar
    -   Sidebar Navigation Bar

We only output those that are needed namely, `navbar-expand-md`. If you relied upon other breakpoints you will need to declare them in the respective Sass map or set:

```
$application-bar-base: (
	media-breakpoint-down: $c-unset,
	media-breakpoint-up: $c-unset,
);
```

to revert back to the old way.

-   **@clayui/css:** The mixin `clay-navbar-variant` output `border-color: transparent` and `border-style: solid` by default. This has been removed to reduce unnecessary CSS. You will need to declare them in your Sass map if you relied upon it.

# [3.41.0](https://github.com/liferay/clay/compare/v3.40.1...v3.41.0) (2021-12-02)

### Bug Fixes

-   **@clayui/core:** Disable checkbox while loading ([3893df3](https://github.com/liferay/clay/commit/3893df3669bb9ef7039f8556d0a14a9df5e194a5))
-   **@clayui/css:** Atlas `select.form-control` size and multiple styles should match Lexicon ([b357b31](https://github.com/liferay/clay/commit/b357b313609b4057bd5c8fc185c40603b1f63314))
-   **@clayui/css:** Cadmin `select.form-control` size and multiple styles should match Lexicon ([7e73f27](https://github.com/liferay/clay/commit/7e73f27ed87b8fc271e5382951b5d965dc9de70f))
-   **@clayui/css:** Mixin `clay-link` nested `disabled:(active: ())` should output styles ([4492f57](https://github.com/liferay/clay/commit/4492f570c898c7d91e47b98d5ce60579d9890683))
-   **clayui.com:** Incorrect import for ClayCardWithNavigation ([b2cc9a7](https://github.com/liferay/clay/commit/b2cc9a726d920ad064c65acd12f48308aa4b3d36))

### Features

-   **@clayui/core:** add a loading indicator to the TreeView ([7704b93](https://github.com/liferay/clay/commit/7704b93edfa91160d678efc5359938d585600bfc)), closes [#4443](https://github.com/liferay/clay/issues/4443)
-   **@clayui/css:** \_reboot convert `a` tag to use `clay-link` mixin ([47d6130](https://github.com/liferay/clay/commit/47d61303b92242a2bf9046591bcd5d233439698f))
-   **@clayui/css:** Cadmin \_reboot convert `a` tag to use `clay-link` mixin ([45536f4](https://github.com/liferay/clay/commit/45536f479c16d11c83ece58bac213e05af3c862c))
-   **@clayui/css:** Cadmin Form Validation use `clay-form-validation-variant` to generate states ([91bbc2a](https://github.com/liferay/clay/commit/91bbc2a5b66f1f1b037667b22c3783f915c39514))
-   **@clayui/css:** Cadmin Toggle Switch convert to use new mixins ([f95b701](https://github.com/liferay/clay/commit/f95b701d921cc54279777f3cb1a732bf42791178))
-   **@clayui/css:** Form Validation use `clay-form-validation-variant` to generate states ([3efaea8](https://github.com/liferay/clay/commit/3efaea84dcda8cf935762865c351d55b46a73b59))
-   **@clayui/css:** Mixins `clay-css` adds more text decoration properties ([ef06c5b](https://github.com/liferay/clay/commit/ef06c5be63daed03eafb0ec5f558d1e82e85976a)), closes [#4447](https://github.com/liferay/clay/issues/4447)
-   **@clayui/css:** Mixins `clay-link` add option to style ::before and ::after ([330931e](https://github.com/liferay/clay/commit/330931e42081b8fac6d4674620521c7a1f8b9d0d))
-   **@clayui/css:** Mixins `clay-link` adds customization for `:link` and `:visited` ([8a45963](https://github.com/liferay/clay/commit/8a45963a36752f34f9a9ad1b48f1325557d87481))
-   **@clayui/css:** Mixins `clay-select-variant` adds more configuration options ([983de0f](https://github.com/liferay/clay/commit/983de0f0be71f9e696b1458a9126455cebf39e30))
-   **@clayui/css:** Mixins Forms `clay-form-validation-variant` adds more selectors ([99a311b](https://github.com/liferay/clay/commit/99a311bd6da14ba278cc0da0dbcd8d865fe7a08b))
-   **@clayui/css:** Mixins Forms adds `clay-form-validation-variant` ([22e2d02](https://github.com/liferay/clay/commit/22e2d02823344ecd72fefa4b19bbc3e1ec1fe601))
-   **@clayui/css:** Mixins Toggle Switch adds a few variant mixins for generating selectors ([e45125e](https://github.com/liferay/clay/commit/e45125e363646d57f33338a2aae2c060c6763623))
-   **@clayui/css:** Toggle Switch convert to use new mixins ([687a18b](https://github.com/liferay/clay/commit/687a18bdee2a165fcf1bb4b3ad081693a0865553))

## [3.40.1](https://github.com/liferay/clay/compare/v3.40.0...v3.40.1) (2021-11-17)

### Bug Fixes

-   **@clayui/css:** revert change to rename variable files ([f951d25](https://github.com/liferay/clay/commit/f951d25bc51cc6e7a509d67692a22a3f2b22eaff))

# [3.40.0](https://github.com/liferay/clay/compare/v3.39.0...v3.40.0) (2021-11-17)

### Bug Fixes

-   **@clayui/css:** `atlas-variables.scss` and `base-variables.scss` should be Sass partials. The CSS equivalent shouldn't be created since these files are only meant to be consumed by `.scss` files. ([5aaa87e](https://github.com/liferay/clay/commit/5aaa87ef21345877e8c287698e431832ccf43f94))
-   **@clayui/css:** C Kbd and Cadmin C Kbd allow passing in properties to `.c-kbd-group > .c-kbd`, `.c-kbd-group-sm > .c-kbd`, and `.c-kbd-group-lg > .c-kbd` from their respective Sass map variables ([5a9ad67](https://github.com/liferay/clay/commit/5a9ad676078dcafc6407e8ac10342b4a69d30873)), closes [#4367](https://github.com/liferay/clay/issues/4367)
-   **@clayui/css:** Cadmin Cards use the mixin `clay-card-variant` instead of deprecated mixins to generate styles for `.card-type-asset`, `.image-card`, `.user-card `, `.card-type-directory` ([7a8b6f7](https://github.com/liferay/clay/commit/7a8b6f72e9ca88997fd0164739d6f023b7a2eb96))
-   **@clayui/css:** Cadmin Input Group move `.btn` and `.form-control` z-index styles to `input-group-prepend` and `input-group-append`. Input Groups input disappears when focused inside a modal with iframe. ([07f17ce](https://github.com/liferay/clay/commit/07f17ce8d34747452a999d70de98a801555caff2))
-   **@clayui/css:** Cards use the mixin `clay-card-variant` instead of deprecated mixins to generate styles for `.card-type-asset`, `.image-card`, `.user-card `, `.card-type-directory` ([e244162](https://github.com/liferay/clay/commit/e24416210197c9ce793996bb68bddfda1880eb1c))
-   **@clayui/css:** Icons make them more configurable via `$lexicon-icon`, `$lexicon-icon-sm`, `$lexicon-icon-lg`, `$lexicon-icon-xl` Sass maps ([efe1b80](https://github.com/liferay/clay/commit/efe1b80c5e78886f7eb7b0d938ab84a434311c55))
-   **@clayui/css:** Input Group move `.btn` and `.form-control` z-index styles to `input-group-prepend` and `input-group-append`. Input Groups input disappears when focused inside a modal with iframe. ([64bd8c8](https://github.com/liferay/clay/commit/64bd8c8b6337087191cd715dffcc2295670c3e51))
-   **@clayui/css:** Labels and Cadmin Labels Sass maps that are used for `clay-label-variant` hover and focus keys should be nested in `href`. The values are output for the selectors `.label[href]`, `.label[type]`, and `.label[tabindex]`. ([c9e6442](https://github.com/liferay/clay/commit/c9e644207d7ab5704b89ac206fa21a3482007664)), closes [#4383](https://github.com/liferay/clay/issues/4383)
-   **@clayui/css:** Mixins `clay-card-variant` adds option to output styles for: ([c3e4149](https://github.com/liferay/clay/commit/c3e4149de2a22af688f1bc67510873dafb39f6b5))
-   **@clayui/css:** Mixins `clay-card-variant` adds options to configure `&.hover`, `&.focus`, and `&:disabled, &.disabled` ([16affad](https://github.com/liferay/clay/commit/16affad472d889d5055b2d8b15060e101adc4a00))
-   **@clayui/css:** Mixins `clay-card-variant` inlines the `setter`'s that aren't providing any mapping from old keys to new keys ([f0627a8](https://github.com/liferay/clay/commit/f0627a8854de1a65b5b794d018ae58b82b07276e))
-   **@clayui/css:** Mixins `clay-card-variant` moves the selector `&.card, .card` ([b2f0f19](https://github.com/liferay/clay/commit/b2f0f19c2db55c32661684a09cffe3f391825cc5))
-   **@clayui/css:** Mixins `clay-card-variant` should be able to output selectors for `clay-card-type-asset-variant`, but removes the default values generated in `clay-card-type-asset-variant` so it doesn't pollute the final CSS with unused rule-sets. ([7bb6050](https://github.com/liferay/clay/commit/7bb6050031cbf8579b6d3153523641610d2cdf55))
-   **@clayui/css:** Mixins `clay-card-variant` should be able to output selectors for `clay-card-type-asset`, but removes the default values generated in `clay-card-type-asset` so it doesn't pollute the final CSS with unused rule-sets. ([0a3bba0](https://github.com/liferay/clay/commit/0a3bba02f9cad24cc6d166e1020f6aa60d57a0a9))
-   **@clayui/css:** Mixins `clay-css` should generate `will-change` property ([b176c5b](https://github.com/liferay/clay/commit/b176c5b89556d78a1fa65ae280b345e65460bc9a))
-   **@clayui/css:** Mixins `clay-dropdown-item-variant` adds option to output styles for `::before` and `::after` pseudo elements for default, hover, focus, active, .active, and disabled states ([8369276](https://github.com/liferay/clay/commit/83692765eb66d156b877ca2a803babf6f96e9ec5)), closes [#4403](https://github.com/liferay/clay/issues/4403)
-   **@clayui/css:** Mixins `clay-label-variant` target [tabindex] instead of [tabindex="0"] so styles still apply when an element is disabled with negative tabindex ([734470e](https://github.com/liferay/clay/commit/734470ebfc567db067560e6fac5bd79835281f55))
-   **@clayui/css:** Mixins `clay-link` changes `[@at-root](https://github.com/at-root) { button#{&} { :focus {} } }` to `&[type]:focus` this causes issues for compound selectors. It will generate `button.a .compound-selector` instead of `.a button.compound-selector`. This fix targets the `type` attribute which should be on every button element. ([5ca9e6d](https://github.com/liferay/clay/commit/5ca9e6d0a8d0763f6d1d1ae1f66213f769655694))
-   **@clayui/css:** Update map keys that are used in `clay-link` to use newer property names and nesting ([d6a25df](https://github.com/liferay/clay/commit/d6a25df57c441f28b19185abf9baba0d3d8823b2))
-   **@clayui/drop-down:** Provide a default on submit function to avoid form navigation ([60a37aa](https://github.com/liferay/clay/commit/60a37aad7b58e7525c7fb681bcb01cb0f3106adf))
-   **@clayui/provider:** removes dependency from ClayModal to avoid circular dependency issues ([0b8eade](https://github.com/liferay/clay/commit/0b8eade03bc6a12284662cb5e42d7b1fdb87c20f))
-   **@clayui/shared:** fixes error when considering an element with negative tabIndex ([da143f0](https://github.com/liferay/clay/commit/da143f09b21c889a3f6586af0f1aa20bd944c60b))
-   **@clayui/shared:** fixes error when considering an element with negative tabIndex ([9e40c0f](https://github.com/liferay/clay/commit/9e40c0f75c41b9f6cd48e9b5e48f5abde75eda07))

### Features

-   **@clayui/core:** add an onRenameItem callback ([779f3da](https://github.com/liferay/clay/commit/779f3da83e889c382e39efabef872fc58f1e210a))
-   **@clayui/core:** add an onRenameItem callback ([add2796](https://github.com/liferay/clay/commit/add2796b89b1048525515b1ce470d713e34b9b20))
-   **@clayui/core:** make it possible to enable or disable drag and drop ([5367061](https://github.com/liferay/clay/commit/536706168e53b427d95fce5dacf18467f6f005ab))
-   **@clayui/css:** Alerts convert `.alert-fluid` to use `clay-alert-variant` mixin ([15f9355](https://github.com/liferay/clay/commit/15f935538eb75324ac455df124dfd5f36f322ad4))
-   **@clayui/css:** Cadmin Alerts convert `.alert-fluid` to use `clay-alert-variant` mixin ([3f3f34e](https://github.com/liferay/clay/commit/3f3f34e4b27addc567ea1056bb1436b5712190ac))
-   **@clayui/css:** Cadmin Dropdowns add Sass map `$cadmin-dropdown-menu` and generate styles for `.dropdown-menu` using `clay-dropdown-menu-variant` ([bbc031a](https://github.com/liferay/clay/commit/bbc031a66f82bba331950491dea5fd20fea44db6))
-   **@clayui/css:** Cadmin Dropdowns convert `.dropdown-toggle`, `.dropdown-subheader`, `.dropdown-caption`, `.dropdown-item-text`, `.dropdown-section`, `.dropdown-divider`, `.dropdown-action`, and dropdown-menu positional utilities to use Sass maps instead of variables ([1f11eba](https://github.com/liferay/clay/commit/1f11ebaf69613410041ea93571a186929dd64419))
-   **@clayui/css:** Dropdowns add `$dropdown-menu` Sass map and generate properties using it ([a0d2382](https://github.com/liferay/clay/commit/a0d23828be00c2a050407058b3199f75449a6b6c))
-   **@clayui/css:** Dropdowns convert `.dropdown-toggle`, `.dropdown-subheader`, `.dropdown-caption`, `.dropdown-item-text`, `.dropdown-section`, `.dropdown-divider`, `.dropdown-action`, and dropdown-menu positional utilities to use Sass maps instead of variables ([0cb1ce7](https://github.com/liferay/clay/commit/0cb1ce74bf95697b6448287488675e77e0d5c828))
-   **@clayui/css:** Forms adds `.form-fieldset` and `.form-legend` to provide alternative fieldset and legend styles without overriding all `fieldset` and `legend` elements ([3fc7449](https://github.com/liferay/clay/commit/3fc7449e2a2ff17aad828c0a5f0d823147739e5b))
-   **@clayui/css:** Mixins `clay-alert-variant` adds option to pass in styles to `&.alert-dismissible`, `&.alert-dismissible .container-fluid`, `.alert-indicator .lexicon-icon`, and `.container-fluid` ([807c612](https://github.com/liferay/clay/commit/807c612b29d00e1a4307da499ebd63a5b054598f))
-   **@clayui/css:** Mixins `clay-css` if parameter is not type map don't do anything ([b994e78](https://github.com/liferay/clay/commit/b994e783814b68f98db184b2d42100f37419053e))
-   **@clayui/css:** Mixins `clay-dropdown-menu-variant` add customizing `&::before`, `&::after`, and `&.show` ([57903de](https://github.com/liferay/clay/commit/57903deedc8f15ef22c6f813ffa697f790e6c0a6))
-   **@clayui/css:** Mixins `clay-link` and `clay-button-variant` adds option to customize `inline-item`, `inline-item-before`, `inline-item-middle` and `inline-item-after` in default, hover, focus, active, active-class, and disabled states. ([84fb0d0](https://github.com/liferay/clay/commit/84fb0d07ee6cf19cec663d0e7926ff629eec5655)), closes [#4413](https://github.com/liferay/clay/issues/4413)
-   **@clayui/css:** Reboot put `fieldset` and `legend` styles in Sass maps `$fieldset` and `$legend` ([92e8254](https://github.com/liferay/clay/commit/92e8254a7c0a2a5c88d93e7fb9d6cd209bab5f03))

# [3.39.0](https://github.com/liferay/clay/compare/v3.38.0...v3.39.0) (2021-10-29)

### Bug Fixes

-   **@clayui/css:** Adds division polyfill `clay-div` a function that uses `/` as a division operation if the function `div()` does not exist ([87aec12](https://github.com/liferay/clay/commit/87aec12bf9d5f64f8f3c69cfcb8dd20873bab59d))
-   **@clayui/css:** Cadmin Dropdowns updates `$dropdown-item-base` keys to newer nested keys pattern and remove duplicate `$dropdown-item-base` ([6fc1833](https://github.com/liferay/clay/commit/6fc18336832ba4f0a5827b4daa993d499bde5e13))
-   **@clayui/css:** Convert forward slash as division `/ 2` to ` * 0.5` as work around for `dart-sass` deprecation message ([aa74003](https://github.com/liferay/clay/commit/aa74003bd3c711b093fe1d05cf16a7332e762ceb))
-   **@clayui/css:** Convert forward slash as division `/` to multiplication as work around for `dart-sass` deprecation message ([f9948ec](https://github.com/liferay/clay/commit/f9948ec6ed21fddee13f50ff0d383196f90cd530))
-   **@clayui/css:** Dropdown and Cadmin Dropdown removes `dropdown-menu::after` padding hack for Firefox. This is no longer an issue. ([54a0b08](https://github.com/liferay/clay/commit/54a0b08a24baa6690176dcf863902d9c2048217c))
-   **@clayui/css:** Dropdowns updates `$dropdown-item-base` keys to newer nested keys pattern ([502ea21](https://github.com/liferay/clay/commit/502ea21227bff2e1e6d6e96ed0e959ff537ad6ca))
-   **@clayui/css:** Mixins `clay-dropdown-item-variant` update to accept newer nested keys pattern and deprecate keys: ([bcc0e89](https://github.com/liferay/clay/commit/bcc0e8936acf21049bfb9c04f5a63f61c4a49d56))
-   **@clayui/css:** Mixins `clay-dropdown-menu-variant` removes `dropdown-menu::after` padding hack for Firefox ([a7e2c18](https://github.com/liferay/clay/commit/a7e2c186b9a1d363fbe27fd26bdcf68ebfbd358f))
-   **@clayui/css:** Use `calc()` for calculating widths and sizes instead of Sass division `/` and don't use Sass percentage function ([1b2e127](https://github.com/liferay/clay/commit/1b2e127ef4dbefe676c7a5ea221e3182c6d2d578))
-   **@clayui/css:** use correct icon names for flags in spritesheet ([4127aec](https://github.com/liferay/clay/commit/4127aec31bcc41f5b5c84a95e3cc8f692239be3c))
-   fixes error when starting `yarn develop` command of the clayui.com ([fa0d8c0](https://github.com/liferay/clay/commit/fa0d8c06498db8d41fc025f6ff6ef912dc97228e))

### Features

-   **@clayui/css:** Add `heading`, `maps`, `order-ascending` and `order-descending` SVG icons and update `geolocation` SVG icon ([319f37f](https://github.com/liferay/clay/commit/319f37f07669e66cee6461d8ab6738f79832c3f5))
-   **@clayui/css:** Cadmin Custom Forms `custom-control`, `custom-checkbox`, and `custom-radio` convert to using Sass map pattern ([c8826b2](https://github.com/liferay/clay/commit/c8826b261555035d846d593aad8f1cf4cdc1c1e5))
-   **@clayui/css:** Cadmin Labels convert to using new Sass map pattern ([50a1708](https://github.com/liferay/clay/commit/50a17081ece5724e149f643fa8d96331f89eeda6))
-   **@clayui/css:** Cadmin Stickers adds `$cadmin-sticker-sizes` Sass map to generate sticker sizes and use Sass placeholders for sticker sizes for easier extends ([2630c54](https://github.com/liferay/clay/commit/2630c541f40d6f30838b0f59cc1b73ae7830448c))
-   **@clayui/css:** Custom Forms `custom-control`, `custom-checkbox`, and `custom-radio` convert to using Sass map pattern ([d60970d](https://github.com/liferay/clay/commit/d60970d4a122987892ed90f88ee0abed6d50ce8d))
-   **@clayui/css:** Labels convert to using new Sass map pattern ([1de502f](https://github.com/liferay/clay/commit/1de502fe58ad98c15ed54769812275e6e2ae1695))
-   **@clayui/css:** Mixins `clay-sticker-variant` expand mixin to include most use cases in Clay and make it compatible with deprecated `clay-sticker-size` mixin ([3e703ed](https://github.com/liferay/clay/commit/3e703ed72995339202671effeb971ad263d88354))
-   **@clayui/css:** Mixins Custom Forms adds `clay-custom-control-input-variant` and `clay-custom-control-variant` mixins ([3060c0b](https://github.com/liferay/clay/commit/3060c0b1af1b53578469d9e6bfca6083802aa199))
-   **@clayui/css:** Mixins update `clay-label-variant` to provide selectors that are generated by `clay-label-size` (deprecated) and conver to using new Sass map key pattern while still supporting older key names ([c0c9a1c](https://github.com/liferay/clay/commit/c0c9a1c97f0ada99f05f99a86d5382f32b265a20))
-   **@clayui/css:** Stickers adds `$sticker-sizes` Sass map to generate sticker sizes and use Sass placeholders for sticker sizes for easier extends ([2da3013](https://github.com/liferay/clay/commit/2da30136082b7521e7ce2e07b60671c607acb6f3))
-   **@clayui/css:** Stickers convert sticker components to use `clay-sticker-variant` and `clay-css` mixins for more customizability ([f8adb74](https://github.com/liferay/clay/commit/f8adb74347c9fba9e5d90a3ea41ea3de69206479))
-   **@clayui/form:** add the new `sizing` API to Select component ([2c7848d](https://github.com/liferay/clay/commit/2c7848d6729ce26f684010f58c59e1c4d174f7c3))
-   **clayui.com:** add `heading`, `maps`, `order-ascending`, `order-descending` and `geolocation` SVG icons ([a34f3be](https://github.com/liferay/clay/commit/a34f3be7ec089289070b407aab180216843eef69))

# [3.38.0](https://github.com/liferay/clay/compare/v3.37.0...v3.38.0) (2021-10-22)

### Bug Fixes

-   **@clayui/button:** add missing displayTypes from the Button ([1cb8849](https://github.com/liferay/clay/commit/1cb8849810c5a841025ac6aec15fcc62b053d01b))
-   **@clayui/core:** fix formatting error ([d79f5a6](https://github.com/liferay/clay/commit/d79f5a6908f8c3ee30b28824f935cadcca7240ed))
-   **@clayui/core:** fix the indentation of TreeView nodes when the item is a leaf ([6c44389](https://github.com/liferay/clay/commit/6c44389f1352167c091d5efa143770f1b4a4722f))
-   **@clayui/css:** Alert convert components to use `clay-css` mixin pattern ([adbc3ed](https://github.com/liferay/clay/commit/adbc3ed9abd47e15ad0165411feba034dbbe9214))
-   **@clayui/css:** Alerts allow customizing `.btn-group` inside `.alert-inline` and increase space between alert-inline buttons and close (48px) ([1fb3075](https://github.com/liferay/clay/commit/1fb3075147ea96012e732a51c825826434e6e350))
-   **@clayui/css:** Alerts and Cadmin Alerts tweak position of `.alert-inline .alert-indicator` so it's more centered with the text ([6991050](https://github.com/liferay/clay/commit/6991050db719c8a301747b146c3c14575e30d46c))
-   **@clayui/css:** Atlas / Base variables and components use Clay Color functions instead of Sass color functions for better CSS Custom Property support ([bd72797](https://github.com/liferay/clay/commit/bd72797c6059500587fe2959b3ff44df2a266c76))
-   **@clayui/css:** Atlas Alerts and Cadmin Alerts spacing between `alert-indicator` and text should be 8px ([abb1ad9](https://github.com/liferay/clay/commit/abb1ad97128b29a1d77fe660323b65803206796c))
-   **@clayui/css:** Atlas Alerts use `$alert-indicator-font-size` instead of `$alert-font-size` when calculating spacing for the `.alert-indicator` ([10809da](https://github.com/liferay/clay/commit/10809dae86c2e68fb6b7c9fe60209efdc6336916))
-   **@clayui/css:** Badge updates `$badge-close` Sass map to use newer keys for hover and focus ([485862c](https://github.com/liferay/clay/commit/485862cb62c0d5ba42d1706ef1020bf5fd1f6743))
-   **@clayui/css:** Border utilities `border-color` is the wrong value. Table Row Variants scoped `$border-color` variable was overwriting global `$border-color` variable ([834209a](https://github.com/liferay/clay/commit/834209a7b0a64805aa134d15127db5a8f3105a68))
-   **@clayui/css:** Cadmin Alert convert components to use `clay-css` mixin pattern ([915c748](https://github.com/liferay/clay/commit/915c748788d0ff4c6ffbdbc8b75e07a910a4412e))
-   **@clayui/css:** Cadmin Alerts allow customizing `.btn-group` inside `.alert-inline` and increase space between alert-inline buttons and close (48px) ([f6c7a02](https://github.com/liferay/clay/commit/f6c7a02ff79f351ad98586d3c17f9f903e17b755))
-   **@clayui/css:** Cadmin Modals `modal-body` should have border-top to create separation when components are inserted between `modal-header` and `modal-body` ([b5b33c0](https://github.com/liferay/clay/commit/b5b33c03918c1ac34556403caa657fcac169208a))
-   **@clayui/css:** Cadmin variables and components use Clay Color functions instead of Sass color functions for better CSS Custom Property support ([2c77b7b](https://github.com/liferay/clay/commit/2c77b7b7054fd18ebc5ffe01fadf8820cd2242fe))
-   **@clayui/css:** cleanup build script ([60be3dd](https://github.com/liferay/clay/commit/60be3ddd225dcc76500319555eef938e99835044))
-   **@clayui/css:** Global Color Functions adds aliases for Sass color functions `clay-darken`, `clay-lighten`, `clay-adjust-hue`, `clay-desaturate`, `clay-saturate`, `clay-mix`, `clay-blue`, `clay-green`, `clay-red`. It converts CSS Custom Property fallback values to the correct type before running them through the Sass functions. ([189e281](https://github.com/liferay/clay/commit/189e281a9a1329ca4efabfa79e8df9c05a5e6eaa))
-   **@clayui/css:** Global Functions `math-sign` uses deprecated `[@elseif](https://github.com/elseif)` syntax, changed to `[@else](https://github.com/else) if` ([bd22a48](https://github.com/liferay/clay/commit/bd22a48bd54bd6c3bdf25493c81bf47d8fd46bbc)), closes [#4353](https://github.com/liferay/clay/issues/4353)
-   **@clayui/css:** Global Functions use Clay Color Functions that support CSS Custom Properties with fallback value ([e7b1abf](https://github.com/liferay/clay/commit/e7b1abf2e49b208e3b24667431351a8faf2f15ca))
-   **@clayui/css:** Mixins use Clay Color Functions instead of Sass color functions ([baaddfc](https://github.com/liferay/clay/commit/baaddfc2e3c253b4bfd256a9b5afbc0e4a08c0ab))
-   **@clayui/css:** Modals `modal-body` should have border-top to create separation when components are inserted between `modal-header` and `modal-body` ([b3f648e](https://github.com/liferay/clay/commit/b3f648e9f873112bb7525440726304e8503f628d))
-   **@clayui/css:** Modals `modal-header` increase z-index so it appears on top of `modal-body`. `modal-header` border gets hidden by `modal-body` border due to last commit. ([fd3ae71](https://github.com/liferay/clay/commit/fd3ae71089b7cc18f1381a886cecfceee9deac06))
-   **@clayui/css:** remove `node-sass` and add new build file ([80f6ec2](https://github.com/liferay/clay/commit/80f6ec2457b290865f5cf0c58f3dedb2bf822085))

### Features

-   **@clayui/alert:** adds inline alert variation and actions API ([d146d49](https://github.com/liferay/clay/commit/d146d49c27ee900f1c73b5eae26aa126125ebede))
-   **@clayui/core:** adds `onLoadMore` API to TreeView ([ff972d7](https://github.com/liferay/clay/commit/ff972d73ffcddd24b06b51f26e11270044fbdbbd))
-   **@clayui/core:** implement "load more" to aggregate the state ([1fd9b62](https://github.com/liferay/clay/commit/1fd9b62cbdd504a2ff45f4480920913de9f7cf89))
-   **@clayui/css:** Alerts and Cadmin Alerts use Sass placeholders for alert variants for cleaner extends ([2c34258](https://github.com/liferay/clay/commit/2c3425892d7a78a345be145160ca4db7ad83eb07))
-   **@clayui/css:** Badge converts `.badge`, `.badge-pill`, and badge variants to use `clay-badge-variant` mixin ([8c9d4eb](https://github.com/liferay/clay/commit/8c9d4ebc7702573841ffb313d64228a644029a21))
-   **@clayui/css:** Cadmin Badge converts `.badge` and badge variants to use `clay-badge-variant` mixin ([a2b04b2](https://github.com/liferay/clay/commit/a2b04b2172b789175c1b64909ae6e055e112f462))
-   **@clayui/css:** Globals and Cadmin Globals adds `$enable-clay-color-functions-process-fallback` and `$cadmin-enable-clay-color-functions-process-fallback` variables. This forces Clay color functions to return the CSS Custom Property instead of processing the fallback color and returning a hex value. ([15a6bc1](https://github.com/liferay/clay/commit/15a6bc180881422a87176a69974213ffb23f8b3e))
-   **@clayui/css:** Mixins `clay-alert-variant` adds option to configure `.alert-indicator` ([0c9f913](https://github.com/liferay/clay/commit/0c9f913257935962fab0334521d1d871e264259b))
-   **@clayui/css:** Mixins `clay-alert-variant` adds option to pass in styles to `.alert-indicator + .lead` ([ff5146b](https://github.com/liferay/clay/commit/ff5146b1f2a9bbee249a2ba696a0833c8706eb71))
-   **@clayui/css:** Mixins adds `clay-badge-variant` ([dc52ed1](https://github.com/liferay/clay/commit/dc52ed18cfa6034b0219cd9f0c2c0ed6932ea18a))
-   **@clayui/modal:** add the preventAutoClose prop ([af7b12f](https://github.com/liferay/clay/commit/af7b12feb8491f4ffc928526fb8a4c10ec017cbd)), closes [#4355](https://github.com/liferay/clay/issues/4355)
-   **clayui.com:** update gatsby and its dependencies to v3.14 ([bf79081](https://github.com/liferay/clay/commit/bf79081ef4af91def3982f365f584665e44eddf7))

# [3.37.0](https://github.com/liferay/clay/compare/v3.36.0...v3.37.0) (2021-10-06)

### Bug Fixes

-   **@clayui/core:** fix drag layer position ([37a2536](https://github.com/liferay/clay/commit/37a2536))
-   **@clayui/core:** fix error when moving item up, down and add to children ([f9fbe91](https://github.com/liferay/clay/commit/f9fbe91))
-   **@clayui/css:** Alert update `$alert-*-btn` variant Sass maps to use newer keys ([ecdd38a](https://github.com/liferay/clay/commit/ecdd38a))
-   **@clayui/css:** Alerts allow better customization of alert variant components, use `clay-alert-variant` mixin to generate alert variant styles ([9be70d7](https://github.com/liferay/clay/commit/9be70d7))
-   **@clayui/css:** Alerts and Cadmin Alerts `alert-inline` should have more space between text and top / bottom borders ([29c4764](https://github.com/liferay/clay/commit/29c4764))
-   **@clayui/css:** Atlas Alert changed back `$alert-font-size` to `0.875rem` and change `$alert-indicator-font-size` to `1rem` ([21d33ed](https://github.com/liferay/clay/commit/21d33ed))
-   **@clayui/css:** Atlas and Cadmin Stickers swap background and foreground colors for `sticker-light` and `sticker-dark` ([adcd19f](https://github.com/liferay/clay/commit/adcd19f))
-   **@clayui/css:** Cadmin Alert update `$alert-*-btn` variant Sass maps to use newer keys and update `$cadmin-alert-palette` to use `$alert-*` variant Sass maps ([6a4a100](https://github.com/liferay/clay/commit/6a4a100))
-   **@clayui/css:** Cadmin Alerts allow better customization of alert variant components, use `clay-alert-variant` mixin to generate alert variant styles ([3410faf](https://github.com/liferay/clay/commit/3410faf))
-   **@clayui/css:** Cadmin Cards and Panels remove decision making if statements from border-radius and border-width. They were used to save a few bytes of CSS, not worth. ([677e804](https://github.com/liferay/clay/commit/677e804))
-   **@clayui/css:** Cadmin Form Validation adds missing styles for `.form-feedback-group`, `.form-feedback-item`,`.form-feedback-indicator`, and `.form-text` ([db26016](https://github.com/liferay/clay/commit/db26016)), closes [#4298](https://github.com/liferay/clay/issues/4298)
-   **@clayui/css:** Cadmin Forms `fieldset[disabled] .form-control` should use values from the `$cadmin-input` Sass map and move rule-set closer to the `.form-control` rule-set ([0504ff2](https://github.com/liferay/clay/commit/0504ff2))
-   **@clayui/css:** Cadmin Forms `label.disabled` should use properties declared in `$cadmin-input-label` map and move the `label.disabled` rule-set closer to the `label` rule-set ([d00b97b](https://github.com/liferay/clay/commit/d00b97b))
-   **@clayui/css:** Cards and Panels remove decision making if statements from border-radius and border-width. They were used to save a few bytes of CSS, not worth. ([be44a21](https://github.com/liferay/clay/commit/be44a21))
-   **@clayui/css:** Carousel, Custom Forms convert variables using Bootstrap's `url("data:image/svg+xml,<svg></svg>")` to use `clay-svg-url` ([c1cd8a2](https://github.com/liferay/clay/commit/c1cd8a2))
-   **@clayui/css:** Form Validation use `clay-form-control-variant` to style Danger, Warning, Success readonly inputs instead of `clay-button-variant` ([23ed8cb](https://github.com/liferay/clay/commit/23ed8cb))
-   **@clayui/css:** Forms `fieldset[disabled] .form-control` should use values from the `$input` Sass map and move rule-set closer to the `.form-control` rule-set ([9ffc635](https://github.com/liferay/clay/commit/9ffc635))
-   **@clayui/css:** Forms `label.disabled` should use properties declared in `$input-label` map and move the `label.disabled` rule-set closer to the `label` rule-set ([0ea7c72](https://github.com/liferay/clay/commit/0ea7c72))
-   **@clayui/css:** Global Functions `math-sign` should return a negative calc value if a CSS custom property is passed in ([e824c5d](https://github.com/liferay/clay/commit/e824c5d))
-   **@clayui/css:** Global Functions deprecate Bootstrap's `escape-svg` function ([e8ffa5d](https://github.com/liferay/clay/commit/e8ffa5d))
-   **@clayui/css:** Global Variables deprecate Bootstrap 4 `$enable-hover-media-query`, `$caret-width`, `$caret-vertical-align`, `$caret-spacing`, `$emphasized-link-hover-darken-percentage` ([54d39f9](https://github.com/liferay/clay/commit/54d39f9))
-   **@clayui/css:** Global Variables deprecate Bootstrap's `$escaped-characters` variable ([9b93ca0](https://github.com/liferay/clay/commit/9b93ca0))
-   **@clayui/css:** Inverse Sass variable values should use the `math-sign` function ([835a62a](https://github.com/liferay/clay/commit/835a62a))
-   **@clayui/css:** Mixins Alerts adds `clay-alert-variant` mixin and deprecate Bootstrap's `alert-variant` mixin ([a3f1722](https://github.com/liferay/clay/commit/a3f1722))
-   **@clayui/form:** change the Dual List Box ordering side following the right side as the default behavior ([d4b9630](https://github.com/liferay/clay/commit/d4b9630))
-   **@clayui/shared:** fix error when controlling internal state using external value and internal controller ([d17eba5](https://github.com/liferay/clay/commit/d17eba5))
-   **clayui.com:** add missing authors ([dc1b787](https://github.com/liferay/clay/commit/dc1b787))

### Features

-   **@clayui/core:** add initial dnd implementation for TreeView ([fe1e286](https://github.com/liferay/clay/commit/fe1e286))
-   **@clayui/core:** adds the implementation of modifying the Tree by copying the partial structure ([4b67f61](https://github.com/liferay/clay/commit/4b67f61))
-   **@clayui/core:** implement move functionality for tree ([a0ea6e5](https://github.com/liferay/clay/commit/a0ea6e5))
-   **@clayui/css:** adds new classes `treeview-dropping-bottom`, `treeview-dropping-inside` and `treeview-dropping-top` ([f0b4c5e](https://github.com/liferay/clay/commit/f0b4c5e))
-   **@clayui/css:** Alerts adds components `.alert-inline`, `alert-autofit-stacked`, `alert-autofit-stacked-sm-down`, `alert-autofit-stacked-xs-down`, `alert-indicator-start` ([7738e78](https://github.com/liferay/clay/commit/7738e78))
-   **@clayui/css:** Cadmin Alerts adds components `.alert-inline`, `alert-autofit-stacked`, `alert-autofit-stacked-sm-down`, `alert-autofit-stacked-xs-down`, `alert-indicator-start` ([b60b0c7](https://github.com/liferay/clay/commit/b60b0c7))
-   **@clayui/css:** Cadmin Form Validation adds `$cadmin-input-danger`, `$cadmin-input-warning`, `$cadmin-input-success`, `$cadmin-input-danger-select`, `$cadmin-input-warning-select`, `$cadmin-input-success-select` Sass maps with `clay-form-control-variant` and `clay-select-variant` for more customization options ([df1e426](https://github.com/liferay/clay/commit/df1e426))
-   **@clayui/css:** Form Validation adds `$input-danger`, `$input-warning`, `$input-success`, `$input-danger-select`, `$input-warning-select`, `$input-success-select` Sass maps with `clay-form-control-variant` and `clay-select-variant` for more customization options ([c23c8f5](https://github.com/liferay/clay/commit/c23c8f5))

### BREAKING CHANGES

-   **@clayui/css:** `sticker-light` now has a light font color and `sticker-dark` has a dark font color. All instances of `sticker-light` should be updated to use `sticker-dark` and all instances of `sticker-dark` should be updated to use `sticker-light`. If you do not want to make this change in your markup, you can revert back to the original styles with:

```
$sticker-light-bg: $dark !default;
$sticker-light-color: $white !default;

$sticker-dark-bg: $dark !default;
$sticker-dark-color: $white !default;
```

See issue https://github.com/liferay/clay/issues/4310 for more context.

# [3.36.0](https://github.com/liferay/clay/compare/v3.35.3...v3.36.0) (2021-09-23)

### Bug Fixes

-   **@clayui/core:** add missing dependencies ([8802933](https://github.com/liferay/clay/commit/8802933))
-   **@clayui/core:** fixes error of not controlled state for selectedKeys ([f78aad9](https://github.com/liferay/clay/commit/f78aad9))
-   **@clayui/core:** fixes error of not selecting all children regardless of state ([cdc921d](https://github.com/liferay/clay/commit/cdc921d))
-   **@clayui/core:** fixes error when expanding Node when selecting in TreeView ([00a9559](https://github.com/liferay/clay/commit/00a9559))
-   **@clayui/core:** Fixes error when not keeping node expandable when it starts as true ([236039b](https://github.com/liferay/clay/commit/236039b))
-   **@clayui/css:** Atlas Global Variables define all global variables for easier copy and paste for those extending Clay CSS. This should help reduce undefined variable errors when reusing globals. ([acb598e](https://github.com/liferay/clay/commit/acb598e))
-   **@clayui/css:** Atlas removes Sassdoc comments. All documentation that gets generated should go in Base ([89dc333](https://github.com/liferay/clay/commit/89dc333)), closes [#4275](https://github.com/liferay/clay/issues/4275)
-   **@clayui/css:** Base Theme Global variables move settings toward the top of the file. ([b1b309d](https://github.com/liferay/clay/commit/b1b309d))
-   **@clayui/css:** Buttons and Cadmin Buttons `.btn-monospaced` icons are off center by a pixel, use `display: inline-flex` to center and remove padding. If you need items to display inline in `.btn-monospaced` wrap them in a `span` tag. ([ece0b5b](https://github.com/liferay/clay/commit/ece0b5b))
-   **@clayui/css:** Buttons create Sass placeholders for Clay CSS btn-\* classes to allow theme devs to [@extend](https://github.com/extend) their button classes from it ([f7e50f0](https://github.com/liferay/clay/commit/f7e50f0)), closes [#4248](https://github.com/liferay/clay/issues/4248)
-   **@clayui/css:** Global Functions `clay-enable-transitions` should return `$transitions` instead of `$transition` ([ca2d59a](https://github.com/liferay/clay/commit/ca2d59a))
-   **@clayui/css:** Global Functions `clay-enable-transitions` the variable `$enable-transitions` isn't available in Cadmin, use `$enable` instead ([bd4e1c5](https://github.com/liferay/clay/commit/bd4e1c5))
-   **@clayui/css:** Mixins `clay-button-variant` adds option to style `:disabled:focus`, mostly for removing focus shadow on disabled `.btn` ([bb942f9](https://github.com/liferay/clay/commit/bb942f9))
-   **@clayui/css:** Mixins `clay-button-variant` c-inner should work if mobile sizes are enabled ([a0a005c](https://github.com/liferay/clay/commit/a0a005c))
-   **@clayui/css:** Mixins `clay-button-variant` remove outputting `a.btn, button.btn { cursor: pointer; }` we can pass it in directly to `.btn` ([d5a1942](https://github.com/liferay/clay/commit/d5a1942))
-   **@clayui/css:** Mixins form-control-variant update hover, focus, disabled to accept nested placeholder maps ([05a85ca](https://github.com/liferay/clay/commit/05a85ca))
-   **@clayui/drop-down:** fixes the values of the `width` property of the Menu ([f29681e](https://github.com/liferay/clay/commit/f29681e))
-   **@clayui/tooltip:** forces tooltip to be repositioned when the x-axis is modified ([b62313c](https://github.com/liferay/clay/commit/b62313c))
-   **@clayui/tooltip:** stop the always showing warnings ([3858bfe](https://github.com/liferay/clay/commit/3858bfe))
-   **@clyaui/tooltip:** fixes error when not forcing Tooltip repositioning when X axis is modified ([187f1ef](https://github.com/liferay/clay/commit/187f1ef))

### Features

-   **@clayui/autocomplete:** adds `closeOnClickOutside` API support to DropDown ([ece1061](https://github.com/liferay/clay/commit/ece1061))
-   **@clayui/core:** Add `expanderIcons` API to change icons throughout the structure ([455002c](https://github.com/liferay/clay/commit/455002c))
-   **@clayui/core:** Add initial sketch of components to TreeView ([234e4f6](https://github.com/liferay/clay/commit/234e4f6))
-   **@clayui/core:** adds functionality for expandable nodes and nested nodes ([b103398](https://github.com/liferay/clay/commit/b103398))
-   **@clayui/core:** adds multiple selection implementation for Tree View ([281ec20](https://github.com/liferay/clay/commit/281ec20))
-   **@clayui/core:** adds support for flat items with dynamic content ([5ef9405](https://github.com/liferay/clay/commit/5ef9405))
-   **@clayui/css:** Buttons convert `.btn-lg` and `.btn-sm` to use `clay-button-variant` mixin ([f6b3e95](https://github.com/liferay/clay/commit/f6b3e95))
-   **@clayui/css:** Buttons convert `.btn-unstyled`, `.btn-monospaced`, `.btn-monospaced-lg`, `.btn-monospaced-sm`, `.btn-outline-borderless` to use `clay-button-variant` mixin ([4c16ce5](https://github.com/liferay/clay/commit/4c16ce5))
-   **@clayui/css:** Buttons convert `.btn` to use `clay-button-variant` mixin ([617befc](https://github.com/liferay/clay/commit/617befc))
-   **@clayui/css:** Cadmin Buttons convert `.btn`, `.btn-lg`, `.btn-sm`, `.btn-monospaced`, `.btn-monospaced-sm`, `.btn-monospaced-lg`, `.btn-unstyled`, and `.btn-outline-borderless` to use `clay-button-variant` mixin ([8481f19](https://github.com/liferay/clay/commit/8481f19))
-   **@clayui/css:** Cadmin Forms convert label and .form-control to use clay-css mixin ([4226e59](https://github.com/liferay/clay/commit/4226e59))
-   **@clayui/css:** Forms convert label and .form-control to use clay-css mixin ([6a8b9f0](https://github.com/liferay/clay/commit/6a8b9f0))
-   **@clayui/css:** Global Functions adds `starts-with($str1, $str2)`. A function that determines whether the string `$str1` begins with the characters of the specified string `$str2`. ([6ddef3e](https://github.com/liferay/clay/commit/6ddef3e))
-   **@clayui/css:** Mixins `clay-css` if transition has a value other than `null` or `none`, it should output a prefers-reduced-motion media query ([95b5c08](https://github.com/liferay/clay/commit/95b5c08))
-   **@clayui/css:** Mixins `clay-css` should output any CSS Custom Properties passed into it. ([a78ddfa](https://github.com/liferay/clay/commit/a78ddfa)), closes [#4252](https://github.com/liferay/clay/issues/4252)
-   **@clayui/css:** Move .hide from liferay-portal to clay-css ([0e25435](https://github.com/liferay/clay/commit/0e25435))

## [3.35.3](https://github.com/liferay/clay/compare/v3.35.2...v3.35.3) (2021-09-09)

### Bug Fixes

-   **@clayui/css:** Forms use fixed value for $input-height-inner, $input-height-inner-half, $input-height-inner-quarter to reduce Sass errors with CSS custom properties in $input-line-height and \$input-padding-y ([2fa8ca3](https://github.com/liferay/clay/commit/2fa8ca3)), closes [#4247](https://github.com/liferay/clay/issues/4247)

## [3.35.2](https://github.com/liferay/clay/compare/v3.35.1...v3.35.2) (2021-08-30)

### Bug Fixes

-   **@clayui/shared:** fix error export type from root in package distribution ([121e3cc](https://github.com/liferay/clay/commit/121e3cc))

## [3.35.1](https://github.com/liferay/clay/compare/v3.35.0...v3.35.1) (2021-08-30)

### Bug Fixes

-   **@clayui/shared:** fixes error when importing the type that is not available in the module ([3108383](https://github.com/liferay/clay/commit/3108383))

# [3.35.0](https://github.com/liferay/clay/compare/v3.34.0...v3.35.0) (2021-08-30)

### Bug Fixes

-   **@clayui/dropdown:** Pass useCssRight to domAlign ([34db43e](https://github.com/liferay/clay/commit/34db43e))

### Features

-   **@clayui/drop-down:** replaces direct use of dom-align with doAlign with RTL support ([a311dca](https://github.com/liferay/clay/commit/a311dca))
-   **@clayui/popover:** replaces direct use of dom-align with doAlign with RTL support ([b69b98b](https://github.com/liferay/clay/commit/b69b98b))
-   **@clayui/tooltip:** replaces direct use of dom-align with doAlign with RTL support ([2afa54c](https://github.com/liferay/clay/commit/2afa54c))

# [3.34.0](https://github.com/liferay/clay/compare/v3.33.1...v3.34.0) (2021-08-25)

### Bug Fixes

-   **@clayui/css:** Atlas Form readonly input with validation should use the background-color of the base readonly input ([f5580ac](https://github.com/liferay/clay/commit/f5580ac))
-   **@clayui/css:** Cadmin adds Timelines component, used in Asset Publisher Configuration Modals ([f7b473a](https://github.com/liferay/clay/commit/f7b473a))
-   **@clayui/css:** Cadmin Modals allow adding cadmin directly to modal-header, modal-body, and modal-footer elements ([038f5be](https://github.com/liferay/clay/commit/038f5be))
-   **@clayui/css:** Cadmin toggle-switch-check-bar should be 48px wide in larger screens ([5dee0f0](https://github.com/liferay/clay/commit/5dee0f0))
-   **@clayui/css:** Cards deprecate Bootstrap 4 components `.card-header-tabs`, `.card-header-pills`, `.card-img-*`, `.card-deck`, `.card-group`, `.card-columns`, `.accordion`. Enable them again by setting `$enable-bs4-deprecate: true;`. ([4a05474](https://github.com/liferay/clay/commit/4a05474))
-   **@clayui/css:** Custom Forms deprecate Bootstrap 4 components `.custom-switch`, `.custom-select`, `.custom-select-lg`, `.custom-select-sm`, `.custom-file`, `.custom-range` ([bc2c5f5](https://github.com/liferay/clay/commit/bc2c5f5))
-   **@clayui/css:** Custom Forms remove duplicates of custom-control-indicator-checked-border-color and dropdown-font-size ([f0e3212](https://github.com/liferay/clay/commit/f0e3212))
-   **@clayui/css:** Deprecate Bootstrap 4 component Jumbotron. Enable again by setting `$enable-bs4-deprecate: true;`. ([32d3fd1](https://github.com/liferay/clay/commit/32d3fd1))
-   **@clayui/css:** Deprecate the Bootstrap 4 Carousel component. Enable them again by setting `$enable-bs4-deprecate: true;`. ([7026c40](https://github.com/liferay/clay/commit/7026c40))
-   **@clayui/css:** Form deprecate Bootstrap 4 components `.col-form-label`, `.col-form-label-lg`, `.col-form-label-sm`, `.form-row`, `.form-inline`. Enable them again by setting `$enable-bs4-deprecate: true;`. ([08da40a](https://github.com/liferay/clay/commit/08da40a))
-   **@clayui/css:** Form Validation deprecate Bootstrap 4 HTML5 Form Validation components `.was-validated`, `.invalid-feedback`, `.valid-feedback`, `.#{$state}-feedback`, `.#{$state}-tooltip` ([ed0e374](https://github.com/liferay/clay/commit/ed0e374))
-   **@clayui/css:** Globals adds `$enable-bs4-deprecated` setting to enable Bootstrap 4 components that we have deprecated ([7e9ac0d](https://github.com/liferay/clay/commit/7e9ac0d))
-   **@clayui/css:** Globals set `$enable-bs4-deprecated: true !default;`. You can disable the deprecated Bootstrap 4 components by setting `$enable-bs4-deprecated: false !default;`. This will prevent the deprecated component CSS from being output. ([01f3ba6](https://github.com/liferay/clay/commit/01f3ba6))
-   **@clayui/css:** Mixins Timelines ignore timeline variables and use cadmin variables when compiling Cadmin Timelines ([2eebd4a](https://github.com/liferay/clay/commit/2eebd4a))
-   **@clayui/css:** Nav deprecate Bootstrap 4 component `.nav-pills`. Enable again by setting `$enable-bs4-deprecate: true;`. ([d2c9027](https://github.com/liferay/clay/commit/d2c9027))
-   **@clayui/css:** Removes unused variables: ([32b1c4c](https://github.com/liferay/clay/commit/32b1c4c))
-   **@clayui/css:** Spinners deprecate Bootstrap 4 component. Enable again by setting `$enable-bs4-deprecate: true;`. ([3f8fe71](https://github.com/liferay/clay/commit/3f8fe71))
-   **@clayui/css:** Table remove unused components `.table-drag`, `.table-dragging`, `.table-clone` and remove maps `$table-drag`, `$table-dragging`, `$table-clone` ([e6adb42](https://github.com/liferay/clay/commit/e6adb42))
-   **@clayui/css:** Toasts deprecate Bootstrap 4 component. Enable again by setting `$enable-bs4-deprecate: true;`. ([02845eb](https://github.com/liferay/clay/commit/02845eb))
-   **@clayui/css:** Wrap \*-theme-colors map keys in single quotes. Key names that match CSS colors makes Sass throw this warning without quotes: ([2a1fb6a](https://github.com/liferay/clay/commit/2a1fb6a)), closes [#4219](https://github.com/liferay/clay/issues/4219)

### Features

-   **@clayui/modal:** Allow setting CSS classes and other properties on ClayModal.Footer and ClayModal.Body ([42cee72](https://github.com/liferay/clay/commit/42cee72))

## [3.33.1](https://github.com/liferay/clay/compare/v3.33.0...v3.33.1) (2021-08-12)

### Bug Fixes

-   **@clayui/css:** Globals move `$bg-theme-colors`, `$bg-gradient-theme-colors`, `$border-theme-colors`, `$text-theme-colors` maps to where they are used in Utilities ([07f4c9d](https://github.com/liferay/clay/commit/07f4c9d)), closes [#4214](https://github.com/liferay/clay/issues/4214)
-   **@clayui/css:** Use fallback value for `$body-bg` when using variable inside a Sass color function. Sass color functions do not accept CSS custom property as a value. ([ae0dff6](https://github.com/liferay/clay/commit/ae0dff6))
-   **@clayui/css:** Utilities Functional Important generate `.border-white` with `$border-theme-colors` map ([40131be](https://github.com/liferay/clay/commit/40131be)), closes [#4214](https://github.com/liferay/clay/issues/4214)

# [3.33.0](https://github.com/liferay/clay/compare/v3.32.1...v3.33.0) (2021-08-11)

### Bug Fixes

-   **@clayui/css:** Cadmin Modal .modal.show should have display: block ([5876b9f](https://github.com/liferay/clay/commit/5876b9f)), closes [#4203](https://github.com/liferay/clay/issues/4203)
-   **@clayui/css:** Cadmin removes unused variables `$cadmin-body-moz-osx-font-smoothing`, `$cadmin-body-webkit-font-smoothing`, `$cadmin-body-text-align`. We don't provide a CSS reset in Cadmin. ([c3af64e](https://github.com/liferay/clay/commit/c3af64e))
-   **@clayui/css:** Forms .form-control-select with long text shouldn't break to new line and should have overflow ellipsis, similar behavior to select.form-control ([44804d8](https://github.com/liferay/clay/commit/44804d8)), closes [#4206](https://github.com/liferay/clay/issues/4206)
-   **@clayui/css:** Forms remove Bootstrap's confusing way of setting an inset box-shadow on an input. This causes flickering on .btn.form-control-select on click. If you want a regular box-shadow and an inset box-shadow on an input define them both inside the \$input-box-shadow variable. Example below: ([83d56d1](https://github.com/liferay/clay/commit/83d56d1)), closes [#4206](https://github.com/liferay/clay/issues/4206)
-   **@clayui/css:** Functions adds `_type-conversion-functions.scss` for converting colors of type string to type color. Sass doesn't provide a way to do this https://github.com/sass/sass/issues/3006. ([68be792](https://github.com/liferay/clay/commit/68be792)), closes [#4180](https://github.com/liferay/clay/issues/4180)
-   **@clayui/css:** Global Functions `clay-get-fallback` convert color string to type color ([68fd699](https://github.com/liferay/clay/commit/68fd699))
-   **@clayui/css:** Removes the use of `$theme-colors` Sass map to generate utility properties (e.g., `bg-primary`, `text-primary`, `list-group-item-primary`, `table-primary`) and allow configuring separately. The new way also supports CSS variables. Adds new maps: ([78fb2d2](https://github.com/liferay/clay/commit/78fb2d2))

### Features

-   **@clayui/css:** Reboot `body` element should use clay-css mixin for generating properties ([c0b456e](https://github.com/liferay/clay/commit/c0b456e)), closes [#4194](https://github.com/liferay/clay/issues/4194)
-   **@clayui/pagination:** Add the `alignmentPosition` API to PaginationWithBasicItems component ([24ca87c](https://github.com/liferay/clay/commit/24ca87c))
-   **@clayui/pagination-bar:** Add the `alignmentPosition` API to PaginationBarWithBasicItems component ([eca557f](https://github.com/liferay/clay/commit/eca557f))

## [3.32.1](https://github.com/liferay/clay/compare/v3.32.0...v3.32.1) (2021-07-30)

### Bug Fixes

-   **@clayui/css:** Cadmin Treeview scope `component-action`, `component-expander`, `component-icon`, `component-text` so styles don't bleed into other components ([1ce70bd](https://github.com/liferay/clay/commit/1ce70bd)), closes [#4198](https://github.com/liferay/clay/issues/4198)

# [3.32.0](https://github.com/liferay/clay/compare/v3.31.0...v3.32.0) (2021-07-28)

### Bug Fixes

-   **@clayui/autocomplete:** fixes a potential XSS vulnerability in autocomplete by removing the use of `dangerouslySetInnerHTML` ([675910c](https://github.com/liferay/clay/commit/675910c))
-   **@clayui/color-picker:** fix error of "hidden" input add extra margin ([f4d8aa0](https://github.com/liferay/clay/commit/f4d8aa0))
-   **@clayui/css:** Cadmin Links adds `component-text` and `component-icon`, generic names for reuse in other components ([ae49f03](https://github.com/liferay/clay/commit/ae49f03))
-   **@clayui/css:** Cadmin Treeview new component ([ea1568e](https://github.com/liferay/clay/commit/ea1568e))
-   **@clayui/css:** Forms `form-group-sm div.form-control` should be 32px tall and grow to fix content inside, similar to a textarea element ([eb987a1](https://github.com/liferay/clay/commit/eb987a1)), closes [#4164](https://github.com/liferay/clay/issues/4164)
-   **@clayui/css:** Grid generating `container-max-width-*` classes should work with Custom Properties ([b12dbf5](https://github.com/liferay/clay/commit/b12dbf5))
-   **@clayui/css:** Mixins update `clay-loading-animation-variant` to use `clay-css` pattern ([4280c6f](https://github.com/liferay/clay/commit/4280c6f)), closes [#3987](https://github.com/liferay/clay/issues/3987)
-   **@clayui/css:** Mixins update `sheet-footer-btn-block` to use `clay-css` pattern ([5523b67](https://github.com/liferay/clay/commit/5523b67)), closes [#3987](https://github.com/liferay/clay/issues/3987)
-   **@clayui/css:** Sheet `$sheet-lg-max-width` should use fixed number instead of generating based on a `$container-max-widths` value ([5968bd5](https://github.com/liferay/clay/commit/5968bd5))
-   **@clayui/css:** Utilities remove duplicate rounded utilities ([6687624](https://github.com/liferay/clay/commit/6687624))
-   **@clayui/shared:** fixes error when getting stuck in an input masked as hidden ([4c0c5cb](https://github.com/liferay/clay/commit/4c0c5cb))
-   **@clayui/tooltip:** Hide tooltip on `dragstart` ([70d78da](https://github.com/liferay/clay/commit/70d78da))
-   **clayui.com:** fixes error when generating slugs for documents inside packages ([5e00f5a](https://github.com/liferay/clay/commit/5e00f5a))

### Features

-   **@clayui/core:** Add Provider component and the new `@clayui/core` package ([1d4e4b3](https://github.com/liferay/clay/commit/1d4e4b3))
-   **@clayui/core:** adds `theme` API to Provider ([e7bae7d](https://github.com/liferay/clay/commit/e7bae7d))
-   **@clayui/css:** \$container-max-widths Sass map should accept CSS Custom Properties ([3a8ffe2](https://github.com/liferay/clay/commit/3a8ffe2))
-   **@clayui/css:** Buttons use nested property names in variables to stay as close as possible to the way our CSS is written ([89e3360](https://github.com/liferay/clay/commit/89e3360)), closes [#4176](https://github.com/liferay/clay/issues/4176)
-   **@clayui/css:** Functions adds `map-deep-get` for getting values of deeply nested Sass map items ([2b80302](https://github.com/liferay/clay/commit/2b80302))
-   **@clayui/pagination-bar:** Add the `showDeltasDropDown` prop ([6c65f43](https://github.com/liferay/clay/commit/6c65f43)), closes [#4175](https://github.com/liferay/clay/issues/4175)

# [3.31.0](https://github.com/liferay/clay/compare/v3.30.0...v3.31.0) (2021-06-30)

### Bug Fixes

-   **@clayui/card:** spritemap should be optional ([18c11a7](https://github.com/liferay/clay/commit/18c11a7))
-   **@clayui/css:** Links convert variables to use nested Sass map pattern ([1a9d654](https://github.com/liferay/clay/commit/1a9d654))
-   **@clayui/css:** Mixin Links don't use nested setters. The setter function takes an Argslist now, we can pass any number of Sass maps with one function call ([dfa1ea2](https://github.com/liferay/clay/commit/dfa1ea2))
-   **@clayui/css:** Removes nested `setter` functions, only need to call it once. See https://github.com/liferay/clay/issues/4076. ([e2db591](https://github.com/liferay/clay/commit/e2db591))
-   **@clayui/layout:** ContentCol should use autofit-col-end instead of autofit-col-float-end ([a3811d8](https://github.com/liferay/clay/commit/a3811d8))
-   **@clayui/list:** fix error when building types ([b20f62c](https://github.com/liferay/clay/commit/b20f62c))
-   **@clayui/pagination-bar:** spritemap should be optional ([38638e5](https://github.com/liferay/clay/commit/38638e5))
-   **@clayui/toolbar:** spritemap should be optional ([77a6216](https://github.com/liferay/clay/commit/77a6216))

### Features

-   **@clayui/css:** Add `square-hole-multi` SVG icon ([205046c](https://github.com/liferay/clay/commit/205046c))
-   **@clayui/css:** SVG Icons adds search-experiences.svg ([39ae51d](https://github.com/liferay/clay/commit/39ae51d))
-   **@clayui/list:** Add forwardRef to ClayList components ([6dbccf7](https://github.com/liferay/clay/commit/6dbccf7))

# [3.30.0](https://github.com/liferay/clay/compare/v3.29.0...v3.30.0) (2021-06-16)

### Bug Fixes

-   **@clayui/css:** Mixins `clay-panel-variant` updates mixin to use nested maps pattern ([ea0c66a](https://github.com/liferay/clay/commit/ea0c66a))
-   **@clayui/css:** Modal and Cadmin Modal make `.modal-body.inline-scroller` `max-height: 320px` ([815d6d4](https://github.com/liferay/clay/commit/815d6d4)), closes [#4113](https://github.com/liferay/clay/issues/4113)
-   **@clayui/css:** Panel adjust spacing for `panel-unstyled` to prevent visual jump on close. ([9dec5b6](https://github.com/liferay/clay/commit/9dec5b6))
-   **@clayui/css:** Panel and Cadmin Panel update variables that use `clay-panel-variant` mixin to use newest keys, The old keys still work and will win over new keys. ([ea4bffb](https://github.com/liferay/clay/commit/ea4bffb))
-   **@clayui/css:** Reboot and Cadmin Reboot removes negative tabindex rule that removes default focus outline due to keyboard navigation accessibility issues. `tabindex="-1"` can still be focused programmatically. ([9e52cfb](https://github.com/liferay/clay/commit/9e52cfb)), closes [#4124](https://github.com/liferay/clay/issues/4124)
-   **@clayui/nav:** Adjust condition, to avoid set Boolean values in className property ([e3af0e3](https://github.com/liferay/clay/commit/e3af0e3)), closes [#4120](https://github.com/liferay/clay/issues/4120)

### Features

-   **@clayui/drop-down:** Allow the menu to be toggled ([8d09d29](https://github.com/liferay/clay/commit/8d09d29)), closes [#4103](https://github.com/liferay/clay/issues/4103)
-   **@clayui/nav:** Add an optional type to Label property in Vertical Component ([fa64c1d](https://github.com/liferay/clay/commit/fa64c1d)), closes [#4121](https://github.com/liferay/clay/issues/4121)

# [3.29.0](https://github.com/liferay/clay/compare/v3.28.0...v3.29.0) (2021-05-28)

### Bug Fixes

-   **@clayui/css:** Global Functions update `setter` to accept more than 2 variables (e.g., `setter($var1, $var2, $var3, $var4, $var5)`) ([2a923f0](https://github.com/liferay/clay/commit/2a923f0)), closes [#4076](https://github.com/liferay/clay/issues/4076)
-   **@clayui/css:** Mixins `clay-aspect-ratio-item-variant` and `clay-aspect-ratio-variant` convert to use new (easier to remember) Sass map keys. The old keys will still work and win over new keys. ([d4680a9](https://github.com/liferay/clay/commit/d4680a9)), closes [#4085](https://github.com/liferay/clay/issues/4085)
-   **@clayui/css:** Mixins Card convert to use new (easier to remember) Sass map keys. The old keys will still work and win over new keys. ([a2e6d34](https://github.com/liferay/clay/commit/a2e6d34)), closes [#4088](https://github.com/liferay/clay/issues/4088)
-   **@clayui/drop-down:** fixes error when closing the contextual menu ([8bdfa79](https://github.com/liferay/clay/commit/8bdfa79))
-   **@clayui/drop-down:** stops closing the drop-down when the focus is inside the sub portal ([cc57b72](https://github.com/liferay/clay/commit/cc57b72))
-   **@clayui/table:** Fixes lint error ([9dec4a4](https://github.com/liferay/clay/commit/9dec4a4))

### Features

-   **@clayui/css:** Adds the `block` SVG icon ([96dabe4](https://github.com/liferay/clay/commit/96dabe4))
-   **@clayui/drop-down:** add the new contextual type to create a cascading menu ([63960b2](https://github.com/liferay/clay/commit/63960b2))
-   **@clayui/drop-down:** Make it possible to render dividers ([51a46d5](https://github.com/liferay/clay/commit/51a46d5))
-   **@clayui/shared:** Add MouseSafeArea to the contextual menu ([7824f16](https://github.com/liferay/clay/commit/7824f16))
-   **@clayui/table:** Adds the `noWrap` prop to ClayTable.Cell ([da88293](https://github.com/liferay/clay/commit/da88293))

# [3.28.0](https://github.com/liferay/clay/compare/v3.27.0...v3.28.0) (2021-05-19)

### Bug Fixes

-   **@clayui/css:** Cadmin Alert adds `.cadmin.alert-container` selector ([a104844](https://github.com/liferay/clay/commit/a104844))
-   **@clayui/css:** Cadmin Badges remove unused components `inline-item` and `badge-pill` ([46868c7](https://github.com/liferay/clay/commit/46868c7))
-   **@clayui/css:** Cadmin Button Groups remove unused components `dropdown-toggle-split` and `btn-group-toggle` ([3fef3d5](https://github.com/liferay/clay/commit/3fef3d5))
-   **@clayui/css:** Cadmin Cards remove unused components `card-header-tabs`, `card-header-pills`, `card-deck`, `card-group`, `card-columns`, `accordion` ([06bdb00](https://github.com/liferay/clay/commit/06bdb00))
-   **@clayui/css:** Cadmin Dropdown remove unused component dropdown in navbar ([e062006](https://github.com/liferay/clay/commit/e062006))
-   **@clayui/css:** Cadmin Form Validation remove unused components HTML 5 form validation ([8cb7a19](https://github.com/liferay/clay/commit/8cb7a19))
-   **@clayui/css:** Cadmin Forms remove unused components `col-form-label`, `col-form-label-lg`, `col-form-label-sm`, `form-row`, `form-inline` ([81e1f4f](https://github.com/liferay/clay/commit/81e1f4f))
-   **@clayui/css:** Cadmin Icons remove unused components `lexicon-icon-sm`, `lexicon-icon-lg`, `lexicon-icon-xl` ([f0ee8fc](https://github.com/liferay/clay/commit/f0ee8fc))
-   **@clayui/css:** Cadmin Input Group remove styles related to `custom-select`, `custom-file` ([cdf23e7](https://github.com/liferay/clay/commit/cdf23e7))
-   **@clayui/css:** Cadmin Labels remove deprecated component `inline-item` ([9ed5291](https://github.com/liferay/clay/commit/9ed5291))
-   **@clayui/css:** Cadmin List Group remove unused component `list-group-horizontal` ([0b7f427](https://github.com/liferay/clay/commit/0b7f427))
-   **@clayui/css:** Cadmin merge Atlas variables with Cadmin base variables, we don't need two themes here ([0eb6d29](https://github.com/liferay/clay/commit/0eb6d29))
-   **@clayui/css:** Cadmin Modals remove unused component `modal-dialog-scrollable` ([130dc5c](https://github.com/liferay/clay/commit/130dc5c))
-   **@clayui/css:** Cadmin move \_reboot out of scoping selector, attribution text is causing empty selector to be output ([ad36b85](https://github.com/liferay/clay/commit/ad36b85))
-   **@clayui/css:** Cadmin Navs remove unused component `nav-pills` ([d27a7a1](https://github.com/liferay/clay/commit/d27a7a1))
-   **@clayui/css:** Cadmin port changes to Clay CSS that were made before Cadmin got merged: [#3998](https://github.com/liferay/clay/issues/3998), [#4002](https://github.com/liferay/clay/issues/4002), [#4040](https://github.com/liferay/clay/issues/4040), [#4055](https://github.com/liferay/clay/issues/4055), [#4056](https://github.com/liferay/clay/issues/4056), [#4060](https://github.com/liferay/clay/issues/4060) ([240bbc4](https://github.com/liferay/clay/commit/240bbc4)), closes [#4064](https://github.com/liferay/clay/issues/4064)
-   **@clayui/css:** Cadmin re-add widths for menubar and SF. Not sure what happened. ([9142345](https://github.com/liferay/clay/commit/9142345))
-   **@clayui/css:** Cadmin remove unused components `custom-switch`, `custom-select`, `custom-file`, `custom-range` ([fc447e2](https://github.com/liferay/clay/commit/fc447e2))
-   **@clayui/css:** Cadmin removes Atlas variables ([4af356f](https://github.com/liferay/clay/commit/4af356f))
-   **@clayui/css:** Cadmin removes components \_root, \_carousel, \_jumbotron, \_spinners, \_toasts, \_media, \_application-bar, \_drilldown, and \_timelines. They are not used for Admin controls. ([9ddeaed](https://github.com/liferay/clay/commit/9ddeaed))
-   **@clayui/css:** Cadmin removes Sass docs comments ([62e5541](https://github.com/liferay/clay/commit/62e5541))
-   **@clayui/css:** Cadmin removes variables related to unused components ([7ec35dc](https://github.com/liferay/clay/commit/7ec35dc))
-   **@clayui/css:** Cadmin Side Navigation remove unused component `container-fluid-1280` ([41d8b50](https://github.com/liferay/clay/commit/41d8b50))
-   **@clayui/css:** Cadmin theme use selector `.cadmin.component` for components that render inside react portals. It's too difficult to put `cadmin` on the parent element. ([640a662](https://github.com/liferay/clay/commit/640a662))
-   **@clayui/css:** Cadmin update Sass maps that use `clay-select-variant` to use new keys ([c782615](https://github.com/liferay/clay/commit/c782615))
-   **@clayui/css:** Cadmin Utilities display utilities should also have `.cadmin.d-{display}` ([4bb7a0a](https://github.com/liferay/clay/commit/4bb7a0a))
-   **@clayui/css:** Input Groups add `btn-monospaced` support for buttons inside `input-group-inset-item` ([0d31b54](https://github.com/liferay/clay/commit/0d31b54)), closes [#4049](https://github.com/liferay/clay/issues/4049)
-   **@clayui/css:** Labels convert variables to use new Sass map keys ([dcfc7c3](https://github.com/liferay/clay/commit/dcfc7c3))
-   **@clayui/css:** Management Bar Search button should be properly aligned in mobile view ([1c3f583](https://github.com/liferay/clay/commit/1c3f583))
-   **@clayui/css:** Mixins `border-radius` shouldn't output the default radius if a null parameter is passed ([42241df](https://github.com/liferay/clay/commit/42241df)), closes [#4066](https://github.com/liferay/clay/issues/4066)
-   **@clayui/css:** Mixins `clay-label-size` and `clay-label-variant` convert to use new (easier to remember) Sass map keys. The old keys will still work and win over new keys. ([2123fdf](https://github.com/liferay/clay/commit/2123fdf)), closes [#4069](https://github.com/liferay/clay/issues/4069)
-   **@clayui/css:** Mixins `clay-nav-variant` convert to use new (easier to remember) Sass map keys. The old keys will still work and win over new keys. ([3fa114a](https://github.com/liferay/clay/commit/3fa114a)), closes [#4071](https://github.com/liferay/clay/issues/4071)
-   **@clayui/css:** Mixins `clay-select-variant` update to use `clay-css` pattern, also deprecated keys should win over new keys ([65ad45e](https://github.com/liferay/clay/commit/65ad45e))
-   **@clayui/css:** Mixins border-radius should use custom value first ([5d30ab2](https://github.com/liferay/clay/commit/5d30ab2))
-   **@clayui/css:** Restore default padding-left on ul, ol, dl that are undone by cadmin ([1db5db7](https://github.com/liferay/clay/commit/1db5db7))
-   **@clayui/css:** Subnav Tbar labels should have \$font-weight-normal by default ([e1e36a6](https://github.com/liferay/clay/commit/e1e36a6))
-   **@clayui/css:** Toggle Switch should be 48px wide ([6735e54](https://github.com/liferay/clay/commit/6735e54))

### Features

-   **@clayui/color-picker:** Add the new DropDownContainerProps API ([ac51bdd](https://github.com/liferay/clay/commit/ac51bdd))
-   **@clayui/css:** Add `form-extensions` SVG icon ([3061a9a](https://github.com/liferay/clay/commit/3061a9a))
-   **@clayui/css:** Add SVG icons `chatbot` and `signature` ([7966c62](https://github.com/liferay/clay/commit/7966c62))
-   **@clayui/css:** Cadmin theme convert rem values to px ([2e33149](https://github.com/liferay/clay/commit/2e33149))
-   **@clayui/css:** Created scoped version of Clay CSS for admin style isolation and prefix variables with `$cadmin-` ([f1ae440](https://github.com/liferay/clay/commit/f1ae440))
-   **@clayui/css:** Functions and Mixins update to accept Clay CSS variables, Cadmin variables, or custom where applicable ([b1eb431](https://github.com/liferay/clay/commit/b1eb431))
-   **@clayui/drop-down:** Add the new ContainerProps API ([b106420](https://github.com/liferay/clay/commit/b106420))
-   **@clayui/drop-down:** Add the new ContainerProps API to the interface typing ([31f38a9](https://github.com/liferay/clay/commit/31f38a9))
-   **@clayui/modal:** Add the new ContainerProps API ([3a09e97](https://github.com/liferay/clay/commit/3a09e97))
-   **@clayui/modal:** do not set a default opener, ClayPortal handles it ([23bcfba](https://github.com/liferay/clay/commit/23bcfba))
-   **@clayui/modal:** Rename variable name, allow to pass a container reference and add tests ([c85fc25](https://github.com/liferay/clay/commit/c85fc25))
-   **@clayui/modal:** support custom opener for the modals ([58a5bc5](https://github.com/liferay/clay/commit/58a5bc5))
-   **@clayui/popover:** Add the new ContainerProps API ([233a4f6](https://github.com/liferay/clay/commit/233a4f6))
-   **@clayui/shared:** add delegate event utility ([f46b6ef](https://github.com/liferay/clay/commit/f46b6ef))
-   **@clayui/shared:** Allow to pass className and/or id to the portal root element ([132ab1e](https://github.com/liferay/clay/commit/132ab1e))
-   **@clayui/shared:** Extract to a function so the div is created with all its attributes ([b7445bc](https://github.com/liferay/clay/commit/b7445bc))
-   **@clayui/shared:** simplify function ([d326ace](https://github.com/liferay/clay/commit/d326ace))
-   **@clayui/tooltip:** Add the new ContainerProps API ([728600c](https://github.com/liferay/clay/commit/728600c))
-   **@clayui/tooltip:** update logic to handle scoping and a global listener ([1c83d30](https://github.com/liferay/clay/commit/1c83d30))

# [3.27.0](https://github.com/liferay/clay/compare/v3.26.0...v3.27.0) (2021-05-05)

### Bug Fixes

-   **@clayui/css:** Date Picker previous-month-date and next-month-date active should be lighter ([51a24f3](https://github.com/liferay/clay/commit/51a24f3))
-   **@clayui/css:** Menubar convert old Sass map keys to key names so older keys used by previous versions will win ([9a1a73a](https://github.com/liferay/clay/commit/9a1a73a))
-   **@clayui/css:** Menubar update `$menubar-vertical-expand-md` and `$menubar-vertical-expand-lg` to use new keys. Older keys will still win over new keys to preserve backward compatibility. ([12b9636](https://github.com/liferay/clay/commit/12b9636))
-   **@clayui/css:** Mixins `clay-form-control-variant` old keys should win over new keys ([8986a81](https://github.com/liferay/clay/commit/8986a81)), closes [#3987](https://github.com/liferay/clay/issues/3987)
-   **@clayui/css:** Mixins `clay-menubar-vertical-expand` use `clay-css` mixin pattern ([6a9ba26](https://github.com/liferay/clay/commit/6a9ba26))
-   **@clayui/css:** Mixins `clay-menubar-vertical-variant` moves default styles to variables. The mixin should only output styles if values are given. ([703b76e](https://github.com/liferay/clay/commit/703b76e))
-   **@clayui/css:** Progress Bar sets a `min-width` on `progress-group-addon` to prevent resizing progress bar when numbers are changed to icons ([63e63c0](https://github.com/liferay/clay/commit/63e63c0)), closes [#4024](https://github.com/liferay/clay/issues/4024)
-   **@clayui/css:** Sass maps passed into `clay-form-control-variant` mixin should use new keys. This allows variable theme overwrites using deprecated keys to still win. ([f3be2d6](https://github.com/liferay/clay/commit/f3be2d6)), closes [#3987](https://github.com/liferay/clay/issues/3987)
-   **@clayui/date-picker:** DatePickerDayNumber use the classes `previous-month-date` and `next-month-date` to style day outside the month instead of `disabled` ([f25ab71](https://github.com/liferay/clay/commit/f25ab71)), closes [#4036](https://github.com/liferay/clay/issues/4036)
-   **@clayui/shared:** add unit test for FocusScope ([f84332f](https://github.com/liferay/clay/commit/f84332f))
-   **@clayui/shared:** update and simplify logic for focus management when focus moves in and out of the react tree ([e3a100f](https://github.com/liferay/clay/commit/e3a100f))

### Features

-   **@clayui/css:** SVG Icons add rotate ([0fec9ce](https://github.com/liferay/clay/commit/0fec9ce))
-   **@clayui/css:** SVG Icons adds `order-list-down` and `order-list-up` ([f80f8a0](https://github.com/liferay/clay/commit/f80f8a0)), closes [#4021](https://github.com/liferay/clay/issues/4021)
-   **@clayui/multi-select:** add async functionality for source items ([548aa2d](https://github.com/liferay/clay/commit/548aa2d))
-   **@clayui/panel:** adds the small API to Panel.Group ([b8428dc](https://github.com/liferay/clay/commit/b8428dc))
-   **@clayui/popover:** add observeRect to align the popover on the scroll ([8bedd2f](https://github.com/liferay/clay/commit/8bedd2f))

# [3.26.0](https://github.com/liferay/clay/compare/v3.25.4...v3.26.0) (2021-04-21)

### Bug Fixes

-   **@clayui/date-picker:** Adjusts the behaviour of date range when clicking on the dot button ([f6db982](https://github.com/liferay/clay/commit/f6db982)), closes [/github.com/liferay/clay/pull/4008#issuecomment-819244473](https://github.com//github.com/liferay/clay/pull/4008/issues/issuecomment-819244473)
-   **@clayui/date-picker:** fixes error when not selecting date when the time is invalid ([861de91](https://github.com/liferay/clay/commit/861de91))
-   **@clayui/date-picker:** fixes error when reflecting the time without having selected the date ([80409f5](https://github.com/liferay/clay/commit/80409f5))
-   **@clayui/date-picker:** fixes normalization error for the day selected and button to change to the current day ([a058e7f](https://github.com/liferay/clay/commit/a058e7f))
-   **@clayui/date-picker:** fixes normalization of the date ([cdbad89](https://github.com/liferay/clay/commit/cdbad89))
-   **@clayui/date-picker:** resets the range when selecting a new date ([639d2af](https://github.com/liferay/clay/commit/639d2af))
-   **@clayui/date-picker:** Small tweaks ([d6ead55](https://github.com/liferay/clay/commit/d6ead55))
-   **@clayui/date-picker:** Use `toDateString` instead of `toLocaleDateString` on Day button ([2710760](https://github.com/liferay/clay/commit/2710760))
-   **@clayui/date-picker:** When having a range and clicking on end date again the start date will be the same as the end date ([4e1cd07](https://github.com/liferay/clay/commit/4e1cd07)), closes [/github.com/liferay/clay/pull/4008#issuecomment-819244473](https://github.com//github.com/liferay/clay/pull/4008/issues/issuecomment-819244473)
-   **@clayui/date-picker:** When using `fromStringToRange` function, when not finding a endDate, just use the startDate ([a6c1d00](https://github.com/liferay/clay/commit/a6c1d00))
-   **@clayui/date-picker:** Wrap day and weekdays in `<div class="date-picker-col">` to prep for Date Range feature ([512c2a4](https://github.com/liferay/clay/commit/512c2a4))

### Features

-   **@clayui/alert:** Adds the new feedback variant ([1e0a65a](https://github.com/liferay/clay/commit/1e0a65a))
-   **@clayui/css:** Alerts adds `alert-feedback` modifier ([51b57e6](https://github.com/liferay/clay/commit/51b57e6)), closes [#3968](https://github.com/liferay/clay/issues/3968)
-   **@clayui/css:** Date Picker adds Date Range styles ([a385e6a](https://github.com/liferay/clay/commit/a385e6a))
-   **@clayui/date-picker:** Adds ClayDatePicker Range variation ([eee769d](https://github.com/liferay/clay/commit/eee769d))

## [3.25.4](https://github.com/liferay/clay/compare/v3.25.3...v3.25.4) (2021-04-07)

### Bug Fixes

-   **@clayui/date-picker:** Date Navigation Controls are wrong color. This adds clay css classes but also leaves btn-monospaced and btn-sm just incase. ([850286e](https://github.com/liferay/clay/commit/850286e))
-   **@clayui/date-picker:** disable focus control using the arrow keys ([d21dd7d](https://github.com/liferay/clay/commit/d21dd7d))
-   **@clayui/date-picker:** Removes `btn-sm` and `btn-monospaced` from Date Navigation controls. They're not needed. ([e70ad3c](https://github.com/liferay/clay/commit/e70ad3c))

## [3.25.3](https://github.com/liferay/clay/compare/v3.25.2...v3.25.3) (2021-03-24)

### Bug Fixes

-   **@clayui/css:** Atlas Menubar (Vertical Navigation) link active state should be more visible ([5a94cfd](https://github.com/liferay/clay/commit/5a94cfd))
-   **@clayui/css:** Menubar toggler with c-inner cuts off caret icon ([1932782](https://github.com/liferay/clay/commit/1932782))
-   **@clayui/css:** Mixins `clay-link` adds option to style `&.show, &[aria-expanded='true']` separately from `active-class` so we can style panel toggles ([8a1a148](https://github.com/liferay/clay/commit/8a1a148))
-   **@clayui/multi-select:** Use `btn-outline-secondary btn-outline-borderless` instead of `btn-unstyled` for Clear All Button ([3d71cf0](https://github.com/liferay/clay/commit/3d71cf0))

## [3.25.2](https://github.com/liferay/clay/compare/v3.25.1...v3.25.2) (2021-03-10)

### Bug Fixes

-   **@clayui/css:** Dual List Box `form-control-inset` is too narrow caused by [#3972](https://github.com/liferay/clay/issues/3972) ([637e65b](https://github.com/liferay/clay/commit/637e65b)), closes [#3976](https://github.com/liferay/clay/issues/3976)
-   **@clayui/css:** Forms `.col-form-label-*` should use `$input-border-bottom-width` or `$input-border-top-width` to avoid invalid property value ([ade3649](https://github.com/liferay/clay/commit/ade3649)), closes [#3946](https://github.com/liferay/clay/issues/3946)

## [3.25.1](https://github.com/liferay/clay/compare/v3.25.0...v3.25.1) (2021-03-05)

### Bug Fixes

-   **@clayui/charts:** use isomorphic helper for useLayoutEffect ([6599030](https://github.com/liferay/clay/commit/6599030ee4b9c615db73dd8dc47302ff911d547b))
-   **@clayui/color-picker:** RGB inputs should only accept numeric values from 0 to 255 ([4a7db84](https://github.com/liferay/clay/commit/4a7db845ac0a08919c523e4b4d77f00aa2c929bb))
-   **@clayui/color-picker:** use isomorphic helper for useLayoutEffect ([42c069e](https://github.com/liferay/clay/commit/42c069ed866160f10cd9159345e59a62db473d83))
-   **@clayui/css:** Atlas Custom Checkbox use hr icon for indeterminate indicator ([a894c5b](https://github.com/liferay/clay/commit/a894c5bd1fe500894d55bfd656efde142ba81db6))
-   **@clayui/css:** Forms `form-control-tag-group component-action` should be height 100% ([4b4b140](https://github.com/liferay/clay/commit/4b4b140b87019d9fa4c00186219090524dce1fcd))
-   **@clayui/css:** SVG Icons updates `hr` icon per Lexicon ([949944c](https://github.com/liferay/clay/commit/949944ccaac1b21091628b15cedd3b7ea96287af))
-   **@clayui/drop-down:** make sure element exists before passing to domAlign ([80a5395](https://github.com/liferay/clay/commit/80a53956030c3dd6e1172fde2b808c26f784e120))
-   **@clayui/drop-down:** use isomorphic helper for useLayoutEffect ([fd82b87](https://github.com/liferay/clay/commit/fd82b87d2b47fd614c698ce7ef0be926dfcafc16))
-   **@clayui/multi-select:** use isomorphic helper for useLayoutEffect ([f25668d](https://github.com/liferay/clay/commit/f25668d92e691ba96b29f78669304169c48675f1))
-   **@clayui/slider:** use isomorphic helper for useLayoutEffect ([33910de](https://github.com/liferay/clay/commit/33910dea1c6fcad8d1149d03d4c6ae92796123f1))

# [3.25.0](https://github.com/liferay/clay/compare/v3.24.1...v3.25.0) (2021-02-23)

### Bug Fixes

-   **@clayui/color-picker:** remove last-row classes and API that was added on accident ([d4cb8e8](https://github.com/liferay/clay/commit/d4cb8e8))
-   **@clayui/css:** Global Functions moves generated SVG icons Sass map to separate file `_lx-icons-generated.scss` ([7ffc523](https://github.com/liferay/clay/commit/7ffc523))

### Features

-   **@clayui/card:** add active state for card when it is selected ([607da9d](https://github.com/liferay/clay/commit/607da9d))
-   **@clayui/drop-down:** add util for aligning dropdown on scroll ([09dc506](https://github.com/liferay/clay/commit/09dc506))
-   **@clayui/panel:** add 'show' class to collapsable panel's button ([1e7f64a](https://github.com/liferay/clay/commit/1e7f64a))

## _Note: we changed our release process from [independent](https://github.com/lerna/lerna#independent-mode) to [fixed](https://github.com/lerna/lerna#fixedlocked-mode-default) at this point._

## 2021-2-11

### @clayui/autocomplete ([3.2.6](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.2.5...@clayui/autocomplete@3.2.6))

**Note:** Version bump only for package @clayui/autocomplete

### @clayui/breadcrumb ([3.3.6](https://github.com/liferay/clay/compare/@clayui/breadcrumb@3.3.5...@clayui/breadcrumb@3.3.6))

**Note:** Version bump only for package @clayui/breadcrumb

### @clayui/card ([3.6.6](https://github.com/liferay/clay/compare/@clayui/card@3.6.5...@clayui/card@3.6.6))

**Note:** Version bump only for package @clayui/card

### @clayui/color-picker ([3.5.0](https://github.com/liferay/clay/compare/@clayui/color-picker@3.4.5...@clayui/color-picker@3.5.0))

#### Features

-   add API to show both default colors and custom colors ([d149fc1](https://github.com/liferay/clay/commit/d149fc1))
-   update markup for hybrid color-picker ([de4e90f](https://github.com/liferay/clay/commit/de4e90f))

### @clayui/css ([3.24.1](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.24.0...@clayui/css@3.24.1))

#### Bug Fixes

-   Atlas Alert close font-size should be 16px ([245eac5](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/245eac5)), closes [#3877](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3877)
-   Atlas Clay Color change close button icon to be 16px ([2309d7a](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2309d7a)), closes [#3878](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3878)
-   Atlas Select Element IE11 should hide default icon and use caret-double-l instead ([6623ff7](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/6623ff7)), closes [#3922](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3922)
-   Clay Color adjust spacing to be the same as Lexicon specs. See https://docs.google.com/document/d/1IUGl5VOWh6lqRa1baRoshVcytc8XbqVMkk30vRW4SM8/edit#heading=h.o2fss76woci2 ([704d25d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/704d25d))

### @clayui/data-provider ([3.3.10](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.9...@clayui/data-provider@3.3.10))

**Note:** Version bump only for package @clayui/data-provider

### @clayui/date-picker ([3.8.0](https://github.com/liferay/clay/compare/@clayui/date-picker@3.7.1...@clayui/date-picker@3.8.0))

#### Bug Fixes

-   update timepicker format ([2c4f364](https://github.com/liferay/clay/commit/2c4f364))

#### Features

-   **@clayui/color-picker:** add API to show both default colors and custom colors ([d149fc1](https://github.com/liferay/clay/commit/d149fc1))

### @clayui/drop-down ([3.9.1](https://github.com/liferay/clay/compare/@clayui/drop-down@3.9.0...@clayui/drop-down@3.9.1))

**Note:** Version bump only for package @clayui/drop-down

### @clayui/form ([3.14.4](https://github.com/liferay/clay/compare/@clayui/form@3.14.3...@clayui/form@3.14.4))

**Note:** Version bump only for package @clayui/form

### @clayui/list ([3.4.7](https://github.com/liferay/clay/compare/@clayui/list@3.4.6...@clayui/list@3.4.7))

**Note:** Version bump only for package @clayui/list

### @clayui/localized-input ([3.2.6](https://github.com/liferay/clay/compare/@clayui/localized-input@3.2.5...@clayui/localized-input@3.2.6))

**Note:** Version bump only for package @clayui/localized-input

### @clayui/modal ([3.8.5](https://github.com/liferay/clay/compare/@clayui/modal@3.8.4...@clayui/modal@3.8.5))

**Note:** Version bump only for package @clayui/modal

### @clayui/multi-select ([3.9.4](https://github.com/liferay/clay/compare/@clayui/multi-select@3.9.3...@clayui/multi-select@3.9.4))

**Note:** Version bump only for package @clayui/multi-select

### @clayui/multi-step-nav ([3.3.6](https://github.com/liferay/clay/compare/@clayui/multi-step-nav@3.3.5...@clayui/multi-step-nav@3.3.6))

**Note:** Version bump only for package @clayui/multi-step-nav

### @clayui/nav ([3.4.5](https://github.com/liferay/clay/compare/@clayui/nav@3.4.4...@clayui/nav@3.4.5))

**Note:** Version bump only for package @clayui/nav

### @clayui/navigation-bar ([3.3.5](https://github.com/liferay/clay/compare/@clayui/navigation-bar@3.3.4...@clayui/navigation-bar@3.3.5))

**Note:** Version bump only for package @clayui/navigation-bar

### @clayui/pagination-bar ([3.2.6](https://github.com/liferay/clay/compare/@clayui/pagination-bar@3.2.5...@clayui/pagination-bar@3.2.6))

**Note:** Version bump only for package @clayui/pagination-bar

### @clayui/pagination ([3.3.6](https://github.com/liferay/clay/compare/@clayui/pagination@3.3.5...@clayui/pagination@3.3.6))

**Note:** Version bump only for package @clayui/pagination

### @clayui/panel ([3.3.6](https://github.com/liferay/clay/compare/@clayui/panel@3.3.5...@clayui/panel@3.3.6))

**Note:** Version bump only for package @clayui/panel

### @clayui/popover ([3.5.5](https://github.com/liferay/clay/compare/@clayui/popover@3.5.4...@clayui/popover@3.5.5))

**Note:** Version bump only for package @clayui/popover

### @clayui/shared ([3.5.1](https://github.com/liferay/clay/compare/@clayui/shared@3.5.0...@clayui/shared@3.5.1))

**Note:** Version bump only for package @clayui/shared

### @clayui/tabs ([3.3.5](https://github.com/liferay/clay/compare/@clayui/tabs@3.3.4...@clayui/tabs@3.3.5))

**Note:** Version bump only for package @clayui/tabs

### @clayui/time-picker ([3.2.6](https://github.com/liferay/clay/compare/@clayui/time-picker@3.2.5...@clayui/time-picker@3.2.6))

#### Bug Fixes

-   stop propagating key events in time picker ([0e0d89b](https://github.com/liferay/clay/commit/0e0d89b))

### @clayui/toolbar ([3.0.6](https://github.com/liferay/clay/compare/@clayui/toolbar@3.0.5...@clayui/toolbar@3.0.6))

**Note:** Version bump only for package @clayui/toolbar

### @clayui/tooltip ([3.4.5](https://github.com/liferay/clay/compare/@clayui/tooltip@3.4.4...@clayui/tooltip@3.4.5))

**Note:** Version bump only for package @clayui/tooltip

### @clayui/upper-toolbar ([3.1.14](https://github.com/liferay/clay/compare/@clayui/upper-toolbar@3.1.13...@clayui/upper-toolbar@3.1.14))

**Note:** Version bump only for package @clayui/upper-toolbar

## 2021-1-27

### @clayui/autocomplete ([3.2.5](https://github.com/liferay/clay/compare/@clayui/autocomplete@3.2.4...@clayui/autocomplete@3.2.5))

**Note:** Version bump only for package @clayui/autocomplete

### @clayui/breadcrumb ([3.3.5](https://github.com/liferay/clay/compare/@clayui/breadcrumb@3.3.4...@clayui/breadcrumb@3.3.5))

**Note:** Version bump only for package @clayui/breadcrumb

### @clayui/button ([3.6.0](https://github.com/liferay/clay/compare/@clayui/button@3.5.0...@clayui/button@3.6.0))

#### Features

-   add api for stacking button group vertically ([e6d457b](https://github.com/liferay/clay/commit/e6d457b))
-   add functionality to pass in null for displayType so that only 'btn' is added ([0cac172](https://github.com/liferay/clay/commit/0cac172))

### @clayui/card ([3.6.5](https://github.com/liferay/clay/compare/@clayui/card@3.6.4...@clayui/card@3.6.5))

**Note:** Version bump only for package @clayui/card

### @clayui/color-picker ([3.4.5](https://github.com/liferay/clay/compare/@clayui/color-picker@3.4.4...@clayui/color-picker@3.4.5))

#### Bug Fixes

-   use ClayButton instead of button element ([18355fd](https://github.com/liferay/clay/commit/18355fd))

### @clayui/css ([3.24.0](https://github.com/liferay/clay/tree/master/packages/clay-css/compare/@clayui/css@3.23.0...@clayui/css@3.24.0))

#### Bug Fixes

-   Absorb Bootstrap 4 variables into Clay CSS ([d4be0ec](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/d4be0ec))
-   Atlas `color-yiq` function not useable in Atlas variables due to `$yiq-contrasted-threshold` undefined ([2035a8b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/2035a8b)), closes [#3708](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3708)
-   Atlas Toggle Switch change checked state button icon color to primary ([de9ca0b](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/de9ca0b)), closes [#3872](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3872)
-   List Group adds missing disabled styles for list-group-item ([bdc3acf](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/bdc3acf))
-   Removes Bootstrap 4 variable overwrites, still keeping this file to prevent Sass import errors from custom imports ([1232870](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/1232870))
-   Removes imports for Bootstrap 4 variables and variable overwrites ([bd0f614](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/bd0f614))
-   Tables set background-color on thead, tbody, tfoot for Table and Table List. This is for a Chrome 87 bug. ([3b0badb](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/3b0badb)), closes [#3847](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3847)

#### Features

-   Atlas Toggle Switch make it 40px by 24px in desktop views ([50c5c6d](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/50c5c6d)), closes [#3835](https://github.com/liferay/clay/tree/master/packages/clay-css/issues/3835)
-   SVG Icons adds cursor.svg ([afbb1f0](https://github.com/liferay/clay/tree/master/packages/clay-css/commit/afbb1f0))

### @clayui/data-provider ([3.3.9](https://github.com/liferay/clay/compare/@clayui/data-provider@3.3.8...@clayui/data-provider@3.3.9))

**Note:** Version bump only for package @clayui/data-provider

### @clayui/date-picker ([3.7.1](https://github.com/liferay/clay/compare/@clayui/date-picker@3.7.0...@clayui/date-picker@3.7.1))

**Note:** Version bump only for package @clayui/date-picker

### @clayui/drop-down ([3.9.0](https://github.com/liferay/clay/compare/@clayui/drop-down@3.8.4...@clayui/drop-down@3.9.0))

#### Features

-   add api for controlling the active state of the menu ([28e5191](https://github.com/liferay/clay/commit/28e5191))
-   add props for making menu different widths ([80396d8](https://github.com/liferay/clay/commit/80396d8))

### @clayui/form ([3.14.3](https://github.com/liferay/clay/compare/@clayui/form@3.14.2...@clayui/form@3.14.3))

**Note:** Version bump only for package @clayui/form

### @clayui/list ([3.4.6](https://github.com/liferay/clay/compare/@clayui/list@3.4.5...@clayui/list@3.4.6))

#### Bug Fixes

-   make sure <button> has a type ([a27ce37](https://github.com/liferay/clay/commit/a27ce37))

### @clayui/localized-input ([3.2.5](https://github.com/liferay/clay/compare/@clayui/localized-input@3.2.4...@clayui/localized-input@3.2.5))

**Note:** Version bump only for package @clayui/localized-input

### @clayui/modal ([3.8.4](https://github.com/liferay/clay/compare/@clayui/modal@3.8.3...@clayui/modal@3.8.4))

**Note:** Version bump only for package @clayui/modal

### @clayui/multi-select ([3.9.3](https://github.com/liferay/clay/compare/@clayui/multi-select@3.9.2...@clayui/multi-select@3.9.3))

**Note:** Version bump only for package @clayui/multi-select

### @clayui/multi-step-nav ([3.3.5](https://github.com/liferay/clay/compare/@clayui/multi-step-nav@3.3.4...@clayui/multi-step-nav@3.3.5))

#### Bug Fixes

-   make sure <button> has a type ([dfd17aa](https://github.com/liferay/clay/commit/dfd17aa))

### @clayui/nav ([3.4.4](https://github.com/liferay/clay/compare/@clayui/nav@3.4.3...@clayui/nav@3.4.4))

**Note:** Version bump only for package @clayui/nav

### @clayui/navigation-bar ([3.3.4](https://github.com/liferay/clay/compare/@clayui/navigation-bar@3.3.3...@clayui/navigation-bar@3.3.4))

**Note:** Version bump only for package @clayui/navigation-bar

### @clayui/pagination-bar ([3.2.5](https://github.com/liferay/clay/compare/@clayui/pagination-bar@3.2.4...@clayui/pagination-bar@3.2.5))

**Note:** Version bump only for package @clayui/pagination-bar

### @clayui/pagination ([3.3.5](https://github.com/liferay/clay/compare/@clayui/pagination@3.3.4...@clayui/pagination@3.3.5))

**Note:** Version bump only for package @clayui/pagination

### @clayui/panel ([3.3.5](https://github.com/liferay/clay/compare/@clayui/panel@3.3.4...@clayui/panel@3.3.5))

#### Bug Fixes

-   make sure <button> has a type ([361f151](https://github.com/liferay/clay/commit/361f151))

### @clayui/popover ([3.5.4](https://github.com/liferay/clay/compare/@clayui/popover@3.5.3...@clayui/popover@3.5.4))

**Note:** Version bump only for package @clayui/popover

### @clayui/shared ([3.5.0](https://github.com/liferay/clay/compare/@clayui/shared@3.4.0...@clayui/shared@3.5.0))

#### Features

-   **@clayui/drop-down:** add api for controlling the active state of the menu ([28e5191](https://github.com/liferay/clay/commit/28e5191))

### @clayui/tabs ([3.3.4](https://github.com/liferay/clay/compare/@clayui/tabs@3.3.3...@clayui/tabs@3.3.4))

**Note:** Version bump only for package @clayui/tabs

### @clayui/time-picker ([3.2.5](https://github.com/liferay/clay/compare/@clayui/time-picker@3.2.4...@clayui/time-picker@3.2.5))

**Note:** Version bump only for package @clayui/time-picker

### @clayui/toolbar ([3.0.5](https://github.com/liferay/clay/compare/@clayui/toolbar@3.0.4...@clayui/toolbar@3.0.5))

**Note:** Version bump only for package @clayui/toolbar

### @clayui/tooltip ([3.4.4](https://github.com/liferay/clay/compare/@clayui/tooltip@3.4.3...@clayui/tooltip@3.4.4))

**Note:** Version bump only for package @clayui/tooltip

### @clayui/upper-toolbar ([3.1.13](https://github.com/liferay/clay/compare/@clayui/upper-toolbar@3.1.12...@clayui/upper-toolbar@3.1.13))

**Note:** Version bump only for package @clayui/upper-toolbar

---

## v3.x

> A major change from 2.x to 3.x is that we now publish each package independently. Each package now has its own changelog.

-   [browserslist-config-clay](packages/browserslist-config-clay/CHANGELOG.md)
-   [clay-alert](packages/clay-alert/CHANGELOG.md)
-   [clay-autocomplete](packages/clay-autocomplete/CHANGELOG.md)
-   [clay-badge](packages/clay-badge/CHANGELOG.md)
-   [clay-breadcrumb](packages/clay-breadcrumb/CHANGELOG.md)
-   [clay-button](packages/clay-button/CHANGELOG.md)
-   [clay-card](packages/clay-card/CHANGELOG.md)
-   [clay-charts](packages/clay-charts/CHANGELOG.md)
-   [clay-color-picker](packages/clay-color-picker/CHANGELOG.md)
-   [clay-css](packages/clay-css/CHANGELOG.md)
-   [clay-data-provider](packages/clay-data-provider/CHANGELOG.md)
-   [clay-date-picker](packages/clay-date-picker/CHANGELOG.md)
-   [clay-drop-down](packages/clay-drop-down/CHANGELOG.md)
-   [clay-empty-state](packages/clay-empty-state/CHANGELOG.md)
-   [clay-form](packages/clay-form/CHANGELOG.md)
-   [clay-icon](packages/clay-icon/CHANGELOG.md)
-   [clay-label](packages/clay-label/CHANGELOG.md)
-   [clay-link](packages/clay-link/CHANGELOG.md)
-   [clay-list](packages/clay-list/CHANGELOG.md)
-   [clay-loading-indicator](packages/clay-loading-indicator/CHANGELOG.md)
-   [clay-localized-input](packages/clay-localized-input/CHANGELOG.md)
-   [clay-management-toolbar](packages/clay-management-toolbar/CHANGELOG.md)
-   [clay-modal](packages/clay-modal/CHANGELOG.md)
-   [clay-multi-select](packages/clay-multi-select/CHANGELOG.md)
-   [clay-multi-step-nav](packages/clay-multi-step-nav/CHANGELOG.md)
-   [clay-nav](packages/clay-nav/CHANGELOG.md)
-   [clay-navigation-bar](packages/clay-navigation-bar/CHANGELOG.md)
-   [clay-pagination](packages/clay-pagination/CHANGELOG.md)
-   [clay-pagination-bar](packages/clay-pagination-bar/CHANGELOG.md)
-   [clay-panel](packages/clay-panel/CHANGELOG.md)
-   [clay-popover](packages/clay-popover/CHANGELOG.md)
-   [clay-progress-bar](packages/clay-progress-bar/CHANGELOG.md)
-   [clay-shared](packages/clay-shared/CHANGELOG.md)
-   [clay-slider](packages/clay-slider/CHANGELOG.md)
-   [clay-sticker](packages/clay-sticker/CHANGELOG.md)
-   [clay-table](packages/clay-table/CHANGELOG.md)
-   [clay-tabs](packages/clay-tabs/CHANGELOG.md)
-   [clay-time-picker](packages/clay-time-picker/CHANGELOG.md)
-   [clay-tooltip](packages/clay-tooltip/CHANGELOG.md)
-   [clay-upper-toolbar](packages/clay-upper-toolbar/CHANGELOG.md)
-   [generator-clay-component](packages/generator-clay-component/CHANGELOG.md)

## [v2.7.0](https://github.com/liferay/clay/tree/v2.7.0) (2019-01-24)

[Full Changelog](https://github.com/liferay/clay/compare/v2.6.0...v2.7.0)

**Closed issues:**

-   Color dark is not correct [\#1468](https://github.com/liferay/clay/issues/1468)
-   Missing information in filterLabelCloseClicked [\#1467](https://github.com/liferay/clay/issues/1467)
-   Add support for stickers with icons in Clay Cards [\#1463](https://github.com/liferay/clay/issues/1463)
-   Change erroneous SPDX license specifier from BSD-2-Clause to BSD-3-Clause [\#1461](https://github.com/liferay/clay/issues/1461)
-   Yarn warns about non-SPDX license specifier during install [\#1459](https://github.com/liferay/clay/issues/1459)
-   Re-enable and update generator-metal-clay tests [\#1458](https://github.com/liferay/clay/issues/1458)
-   README refers inconsistently to Yarn and NPM [\#1457](https://github.com/liferay/clay/issues/1457)
-   Add default type in Claybutton [\#1455](https://github.com/liferay/clay/issues/1455)
-   clayui.com has outdated clay packages [\#1441](https://github.com/liferay/clay/issues/1441)
-   Card view vertical distance between cards [\#1437](https://github.com/liferay/clay/issues/1437)
-   Text input variations page update [\#1422](https://github.com/liferay/clay/issues/1422)
-   Clayui.com search suggestion dropdown does not look correctly [\#1413](https://github.com/liferay/clay/issues/1413)
-   Dropdown can't take contentRenderer [\#1398](https://github.com/liferay/clay/issues/1398)

**Merged pull requests:**

-   v2.7.0 CHANGELOG [\#1476](https://github.com/liferay/clay/pull/1476) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1463 - Add support for icons in clay cards stickers [\#1475](https://github.com/liferay/clay/pull/1475) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1467 - Send useful filter label item data through components to Management Toolbar [\#1470](https://github.com/liferay/clay/pull/1470) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1468 - Remplace dark color [\#1469](https://github.com/liferay/clay/pull/1469) ([marcoscv-work](https://github.com/marcoscv-work))
-   Fixes \#1461 - Use correct SPDX specifier [\#1462](https://github.com/liferay/clay/pull/1462) ([wincent](https://github.com/wincent))
-   Fixes \#1455 - Add default type in ClayButton.soy [\#1456](https://github.com/liferay/clay/pull/1456) ([boton](https://github.com/boton))
-   Fixes \#1457 - Refer to Yarn consistently in Clay README [\#1454](https://github.com/liferay/clay/pull/1454) ([wincent](https://github.com/wincent))
-   Fixes \#1458 - Re-enable and update generator-metal-clay tests [\#1452](https://github.com/liferay/clay/pull/1452) ([wincent](https://github.com/wincent))
-   Fixes \#1459 - Use SPDX license identifier in package.json files [\#1451](https://github.com/liferay/clay/pull/1451) ([wincent](https://github.com/wincent))
-   Fixes \#1398 - Adds the contentRenderer API to ClayDropdown [\#1445](https://github.com/liferay/clay/pull/1445) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1422 - \(Clayui.com\) Move Multi Select examples to Selectors page [\#1444](https://github.com/liferay/clay/pull/1444) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1413 - \(Clayui.com\) Overlays search styles [\#1443](https://github.com/liferay/clay/pull/1443) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1441 - \(Clayui.com\) Updates Clay packages at clayui.com [\#1442](https://github.com/liferay/clay/pull/1442) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1437 - Change card vertical mrgin [\#1438](https://github.com/liferay/clay/pull/1438) ([marcoscv-work](https://github.com/marcoscv-work))

## [v2.6.0](https://github.com/liferay/clay/tree/v2.6.0) (2019-01-11)

[Full Changelog](https://github.com/liferay/clay/compare/v2.5.1...v2.6.0)

**Closed issues:**

-   Review ClayMultiselect \(Step 1\) [\#1431](https://github.com/liferay/clay/issues/1431)
-   Clay cards sticker should admite image url for user sticker type [\#1429](https://github.com/liferay/clay/issues/1429)
-   ClayDropdown items should be able to receive link target [\#1425](https://github.com/liferay/clay/issues/1425)
-   ClayCSS: Base Theme Label Success and Label Warning bg is mapped to \$label-primary-bg [\#1419](https://github.com/liferay/clay/issues/1419)
-   ClayCSS: Management Bar tweak spacing between items in mobile to make room for a Clear button [\#1417](https://github.com/liferay/clay/issues/1417)
-   ClayCSS: Custom Checkbox/Radio allow more fine grain control over positioning and sizes [\#1415](https://github.com/liferay/clay/issues/1415)

**Merged pull requests:**

-   v2.6.0 [\#1433](https://github.com/liferay/clay/pull/1433) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1431 - Review ClayMultiselect \(API CHANGED\) [\#1432](https://github.com/liferay/clay/pull/1432) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1429 - Add sticker image support in clay cards \(API ADDED\) [\#1430](https://github.com/liferay/clay/pull/1430) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1425 Add target property to dropdown links \(API ADDED\) [\#1426](https://github.com/liferay/clay/pull/1426) ([carloslancha](https://github.com/carloslancha))
-   ClayCSS Update readme.md [\#1421](https://github.com/liferay/clay/pull/1421) ([pat270](https://github.com/pat270))
-   Fixes \#1419 - ClayCSS `.label-success` and `.label-warning` shouldn't… [\#1420](https://github.com/liferay/clay/pull/1420) ([pat270](https://github.com/pat270))
-   Fixes \#1417 - ClayCSS: Management Bar tweak spacing between items in mobile [\#1418](https://github.com/liferay/clay/pull/1418) ([pat270](https://github.com/pat270))
-   Fixes \#1415 - ClayCSS Custom Checkbox / Radio calculate spacing based… [\#1416](https://github.com/liferay/clay/pull/1416) ([pat270](https://github.com/pat270))
-   Fixes \#1162 - Control the focus within the modal [\#1397](https://github.com/liferay/clay/pull/1397) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.5.1](https://github.com/liferay/clay/tree/v2.5.1) (2018-12-19)

[Full Changelog](https://github.com/liferay/clay/compare/v2.5.0...v2.5.1)

**Closed issues:**

-   ClayCSS: Cards mixin `clay-card-type-asset` has wrong key name for `aspect-ratio-border-width` [\#1406](https://github.com/liferay/clay/issues/1406)
-   All Clay components should extend from ClayComponent instead Component [\#1399](https://github.com/liferay/clay/issues/1399)
-   ClayDropdown itemSelected event should be itemClicked [\#1393](https://github.com/liferay/clay/issues/1393)
-   Add support to Clay Component to receive an actionHandler [\#1392](https://github.com/liferay/clay/issues/1392)
-   ClayTable doesn't render the id when it is not wrapped [\#1390](https://github.com/liferay/clay/issues/1390)
-   ClayCSS: Pagination setting height of page-link has discrepancy between Atlas and Base [\#1388](https://github.com/liferay/clay/issues/1388)
-   ClayCSS: New SVG Icons `cards-full` and `square-hole` [\#1384](https://github.com/liferay/clay/issues/1384)
-   ClayMultiSelect should be fully functional by default without having to handle events [\#1381](https://github.com/liferay/clay/issues/1381)
-   Lexicon CSS Site is out of sync with 1.x [\#1342](https://github.com/liferay/clay/issues/1342)
-   Management toolbar mobile viewports Clear action must be right aligned [\#1226](https://github.com/liferay/clay/issues/1226)
-   Modal - Not correct tab order [\#1162](https://github.com/liferay/clay/issues/1162)

**Merged pull requests:**

-   v2.5.1 CHANGELOG [\#1411](https://github.com/liferay/clay/pull/1411) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1399 - All components extend from ClayComponent [\#1410](https://github.com/liferay/clay/pull/1410) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1406 - ClayCSS Mixin `clay-card-type-asset` map key `aspect-ra… [\#1407](https://github.com/liferay/clay/pull/1407) ([pat270](https://github.com/pat270))
-   Fixes \#1392 - Add support for defaultEventHandlers [\#1405](https://github.com/liferay/clay/pull/1405) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1393 - Replace itemSelected in favor of itemClicked [\#1396](https://github.com/liferay/clay/pull/1396) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1390 - Render the id when wrapTable is false [\#1394](https://github.com/liferay/clay/pull/1394) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1388 - ClayCSS Pagination unify the way we set the height of e… [\#1389](https://github.com/liferay/clay/pull/1389) ([pat270](https://github.com/pat270))
-   Fixes \#1384 - ClayCSS added new SVG icons `cards-full` and `square-hole` [\#1385](https://github.com/liferay/clay/pull/1385) ([pat270](https://github.com/pat270))
-   Fixes \#1226 - Replace tbar-inline-md-down with tbar-inline-xs-down [\#1383](https://github.com/liferay/clay/pull/1383) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1381 - Improvements clay multi select [\#1382](https://github.com/liferay/clay/pull/1382) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.5.0](https://github.com/liferay/clay/tree/v2.5.0) (2018-12-10)

[Full Changelog](https://github.com/liferay/clay/compare/v2.4.1...v2.5.0)

**Closed issues:**

-   ClayCSS: Toggle Switch replace hardcoded rem value with variables [\#1377](https://github.com/liferay/clay/issues/1377)
-   Add documentation from ClayAutocomplete and ClayMultiSelect to clayui.com [\#1374](https://github.com/liferay/clay/issues/1374)
-   ClayCSS: Pagination with buttons don't have hover focus styles and base theme has rounded borders [\#1371](https://github.com/liferay/clay/issues/1371)
-   ClayCSS: Nav and Navbar replace hardcoded rem values [\#1369](https://github.com/liferay/clay/issues/1369)
-   ClayCSS: Remove unused selector in Multi Step Nav [\#1367](https://github.com/liferay/clay/issues/1367)
-   ClayCSS: Forms replace hardcoded rem values with variables [\#1365](https://github.com/liferay/clay/issues/1365)
-   ClayCSS: Collapse Icon alignment is off [\#1363](https://github.com/liferay/clay/issues/1363)
-   ClayCSS: Buttons in Input Group should be more customizable [\#1354](https://github.com/liferay/clay/issues/1354)
-   Update the package version on clayui.com and icon files [\#1350](https://github.com/liferay/clay/issues/1350)
-   Upgrade Bootstrap to 4.1.x [\#1347](https://github.com/liferay/clay/issues/1347)
-   ClayCSS: Missing semi-colon and !default flag in variables [\#1345](https://github.com/liferay/clay/issues/1345)
-   ClayCSS: 24px height labels icons should be 12px [\#1343](https://github.com/liferay/clay/issues/1343)
-   Implement ClayAutocomplete [\#1341](https://github.com/liferay/clay/issues/1341)
-   ClayCSS: Add an SVG icon for the Kazakhstan flag [\#1336](https://github.com/liferay/clay/issues/1336)
-   Malware in a dependency [\#1333](https://github.com/liferay/clay/issues/1333)
-   Implement ClayDataProvider [\#1330](https://github.com/liferay/clay/issues/1330)
-   Allow customization of actionItems cell of ClayTable [\#1329](https://github.com/liferay/clay/issues/1329)
-   Clayui.com - Automate icons exposure to static folder [\#1323](https://github.com/liferay/clay/issues/1323)
-   ClayCSS: New Lexicon SVG Icon Document PDF [\#1321](https://github.com/liferay/clay/issues/1321)
-   ClayCSS: Checked Custom Radio is not centered in Chrome or Edge [\#1319](https://github.com/liferay/clay/issues/1319)
-   ClayTooltip should allow to force the position [\#1308](https://github.com/liferay/clay/issues/1308)
-   Clay CSS should support Ruby Sass [\#1270](https://github.com/liferay/clay/issues/1270)
-   IE11 - \<a\> element is hard to click with child lexicon-icon [\#1242](https://github.com/liferay/clay/issues/1242)
-   Filter Label Items don't allow HTML inside [\#1228](https://github.com/liferay/clay/issues/1228)
-   In ResultsBar, results-for item is always visible [\#1176](https://github.com/liferay/clay/issues/1176)
-   results-bar - color contrast in links [\#1147](https://github.com/liferay/clay/issues/1147)
-   Improve Tooltip position API [\#1103](https://github.com/liferay/clay/issues/1103)
-   Specific alert classes ClayToast and ClayStripe lack `close` method [\#969](https://github.com/liferay/clay/issues/969)
-   Build Failed Windows 10 [\#963](https://github.com/liferay/clay/issues/963)
-   Failed to exec soy script [\#802](https://github.com/liferay/clay/issues/802)
-   v2-beta: Add autoprefixer to vendor prefix css [\#351](https://github.com/liferay/clay/issues/351)
-   v2-beta: JS convert transitions to BS4 pattern [\#347](https://github.com/liferay/clay/issues/347)
-   v2-beta: Form Validation colors to new BS4 color variants [\#345](https://github.com/liferay/clay/issues/345)
-   BS4 compat layer - Buttons mixing of btn-default and btn-primary [\#340](https://github.com/liferay/clay/issues/340)

**Merged pull requests:**

-   v2.5.0 CHANGELOG [\#1380](https://github.com/liferay/clay/pull/1380) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1377 - ClayCSS Toggle Switch Bar should use `\$toggle-switch-ba… [\#1378](https://github.com/liferay/clay/pull/1378) ([pat270](https://github.com/pat270))
-   \(clayui.com\) Pagination added `tabindex="-1"` to disabled anchor item… [\#1376](https://github.com/liferay/clay/pull/1376) ([pat270](https://github.com/pat270))
-   Fixes \#1374 - Add documentation from ClayAutocomplete and ClayMultiSelect [\#1375](https://github.com/liferay/clay/pull/1375) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   ClayCSS: Pagination with buttons don't have hover focus styles and base theme has rounded borders [\#1372](https://github.com/liferay/clay/pull/1372) ([pat270](https://github.com/pat270))
-   Fixes \#1369 - ClayCSS Nav `.nav-unstyled` change spacing between link… [\#1370](https://github.com/liferay/clay/pull/1370) ([pat270](https://github.com/pat270))
-   Fixes \#1367 - ClayCSS Multi Step Nav removes unused CSS selector [\#1368](https://github.com/liferay/clay/pull/1368) ([pat270](https://github.com/pat270))
-   Fixes \#1365 - Forms `.form-group-item` use `\$form-group-margin-bottom… [\#1366](https://github.com/liferay/clay/pull/1366) ([pat270](https://github.com/pat270))
-   Fixes \#1363 - ClayCSS Collapse Icon use em values instead of rem on t… [\#1364](https://github.com/liferay/clay/pull/1364) ([pat270](https://github.com/pat270))
-   Fixes \#969 - Adds the close method to ClayStripe and ClayToast [\#1362](https://github.com/liferay/clay/pull/1362) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1228 - Add the .filterLabel template to a file soy separate [\#1361](https://github.com/liferay/clay/pull/1361) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1308, \#1103 - Adding the bestAlign API and improve position API to set via string [\#1360](https://github.com/liferay/clay/pull/1360) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1347 - Update Clay CSS to Bootstrap 4.1.1 [\#1358](https://github.com/liferay/clay/pull/1358) ([pat270](https://github.com/pat270))
-   Fixes \#1329 - Makes the actions menu a deltemplate [\#1356](https://github.com/liferay/clay/pull/1356) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1354 Clay CSS Buttons in Input Group should be more customizable [\#1355](https://github.com/liferay/clay/pull/1355) ([pat270](https://github.com/pat270))
-   Fixes \#1350 - Update package version and icons.svg [\#1352](https://github.com/liferay/clay/pull/1352) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1285, \#1341, \#1330 - Create ClayMultiSelector, ClayDataProvider and ClayAutocomplete [\#1351](https://github.com/liferay/clay/pull/1351) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1345 - ClayCSS add semi-colon and `!default` flag to variables… [\#1346](https://github.com/liferay/clay/pull/1346) ([pat270](https://github.com/pat270))
-   Fixes \#1343 - ClayCSS Atlas `.label-lg` and `.form-control .label` ic… [\#1344](https://github.com/liferay/clay/pull/1344) ([pat270](https://github.com/pat270))
-   ClayCSS: Create markup for labels in input [\#1340](https://github.com/liferay/clay/pull/1340) ([pat270](https://github.com/pat270))
-   Enhance README [\#1339](https://github.com/liferay/clay/pull/1339) ([diegonvs](https://github.com/diegonvs))
-   Fixes \#1323 | Update lockfiles [\#1338](https://github.com/liferay/clay/pull/1338) ([diegonvs](https://github.com/diegonvs))
-   ClayCSS: Add an SVG icon for the Kazakhstan flag [\#1337](https://github.com/liferay/clay/pull/1337) ([pat270](https://github.com/pat270))
-   Fixes \#1333 - Lock event stream to 3.3.4 [\#1335](https://github.com/liferay/clay/pull/1335) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1242 - Adds an alert informing the discontinuation of the title and focusable API [\#1331](https://github.com/liferay/clay/pull/1331) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1174 - Remove redundant aria-label in clayButton [\#1325](https://github.com/liferay/clay/pull/1325) ([jbalsas](https://github.com/jbalsas))
-   Fixes \#1321 - \(ClayCSS\) Added new Lexicon Icon `document-pdf` [\#1322](https://github.com/liferay/clay/pull/1322) ([pat270](https://github.com/pat270))
-   Fixes \#1319 - Custom Radio Checked and Checkbox Indeterminate icons a… [\#1320](https://github.com/liferay/clay/pull/1320) ([pat270](https://github.com/pat270))
-   Fixes: \#1270 - \(ClayCSS\) Deprecated `$clay-unset` and don't use varia… [\#1317](https://github.com/liferay/clay/pull/1317) ([pat270](https://github.com/pat270))
-   LEXICONCSS \#1242 - SVG Icons added `.lexicon-icon-container` to wrap svg icons so we can have the icon name spoken for screen readers [\#1307](https://github.com/liferay/clay/pull/1307) ([pat270](https://github.com/pat270))
-   Fixes \#796 - Add keyboard functionality for clay-dropdown [\#1282](https://github.com/liferay/clay/pull/1282) ([bryceosterhaus](https://github.com/bryceosterhaus))

## [v2.4.1](https://github.com/liferay/clay/tree/v2.4.1) (2018-11-15)

[Full Changelog](https://github.com/liferay/clay/compare/v2.4.0...v2.4.1)

**Closed issues:**

-   Circular dependency in ClayDropdown [\#1311](https://github.com/liferay/clay/issues/1311)
-   Clay-charts-react should be private [\#1305](https://github.com/liferay/clay/issues/1305)
-   Create markup to Labels Input Field [\#1283](https://github.com/liferay/clay/issues/1283)

**Merged pull requests:**

-   v2.4.1 CHANGELOG [\#1316](https://github.com/liferay/clay/pull/1316) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1305 - Set charts-react to private and charts-shared to public [\#1315](https://github.com/liferay/clay/pull/1315) ([carloslancha](https://github.com/carloslancha))
-   v2.4.1 CHANGELOG [\#1314](https://github.com/liferay/clay/pull/1314) ([carloslancha](https://github.com/carloslancha))
-   v2.4.1 CHANGELOG [\#1313](https://github.com/liferay/clay/pull/1313) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1311 - Remove circular dependency in ClayDropdown [\#1312](https://github.com/liferay/clay/pull/1312) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1305 - clay-charts-shared should not be private [\#1310](https://github.com/liferay/clay/pull/1310) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1305 - Clay-charts-react and clay-charts-shared set to private [\#1306](https://github.com/liferay/clay/pull/1306) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1293 - Add tests for clay-charts-react [\#1294](https://github.com/liferay/clay/pull/1294) ([bryceosterhaus](https://github.com/bryceosterhaus))

## [v2.4.0](https://github.com/liferay/clay/tree/v2.4.0) (2018-11-13)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.29...v2.4.0)

**Closed issues:**

-   Build fails with Node \> 10.x [\#1301](https://github.com/liferay/clay/issues/1301)
-   ClayCSS: SVG Icons Add 9 New Icons for Document Types [\#1298](https://github.com/liferay/clay/issues/1298)
-   Unable to add tests for clay-charts-react [\#1293](https://github.com/liferay/clay/issues/1293)
-   Installation issue with node v10.13.0 and npm v6.4.1 [\#1289](https://github.com/liferay/clay/issues/1289)
-   Create ClayMultiSelect Component [\#1285](https://github.com/liferay/clay/issues/1285)
-   Create clay-charts for React [\#1280](https://github.com/liferay/clay/issues/1280)
-   Data attributes doesn't get updated in DOM after changing [\#1275](https://github.com/liferay/clay/issues/1275)
-   Duplicate resulting CSS [\#1274](https://github.com/liferay/clay/issues/1274)
-   Lexicon: Ascend and Descend buttons in Management Bar not visible on Mobile or minimized browsers [\#1252](https://github.com/liferay/clay/issues/1252)
-   Make ClayTable table tag classes configurable [\#1249](https://github.com/liferay/clay/issues/1249)
-   Create loading-indicator component [\#1171](https://github.com/liferay/clay/issues/1171)
-   ClayDropdown Keyboard navigation [\#796](https://github.com/liferay/clay/issues/796)

**Merged pull requests:**

-   v2.4.0 CHANGELOG [\#1304](https://github.com/liferay/clay/pull/1304) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1289 - SF [\#1303](https://github.com/liferay/clay/pull/1303) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1298 \(ClayCSS\) Added new SVG Icons document-code, document-com… [\#1300](https://github.com/liferay/clay/pull/1300) ([pat270](https://github.com/pat270))
-   Fixes \#1274 - Duplicate CSS in Liferay DXP 7.1 [\#1297](https://github.com/liferay/clay/pull/1297) ([pat270](https://github.com/pat270))
-   Fixes \#1171 - Implementation of loading indicator [\#1286](https://github.com/liferay/clay/pull/1286) ([bryceosterhaus](https://github.com/bryceosterhaus))
-   Fixes \#1268 - Add capability to Interact with the pagination component [\#1284](https://github.com/liferay/clay/pull/1284) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1280 - react-clay-charts [\#1281](https://github.com/liferay/clay/pull/1281) ([bryceosterhaus](https://github.com/bryceosterhaus))
-   Fixes \#1260 - Mark should use `$mark-bg` and added option to configur… [\#1278](https://github.com/liferay/clay/pull/1278) ([pat270](https://github.com/pat270))
-   Fixes \#1249 - Add support for custom classes in ClayTable [\#1277](https://github.com/liferay/clay/pull/1277) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1275 - Sync data attributes in ClayComponent [\#1276](https://github.com/liferay/clay/pull/1276) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1266 - Force reflow sidenav to prevent issue in IE11 [\#1271](https://github.com/liferay/clay/pull/1271) ([pat270](https://github.com/pat270))
-   React implementation for clay-charts [\#1261](https://github.com/liferay/clay/pull/1261) ([bryceosterhaus](https://github.com/bryceosterhaus))
-   Fixes \#1238 - Fixes checkbox examples in indeterminate state [\#1258](https://github.com/liferay/clay/pull/1258) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1240 - Dropdown Menu added `.dropdown-item-indicator-start` and `.dropdown-item-indicator-end` for placing icons on either side of a dropdown-item and deprecated `.dropdown-item-indicator` [\#1245](https://github.com/liferay/clay/pull/1245) ([pat270](https://github.com/pat270))

## [v1.0.29](https://github.com/liferay/clay/tree/v1.0.29) (2018-10-30)

[Full Changelog](https://github.com/liferay/clay/compare/v2.3.4...v1.0.29)

**Closed issues:**

-   Add capability to Interact with the pagination component [\#1268](https://github.com/liferay/clay/issues/1268)
-   Clay: IE11 SideNav does not fully close [\#1266](https://github.com/liferay/clay/issues/1266)
-   ClayCSS: Mark element colors should be customizable through variables [\#1260](https://github.com/liferay/clay/issues/1260)
-   Management Tool Bar is not updated following Lexicon and Portal Migration. [\#1254](https://github.com/liferay/clay/issues/1254)
-   ClayCreationMenuDropdown should accept empty array or undefined primaryItems [\#1250](https://github.com/liferay/clay/issues/1250)
-   Rename Layout section to Foundations [\#1247](https://github.com/liferay/clay/issues/1247)
-   ClayCSS: Add Table helper classes for styling first and last children [\#1241](https://github.com/liferay/clay/issues/1241)
-   ClayCSS: Allow icons to be placed on the left and right of a dropdown-menu [\#1240](https://github.com/liferay/clay/issues/1240)
-   Incorrect example of use for Indeterminate State for Checkbox [\#1238](https://github.com/liferay/clay/issues/1238)
-   ClayCSS: Add new icon Anonymize [\#1236](https://github.com/liferay/clay/issues/1236)
-   Labels padding to be fixed [\#1229](https://github.com/liferay/clay/issues/1229)
-   ClayCSS: Alert should use word-wrap: break-word [\#1223](https://github.com/liferay/clay/issues/1223)
-   Compile error with clay-css scss [\#1220](https://github.com/liferay/clay/issues/1220)
-   Add hover attributes to Vertical Navigation [\#1198](https://github.com/liferay/clay/issues/1198)
-   Nav-underline css class is painting incorrect color and height [\#1192](https://github.com/liferay/clay/issues/1192)
-   Redundant aria-label in clayButton [\#1174](https://github.com/liferay/clay/issues/1174)
-   Please Stop “Fixing” Font Smoothing [\#1164](https://github.com/liferay/clay/issues/1164)

**Merged pull requests:**

-   Fixes \#1252 - Management Bar added .management-bar-item-xs-inline-block [\#1273](https://github.com/liferay/clay/pull/1273) ([pat270](https://github.com/pat270))
-   Fixes \#1266 - \(1.x\) Force reflow sidenav to prevent issue in IE11 [\#1272](https://github.com/liferay/clay/pull/1272) ([pat270](https://github.com/pat270))
-   Fixes \#1250 - Check also if secondaryItems is empty in creationMenu [\#1259](https://github.com/liferay/clay/pull/1259) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1254 - Adding example of the Management Toolbar with filter labels [\#1257](https://github.com/liferay/clay/pull/1257) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1247 - Rename the Layout section for Foundations [\#1256](https://github.com/liferay/clay/pull/1256) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1250 - ClayCreationMenuDropdown should accept empty array or undefined primaryItems [\#1251](https://github.com/liferay/clay/pull/1251) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1241 - Table List added `.table-row-start`, `.table-row-end`, `.table-cell-start`, `.table-cell-end` to style cells that are on the edges of the table [\#1243](https://github.com/liferay/clay/pull/1243) ([pat270](https://github.com/pat270))
-   Fixes \#1164 - Type added options to configure `\$moz-osx-font-smoothin… [\#1239](https://github.com/liferay/clay/pull/1239) ([pat270](https://github.com/pat270))
-   Fixes \#1236 - Added icon Anonymize [\#1237](https://github.com/liferay/clay/pull/1237) ([pat270](https://github.com/pat270))
-   Fixes \#1192 - Nav Underline highlight color should be primary and hei… [\#1235](https://github.com/liferay/clay/pull/1235) ([pat270](https://github.com/pat270))
-   Fixes \#1220 - Use `$input-border-width` the same way Bootstrap uses it [\#1234](https://github.com/liferay/clay/pull/1234) ([pat270](https://github.com/pat270))
-   Fixes \#1198 - Mixin `clay-menubar-vertical-variant` added options to … [\#1233](https://github.com/liferay/clay/pull/1233) ([pat270](https://github.com/pat270))
-   Fixes \#1229 - Atlas Label and Label Lg make horizontal padding .25rem… [\#1232](https://github.com/liferay/clay/pull/1232) ([pat270](https://github.com/pat270))
-   Fixes \#1223 - Alert should use word-wrap: break-word [\#1231](https://github.com/liferay/clay/pull/1231) ([pat270](https://github.com/pat270))
-   Wordsmith ClayUI.com documentation [\#1230](https://github.com/liferay/clay/pull/1230) ([mwilliams2014](https://github.com/mwilliams2014))
-   \(clayui.com\) Adds a default value to redirect and layout if it is empty [\#1219](https://github.com/liferay/clay/pull/1219) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.3.4](https://github.com/liferay/clay/tree/v2.3.4) (2018-10-03)

[Full Changelog](https://github.com/liferay/clay/compare/v2.3.3...v2.3.4)

**Closed issues:**

-   Versions of the clay-css and clay-charts packages are outdated at clayui.com [\#1215](https://github.com/liferay/clay/issues/1215)
-   Event emitting is not consistent in Management Toolbar [\#1213](https://github.com/liferay/clay/issues/1213)
-   Add title to clay-sticker [\#1209](https://github.com/liferay/clay/issues/1209)
-   Migrate Gatsby version on clayui.com from 1.x to 2.x [\#1205](https://github.com/liferay/clay/issues/1205)
-   clayui.com - Stickers type user \(circle\) [\#1204](https://github.com/liferay/clay/issues/1204)
-   Main file of Clay package doesn't exists [\#1201](https://github.com/liferay/clay/issues/1201)
-   clayui.com - Incorrect space in sidebar navigation [\#1199](https://github.com/liferay/clay/issues/1199)
-   ManagementToolbar is emitting wrong event on filter label item close button click [\#1197](https://github.com/liferay/clay/issues/1197)
-   Update to lerna@3.x.x [\#1193](https://github.com/liferay/clay/issues/1193)
-   Link https://clayui.com/docs/components causes 404 [\#1180](https://github.com/liferay/clay/issues/1180)

**Merged pull requests:**

-   v2.3.4 CHANGELOG [\#1218](https://github.com/liferay/clay/pull/1218) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1215 - Update clay-css and clay-charts from 2.2.0 to 2.3.3 at clayui.com [\#1216](https://github.com/liferay/clay/pull/1216) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1213 - Emit all events consistently [\#1214](https://github.com/liferay/clay/pull/1214) ([carloslancha](https://github.com/carloslancha))
-   Proposal for the Nightly Environment [\#1212](https://github.com/liferay/clay/pull/1212) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1209 - Add title to clay-sticker [\#1210](https://github.com/liferay/clay/pull/1210) ([boton](https://github.com/boton))
-   Fixes \#1197 - Replace event name from infoButtonClicked to filterLabelCloseClicked [\#1208](https://github.com/liferay/clay/pull/1208) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1193 - Update lerna from 2.4.0 to 3.4.0 and update yarn in travis from 1.2.0 to 1.10.1 [\#1207](https://github.com/liferay/clay/pull/1207) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1205, \#1204, \#1180 - Migrate Gatsby version on clayui.com from 1.x to 2.x and some fixes [\#1206](https://github.com/liferay/clay/pull/1206) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1201 | Fix clay package's main file [\#1202](https://github.com/liferay/clay/pull/1202) ([diegonvs](https://github.com/diegonvs))
-   clayui.com: \(Fixes: \#1199\) Fix sidebar navigation margin [\#1200](https://github.com/liferay/clay/pull/1200) ([marcoscv-work](https://github.com/marcoscv-work))
-   Add examples [\#1196](https://github.com/liferay/clay/pull/1196) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Organize the Lexicon Core Components session according to the proposal in clayui.com | Fixes \#1111 [\#1195](https://github.com/liferay/clay/pull/1195) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.3.3](https://github.com/liferay/clay/tree/v2.3.3) (2018-09-24)

[Full Changelog](https://github.com/liferay/clay/compare/v2.3.2...v2.3.3)

**Closed issues:**

-   When you close the dropdown by the button it does not remove the added events when opening [\#1189](https://github.com/liferay/clay/issues/1189)
-   Clay Modal does not render properly [\#1183](https://github.com/liferay/clay/issues/1183)
-   ManagementToolbar ActionItems show if an empty array is passed [\#1178](https://github.com/liferay/clay/issues/1178)
-   Missing Icons in clayui.com [\#1177](https://github.com/liferay/clay/issues/1177)
-   ClayActionsDropdown, ClayCreationMenuDropdown and ClayDropdown do not keep the expanded updated with ClayDropdownBase [\#1172](https://github.com/liferay/clay/issues/1172)
-   Add Legend Data for Stacked Bar Chart. [\#1138](https://github.com/liferay/clay/issues/1138)
-   Clayui.com documentation, how enhance it? 🤔 [\#1111](https://github.com/liferay/clay/issues/1111)
-   Styles and markup for results bar [\#1105](https://github.com/liferay/clay/issues/1105)
-   ClayCSS: Update and add table utilities to allow for better sizing and alignment [\#1065](https://github.com/liferay/clay/issues/1065)
-   ManagementToolbar message should be `select-items` instead of `select-page` [\#1025](https://github.com/liferay/clay/issues/1025)
-   Icon Button needs to show a tooltip on hover [\#858](https://github.com/liferay/clay/issues/858)
-   Subnav Tbar needs to support multiple lines and custom labels [\#821](https://github.com/liferay/clay/issues/821)
-   Card stickers are not rounded [\#718](https://github.com/liferay/clay/issues/718)
-   Claycss.com charts errors [\#638](https://github.com/liferay/clay/issues/638)
-   Getting started section of the website [\#604](https://github.com/liferay/clay/issues/604)
-   Add favicon [\#520](https://github.com/liferay/clay/issues/520)

**Merged pull requests:**

-   v2.3.3 CHANGELOG [\#1194](https://github.com/liferay/clay/pull/1194) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1172 - ClayActionsDropdown, ClayCreationMenuDropdown and ClayDropdown do not keep the expanded updated with ClayDropdownBase [\#1191](https://github.com/liferay/clay/pull/1191) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1105 - Update styles and markup for results bar [\#1188](https://github.com/liferay/clay/pull/1188) ([carloslancha](https://github.com/carloslancha))
-   Move some the files from pat270.github.io to clayui.com and some fixes [\#1185](https://github.com/liferay/clay/pull/1185) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Change the default value of actionItems to \[\] | Fixes \#1178 [\#1181](https://github.com/liferay/clay/pull/1181) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes \#1121 - General accessibility fixes [\#1169](https://github.com/liferay/clay/pull/1169) ([carloslancha](https://github.com/carloslancha))
-   Adding plugin to create a JSDOC-based component API table | Fixes \#1111 [\#1166](https://github.com/liferay/clay/pull/1166) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.3.2](https://github.com/liferay/clay/tree/v2.3.2) (2018-09-03)

[Full Changelog](https://github.com/liferay/clay/compare/v2.3.1...v2.3.2)

## [v2.3.1](https://github.com/liferay/clay/tree/v2.3.1) (2018-09-03)

[Full Changelog](https://github.com/liferay/clay/compare/v2.3.0...v2.3.1)

**Closed issues:**

-   Management-bar / dropdown with portal - Semantic/SEO broken [\#1156](https://github.com/liferay/clay/issues/1156)
-   Can't disable/hide ActionItems inside ManagementToolbar Quick Actions [\#1150](https://github.com/liferay/clay/issues/1150)
-   Clay Card Grid - Checkbox does not need attribute "name" [\#1148](https://github.com/liferay/clay/issues/1148)
-   Management-bar - links and buttons [\#1146](https://github.com/liferay/clay/issues/1146)
-   Accessibility a11y test fails [\#1143](https://github.com/liferay/clay/issues/1143)
-   Clay Card Grid - Label / Input issue [\#1133](https://github.com/liferay/clay/issues/1133)
-   Clay card grid header [\#1131](https://github.com/liferay/clay/issues/1131)
-   out of date docs ? [\#1128](https://github.com/liferay/clay/issues/1128)
-   Clay collapse does not works correctly [\#1127](https://github.com/liferay/clay/issues/1127)
-   ClayCSS Atlas Theme Form should set \$input-border-width using individual border-width variables [\#1125](https://github.com/liferay/clay/issues/1125)
-   ClayCSS use map-merge pattern for any Sass map variable with default values [\#1123](https://github.com/liferay/clay/issues/1123)
-   General accessibility issues in demo pages HTML [\#1121](https://github.com/liferay/clay/issues/1121)
-   Component demo page - General accessibility header issue [\#1119](https://github.com/liferay/clay/issues/1119)
-   ClayActionsDropdown is not align the dropdown correctly [\#1118](https://github.com/liferay/clay/issues/1118)

**Merged pull requests:**

-   v2.3.1 CHANGELOG [\#1163](https://github.com/liferay/clay/pull/1163) ([carloslancha](https://github.com/carloslancha))
-   Fixes \#1150 - Disable actionItems inside ManagementToolbar Quick Actions [\#1159](https://github.com/liferay/clay/pull/1159) ([carloslancha](https://github.com/carloslancha))
-   Use pa11y instead metal-a11y-checker | Fixes \#1143 [\#1145](https://github.com/liferay/clay/pull/1145) ([carloslancha](https://github.com/carloslancha))
-   Extract preferredAlign config | Fixes \#1118 [\#1142](https://github.com/liferay/clay/pull/1142) ([carloslancha](https://github.com/carloslancha))
-   Fix the names of Navbar for Navigation Bar in snippets | Fixes \#1128 [\#1137](https://github.com/liferay/clay/pull/1137) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   General accessibility fixes \(Fixes: \#1121\) [\#1136](https://github.com/liferay/clay/pull/1136) ([marcoscv-work](https://github.com/marcoscv-work))
-   Remove aria-labelledBy | Fixes \#1133 [\#1135](https://github.com/liferay/clay/pull/1135) ([marcoscv-work](https://github.com/marcoscv-work))
-   General accessibility fixes \(Fixes: \#1121\) [\#1134](https://github.com/liferay/clay/pull/1134) ([marcoscv-work](https://github.com/marcoscv-work))
-   Regenerate snapshots [\#1132](https://github.com/liferay/clay/pull/1132) ([marcoscv-work](https://github.com/marcoscv-work))
-   Add labels to management toolbar results bar | Fixes \#1112 [\#1130](https://github.com/liferay/clay/pull/1130) ([carloslancha](https://github.com/carloslancha))
-   \(Fix \#1127\) Change class [\#1129](https://github.com/liferay/clay/pull/1129) ([marcoscv-work](https://github.com/marcoscv-work))
-   ClayCSS: \(Fixes \#1125\) Atlas Forms changing individual border-widths … [\#1126](https://github.com/liferay/clay/pull/1126) ([pat270](https://github.com/pat270))
-   ClayCSS: \(Fixes \#1123\) Use `map-merge` pattern for any Sass map varia… [\#1124](https://github.com/liferay/clay/pull/1124) ([pat270](https://github.com/pat270))
-   \(Fixes \#1121\) Accessibility general fixes [\#1122](https://github.com/liferay/clay/pull/1122) ([marcoscv-work](https://github.com/marcoscv-work))
-   Change demos headers to h2 \(Fixes \#1119\) [\#1120](https://github.com/liferay/clay/pull/1120) ([marcoscv-work](https://github.com/marcoscv-work))
-   Add id parameter to clay-chart templates | Fixes \#1115 [\#1116](https://github.com/liferay/clay/pull/1116) ([julien](https://github.com/julien))

## [v2.3.0](https://github.com/liferay/clay/tree/v2.3.0) (2018-08-28)

[Full Changelog](https://github.com/liferay/clay/compare/v2.2.0...v2.3.0)

**Closed issues:**

-   \[clay-charts\] Add 'id' parameter to template [\#1115](https://github.com/liferay/clay/issues/1115)
-   Add labels to management toolbar results bar [\#1112](https://github.com/liferay/clay/issues/1112)
-   ClayCSS: Modal Variant Mixin \$footer-border-color is declared twice [\#1090](https://github.com/liferay/clay/issues/1090)
-   ClayCSS: List Group variables $list-group-text-link and $list-group-subtext-link should follow same pattern as \$list-group-title-link [\#1088](https://github.com/liferay/clay/issues/1088)
-   ClayCSS: Bootstrap 4's hover focus mixin is deprecated [\#1085](https://github.com/liferay/clay/issues/1085)
-   ClayCSS: Custom Control variable names don't follow Bootstrap pattern [\#1083](https://github.com/liferay/clay/issues/1083)
-   Tooltip default position [\#1082](https://github.com/liferay/clay/issues/1082)
-   \[clay-charts\] Implement radar chart [\#1080](https://github.com/liferay/clay/issues/1080)
-   Update tooltip shadow in the clay-charts package defined by Lexicon [\#1077](https://github.com/liferay/clay/issues/1077)
-   \[clay-charts\] Upgrade billboardJS version to 1.5 [\#1072](https://github.com/liferay/clay/issues/1072)
-   Clayui.com: Broken links and some more... [\#1070](https://github.com/liferay/clay/issues/1070)
-   Good practices / guidelines to write SCSS in Clay [\#1068](https://github.com/liferay/clay/issues/1068)
-   \[clay-charts\] "xs" is missing from the state declaration of ChartBase [\#1064](https://github.com/liferay/clay/issues/1064)
-   LexiconCSS: \$btn-action-border-radius should actually change border-radius [\#1062](https://github.com/liferay/clay/issues/1062)
-   LexiconCSS: Move hardcoded values for %scale-lexicon-icon and .icon-monospaced .lexicon-icon to variables [\#1060](https://github.com/liferay/clay/issues/1060)
-   Update card shadow defined by Lexicon [\#1053](https://github.com/liferay/clay/issues/1053)
-   ClayCharts does not pass the `donut` and `gauge` API to Billboard.js [\#1033](https://github.com/liferay/clay/issues/1033)
-   Clayui.com https://clayui.com/docs/getting\_started/introduction.html [\#962](https://github.com/liferay/clay/issues/962)

**Merged pull requests:**

-   v2.3.0 [\#1117](https://github.com/liferay/clay/pull/1117) ([jbalsas](https://github.com/jbalsas))
-   Run just the `npm run soy` on the CI | Fixes \#1107 [\#1110](https://github.com/liferay/clay/pull/1110) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Changes default tooltip position as Bottom to Top [\#1096](https://github.com/liferay/clay/pull/1096) ([boton](https://github.com/boton))
-   ClayCSS: \(Fixes \#1090\) Modal Variant Mixin `$footer-border-color` dec… [\#1091](https://github.com/liferay/clay/pull/1091) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#1088\) List Group variables `$list-group-text-link` an… [\#1089](https://github.com/liferay/clay/pull/1089) ([pat270](https://github.com/pat270))
-   ClayCSS: \(Fixes \#1085\) Use :hover :focus pseudo classes instead of Bo… [\#1086](https://github.com/liferay/clay/pull/1086) ([pat270](https://github.com/pat270))
-   New: \(Fixes \#1083\) Custom Form added `\$custom-control-indicator-check… [\#1084](https://github.com/liferay/clay/pull/1084) ([pat270](https://github.com/pat270))
-   Implement radar chart | Fixes \#1080 [\#1081](https://github.com/liferay/clay/pull/1081) ([julien](https://github.com/julien))
-   Apply box shadow defined by Lexicon and based on Clay popover shadow | \#1077 [\#1078](https://github.com/liferay/clay/pull/1078) ([interaminense](https://github.com/interaminense))
-   New: \(Fixes \#1068\) Clay CSS code guidelines [\#1075](https://github.com/liferay/clay/pull/1075) ([pat270](https://github.com/pat270))
-   Updates billboard to version 1.5.1 | Fixes \#1072 [\#1074](https://github.com/liferay/clay/pull/1074) ([julien](https://github.com/julien))
-   Remove script `electric` from root [\#1073](https://github.com/liferay/clay/pull/1073) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes the links on clayui.com and more | Fixes \#1070 [\#1071](https://github.com/liferay/clay/pull/1071) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Add xs property to CharBase's STATE | Fixes \#1064 [\#1067](https://github.com/liferay/clay/pull/1067) ([julien](https://github.com/julien))
-   ClayCSS \(\#1065\) New Table helpers [\#1066](https://github.com/liferay/clay/pull/1066) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#1062\) Button `$btn-action-border-radius` should chang… [\#1063](https://github.com/liferay/clay/pull/1063) ([pat270](https://github.com/pat270))
-   New: \(Fixes \#1060\) SVG Icons added option to customize `\$scale-lexico… [\#1061](https://github.com/liferay/clay/pull/1061) ([pat270](https://github.com/pat270))
-   New styles from lexicondesign [\#1059](https://github.com/liferay/clay/pull/1059) ([marcoscv-work](https://github.com/marcoscv-work))
-   Update clay packages in clayui.com [\#1058](https://github.com/liferay/clay/pull/1058) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Update: \(Fixes \#1049\) Update Yeoman generator to use webpack common config [\#1057](https://github.com/liferay/clay/pull/1057) ([victorg1991](https://github.com/victorg1991))
-   Update Lexicon Version [\#1055](https://github.com/liferay/clay/pull/1055) ([ahdezma](https://github.com/ahdezma))
-   Update: \(Fixes \#1053\) Atlas Card box-shadow should match Lexicon card… [\#1054](https://github.com/liferay/clay/pull/1054) ([pat270](https://github.com/pat270))

## [v2.2.0](https://github.com/liferay/clay/tree/v2.2.0) (2018-07-09)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.12...v2.2.0)

**Closed issues:**

-   Some parts of the webpack config files are equal across all packages [\#1049](https://github.com/liferay/clay/issues/1049)
-   ClayTooltip is not included in clay package [\#1048](https://github.com/liferay/clay/issues/1048)
-   Form padding in mobile must be 16px and not 24px [\#1046](https://github.com/liferay/clay/issues/1046)
-   Clay dropdown markup isn't following the Lexicon guideline when using a radio button or checkbox [\#1044](https://github.com/liferay/clay/issues/1044)
-   Cannot change view in DataSetDisplay component [\#1039](https://github.com/liferay/clay/issues/1039)
-   ClayLink needs option to add a tooltip [\#1037](https://github.com/liferay/clay/issues/1037)
-   Clay transpilation doesn't work in IE 11 [\#1031](https://github.com/liferay/clay/issues/1031)
-   Clay CSS add more `.table-cell-\*` utilities for better spacing inside `.table-autofit` [\#1029](https://github.com/liferay/clay/issues/1029)
-   Clay CSS IE11 Dropdown Menu box-shadow is off [\#1028](https://github.com/liferay/clay/issues/1028)
-   ClayTooltip is not fully hidden while not being used [\#1022](https://github.com/liferay/clay/issues/1022)

**Merged pull requests:**

-   v2.2.0 [\#1052](https://github.com/liferay/clay/pull/1052) ([carloslancha](https://github.com/carloslancha))
-   Add ClayTooltip to clay | Fixes \#1048 [\#1051](https://github.com/liferay/clay/pull/1051) ([carloslancha](https://github.com/carloslancha))
-   Rename module browserlist-config-clay-components | Fixes \#1049 [\#1050](https://github.com/liferay/clay/pull/1050) ([carloslancha](https://github.com/carloslancha))
-   \(\#1046\) Sheet should have 1rem padding in mobile and added .sheet-footer-btn-block-sm-down for block level buttons in mobile [\#1047](https://github.com/liferay/clay/pull/1047) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#1044\) Atlas set Checkbox labels to be normal and semi… [\#1045](https://github.com/liferay/clay/pull/1045) ([pat270](https://github.com/pat270))
-   Update viewtype event in dataset display | Fixes \#1039 [\#1043](https://github.com/liferay/clay/pull/1043) ([carloslancha](https://github.com/carloslancha))
-   New infra from clayui.com with Gatsbyjs [\#1040](https://github.com/liferay/clay/pull/1040) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Updates .eslint to forbid for of loops | Fixes \#1031 [\#1038](https://github.com/liferay/clay/pull/1038) ([julien](https://github.com/julien))
-   Hide Tooltip correctly | Fixes \#1022 [\#1036](https://github.com/liferay/clay/pull/1036) ([carloslancha](https://github.com/carloslancha))
-   Update: \(Fixes \#1028\) Atlas Dropdown Menu box shadow value so it work… [\#1035](https://github.com/liferay/clay/pull/1035) ([pat270](https://github.com/pat270))
-   Add donut and gauge in \_constructChartConfig | Fixes \#1033 [\#1034](https://github.com/liferay/clay/pull/1034) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   \(\#1029\) Table Autofit added `.table-cell-expand-small`, `.table-cell-expand-smaller`, and `.table-cell-expand-smallest` [\#1030](https://github.com/liferay/clay/pull/1030) ([pat270](https://github.com/pat270))

## [v2.1.12](https://github.com/liferay/clay/tree/v2.1.12) (2018-06-19)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.11...v2.1.12)

**Merged pull requests:**

-   v2.1.12 [\#1027](https://github.com/liferay/clay/pull/1027) ([jbalsas](https://github.com/jbalsas))
-   Updates management toolbar labels [\#1026](https://github.com/liferay/clay/pull/1026) ([julien](https://github.com/julien))
-   Uses hidden attribute for tooltips that are not visible | \#Fixes 1022 [\#1023](https://github.com/liferay/clay/pull/1023) ([julien](https://github.com/julien))
-   New: \(Fixes \#1017\) Mixin `clay-menubar-vertical-variant` added option… [\#1019](https://github.com/liferay/clay/pull/1019) ([pat270](https://github.com/pat270))
-   New: \(Fixes \#1014\) Nav added `.nav-form` for properly spacing search … [\#1016](https://github.com/liferay/clay/pull/1016) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#1009\) Button remove `backface-visibility` workaround … [\#1010](https://github.com/liferay/clay/pull/1010) ([pat270](https://github.com/pat270))
-   \(\#1007\) Change `.sheet-footer` to `display: flex` [\#1008](https://github.com/liferay/clay/pull/1008) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#1005\) Don't use clearfix mixin, too easily overridden… [\#1006](https://github.com/liferay/clay/pull/1006) ([pat270](https://github.com/pat270))

## [v2.1.11](https://github.com/liferay/clay/tree/v2.1.11) (2018-06-18)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.10...v2.1.11)

**Closed issues:**

-   ClayTooltip avoid using for ... of loops [\#1020](https://github.com/liferay/clay/issues/1020)
-   Clay CSS Menubar Toggler font-size should be the same as Navigation Bar Toggler Link [\#1017](https://github.com/liferay/clay/issues/1017)
-   Clay 1.x Nested Product Menu Text Squished [\#1015](https://github.com/liferay/clay/issues/1015)
-   Clay CSS add `.nav-form` class for form elements inside `.nav` [\#1014](https://github.com/liferay/clay/issues/1014)
-   Long Web Content Titles Extend Past Context Box, 1.x issue [\#1011](https://github.com/liferay/clay/issues/1011)
-   Clay CSS Button remove `backface-visibility` property added in \#546 [\#1009](https://github.com/liferay/clay/issues/1009)
-   Clay CSS `.sheet-footer` should use display flex [\#1007](https://github.com/liferay/clay/issues/1007)
-   Clay CSS don't use Bootstrap's clearfix mixin [\#1005](https://github.com/liferay/clay/issues/1005)

**Merged pull requests:**

-   v2.1.11 [\#1024](https://github.com/liferay/clay/pull/1024) ([jbalsas](https://github.com/jbalsas))
-   Use for loop instead of for...of loop | Fixes \#1020 [\#1021](https://github.com/liferay/clay/pull/1021) ([julien](https://github.com/julien))

## [v2.1.10](https://github.com/liferay/clay/tree/v2.1.10) (2018-06-13)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.9...v2.1.10)

**Closed issues:**

-   Management Toolbar Sorting button tooltip should be ascending or descending [\#1002](https://github.com/liferay/clay/issues/1002)
-   Clay CSS `btn-monospaced` isn't the right size inside Modals [\#1000](https://github.com/liferay/clay/issues/1000)

**Merged pull requests:**

-   v2.1.10 [\#1004](https://github.com/liferay/clay/pull/1004) ([carloslancha](https://github.com/carloslancha))
-   Change sorting tooltip | Fixes \#1002 [\#1003](https://github.com/liferay/clay/pull/1003) ([carloslancha](https://github.com/carloslancha))
-   Update: \(Fixes \#1000\) Modals remove `modal-btn-monospaced` pattern in… [\#1001](https://github.com/liferay/clay/pull/1001) ([pat270](https://github.com/pat270))

## [v2.1.9](https://github.com/liferay/clay/tree/v2.1.9) (2018-06-12)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.8...v2.1.9)

**Closed issues:**

-   Wrong language key for info in management toolbar [\#997](https://github.com/liferay/clay/issues/997)
-   Tooltip doesn't render in the correct position, should disappear on click and should be possible to select tooltip text [\#995](https://github.com/liferay/clay/issues/995)
-   Clay CSS `.autofit-padded-no-gutters-y` should only offset top and bottom padding [\#993](https://github.com/liferay/clay/issues/993)
-   Clay CSS `.sheet-subtitle` with anchor tag styled like button shouldn't capitalize text [\#991](https://github.com/liferay/clay/issues/991)
-   Some icons don't have the proper viewport 0 0 512 512 [\#979](https://github.com/liferay/clay/issues/979)

**Merged pull requests:**

-   v2.1.9 [\#999](https://github.com/liferay/clay/pull/999) ([carloslancha](https://github.com/carloslancha))
-   Fix info key | Fixes \#997 [\#998](https://github.com/liferay/clay/pull/998) ([carloslancha](https://github.com/carloslancha))
-   Fix tooltip position and allow tooltip mouseover | Fixes \#995 [\#996](https://github.com/liferay/clay/pull/996) ([carloslancha](https://github.com/carloslancha))
-   Update: \(Fixes \#993\) Utilities `.autofit-padded-no-gutters-y` should … [\#994](https://github.com/liferay/clay/pull/994) ([pat270](https://github.com/pat270))
-   \(\#991\) Sheet Subtitle with link styled like `.btn` shouldn't be uppercase [\#992](https://github.com/liferay/clay/pull/992) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#979\) Lexicon SVG Icons `calendar`, `date`, `download`… [\#990](https://github.com/liferay/clay/pull/990) ([pat270](https://github.com/pat270))
-   Update: \(\#910\) Alert Notifications Fixed should be full width and ali… [\#989](https://github.com/liferay/clay/pull/989) ([pat270](https://github.com/pat270))

## [v2.1.8](https://github.com/liferay/clay/tree/v2.1.8) (2018-06-11)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.7...v2.1.8)

**Closed issues:**

-   ClayNavigationBar does not emit the `itemClicked` event [\#981](https://github.com/liferay/clay/issues/981)
-   Clay CSS Table need `.table-disabled` class for table rows [\#964](https://github.com/liferay/clay/issues/964)

**Merged pull requests:**

-   v2.1.8 [\#988](https://github.com/liferay/clay/pull/988) ([carloslancha](https://github.com/carloslancha))
-   Updates trash icon to follow icon guidelines \(proper viewbox\) [\#987](https://github.com/liferay/clay/pull/987) ([jbalsas](https://github.com/jbalsas))
-   Fix emit the `itemClicked` event from ClayNavigationBar | Fixes \#981 [\#982](https://github.com/liferay/clay/pull/982) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   New: \(Fixes \#964\) Table added `.table-disabled` for disabling table r… [\#980](https://github.com/liferay/clay/pull/980) ([pat270](https://github.com/pat270))

## [v2.1.7](https://github.com/liferay/clay/tree/v2.1.7) (2018-06-08)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.6...v2.1.7)

**Closed issues:**

-   Add more Lexicon SVG Icons [\#974](https://github.com/liferay/clay/issues/974)
-   Icon links and buttons need to have a title to show a tooltip [\#972](https://github.com/liferay/clay/issues/972)
-   Visual inconsistency when viewing a Table on Safari 11 / responsive version [\#950](https://github.com/liferay/clay/issues/950)
-   Cards should have bigger icons and ensure a minimum 40x40px size [\#719](https://github.com/liferay/clay/issues/719)

**Merged pull requests:**

-   v2.1.7 [\#978](https://github.com/liferay/clay/pull/978) ([jbalsas](https://github.com/jbalsas))
-   Update: \(Fixes \#719\) Card added Sass map `$user-card` and set `.user-… [\#977](https://github.com/liferay/clay/pull/977) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#950\) Atlas Table should keep background color on resp… [\#976](https://github.com/liferay/clay/pull/976) ([pat270](https://github.com/pat270))
-   New: \(Fixes \#974\) Add Lexicon SVG Icons `environment`, `environment-c… [\#975](https://github.com/liferay/clay/pull/975) ([pat270](https://github.com/pat270))
-   Icon links and buttons need to have a title to show a tooltip | Fixes \#972 [\#973](https://github.com/liferay/clay/pull/973) ([carloslancha](https://github.com/carloslancha))
-   Update README.md with more informations [\#970](https://github.com/liferay/clay/pull/970) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.1.6](https://github.com/liferay/clay/tree/v2.1.6) (2018-06-01)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.5...v2.1.6)

**Closed issues:**

-   NavigationBar Toggler navigates on click [\#965](https://github.com/liferay/clay/issues/965)
-   Split results key makes it impossible to localize [\#961](https://github.com/liferay/clay/issues/961)
-   Missing space in results-for output in ManagementToolbar [\#958](https://github.com/liferay/clay/issues/958)
-   Feature Request : Slider / Carousel [\#894](https://github.com/liferay/clay/issues/894)
-   Feature Request : Modernize Tiles [\#893](https://github.com/liferay/clay/issues/893)
-   Feature Request : Modernize Cards [\#892](https://github.com/liferay/clay/issues/892)
-   Feature Request : Inline Action Confirmation [\#890](https://github.com/liferay/clay/issues/890)
-   Feature Request : Social Sharing Bar [\#889](https://github.com/liferay/clay/issues/889)

**Merged pull requests:**

-   v2.1.6 [\#968](https://github.com/liferay/clay/pull/968) ([carloslancha](https://github.com/carloslancha))
-   Join key parts into one | Fixes \#961 [\#967](https://github.com/liferay/clay/pull/967) ([carloslancha](https://github.com/carloslancha))
-   Prevent event default on toggler click | Fixes \#965 [\#966](https://github.com/liferay/clay/pull/966) ([carloslancha](https://github.com/carloslancha))
-   Adds {sp} to add a space between results-for and searchValue | Fixes \#958 [\#960](https://github.com/liferay/clay/pull/960) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Add events to ClayDropdown to close on mobile and when the esq is pressed and when the iframe is clicked [\#959](https://github.com/liferay/clay/pull/959) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.1.5](https://github.com/liferay/clay/tree/v2.1.5) (2018-05-30)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.4...v2.1.5)

**Closed issues:**

-   ClayDropdown should close when clicked on `document` on mobile and others [\#956](https://github.com/liferay/clay/issues/956)
-   Remove select all and deselect all buttons from management toolbar [\#954](https://github.com/liferay/clay/issues/954)
-   ClayTooltip should use event.delegateTarget [\#948](https://github.com/liferay/clay/issues/948)
-   Items with no href should not be links in dropdowns but should looks like one [\#941](https://github.com/liferay/clay/issues/941)
-   Clay documentation: Lexicon Grid pattern hyperling is broken [\#900](https://github.com/liferay/clay/issues/900)
-   Add label to checkbox on Management Toolbar [\#899](https://github.com/liferay/clay/issues/899)
-   Update Documentation with Browser Support Matrix [\#888](https://github.com/liferay/clay/issues/888)
-   Hidden inputs inside the management toolbar's search form [\#876](https://github.com/liferay/clay/issues/876)
-   Button variation styles are not directly supported by Dropdown buttons [\#659](https://github.com/liferay/clay/issues/659)
-   Review this logic in ClayAlertBase [\#628](https://github.com/liferay/clay/issues/628)

**Merged pull requests:**

-   v2.1.5 [\#957](https://github.com/liferay/clay/pull/957) ([carloslancha](https://github.com/carloslancha))
-   Remove select all and deselect all buttons from Management Toolbar | Fixes \#954 [\#955](https://github.com/liferay/clay/pull/955) ([carloslancha](https://github.com/carloslancha))
-   Render a button as a dropdown item if no href is passed to an item with default type | Fixes \#941 [\#953](https://github.com/liferay/clay/pull/953) ([carloslancha](https://github.com/carloslancha))
-   Add browser support to README | Fixes \#888 [\#952](https://github.com/liferay/clay/pull/952) ([carloslancha](https://github.com/carloslancha))
-   Add label to checkbox on Management Toolbar | Fixes \#899 [\#951](https://github.com/liferay/clay/pull/951) ([carloslancha](https://github.com/carloslancha))
-   Use event.delegateTarget instead of event.target | Fixes \#948 [\#949](https://github.com/liferay/clay/pull/949) ([julien](https://github.com/julien))

## [v2.1.4](https://github.com/liferay/clay/tree/v2.1.4) (2018-05-25)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.3...v2.1.4)

## [v2.1.3](https://github.com/liferay/clay/tree/v2.1.3) (2018-05-25)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.2...v2.1.3)

**Closed issues:**

-   NullPointer exception accessing domData in element.getAttribute [\#945](https://github.com/liferay/clay/issues/945)

**Merged pull requests:**

-   v.2.1.3 [\#947](https://github.com/liferay/clay/pull/947) ([jbalsas](https://github.com/jbalsas))
-   Checks if this.element is still present [\#946](https://github.com/liferay/clay/pull/946) ([jbalsas](https://github.com/jbalsas))

## [v2.1.2](https://github.com/liferay/clay/tree/v2.1.2) (2018-05-25)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.1...v2.1.2)

## [v2.1.1](https://github.com/liferay/clay/tree/v2.1.1) (2018-05-25)

[Full Changelog](https://github.com/liferay/clay/compare/v2.1.0...v2.1.1)

## [v2.1.0](https://github.com/liferay/clay/tree/v2.1.0) (2018-05-25)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.28...v2.1.0)

**Closed issues:**

-   Pass custom data to deltemplates in ManagementToolbar [\#938](https://github.com/liferay/clay/issues/938)
-   New Lexicon SVG Icon merge [\#936](https://github.com/liferay/clay/issues/936)
-   Create ClayTooltip component [\#929](https://github.com/liferay/clay/issues/929)
-   SVG Title Attributes Override HTML Title attribute in 1.x [\#926](https://github.com/liferay/clay/issues/926)

**Merged pull requests:**

-   v2.1.0 [\#944](https://github.com/liferay/clay/pull/944) ([carloslancha](https://github.com/carloslancha))
-   Pass item object on NavigationBar item click event | Fixes \#933 [\#943](https://github.com/liferay/clay/pull/943) ([carloslancha](https://github.com/carloslancha))
-   Add new page Typography in clayui.com and makes page popovers_tooltips consistent with lexicon page popovers_tooltips pattern [\#942](https://github.com/liferay/clay/pull/942) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Create ClayTooltip component | Fixes \#929 [\#940](https://github.com/liferay/clay/pull/940) ([julien](https://github.com/julien))
-   Add customData to deltemplate in management toolbar | Fixes \#938 [\#939](https://github.com/liferay/clay/pull/939) ([carloslancha](https://github.com/carloslancha))
-   New: \(Fixes \#936\) Icons add Lexicon icon merge [\#937](https://github.com/liferay/clay/pull/937) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#931\) Atlas `.btn-sm` padding left and right should be… [\#935](https://github.com/liferay/clay/pull/935) ([pat270](https://github.com/pat270))
-   Add new `searchPlaceholder` option to customize search placeholder | Fixes \#928 [\#932](https://github.com/liferay/clay/pull/932) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   \(\#871\) Localization dropdown menu labels should be aligned to the right [\#925](https://github.com/liferay/clay/pull/925) ([pat270](https://github.com/pat270))
-   Manage languages | Fixes \#576 [\#923](https://github.com/liferay/clay/pull/923) ([carloslancha](https://github.com/carloslancha))
-   Adds a new `delayTime` option and changes the ClayToast time to 8/s | Fixes \#910 [\#916](https://github.com/liferay/clay/pull/916) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Update: \(\#910\) Alerts move `.alert-notifications-fixed` to the bottom… [\#915](https://github.com/liferay/clay/pull/915) ([pat270](https://github.com/pat270))
-   Fixes the data that is returned in the click action of a quick action in the management toolbar | Fixes \#901 [\#909](https://github.com/liferay/clay/pull/909) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v1.0.28](https://github.com/liferay/clay/tree/v1.0.28) (2018-05-23)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.3...v1.0.28)

**Closed issues:**

-   it should be possible to receive the clicked item in the ClayNavigationBar item click event [\#933](https://github.com/liferay/clay/issues/933)
-   Update sizes for .btn-sm [\#931](https://github.com/liferay/clay/issues/931)
-   management bar search box placeholder to be possible to be customized [\#928](https://github.com/liferay/clay/issues/928)
-   Table List border-radius should be 4px [\#918](https://github.com/liferay/clay/issues/918)
-   Toast Alert needs to be placed at the bottom left and default auto closing time set to 8 secs [\#910](https://github.com/liferay/clay/issues/910)
-   grid.x.lines.value and grid.y.lines.value must accept multiple values [\#907](https://github.com/liferay/clay/issues/907)
-   Clicking a quick action actually performs another one [\#901](https://github.com/liferay/clay/issues/901)
-   Icon inside sticker-sm to be 14px height [\#886](https://github.com/liferay/clay/issues/886)
-   Vertical padding of modals footer should be 16px [\#885](https://github.com/liferay/clay/issues/885)
-   Wrong borderless buttons states colors [\#883](https://github.com/liferay/clay/issues/883)
-   No Disabled-Hover state for Filter and Order button [\#882](https://github.com/liferay/clay/issues/882)
-   dropdown menu distance list to title [\#879](https://github.com/liferay/clay/issues/879)
-   Localization dropdown menu labels should be aligned to the right [\#871](https://github.com/liferay/clay/issues/871)
-   Mangagement toolbar: search field disabled state [\#870](https://github.com/liferay/clay/issues/870)
-   Inline Scroller should shrink to fit smaller content [\#859](https://github.com/liferay/clay/issues/859)
-   Manage languages [\#576](https://github.com/liferay/clay/issues/576)
-   Can this css library be used in other project apart from liferay related ? [\#410](https://github.com/liferay/clay/issues/410)

**Merged pull requests:**

-   Add fix from https://github.com/liferay/clay/commit/0bec1327688a0fdaf… [\#927](https://github.com/liferay/clay/pull/927) ([gregory-bretall](https://github.com/gregory-bretall))
-   Update: \(Fixes \#882\) Application Bar, Navigation Bar, Management Bar … [\#924](https://github.com/liferay/clay/pull/924) ([pat270](https://github.com/pat270))
-   \(Fixes \#870\) Atlas set color for `$input-placeholder-disabled-color` [\#920](https://github.com/liferay/clay/pull/920) ([pat270](https://github.com/pat270))
-   \(Fixes \#918\) Table List border-radius should be 4px [\#919](https://github.com/liferay/clay/pull/919) ([pat270](https://github.com/pat270))
-   \(\#777\) Clay UI Docs update Label and Badge markup to new pattern [\#917](https://github.com/liferay/clay/pull/917) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#883\) Change hover and active background colors of `.b… [\#914](https://github.com/liferay/clay/pull/914) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#879\) Dropdown increase spacing of `.dropdown-header` … [\#913](https://github.com/liferay/clay/pull/913) ([pat270](https://github.com/pat270))
-   Add `.inline-item` to cases that use the icon in ClaySticker | Fixes \#886 [\#912](https://github.com/liferay/clay/pull/912) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Changes the validation of grid.x.lines.value and grid.y.lines.value to any | Fixes \#907 [\#908](https://github.com/liferay/clay/pull/908) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fixes Lexicon Grid pattern link [\#906](https://github.com/liferay/clay/pull/906) ([alexandervalencia](https://github.com/alexandervalencia))

## [v2.0.3](https://github.com/liferay/clay/tree/v2.0.3) (2018-05-17)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.2...v2.0.3)

**Closed issues:**

-   bar is not passed to the Billboard in ChartBase and the validations are incorrect [\#903](https://github.com/liferay/clay/issues/903)
-   legend.contents.bindto expects an string only, but also receive HTMLElement/Object [\#895](https://github.com/liferay/clay/issues/895)
-   dropdown button text to caret space fix [\#887](https://github.com/liferay/clay/issues/887)
-   Wrong Action Button states styles [\#884](https://github.com/liferay/clay/issues/884)
-   Wrong space between label and icon in Filter and Order dropdown button in Management Toolbar [\#880](https://github.com/liferay/clay/issues/880)
-   checkbox status in management bar [\#878](https://github.com/liferay/clay/issues/878)
-   Style of ClayDropdown out of sync with ClayDropdownBase [\#874](https://github.com/liferay/clay/issues/874)
-   grid.y.lines expects an object, but billboard.js takes an array of line objects [\#863](https://github.com/liferay/clay/issues/863)

**Merged pull requests:**

-   v2.0.3 [\#905](https://github.com/liferay/clay/pull/905) ([jbalsas](https://github.com/jbalsas))
-   Fix bar API validations and passed to the Billboard | Fixes \#903 [\#904](https://github.com/liferay/clay/pull/904) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Removes redundant text-center classes [\#902](https://github.com/liferay/clay/pull/902) ([alexandervalencia](https://github.com/alexandervalencia))
-   Adds consistency in style API between ClayDropdown and ClayDropdownBase | Fixes \#874 [\#898](https://github.com/liferay/clay/pull/898) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   grid.y.lines and grid.x.lines accept array of line objects | Fixes \#863 [\#897](https://github.com/liferay/clay/pull/897) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   legend.contents.bindto accepts object and string | Fixes \#895 [\#896](https://github.com/liferay/clay/pull/896) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Wrong space between label and icon in Filter and Order dropdown button in Management Toolbar | Fixes \#880 [\#881](https://github.com/liferay/clay/pull/881) ([carloslancha](https://github.com/carloslancha))

## [v2.0.2](https://github.com/liferay/clay/tree/v2.0.2) (2018-05-06)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.27...v2.0.2)

**Merged pull requests:**

-   v2.0.2 [\#873](https://github.com/liferay/clay/pull/873) ([jbalsas](https://github.com/jbalsas))

## [v1.0.27](https://github.com/liferay/clay/tree/v1.0.27) (2018-05-04)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.1...v1.0.27)

**Closed issues:**

-   Management Toolbar Sorting button appears enabled when toolbar is disabled [\#869](https://github.com/liferay/clay/issues/869)
-   We should use isObject method from metal instead node [\#866](https://github.com/liferay/clay/issues/866)

**Merged pull requests:**

-   Show disabled sorting button if management toolbar is disabled | Fixes \#869 [\#872](https://github.com/liferay/clay/pull/872) ([carloslancha](https://github.com/carloslancha))
-   Use isObject method from metal | Fix \#866 [\#867](https://github.com/liferay/clay/pull/867) ([carloslancha](https://github.com/carloslancha))

## [v2.0.1](https://github.com/liferay/clay/tree/v2.0.1) (2018-05-03)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0...v2.0.1)

**Closed issues:**

-   More SVG Icons Analytics and Propagation [\#861](https://github.com/liferay/clay/issues/861)
-   clay-css `.close` utility default height and width [\#857](https://github.com/liferay/clay/issues/857)

**Merged pull requests:**

-   2.0.1 [\#865](https://github.com/liferay/clay/pull/865) ([jbalsas](https://github.com/jbalsas))
-   Organize guides into proper sections [\#864](https://github.com/liferay/clay/pull/864) ([jbalsas](https://github.com/jbalsas))
-   New: \(Fixes \#861\) Lexicon SVG Icons added and icons [\#862](https://github.com/liferay/clay/pull/862) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#859\) Fix whitespace issue with inline-scroller [\#860](https://github.com/liferay/clay/pull/860) ([pat270](https://github.com/pat270))
-   Add metal-componente missing dependency [\#856](https://github.com/liferay/clay/pull/856) ([carloslancha](https://github.com/carloslancha))
-   Set the expected from point.focus.expand.r to Number | Fixes \#853 [\#855](https://github.com/liferay/clay/pull/855) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.0.0](https://github.com/liferay/clay/tree/v2.0.0) (2018-04-26)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.12...v2.0.0)

**Closed issues:**

-   point.focus.expand.r expects a boolean but the correct one is number in ClayCharts [\#853](https://github.com/liferay/clay/issues/853)
-   Propagate ManagementToolbar dropdown items click events [\#850](https://github.com/liferay/clay/issues/850)
-   Management toolbar search form method should be GET by default [\#846](https://github.com/liferay/clay/issues/846)
-   Reorganize clay-css and clay npm packages [\#837](https://github.com/liferay/clay/issues/837)
-   Clay-charts: Implement Predictive Chart [\#813](https://github.com/liferay/clay/issues/813)
-   Fix loading indicator in clay-charts [\#810](https://github.com/liferay/clay/issues/810)
-   Add installation/getting started instructions for metal-clay-components [\#419](https://github.com/liferay/clay/issues/419)

**Merged pull requests:**

-   v2.0.0 [\#854](https://github.com/liferay/clay/pull/854) ([jbalsas](https://github.com/jbalsas))
-   Using GET by default \(although configurable\) in search forms. Fixes \#846 [\#852](https://github.com/liferay/clay/pull/852) ([carloslancha](https://github.com/carloslancha))
-   Propagate ManagementToolbar dropdown items click events | Fixes \#850 [\#851](https://github.com/liferay/clay/pull/851) ([carloslancha](https://github.com/carloslancha))

## [v2.0.0-rc.12](https://github.com/liferay/clay/tree/v2.0.0-rc.12) (2018-04-25)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.11...v2.0.0-rc.12)

**Closed issues:**

-   Sticker should have transparent border-color by default [\#840](https://github.com/liferay/clay/issues/840)
-   Table List borders top/bottom and left/right should be independently configurable [\#838](https://github.com/liferay/clay/issues/838)
-   Dropdown Items do accept a title attribute [\#832](https://github.com/liferay/clay/issues/832)
-   Dropdown add Sass variable config options to `.dropdown-header` and `.dropdown-subheader` [\#829](https://github.com/liferay/clay/issues/829)
-   Stickers use `inline-flex` and make it consistent with badges and labels [\#827](https://github.com/liferay/clay/issues/827)
-   axisY.padding, axisX.padding and axisY2.padding expect different types [\#825](https://github.com/liferay/clay/issues/825)
-   Update colors in clay-charts [\#822](https://github.com/liferay/clay/issues/822)
-   Management Toolbar on small screens [\#815](https://github.com/liferay/clay/issues/815)
-   Do not use querySelector if refs can be used [\#812](https://github.com/liferay/clay/issues/812)
-   Update Bootstrap to v4.1.0 [\#807](https://github.com/liferay/clay/issues/807)
-   Clay Component Navigation Bar should remove inline style `height` on transition end [\#806](https://github.com/liferay/clay/issues/806)
-   Autofit Row add more utilities to help ease alignment [\#803](https://github.com/liferay/clay/issues/803)
-   Add more Lexicon SVG Icons Priority Thread and RSS [\#800](https://github.com/liferay/clay/issues/800)
-   Label Lg space between text is too large when breaking into new line [\#798](https://github.com/liferay/clay/issues/798)
-   \[clay-charts\] Upgrade billboardJS version to 1.4 [\#794](https://github.com/liferay/clay/issues/794)
-   Clay charts axis and axis text color [\#793](https://github.com/liferay/clay/issues/793)
-   typography change in charts [\#792](https://github.com/liferay/clay/issues/792)
-   Modal Footer with more than 2 buttons doesn't break well in mobile [\#791](https://github.com/liferay/clay/issues/791)
-   Typography adjustments for adaptation to system font [\#788](https://github.com/liferay/clay/issues/788)
-   The distance between icon and text in icon+text buttons should be 8px [\#787](https://github.com/liferay/clay/issues/787)
-   Navigation Bar, Management Bar item links and buttons should have font-weight: 600 [\#785](https://github.com/liferay/clay/issues/785)
-   Clay Components should use `.container-fluid .container-fluid-max-xl` instead of `.container` [\#776](https://github.com/liferay/clay/issues/776)
-   Review the structure the charts hierarchy [\#761](https://github.com/liferay/clay/issues/761)
-   Fix tootlip in Charts [\#467](https://github.com/liferay/clay/issues/467)

**Merged pull requests:**

-   v2.0.0-rc.12 [\#845](https://github.com/liferay/clay/pull/845) ([jbalsas](https://github.com/jbalsas))
-   Updates old references to clay, now called clay-css [\#844](https://github.com/liferay/clay/pull/844) ([jbalsas](https://github.com/jbalsas))
-   New: \(Fixes \#840\) Stickers added option to configure `\$sticker-border… [\#841](https://github.com/liferay/clay/pull/841) ([pat270](https://github.com/pat270))
-   New: \(Fixes \#838\) Table List added options to configure `\$table-list-… [\#839](https://github.com/liferay/clay/pull/839) ([pat270](https://github.com/pat270))
-   Don't hide creation menu and search input closing icon in management toolbar | Fixes \#815 [\#836](https://github.com/liferay/clay/pull/836) ([carloslancha](https://github.com/carloslancha))
-   Review clay-charts structure | Fixes \#761 [\#835](https://github.com/liferay/clay/pull/835) ([julien](https://github.com/julien))
-   Add support for title to links in dropdowns | Fixes \#832 [\#834](https://github.com/liferay/clay/pull/834) ([carloslancha](https://github.com/carloslancha))
-   New: \(Fixes \#829\) Dropdown add option to configure `\$dropdown-subhead… [\#830](https://github.com/liferay/clay/pull/830) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#827\) Stickers should use `display: inline-flex` to ma… [\#828](https://github.com/liferay/clay/pull/828) ([pat270](https://github.com/pat270))
-   Fix the axis.padding API to expect a Number and Object | Fixes \#825 [\#826](https://github.com/liferay/clay/pull/826) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Updates colors in clay-charts | Fixes \#822 [\#824](https://github.com/liferay/clay/pull/824) ([julien](https://github.com/julien))
-   Fixes tooltip styles for clay-charts in clayui.com web | Fixes \#467 [\#823](https://github.com/liferay/clay/pull/823) ([julien](https://github.com/julien))
-   Updates typography in charts | Fixes \#792 [\#820](https://github.com/liferay/clay/pull/820) ([julien](https://github.com/julien))
-   Updates clay-charts axis and axis text color | Fixes \#793 [\#819](https://github.com/liferay/clay/pull/819) ([julien](https://github.com/julien))
-   Implement predictive Chart [\#818](https://github.com/liferay/clay/pull/818) ([julien](https://github.com/julien))
-   \(\#791\) Modal Footer with many items should break to new line [\#817](https://github.com/liferay/clay/pull/817) ([pat270](https://github.com/pat270))
-   ClayNavigationBar should remove `height` on `transitionend` and remove the use of querySelector in favor of refs | Fixes \#806 \#812 [\#816](https://github.com/liferay/clay/pull/816) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   \(\#776\) Clay Components use `container-fluid container-fluid-max-xl` instead of `container` [\#811](https://github.com/liferay/clay/pull/811) ([carloslancha](https://github.com/carloslancha))
-   \(\#798\) Adjust spacing between words that break to new line in Label and Badges and update ClayLabel and ClayBadge [\#809](https://github.com/liferay/clay/pull/809) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Update: \(Fixes \#807\) Bootstrap to 8f7bd41 \(v4.1.0\) [\#808](https://github.com/liferay/clay/pull/808) ([pat270](https://github.com/pat270))
-   \(\#803\) Autofit Row added more utilities [\#804](https://github.com/liferay/clay/pull/804) ([pat270](https://github.com/pat270))
-   New: \(Fixes \#800\) Added Lexicon SVG Icons `announcement.svg`, `rss-fu… [\#801](https://github.com/liferay/clay/pull/801) ([pat270](https://github.com/pat270))
-   \(\#788\) Atlas adjust font sizes [\#797](https://github.com/liferay/clay/pull/797) ([pat270](https://github.com/pat270))
-   Update billboard.js to 1.4.1 | Fixes \#794 [\#795](https://github.com/liferay/clay/pull/795) ([julien](https://github.com/julien))
-   Update: \(Fixes \#787\) Utilities `.inline-item-before` and `inline-item… [\#790](https://github.com/liferay/clay/pull/790) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#785\) Atlas Application Bar, Navigation Bar, and Manag… [\#789](https://github.com/liferay/clay/pull/789) ([pat270](https://github.com/pat270))
-   \(\#709\) File upload modal [\#786](https://github.com/liferay/clay/pull/786) ([pat270](https://github.com/pat270))

## [v2.0.0-rc.11](https://github.com/liferay/clay/tree/v2.0.0-rc.11) (2018-04-10)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.10...v2.0.0-rc.11)

**Closed issues:**

-   Management Toolbar Creation Menu param should only admit creation param objects [\#782](https://github.com/liferay/clay/issues/782)
-   Label removable has disproportionate close button [\#777](https://github.com/liferay/clay/issues/777)
-   Remove white space between `table-responsive` and `table` when there is overflow [\#773](https://github.com/liferay/clay/issues/773)
-   Management Toolbar should admit a disabled param [\#771](https://github.com/liferay/clay/issues/771)
-   There is no clear button when there are no search results [\#770](https://github.com/liferay/clay/issues/770)
-   Create Password Field demo [\#768](https://github.com/liferay/clay/issues/768)
-   Update Bootstrap 4 in preparation for v4.1 [\#766](https://github.com/liferay/clay/issues/766)
-   Add more SVG Icons [\#762](https://github.com/liferay/clay/issues/762)
-   Create lifecycle tests for clay-charts [\#759](https://github.com/liferay/clay/issues/759)
-   Failed to render when string is passed to geomap data [\#756](https://github.com/liferay/clay/issues/756)
-   Clay sticker shape classes needs to be updated [\#755](https://github.com/liferay/clay/issues/755)
-   Management Toolbar is not using Creation Menu properly [\#753](https://github.com/liferay/clay/issues/753)
-   list-group-header should has 32px height [\#746](https://github.com/liferay/clay/issues/746)
-   The compilation process clayui.com is broken [\#741](https://github.com/liferay/clay/issues/741)
-   Electric Does Not Render Charts Components [\#740](https://github.com/liferay/clay/issues/740)
-   Primary color should be: \#0B5FFF instead of \#1865FB [\#714](https://github.com/liferay/clay/issues/714)
-   Icons in buttons should always be 16px [\#713](https://github.com/liferay/clay/issues/713)

**Merged pull requests:**

-   v2.0.0-rc.11 [\#784](https://github.com/liferay/clay/pull/784) ([jbalsas](https://github.com/jbalsas))
-   SF | Fixes \#782 [\#783](https://github.com/liferay/clay/pull/783) ([carloslancha](https://github.com/carloslancha))
-   \(\#777\) Badges and Labels added new pattern for truncating text [\#781](https://github.com/liferay/clay/pull/781) ([carloslancha](https://github.com/carloslancha))
-   Update: \(Fixes \#746\) Atlas List Group change `\$list-group-header-padd… [\#780](https://github.com/liferay/clay/pull/780) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#713\) Atlas Button change `\$btn-inline-item-font-size-… [\#779](https://github.com/liferay/clay/pull/779) ([pat270](https://github.com/pat270))
-   Clay UI Docs update Tables [\#775](https://github.com/liferay/clay/pull/775) ([pat270](https://github.com/pat270))
-   \(\#773\) Remove white space between `table-responsive` and `table` when there is overflow [\#774](https://github.com/liferay/clay/pull/774) ([pat270](https://github.com/pat270))
-   Management Toolbar should admit a disabled param and add clear button when there are no search results [\#772](https://github.com/liferay/clay/pull/772) ([carloslancha](https://github.com/carloslancha))
-   \(\#768\) Added `input-group-password` [\#769](https://github.com/liferay/clay/pull/769) ([pat270](https://github.com/pat270))
-   Update: Bootstrap 4 to 10c64bd [\#767](https://github.com/liferay/clay/pull/767) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#714\) Primary Color should be based on \#0B5FFF [\#764](https://github.com/liferay/clay/pull/764) ([pat270](https://github.com/pat270))
-   \(\#762\) Added new SVG Icons for use in System Settings and Alloy Editor [\#763](https://github.com/liferay/clay/pull/763) ([pat270](https://github.com/pat270))
-   Create lifecycle tests for clay-charts [\#760](https://github.com/liferay/clay/pull/760) ([julien](https://github.com/julien))
-   Regen testSoy fixtures | Fixes \#755 [\#757](https://github.com/liferay/clay/pull/757) ([carloslancha](https://github.com/carloslancha))
-   Management Toolbar is not using Creation Menu properly | Fixes \#753 [\#754](https://github.com/liferay/clay/pull/754) ([carloslancha](https://github.com/carloslancha))
-   SF | Fixes \#749 [\#752](https://github.com/liferay/clay/pull/752) ([carloslancha](https://github.com/carloslancha))
-   Generate API Documents [\#748](https://github.com/liferay/clay/pull/748) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.0.0-rc.10](https://github.com/liferay/clay/tree/v2.0.0-rc.10) (2018-03-16)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.9...v2.0.0-rc.10)

**Closed issues:**

-   Improve Creation Menu items logic [\#749](https://github.com/liferay/clay/issues/749)
-   Clay Link should not add inline-item inline-item-after class if there's no label [\#745](https://github.com/liferay/clay/issues/745)
-   Update billboard.js in clay-charts [\#743](https://github.com/liferay/clay/issues/743)
-   Style of the quick actions menu is broken on ClayManagementToolbar [\#738](https://github.com/liferay/clay/issues/738)
-   `Type` tags are incorrect in JSDOC [\#736](https://github.com/liferay/clay/issues/736)
-   Create electric-clay-components to use on claycss.com [\#534](https://github.com/liferay/clay/issues/534)

**Merged pull requests:**

-   v2.0.0-rc.10 [\#751](https://github.com/liferay/clay/pull/751) ([jbalsas](https://github.com/jbalsas))
-   Improve Creation Menu items logic | Fixes \#749 [\#750](https://github.com/liferay/clay/pull/750) ([carloslancha](https://github.com/carloslancha))
-   Adds new JSDOC tags to ChartBase [\#747](https://github.com/liferay/clay/pull/747) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Updates billboard.js to 1.3.0 [\#744](https://github.com/liferay/clay/pull/744) ([julien](https://github.com/julien))
-   Fixes the quick action style in ClayManagementToolbar | Fixes \#738 [\#739](https://github.com/liferay/clay/pull/739) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fix tag type JSDOC when use multiple types | Fixes \#736 [\#737](https://github.com/liferay/clay/pull/737) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Site: \(\#721\) User icon to sticker-circle [\#724](https://github.com/liferay/clay/pull/724) ([marcoscv-work](https://github.com/marcoscv-work))

## [v2.0.0-rc.9](https://github.com/liferay/clay/tree/v2.0.0-rc.9) (2018-03-14)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.8...v2.0.0-rc.9)

**Closed issues:**

-   Soy throws an error when a quick Item is passed without href to the ManagementToolbar [\#733](https://github.com/liferay/clay/issues/733)
-   Generate API docs [\#657](https://github.com/liferay/clay/issues/657)

**Merged pull requests:**

-   v2.0.0-rc.9 [\#735](https://github.com/liferay/clay/pull/735) ([jbalsas](https://github.com/jbalsas))
-   Check if item href is not null for quick items in management toolbar | Fixes \#733 [\#734](https://github.com/liferay/clay/pull/734) ([carloslancha](https://github.com/carloslancha))

## [v2.0.0-rc.8](https://github.com/liferay/clay/tree/v2.0.0-rc.8) (2018-03-14)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.7...v2.0.0-rc.8)

**Closed issues:**

-   Missing metal import in clay-charts [\#729](https://github.com/liferay/clay/issues/729)
-   Warning about `&&` usage instead of `and` [\#723](https://github.com/liferay/clay/issues/723)

**Merged pull requests:**

-   v2.0.0-rc.8 [\#732](https://github.com/liferay/clay/pull/732) ([jbalsas](https://github.com/jbalsas))
-   Adds missing metal dependency [\#731](https://github.com/liferay/clay/pull/731) ([jbalsas](https://github.com/jbalsas))
-   Adds missing metal dependency [\#730](https://github.com/liferay/clay/pull/730) ([jbalsas](https://github.com/jbalsas))
-   \(\#723\) Fixes errors related to node-sass 4.8.1 update [\#728](https://github.com/liferay/clay/pull/728) ([pat270](https://github.com/pat270))

## [v2.0.0-rc.7](https://github.com/liferay/clay/tree/v2.0.0-rc.7) (2018-03-13)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.6...v2.0.0-rc.7)

**Closed issues:**

-   Creation Menu needs to have the max items logic [\#717](https://github.com/liferay/clay/issues/717)
-   ClayComponent.getAttribute does not respect the spec when the attribute has no value [\#715](https://github.com/liferay/clay/issues/715)
-   Quick action items in management toolbar can be links [\#711](https://github.com/liferay/clay/issues/711)
-   Links with icons and text show them together [\#710](https://github.com/liferay/clay/issues/710)
-   Modals need to support designs in FILE UPLOADER [\#709](https://github.com/liferay/clay/issues/709)
-   Don't render search value if null [\#708](https://github.com/liferay/clay/issues/708)
-   Add href for sorting button in Management Toolbar [\#706](https://github.com/liferay/clay/issues/706)
-   Add href to clear results link in management toolbar [\#705](https://github.com/liferay/clay/issues/705)
-   Add polling_interval option to Charts [\#544](https://github.com/liferay/clay/issues/544)

**Merged pull requests:**

-   v2.0.0-rc.7 [\#726](https://github.com/liferay/clay/pull/726) ([jbalsas](https://github.com/jbalsas))
-   \#600 Breaking Dropdown Action Toggle and Quick Action Item require `.component-action` [\#725](https://github.com/liferay/clay/pull/725) ([carloslancha](https://github.com/carloslancha))
-   Returning empty string when no attribute is present | Fixes \#715 [\#720](https://github.com/liferay/clay/pull/720) ([carloslancha](https://github.com/carloslancha))
-   Fix JSDoc on ClayImageCard [\#712](https://github.com/liferay/clay/pull/712) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Various fixes | Fixes \#705 \#706 \#708 \#710 \#711 \#717 [\#707](https://github.com/liferay/clay/pull/707) ([carloslancha](https://github.com/carloslancha))
-   Add pollingInterval option to Charts [\#704](https://github.com/liferay/clay/pull/704) ([julien](https://github.com/julien))

## [v2.0.0-rc.6](https://github.com/liferay/clay/tree/v2.0.0-rc.6) (2018-03-07)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.5...v2.0.0-rc.6)

**Closed issues:**

-   Support data attributes in links \(and maybe everywhere?\) [\#700](https://github.com/liferay/clay/issues/700)
-   Watch script doesn't working on clayui.com [\#696](https://github.com/liferay/clay/issues/696)
-   Management Toolbar Search input should not be disabled after a search [\#691](https://github.com/liferay/clay/issues/691)
-   Create markup for LABELS INPUT FIELD [\#690](https://github.com/liferay/clay/issues/690)
-   Create markup for AUTOCOMPLETE TEXT FIELD and SEARCH FIELD [\#688](https://github.com/liferay/clay/issues/688)
-   Navbars increase max-width on `.navbar-text-truncate` [\#685](https://github.com/liferay/clay/issues/685)
-   Management Toolbar search form need method POST [\#684](https://github.com/liferay/clay/issues/684)
-   Create markup for Simple File Upload [\#675](https://github.com/liferay/clay/issues/675)
-   Update ClayModal with new markup [\#667](https://github.com/liferay/clay/issues/667)

**Merged pull requests:**

-   Updates changelog to v2.0.0-rc.5 [\#703](https://github.com/liferay/clay/pull/703) ([jbalsas](https://github.com/jbalsas))
-   Add data-attributes to DOM | Fixes \#700 [\#702](https://github.com/liferay/clay/pull/702) ([carloslancha](https://github.com/carloslancha))
-   \#690 Markup for Lexicon Input Labels Field [\#701](https://github.com/liferay/clay/pull/701) ([pat270](https://github.com/pat270))
-   Regen snapshots [\#699](https://github.com/liferay/clay/pull/699) ([carloslancha](https://github.com/carloslancha))
-   Add generate icon data | Fixes \#696 [\#698](https://github.com/liferay/clay/pull/698) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Regen ClayManagementToolbar snapshots with method POST [\#694](https://github.com/liferay/clay/pull/694) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Management Toolbar search form need method POST | Fixes \#684 [\#693](https://github.com/liferay/clay/pull/693) ([carloslancha](https://github.com/carloslancha))
-   Management Toolbar Search input should not be disabled after a search | Fixes \#691 [\#692](https://github.com/liferay/clay/pull/692) ([carloslancha](https://github.com/carloslancha))
-   \#688 Autocomplete Text Field and Search Field markup [\#689](https://github.com/liferay/clay/pull/689) ([pat270](https://github.com/pat270))
-   \#675 Create Simple File Upload pattern [\#687](https://github.com/liferay/clay/pull/687) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#685\) Navbar `.navbar-text-truncate` should have max-w… [\#686](https://github.com/liferay/clay/pull/686) ([pat270](https://github.com/pat270))

## [v2.0.0-rc.5](https://github.com/liferay/clay/tree/v2.0.0-rc.5) (2018-03-01)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.4...v2.0.0-rc.5)

**Closed issues:**

-   Add missing dependency with metal in clay-component [\#679](https://github.com/liferay/clay/issues/679)
-   Fix url for Geomap in clay-charts [\#676](https://github.com/liferay/clay/issues/676)
-   Alert Notification \(Toast\) should have box-shadow [\#673](https://github.com/liferay/clay/issues/673)
-   Change claycss.com to clayui.com [\#671](https://github.com/liferay/clay/issues/671)
-   Links don't support "title" attribute [\#665](https://github.com/liferay/clay/issues/665)
-   Wrong parameter types in clay-charts [\#644](https://github.com/liferay/clay/issues/644)
-   Add `cors` to fetch options in clay-charts [\#640](https://github.com/liferay/clay/issues/640)

**Merged pull requests:**

-   v2.0.0-rc.5 [\#682](https://github.com/liferay/clay/pull/682) ([jbalsas](https://github.com/jbalsas))
-   Change claycss.com to clayui.com [\#681](https://github.com/liferay/clay/pull/681) ([julien](https://github.com/julien))
-   Add missing dependency | Fixes \#679 [\#680](https://github.com/liferay/clay/pull/680) ([carloslancha](https://github.com/carloslancha))
-   New: \(Fixes \#673\) Alert Notifications add box-shadow in Atlas and add… [\#674](https://github.com/liferay/clay/pull/674) ([pat270](https://github.com/pat270))
-   More ClayCSS Docs [\#672](https://github.com/liferay/clay/pull/672) ([pat270](https://github.com/pat270))

## [v2.0.0-rc.4](https://github.com/liferay/clay/tree/v2.0.0-rc.4) (2018-02-28)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.3...v2.0.0-rc.4)

**Closed issues:**

-   Dropdown should emit an event sending the clicked item on click [\#660](https://github.com/liferay/clay/issues/660)
-   Create a pattern to space `.btn` 1rem [\#654](https://github.com/liferay/clay/issues/654)
-   Add 2 new social svg icons [\#646](https://github.com/liferay/clay/issues/646)
-   ClayManagementToolbar viewType object needs to accept href [\#641](https://github.com/liferay/clay/issues/641)
-   Soy Compilation error [\#633](https://github.com/liferay/clay/issues/633)
-   form-groups in a dropdown [\#619](https://github.com/liferay/clay/issues/619)
-   Nav nested has lost its previous styles [\#405](https://github.com/liferay/clay/issues/405)

**Merged pull requests:**

-   v2.0.0-rc.4 [\#669](https://github.com/liferay/clay/pull/669) ([jbalsas](https://github.com/jbalsas))
-   Adding support for title attribute in links [\#666](https://github.com/liferay/clay/pull/666) ([4lejandrito](https://github.com/4lejandrito))
-   Update: \(Closes \#405\) Mixin `clay-nav-variant` add more configuration… [\#664](https://github.com/liferay/clay/pull/664) ([pat270](https://github.com/pat270))
-   ignore clay-isomorphic on claycss [\#663](https://github.com/liferay/clay/pull/663) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   \#654 Create a pattern to space `.btn` 1rem [\#662](https://github.com/liferay/clay/pull/662) ([pat270](https://github.com/pat270))
-   Update ClayDatasetDisplay demos | Fixes \#660 [\#661](https://github.com/liferay/clay/pull/661) ([carloslancha](https://github.com/carloslancha))
-   Add testSoy task to travis [\#658](https://github.com/liferay/clay/pull/658) ([carloslancha](https://github.com/carloslancha))
-   ClayCSS Update Several pages [\#653](https://github.com/liferay/clay/pull/653) ([pat270](https://github.com/pat270))
-   Rename hideLabel params to showLabel for consistency [\#652](https://github.com/liferay/clay/pull/652) ([carloslancha](https://github.com/carloslancha))
-   Site: Buttons separate `.btn-unstyled` from Button examples and add s… [\#648](https://github.com/liferay/clay/pull/648) ([pat270](https://github.com/pat270))
-   New: \(Fixes \#646\) Lexicon Icons added Facebook and Linkedin icons [\#647](https://github.com/liferay/clay/pull/647) ([pat270](https://github.com/pat270))
-   Fix region parameter in ChartBase [\#645](https://github.com/liferay/clay/pull/645) ([julien](https://github.com/julien))
-   Add `cors` to fetch options [\#643](https://github.com/liferay/clay/pull/643) ([julien](https://github.com/julien))
-   ViewType object accepts href | Fixes \#641 [\#642](https://github.com/liferay/clay/pull/642) ([carloslancha](https://github.com/carloslancha))
-   Revert "Use electric-clay-components instead of electric-quartz-components" [\#639](https://github.com/liferay/clay/pull/639) ([carloslancha](https://github.com/carloslancha))
-   \#619 form-groups in a dropdown [\#636](https://github.com/liferay/clay/pull/636) ([pat270](https://github.com/pat270))
-   Use electric-clay-components instead of electric-quartz-components \#534 [\#635](https://github.com/liferay/clay/pull/635) ([zenorocha](https://github.com/zenorocha))
-   Add missing param into ClayCardBase.Visual area implementation in ClayUserCard | Fixes \#633 [\#634](https://github.com/liferay/clay/pull/634) ([carloslancha](https://github.com/carloslancha))

## [v2.0.0-rc.3](https://github.com/liferay/clay/tree/v2.0.0-rc.3) (2018-02-23)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.2...v2.0.0-rc.3)

**Closed issues:**

-   Prevent component from breaking during server side rendering [\#626](https://github.com/liferay/clay/issues/626)
-   Range in ClayPagination is wrong [\#623](https://github.com/liferay/clay/issues/623)
-   Migrate site to Electric 3 [\#617](https://github.com/liferay/clay/issues/617)
-   Button toggle from site menu is broken on Mobile [\#615](https://github.com/liferay/clay/issues/615)
-   Update some Button markups, Dropdowns and Subnav in claycss [\#613](https://github.com/liferay/clay/issues/613)
-   The tick count for axisY should expect a number not a bool [\#610](https://github.com/liferay/clay/issues/610)
-   Add Advanced Search to ClayManagementToolbar [\#609](https://github.com/liferay/clay/issues/609)
-   Change API for the stickers on ClayCards [\#603](https://github.com/liferay/clay/issues/603)
-   `btn-sm` is not working with `btn-unstyled` [\#600](https://github.com/liferay/clay/issues/600)
-   Dropdown trigger need space between icon and label when both are passed [\#597](https://github.com/liferay/clay/issues/597)
-   `.table` should have border-bottom and content should be vertically centered [\#594](https://github.com/liferay/clay/issues/594)
-   Form Inline from BS4 is not supported by Clay [\#592](https://github.com/liferay/clay/issues/592)
-   Safari: Card Page doesn't properly layout cards [\#590](https://github.com/liferay/clay/issues/590)
-   ClayAlert disposed instances issues [\#582](https://github.com/liferay/clay/issues/582)
-   Create `data` API to replace `columns` in Charts [\#526](https://github.com/liferay/clay/issues/526)

**Merged pull requests:**

-   v2.0.0-rc.3 [\#632](https://github.com/liferay/clay/pull/632) ([jbalsas](https://github.com/jbalsas))
-   \#594 Update `.table` styles to match Lexicon 2 [\#631](https://github.com/liferay/clay/pull/631) ([carloslancha](https://github.com/carloslancha))
-   Migrate claycss.com to electric 3 | Fixes \#617 [\#630](https://github.com/liferay/clay/pull/630) ([carloslancha](https://github.com/carloslancha))
-   Create `data` API to replace `columns` in Charts [\#629](https://github.com/liferay/clay/pull/629) ([julien](https://github.com/julien))
-   Check if the dispose has already been done and does nothing | Fixes \#582 [\#625](https://github.com/liferay/clay/pull/625) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fix ClayPagination range | Fixes \#623 [\#624](https://github.com/liferay/clay/pull/624) ([carloslancha](https://github.com/carloslancha))
-   Add Advanced Search to ClayManagementToolbar | Fixes \#609 [\#622](https://github.com/liferay/clay/pull/622) ([carloslancha](https://github.com/carloslancha))
-   Add Sidebar.js for toggle classes of sidebar | Fixes \#615 [\#616](https://github.com/liferay/clay/pull/616) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Update some Button markups, Dropdowns and Subnav in claycss | Fixes \#613 [\#614](https://github.com/liferay/clay/pull/614) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Regen snapshots | Fixes \#481 [\#612](https://github.com/liferay/clay/pull/612) ([carloslancha](https://github.com/carloslancha))
-   \#610 Check for Number instead of Boolean on axisY.tick.count prop [\#611](https://github.com/liferay/clay/pull/611) ([kienD](https://github.com/kienD))
-   Add search results bar in ClayManagementToolbar | Fixes \#572 [\#608](https://github.com/liferay/clay/pull/608) ([carloslancha](https://github.com/carloslancha))
-   Change API for the stickers on ClayCards | Fixes \#603 [\#606](https://github.com/liferay/clay/pull/606) ([carloslancha](https://github.com/carloslancha))
-   Dropdown trigger need space between icon and label when both are passed | Fixes \#597 [\#599](https://github.com/liferay/clay/pull/599) ([carloslancha](https://github.com/carloslancha))
-   Update metal-soy in clay-charts [\#596](https://github.com/liferay/clay/pull/596) ([carloslancha](https://github.com/carloslancha))
-   Breaking: \(Fixes \#592\) Remove references to BS4's `.form-inline` comp… [\#593](https://github.com/liferay/clay/pull/593) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#590\) Mixin `clay-custom-grid-columns` added option to… [\#591](https://github.com/liferay/clay/pull/591) ([pat270](https://github.com/pat270))
-   Update the URL of the packages in the package.json [\#589](https://github.com/liferay/clay/pull/589) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.0.0-rc.2](https://github.com/liferay/clay/tree/v2.0.0-rc.2) (2018-02-20)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.1...v2.0.0-rc.2)

**Closed issues:**

-   InfoButton in ClayManagementToolbar should never be disabled [\#583](https://github.com/liferay/clay/issues/583)
-   infoButton in ClayManagementoToolbar can not be disabled [\#581](https://github.com/liferay/clay/issues/581)
-   Test throwing exceptions [\#579](https://github.com/liferay/clay/issues/579)
-   Fix connection with coveralls [\#575](https://github.com/liferay/clay/issues/575)
-   Change all trailing underscores to leading [\#573](https://github.com/liferay/clay/issues/573)
-   Add search results bar in ClayManagementToolbar [\#572](https://github.com/liferay/clay/issues/572)
-   Filter button in ClayManagementToolbar does not appear on mobile [\#571](https://github.com/liferay/clay/issues/571)
-   Update ClaySelect Markup [\#558](https://github.com/liferay/clay/issues/558)
-   Subnav needs a refactor to support more use cases [\#557](https://github.com/liferay/clay/issues/557)
-   Fieldset element inside Sheet mess up spacing because it doesn't support margin collapse [\#551](https://github.com/liferay/clay/issues/551)
-   sheet-title can contain an "add button" right aligned [\#547](https://github.com/liferay/clay/issues/547)
-   Tabbing through items with box-shadow in a Blink browser \(Chrome\) leaves remnants of the shadow [\#546](https://github.com/liferay/clay/issues/546)
-   aspect-ratio-bg-contain [\#545](https://github.com/liferay/clay/issues/545)
-   Implement Search only content markup in ManagmentToolbar [\#543](https://github.com/liferay/clay/issues/543)
-   Upadte styles for new Clay Card Grid List Markup [\#542](https://github.com/liferay/clay/issues/542)
-   IE: Tabbing through the document focuses SVG elements [\#536](https://github.com/liferay/clay/issues/536)
-   Disabled attribute markup is incorrect for button [\#522](https://github.com/liferay/clay/issues/522)

**Merged pull requests:**

-   v2.0.0-rc.2 [\#588](https://github.com/liferay/clay/pull/588) ([jbalsas](https://github.com/jbalsas))
-   Regen snapshots | Fixes \#571 [\#587](https://github.com/liferay/clay/pull/587) ([carloslancha](https://github.com/carloslancha))
-   Update coveralls badge | Fixes \#575 [\#586](https://github.com/liferay/clay/pull/586) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Regen snapshots | Fixes \#583 [\#584](https://github.com/liferay/clay/pull/584) ([carloslancha](https://github.com/carloslancha))
-   Stub console.error | Fixes \#579 [\#580](https://github.com/liferay/clay/pull/580) ([carloslancha](https://github.com/carloslancha))
-   Add "info button" to ClayManagementToolbar | Fixes \#481 [\#577](https://github.com/liferay/clay/pull/577) ([carloslancha](https://github.com/carloslancha))
-   Change trailing to leading underscores in clay-charts | Fixes \#573 [\#574](https://github.com/liferay/clay/pull/574) ([carloslancha](https://github.com/carloslancha))
-   Removing variable no more used in ClayCardGrid [\#570](https://github.com/liferay/clay/pull/570) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Add missing features and search only layout to Management Toolbar | Fixes \#543 [\#568](https://github.com/liferay/clay/pull/568) ([carloslancha](https://github.com/carloslancha))
-   Update styles for new Clay Card Grid List Markup | Fixes \#542 [\#567](https://github.com/liferay/clay/pull/567) ([carloslancha](https://github.com/carloslancha))
-   \(\#542\) Put `card-section-header` inside `card-page li` [\#566](https://github.com/liferay/clay/pull/566) ([pat270](https://github.com/pat270))
-   \#557 Create `.subnav-tbar` component and remove `.subnav` component [\#565](https://github.com/liferay/clay/pull/565) ([pat270](https://github.com/pat270))
-   Add flag to indicate when focusable is true or not | Fixes \#536 [\#563](https://github.com/liferay/clay/pull/563) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Adds disabled="true" to force your render separate from other attributes | Fixes \#522 [\#561](https://github.com/liferay/clay/pull/561) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Update some tabs for to get highlights from webcomponents in claycss [\#560](https://github.com/liferay/clay/pull/560) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Update ClaySelect markup and remove wrapperType to use the inline API| Fixes \#558 [\#559](https://github.com/liferay/clay/pull/559) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   ClayCSS Docs Update Form Elements and Form Validation markup [\#556](https://github.com/liferay/clay/pull/556) ([pat270](https://github.com/pat270))
-   ClayCSS Docs update Input Group markup [\#555](https://github.com/liferay/clay/pull/555) ([pat270](https://github.com/pat270))
-   \#546 Button added `backface-visibility: hidden` to `.… [\#554](https://github.com/liferay/clay/pull/554) ([pat270](https://github.com/pat270))
-   \#545 Add `.aspect-ratio-bg-contain` [\#553](https://github.com/liferay/clay/pull/553) ([pat270](https://github.com/pat270))
-   \#551 Add support for Fieldset in Sheet [\#552](https://github.com/liferay/clay/pull/552) ([pat270](https://github.com/pat270))
-   \(\#547\) sheet-subtitle can contain an "add button" right aligned [\#549](https://github.com/liferay/clay/pull/549) ([pat270](https://github.com/pat270))

## [v2.0.0-rc.1](https://github.com/liferay/clay/tree/v2.0.0-rc.1) (2018-02-09)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-rc.0...v2.0.0-rc.1)

**Closed issues:**

-   Inputs with help or error messages must have the same parent element [\#537](https://github.com/liferay/clay/issues/537)
-   Website not accessible: ERR_TOO_MANY_REDIRECTS [\#528](https://github.com/liferay/clay/issues/528)
-   We need to update Clay Dropdown markup [\#527](https://github.com/liferay/clay/issues/527)
-   Accessibility issue in ClayManagementToolbar [\#518](https://github.com/liferay/clay/issues/518)
-   Breaking input-group-item in Firefox [\#516](https://github.com/liferay/clay/issues/516)
-   management bar does not look correctly when contains only a search [\#512](https://github.com/liferay/clay/issues/512)
-   Create a Map Chart in Clay Charts [\#509](https://github.com/liferay/clay/issues/509)
-   Side Navigation plugin mobile breakpoint is ~15px too high [\#504](https://github.com/liferay/clay/issues/504)
-   Enable chart background "patterns" on demand [\#495](https://github.com/liferay/clay/issues/495)
-   Wrong delTemplate ClayDropdownBase [\#485](https://github.com/liferay/clay/issues/485)
-   Add "info button" to ClayManagementToolbar [\#481](https://github.com/liferay/clay/issues/481)
-   Move charts demos to claycss.com [\#456](https://github.com/liferay/clay/issues/456)

**Merged pull requests:**

-   Updates CHANGELOG for v2.0.0-rc.0 [\#541](https://github.com/liferay/clay/pull/541) ([jbalsas](https://github.com/jbalsas))
-   \#537 Inputs with help or error messages must have the same parent element [\#540](https://github.com/liferay/clay/pull/540) ([pat270](https://github.com/pat270))
-   Update the Table markup at claycss.com [\#539](https://github.com/liferay/clay/pull/539) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Update markups on form elements at claycss.com [\#538](https://github.com/liferay/clay/pull/538) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   \#512 management bar does not look correctly when contains only a search [\#535](https://github.com/liferay/clay/pull/535) ([pat270](https://github.com/pat270))
-   Update metal-tools-soy to 6.0.0 | Fixes \#530 [\#533](https://github.com/liferay/clay/pull/533) ([carloslancha](https://github.com/carloslancha))
-   Makes sure we run soy before generating the site \(Fixes \#509\) [\#529](https://github.com/liferay/clay/pull/529) ([jbalsas](https://github.com/jbalsas))
-   Update: \(Fixes \#516\) Forms `.form-control` in Firefox should shrink t… [\#524](https://github.com/liferay/clay/pull/524) ([pat270](https://github.com/pat270))
-   Add Chart examples to claycss.com [\#521](https://github.com/liferay/clay/pull/521) ([julien](https://github.com/julien))
-   Fix accessibility issue | Fixes \#518 [\#519](https://github.com/liferay/clay/pull/519) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Update prettier-eslint-cli to 4.7.0 [\#514](https://github.com/liferay/clay/pull/514) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Use tiles when it's true | Fixes \#495 [\#513](https://github.com/liferay/clay/pull/513) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Update: \(Fixes \#504\) Side Navigation JS breakpoint region should use window size + scrollbar [\#506](https://github.com/liferay/clay/pull/506) ([pat270](https://github.com/pat270))

## [v2.0.0-rc.0](https://github.com/liferay/clay/tree/v2.0.0-rc.0) (2018-02-01)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.8...v2.0.0-rc.0)

**Closed issues:**

-   Update metal-tools-soy | Some markup fails compiling with metal-tools-soy 6.0.0 [\#530](https://github.com/liferay/clay/issues/530)
-   .dropdown-menu-right should work in all Navbar variants [\#500](https://github.com/liferay/clay/issues/500)
-   Items in Navigation Bar mobile menu aren't vertically aligned on the left [\#498](https://github.com/liferay/clay/issues/498)
-   Form Group Autofit should better support Horizontal Forms [\#492](https://github.com/liferay/clay/issues/492)
-   Tweak font sizes to match Lexicon 2 in Tables, Navigation Bar, Application Bar, and Management Bar [\#490](https://github.com/liferay/clay/issues/490)
-   Wedeploy branch is being tested in Travis [\#483](https://github.com/liferay/clay/issues/483)
-   ClayDropdown is not being aligned in the best way [\#452](https://github.com/liferay/clay/issues/452)

**Merged pull requests:**

-   Updates CHANGELOG for v2.0.0-beta.8 [\#503](https://github.com/liferay/clay/pull/503) ([jbalsas](https://github.com/jbalsas))
-   .dropdown-menu-right should work in all Navbar variants [\#501](https://github.com/liferay/clay/pull/501) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#498\) Navigation Bar mobile menu should be properly al… [\#499](https://github.com/liferay/clay/pull/499) ([pat270](https://github.com/pat270))
-   Remove unnecessary use of minValue and maxValue in the ProgressBar [\#497](https://github.com/liferay/clay/pull/497) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Some updates from the claycss.com [\#496](https://github.com/liferay/clay/pull/496) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Add missing contents property to legend option [\#494](https://github.com/liferay/clay/pull/494) ([julien](https://github.com/julien))
-   Form Group Autofit added `.form-group-item-label` and `.form-group-item-label-spacer` for horizontally aligned labels [\#493](https://github.com/liferay/clay/pull/493) ([pat270](https://github.com/pat270))
-   Update: \(Fixes \#490\) Tweak font-sizes to match Lexicon V2 [\#491](https://github.com/liferay/clay/pull/491) ([pat270](https://github.com/pat270))
-   Update Dropdown markup in claycss.com [\#489](https://github.com/liferay/clay/pull/489) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Update ClayPaginationBar demos [\#487](https://github.com/liferay/clay/pull/487) ([carloslancha](https://github.com/carloslancha))
-   Remove isInList param from ClayDropdownBase's radaiogroup deltemplate variant | Fixes 485 [\#486](https://github.com/liferay/clay/pull/486) ([carloslancha](https://github.com/carloslancha))
-   Excludes wedeploy branch from travis [\#484](https://github.com/liferay/clay/pull/484) ([jbalsas](https://github.com/jbalsas))
-   Fix the align of the dropdown when expanded in ClayDropdown | Fixes \#452 [\#482](https://github.com/liferay/clay/pull/482) ([matuzalemsteles](https://github.com/matuzalemsteles))

## [v2.0.0-beta.8](https://github.com/liferay/clay/tree/v2.0.0-beta.8) (2018-01-25)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.7...v2.0.0-beta.8)

**Closed issues:**

-   lib directory of clay is not published to npm [\#479](https://github.com/liferay/clay/issues/479)

**Merged pull requests:**

-   Generates CHANGELOG [\#480](https://github.com/liferay/clay/pull/480) ([jbalsas](https://github.com/jbalsas))
-   Publish lib dir to npm [\#478](https://github.com/liferay/clay/pull/478) ([robframpton](https://github.com/robframpton))

## [v2.0.0-beta.7](https://github.com/liferay/clay/tree/v2.0.0-beta.7) (2018-01-25)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.0-alpha.16...v2.0.0-beta.7)

**Closed issues:**

-   Atlas Nav with collapse-icon should be vertically centered with first line of text [\#475](https://github.com/liferay/clay/issues/475)
-   ClayHorizontalCard ellipsis text [\#462](https://github.com/liferay/clay/issues/462)
-   Menubar \(Vertical\) should break at 991px [\#453](https://github.com/liferay/clay/issues/453)
-   Dropdown menu should support several lists inside [\#450](https://github.com/liferay/clay/issues/450)
-   Forms in IOS Safari have shadow on top [\#447](https://github.com/liferay/clay/issues/447)
-   clay-card markup is not correctly formatted [\#444](https://github.com/liferay/clay/issues/444)
-   Disabled state for ClayManagementToolbar [\#439](https://github.com/liferay/clay/issues/439)
-   Should ClayCard be renamed? [\#430](https://github.com/liferay/clay/issues/430)
-   ClayCard labels seem very close to each other \(missing horizontal space\) [\#429](https://github.com/liferay/clay/issues/429)
-   Dropdown menu with lists markup is not looking correctly [\#425](https://github.com/liferay/clay/issues/425)
-   ClayTable headers [\#404](https://github.com/liferay/clay/issues/404)
-   Missing popper.js sourcemaps [\#374](https://github.com/liferay/clay/issues/374)
-   Lexicon with Bootstrap 3.x [\#338](https://github.com/liferay/clay/issues/338)

**Merged pull requests:**

-   v2.0.0-beta.7 [\#477](https://github.com/liferay/clay/pull/477) ([jbalsas](https://github.com/jbalsas))
-   Vertically center collapse-icon to first line of text for components that use it [\#476](https://github.com/liferay/clay/pull/476) ([pat270](https://github.com/pat270))
-   Update more icons url [\#474](https://github.com/liferay/clay/pull/474) ([carloslancha](https://github.com/carloslancha))
-   Update: \(\#450\) Dropdown `.dropdown-menu \> .list-unstyled` should have… [\#473](https://github.com/liferay/clay/pull/473) ([pat270](https://github.com/pat270))
-   Update: \(\#439\) Input Group Inset should have `:disabled` styles [\#472](https://github.com/liferay/clay/pull/472) ([pat270](https://github.com/pat270))
-   \#453 Added `.container-form-lg`, `.menubar-vertical-expand-lg`, and demos to break at lg breakpoint [\#471](https://github.com/liferay/clay/pull/471) ([pat270](https://github.com/pat270))
-   Update icons url [\#470](https://github.com/liferay/clay/pull/470) ([carloslancha](https://github.com/carloslancha))
-   Claycss general adjustment [\#469](https://github.com/liferay/clay/pull/469) ([marcoscv-work](https://github.com/marcoscv-work))
-   Update yarn.lock [\#468](https://github.com/liferay/clay/pull/468) ([robframpton](https://github.com/robframpton))
-   Add disabled state to ClayManagementToolbar | Fixes \#439 [\#465](https://github.com/liferay/clay/pull/465) ([carloslancha](https://github.com/carloslancha))
-   Update atlas.css urls in demos [\#464](https://github.com/liferay/clay/pull/464) ([robframpton](https://github.com/robframpton))
-   Fix icon markup on ClayHorizontalCard | Fixes \#462 [\#463](https://github.com/liferay/clay/pull/463) ([carloslancha](https://github.com/carloslancha))
-   Use new markup for ClayDropdown | Fixes \#425 and \#450 [\#461](https://github.com/liferay/clay/pull/461) ([carloslancha](https://github.com/carloslancha))
-   Run npm compile script [\#457](https://github.com/liferay/clay/pull/457) ([robframpton](https://github.com/robframpton))
-   Update some markups at claycss.com [\#455](https://github.com/liferay/clay/pull/455) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Fix render unnecessary custom-control-label-text on other components in ClayCheckbox [\#451](https://github.com/liferay/clay/pull/451) ([matuzalemsteles](https://github.com/matuzalemsteles))
-   Build [\#449](https://github.com/liferay/clay/pull/449) ([robframpton](https://github.com/robframpton))
-   Update: \(Fixes \#447\) Forms in ios have shadow on top due to default b… [\#448](https://github.com/liferay/clay/pull/448) ([pat270](https://github.com/pat270))
-   Clay Table Updates [\#446](https://github.com/liferay/clay/pull/446) ([pat270](https://github.com/pat270))
-   Fixes \#429 and \#444 [\#445](https://github.com/liferay/clay/pull/445) ([carloslancha](https://github.com/carloslancha))
-   Renames ClayCard to ClayCardBase [\#443](https://github.com/liferay/clay/pull/443) ([julien](https://github.com/julien))
-   Remove web components examples from demos [\#442](https://github.com/liferay/clay/pull/442) ([carloslancha](https://github.com/carloslancha))
-   Fix checkbox and radio styles [\#441](https://github.com/liferay/clay/pull/441) ([carloslancha](https://github.com/carloslancha))
-   Managementtoolbar markup fix [\#440](https://github.com/liferay/clay/pull/440) ([marcoscv-work](https://github.com/marcoscv-work))
-   Update: \(\#429\) Badges added option to configure `$badge-spacer-x` and… [\#438](https://github.com/liferay/clay/pull/438) ([pat270](https://github.com/pat270))
-   Update Bootstrap to 572d00a \(v4.0.0\) [\#437](https://github.com/liferay/clay/pull/437) ([pat270](https://github.com/pat270))
-   Remove unused dep from clay-portal [\#436](https://github.com/liferay/clay/pull/436) ([robframpton](https://github.com/robframpton))
-   Search icon fix [\#435](https://github.com/liferay/clay/pull/435) ([marcoscv-work](https://github.com/marcoscv-work))
-   Remove lint-staged and related tasks [\#434](https://github.com/liferay/clay/pull/434) ([carloslancha](https://github.com/carloslancha))
-   Add BubbleChart [\#433](https://github.com/liferay/clay/pull/433) ([julien](https://github.com/julien))
-   Updates Sidebar and related components to Lexicon V2 [\#432](https://github.com/liferay/clay/pull/432) ([pat270](https://github.com/pat270))
-   Implement Portals for clay-dropdown components [\#428](https://github.com/liferay/clay/pull/428) ([robframpton](https://github.com/robframpton))
-   Card markup update [\#424](https://github.com/liferay/clay/pull/424) ([marcoscv-work](https://github.com/marcoscv-work))

## [v1.0.0-alpha.16](https://github.com/liferay/clay/tree/v1.0.0-alpha.16) (2018-01-17)

[Full Changelog](https://github.com/liferay/clay/compare/v.1.0.0-alpha.15...v1.0.0-alpha.16)

**Merged pull requests:**

-   v1.0.0-alpha.15 [\#422](https://github.com/liferay/clay/pull/422) ([jbalsas](https://github.com/jbalsas))
-   Add class to managmenttoolbar [\#421](https://github.com/liferay/clay/pull/421) ([marcoscv-work](https://github.com/marcoscv-work))
-   Add missing SoyDocs [\#420](https://github.com/liferay/clay/pull/420) ([carloslancha](https://github.com/carloslancha))
-   \[Site\] Updates previous lexiconcss site link [\#418](https://github.com/liferay/clay/pull/418) ([jbalsas](https://github.com/jbalsas))
-   Fix managementtoolbar styles [\#417](https://github.com/liferay/clay/pull/417) ([julien](https://github.com/julien))
-   Update README [\#416](https://github.com/liferay/clay/pull/416) ([julien](https://github.com/julien))
-   Update css classes for checkbox,list and radio [\#415](https://github.com/liferay/clay/pull/415) ([julien](https://github.com/julien))
-   Empty string for contentRenderers are mandatory to make it work in java [\#414](https://github.com/liferay/clay/pull/414) ([carloslancha](https://github.com/carloslancha))
-   Fix ClayPagination range when current page is last page [\#413](https://github.com/liferay/clay/pull/413) ([carloslancha](https://github.com/carloslancha))
-   Ensure that NODE_ENV variable is set to 'test' on all environments to avoid inconsistencies during Metal's render/attach lifecycle [\#411](https://github.com/liferay/clay/pull/411) ([robframpton](https://github.com/robframpton))

## [v.1.0.0-alpha.15](https://github.com/liferay/clay/tree/v.1.0.0-alpha.15) (2018-01-15)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.6...v.1.0.0-alpha.15)

## [v2.0.0-beta.6](https://github.com/liferay/clay/tree/v2.0.0-beta.6) (2018-01-12)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.5...v2.0.0-beta.6)

**Closed issues:**

-   Simplify loading-animation icon [\#407](https://github.com/liferay/clay/issues/407)
-   ClayLink styles [\#396](https://github.com/liferay/clay/issues/396)

## [v2.0.0-beta.5](https://github.com/liferay/clay/tree/v2.0.0-beta.5) (2017-12-25)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.4...v2.0.0-beta.5)

**Closed issues:**

-   ClayButton borderless [\#397](https://github.com/liferay/clay/issues/397)
-   Clay Buttons with icons has no padding [\#395](https://github.com/liferay/clay/issues/395)
-   Loading icons [\#394](https://github.com/liferay/clay/issues/394)
-   ClayCard List [\#393](https://github.com/liferay/clay/issues/393)
-   Feature Request - Alphbetical Sorting on Dropdown/up Menus [\#391](https://github.com/liferay/clay/issues/391)
-   ClayCard User image [\#390](https://github.com/liferay/clay/issues/390)
-   Clay User Card Sticker size [\#389](https://github.com/liferay/clay/issues/389)
-   ClayCard links [\#388](https://github.com/liferay/clay/issues/388)
-   ClayCards clickable area [\#387](https://github.com/liferay/clay/issues/387)
-   Active state nav-bar [\#381](https://github.com/liferay/clay/issues/381)

**Merged pull requests:**

-   Styles [\#403](https://github.com/liferay/clay/pull/403) ([marcoscv-work](https://github.com/marcoscv-work))
-   Landing page adjustments [\#401](https://github.com/liferay/clay/pull/401) ([marcoscv-work](https://github.com/marcoscv-work))
-   New Clay landing page [\#400](https://github.com/liferay/clay/pull/400) ([marcoscv-work](https://github.com/marcoscv-work))

## [v2.0.0-beta.4](https://github.com/liferay/clay/tree/v2.0.0-beta.4) (2017-12-04)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.26...v2.0.0-beta.4)

**Closed issues:**

-   List group notifications [\#386](https://github.com/liferay/clay/issues/386)
-   Uppercase in label-lg is optional [\#385](https://github.com/liferay/clay/issues/385)
-   v1.x atlas.css, lexicon-base.css, and bootstrap.css Glyphicon file paths point to the wrong directory [\#379](https://github.com/liferay/clay/issues/379)

## [v1.0.26](https://github.com/liferay/clay/tree/v1.0.26) (2017-11-28)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.3...v1.0.26)

**Closed issues:**

-   Plus button can be a button and a link [\#384](https://github.com/liferay/clay/issues/384)
-   Combination of btn-sm & btn-monospaced is vertically misaligned [\#380](https://github.com/liferay/clay/issues/380)
-   Executing a search via javascript [\#378](https://github.com/liferay/clay/issues/378)
-   Navigation bar variables pattern [\#377](https://github.com/liferay/clay/issues/377)

## [v2.0.0-beta.3](https://github.com/liferay/clay/tree/v2.0.0-beta.3) (2017-11-20)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.2...v2.0.0-beta.3)

## [v2.0.0-beta.2](https://github.com/liferay/clay/tree/v2.0.0-beta.2) (2017-11-10)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.1...v2.0.0-beta.2)

## [v2.0.0-beta.1](https://github.com/liferay/clay/tree/v2.0.0-beta.1) (2017-10-27)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-beta.0...v2.0.0-beta.1)

## [v2.0.0-beta.0](https://github.com/liferay/clay/tree/v2.0.0-beta.0) (2017-10-27)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.11...v2.0.0-beta.0)

**Merged pull requests:**

-   Misc: Don't run maven-publish task for now [\#376](https://github.com/liferay/clay/pull/376) ([pat270](https://github.com/pat270))

## [v2.0.0-alpha.11](https://github.com/liferay/clay/tree/v2.0.0-alpha.11) (2017-10-16)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.10...v2.0.0-alpha.11)

## [v2.0.0-alpha.10](https://github.com/liferay/clay/tree/v2.0.0-alpha.10) (2017-10-07)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.25...v2.0.0-alpha.10)

## [v1.0.25](https://github.com/liferay/clay/tree/v1.0.25) (2017-10-06)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.9...v1.0.25)

## [v2.0.0-alpha.9](https://github.com/liferay/clay/tree/v2.0.0-alpha.9) (2017-09-27)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.8...v2.0.0-alpha.9)

**Closed issues:**

-   Can we drop Flex Col Expand? [\#367](https://github.com/liferay/clay/issues/367)
-   v2-beta: Consolidate z-index variables in one place [\#357](https://github.com/liferay/clay/issues/357)
-   Clay API documentation page links targeting http instead of https [\#335](https://github.com/liferay/clay/issues/335)

## [v2.0.0-alpha.8](https://github.com/liferay/clay/tree/v2.0.0-alpha.8) (2017-09-01)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.7...v2.0.0-alpha.8)

**Closed issues:**

-   Can we drop bourbon? [\#368](https://github.com/liferay/clay/issues/368)
-   v2-beta: Remove btn-action [\#365](https://github.com/liferay/clay/issues/365)
-   v2-beta: breadcrumb-vertical from Lexicon 1.0 remove or keep it [\#362](https://github.com/liferay/clay/issues/362)
-   v2-beta: Toggle-card from Lexicon 1.0 remove or keep it [\#361](https://github.com/liferay/clay/issues/361)
-   v2-beta: Custom Forms from BS4 should be fully configurable through Sass variables [\#349](https://github.com/liferay/clay/issues/349)
-   v2-beta: Pager from BS3 remove or keep it [\#346](https://github.com/liferay/clay/issues/346)
-   v2-beta: Remove Font Awesome [\#342](https://github.com/liferay/clay/issues/342)

**Merged pull requests:**

-   Breadcrumb-horizontal dropped in clay to compact layer [\#363](https://github.com/liferay/clay/pull/363) ([marcoscv-work](https://github.com/marcoscv-work))
-   Toggle-card dropped in clay to compact layer [\#359](https://github.com/liferay/clay/pull/359) ([marcoscv-work](https://github.com/marcoscv-work))

## [v2.0.0-alpha.7](https://github.com/liferay/clay/tree/v2.0.0-alpha.7) (2017-08-28)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.6...v2.0.0-alpha.7)

## [v2.0.0-alpha.6](https://github.com/liferay/clay/tree/v2.0.0-alpha.6) (2017-08-18)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.5...v2.0.0-alpha.6)

## [v2.0.0-alpha.5](https://github.com/liferay/clay/tree/v2.0.0-alpha.5) (2017-08-11)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.4...v2.0.0-alpha.5)

**Closed issues:**

-   Alerts [\#356](https://github.com/liferay/clay/issues/356)
-   Progress bar [\#355](https://github.com/liferay/clay/issues/355)

## [v2.0.0-alpha.4](https://github.com/liferay/clay/tree/v2.0.0-alpha.4) (2017-08-05)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.24...v2.0.0-alpha.4)

## [v1.0.24](https://github.com/liferay/clay/tree/v1.0.24) (2017-08-04)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.3...v1.0.24)

**Closed issues:**

-   v2-beta: Toolbar component remove, keep, or convert to flex box [\#348](https://github.com/liferay/clay/issues/348)
-   v2-beta: Popover and Tooltips to BS4 [\#343](https://github.com/liferay/clay/issues/343)

## [v2.0.0-alpha.3](https://github.com/liferay/clay/tree/v2.0.0-alpha.3) (2017-08-01)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.2...v2.0.0-alpha.3)

**Closed issues:**

-   Sticker [\#354](https://github.com/liferay/clay/issues/354)
-   v2-beta: Dropdown convert positioning to BS4 [\#344](https://github.com/liferay/clay/issues/344)

## [v2.0.0-alpha.2](https://github.com/liferay/clay/tree/v2.0.0-alpha.2) (2017-07-24)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.1...v2.0.0-alpha.2)

## [v2.0.0-alpha.1](https://github.com/liferay/clay/tree/v2.0.0-alpha.1) (2017-07-24)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.23...v2.0.0-alpha.1)

## [v1.0.23](https://github.com/liferay/clay/tree/v1.0.23) (2017-07-21)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.22...v1.0.23)

**Closed issues:**

-   v2-beta: select.form-control styles from Atlas should also work in Lexicon Base [\#350](https://github.com/liferay/clay/issues/350)
-   BS4 compat layer - Buttons shadow [\#339](https://github.com/liferay/clay/issues/339)

**Merged pull requests:**

-   Updates clay site [\#352](https://github.com/liferay/clay/pull/352) ([zenorocha](https://github.com/zenorocha))

## [v1.0.22](https://github.com/liferay/clay/tree/v1.0.22) (2017-06-30)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.21...v1.0.22)

## [v1.0.21](https://github.com/liferay/clay/tree/v1.0.21) (2017-06-27)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.20...v1.0.21)

## [v1.0.20](https://github.com/liferay/clay/tree/v1.0.20) (2017-06-15)

[Full Changelog](https://github.com/liferay/clay/compare/v2.0.0-alpha.0...v1.0.20)

## [v2.0.0-alpha.0](https://github.com/liferay/clay/tree/v2.0.0-alpha.0) (2017-05-18)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.19...v2.0.0-alpha.0)

**Closed issues:**

-   why lexicon become clay？ [\#334](https://github.com/liferay/clay/issues/334)

## [v1.0.19](https://github.com/liferay/clay/tree/v1.0.19) (2017-04-03)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.18...v1.0.19)

**Closed issues:**

-   Tables should be able to be customized to v2 styles [\#315](https://github.com/liferay/clay/issues/315)
-   List Group should be able to be customized to v2 styles [\#314](https://github.com/liferay/clay/issues/314)

## [v1.0.18](https://github.com/liferay/clay/tree/v1.0.18) (2017-03-06)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.17...v1.0.18)

**Closed issues:**

-   Checkbox inputs don't align with their label when there is a lot of description text below [\#331](https://github.com/liferay/clay/issues/331)

**Merged pull requests:**

-   Misc: Comments in released files should contain the correct version [\#324](https://github.com/liferay/clay/pull/324) ([pat270](https://github.com/pat270))

## [v1.0.17](https://github.com/liferay/clay/tree/v1.0.17) (2017-02-21)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.16...v1.0.17)

## [v1.0.16](https://github.com/liferay/clay/tree/v1.0.16) (2017-02-14)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.15...v1.0.16)

## [v1.0.15](https://github.com/liferay/clay/tree/v1.0.15) (2017-01-12)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.14...v1.0.15)

## [v1.0.14](https://github.com/liferay/clay/tree/v1.0.14) (2016-12-09)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.13...v1.0.14)

## [v1.0.13](https://github.com/liferay/clay/tree/v1.0.13) (2016-12-01)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.12...v1.0.13)

**Closed issues:**

-   In Atlas theme, table-list class is not compatible with table-striped and table-hover classes [\#290](https://github.com/liferay/clay/issues/290)
-   Avoid label multi lines in toggles [\#289](https://github.com/liferay/clay/issues/289)

## [v1.0.12](https://github.com/liferay/clay/tree/v1.0.12) (2016-11-21)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.11...v1.0.12)

## [v1.0.11](https://github.com/liferay/clay/tree/v1.0.11) (2016-11-03)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.10...v1.0.11)

## [v1.0.10](https://github.com/liferay/clay/tree/v1.0.10) (2016-10-13)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.9...v1.0.10)

## [v1.0.9](https://github.com/liferay/clay/tree/v1.0.9) (2016-10-13)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.8...v1.0.9)

## [v1.0.8](https://github.com/liferay/clay/tree/v1.0.8) (2016-09-12)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.7...v1.0.8)

## [v1.0.7](https://github.com/liferay/clay/tree/v1.0.7) (2016-08-31)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.6...v1.0.7)

## [v1.0.6](https://github.com/liferay/clay/tree/v1.0.6) (2016-08-23)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.5...v1.0.6)

## [v1.0.5](https://github.com/liferay/clay/tree/v1.0.5) (2016-08-16)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.4...v1.0.5)

## [v1.0.4](https://github.com/liferay/clay/tree/v1.0.4) (2016-06-24)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.3...v1.0.4)

## [v1.0.3](https://github.com/liferay/clay/tree/v1.0.3) (2016-06-22)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.2...v1.0.3)

## [v1.0.2](https://github.com/liferay/clay/tree/v1.0.2) (2016-06-13)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.1...v1.0.2)

## [v1.0.1](https://github.com/liferay/clay/tree/v1.0.1) (2016-06-08)

[Full Changelog](https://github.com/liferay/clay/compare/v1.0.0...v1.0.1)

## [v1.0.0](https://github.com/liferay/clay/tree/v1.0.0) (2016-05-26)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.16...v1.0.0)

**Closed issues:**

-   Add variables for sidenav transition values [\#170](https://github.com/liferay/clay/issues/170)

## [v0.2.16](https://github.com/liferay/clay/tree/v0.2.16) (2016-05-20)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.15...v0.2.16)

## [v0.2.15](https://github.com/liferay/clay/tree/v0.2.15) (2016-05-17)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.14...v0.2.15)

**Closed issues:**

-   Add link to the website in the repo metadata [\#174](https://github.com/liferay/clay/issues/174)
-   Add a CDN usage for the CSS and JS files. [\#160](https://github.com/liferay/clay/issues/160)

## [v0.2.14](https://github.com/liferay/clay/tree/v0.2.14) (2016-04-19)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.13...v0.2.14)

## [v0.2.13](https://github.com/liferay/clay/tree/v0.2.13) (2016-04-18)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.12...v0.2.13)

## [v0.2.12](https://github.com/liferay/clay/tree/v0.2.12) (2016-03-25)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.11...v0.2.12)

## [v0.2.11](https://github.com/liferay/clay/tree/v0.2.11) (2016-03-23)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.10...v0.2.11)

## [v0.2.10](https://github.com/liferay/clay/tree/v0.2.10) (2016-03-08)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.9...v0.2.10)

## [v0.2.9](https://github.com/liferay/clay/tree/v0.2.9) (2016-03-01)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.8...v0.2.9)

## [v0.2.8](https://github.com/liferay/clay/tree/v0.2.8) (2016-02-25)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.7...v0.2.8)

**Closed issues:**

-   Textarea resizing can exceed its parent dimensions [\#140](https://github.com/liferay/clay/issues/140)
-   Firefox issue with fieldsets [\#138](https://github.com/liferay/clay/issues/138)
-   Control for asynchronous requests [\#124](https://github.com/liferay/clay/issues/124)

## [v0.2.7](https://github.com/liferay/clay/tree/v0.2.7) (2016-02-24)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.6...v0.2.7)

## [v0.2.6](https://github.com/liferay/clay/tree/v0.2.6) (2016-02-22)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.5...v0.2.6)

## [v0.2.5](https://github.com/liferay/clay/tree/v0.2.5) (2016-02-22)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.4...v0.2.5)

## [v0.2.4](https://github.com/liferay/clay/tree/v0.2.4) (2016-02-22)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.3...v0.2.4)

## [v0.2.3](https://github.com/liferay/clay/tree/v0.2.3) (2016-02-20)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.2...v0.2.3)

**Closed issues:**

-   modal styles causes document to scroll to top in Chrome [\#132](https://github.com/liferay/clay/issues/132)
-   When screen size is more than 1300px and the product menu is opened the sidenav-container has not space enough [\#129](https://github.com/liferay/clay/issues/129)

## [v0.2.2](https://github.com/liferay/clay/tree/v0.2.2) (2016-02-08)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.1...v0.2.2)

**Closed issues:**

-   Link source with live demo and live demo with source [\#123](https://github.com/liferay/clay/issues/123)
-   Sidenav plugin cannot be destroyed and recreated [\#116](https://github.com/liferay/clay/issues/116)

## [v0.2.1](https://github.com/liferay/clay/tree/v0.2.1) (2016-01-29)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.0...v0.2.1)

## [v0.2.0](https://github.com/liferay/clay/tree/v0.2.0) (2016-01-29)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.32...v0.2.0)

## [v0.1.32](https://github.com/liferay/clay/tree/v0.1.32) (2016-01-29)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.31...v0.1.32)

**Closed issues:**

-   The "x" displayed in IE for Navbar is inconsistent [\#117](https://github.com/liferay/clay/issues/117)

## [v0.1.31](https://github.com/liferay/clay/tree/v0.1.31) (2016-01-14)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.30...v0.1.31)

## [v0.1.30](https://github.com/liferay/clay/tree/v0.1.30) (2016-01-14)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.29...v0.1.30)

## [v0.1.29](https://github.com/liferay/clay/tree/v0.1.29) (2016-01-14)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.28...v0.1.29)

**Closed issues:**

-   Sidenav plugin follows the href of the toggler [\#109](https://github.com/liferay/clay/issues/109)
-   The styling of the Blogs Action example is not the right one when using links for the title [\#88](https://github.com/liferay/clay/issues/88)

## [v0.1.28](https://github.com/liferay/clay/tree/v0.1.28) (2015-12-23)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.27...v0.1.28)

## [v0.1.27](https://github.com/liferay/clay/tree/v0.1.27) (2015-12-22)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.26...v0.1.27)

## [v0.1.26](https://github.com/liferay/clay/tree/v0.1.26) (2015-12-22)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.25...v0.1.26)

**Closed issues:**

-   Dropdown menus extra classes not aligned in mobile version [\#91](https://github.com/liferay/clay/issues/91)
-   Increase size of checkbox in Atlas Theme [\#82](https://github.com/liferay/clay/issues/82)
-   Add support for placing text inside of the toggle's switch-handle [\#81](https://github.com/liferay/clay/issues/81)

## [v0.1.25](https://github.com/liferay/clay/tree/v0.1.25) (2015-12-04)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.24...v0.1.25)

## [v0.1.24](https://github.com/liferay/clay/tree/v0.1.24) (2015-12-02)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.23...v0.1.24)

## [v0.1.23](https://github.com/liferay/clay/tree/v0.1.23) (2015-12-02)

[Full Changelog](https://github.com/liferay/clay/compare/v0.2.0-0...v0.1.23)

**Closed issues:**

-   Add new Lexicon icons [\#80](https://github.com/liferay/clay/issues/80)
-   LPS-59141 - Floating Action Buttons always cover dropdowns and popovers [\#78](https://github.com/liferay/clay/issues/78)

## [v0.2.0-0](https://github.com/liferay/clay/tree/v0.2.0-0) (2015-11-12)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.22...v0.2.0-0)

## [v0.1.22](https://github.com/liferay/clay/tree/v0.1.22) (2015-11-12)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.21...v0.1.22)

## [v0.1.21](https://github.com/liferay/clay/tree/v0.1.21) (2015-10-30)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.20...v0.1.21)

## [v0.1.20](https://github.com/liferay/clay/tree/v0.1.20) (2015-10-28)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.19...v0.1.20)

## [v0.1.19](https://github.com/liferay/clay/tree/v0.1.19) (2015-09-30)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.18...v0.1.19)

## [v0.1.18](https://github.com/liferay/clay/tree/v0.1.18) (2015-09-24)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.17...v0.1.18)

## [v0.1.17](https://github.com/liferay/clay/tree/v0.1.17) (2015-09-16)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.16...v0.1.17)

## [v0.1.16](https://github.com/liferay/clay/tree/v0.1.16) (2015-09-03)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.15...v0.1.16)

**Closed issues:**

-   Btn-action-secondary should have z-index [\#11](https://github.com/liferay/clay/issues/11)
-   Create Flexbox version of the Cards component [\#9](https://github.com/liferay/clay/issues/9)
-   Document Sidebar component [\#8](https://github.com/liferay/clay/issues/8)

## [v0.1.15](https://github.com/liferay/clay/tree/v0.1.15) (2015-08-27)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.14...v0.1.15)

**Closed issues:**

-   Button group z-index causing issues in liferay-portal [\#7](https://github.com/liferay/clay/issues/7)

## [v0.1.14](https://github.com/liferay/clay/tree/v0.1.14) (2015-08-24)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.13...v0.1.14)

## [v0.1.13](https://github.com/liferay/clay/tree/v0.1.13) (2015-08-21)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.12...v0.1.13)

## [v0.1.12](https://github.com/liferay/clay/tree/v0.1.12) (2015-08-21)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.11...v0.1.12)

**Closed issues:**

-   Read-only inputs are partially obstructed by padding in Firefox [\#6](https://github.com/liferay/clay/issues/6)

## [v0.1.11](https://github.com/liferay/clay/tree/v0.1.11) (2015-08-17)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.10...v0.1.11)

## [v0.1.10](https://github.com/liferay/clay/tree/v0.1.10) (2015-08-06)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.9...v0.1.10)

## [v0.1.9](https://github.com/liferay/clay/tree/v0.1.9) (2015-08-03)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.8...v0.1.9)

## [v0.1.8](https://github.com/liferay/clay/tree/v0.1.8) (2015-07-28)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.7...v0.1.8)

## [v0.1.7](https://github.com/liferay/clay/tree/v0.1.7) (2015-07-27)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.6...v0.1.7)

## [v0.1.6](https://github.com/liferay/clay/tree/v0.1.6) (2015-07-16)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.5...v0.1.6)

## [v0.1.5](https://github.com/liferay/clay/tree/v0.1.5) (2015-07-14)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.4...v0.1.5)

## [v0.1.4](https://github.com/liferay/clay/tree/v0.1.4) (2015-07-08)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.3...v0.1.4)

## [v0.1.3](https://github.com/liferay/clay/tree/v0.1.3) (2015-06-29)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.2...v0.1.3)

## [v0.1.2](https://github.com/liferay/clay/tree/v0.1.2) (2015-06-29)

[Full Changelog](https://github.com/liferay/clay/compare/v0.1.1...v0.1.2)

## [v0.1.1](https://github.com/liferay/clay/tree/v0.1.1) (2015-06-25)

\* _This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)_
