---
title: "Introduction"
---

<div class="alert alert-info">Anxious to quickly add Clay to your project and start building amazing UIs?</div>

<article id="introduction">

## Quick Start

To test the Clay components for web with a minimal configuration, load the CSS and JS from the JSDelivr.

```html
https://cdn.jsdelivr.net/npm/clay/lib/css/atlas.css
https://cdn.jsdelivr.net/npm/clay/lib/js/clay.js
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

### Step 1: Set up webpack

Let's use the [webpack](https://webpack.js.org/) to demonstrate how you will group our JavaScript and Sass. First create a folder with a name you want, and then create a package.json that looks like this:

```json
{
    "scripts": {
        "start": "webpack-dev-server"
    }
}
```

The following dependencies are required in your project:

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

Run the command below to install the required dependencies:

```bash
npm install --save-dev babel-core babel-loader babel-preset-env webpack webpack-dev-server webpack-cli css-loader sass-loader node-sass extract-loader file-loader
```

To demonstrate this, consider creating an `index.html` file. This HTML file needs to include CSS and compiled JavaScript. Create this simple "Hello world!" in `index.html`:

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

And it opens `http://localhost:8080` in the browser. You should see `Hello World!` written in red.

### Step 2: Install Clay component

You can install Clay packages individually or install all packages at once. See [Importing the JS Component](/docs/getting_started/importing-the-js-component.html) for more information. In this example, we will install only the `ClayBadge` package, using the command below:

```bash
npm install --save clay-badge
```

Next, import `ClayBadge` in `app.js`:

```javascript
import ClayBadge from 'clay-badge';
import './app.scss';
```

If you look at the screen, you will see the same thing as before. Next you can learn how to use the `ClayBadge`.

### Step 3: Install Clay CSS

To install `clay-css`, run the command below:

```bash
npm install --save clay-css
```

In order for `sass-loader` to see Clay's `.scss` files, you must configure `webpack.config.js` with the `sass-loader` loader options. This requires the `clay-css` and `path` package from node.js:

```javascript
const clay = require('clay-css');
const path = require('path');
```

Configure `webpack.config.js` to use the `sass-loader` loader, so it can recognize the clay `.scss` files:

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

Then import the `clay-css` in your `app.scss`:

```scss
@import "atlas";
```

If you look in the browser, you can already see some `clay-css` changes in action.

### Step 4: Using component of Clay

Since we already have our component imported into our JS, we can start using it. To do this, we must create an instance of our component in `app.js`:

```javascript
// ...

const clayBadge = new ClayBadge({});
```

At this point, you may see some errors in the browser console. This is expected. Some components require certain properties to render. In this example, you can set the `label` property to resolve the errors:

```javascript
// ...

const clayBadge = new ClayBadge(
    {
        label: 'myAwesomeClayBadge :)'
    }
);
```

If you look at the browser now, you can see our first Clay component rendered. Isn't it incredible !?

This demo is available on github, feel free to tinker.

> [Getting started with Clay](https://github.com/matuzalemsteles/clay-examples/tree/master/examples/getting-started-clay)

## Components

Go to our [components section](/docs/components) to see what you can build with Clay!

</article>