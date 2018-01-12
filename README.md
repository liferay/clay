# metal-clay-components

[![Build Status](https://travis-ci.org/metal/metal-clay-components.svg?branch=master)](https://travis-ci.org/metal/metal-clay-components)

[![Coverage Status](https://coveralls.io/repos/github/metal/metal-clay-components/badge.svg)](https://coveralls.io/github/metal/metal-clay-components)

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