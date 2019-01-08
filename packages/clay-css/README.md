<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
### Jump to Section

- [About](#about)
- [Building](#building)
  - [Clone the repo](#clone-the-repo)
  - [Install Node.js and NPM](#install-nodejs-and-npm)
  - [Install the NPM modules](#install-the-npm-modules)
  - [Modify files in src/](#modify-files-in-src)
  - [Build the static files](#build-the-static-files)
  - [View the files](#view-the-files)
  - [File Heading Options](#file-heading-options)
  - [Available Build Tasks](#available-build-tasks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## About
Clay is Liferay's web implementation of the Lexicon Design Language. It is built with HTML, CSS, and Javascript with [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/) as a foundation.

You can view the various components on [the Clay site](http://clayui.com).

<!-- TODO: provide link to Lexicon site for documentation on design patterns -->

## Building
If you would like to contribute, or make changes on your system you need to do the following:

### Clone the repo
Clone the repo to your computer

### Install Node.js (v4.6.0 LTS) and NPM
If you don't already have it installed. You can find more info here: http://nodejs.org/
Node and NPM come bundled together, so you only need to install one package.

### Install the NPM modules
Run `npm install` inside of the `packages/clay-css` directory

### Modify files in src/
The files are generated from the `src/` directory, however, most of the files you'd be interested in changing are in `src/content/`. Files can be either HTML (`.html`) or Markdown (`.md`).
Every file in `src/content/` has a heading at the top in YAML format that looks something like:


    ---
    title: Title of the Page
    ---

This section has a couple of options that can be leveraged for different purposes. Those will be covered below.

### Build the static files
Run `gulp build` to generate the static files.

### View the files
The generated files are placed into the `build/` directory.
Sass files in the `.scss` format are generated to CSS, Markdown files with the extension of `.md` are generated to HTML, and HTML files have one bit of processing applied, which is that HTML inside of triple ticks is escaped, like so:

    ```
	<div>Foo</div>
    ```

### File Heading Options
There are a couple of properties you can add to the headings of files, only one of which is required:

`title:`: **(Required)** This is used for the title of the page in the heading and in the navigation sidebar

`navIndex:`:  The navigation is sorted alphabetically by default, but if you pass a `navIndex:` property, it will manually sort the item into that position.
The property is any number, with `0` as the first position, but you can also pass in a keyword of `last` to force an item to the end.

`section:`: If you want to group multiple files into sections, in each of those files, pass the same title to the `section:` property. That title will be used for the section heading, and the files will be sorted in there. The `navIndex:` property works inside of sections as well.

### Available Build Tasks
You can pass these options when running `gulp`.

`build`: This is the default task, so running just `gulp` will fire off the build task.
This will generate all of the HTML/CSS/etc into the `build/` directory.

`watch`: Because running a script after every change can get tedious, run `gulp watch` to rebuild the files automatically as you change files.

`serve`: Starts a local server on port 3000 and also runs the watch task.
