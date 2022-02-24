# Tests coverage

This document describes how we approach Clay testing strategies, recommendations, and best practices for testing components. The tests are very focused on unit tests rather than E2E tests, firstly because unit tests are very cheap and we can mirror most component behavior with unit tests, some are covered with poshi tests in the DXP itself and secondly because it is only components and not a complete React application we don't see a need to implement E2E tests like using [cypress](https://www.cypress.io/) for example.

## Approach

The vast majority of components in Clay are oriented to UI composition, very much related to markup and more complex ones such as TreeView, DropDown, DatePicker, TimePicker, ColorPicker... which have more usage behaviors, whether dealing with accessibility issues, shortcuts, focus control and more complex interactions.

All components have detailed behavior and UI specifications written by the [Lexicon](https://liferay.design/lexicon/) design team, we use this as a basis for creating test suites.

The components in Clay use strategies based on the definition of suites, that is, each suite has a purpose.

-   `BasicRendering` Suite only covers cases of component compositing and customization, e.g different compositing of the component, the tests here may be more markup related than interaction.
-   `IncrementalInteractions` The suite covers the behaviors that are expected using Lexicon as a basis and simulates an "end-to-end" interaction within the component.
-   `Internationalization` Optional but dedicated suite to test components for internationalization cases, such as DatePicker.

Basically `BasicRendering` suites can have more use of markup snapshot to cover different component settings and variations if any.

## Threshold

Achieving healthy test coverage that is not just numbers is quite challenging, so Clay is taking an organic coverage growth approach instead of setting a fixed value to always stay above that value, which would create some pitfalls.

-   Create a false sense of security when being over the limit and we don't care about testing as long as we are over the limit.
-   Create the opposite feeling when it's below and want to add more tests, regardless of test quality, to hit the threshold.
-   We could stop adding tests when we hit the threshold.

In order to avoid these pitfalls, we can set the threshold as close as possible to our current code coverage, then organically adjust the threshold when finishing a story/epic, new behaviors or features.

Some examples of scenarios that could be used to adjust code coverage:

-   "I realize changes are failing the threshold but another test would be unreasonable." Adjust threshold down.
-   "My changes have increased the overall coverage." Adjust threshold up so we can still be notified if future coverage decreases.

The scenarios allow us to keep the threshold as close to actual coverage as possible so we have a reminder to check if another test is necessary when we’re ready to deliver the code to production.

Consider keeping a minimum threshold of 50% for packages with low coverage with the exception of some packages that are being deprecated for example and the other packages add the organic threshold.
