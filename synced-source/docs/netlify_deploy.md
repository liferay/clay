# Netlify deploy process

We use [Netlify](https://www.netlify.com/) to deploy [clayui.com](https://clayui.com) and a version of Storybook. The deployment process is very simple, and the build happens in the service itself so we don't have a Github Actions configuration.

A new version of clayui.com and storybook are generated in different scenarios:

-   **Deploy Previews**: Generated each time a new pull request is submitted
-   **next.clayui.com**: Generated each time the `master` branch is changed
-   **next.storybook.clayui.com**: Generated each time the `master` branch is changed
-   **clayui.com**: Generated each time the `stable` branch is changed
-   **storybook.clayui.com**: Generated each time the `stable` branch is changed

## Deploy Previews

All pull requests trigger a new build of clayui.com and storybook and generate a preview URL that allows you to view the changes without having to download the changes locally.

Netlify uses [Github Checks](https://docs.github.com/en/rest/reference/checks) to show information about the build status. During the build process, it's possible to click on `Details` to view the build output as well as the logs. Clicking on `Details` a second time will redirect to the corresponding preview that was generated.

> No need to be a member to view build status or preview

![All checks](https://user-images.githubusercontent.com/13750819/153067419-b0dad542-9d4b-4bdc-9378-aa7100d5a230.png)

[Learn more about Deploy Previews to Netlify](https://docs.netlify.com/site-deploys/deploy-previews/)

## Configuration

Netlify will observe all changes in the repository and trigger builds when necessary. We just need to specify which command to run and it will do the rest.

| Site                      | Build command                                                | Publish directory |
| ------------------------- | ------------------------------------------------------------ | ----------------- |
| clayui.com                | cd clayui.com && yarn build                                  | clayui.com/public |
| next.clayui.com           | cd clayui.com && yarn build                                  | clayui.com/public |
| storybook.clayui.com      | yarn workspace @clayui/css run build && yarn storybook:build | .storybook-static |
| next.storybook.clayui.com | yarn workspace @clayui/css run build && yarn storybook:build | .storybook-static |

[Learn more about Build Settings in Netlify](https://docs.netlify.com/configure-builds/overview/)
