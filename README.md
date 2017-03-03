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

5. Build all packages

  ```
  lerna run build
  ```

6. Start a local server on port 4000

  ```
  npm run start
  ```

7. Run tests:

  ```
  lerna run test
  ```