# Clay internal documents

It consists of short documents that explain how flows, tools, how processes work on the Clay project.

Documents are not necessarily technical but any document that helps to understand certain motivations or that centralizes information that has a benefit for the entire team.

There are two types of documents, repository infrastructure documents, release cycles or explanations of internal tools, and [RFCs documents](#rfcs) that are used to discuss and centralize "substantial" changes in Clay that reflect on components or documentation that are sourced to users.

## Docs

-   [Developing components](developing_components.md)
-   [How are clayui.com pages created](creating_pages.md)
-   [Clay CSS Version History](clay_css_version_history.md)
-   [TreeView Performance Analysis](treeview_performance.md)
-   [Netlify deploy process](netlify_deploy.md)
-   [Tests coverage](tests.md)

## RFCs

Clay evolves rapidly and undergoes constant changes as the DXP platform evolves and takes new forms, new components are implemented over time or are evolved to add new behaviors, conversations get lost in various PRs and issues.

However, some of these changes and agreements need to be documented or pin so that we can take them into account before adding new behaviors or helping with decision making, they are easy to find and they are objective and enlightening.

The "RFC" (request for comments) process is intended to provide a consistent and controlled path for new features to enter the project.

### When to follow this process

You should consider using this process when you intend to make "substantial" changes to Clay or its documentation. Some examples that have benefited from an RFC are:

-   A new feature that creates a new API surface area that can be common across all components.
-   The removal of features that already shipped as part of the release channel.
-   The introduction of a new organization of documents or significant changes.

The RFC process is a great opportunity to draw more attention to your proposal. Even if the proposals appear to be "obvious" they can be improved significantly, since the team can discuss together with other people and they can give their opinion.

The RFC process can also be helpful to encourage discussions about a proposed feature as it is being designed, and incorporate important constraints into the design while it's easier to change, before the design has been fully implemented.

### What is the process

To add a new feature or make a major change to Clay components or change direction, an RFC must first be submitted and that it first merged as a markdown file. Once merged, the RFC is awaiting implementation.

-   Fork this repository
-   Copy `0000-proposal-template.md` for `proposals/0000-my-feature.md` (`my-feature` is descriptive)
-   Fill out the RFC
-   Submit a pull request. Like a pull request, the RFC will receive design feedback from the core team or key stakeholders.
-   The RFC must build consensus as it receives feedback.
-   The team will decide if the RFC makes sense and will benefit from being included in Clay.
-   An RFC can naturally generate long discussions and long feedback loops that reflect in the final changes to the proposal.
-   An RFC can be closed if no consensus is created between the author, people who commented on the RP, and the team.

### The RFC life-cycle

Once an RFC enters status awaiting implementation, authors can implement it and send the PR to Clay.

An RFC can be a proposal from other developers that do not involve the core team, if the author doesn't have time to work on the proposal when the RFC is merged this does not mean the team will implement it right away when it is merged but it does mean that the team agreed with that in principle and will set a priority so that it can be implemented.
