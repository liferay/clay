## About
These are Liferay's UX Guidelines.

They are meant to help explain our design principles, offer direction and best practices in building your web apps, and provide a documented HTML and CSS API.

## Building
If you would like to contribute to the guidelines, or make changes on your system you need to do the following:

### Clone the repo
Clone the repo to your computer

### Install Node.js and NPM
If you don't already have it installed. You can find more info here: http://nodejs.org/
Node and NPM come bundled together, so you only need to install one package.

### Install the NPM modules
Run `npm install` inside of the `liferay-ux-guidelines` directory

### Modify files in src/
The files are generated from the `src/` directory, however, most of the files you'd be interested in changing are in `src/content/`. Files can be either HTML (`.html`) or Markdown (`.md`).
Every file in `src/content/` has a heading at the top in YAML format that looks something like:
```
---
title: Title of the Page
---
```
This section has a couple of options that can be leveraged for different purposes. Those will be covered below.

### Build the static files
Run `node index` to generate the static files.

### View the files
The generated files are placed into the `build/` directory.
Sass files in the `.scss` format are generated to CSS, Markdown files with the extension of `.md` are generated to HTML, and HTML files have one bit of processing applied, which is that HTML inside of triple ticks is escaped, like so:

    ```
	<div>Foo</div>
    ```

## File Heading Options
There are a couple of properties you can add to the headings of files, only one of which is required:

`title:`: **(Required)** This is used for the title of the page in the heading and in the navigation sidebar

`navIndex:`:  The navigation is sorted alphabetically by default, but if you pass a `navIndex:` property, it will manually sort the item into that position.
The property is any number, with `0` as the first position, but you can also pass in a keyword of `last` to force an item to the end.

`section:`: If you want to group multiple files into sections, in each of those files, pass the same title to the `section:` property. That title will be used for the section heading, and the files will be sorted in there. The `navIndex:` property works inside of sections as well.

## Available Build Options
You can pass these options when running `node index`.

`-w, --watch`: Because running a script after every change can get tedious, run `node index -w` or `node index --watch` to rebuild the files automatically as you change files.

`--offline`: By default, we load the JavaScript from the AlloyUI.com CDN. However, there may be times you want to build and test the files, but don't have an available internet connection. If you pass --offline, it will load AlloyUI locally from the file system. It's not recommended to commit the build files generated with this option.

`-d, --dev`: By default, we generate the included JS to be production ready, but if you are trying to debug the JavaScript, the minified and combined source may be a bit of a pain.
Passing `-d` or `--dev` will load the unminified JS and the individual JS files, making it easier to debug.
As with `--offline`, it's not recommended to commit the build files generated with this option.