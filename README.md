# metal-clay-components

[![Build Status](https://travis-ci.org/metal/metal-clay-components.svg?branch=master)](https://travis-ci.org/metal/metal-clay-components)

[![Coverage Status](https://coveralls.io/repos/github/liferay/clay/badge.svg)](https://coveralls.io/github/liferay/clay)

#### Browser support
| <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/archive/internet-explorer-tile_10-11/internet-explorer-tile_10-11.png" alt="IE" width="48px" height="48px"/></br> Internet Explorer | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/edge/edge_512x512.png" alt="Edge" width="48px" height="48px" /></br> Microsoft Edge | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/firefox/firefox_512x512.png" alt="Firefox" width="48px" height="48px" /></br> Mozilla Firefox | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/chrome/chrome_512x512.png" alt="Chrome" width="48px" height="48px" /></br> Google Chrome | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/opera/opera_512x512.png" alt="Opera" width="48px" height="48px" /></br> Opera | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/safari/safari_512x512.png" alt="Safari" width="48px" height="48px" /></br> Safari | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/archive/chrome-android_18-36/chrome-android_18-36_512x512.png" alt="Chrome Android" width="48px" height="48px" /></br> Chrome Android | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.8.0/archive/safari-ios_1-6/safari-ios_1-6_512x512.png" alt="Safari iOS Chrome" width="48px" height="48px" /></br> Safari iOS
| --- | --- | --- | --- | --- | --- | --- | ---
| 11 | latest | last 2<br/>v52 | last 2 | latest | last 2 | latest | latest

## Setup

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

## Important
Since travis is failing on executing a11y tests due to out of date suid you need to execute `npm run a11y` locally before sending any pr to verify we're following accessibility standars.
