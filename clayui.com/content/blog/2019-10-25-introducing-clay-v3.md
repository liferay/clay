---
title: 'Clay v3: Introducing the new React Components'
author: [matuzalemsteles, bryceosterhaus]
---

We are pleased to announce the official release of Clay v3.0! This was a big change for us, involving a lot of structural changes, delivery methodologies, and rewriting out components in React.

You can see our [quick start guide](/docs/get-started/how-to-use-clay.html) that will help you get started with Clay.

<div class="nav-toc">

-   [New Site](#new-site)
-   [React Components](#react-components)
    -   [New Components](#new-components)
    -   [Principles](#principles)
-   [Deprecation warning for Clay v2](#deprecation-warnings-for-clay-v2)
-   [Release Process](#release-process)
    -   [SemVer](#semver)
-   [Migrate Guide](#migrate-guide)
-   [3.x Roadmap](#3.x-roadmap)
    -   [Data Display](#data-display)
    -   [Data Visualization](#data-visualization)
    -   [Layout and ClayManager components](#layout-and-claymanager-components)
-   [Acknowledgments](#acknowledgments)

</div>

### New Site

We introduced a visual redesign of our documentation and added more specific content for our components.

We are took the approach of merging CSS/Markup docs and React Component docs on the same page by using tabs, this will make it easier for you to find more relevant information on the same subject. By using tabs, we also make sure that you can find just React specific docs or just CSS/Markup as well.

All documents related to both React and CSS, are all within the same `Components` page. We've put it together to get documentation content co-located so that it can be found more easily.

### React Components

With the release of Clay v3.0.0 we are introducing a rewrite of our components in React, this imposes a major paradigm shift as the base framework changing from [Metal.js](http://metaljs.com/) to [React.js](https://reactjs.org/).

#### New components

In addition to the existing components we had in v2, we introduced some new components in v3.

| Component                                                                            | NPM Registry             |
| ------------------------------------------------------------------------------------ | ------------------------ |
| [Color Picker](/docs/components/color-picker.html)                                   | `@clayui/color-picker`   |
| [Date Picker](/docs/components/date-picker.html)                                     | `@clayui/date-picker`    |
| [Multi Step Nav](/docs/components/forms/multi-step-nav.html)                         | `@clayui/multi-step-nav` |
| [Breadcrumb](/docs/components/navigation/breadcrumbs.html)                           | `@clayui/breadcrumb`     |
| [Form](/docs/components/forms/form.html), [Input](/docs/components/forms/input.html) | `@clayui/form`           |
| [Vertical Nav, Nav](/docs/components/navigation/vertical-navigation.html)            | `@clayui/nav`            |
| [Panel](/docs/components/Panel.html)                                                 | `@clayui/panel`          |
| [Popover](/docs/components/popover.html)                                             | `@clayui/popover`        |
| [Tabs](/docs/components/tabs.html)                                                   | `@clayui/tabs`           |
| Slider                                                                               | `@clayui/slider`         |

#### Principles

With the framework change that impacts the way we use and think about the use of components, we developed these new components following React's [composition](https://reactjs.org/docs/composition-vs-inheritance.html) approach, you can read more about [Clay's fundamentals of composition in our documentation](/docs/foundations/composing.html) if you want to dig deeper.

### Deprecation warning for Clay v2

Since we have a major framework change from v2, we are starting to deprecate v2 components. This means that we will not be working on new features for v2 but will still continue to support bugs and security issues. We will detail in other posts about how the gradual depreciation of v2 will work.

### Release Process

We are adopting an independent release for packages in v3. By releasing packages independently it will make it easier to have gradual and specific releases for each component without having to bump the version for every other package as well. Since this is different than how we released v2, we will be testing and evaluating how this release process works and will be open to change if needed.

#### SemVer

We are adopting stricter [SemVer](https://semver.org/) versioning than we have in the past to make it easy for you to upgrade our packages with confidence.

```shell
MAJOR.MINOR.PATCH
```

We hope that by following semver more strictly that it will give developers more confidence in what to expect with each release. Our goal is to provide confidence in new releases by providing as much backwards compatibility as possible and providing sufficient warnings to give users the best experience.

### Migrate Guide

We have prepared a migration guide from v2 to v3. We hope this can ease the pain for those unfamiliar with React.js.

<div class="clay-ullist clay-ullist-margin-sm">

-   [Migrate the Clay components from v2 to v3](/docs/migration/migrate-the-clay-components-from-v2-to-v3.html)

</div>

### 3.x Roadmap

We are working on developer experience enhancements and delivering new features. We have a few things for our roadmap.

#### Data Display

To help teams create complex and extensible data displays, Clay offers different Table components that can be used and configured on a high level. However, we are collecting current and future use cases so that we can create documentation and examples to help developers effectively display data across different applications. As we discover common patterns and uses, we will further evaluate the best way to provide components for users.

#### Data Visualization

The proposal here is to analyze the problems we had with ClayCharts, many teams complained about its use, API, and inconsistencies with Lexicon. The goal is to listen to current users who worked with Charts to gather feedback and evaluate the best direction forward, whether that be a new charts library or adding API enhancements to our current implementation.

ClayCharts should allow for both simple use cases and also allow customization for further complexity.

An important point is performance, many onscreen charts should not be a problem, We will study the cases and help solve the performance issues.

The criteria to get there:

<div class="clay-ullist clay-ullist-margin-sm">

-   Performance
-   Flexibility
-   Consistency with Lexicon
-   Readable API

</div>

We are already working on [collecting feedbacks and you can leave your 2cents](https://github.com/liferay/clay/issues/2577).

#### Layout and ClayManager components

Still under research, we will be working to understand common component use cases that can become components in Clay that help develop Layouts more easily.

Since we have several contexts for different components it can be a bit annoying to add many nested contexts to your project's root application. We will work in an aggregating context that will bring all our contexts together in one place, making it easier for teams that use Clay as their base and not just some components.

### Acknowledgments

We are very excited about this release and are looking forward to see how people use Clay going forward, we want to thank everyone who used Clay v2 and who contributed by creating issues and sending PRs. Many thanks to all the comments we received about using Clay v2 that helped us to model this new version. Keeping this feedback is very important so that we can keep evolving and creating a great experience for end users and developers. We look forward to continue growth.

Special thanks to our Liferay Front End Infrastructure team who supported us throughout Clay's development and especially the revisions during the v3 release cycle.
