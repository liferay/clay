/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import '@clayui/css/lib/css/atlas.css';
import ClayAlert, {DisplayType} from '../src';
import React, {useState} from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

const ClayToastDemo = () => {
	const [toastItems, setToastItems] = useState<Array<number>>([]);
	return (
		<>
			<div>
				{'Toast Items'}
				<button
					onClick={() =>
						setToastItems([...toastItems, Math.random() * 100])
					}
				>
					{'Add'}
				</button>
			</div>

			<ClayAlert.ToastContainer>
				{toastItems.map(value => (
					<ClayAlert
						autoClose={5000}
						key={value}
						onClose={() => {
							setToastItems(prevItems =>
								prevItems.filter(item => item !== value)
							);
						}}
						spritemap={spritemap}
						title={'Hola:'}
					>{`My value is ${value}`}</ClayAlert>
				))}
			</ClayAlert.ToastContainer>
		</>
	);
};

const ClayDismissibleDemo = () => {
	const [showDismisible, setShowDismisible] = useState<boolean>(true);

	return (
		<>
			<div>
				{'Dismissible Notification'}
				{!showDismisible && (
					<button onClick={() => setShowDismisible(true)}>
						{'Show'}
					</button>
				)}
			</div>

			{showDismisible && (
				<ClayAlert
					onClose={() => setShowDismisible(false)}
					spritemap={spritemap}
					title={'Info'}
				>
					{'This alert is dismissable'}
				</ClayAlert>
			)}
		</>
	);
};

storiesOf('Components|ClayAlert', module)
	.add('default', () => (
		<ClayAlert
			displayType={
				select(
					'Display Type',
					{
						danger: 'danger',
						info: 'info',
						success: 'success',
						warning: 'warning',
					},
					'info'
				) as DisplayType
			}
			spritemap={spritemap}
			title={text('Title', 'Info')}
			variant={boolean('Stripe Variant', false) ? 'stripe' : undefined}
		>
			{text('Content', 'This is an alert!')}
		</ClayAlert>
	))
	.add('Toast', () => <ClayToastDemo />)
	.add('Dismissible', () => <ClayDismissibleDemo />);
