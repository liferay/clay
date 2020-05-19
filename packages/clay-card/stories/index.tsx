/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {ClayCheckbox} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker from '@clayui/sticker';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayCard, {
	ClayCardWithHorizontal,
	ClayCardWithInfo,
	ClayCardWithNavigation,
	ClayCardWithUser,
} from '../src';
const portletImage = require('./static/portlet.svg');

const ClayCheckboxWithState = (props: any) => {
	const [value, setValue] = React.useState<boolean>(false);

	return (
		<ClayCheckbox
			checked={value}
			disabled={false}
			onChange={() => setValue(val => !val)}
		>
			{props.children}
		</ClayCheckbox>
	);
};

storiesOf('Components|ClayCard', module)
	.add('ClayCardWithInfo', () => {
		const [value, setValue] = React.useState<boolean>(false);

		return (
			<div className="row">
				<div className="col-md-4">
					<ClayCardWithInfo
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
					<ClayCardWithInfo
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
						disabled={boolean('Disabled', false)}
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
					<ClayCardWithInfo
						description="Author Action"
						disabled={boolean('Disabled', false)}
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
					<ClayCardWithInfo
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
						disabled={boolean('Disabled', false)}
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
					href="#"
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
						disabled={boolean('Disabled', false)}
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
						disabled={boolean('Disabled', false)}
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
						<ClayCard.Row>
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
						</ClayCard.Row>
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
						<ClayCard.Row>
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
						</ClayCard.Row>
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
						<ClayCard.Row>
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
						</ClayCard.Row>
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
						<ClayCard.Row>
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
						</ClayCard.Row>
					</ClayCard.Body>
				</ClayCard>
			</ClayCard.Group>
		</>
	));
