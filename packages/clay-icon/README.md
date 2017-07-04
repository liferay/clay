# clay-icon

A Metal Clay component for rendering SVG icons and third-party icon fonts. For third-party fonts, make sure the font file and css are included on the page.

Rendering [Clay SVG Icons](#claySvgIcons):
```javascript
new metal.ClayIcon({
	spritemap: '/path/to/the/spritemap.svg',
	symbol: 'plus'
});
```

Rendering [Clay Font Awesome Icons](#clayFontAwesomeIcons)
```javascript
new metal.ClayIcon({
	elementClasses: 'clay-fa icon-plus'
});
```

Rendering [Glyphicons](http://glyphicons.com/):
```javascript
new metal.ClayIcon({
	elementClasses: 'glyphicon glyphicon-plus'
});
```

Rendering [Font Awesome 4 Icons](http://fontawesome.io/icons/):
```javascript
new metal.ClayIcon({
	elementClasses: 'fa fa-plus'
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
