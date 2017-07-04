# clay-link

A reusable Metal Clay component that renders an anchor tag with a set list of attributes. It provides a consistent API across components that use links.

Rendering a Link:
```javascript
new metal.ClayLink({
	href: 'http://www.metaljs.com/',
	icon: {
		alignment: 'right',
		spritemap: 'path/to/svg/icons.svg',
		symbol: 'add-cell'
	},
	id: 'myLinkId',
	label: '<span>My Other Link Label</span>',
	target: '_blank'
});
```

Rendering a Link with a Click Event:
```javascript
new metal.ClayLink({
	events: {
		click: {
			fn: 'toggle'
		}
	},
	href: 'http://www.metaljs.com/',
	icon: {
		alignment: 'right',
		spritemap: 'path/to/svg/icons.svg',
		symbol: 'add-cell'
	},
	id: 'myLinkId',
	label: '<span>My Other Link Label</span>',
	target: '_blank'
});
```

```javascript
new metal.ClayLink({
	events: {
		click: {
			fn: function(event) {
				event.preventDefault();
				// do my custom stuff
			}
		}
	},
	href: 'http://www.metaljs.com/',
	icon: {
		alignment: 'right',
		spritemap: 'path/to/svg/icons.svg',
		symbol: 'add-cell'
	},
	id: 'myLinkId',
	label: '<span>My Other Link Label</span>',
	target: '_blank'
});
```

## Setup

1. See [metal-clay-components/README.md](https://github.com/metal/metal-clay-components/blob/master/README.md)

2. Build the code:

  ```
  npm run build
  ```

3. Watch task:

  ```
  npm run watch
  ```

## Contribute

We'd love to get contributions from you! Please, check our [Contributing Guidelines](https://github.com/metal/metal-clay-components/blob/master/CONTRIBUTING.md) to see how you can help us improve.
