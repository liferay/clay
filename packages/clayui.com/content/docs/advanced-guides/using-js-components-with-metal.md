---
title: "Using JS Components with Metal.js"
path: "/docs/using-js-components-with-metal.html"
---

<article id="using-js-components-with-metal">

Clay Components is made according to Lexicon standards and built on top of the [Metal.js](https://metaljs.com/) framework, so you can take advantage of Clay's components in your two template systems.

## Jsx

You can import your components as described in [Importing the JS Component](/docs/getting_started/importing-the-js-component.html), consider:


```javascript
import {ClayBadge} from 'clay';
```

In JSX components call only one component of Clay as any JSX component in Metal.js, consider:

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

In SOY components you can call the components of Clay as any SOY component. Make sure you import the Clay component where you want to use it. Consider:

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