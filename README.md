<div align="center">
    <div>
        <img src="https://github.com/liferay/clay/blob/6ae276a67e7e2c9954d72dcae15266b2458f58f9/clayui.com/static/images/clay_logo_w.png?raw=true"> 
    </div>
    <div>
        <h1>
            <a href="https://clayui.com/">
                Clay
            </a>
        </h1>
    </div>

![Clay CI](https://github.com/liferay/clay/actions/workflows/main.yml/badge.svg) [![Coverage Status](https://coveralls.io/repos/github/liferay/clay/badge.svg)](https://coveralls.io/github/liferay/clay)

</div>

Clay is Liferay's web implementation of the [Lexicon Experience Language](https://liferay.design/lexicon). Built with Bootstrap as a foundation, it's comprised of HTML, CSS, and JS.

**🚨 This Branch contains the version of Clay v3, if you are looking for the components in Metal.js visit the [2.x branch](https://github.com/liferay/clay/tree/2.x)**.

## Contents

-   [Browser support](#browser-support)
-   [Packages](#packages)
-   [Documentation](#documentation)
-   [Migration Guides](#migration-guides)
-   [Setup](#setup)
-   [Troubleshooting Setup](#troubleshooting-setup)
-   [clayui.com](#clayuicom)
-   [Contributing](#contributing)
-   [License](#license)

## Browser support

![Google Chrome Last 2](https://img.shields.io/badge/Chrome-Last_2-green.svg?style=flat)
![Microsoft Edge Latest](https://img.shields.io/badge/Edge-Latest-green.svg?style=flat)
![Mozilla Firefox Last 2 and 52](https://img.shields.io/badge/Firefox-Last_2%20and_v52-green.svg?style=flat)
![Opera Latest](https://img.shields.io/badge/Opera-Latest-green.svg?style=flat)
![Safari Last 2](https://img.shields.io/badge/Safari-Last_2-green.svg?style=flat)
![Chrome Android](https://img.shields.io/badge/Chrome_Android-Latest-green.svg?style=flat)
![Safari iOS Latest](https://img.shields.io/badge/Safari_iOS-Latest-green.svg?style=flat)

## Packages

Clay repository follows the monorepo approach, all the major components that are the pillars of Clay are here in this repository.

-   **[Clay CSS](./packages/clay-css)**: The pillar to give colors and structure to Clay, where is the css and examples of HTML markups of the components.

-   **[Clay React Components](./packages)**: A set of components that use `clay-css` and Lexicon guidelines, developed with [React.js](http://reactjs.org)

-   **[clayui.com](./clayui.com)**: The source code for our documentation site.

## Documentation

You can find the Clay documentation on the [site](https://clayui.com/docs). Here are some useful links:

-   [Getting Started](https://clayui.com/docs/get-started/index.html)
-   [Components](https://clayui.com/docs/components/index.html)
-   [CSS Framework](https://clayui.com/docs/css/index.html)
-   [Blog](https://clayui.com/blog/2019/10/25/introducing-clay-v3.html)

## Migration Guides

Do you already have the Clay v2 components implemented in your project? These guides will help you perform the migration from [Clay v2](https://v2.clayui.com) to [v3](https://clayui.com).

-   [Migrate the Clay components from v2 to v3](https://clayui.com/docs/get-started/migrate-the-clay-components-from-v2-to-v3.html)

## Setup

To contribute to this project, here are the required steps to setup everything:

1. Clone this repository:

```
git clone https://github.com/liferay/clay.git
```

2. Download and install the latest lts version of [Node.js](https://nodejs.org/) for your operating system.

3. Install the required global dependencies:

```
npm install -g yarn
```

4. Install the project's dependencies:

```
yarn
```

4. Install the dependencies for each package and link them together:

```
yarn lerna
```

5. Build all packages:

```
yarn build
```

6. Compile all `clay-css` files and start the storybook server:

```
yarn workspace @clayui/css run build && yarn storybook
```

> Additionally, you can run the tests for all packages with the following command:

```
yarn test
```

## Troubleshooting Setup

The latest version of Python that is supported to build Clay locally is 3.10. There is an error when setting up the Clay project with Python 3.12.

```
ModuleNotFoundError: No module named 'distutils'
gyp ERR! configure error
gyp ERR! stack Error: gyp failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/clay/node_modules/node-gyp/lib/configure.js:325:16)
gyp ERR! stack     at ChildProcess.emit (node:events:519:28)
gyp ERR! stack     at ChildProcess._handle.onexit (node:internal/child_process:294:12)
gyp ERR! System Darwin 20.6.0
gyp ERR! command "/usr/local/bin/node" "/clay/node_modules/.bin/node-gyp" "rebuild"
gyp ERR! cwd /clay/node_modules/deasync
gyp ERR! node -v v20.15.1
```

You will need to switch to Python 3.10. Instructions for switching Python versions:

### Linux

https://linuxconfig.org/how-to-switch-between-python-versions-on-fedora-linux

### UNIX/MACOS

https://github.com/pyenv/pyenv

Once you are running the correct Python version, you need to clear the cache in the `/node_modules/` directory.

`rm -rf node_modules`

You should also clear the `/node_modules/` directory in Clay CSS.

`rm -rf packages/clay-css/node_modules`

Then re-run `yarn` in the `/clay/` directory and in `/packages/clay-css/`.

## clayui.com

To contribute to the documentation, you can run the site locally to test your changes:

1. Navigate to the site's directory:

```
cd clayui.com
```

2. Install the dependencies:

```
yarn
```

3. Run the site in a development environment:

```
yarn develop
```

> If you want to test in a production environment so that you do not take risks of inconsistencies, issue the following command in the root directory:

```
yarn site
```

## Contributing

Feel free to create issues or submit pull requests. Clay is actively maintained and your contributions are always welcome.

> Before opening a issue make sure it exists.

See the [contribution guide](/CONTRIBUTING.md) for more details.

## License

BSD License © Liferay, Inc.
