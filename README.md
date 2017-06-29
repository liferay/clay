# metal-clay-components

## Setup

1. Install NodeJS >= [v6.11.0](http://nodejs.org/dist/v6.11.0/), if you don't have it yet.

2. Install lerna global dependency:

  ```
  [sudo] npm install -g 2.0.0-rc.5
  ```

3. Run the bootstrap script to install local dependencies and link packages together:

  ```
  npm run bootstrap
  ```

4. Install local dependencies

  ```
  npm install
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
