# Contributing to Clay

Want to contribute to Clay? There are a few things you need to know before you start sending out your pull requests or opening issues.

Here's a set of guidelines to contribute to Clay and its packages. Use your common sense and feel free to propose changes to this document in a pull request.

#### Table of contents

- [What should I know before I get started?](#what-should-i-know-before-i-get-started)
	- [Clay and Packages](#clay-and-packages)
- [How can I contribute?](#how-can-i-contribute?)
	- [Reporting Bugs](#reporting-bugs)
	- [Your First Pull Request](#your-first-pull-request)
	- [Proposing a Change](#proposing-a-change)
	- [Sending a Pull Request](#sending-a-pull-request)
- [Styleguides](#styleguides)
	- [Git Commit Messages](#git-commit-messages)
	- [JavaScript Styleguide](#javascript-styleguide)
	- [Documentation Styleguide](#documentation-styleguide)
- [Additional Notes](#additional-notes)
	- [Issue Labels](#issue-labels)

## What should I know before I get started?

### Clay and Packages

Clay repository follows the monorepo approach, all the major components that are the pillars of Clay are here in this repository.

- [clay-css](https://github.com/liferay/clay/blob/master/packages/clay-css) - The pillar to give colors and structure to Clay, where is the css and examples of HTML markups of the components.
- [clay-components](https://github.com/liferay/clay/blob/master/packages) - All components that follow clay-css marking and Lexicon use cases, developed on Metal.js with Soy (Closure templates) and the new and current components will be rewritten in React in version 3.0.
- [clayui.com](https://github.com/liferay/clay/blob/master/clayui.com) - Contains the source code and documentation powering clayui.com.

## How can I contribute?

### Reporting Bugs

This section guides you to submit an error report to Clay. Following these guidelines helps maintainers understand your report, reproduce the behavior, and find related reports.

#### Before submitting a bug report

- **Perform a [cursory search](https://github.com/search?q=is%3Aissue+repo%3Aliferay%2Fclay)** to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.

#### How do I submit a (good) bug report?

Bugs are tracked as [Github issues](https://github.com/liferay/clay/issues). Create a problem and provide the information you need to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible.
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** if necessary.
- **If the problem is related to performance or memory**, include a [CPU profile capture](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution) with your report.
- **If the problem only occurs in a specific browser** describe the version and name of the browser.

Provide more context by answering this question:

- **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

### Your First Pull Request

If you want to contribute to this project and do not know where to start [good first issues](https://github.com/liferay/clay/labels/good%20first%20issue) is a great place to start.

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.

### Proposing a Change

This section guides you through how to propose a public API change, make non-trivial changes to the implementation, or propose something new. Following these guidelines helps maintainers understand your suggestion and your point of view.

#### Before submitting a suggestion for improvement

- **Perform a cursory search** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How do I submit a suggestion for improvement?

Suggestions for enhancement or API changes are tracked as [Github issues](https://github.com/liferay/clay/issues). Please create a problem in this repository and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and explain which behavior you expected to see instead and why.
- **Provide details of the impact your change will cause** and how you will proceed with it.
- **Provide the pros and cons of your change.**
- **Provide at least one alternative for your change.**

### Sending a Pull Request

This section guides you how to proceed with sending a pull requests. The main staff is always monitoring pull requests. Following these guidelines helps the maintainers to do thorough review.

> Since travis is failing on executing **a11y tests** due to out of date suid you need to execute `npm run pa11y` locally before sending any pr to verify we're following accessibility standars.

#### Before sending a pull request

- Fork the repository and create your branch from **develop**.
- Run `yarn` at the root of the repository for the installation of project dependencies.
- Run the `yarn lerna` for the installation of the dependencies of each package and link them together.
- Run `yarn build` for the build all packages.
- **If you’ve fixed a bug or added code that should be tested, add tests!**
- Run `yarn test` to ensure the test suite passes.
- If you have modified a Soy file, make sure the tests passed by `yarn testSoy`.
- Run `yarn format` to format your code with prettier.
- Run `yarn lint` for make sure your code lints.
- Run `yarn mcritic` to follow the rules of soy.

## Styleguides

### Git Commit Messages

This section guides you through how to proceed with the messaging commit patterns in Clay. Following these guidelines helps us maintain order and ease of finding things.

#### Before you make a confirmation message

- Make sure that the problem or change you are making already exists.
- Consider starting the commit message with the word **Fixes** always following with reference to issue:
	- Fixes #0 - bla bla
	- Fixes #0, #1 - bla bla

### JavaScript Styleguide

All JavaScript must adhere to [Liferay JavaScript style guide](https://www.npmjs.com/package/eslint-config-liferay).

### Documentation Styleguide

- Use [JSDOC](http://usejsdoc.org/) for documentation in your JavaScript code.

#### Example

```javascript
/**
 * Data to add to the element.
 * @default undefined
 * @instance
 * @memberof ClayActionsDropdown
 * @type {?object}
 */
data: Config.object()
```

## Additional Notes

### Issue Labels

This section lists the labels we use to help us organize and track the issues.

Labels are organized by categories, such as labels that indicate where the problem is, resolution, status...

You may want to use [Github search](https://help.github.com/articles/searching-issues-and-pull-requests/) to find groups of issues you are interested in. For example, you may be interested in [open issues labeled as bugs, but only us clay components](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+clay-components%22+label%3A%22type%3A+bug%22&type=Issues). Use this to create more focused queries.

#### Categorization

| Category | Description |
|---|---|
| Component | The component reflects where the problem is located (e.g Clay Components, Charts...) |
| Type | Reflects issue type (e.g Bug...) |
| Status | Group of labels that reflect the progress of the issue |
| Resolution | Group of labels reflecting resolution of issue |
| Browser | When some issue only affects a specific browser |

#### Labels

| Label | **`liferay/clay`** | Category | Description |
|---|---|---|---|
| RFC | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3Arfc) | **None** | Similar to the RFC that are used in [React.js](https://github.com/reactjs/rfcs/), [Ember.js](https://github.com/emberjs/rfcs), [Gatsby.js](https://github.com/gatsbyjs/rfcs) and [Rust](https://github.com/rust-lang/rfcs), but to mark problems that are opened as a proposal for changes or to include new things |
| Infrastructure | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+infrastructure%22&type=Issues) | Component | They are used in problems that are related to monorepo infrastructure, build, process automation...  |
| Clay Components | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+clay-components%22&type=Issues) | Component | Issues related to Clay components. (e.g ClayCard, ClayLabel...) |
| Clay Charts | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+clay-charts%22&type=Issues) | Component | Issues related to components of Charts in soy or React |
| Generator Clay | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+generator-clay%22&type=Issues) | Component | Issues Related to Our Clay Component Generator |
| Clay CSS | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+clay-css%22&type=Issues) | Component | Issues related to Clay CSS |
| Documentation | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+documentation%22&type=Issues) | Component | Issues related to documentation in general, be clayui.com or other means... |
| Accessibility | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+accessibility%22&type=Issues) | Component | Issues related to accessibility in general |
| Clay site | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22comp%3A+clayui.com%22&type=Issues) | Component | Issues related to website infrastructure or other things outside the documentation |
| IE | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22browser%3A+ie%22&type=Issues) | Browser | Issues that happen specifically in IE browser |
| Chrome | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22browser%3A+chrome%22&type=Issues) | Browser | Issues that happen specifically in Chrome browser |
| Safari | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22browser%3A+safari%22&type=Issues) | Browser | Issues that happen specifically in Safari browser |
| Firefox | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22browser%3A+firefox%22&type=Issues) | Browser | Issues that happen specifically in Firefox browser |
| Breaking Change | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+breaking+change%22&type=Issues) | Type | Issues that caused some breaking change, whether in API or behavior change... |
| Bug | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+bug%22&type=Issues) | Type | Issues reporting that Component is not doing what should be done |
| Epic | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+epic%22&type=Issues) | Type | Issues that are opened as an Epic, that there are many things to be done |
| Discussion | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+discussion%22&type=Issues) | Type | Issues that are open for discussion of some change or to gather information |
| Enhancement | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+enhancement%22&type=Issues) | Type | Issues that are open to bring improvements or refinement of code |
| Feature Request | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+feature+request%22&type=Issues) | Type | Issues that are open to adding new features |
| Regression | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22type%3A+regression%22&type=Issues) | Type | Issues that are open that caused some regression |
| Blocked | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22status%3A+blocked%22&type=Issues) | Status | Issues that are being blocked by other tasks |
| Help Wanted | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22status%3A+help+wanted%22&type=Issues) | Status | Issues that are in need of some help |
| Next Release | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22status%3A+next-release%22&type=Issues) | Status | Issues that will enter into the next release |
| Duplicate | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22resolution%3A+duplicate%22&type=Issues) | Resolution | Issues that are duplicates |
| Wontfix | [search](https://github.com/search?q=is%3Aopen+is%3Aissue+repo%3Aliferay%2Fclay+label%3A%22resolution%3A+wontfix%22&type=Issues) | Resolution | Issues that will no longer be worked on |