# claycss.com

[![Built with Electric](https://img.shields.io/badge/built%20with-electric-f3c302.svg?style=flat)](http://electricjs.com)

## Setup

1. Make sure you have [node and npm](https://nodejs.org/en/download/) installed:

```sh
node -v && npm -v
```

2. Install our global dependencies:

```sh
[sudo] npm i -g electric-cli@alpha
```

3. Install our local dependencies:

```sh
npm i
```

## Usage

* Build the site, serve it locally, and watch for any changes:

```
electric run
```

* Deploy to production (send build files to `wedeploy` branch):

```
electric deploy
```

## Clay Development

As this site contains all documentation for Clay, npm scripts have been added to
speed up development for the
[https://github.com/liferay/clay](https://github.com/liferay/clay) repo.

### Setting up the watch task

```
npm run config
```

This will open a prompt that will ask you for the path to your clone of the
liferay/clay repo.

```
npm run watch
```

This will startup Electric's `electric run` command, as well as a custom watch
task that will rebuild everything in `src/styles` when changes are made to your
clone of liferay/clay.

If you want to rebuild the site without pointing to your clone of liferay/clay,
simple delete the `claycss.json` file that was generated in the project root.
