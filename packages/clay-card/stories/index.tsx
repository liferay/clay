/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import CardFile from '../fixtures/file/CardFile';
import CardFileSelectable from '../fixtures/file/CardFileSelectable';

import CardFolder from '../fixtures/folder/CardFolder';
import CardFolderSelectable from '../fixtures/folder/CardFolderSelectable';

import CardHorizontalInteractive from '../fixtures/interactive/CardHorizontalInteractive';

import CardImage from '../fixtures/image/CardImage';
import CardImageSelectable from '../fixtures/image/CardImageSelectable';

import CardInteractive from '../fixtures/interactive/CardInteractive';
import CardInteractiveNoTruncateDescription from '../fixtures/interactive/CardInteractiveNoTruncateDescription';
import CardInteractiveWithIcon from '../fixtures/interactive/CardInteractiveWithIcon';

import CardUser from '../fixtures/user/CardUser';
import CardUserSelectable from '../fixtures/user/CardUserSelectable';

import React from 'react';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';
import ClayCard from '../src';

const contentImage = require('./static/content.svg');
const portletImage = require('./static/portlet.svg');

const spritemap = require('clay-css/lib/images/icons/icons.svg');

storiesOf('ClayCard', module)
	.add('with group', () => (
		<>
			<ClayCard.Group label="files">
				<CardFile spritemap={spritemap} />
				<CardFileSelectable spritemap={spritemap} />
			</ClayCard.Group>
			<ClayCard.Group label="images">
				<CardImage spritemap={spritemap} />
				<CardImage spritemap={spritemap} />
			</ClayCard.Group>
		</>
	))
	.add('with image', () => (
		<div className="row">
			<div className="col-md-4">
				<CardImageSelectable spritemap={spritemap} />
			</div>

			<div className="col-md-4">
				<CardImage spritemap={spritemap} />
			</div>
		</div>
	))
	.add('with user', () => (
		<div className="row">
			<div className="col-md-4">
				<CardUserSelectable spritemap={spritemap} />
			</div>

			<div className="col-md-4">
				<CardUser spritemap={spritemap} />
			</div>
		</div>
	))

	.add('with folder card', () => (
		<div className="row">
			<div className="col-md-4">
				<CardFolder spritemap={spritemap} />
			</div>

			<div className="col-md-4">
				<CardFolderSelectable spritemap={spritemap} />
			</div>
		</div>
	))
	.add('with navigation card variant', () => (
		<div className="row">
			<div className="col-md-4">
				<CardInteractive image={portletImage} />
			</div>

			<div className="col-md-4">
				<CardInteractiveNoTruncateDescription image={contentImage} />
			</div>
			<div className="col-md-4">
				<CardInteractiveWithIcon spritemap={spritemap} />
			</div>
			<div className="col-md-4">
				<CardHorizontalInteractive spritemap={spritemap} />
			</div>
		</div>
	));
