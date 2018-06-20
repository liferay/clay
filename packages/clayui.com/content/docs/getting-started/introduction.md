---
title: "Introduction"
---

<div class="alert alert-info">Anxious to quickly add Clay to your project and start building amazing UIs?</div>

<article id="introduction">

## Quick Start

To test the Clay components for web with a minimal configuration, load the CSS and JS from the JSDelivr.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/clay/lib/css/atlas.css">
<script src="https://cdn.jsdelivr.net/npm/clay/lib/js/clay.js"></script>
```

Then include some element in the HTML page where you want to render the component...

```html
<div id="myElement"></div>
```

...and create a new instance of JavaScript:

```javascript
new clay.ClayButton(
    {
        label: 'My Button'
    }, 
    '#element'
);
```

## Using Clay with ES2015 and Sass

### Step 1: Setup webpack

Let's use the [webpack](https://webpack.js.org/) to demonstrate how you will group our JavaScript and Sass. First create a folder with a name you want and then create a `package.json` that looks like this:

```json
{
    "scripts": {
        "start": "webpack-dev-server"
    }
}
```

You will need all of these dependencies installed in your project:

* **babel-core**
* **babel-loader**: Compile JavaScript using babel
* **babel-preset-env**: Preset to compile for ES2015, ES2017...
* **webpack**: Sass package and JavaScript
* **webpack-dev-server**: Development server
* **webpack-cli**
* **sass-loader**: Loads a Sass file and compiles to CSS
* **node-sass**: Provides connection to Node.js to Sass
* **css-loader**: Resolves the `@import` and `url()` CSS paths
* **extract-loader**: Extract the CSS into a `.css` file
* **file-loader**: Serves the `.css` file as a public URL

To install all these dependencies consider running this command:

```bash
npm install --save-dev babel-core babel-loader babel-preset-env webpack webpack-dev-server webpack-cli css-loader sass-loader node-sass extract-loader file-loader
```

In order to demonstrate this our example consider creating an `index.html` file. This HTML file needs to include CSS and compiled JavaScript. Create this simple "Hello world!" in `index.html`.

```html
<html>
    <head>
        <title>My awesome Clay project!</title>
        <link rel="stylesheet" href="dist/bundle.css">
    </head>
    <body>
        <h1>Hello World!</h1>

        <script src="dist/build.js"></script>
    </body>
</html>
```

Create a simple Sass `app.scss` file:

```scss
body {
    color: red;
}
```

Then create a JS file called `app.js`. We are importing our `app.scss` so that the webpack can compile to `.css`. We will be adding more things to the front:

```javascript
import './app.scss';
```

Then configure the webpack to convert `app.scss` to `bundle.css` and `app.js` to `build.js`. Create a `webpack.config.js` file:

```javascript
module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: false,
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                        },
                    },
                    {
                        loader: 'extract-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            }
        ]
    }
};
```

To test the webpack configuration, run:

```bash
npm run start
```

And it opens `http://localhost:8080` in the browser. You should see `Hello World!` in red color.

### Step 2: Install Clay component

In order to install Clay you can choose to install the separate packages or install with all packages, see [Importing the JS Component](/docs/getting_started/importing-the-js-component.html). To proceed with this we will install only the `ClayBadge` package, consider running the command to do this:

```bash
npm install --save clay-badge
```

Next, do the import of `ClayBadge` in `app.js`:

```javascript
import ClayBadge from 'clay-badge';
import './app.scss';
```

If you look at the screen you will see the same thing as before, but we will go forward to know how to use the `ClayBadge`.

### Step 3: Install Clay css

To install `clay-css`, consider running the command:

```bash
npm install --save clay-css
```

In order for `sass-loader` to see Clay's `.scss` files, configure `webpack.config.js` the loader `sass-loader` options. You need to import the `clay-css` and path package from node.js to move on:

```javascript
const clay = require('clay-css');
const path = require('path');
```

Configure the loader `sass-loader` in `webpack.config.js` to see the clay:

```javascript
// ...
{
    loader: 'sass-loader',
    options: {
        includePaths: clay
            .includePaths
            .concat(
                path.join(
                    clay.includePaths[0],
                    '../fonts'
                )
            )
    }
}
// ...
```

Then do the `clay-css` import in your `app.scss`:

```text/scss
@import "atlas";
```

See the screen in the browser and you can already see some changes of `clay-css` in action.

### Step 4: Using component of Clay

Since we already have our component imported into our JS, we can start using it, for this we need to create an instance of our component in `app.js`:

```javascript
// ...

const clayBadge = new ClayBadge({});
```

If you try to look at the screen again you may see errors being triggered on the console, some components have required properties to render, consider passing `label` in this case to be rendered:

```javascript
// ...

const clayBadge = new ClayBadge(
    {
        label: 'myAwesomeClayBadge :)'
    }
);
```

If you look at the screen, you can see our first component of Clay being rendered on screen, incredible no !?

This demo is available on github, feel free to tinker.

> [Getting started with Clay](https://github.com/matuzalemsteles/clay-examples/tree/master/examples/getting-started-clay)

## Components

Go to our [components section](/docs/components) to see what you can build with Clay!

</article>