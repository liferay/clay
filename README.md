# 🏺 [Clay](https://clayui.com/) &middot; [![Build Status](https://travis-ci.org/liferay/clay.svg?branch=master)](https://travis-ci.org/liferay/clay) [![Coverage Status](https://coveralls.io/repos/github/liferay/clay/badge.svg)](https://coveralls.io/github/liferay/clay)

Clay is Liferay's web implementation of [Lexicon Experience Language](https://liferay.design/lexicon). Built with Bootstrap as a foundation, it's comprised of HTML, CSS, and JS.

**🚨This Branch contains the version of Clay v3, if you are looking for the components in Metal.js visit the [2.x branch](https://github.com/liferay/clay/tree/2.x)**

## Packages

Clay repository follows the monorepo approach, all the major components that are the pillars of Clay are here in this repository.

### [Clay Css](./packages/clay-css)

The pillar to give colors and structure to Clay, where is the css and examples of HTML markups of the components.

### [Clay Components](./packages)

All components that follow clay-css marking and Lexicon use cases, developed on [React.js](http://reactjs.org)

### [Clayui.com](./clayui.com)

Contains the source code and documentation powering [clayui.com](https://clayui.com/).

## Browser support

![Internet Explorer 11](https://img.shields.io/badge/IE-11-green.svg?style=flat)
![Google Chrome Last 2](https://img.shields.io/badge/Chrome-Last_2-green.svg?style=flat)
![Microsoft Edge Latest](https://img.shields.io/badge/Edge-Latest-green.svg?style=flat)
![Mozilla Firefox Last 2 and 52](https://img.shields.io/badge/Firefox-Last_2%20and_v52-green.svg?style=flat)
![Opera Latest](https://img.shields.io/badge/Opera-Latest-green.svg?style=flat)
![Safari Last 2](https://img.shields.io/badge/Safari-Last_2-green.svg?style=flat)
![Chrome Android](https://img.shields.io/badge/Chrome_Android-Latest-green.svg?style=flat)
![Safari iOS Latest](https://img.shields.io/badge/Safari_iOS-Latest-green.svg?style=flat)

## Documentation

You can find the Clay documentation on the [site](https://clayui.com/docs).

-   [Getting Started](https://clayui.com/docs/get-started/index.html)
-   [Components](https://clayui.com/docs/components/index.html)
-   [CSS Framework](https://clayui.com/docs/css/index.html)
-   [Blog](https://clayui.com/blog/2019/10/25/introducing-clay-v3.html)

You can improve by sending pull requests to this repository.

## Installation

Clay is available as the `clay` package in npm for components and for css like `clay-css`. It is also available on a [CDN](https://cdn.jsdelivr.net/npm/clay/lib/js/clay.js) for components and for css, [check](https://cdn.jsdelivr.net/npm/clay/lib/css/atlas.css). But if you just want the separate components, it's also available in the npm as [clay-](https://www.npmjs.com/search?q=clay-).

See the [Getting Started](https://clayui.com/docs/get-started/index.html) guide for more information.

## Migration Guides

Do you already have the Clay v2 components implemented in your project? These handy guides will help you perform the migration from [Clay v2](https://v2.clayui.com) to [v3](https://clayui.com).

-   [Migrate the Clay components from v2 to v3](https://clayui.com/docs/get-started/migrate-the-clay-components-from-v2-to-v3.html)

## Contributing

Feel free to open up problems or send pull requests. We will always be looking at these problems and we will be responding whenever possible.

> Before opening a issue make sure it exists.

See the [contribution guide](/CONTRIBUTING.md) for more details.

### Setup

#### Packages

1. Install NodeJS >= [v6.11.0](http://nodejs.org/dist/v6.11.0/), if you don't have it yet.

2. Install global dependencies:

```
[sudo] npm install -g yarn
```

3. Install project dependencies:

```
yarn
```

4. Install dependencies for each package and link them together:

```
yarn lerna
```

5. Build all packages

```
yarn build
```

6. Start storybook server

```
yarn workspace @clayui/css run build && yarn storybook
```

7. Run tests:

```
yarn test
```

8. Update snapshots:

```
yarn run jest --u
```

#### clayui.com

To contribute to the documentation and the site in general, you can try to run locally to test your changes:

1. Move to the site folder

```
cd clayui.com
```

2. Install dependencies:

```
yarn
```

3. Run in development environment

```
yarn develop
```

Run clayui.com on Local LAN

```
yarn develop -H 0.0.0.0
```

If you want to test in a production environment so that you do not take risks of inconsistencies, in the root folder:

```
yarn site
```

## License

BSD License © Liferay, Inc.
