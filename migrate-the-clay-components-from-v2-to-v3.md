# Migrating clay components from v2 to v3

This is a reference for upgrading your components from Clay v2 to Clay v3, this symbolizes that you are migrating your application from [Metal.js](https://metaljs.com) to [React.js](https://reactjs.org). Although there is a lot of coverage here, you probably do not have to do everything. We will do our best to keep things easy to follow, and as sequential as possible, so you can quickly get rocking in v3!

## Why you should migrate

This documentation page covers how to migrate from v2 to v3. The reason is covered in some blog posts:

-   (**_Coming soon_**) Clay v3-beta: Introduction the new React Components

## General changes

Clay v3 is introducing the rewriting of components in React and new components, the Framework change leads to some API changes that may no longer make sense for a context with React, wait for API changes and renames.

To symbolize this change, Clay is distributing the new packages on the scope npm `@clayui`, so you will find the packages `clay-link`, `clay-button`... on `@clayui/link`, `@clayui/button`.

> Clay v2 is still being distributed and maintained on the `clay-link`, `clay-button` packages...

## ClayAlert

CLayAlert v3 combines Alert, Stripe Alert, and Toast Notifications all in one.

### API Changes

-   `autoClose` accepts either a boolean or number of milliseconds
-   `closed` was removed in favor of the `onClose` callback
-   `destroyOnHide` was removed
-   `style` was renamed to `displayType`
-   `message` was removed in favor of using `children`

### Compositions

To get to the behavior of Clay Toast Notifications, you need to use `ClayAlert.ToastContainer` as a parent for `ClayAlert`

For Example:

```jsx
<ClayAlert.ToastContainer>
	<ClayAlert title="One!" />
	<ClayAlert title="Two!" />
	<ClayAlert title="Three!" />
</ClayAlert.ToastContainer>
```

**Note:** If you use `autoClose` and `onClose` is setting state, you need to make sure that `onClose` does so asynchronously. For example below, if you are using the `useState` hook, you need to make sure to use a callback for `setAlerts`.

```diff
const [alerts, setAlerts] = useState([]);

{alerts.map(alertItem => (
	<ClayAlert
		autoClose={1000}
		key={alertItem}
		onClose={() => {
-				setAlerts(
-					alerts.filter(item => item !== alertItem)
-				);
+				setAlerts(
+					prevItems => prevItems.filter(item => item !== alertItem)
+				);
		}}
	>
		{alertItem}
	</ClayAlert>
))}
```

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

-   `buttonStyle` deprecated
-   `data` deprecated
-   `defaultEventHandler` deprecated
-   `elementClasses` renamed to `className`
-   `icon` deprecated
-   `iconAlignment` deprecated
-   `imageAlt` deprecated
-   `imageSrc` deprecated
-   `label` deprecated
-   `spritemap` deprecated
-   `style` renamed to `displayType`

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

To get to the behavior of having a ClayLink with image, use the composition with the `<img />` tag:

```diff
<ClayLink
	href="#link-icons"
-	imageSrc="image.jpg"
-	imageAlt="my image"
-/>
+	<img src="image.jpg" alt="my image" />
+</ClayLink>
```

## ClaySticker

```diff
<ClaySticker
	shape="circle"
-	label="A"
-/>
+>
+	{'A'}
+</ClaySticker>
```

### API Changes

-   `data` deprecated
-   `defaultEventHandler` deprecated
-   `elementClasses` renamed to `className`
-   `icon` deprecated
-   `imageAlt` deprecated
-   `imageSrc` deprecated
-   `label` deprecated in favor of `children`
-   `spritemap` deprecated
-   `style` renamed to `displayType`

### Compositions

To get to the behavior of having a ClaySticker with image, use the composition with the `<img />` tag:

```diff
-<ClaySticker
-	imageSrc="image.jpg"
-	imageAlt="my image"
-/>
+<ClaySticker>
+ <img className="sticker-img" src="image.jpg" alt="my image" />
+</ClaySticker>
```

To get to the behavior of having a ClaySticker with icon, use the composition with the `<ClayIcon />` component:

```diff
-<ClaySticker
-	spritemap="icons.svg"
-	symbol="user"
-/>
+<ClaySticker>
+ <ClayIcon spritemap="icons.svg" symbol="user" />
+</ClaySticker>
```

## ClayIcon

-   Added ability to utilize context for passing spritemap down instead of having to pass the prop everywhere.

## ClayRadioGroup, ClayRadio

Using a radio by itself doesn't make much sense, only when 2+ exist does the functionality of radio actually work, which is why we moved from `radio` to `radio-group`. The functionality is the same, but by being grouped together it should make it easier to use because the `ClayRadioGroup` component will internally handle which radio is checked and requires less re-duplication of `inline` and `name` props.

```jsx
//v2
// You'd have to manually determine which radio is `checked` and `onChange` for each one
<div>
	<ClayRadio inline name="foo" value="one" checked={'one' === checkValue} onClick={() => setValue('one')} />
	<ClayRadio inline name="foo" value="two" checked={'two' === checkValue} onClick={() => setValue('two')} />
	<ClayRadio inline name="foo" value="three" checked={'three' === checkValue} onClick={() => setValue('three')} />
</div>

// v3
<ClayRadioGroup
	onSelectedValueChange={val => setValue(val)}
	inline
	selectedValue={value}
	name="foo"
>
	<ClayRadioGroup.Radio label="One" value="one" />
	<ClayRadioGroup.Radio label="Two" value="two" />
	<ClayRadioGroup.Radio label="Three" value="three" />
</ClayRadioGroup>
```

## ClayLabel

### API Changes

-   `style` is now `displayType`
-   Removed `size` in favor of `large` since there is only default and large options.
-   Removed `label` in favor of utilizing `children` prop
-   Added `closeButtonProps` which allows you to add attributes to the nested button.
    -   This is where you would pass a callback for `onClick`.

## ClayProgressBar

ClayProgressBar has become simpler with v3 by defaulting many styles based off of the `value` provided. The component is also flexible in that it allows you to compose with custom content where the value is normally displayed.

For example:

```jsx
<ClayProgressBar value={value}>
	<span>
		{'The value is '}
		<strong>{value}</strong>
	</span>
</ClayProgressBar>
```

### API Changes

-   `status` removed in favor of `warn`
-   `feedback` added to determine if `progress-group-feedback` is used, default value is false unless value is 100.
-   `warn` added to indicate `progress-warning` class

## ClayList

ClayList has changed quite a bit. Instead of being "one size fits all" it is now broken up into its parts so that a List is easily composable to whatever the need and design is. In order to get the same functionality as v2.x, you'll need to compose your own component using these building blocks for ClayList.

For example:

```jsx
<ClayList>
	<ClayList.Header>{'This is a header'}</ClayList.Header>
	<ClayList.Item flex>
		<ClayList.ItemField>{'Item 1'}</ClayList.ItemField>

		<ClayList.ItemField>{'ItemField'}</ClayList.ItemField>

		<ClayList.ItemField expand>
			<ClayList.ItemTitle>{`Item Title and expanded`}</ClayList.ItemTitle>
			<ClayList.ItemText>{'Item Text'}</ClayList.ItemText>
		</ClayList.ItemField>

		<ClayList.ItemField>{'ItemField'}</ClayList.ItemField>
	</ClayList.Item>

	<ClayList.Item flex>
		<ClayList.ItemField>{'Item 2'}</ClayList.ItemField>
		<ClayList.ItemField expand>
			{'Hover this item for action menu'}
		</ClayList.ItemField>
		<ClayList.ItemField>
			<ClayList.QuickActionMenu>
				<ClayList.QuickActionMenu.Item
					onClick={() => alert('Clicked the trash!')}
					spritemap={spritemap}
					symbol="trash"
				/>

				<ClayList.QuickActionMenu.Item
					onClick={() => alert('Clicked the cog!')}
					spritemap={spritemap}
					symbol="cog"
				/>
			</ClayList.QuickActionMenu>
		</ClayList.ItemField>
	</ClayList.Item>
</ClayList>
```

### API Changes

-   `data` removed
-   `defaultEventHandler` removed
-   `elementClasses` renamed to `className`
-   `id` removed as an explicit prop
-   `items` removed in favor of composition
-   `selectable` removed in favor of using `ClayCheckbox`
-   `schema` removed
-   `spritemap` only used for `<ClayList.QuickActionMenu.Item />`
