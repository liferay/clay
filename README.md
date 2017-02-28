# metal-quartz-components

## Setup

1. Install NodeJS >= [v0.12.0](http://nodejs.org/dist/v0.12.0/), if you don't have it yet.

2. Install lerna global dependency:

  ```
  [sudo] npm install -g lerna@2.0.0-beta.37
  ```

3. Run lerna to install local dependencies and link packages together:

  ```
  lerna bootstrap
  ```

4. Install local dependencies

  ```
  npm install
  ```

5. Run tests:

  ```
  npm test
  ```