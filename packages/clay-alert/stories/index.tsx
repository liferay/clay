/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayAlert, {DisplayType} from '../src';

const ClayToastDemo = () => {
	const [toastItems, setToastItems] = React.useState<Array<number>>([]);

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
				{toastItems.map((value) => (
					<ClayAlert
						autoClose={5000}
						key={value}
						onClose={() => {
							setToastItems((prevItems) =>
								prevItems.filter((item) => item !== value)
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
	const [showDismisible, setShowDismisible] = React.useState<boolean>(true);

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
			variant={select(
				'Variant',
				{
					feedback: 'feedback',
					none: undefined,
					stripe: 'stripe',
				},
				undefined
			)}
		>
			{text('Content', 'This is an alert!')}
		</ClayAlert>
	))
	.add('w/ feedback variant', () => (
		<>
			<ClayAlert
				displayType="danger"
				spritemap={spritemap}
				title="Error Indicator"
				variant="feedback"
			/>
			<ClayAlert
				displayType="info"
				spritemap={spritemap}
				title="Success Indicator"
				variant="feedback"
			/>
			<ClayAlert
				displayType="success"
				spritemap={spritemap}
				title="Info Indicator"
				variant="feedback"
			/>
			<ClayAlert
				displayType="warning"
				spritemap={spritemap}
				title="Warning Indicator"
				variant="feedback"
			/>
		</>
	))
	.add('w/o title', () => (
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
			variant={boolean('Stripe Variant', false) ? 'stripe' : undefined}
		>
			{text('Content', 'This is an alert!')}
		</ClayAlert>
	))
	.add('w/ autoclose and no icon', () => {
		const [show, setShow] = React.useState(true);

		return (
			<>
				{show && (
					<ClayAlert
						autoClose={2000}
						hideCloseIcon
						onClose={() => setShow(!show)}
						spritemap={spritemap}
						title={text('Title', 'Info')}
					>
						{text('Content', 'Wait 2000ms for me to disappear!')}
					</ClayAlert>
				)}
			</>
		);
	})
	.add('w/ a button', () => (
		<ClayAlert
			displayType="info"
			spritemap={spritemap}
			title="With a Button"
			variant={boolean('Stripe Variant', false) ? 'stripe' : undefined}
		>
			{'This is an alert with a button!'}

			<ClayAlert.Footer>
				<ClayButton.Group>
					<ClayButton alert>{'View'}</ClayButton>
				</ClayButton.Group>
			</ClayAlert.Footer>
		</ClayAlert>
	))
	.add('Toast', () => <ClayToastDemo />)
	.add('Dismissible', () => <ClayDismissibleDemo />);
