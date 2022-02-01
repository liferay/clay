# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
