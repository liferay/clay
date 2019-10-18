---
title: 'Migrate the Clay components from v2 to v3'
---

<div class="nav-toc-absolute">
<div class="nav-toc">

-   [General changes](#general-changes)
-   [ClayAlert](#clayalert)
-   [ClayButton](#claybutton)
-   [ClayCard](#claycard)
-   [ClayCardGrid](#claycardgrid)
-   [ClayCheckbox](#claycheckbox)
-   [ClayLink](#claylink)
-   [ClayNavigationBar](#claynavigationbar)
-   [ClaySticker](#claysticker)
-   [ClayTable](#Claytable)
-   [ClayIcon](#clayicon)
-   [ClayModal](#claymodal)
-   [ClayRadioGroup, ClayRadio](#clayradiogroup,-clayradio)
-   [ClayLabel](#claylabel)
-   [ClayProgressBar](#clayprogressbar)
-   [ClayList](#claylist)
-   [ClayCollapse -> ClayPanel](#claycollapse-->-claypanel)
-   [ClayDropDown](#claydropdown)
-   [ClayPagination](#claypagination)
-   [ClayDataProvider](#claydataprovider)
-   [ClayAutocomplete](#clayautocomplete)
-   [ClaySelect](#clayselect)
-   [ClayCharts](#claycharts)
-   [ClayTooltip](#claytooltip)

</div>
</div>

Reference for upgrading your components from Clay v2 to Clay v3, this symbolizes that you are migrating your application from [Metal.js](https://metaljs.com) to [React.js](https://reactjs.org). Although there is a lot of coverage here, you probably do not have to do everything. We will do our best to keep things easy to follow, and as sequential as possible, so you can quickly get rocking in v3!

## General changes

Clay v3 is introducing the rewriting of components in React and new components, the Framework change leads to some API changes that may no longer make sense for a context with React, wait for API changes and renames.

These components are intended to be consumed via composition, this increases flexibility and more customization. We will also be delivering components with a higher level of logic as well, you can notice the nomenclature:

-   `<ClayDropDown.Item />`: renders basic markup.
-   `<ClayDropDownWithPagination />`: renders a number of items and includes logic for functionality.

To understand more about the composition applied in Clay v3, read more about [Clay's compositional philosophy](/docs/foundations/composing.html).

To symbolize this change, Clay is distributing the new packages on the scope npm `@clayui`, so instead of using `clay-link`, `clay-button`... you should use `@clayui/link`, `@clayui/button`.

> Clay v2 components still being distributed and maintained on the `clay-link`, `clay-button` packages...

## ClayAlert

ClayAlert v3 combines Alert, Stripe Alert, and Toast Notifications all in one.

```jsx
import ClayAlert from '@clayui/alert';
```

#### API Changes

<div class="clay-ullist clay-ullist-margin-sm">

-   `autoClose` accepts either a boolean or number of milliseconds
-   `closed` was removed in favor of the `onClose` callback
-   `destroyOnHide` was removed
-   `style` was renamed to `displayType`
-   `message` was removed in favor of using `children`
-   `stripe` value on `variant` property of `ClayAlert` will get you the same result of v2's `ClayStripe` component.

</div>

#### Compositions

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

Use `<ClayButton />` to compose with any element. A common case is to have a button with icon, so use `<ClayButtonWithIcon />`.

```jsx
import ClayButton from '@clayui/button';
```

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

## ClayCard

ClayCard v3 is offered in composable components such as `ClayCard.AspectRatio`, `ClayCard.Body`, `ClayCard.Description`, `ClayCard.Caption`, and `ClayCard.Header`.

```jsx
import ClayCard from '@clayui/card';
```

```diff
- <ClayUserCard name="User Name" spritemap={spritemap} selectable />
+ <ClayCard displayType="user" selectable>
+ 		<ClayCard.Header>
+ 			<ClayCheckboxWithState>
+ 				<ClayCard.AspectRatio>
+ 					<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
+ 						<ClaySticker
+ 							className="sticker-user-icon"
+ 							displayType="secondary"
+ 							shape="circle"
+ 						>
+ 							<ClayIcon
+ 								spritemap={props.spritemap}
+ 								symbol="user"
+ 							/>
+ 						</ClaySticker>
+ 					</div>
+ 				</ClayCard.AspectRatio>
+ 			</ClayCheckboxWithState>
+ 		</ClayCard.Header>
+
+ 		<ClayCard.Body>
+ 			<div className="autofit-col autofit-col-expand">
+ 				<ClayCard.Description type="title">
+ 					Adélaide
+ 				</ClayCard.Description>
+ 				<ClayCard.Description type="subtitle">
+ 					Author Action
+ 				</ClayCard.Description>
+ 				<ClayCard.Caption>
+ 					<ClayLabel displayType="warning">{'Rejected'}</ClayLabel>
+ 				</ClayCard.Caption>
+ 			</div>
+ 		</ClayCard.Body>
+ 	</ClayCard>
```

#### API Changes:

<div class="clay-ullist clay-ullist-margin-sm">

-   Only the `spritemap` property was kept compared to the v2 API.

</div>

#### Compositions:

To get to the behavior of having a ClayCard with an image, use the following composition with ClayCard:

```diff
- <ClayImageCard labels={[label: 'Approved']} imageSrc="https://via.placeholder.com/256" spritemap={spritemap} subtitle="Author Action" title="My Title" />
+ <ClayCard displayType="image">
+ 		<ClayCard.Header>
+			<img
+				alt="thumbnail"
+				className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
+				src="https://via.placeholder.com/256"
+			/>
+			<ClaySticker
+				displayType="danger"
+				position="bottom-left"
+				shape="rounded"
+			>
+				<ClayIcon spritemap={props.spritemap} symbol="document-image" />
+			</ClaySticker>
+		</ClayCard.Header>
+
+		<ClayCard.Body>
+			<div className="autofit-col autofit-col-expand">
+				<ClayCard.Description type="title">
+					My Title
+				</ClayCard.Description>
+				<ClayCard.Description type="subtitle">
+					Author Action
+				</ClayCard.Description>
+				<ClayCard.Caption>
+					<ClayLabel displayType="success">{'Approved'}</ClayLabel>
+				</ClayCard.Caption>
+			</div>
+		</ClayCard.Body>
+	</ClayCard>
```

To get to the behavior of having a ClayCard with a user image, use the following composition with ClayCard:

```diff
- <ClayUserCard labels={[label: 'Approved']} spritemap={spritemap} subtitle="Author Action" title="Adélaide" />
+ <ClayCard displayType="user">
+ 		<ClayCard.Header>
+ 			<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
+ 				<ClaySticker
+ 					className="sticker-user-icon"
+ 					displayType="secondary"
+ 					shape="circle"
+ 				>
+ 					<ClayIcon spritemap={props.spritemap} symbol="user" />
+ 				</ClaySticker>
+ 			</div>
+ 		</ClayCard.Header>
+
+ 		<ClayCard.Body>
+ 			<div className="autofit-col autofit-col-expand">
+ 				<ClayCard.Description type="title">
+ 					Adélaide
+ 				</ClayCard.Description>
+ 				<ClayCard.Description type="subtitle">
+ 					Author Action
+ 				</ClayCard.Description>
+ 				<ClayCard.Caption>
+ 					<ClayLabel displayType="success">{'Approved'}</ClayLabel>
+ 				</ClayCard.Caption>
+ 			</div>
+ 		</ClayCard.Body>
+ 	</ClayCard>
```

To get to the behavior of having a ClayCard with a horizontal, use the following composition with ClayCard:

```diff
- <ClayHorizontalCard spritemap={spritemap} icon="folder" title="Very Large Folder" />
+ <ClayCard displayType="directory">
+ 	<ClayCard.Body>
+ 		<div className="flex-col">
+ 			<ClaySticker displayType="secondary" inline>
+ 				<ClayIcon spritemap={props.spritemap} symbol="folder" />
+ 			</ClaySticker>
+ 		</div>
+ 		<div className="autofit-col autofit-col-expand autofit-col-gutters">
+ 			<div className="autofit-section">
+ 				<ClayCard.Description type="title">
+ 					Very Large Folder
+ 				</ClayCard.Description>
+ 			</div>
+ 		</div>
+ 	</ClayCard.Body>
+ </ClayCard>
```

To get to the behavior of having a ClayCard with a folder, use the following composition with ClayCard:

```diff
- <ClayCardFile labels={[{label: 'Approved'}]} spritemap={spritemap} title="deliverable.doc" subtitle="Stevie Ray Vaughn" />
+ <ClayCard displayType="file" selectable>
+ 	<ClayCard.Header>
+ 		<ClayCheckboxWithState>
+ 			<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
+ 				<ClayIcon spritemap={props.spritemap} symbol="documents-and-media" />
+ 			</div>
+ 			<ClaySticker displayType="danger" position="bottom-left">
+ 				DOC
+ 			</ClaySticker>
+ 		</ClayCheckboxWithState>
+ 	</ClayCard.Header>
+ 	<ClayCard.Body>
+ 		<div className="autofit-col autofit-col-expand">
+ 			<section className="autofit-section">
+ 				<ClayCard.Description type="title">
+ 					deliverable.doc
+ 				</ClayCard.Description>
+ 				<ClayCard.Description type="subtitle">
+ 					Stevie Ray Vaughn
+ 				</ClayCard.Description>
+ 				<ClayCard.Caption>
+ 					<ClayLabel displayType="success">{'Approved'}</ClayLabel>
+ 				</ClayCard.Caption>
+ 			</section>
+ 		</div>
+ 	</ClayCard.Body>
+ </ClayCard>
```

To get the behavior of having a ClayCardGrid with Cards, use the following composition with ClayCard:

```diff
- <ClayCardGrid spritemap={spritemap} items={items} schema={schema} />
+ <ClayCard.Group label="Test Files">
+	<CardFile spritemap={imageOrSpritemap} />
+	<CardFile spritemap={imageOrSpritemap} />
+	<CardFile spritemap={imageOrSpritemap} />
+ </ClayCard.Group>
+ <ClayCard.Group label="Test Users">
+	<CardUser spritemap={imageOrSpritemap} />
+	<CardUser spritemap={imageOrSpritemap} />
+	<CardUser spritemap={imageOrSpritemap} />
+ </ClayCard.Group>
```

Also, Clay V3 offers you some high-levels cards:

#### Clay Card with User

```diff
- <ClayUserCard
	spritemap={spritemap}
-	userColor="danger"
	name="User Name"
-	actionItems={items}
- 	subtitle={Latest Action}
- />
+ <ClayCardWithUser
 	spritemap={spritemap}
+	userDisplayType="danger"
 	name="User Name"
+ 	actions={items}
+	description={Latest Action}
+ />
```

#### Clay Card Horizontal

```diff
- <ClayHorizontalCard
	spritemap={spritemap}
	title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
- />
+ <ClayCardWithHorizontal
	spritemap={spritemap}
	title="ReallySuperInsanelyJustIncrediblyLongAndTotallyNotPossibleWordButWeAreReallyTryingToCoverAllOurBasesHereJustInCaseSomeoneIsNutsAsPerUsual"
+ />
```

#### Clay File Card

```diff
- <ClayFileCard
-	actionItems={items}
-	stickerLabel="PDF"
-	stickerStyle="danger"
-	labels={[
-		{
-			label: 'Approved'
-			style: 'success'
-		}
-	]}
	spritemap={spritemap}
	subtitle="Stevie Ray Vaughn"
	title="deliverable.pdf"
- />
+ <ClayCardWithInfo
+ 	actions={items}
+	stickerProps={{
+		content: 'PDF',
+		displayType: 'danger'
+	}}
+	labels={[
+		{
+			value: 'Approved',
+			displayType: 'success'
+		}
+	]}
	description="Stevie Ray Vaughn"
	spritemap={spritemap}
	title="deliverable.pdf"
+ />
```

#### Clay Card Image

```diff
- <ClayImageCard
-	actionItems={items}
	href="#image-card-block"
-	imageAlt="thumbnail"
-	imageSrc={image}
	spritemap={spritemap}
-	subtitle="Author Action"
-	title="thumbnail_kyoto.jpg"
- />
+ <ClayCardWithInfo
+	actions={items}
	href="#image-card-block"
+	imgProps={{
+		alt="thumbnail"
+		src={image}
+	}}
	spritemap={spritemap}
+	description="Author Action"
+	title="thumbnail_kyoto.jpg"
+ />
```

## ClayCardGrid

ClayCardGrid was deprecated due to ClayCard.Group.

```jsx
import ClayCard, {ClayCardWithInfo} from '@clayui/card';

<ClayCard.Group label="files">
	<ClayCardWithInfo />
	<ClayCardWithInfo />
	<ClayCardWithInfo />
</ClayCard.Group>;
```

## ClayCheckbox

```jsx
import {ClayCheckbox} from '@clayui/form';

<ClayCheckbox aria-label="hello! Can you see me?" checked={true} readOnly />;
```

## ClayLink

ClayLink has become simpler with v3, removing APIs from `icon` and `image`, making it flexible for you to define your content but complying with [Lexicon specifications](http://lexicondesign.io).

```jsx
import ClayLink from '@clayui/link';
```

```diff
<ClayLink
	href="#link-styles"
-	label="Default"
-/>
+>
+	Default
+</ClayLink>
```

#### API Changes

<div class="clay-ullist clay-ullist-margin-sm">

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

</div>

#### Compositions

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

## ClayNavigationBar

ClayNavigationBar has become simpler than the version `v2`, removing APIs from `items` and making the development more flexible passing elements by composition.

```jsx
import ClayNavigationBar from '@clayui/navigation-bar';
```

```diff
 <ClayNavigationBar
-    items={[{ label: 'Page 1', href: '#1' }, { label: 'Page 2', href: '#2' }]}
     inverted
     spritemap={spritemap}
 >
+    <ClayNavigationBar.Item active>
+        <ClayLink className="nav-link" displayType="secondary" href="#1">
+            <span className="navbar-text-truncate">Page 1</span>
+        </ClayLink>
+    </ClayNavigationBar.Item>
+
+    <ClayNavigationBar.Item>
+        <ClayLink className="nav-link" displayType="secondary" href="#2">
+            <span className="navbar-text-truncate">Page 2</span>
+        </ClayLink>
+    </ClayNavigationBar.Item>
 </ClayNavigationBar>
```

#### API Changes:

<div class="clay-ullist clay-ullist-margin-sm">

-   `data` deprecated, you can pass as props to the component or elements.
-   `defaultEventHandler` deprecated
-   `elementClasses` deprecated
-   `id` deprecated, you can pass as props to the component or elements.
-   `items` deprecated, in favor of composition. You can pass `<ClayNavigationBar.Item>` component to specify the element that will be rendered on Dropdown.

</div>

#### Compositions:

Example:

You want to use Clay button or just a button element inside your dropdown

To get the behavior of having a ClayNavigationBar using Buttons instead of Link you just need to pass `<ClayButton>` or just a `<button>` element to child of `<ClayNavigationBar.Item>` component.

## ClaySticker

```jsx
import ClaySticker from '@clayui/sticker';
```

```diff
<ClaySticker
	shape="circle"
-	label="A"
-/>
+>
+	{'A'}
+</ClaySticker>
```

#### API Changes

<div class="clay-ullist clay-ullist-margin-sm">

-   `data` deprecated
-   `defaultEventHandler` deprecated
-   `elementClasses` renamed to `className`
-   `icon` deprecated
-   `imageAlt` deprecated
-   `imageSrc` deprecated
-   `label` deprecated in favor of `children`
-   `spritemap` deprecated
-   `style` renamed to `displayType`

</div>

#### Compositions

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

## ClayTable

ClayTable has become more simpler than v2 with Table Head, Body, Row and Cell compositions. Removing all necessary schemas and complex APIs from the component and possibiliting a lot of variations with compositions.

```jsx
import ClayTable from '@clayui/table';
```

```diff
- <ClayTable
-     items={[
-         {
-             items: [
-                 {
-                     team: 'White and Red team from Recife',
-                     region: 'South America',
-                     country: 'Brazil'
-                 },
-                 {
-                     team: 'White and Purple team',
-                     region: 'Europe',
-                     country: 'Spain'
-                 },
-             ]
-         }
-     ]}
-     schema={
-         fields: [
-             {
-                 fieldName: 'team',
-                 label: 'Teams',
-             },
-             {
-                 fieldName: 'region',
-                 label: 'Region',
-             },
-             {
-                 fieldName: 'country',
-                 label: 'Country',
-             }
-         ],
-         inputNameField: 'type'
-     }
-     spritemap={spritemap}
- />
+ <ClayTable hover responsive>
+     <ClayTable.Head>
+         <ClayTable.Row>
+             <ClayTable.Cell headingCell headingTitle expanded>
+                 {'Teams'}
+             </ClayTable.Cell>
+             <ClayTable.Cell headingCell headingTitle>
+                 {'Region'}
+             </ClayTable.Cell>
+             <ClayTable.Cell headingCell headingTitle>
+                 {'Country'}
+             </ClayTable.Cell>
+         </ClayTable.Row>
+     </ClayTable.Head>
+     <ClayTable.Body>
+         <ClayTable.Row>
+             <ClayTable.Cell headingTitle>
+                 {'White and Red team from Recife'}
+             </ClayTable.Cell>
+             <ClayTable.Cell>
+                 {'South America'}
+             </ClayTable.Cell>
+             <ClayTable.Cell>
+                 {'Brazil'}
+             </ClayTable.Cell>
+         </ClayTable.Row>
+         <ClayTable.Row>
+             <ClayTable.Cell headingTitle>
+                 {'White and Purple team'}
+             </ClayTable.Cell>
+             <ClayTable.Cell>
+                 {'Europe'}
+             </ClayTable.Cell>
+             <ClayTable.Cell>
+                 {'Spain'}
+             </ClayTable.Cell>
+         </ClayTable.Row>
+     </ClayTable.Body>
+ </ClayTable>
```

#### API Changes

Take a look at the [ClayTable documentation](/docs/components/table.html) for more information.

## ClayIcon

Added ability to utilize context for passing spritemap down instead of having to pass the prop everywhere.

```jsx
import {ClayIconSpriteContext} from '@clayui/icon';
import React from 'react';

const Component = () => {
	const spritemap = 'http://...';

	return (
		<ClayIconSpriteContext.Provider value={spritemap}>
			{...}
		</ClayIconSpriteContext.Provider>
	);
};
```

## ClayModal

Become a low-level API, you can compose Modal's small blocks to get the results recommended by Lexicon but allow you to stylize the Modal content and continue to get the benefits of the components.

Read more about using [ClayModal in the documentation](/docs/components/modal.html).

```jsx
import ClayButton from '@clayui/button';
import ClayModal, {useModal} from '@clayui/modal';
import React, {useState} from 'react';

const Component = () => {
	const [visible, setVisible] = useState(false);
	const {observer, onClose} = useModal({
		onClose: () => setVisible(false),
	});

	return (
		<>
			{visible && (
				<ClayModal
					observer={observer}
					size="lg"
					spritemap={spritemap}
					status="info"
				>
					<ClayModal.Header>{'Title'}</ClayModal.Header>
					<ClayModal.Body>
						<h1>{'Hello world!'}</h1>
					</ClayModal.Body>
					<ClayModal.Footer
						first={
							<ClayButton.Group spaced>
								<ClayButton displayType="secondary">
									{'Secondary'}
								</ClayButton>
								<ClayButton displayType="secondary">
									{'Secondary'}
								</ClayButton>
							</ClayButton.Group>
						}
						last={
							<ClayButton onClick={onClose}>
								{'Primary'}
							</ClayButton>
						}
					/>
				</ClayModal>
			)}
			<ClayButton displayType="primary" onClick={() => setVisible(true)}>
				{'Open modal'}
			</ClayButton>
		</>
	);
};
```

#### API Changes

<div class="clay-ullist clay-ullist-margin-sm">

-   `body` deprecated in favor of utilizing `<ClayModal.Body />` component
-   `data` deprecated
-   `defaultEventHandler` deprecated
-   `elementClasses` renamed to `className`
-   `footerButtons` deprecated in favor of utilizing `<ClayModal.Footer />` component
-   `onClose` added
-   `title` deprecated in favor of utilizing `<ClayModal.Header />` component
-   `visible` deprecated in favor of animating the component when it is mount and unmount.

</div>

#### Compositions

To render an iframe inside Modal, you can compose with the `<ClayModal.Body />` component by passing the url to the prop `url`.

```jsx
<ClayModal>
	<ClayModal.Header>{'Title'}</ClayModal.Header>
	<ClayModal.Body url="https://clayui.com" />
</ClayModal>
```

## ClayRadioGroup, ClayRadio

Using a radio by itself doesn't make much sense, only when 2+ exist does the functionality of radio actually work, which is why we moved from `radio` to `radio-group`. The functionality is the same, but by being grouped together it should make it easier to use because the `ClayRadioGroup` component will internally handle which radio is checked and requires less re-duplication of `inline` and `name` props.

```jsx
import {ClayRadio, ClayRadioGroup} from '@clayui/form';

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

Read more about using [ClayLabel in the documentation](/docs/components/label.html).

```jsx
import ClayLabel from '@clayui/label';

<ClayLabel displayType="success">Label Success</ClayLabel>;
```

#### API Changes

<div class="clay-ullist clay-ullist-margin-sm">

-   `style` is now `displayType`
-   Removed `size` in favor of `large` since there is only default and large options.
-   Removed `label` in favor of utilizing `children` prop
-   Added `closeButtonProps` which allows you to add attributes to the nested button.
-   This is where you would pass a callback for `onClick`.

</div>

## ClayProgressBar

ClayProgressBar has become simpler with v3 by defaulting many styles based off of the `value` provided. The component is also flexible in that it allows you to compose with custom content where the value is normally displayed.

For example:

```jsx
import ClayProgressBar from '@clayui/progress-bar';

<ClayProgressBar value={value}>
	<span>
		{'The value is '}
		<strong>{value}</strong>
	</span>
</ClayProgressBar>;
```

#### API Changes

<div class="clay-ullist clay-ullist-margin-sm">

-   `status` removed in favor of `warn`
-   `feedback` added to determine if `progress-group-feedback` is used, default value is false unless value is 100.
-   `warn` added to indicate `progress-warning` class

</div>

## ClayList

ClayList has changed quite a bit. Instead of being "one size fits all" it is now broken up into its parts so that a List is easily composable to whatever the need and design is. In order to get the same functionality as v2.x, you'll need to compose your own component using these building blocks for ClayList.

For example:

```jsx
import ClayList from '@clayui/list';

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
</ClayList>;
```

#### API Changes

<div class="clay-ullist clay-ullist-margin-sm">

-   `data` removed
-   `defaultEventHandler` removed
-   `elementClasses` renamed to `className`
-   `id` removed as an explicit prop
-   `items` removed in favor of composition
-   `selectable` removed in favor of using `ClayCheckbox`
-   `schema` removed
-   `spritemap` only used for `<ClayList.QuickActionMenu.Item />`

</div>

## ClayCollapse -> ClayPanel

ClayCollapse has been renamed to ClayPanel due to collapse being just a part of the panel functionality. ClayPanel is now simpler as it now manages its own expanded state internally. ClayPanel also is now created via composition with `<ClayPanel.Body>`, `<ClayPanel.Footer>`, `<ClayPanel.Header>` and `<ClayPanel.Group>`.

For example:

```jsx
import ClayPanel from '@clayui/panel';

<ClayPanel>
	<ClayPanel.Header>{'Header!'}</ClayPanel.Header>
	<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
	<ClayPanel.Footer>{'Footer!'}</ClayPanel.Footer>
</ClayPanel>

// or
<ClayPanel.Group>
	<ClayPanel>
		<ClayPanel.Body>{'One!'}</ClayPanel.Body>
	</ClayPanel>
	<ClayPanel>
		<ClayPanel.Body>{'Two!'}</ClayPanel.Body>
	</ClayPanel>
</ClayPanel.Group>
```

#### API Changes

<div class="clay-ullist clay-ullist-margin-sm">

-   `closedClasses` removed and uses clay's classes of `collapse` and `show`
-   `collapsed` renamed to `defaultExpanded` which will only take effect on first render.
-   `content` removed in favor of `children` prop
-   `headers` removed in favor of composing with `<ClayPanel.Header>`
-   `openClasses` removed and uses clay's class of `collapse`
-   `transitionClasses` removed and manages transitions internally.

</div>

## ClayDropDown

ClayDropDown's API has been refactored quite a bit and is now created via composition. This gives the end user greater flexibility in how the dropdown is created and what the dropdown is used for. The following components are available for composition.

```jsx
import ClayDropDown from '@clayui/drop-down';

<ClayDropDown>
<ClayDropDown.Action>
<ClayDropDown.Caption>
<ClayDropDown.Divider>
<ClayDropDown.Group>
<ClayDropDown.Help>
<ClayDropDown.Menu>
<ClayDropDown.Item>
<ClayDropDown.ItemList>
<ClayDropDown.Search>
```

ClayDropDown also exports `<ClayDropDown.Menu>` which can be used independently of the other components and can be used in any place that is in need of a 'floating menu.' To see uses of this, check out `ClayColorPicker` or `ClayDatePicker`.

#### Compositions

```jsx
<ClayDropDown
	active={active}
	onActiveChange={newVal => setActive(newVal)}
	trigger={<ClayButton>{'Click Me'}</ClayButton>}
>
	<ClayDropDown.ItemList>
		<ClayDropDown.Item href="/bar">Bar</ClayDropDown.Item>

		<ClayDropDown.Item href="/baz">Baz</ClayDropDown.Item>

		<ClayDropDown.Item href="/qux">Qux</ClayDropDown.Item>
	</ClayDropDown.ItemList>
</ClayDropDown>
```

See `ClayDropDown` in our storybook for more compositions and examples of use.

Also, it is offered as a high-level component called [DropDownWithItems](/docs/components/drop-down.html#claydropdownwithitems).

## ClayPagination

ClayPaginationWithBasicItems's high-level API is very similar to v2.x with a few slight changes. See API changed below.

Usage Example:

```jsx
import {ClayPaginationWithBasicItems} from '@clayui/pagination';

<ClayPaginationWithBasicItems
	activePage={5}
	hrefConstructor={page => `/#${page}`}
	spritemap={spritemap}
	totalPages={25}
/>;
```

#### API Changes

<div class="clay-ullist clay-ullist-margin-sm">

-   `baseHref` removed in favor of `hrefConstructor` which allows function that passes the page as the variable.
-   `currentPage` renamed to `activePage`
-   `data` removed
-   `defaultEventHandler` removed in favor of `onPageChange` callback
-   `elementClasses` removed in favor of `className`
-   `spritemap` stays the same
-   `totalPages` stays the same

</div>

## ClayDataProvider

DataProvider has changed a lot in terms of API but adds many new features and status information from the network.

Receiving improvements in the mechanism of failed requests attempts, avoiding thundering herd, local cache mechanism, and API to add storage referral.

See the [documentation](/docs/components/data-provider.html) to get the most out of the component.

```jsx
import ClayDataProvider from '@clayui/data-provider';
```

```diff
<ClayDataProvider
-	content={...}
-	dataSource={...}
-	initialData={...}
-	pollingInterval={5}
-	inputMode={...}
-	requestRetries={...}
-	requestTimeout={...}
-	requestOptions={...}
+	fetchDelay={300}
+	fetchOptions={...}
+	fetchPolicy="no-cache"
+	fetchRetry={...}
+	fetchTimeout={6000}
+	link="https://clay.dataprovider"
+	pollInterval={5}
+	storage={...}
+	storageMaxSize={20}
+	variables={{name: value}}
-/>
+>
+	{({data, error, networkStatus, refetch}) => ()}
+</ClayDataProvider>
```

#### API Changes

<div class="clay-ullist clay-ullist-margin-sm">

-   `content` removed in favor of using `children`
-   `data` deprecated
-   `dataSource` renamed to `link` and accept only Function and string
-   `debounceTime` renamed to `fetchDelay`
-   `defaultEventHandler` deprecated
-   `initialData` deprecated
-   `inputMode` deprecated
-   `pollingInterval` renamed to `pollInterval`
-   `requestOptions` renamed to `fetchOptions`
-   `requestRetries` renamed to `fetchRetry`
-   `requestTimeout` renamed to `fetchTimeout`

</div>

## ClayAutocomplete

Autocomplete has received many changes due to the change of approach we had in v2 to be delivered with composition. We recommend that you read the component documentation for a better understanding.

For example purposes you can get to the same result you had in v2 using composition, autocomplete alone does not do what it really promises, you need to compose with other components, ClayDropDown, ClayDataProvider and LoadingIndicator is where all the beauty of it is, it decreases the coupling and gigantic lists of API descriptions and offers flexibility for customizing and implementing new rules.

```jsx
import ClayAutocomplete from '@clayui/autocomplete';
```

```diff
<ClayAutocomplete
-	dataSource={dataSource}
-	placeholder="Placeholder"
-	extractData={(elem) => elem.name}
-	requestRetries={0}
-	...
-/>
+>
+	<ClayAutocomplete.Input
+		onChange={event => setValue(event.target.value)}
+		value={value}
+	/>
+	<ClayAutocomplete.DropDown
+		active={(!!resource && !!value) || initialLoading}
+	>
+		<ClayDropDown.ItemList>
+			{resource.map(item => (
+				<ClayAutocomplete.Item
+					key={item.id}
+					match={value}
+					onClick={() => setValue(item.name)}
+					value={item.name}
+				/>
+			))}
+		</ClayDropDown.ItemList>
+	</ClayAutocomplete.DropDown>
+	{loading && <ClayAutocomplete.LoadingIndicator />}
+</ClayAutocomplete>
```

## ClaySelect

If you use ClaySelect only for simple cases that do not need props for `options`, you can use `<ClaySelectWithOption />` which will have the same result as the previous version.

```jsx
import {ClaySelect} from '@clayui/form';

<ClaySelectWithOption
	aria-label="Select Label"
	id="mySelectId"
	options={[
		{
			label: 'Option 1',
			value: '1',
		},
		{
			label: 'Option 2',
			value: '2',
		},
	]}
/>;
```

#### API Changes

<div class="clay-ullist clay-ullist-margin-sm">

-   `data` deprecated
-   `inline` deprecated
-   `label` deprecated
-   `defaultEventHandler` deprecated
-   `elementClasses` renamed to `className`

</div>

#### Compositions

Still you can take advantage of composition if you think `ClaySelectWithOption` does not cover your cases.

```jsx
<ClaySelect aria-label="Select Label" id="mySelectId">
	<ClaySelect.Option label="Option 1" value="1" />
	<ClaySelect.Option label="Option 2" value="2" />
</ClaySelect>
```

## ClayCharts

With the new clay-charts, we removed the dependency of `react-billboardjs` and implemented the interaction with Billboard ourself to give us more leverage. There are not many other changes and the component should be very similar to how it was used before in metal-jsx.

```jsx
import ClayChart from '@clayui/charts';

<ClayChart
	data={{
		columns: [
			['data1', 100, 20, 30, 50, 40, 80, 220, 300],
			['data2', 20, 70, 100, 340, 160, 20, 80, 200],
		],
		type: 'scatter',
	}}
/>;
```

#### API Changes

<div class="clay-ullist clay-ullist-margin-sm">

-   removed named exports such as `BarChart` in favor of `type` prop in `data`.
-   if a ref is provided, its value is the instance of the billboard.js chart.

</div>

## ClayTooltip

Before, the component was instantiable and will be rendered when `mouseover` an element with `data-title` attribute. Now, the component is a React component.
