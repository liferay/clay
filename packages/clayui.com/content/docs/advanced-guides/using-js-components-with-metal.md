---
title: "Using JS Components with Metal.js"
---

<article id="using-js-components-with-metal">

Clay Components are made according to Lexicon standards and built on top of the [Metal.js](https://metaljs.com/) framework, so you can use Clay Components in your JSX and SOY templates.

## Jsx

You can import your components as described in [Importing the JS Component](/docs/getting-started/importing-the-js-component.html). Consider the example below:


```javascript
import {ClayBadge} from 'clay';
```

You can call Clay components in your JSX templates just like you would call Metal.js components:

```javascript
import Component from 'metal-jsx';
import {ClayBadge} from 'clay';

class App extends Component {
    render() {
        return(
            <div>
                <h4>My Application with Clay<h4>
                <hr />
                <ClayBadge
                    id="myId"
                    label="badge"
                    style="danger"
                />
            </div>
        );
    }
};
```

## Soy

You can call Clay components in your SOY templates the same way you would call any SOY component. Consider the example below:

<div class="alert alert-warning" role="alert">
	<span class="alert-indicator">
		<svg aria-hidden="true" class="lexicon-icon lexicon-icon-warning-full">
			<use xlink:href="/vendor/lexicon/icons.svg#warning-full"></use>
		</svg>
	</span>
	<strong class="lead">Warning:</strong> Make sure you import the Clay component where you want to use it.
</div>

```javascript
import Component from 'metal-component';
import Soy from 'metal-soy';

import {ClayBadge} from 'clay';

class App extends Component {}

// more...
```
```soy
{namespace App}

{template .render}
    {call ClayBadge.render}
        {param id: 'myId' /}
        {param label: 'badge' /}
        {param style: 'danger' /}
    {/call}
{/template}
```

</article>