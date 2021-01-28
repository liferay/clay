# Contributing to Clay

Want to contribute to Clay? There are a few things you need to know before you start sending your pull requests or opening issues.

Here's a set of guidelines to contribute to Clay and its packages. Use your common sense, and feel free to propose changes to this document in a pull request.

**For contributions to Clay v2, go to branch `2.x` and follow the [contribution guide](https://github.com/liferay/clay/blob/2.x/CONTRIBUTING.md).**

#### Table of Contents

-   [What Should I Know Before I Get Started?](#what-should-i-know-before-i-get-started)
-   [Clay and Packages](#clay-and-packages)
-   [How Can I Contribute?](#how-can-i-contribute?)
-   [Reporting Bugs](#reporting-bugs)
-   [Your First Pull Request](#your-first-pull-request)
-   [Proposing a Change](#proposing-a-change)
-   [Sending a Pull Request](#sending-a-pull-request)
-   [Style Guides](#style-guides)
-   [Git Commit Messages](#git-commit-messages)
-   [JavaScript Style Guide](#javascript-style-guide)
-   [CSS Guidelines](#css-guidelines)
-   [Documentation Style Guide](#documentation-style-guide)
-   [Additional Notes](#additional-notes)
-   [Issue Labels](#issue-labels)
-   [Release process](#release-process)

## What Should I Know Before I Get Started?

### Clay and Packages

The Clay repository follows the monorepo approach; the pillars of Clay, all the major components, are in this one repository.

-   [clay-css](https://github.com/liferay/clay/blob/master/packages/clay-css) - Provides the colors and structure for Clay. It contains the CSS and example HTML markup for each component.
-   [clay-components](https://github.com/liferay/clay/blob/master/packages) - The components that follow clay-css markup and Lexicon use cases. They are developed on React.js in version 3.x.
-   [clayui.com](https://github.com/liferay/clay/blob/master/clayui.com) - Contains the source code and documentation for clayui.com.

## How Can I Contribute?

### Reporting Bugs

This section shows you how to submit an error report to Clay. Follow these guidelines so maintainers can clearly understand your report, reproduce the behavior, and find related reports.

#### Before Submitting a Bug Report

-   **Check [existing issues](https://github.com/search?q=is%3Aissue+repo%3Aliferay%2Fclay)** to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit a Good Bug Report?

Bugs are tracked as [Github issues](https://github.com/liferay/clay/issues). Create an issue, and provide the information listed below so the maintainers can reproduce the problem:

-   **Use a clear and descriptive title** for the issue that identifies the problem.
-   **Describe the exact steps to reproduce the problem** in as much detail as possible.
-   **Describe the behavior you observed after following the steps**, and explain the problem with that behavior.
-   **Explain the desired behavior you expected and why.**
-   **Include screenshots and animated GIFs** if necessary.
-   **If the problem is related to performance or memory**, include a [CPU profile capture](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution) with your report.
-   **If the problem only occurs in a specific browser**, specify the name and version of the browser.

Provide more context by answering this question:

-   **Can you reliably reproduce the issue?** If not, provide details about how frequently the problem occurs and under which conditions it normally happens.

### Your First Pull Request

If you want to contribute to this project but you don't know where to begin, issues with the "[good first issue](https://github.com/liferay/clay/labels/good%20first%20issue)" label are a great place to start.

If you decide to fix an issue, please check the comment thread first to make sure that no one else is working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t duplicate your effort.

### Proposing a Change

This section shows you how to propose a public API change, make non-trivial changes to the implementation, or propose something new. Follow these guidelines so maintainers can clearly understand your suggestion and your point of view.

#### Before Submitting a Suggestion for Improvement

-   **Check existing suggestions** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit a Suggestion for Improvement?

Suggestions for enhancement or API changes are tracked as [Github issues](https://github.com/liferay/clay/issues). Create an issue in this repository and provide the following information:

-   **Use a clear and descriptive title** for the issue that states your suggestion.
-   **Provide a step-by-step description of the suggested enhancement** in as much detail as possible.
-   **Describe the current behavior**, and explain the behavior you want to see instead and why.
-   **Provide details of the impact your change will make** and how you will use it.
-   **Provide the pros and cons of your change.**
-   **Provide at least one alternative for your change.**

### Sending a Pull Request

This section shows you how to send a pull request. The main staff are always monitoring pull requests, so rest assured that they will review yours. Follow these guidelines so the maintainers can complete a thorough review of your request.

> Be sure to check the accessibility tab of the Storybook to ensure accessibility tests are going pass.

#### Before Sending a Pull Request

-   Fork the repository and create your branch from **master**.
-   Run `yarn` at the root of the repository to install the project dependencies.
-   Run `yarn lerna` to install the dependencies of each package and link them together.
-   Run `yarn build` to build all packages.
-   **If you’ve fixed a bug or added code that should be tested, add tests!**
-   Run `yarn test` to ensure the test suite passes.
-   Run `yarn format` to format your code with Prettier.
-   Run `yarn lint` to make sure your code lints.

## Style Guides

### Git Commit Messages

This section shows you how to write commit messages in Clay. Follow these guidelines to help us maintain order and make it easier to locate your changes.

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

```
<type>(<scope>): <subject>
```

The header is mandatory and the scope of the header is optional.

> Clay follows the "[Conventional Commits](https://www.conventionalcommits.org/)" specification.

#### Type

-   **feat**: A new feature
-   **fix**: A bug fix
-   **docs**: Documentation-only changes
-   **refactor**: A code change that neither fixes a bug nor adds a feature
-   **chore**: Changes in the build process, auxiliary tools, libraries, tests or formatting

#### Scope

The scope could be anything specifying place of the commit change. For example `feat(@clayui/dropdown)`, `feat(@clayui/css)`, `fix(clayui.com)`, `docs(Badge)`, `fix(useCache)`, etc...

### JavaScript Style Guide

All JavaScript must adhere to the [Liferay JavaScript style guide](https://www.npmjs.com/package/eslint-config-liferay).

### CSS Guidelines

See guidelines for [contribution with CSS](https://github.com/liferay/clay/blob/master/packages/clay-css/CONTRIBUTING.md).

### Documentation Style Guide

Clay uses [TypeScript](https://www.typescriptlang.org/), obviating the need to write explicit [JSDOC](http://usejsdoc.org/) annotations for parameter and return types. We still write descriptions, however, for `interface`, `type`, `enum` etc to make it easier to use components.

```typescript
interface IProps {
	/**
	 * Default position of menu element. Values come from `metal-position`.
	 */
	alignmentPosition?: number;
}
```

## Additional Notes

### Issue Labels

This section lists the labels we use to help us organize and track the issues.

Labels are organized by categories, such as the component the problem affects, the resolution, the status...

You may want to use [Github search](https://help.github.com/articles/searching-issues-and-pull-requests/) to find groups of issues you are interested in. For example, you may be interested in [open bug issues in Clay components](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+clay-components%22+label%3A%22type%3A+bug%22&type=Issues). Use this to create more focused queries.

#### Categorization

| Category   | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| Component  | Specifies the component the problem affects (e.g Clay Components, Charts...) |
| Type       | Specifies the type of issue (e.g Bug...)                                     |
| Status     | Group of labels that reflect the progress of the issue                       |
| Resolution | Group of labels reflecting the resolution of the issue                       |
| Browser    | Identifies the specific browser the issue affects, if applicable             |

#### Labels

| Label           | **`liferay/clay`**                                                                                                                 | Category   | Description                                                                                                                                                                                                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RFC             | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3Arfc)                                       | **None**   | A proposal for changes or a request for new features (similar to the RFCs that are used in [React.js](https://github.com/reactjs/rfcs/), [Ember.js](https://github.com/emberjs/rfcs), [Gatsby.js](https://github.com/gatsbyjs/rfcs), and [Rust](https://github.com/rust-lang/rfcs)) |
| Infrastructure  | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+infrastructure%22&type=Issues)  | Component  | Monorepo infrastructure, build, process automation...                                                                                                                                                                                                                               |
| Clay Components | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+clay-components%22&type=Issues) | Component  | Clay components (e.g ClayCard, ClayLabel...)                                                                                                                                                                                                                                        |
| Clay Charts     | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+clay-charts%22&type=Issues)     | Component  | Components of Charts                                                                                                                                                                                                                                                                |
| Generator Clay  | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+generator-clay%22&type=Issues)  | Component  | Our Clay Component Generator                                                                                                                                                                                                                                                        |
| Clay CSS        | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+clay-css%22&type=Issues)        | Component  | Clay CSS                                                                                                                                                                                                                                                                            |
| Documentation   | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+documentation%22&type=Issues)   | Component  | Documentation in general, in clayui.com or elsewhere...                                                                                                                                                                                                                             |
| Accessibility   | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+accessibility%22&type=Issues)   | Component  | Accessibility issues                                                                                                                                                                                                                                                                |
| Clay site       | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+clayui.com%22&type=Issues)      | Component  | Website infrastructure or other things outside documentation that relate to the site                                                                                                                                                                                                |
| IE              | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22browser%3A+ie%22&type=Issues)           | Browser    | Occurs exclusively in IE browser                                                                                                                                                                                                                                                    |
| Chrome          | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22browser%3A+chrome%22&type=Issues)       | Browser    | Occurs exclusively in Chrome browser                                                                                                                                                                                                                                                |
| Safari          | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22browser%3A+safari%22&type=Issues)       | Browser    | Occurs exclusively in Safari browser                                                                                                                                                                                                                                                |
| Firefox         | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22browser%3A+firefox%22&type=Issues)      | Browser    | Occurs exclusively in Firefox browser                                                                                                                                                                                                                                               |
| Breaking Change | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+breaking+change%22&type=Issues) | Type       | Caused a breaking change in API or a change in behavior                                                                                                                                                                                                                             |
| Bug             | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+bug%22&type=Issues)             | Type       | Problems with Component behavior                                                                                                                                                                                                                                                    |
| Epic            | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+epic%22&type=Issues)            | Type       | Opened as an Epic (a collection of many related things to be done)                                                                                                                                                                                                                  |
| Discussion      | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+discussion%22&type=Issues)      | Type       | A discussion of some change or a request for information                                                                                                                                                                                                                            |
| Enhancement     | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+enhancement%22&type=Issues)     | Type       | A suggestion for improvements or refinement of code                                                                                                                                                                                                                                 |
| Feature Request | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+feature+request%22&type=Issues) | Type       | A suggestion for new features                                                                                                                                                                                                                                                       |
| Regression      | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+regression%22&type=Issues)      | Type       | Regressions                                                                                                                                                                                                                                                                         |
| Blocked         | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22status%3A+blocked%22&type=Issues)       | Status     | Blocked by other tasks                                                                                                                                                                                                                                                              |
| Help Wanted     | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22status%3A+help+wanted%22&type=Issues)   | Status     | Requires help                                                                                                                                                                                                                                                                       |
| Next Release    | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22status%3A+next-release%22&type=Issues)  | Status     | Will be available in the next release                                                                                                                                                                                                                                               |
| Duplicate       | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22resolution%3A+duplicate%22&type=Issues) | Resolution | Duplicates an existing issue                                                                                                                                                                                                                                                        |
| Wontfix         | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22resolution%3A+wontfix%22&type=Issues)   | Resolution | Will no longer be worked on                                                                                                                                                                                                                                                         |

## Release process

To publish a new version for all packages that have updated, follow these steps:

```bash
# Checkout latest
git checkout master

# Install dependencies and build css package
yarn
yarn workspace @clayui/css run build

# Make sure you have all of the tags from upstream.
git fetch $REMOTE --tags

# This updates each packages versions and makes proper version bumps
# based on its dependencies. The `--conventional-commits` flag should
# automatically determine what version each package should be updated to
lerna version --conventional-commits --no-push

# Create draft pull-request against `stable` (not intended to be merged)
# to the clay repo; this is to see CI green one last time.
# (Example below uses node-gh CLI tool)
gh pr --submit liferay --branch stable --draft

# Once CI is green, close the pull-request and merge changes to stable and master.
# If you want to see a preview first, use the `--dry-run` flag.
git push $REMOTE master --follow-tags
git push $REMOTE master:stable

# Publish packages to NPM
lerna publish from-package

# Note: If this last step breaks, you may try running `lerna publish from-git` instead.
```

> NOTE: Publishing new packages automatically with Lerna is sometimes a problem, if you have problems try to publish the package separately manually.

### Releasing individual packages

In a rare case you may want to release only one specific package. Follow these steps:

Note: this is pretty rare to only release a single package, make sure you are only doing this as a last resort. Typically you should be able to just release everything at once.

```bash
# Checkout latest
git checkout master

# Navigate to specific package
cd ./packages/$COMPONENT_DIR

# Look at the git history of the package and determine if it relies on any
# non-released code from other packages.
#
# If it relies on other packages, you must publish those dependencies first following
# these same steps (start at step 1 with the dependent package).
#
# After you have published any dependencies needed

# Update Version.
# Any feat commits since last release require a minor version.
# If only chore or fix commits, a patch is required.
yarn version

# Create draft pull-request against `stable` (not intended to be merged)
# to the clay repo; this is to see CI green one last time.
# (Example below uses node-gh CLI tool)
gh pr --submit liferay --branch stable --draft

# Once CI is green, close the pull-request and merge changes to stable and master.
# If you want to see a preview first, use the `--dry-run` flag.
git push $REMOTE master --follow-tags

# Publish to NPM.
# Make sure you are in the directory of the package you want to publish.
yarn publish
```

## Updating release in [liferay-portal](https://github.com/liferay/liferay-portal)

```bash
# Navigate
cd {PORTAL_ROOT}/modules/apps/frontend-taglib/frontend-taglib-clay

# Update clay dependencies in `package.json`
# Typically is easiest to use a package like
# https://www.npmjs.com/package/npm-check-updates
#
# Note that sometimes there is a delay between publishing a package
# and it being seen on the registry. Make sure to verify all versions
# have been properly updated in the package.json.
ncu '/@clayui/' -u

# Run source formatter
#
# Often this will also update other files other than `package.json`
# files and the `yarn.lock`. Disregard changes to files other than those.
cd {PORTAL_ROOT}/portal-impl
ant format-source-all

# Update an dedup yarn.lock
cd {PORTAL_ROOT}/modules
yarn
npx yarn-deduplicate yarn.lock

# Verify yarn.lock stats
#
# If diff numbers are off (more + then - or viceversa),
# review the contents to find an explanation
git diff --stat yarn.lock


# Run unit tests locally
cd {PORTAL_ROOT}/modules
../gradlew packageRunTest

# Once all tests have passed, send pull request to
# https://github.com/liferay-frontend/liferay-portal
```
