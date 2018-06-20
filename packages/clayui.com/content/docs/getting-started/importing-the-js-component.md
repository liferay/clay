---
title: "Importing the JS Component"
---

<article id="importing-the-js-component">

Clay is available as the `clay` package in [npm](https://www.npmjs.com/), the components are provided as Component/Metal.js classes that are used to provide a high fidelity component. You can import the Clay components in several ways depending on your Stack.

## Installation from NPM

Clay provides its components together and separate, if you feel you will not use all the components in your application, feel free to import the components separately or together.

* All components - `clay` package on npm.
* Separete components - `clay-` packages on npm.

**All components**

> Using [npm](https://www.npmjs.com/):

```shell
npm install clay --save
```

> Or [yarn](https://yarnpkg.com/lang/en/):

```shell
yarn add clay
```

**Separate components**

> Using [npm](https://www.npmjs.com/):

```shell
npm install clay-badge --save
```

> Or [yarn](https://yarnpkg.com/lang/en/):

```shell
yarn add clay-badge
```

## ES2015

```javascript
import {ClayBadge, ClayButton} from 'clay';
```

## Manual Instantiation

You can render a Clay component on whatever element you want if you are not using a framework.

```html
<div id="my-element"></div>
```

Make import in your application and manually instantiate the component by passing the required properties and the `id` of the element.

```javascript
import ClayBadge from 'clay-badge';

const badge = new ClayBadge(
    {
        label: 'My Badge'
    }, 
    '#my-element'
);
```

## CDN

Once added to your page, the Clay components are accessible globally on the page with all components.

> See on [CDN Links](/docs/getting_started/cdn-links.html).

```html
<div id="element"></div>

<script type="text/javascript">
    var clayButton = new clay.ClayButton(
        {
            label: 'My Button'
        }, 
        '#element'
    );
</script>
```

## Using Clay in soy and jsx

See advanced guides for [more](/docs/advanced_guides/using-js-components-with-metal.html).

</article>