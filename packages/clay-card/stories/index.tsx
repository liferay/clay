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
	ClayCardWithUser,
} from '../src';
import ClayForm from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker from '@clayui/sticker';
import React from 'react';
import {storiesOf} from '@storybook/react';

const contentImage = require('./static/content.svg');
const portletImage = require('./static/portlet.svg');

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

const ClayCheckboxWithState = (props: any) => {
	const [value, setValue] = React.useState<boolean>(false);

	return (
		<ClayForm.Checkbox
			checked={value}
			disabled={false}
			indeterminate={false}
			onChange={() => setValue(val => !val)}
		>
			{props.children}
		</ClayForm.Checkbox>
	);
};

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
	.add('with folder card', () => (
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
	.add('with group', () => (
		<>
			<ClayCard.Group label="files">
				<ClayCard displayType="file">
					<ClayCard.AspectRatio className="card-item-first">
						<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
							<ClayIcon
								spritemap={spritemap}
								symbol="documents-and-media"
							/>
						</div>
						<ClaySticker
							displayType="danger"
							position="bottom-left"
						>
							{'DOC'}
						</ClaySticker>
					</ClayCard.AspectRatio>
					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<section className="autofit-section">
								<ClayCard.Description displayType="title">
									{'deliverable.doc'}
								</ClayCard.Description>
								<ClayCard.Description displayType="subtitle">
									{'Stevie Ray Vaughn'}
								</ClayCard.Description>
								<ClayCard.Caption>
									<ClayLabel displayType="success">
										{'Approved'}
									</ClayLabel>
								</ClayCard.Caption>
							</section>
						</div>
					</ClayCard.Body>
				</ClayCard>
				<ClayCard displayType="file" selectable>
					<ClayCard.AspectRatio className="card-item-first">
						<ClayCheckboxWithState>
							<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
								<ClayIcon
									spritemap={spritemap}
									symbol="documents-and-media"
								/>
							</div>
							<ClaySticker
								displayType="danger"
								position="bottom-left"
							>
								{'DOC'}
							</ClaySticker>
						</ClayCheckboxWithState>
					</ClayCard.AspectRatio>
					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<section className="autofit-section">
								<ClayCard.Description displayType="title">
									{'deliverable.doc'}
								</ClayCard.Description>
								<ClayCard.Description displayType="subtitle">
									{'Stevie Ray Vaughn'}
								</ClayCard.Description>
								<ClayCard.Caption>
									<ClayLabel displayType="success">
										{'Approved'}
									</ClayLabel>
								</ClayCard.Caption>
							</section>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</ClayCard.Group>
			<ClayCard.Group label="images">
				<ClayCard displayType="image">
					<ClayCard.AspectRatio className="card-item-first">
						<img
							alt="thumbnail"
							className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
							src="https://via.placeholder.com/256"
						/>
						<ClaySticker
							displayType="danger"
							position="bottom-left"
							shape="rounded"
						>
							<ClayIcon
								spritemap={spritemap}
								symbol="document-image"
							/>
						</ClaySticker>
					</ClayCard.AspectRatio>

					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<ClayCard.Description displayType="title">
								{'thumbnail_coffee.jpg'}
							</ClayCard.Description>
							<ClayCard.Description displayType="subtitle">
								{'Author Action'}
							</ClayCard.Description>
							<ClayCard.Caption>
								<ClayLabel displayType="success">
									{'Approved'}
								</ClayLabel>
							</ClayCard.Caption>
						</div>
					</ClayCard.Body>
				</ClayCard>
				<ClayCard displayType="image">
					<ClayCard.AspectRatio className="card-item-first">
						<img
							alt="thumbnail"
							className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
							src="https://via.placeholder.com/256"
						/>
						<ClaySticker
							displayType="danger"
							position="bottom-left"
							shape="rounded"
						>
							<ClayIcon
								spritemap={spritemap}
								symbol="document-image"
							/>
						</ClaySticker>
					</ClayCard.AspectRatio>

					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<ClayCard.Description displayType="title">
								{'thumbnail_coffee.jpg'}
							</ClayCard.Description>
							<ClayCard.Description displayType="subtitle">
								{'Author Action'}
							</ClayCard.Description>
							<ClayCard.Caption>
								<ClayLabel displayType="success">
									{'Approved'}
								</ClayLabel>
							</ClayCard.Caption>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</ClayCard.Group>
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
	.add('with navigation card variant', () => (
		<>
			<ClayCard interactive>
				<ClayCard.AspectRatio>
					<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
						<img alt="portlet image" src={portletImage} />
					</span>
				</ClayCard.AspectRatio>
				<ClayCard.Body>
					<ClayCard.Description displayType="title">
						{'Widget Page'}
					</ClayCard.Description>
					<ClayCard.Description displayType="text">
						{'Build a page by adding widgets and content.'}
					</ClayCard.Description>
				</ClayCard.Body>
			</ClayCard>

			<ClayCard interactive>
				<ClayCard.AspectRatio>
					<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
						<img alt="content image" src={contentImage} />
					</span>
				</ClayCard.AspectRatio>
				<ClayCard.Body>
					<ClayCard.Description displayType="title">
						{'Content Page'}
					</ClayCard.Description>
					<ClayCard.Description displayType="text" truncate={false}>
						{
							'This is an example of card-type-template using an anchor tag.'
						}
					</ClayCard.Description>
				</ClayCard.Body>
			</ClayCard>

			<ClayCard interactive>
				<ClayCard.AspectRatio>
					<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
						<ClayIcon
							spritemap={spritemap}
							symbol="page-template"
						/>
					</span>
				</ClayCard.AspectRatio>
				<ClayCard.Body>
					<ClayCard.Description displayType="title">
						{'Blog'}
					</ClayCard.Description>
				</ClayCard.Body>
			</ClayCard>

			<ClayCard horizontal interactive>
				<ClayCard.Body>
					<span className="autofit-col">
						<ClaySticker inline>
							<ClayIcon spritemap={spritemap} symbol="page" />
						</ClaySticker>
					</span>
					<span className="autofit-col autofit-col-expand">
						<span className="autofit-section">
							<ClayCard.Description displayType="title" truncate>
								{'Full Page Application'}
							</ClayCard.Description>
						</span>
					</span>
				</ClayCard.Body>
			</ClayCard>
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
	));
