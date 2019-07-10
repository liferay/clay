/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayCard, {
	ClayCardWithFile,
	ClayCardWithFolder,
	ClayCardWithImage,
	ClayCardWithNavigation,
	ClayCardWithUser,
} from '../src';
import ClayIcon from '@clayui/icon';
import React from 'react';
import {storiesOf} from '@storybook/react';

const contentImage = require('./static/content.svg');
const portletImage = require('./static/portlet.svg');

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

const ClayCardWithImageAndState = (props: any) => {
	const [selected, setSelected] = React.useState<boolean>(false);

	return (
		<ClayCardWithImage
			{...props}
			onSelectChange={setSelected}
			selected={selected}
		/>
	);
};

const ClayCardWithuserAndState = (props: any) => {
	const [selected, setSelected] = React.useState<boolean>(false);

	return (
		<ClayCardWithUser
			{...props}
			onSelectChange={setSelected}
			selected={selected}
		/>
	);
};
const ClayCardWithFileAndState = (props: any) => {
	const [selected, setSelected] = React.useState<boolean>(false);

	return (
		<ClayCardWithFile
			{...props}
			onSelectChange={setSelected}
			selected={selected}
		/>
	);
};
const ClayCardWithFolderAndState = (props: any) => {
	const [selected, setSelected] = React.useState<boolean>(false);

	return (
		<ClayCardWithFolder
			{...props}
			onSelectChange={setSelected}
			selected={selected}
		/>
	);
};

storiesOf('ClayCard', module)
	.addDecorator(story => (
		<div className="row">
			<div className="col-md-4">{story()}</div>
		</div>
	))
	.add('ClayCardWithFolder', () => (
		<>
			<h3>{'Selectable'}</h3>
			<ClayCardWithFolderAndState
				spritemap={spritemap}
				title="~/foo/bar"
			/>

			<h3>{'Non-Selectable'}</h3>
			<ClayCardWithFolder spritemap={spritemap} title="deliverable" />
		</>
	))
	.add('ClayCardWithImage', () => (
		<>
			<h3>{'Selectable'}</h3>
			<ClayCardWithImageAndState
				description="Author Action"
				imageSrc="https://via.placeholder.com/256"
				label={{
					displayType: 'success',
					value: 'Approved',
				}}
				spritemap={spritemap}
				title="thumbnail_coffee.jpg"
			/>

			<h3>{'Non-Selectable'}</h3>
			<ClayCardWithImage
				description="Author Action"
				imageSrc="https://via.placeholder.com/256"
				label={{
					displayType: 'success',
					value: 'Approved',
				}}
				spritemap={spritemap}
				title="thumbnail_coffee.jpg"
			/>
		</>
	))
	.add('ClayCardWithFile', () => (
		<>
			<h3>{'Selectable'}</h3>
			<ClayCardWithFileAndState
				description="Stevie Ray Vaughn"
				label={{
					displayType: 'success',
					value: 'Approved',
				}}
				spritemap={spritemap}
				title="deliverable.doc"
			/>

			<h3>{'Non-Selectable'}</h3>
			<ClayCardWithFile
				description="Stevie Ray Vaughn"
				label={{
					displayType: 'success',
					value: 'Approved',
				}}
				spritemap={spritemap}
				title="deliverable.doc"
			/>
		</>
	))
	.add('ClayCardWithNavigation', () => (
		<>
			<ClayCardWithNavigation
				description="Build a page by adding widgets and content."
				image={portletImage}
				onClick={() => alert('you clicked')}
				title="Widget Page"
			/>

			<ClayCardWithNavigation
				description="This is an example of card-type-template using an anchor tag."
				href="#"
				image={contentImage}
				title="Content Page"
			/>

			<ClayCardWithNavigation
				href="#"
				image={
					<ClayIcon spritemap={spritemap} symbol="page-template" />
				}
				title="Blog"
			/>

			<ClayCardWithNavigation
				horizontal
				href="#"
				image={<ClayIcon spritemap={spritemap} symbol="page" />}
				title="Full Page Application"
			/>
		</>
	))
	.add('ClayCardWithUser', () => (
		<>
			<h3>{'Selectable'}</h3>
			<ClayCardWithuserAndState
				description="Author Action"
				label={{
					displayType: 'danger',
					value: 'Denied',
				}}
				name="Adélaide"
				spritemap={spritemap}
			/>

			<h3>{'Non-Selectable'}</h3>
			<ClayCardWithUser
				description="Author Action"
				label={{
					displayType: 'success',
					value: 'Approved',
				}}
				name="Adélaide"
				spritemap={spritemap}
				userDisplayType="danger"
			/>
		</>
	))
	.add('with groups', () => (
		<>
			<ClayCard.Group label="files">
				<ClayCardWithFile
					description="Foo Bar"
					label={{
						displayType: 'danger',
						value: 'Failed',
					}}
					spritemap={spritemap}
					title="foo.doc"
				/>
				<ClayCardWithFile
					description="Stevie Ray Vaughn"
					label={{
						displayType: 'success',
						value: 'Approved',
					}}
					spritemap={spritemap}
					title="deliverable.doc"
				/>
			</ClayCard.Group>
			<ClayCard.Group label="images">
				<ClayCardWithImage
					description="Author Action"
					imageSrc="https://via.placeholder.com/256"
					label={{
						displayType: 'success',
						value: 'Approved',
					}}
					spritemap={spritemap}
					title="thumbnail_coffee.jpg"
				/>
				<ClayCardWithImage
					description="Author Action"
					imageSrc="https://via.placeholder.com/256"
					label={{
						displayType: 'danger',
						value: 'Failed',
					}}
					spritemap={spritemap}
					title="thumbnail_tea.jpg"
				/>
			</ClayCard.Group>
		</>
	));
