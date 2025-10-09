# Test coverage

This document describes how we approach testing components. We focus on unit tests rather than E2E tests, mainly because unit tests are cheap and enough to test most of our components behaviour and use cases. In [DXP](https://github.com/liferay/liferay-portal), [Poshi](https://qa-compendium.readthedocs.io/en/latest/poshi/index-poshi.html) is used for E2E and integration tests.

## Approach

Most components in Clay are oriented to UI composition (related to markup) or can be more complex in terms of interaction (e.g. focus control, accessibility issues, etc...).

All components have a detailed behavior and UI specifications written by the [Lexicon](https://liferay.design/lexicon/) design team, which we use as a basis for creating our test suites.

Components in Clay use strategies based on the definition of the test suites, where each suite has a purpose.

-   The `BasicRendering` suite only covers cases of component composition and customization (e.g. different composition of the component). These tests are more related to markup than interaction.
-   The `IncrementalInteractions` suite covers the expected behavior using Lexicon as a basis and simulates an "end-to-end" interaction.
-   The `Internationalization` suite is optional and used to test components for internationalization cases (e.g. `DatePicker`).

## Threshold

Achieving healthy test coverage is quite challenging, so Clay tries to follow an organic coverage growth approach instead of setting a fixed value, to avoid pitfalls such as:

-   Creating a false sense of security by being over the limit and not caring about the test itself as long as we are over the limit.
-   Creating the opposite feeling when it's below and adding more tests (regardless of their quality) to hit the threshold.
-   Stop adding tests when we hit the threshold.

In order to avoid these pitfalls, we can set the threshold as close as possible to our current code coverage, then organically adjust the threshold when finishing a story/epic, new behaviors or features.

Some examples of scenarios that could be used to adjust code coverage:

-   "I realize changes are failing to reach the threshold but another test would be unreasonable." Adjust threshold down.
-   "My changes have increased the overall coverage." Adjust threshold up so we can still be notified if future coverage decreases.

Theses scenarios allow us to keep the threshold as close as possible to actual coverage so we have a reminder to check if another test is necessary when we’re ready to deliver the code to production.

Consider keeping a minimum threshold of 50% for packages with low coverage with the exception of packages that are being deprecated.
