/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayCard, {
	ClayCardWithFile,
	ClayCardWithHorizontal,
	ClayCardWithNavigation,
	ClayCardWithUser,
} from '../src';
import ClayForm from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker from '@clayui/sticker';
import React from 'react';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

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

storiesOf('ClayCard', module)
	.add('ClayCardWithFile', () => {
		const [value, setValue] = React.useState<boolean>(false);

		return (
			<div className="row">
				<div className="col-md-4">
					<ClayCardWithFile
						description="A cool description"
						href="#"
						labels={[
							{
								displayType: 'success',
								value: 'Awesome',
							},
						]}
						spritemap={spritemap}
						title="Very Large File"
					/>
				</div>

				<div className="col-md-4">
					<ClayCardWithFile
						actions={[
							{
								label: 'clickable',
								onClick: () => {
									alert('you clicked!');
								},
							},
							{type: 'divider'},
							{
								href: '#',
								label: 'linkable',
							},
						]}
						description="A cool description"
						href="#"
						labels={[
							{
								displayType: 'success',
								value: 'Awesome',
							},
							{
								displayType: 'danger',
								value: 'Crazy',
							},
						]}
						onSelectChange={newVal => setValue(newVal)}
						selected={value}
						spritemap={spritemap}
						stickerProps={{
							content: 'DOC',
							displayType: 'danger',
						}}
						title="Selectable File"
					/>
				</div>
			</div>
		);
	})
	.add('CardWithFile w/ image', () => {
		const [value, setValue] = React.useState(false);

		const flushHorizontal = boolean('Horizontal Flush', false);
		const flushVertical = boolean('Vertical Flush', false);

		return (
			<div className="row">
				<div className="col-md-4">
					<ClayCardWithFile
						description="Author Action"
						flushHorizontal={flushHorizontal}
						flushVertical={flushVertical}
						href="#"
						imgProps={{src: 'https://via.placeholder.com/150x250'}}
						labels={[
							{
								displayType: 'success',
								value: 'Approved',
							},
						]}
						onSelectChange={setValue}
						selected={value}
						spritemap={spritemap}
						title="thumbnail_coffee.jpg"
					/>
				</div>

				<div className="col-md-4">
					<ClayCardWithFile
						description="Author Action"
						flushHorizontal={flushHorizontal}
						flushVertical={flushVertical}
						href="#"
						imgProps="https://via.placeholder.com/350x150"
						labels={[
							{
								displayType: 'success',
								value: 'Approved',
							},
						]}
						spritemap={spritemap}
						title="thumbnail_coffee.jpg"
					/>
				</div>
			</div>
		);
	})
	.add('CardWithHorizontal', () => {
		const [value, setValue] = React.useState<boolean>(false);

		return (
			<div className="row">
				<div className="col-md-4">
					<ClayCardWithHorizontal
						href="#"
						spritemap={spritemap}
						title="Very Large Folder"
					/>
				</div>

				<div className="col-md-4">
					<ClayCardWithHorizontal
						actions={[
							{
								label: 'clickable',
								onClick: () => {
									alert('you clicked!');
								},
							},
							{type: 'divider'},
							{
								href: '#',
								label: 'linkable',
							},
						]}
						href="#"
						onSelectChange={setValue}
						selected={value}
						spritemap={spritemap}
						title="Selectable Folder"
					/>
				</div>
			</div>
		);
	})
	.add('CardWithNavigation', () => (
		<div className="row">
			<div className="col-md-4">
				<ClayCardWithNavigation
					description="Pick and choose your layout..."
					onClick={() => alert('clicked')}
					spritemap={spritemap}
					title="onClick Card with icon"
				>
					<ClayIcon spritemap={spritemap} symbol="page-template" />
				</ClayCardWithNavigation>
			</div>
			<div className="col-md-4">
				<ClayCardWithNavigation
					description="Pick and choose your layout..."
					href="#"
					spritemap={spritemap}
					title="href Card with img"
				>
					<img alt="portlet image" src={portletImage} />
				</ClayCardWithNavigation>
			</div>
			<div className="col-md-4">
				<ClayCardWithNavigation
					description="Pick and choose your layout..."
					horizontal
					horizontalSymbol="page"
					spritemap={spritemap}
					title="Layout Page"
				/>
			</div>
		</div>
	))
	.add('CardWithUser', () => {
		const [value, setValue] = React.useState<boolean>(false);

		return (
			<div className="row">
				<div className="col-md-4">
					<ClayCardWithUser
						actions={[
							{
								label: 'clickable',
								onClick: () => {
									alert('you clicked!');
								},
							},
							{type: 'divider'},
							{
								href: '#',
								label: 'linkable',
							},
						]}
						description="Assistant to the regional manager"
						href="#"
						labels={[
							{
								displayType: 'success',
								value: 'Awesome',
							},
							{
								displayType: 'danger',
								value: 'Crazy',
							},
						]}
						name="Abraham Kuyper"
						onSelectChange={() => {}}
						selected={boolean('selected', false)}
						spritemap={spritemap}
					/>

					<ClayCardWithUser
						description="Assistant to the regional manager"
						labels={[
							{
								displayType: 'success',
								value: 'Awesome',
							},
							{
								displayType: 'danger',
								value: 'Crazy',
							},
						]}
						name="Abraham Kuyper"
						onSelectChange={setValue}
						selected={value}
						spritemap={spritemap}
						userImageSrc="https://via.placeholder.com/256"
					/>
				</div>
			</div>
		);
	})
	.add('low-level w/ groups', () => (
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
	));
