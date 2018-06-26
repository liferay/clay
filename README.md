# 🏺 [Clay](https://clayui.com/) &middot; [![Build Status](https://travis-ci.org/liferay/clay.svg?branch=master)](https://travis-ci.org/liferay/clay) [![Coverage Status](https://coveralls.io/repos/github/liferay/clay/badge.svg)](https://coveralls.io/github/liferay/clay)

Clay is Liferay's web implementation of [Lexicon Experience Language](https://lexicondesign.io/). Built with Bootstrap as a foundation, it's comprised of HTML, CSS, and JS.

## Packages

Clay repository follows the monorepo approach, all the major components that are the pillars of Clay are here in this repository.

### [Clay Css](./packages/clay-css)

The pillar to give colors and structure to Clay, where is the css and examples of HTML markups of the components.

### [Clay Components](./packages)

All components that follow clay-css marking and Lexicon use cases, developed on [Metal.js](https://metaljs.com/) with [Soy (Closure templates)](https://developers.google.com/closure/templates/docs/commands).

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

You can find the Clay documentation on the [site](https://clayui.com/docs/components/alerts.html).

* [Getting Started](https://clayui.com/docs/getting-started/introduction.html)
* [Layout](https://clayui.com/docs/layout/grid.html)
* [Components Library](https://clayui.com/docs/components/alerts.html)
* [News](https://clayui.com/docs/news/)

You can improve by sending pull requests to this repository.

## Examples

We have several examples on the [site](https://clayui.com/docs/components/alerts.html). Here's the first one to get you started:

```soy
{call ClayButton.render}
    {param label: 'Primary' /}
    {param type: 'button' /}
{/call}
```

This example render a "Primary" button on the page, following [Lexicon](https://lexicondesign.io/docs/patterns/buttons.html) patterns.

You will notice that we use a [Soy (Closure templates)](https://developers.google.com/closure/templates/docs/commands) template system that is built on top of [Metal.js](http://metaljs.com/), but if you do not feel comfortable feel free to use WebComponents 😉.

```html
<clay-button label="Primary" type="button"></clay-button>
```
It will do the same.

Each package contains a page with demos, check.

## Installation

Clay is available as the `clay` package in npm for components and for css like `clay-css`. It is also available on a [CDN](https://cdn.jsdelivr.net/npm/clay/lib/js/clay.js) for components and for css, [check](https://cdn.jsdelivr.net/npm/clay/lib/css/atlas.css). But if you just want the separate components, it's also available in the npm as [clay-](https://www.npmjs.com/search?q=clay-).

See the [Getting Started](https://clayui.com/docs/getting-started/introduction.html) guide for more information.

Even if your application does not use the framework [Metal.js](https://metaljs.com/) Clay is flexible and can be used as WebComponents see some examples with:

* [Angular](https://github.com/matuzalemsteles/clay-examples/blob/master/examples/angular-with-clay)
* [React](https://github.com/matuzalemsteles/clay-examples/blob/master/examples/react-with-clay)
* [Vue](https://github.com/matuzalemsteles/clay-examples/blob/master/examples/vue-with-clay)

## Contributing

Feel free to open up problems or send pull requests. We will always be looking at these problems and we will be responding whenever possible.

> Before opening a issue make sure it exists.

### Good First Issues

If you want to contribute to this project and do not know where to start [good first issues](https://github.com/liferay/clay/labels/good%20first%20issue) is a great place to start.

### Setup

1. Install NodeJS >= [v6.11.0](http://nodejs.org/dist/v6.11.0/), if you don't have it yet.

2. Install global dependencies:

  ```
  [sudo] npm install -g yarn
  ```

3. Install project dependencies:

  ```
  yarn install
  ```

4. Install dependencies for each package and link them together:

  ```
  npm run lerna
  ```

5. Build all packages

  ```
  npm run build
  ```

6. Start a local server on port 4000

  ```
  npm run start
  ```

7. Run tests:

  ```
  npm run test
  ```

### Important
Since travis is failing on executing a11y tests due to out of date suid you need to execute `npm run a11y` locally before sending any pr to verify we're following accessibility standars.

## License

BSD License © Liferay, Inc.