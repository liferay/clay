# Migrating clay components from v2 to v3

This is a reference for upgrading your components from Clay v2 to Clay v3, this symbolizes that you are migrating your application from [Metal.js](https://metaljs.com) to [React.js](https://reactjs.org). Although there is a lot of coverage here, you probably do not have to do everything. We will do our best to keep things easy to follow, and as sequential as possible, so you can quickly get rocking in v3!

## Why you should migrate

This documentation page covers how to migrate from v2 to v3. The reason is covered in some blog posts:

- (**_Coming soon_**) Clay v3-beta: Introduction the new React Components

## General changes

Clay v3 is introducing the rewriting of components in React and new components, the Framework change leads to some API changes that may no longer make sense for a context with React, wait for API changes and renames.

To symbolize this change, Clay is distributing the new packages on the scope npm `@clayui`, so you will find the packages `clay-link`, `clay-button`... on `@clayui/link`, `@clayui/button`.

> Clay v2 is still being distributed and maintained on the `clay-link`, `clay-button` packages...

## ClayButton

-   Removed icon dependency within button itself

```diff
<Button
-	label="Icon positioned at right"
-	icon="plus"
-	iconAlignment="right"
-	spritemap={spritemap}
-/>
+>
+      {'Icon positioned at right'}
+      <Icon spritemap={spritemap} symbol="plus"/>
+</Button>
```

## ClayLink

ClayLink has become simpler with v3, removing APIs from `icon` and `image`, making it flexible for you to define your content but complying with [Lexicon specifications](http://lexicondesign.io).

```diff
<ClayLink
	href="#link-styles"
-	label="Default"
-/>
+>
+	Default
+</ClayLink>
```

### API Changes

- `buttonStyle` renamed to `buttonDisplayType`
- `data` depreciated
- `defaultEventHandler` depreciated
- `elementClasses` renamed to `className`
- `icon` depreciated
- `iconAlignment` depreciated
- `imageAlt` depreciated
- `imageSrc` depreciated
- `label` depreciated
- `spritemap` depreciated
- `style` renamed to `displayType`

### Compositions

To get to the behavior of having a ClayLink with icon, use the composition with ClayIcon:

```diff
<ClayLink
	href="#link-icons"
-	icon="add-cell"
-	label={<span>My Link Label</span>}
-	spritemap={spritemap}
-/>
+
+	<ClayIcon spritemap={spritemap} symbol="add-cell" />
+	<span>My Link Label</span>
+</ClayLink>
```

To get to the behavior of having a ClayLink with image, use the composition with the new ClayImage component:

```diff
<ClayLink
	href="#link-icons"
-	imageSrc="image.jpg"
-	imageAlt="my image"
-/>
+	<ClayImage src="image.jpg" alt="my image" />
+</ClayLink>
```