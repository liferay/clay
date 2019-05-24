/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import 'clay-css/lib/css/atlas.css';
import ClayCard from '../src';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker from '@clayui/sticker';
import React from 'react';
import {ClayCheckboxWithState} from '../fixtures/ClayCheckboxWithState';
import {storiesOf} from '@storybook/react';

const contentImage = require('./static/content.svg');
const portletImage = require('./static/portlet.svg');

const spritemap = require('clay-css/lib/images/icons/icons.svg');

storiesOf('ClayCard', module)
	.add('with folder card', () => (
		<div className="row">
			<div className="col-md-4">
				<ClayCard displayType="horizontal">
					<ClayCard.Body>
						<div className="flex-col">
							<ClaySticker displayType="secondary" inline>
								<ClayIcon
									spritemap={spritemap}
									symbol="folder"
								/>
							</ClaySticker>
						</div>
						<div className="autofit-col autofit-col-expand autofit-col-gutters">
							<div className="autofit-section">
								<ClayCard.Description type="title">
									{'Very Large Folder'}
								</ClayCard.Description>
							</div>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</div>

			<div className="col-md-4">
				<ClayCard displayType="horizontal" selectable>
					<ClayCheckboxWithState>
						<ClayCard.Body>
							<div className="autofit-col">
								<ClaySticker displayType="secondary" inline>
									<ClayIcon
										spritemap={spritemap}
										symbol="folder"
									/>
								</ClaySticker>
							</div>
							<div className="autofit-col autofit-col-expand autofit-col-gutters">
								<ClayCard.Description type="title">
									{'Very Large Folder'}
								</ClayCard.Description>
							</div>
						</ClayCard.Body>
					</ClayCheckboxWithState>
				</ClayCard>
			</div>
		</div>
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
								<ClayCard.Description type="title">
									{'deliverable.doc'}
								</ClayCard.Description>
								<ClayCard.Description type="subtitle">
									{'Stevie Ray Vaughn'}
								</ClayCard.Description>
								<ClayCard.Detail>
									<ClayLabel displayType="success">
										{'Approved'}
									</ClayLabel>
								</ClayCard.Detail>
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
								<ClayCard.Description type="title">
									{'deliverable.doc'}
								</ClayCard.Description>
								<ClayCard.Description type="subtitle">
									{'Stevie Ray Vaughn'}
								</ClayCard.Description>
								<ClayCard.Detail>
									<ClayLabel displayType="success">
										{'Approved'}
									</ClayLabel>
								</ClayCard.Detail>
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
							<ClayCard.Description type="title">
								{'thumbnail_coffee.jpg'}
							</ClayCard.Description>
							<ClayCard.Description type="subtitle">
								{'Author Action'}
							</ClayCard.Description>
							<ClayCard.Detail>
								<ClayLabel displayType="success">
									{'Approved'}
								</ClayLabel>
							</ClayCard.Detail>
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
							<ClayCard.Description type="title">
								{'thumbnail_coffee.jpg'}
							</ClayCard.Description>
							<ClayCard.Description type="subtitle">
								{'Author Action'}
							</ClayCard.Description>
							<ClayCard.Detail>
								<ClayLabel displayType="success">
									{'Approved'}
								</ClayLabel>
							</ClayCard.Detail>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</ClayCard.Group>
		</>
	))
	.add('with image', () => (
		<div className="row">
			<div className="col-md-4">
				<ClayCard displayType="image" selectable>
					<ClayCard.AspectRatio className="card-item-first">
						<ClayCheckboxWithState>
							<ClayCard.AspectRatio>
								<img
									alt="thumbnail"
									className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
									src="https://via.placeholder.com/256"
								/>
							</ClayCard.AspectRatio>
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
						</ClayCheckboxWithState>
					</ClayCard.AspectRatio>

					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<ClayCard.Description type="title">
								{'thumbnail_coffee.jpg'}
							</ClayCard.Description>
							<ClayCard.Description type="subtitle">
								{'Author Action'}
							</ClayCard.Description>
							<ClayCard.Detail>
								<ClayLabel displayType="success">
									{'Approved'}
								</ClayLabel>
							</ClayCard.Detail>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</div>

			<div className="col-md-4">
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
							<ClayCard.Description type="title">
								{'thumbnail_coffee.jpg'}
							</ClayCard.Description>
							<ClayCard.Description type="subtitle">
								{'Author Action'}
							</ClayCard.Description>
							<ClayCard.Detail>
								<ClayLabel displayType="success">
									{'Approved'}
								</ClayLabel>
							</ClayCard.Detail>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</div>
		</div>
	))
	.add('with navigation card variant', () => (
		<div className="row">
			<div className="col-md-4">
				<ClayCard displayType="interactive">
					<ClayCard.AspectRatio>
						<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
							<img alt="portlet image" src={portletImage} />
						</span>
					</ClayCard.AspectRatio>
					<ClayCard.Body>
						<ClayCard.Description type="title">
							{'Widget Page'}
						</ClayCard.Description>
						<ClayCard.Description type="text">
							{'Build a page by adding widgets and content.'}
						</ClayCard.Description>
					</ClayCard.Body>
				</ClayCard>
			</div>

			<div className="col-md-4">
				<ClayCard displayType="interactive">
					<ClayCard.AspectRatio>
						<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
							<img alt="content image" src={contentImage} />
						</span>
					</ClayCard.AspectRatio>
					<ClayCard.Body>
						<ClayCard.Description type="title">
							{'Content Page'}
						</ClayCard.Description>
						<ClayCard.Description truncate={false} type="text">
							{
								'This is an example of card-type-template using an anchor tag.'
							}
						</ClayCard.Description>
					</ClayCard.Body>
				</ClayCard>
			</div>
			<div className="col-md-4">
				<ClayCard displayType="interactive">
					<ClayCard.AspectRatio>
						<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
							<ClayIcon
								spritemap={spritemap}
								symbol="page-template"
							/>
						</span>
					</ClayCard.AspectRatio>
					<ClayCard.Body>
						<ClayCard.Description type="title">
							{'Blog'}
						</ClayCard.Description>
					</ClayCard.Body>
				</ClayCard>
			</div>
			<div className="col-md-4">
				<ClayCard displayType="horizontal-interactive">
					<ClayCard.Body>
						<span className="autofit-col">
							<ClaySticker inline>
								<ClayIcon spritemap={spritemap} symbol="page" />
							</ClaySticker>
						</span>
						<span className="autofit-col autofit-col-expand">
							<span className="autofit-section">
								<ClayCard.Description truncate type="title">
									{'Full Page Application'}
								</ClayCard.Description>
							</span>
						</span>
					</ClayCard.Body>
				</ClayCard>
			</div>
		</div>
	))
	.add('with user', () => (
		<div className="row">
			<div className="col-md-4">
				<ClayCard displayType="user" selectable>
					<ClayCard.AspectRatio className="card-item-first">
						<ClayCheckboxWithState>
							<ClayCard.AspectRatio>
								<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
									<ClaySticker
										className="sticker-user-icon"
										displayType="secondary"
										shape="circle"
									>
										<ClayIcon
											spritemap={spritemap}
											symbol="user"
										/>
									</ClaySticker>
								</div>
							</ClayCard.AspectRatio>
						</ClayCheckboxWithState>
					</ClayCard.AspectRatio>

					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<ClayCard.Description type="title">
								{'Adélaide'}
							</ClayCard.Description>
							<ClayCard.Description type="subtitle">
								{'Author Action'}
							</ClayCard.Description>
							<ClayCard.Detail>
								<ClayLabel displayType="warning">
									{'Rejected'}
								</ClayLabel>
							</ClayCard.Detail>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</div>

			<div className="col-md-4">
				<ClayCard displayType="user">
					<ClayCard.AspectRatio className="card-item-first">
						<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
							<ClaySticker
								className="sticker-user-icon"
								displayType="secondary"
								shape="circle"
							>
								<ClayIcon spritemap={spritemap} symbol="user" />
							</ClaySticker>
						</div>
					</ClayCard.AspectRatio>

					<ClayCard.Body>
						<div className="autofit-col autofit-col-expand">
							<ClayCard.Description type="title">
								{'Adélaide'}
							</ClayCard.Description>
							<ClayCard.Description type="subtitle">
								{'Author Action'}
							</ClayCard.Description>
							<ClayCard.Detail>
								<ClayLabel displayType="success">
									{'Approved'}
								</ClayLabel>
							</ClayCard.Detail>
						</div>
					</ClayCard.Body>
				</ClayCard>
			</div>
		</div>
	));
