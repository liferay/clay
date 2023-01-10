/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import React from 'react';

import ClayAlert from '../src';

export default {
	argTypes: {
		displayType: {
			control: {type: 'select'},
			options: ['danger', 'info', 'secondary', 'success', 'warning'],
		},
		variant: {
			control: {type: 'select'},
			options: ['feedback', 'stripe', undefined],
		},
	},
	component: ClayAlert,
	title: 'Design System/Components/Alert',
};

export const Default = (args: any) => (
	<ClayAlert
		displayType={args.displayType}
		title={args.title}
		variant={args.variant}
	>
		{args.content}
	</ClayAlert>
);

export const Feedback = () => (
	<>
		<ClayAlert displayType="warning" variant="feedback">
			Data is temporarily unavailable
		</ClayAlert>
		<ClayAlert displayType="danger" variant="feedback">
			Error loading data
		</ClayAlert>
		<ClayAlert displayType="info" variant="feedback">
			News on the{' '}
			<a className="alert-link" href="#">
				blog
			</a>
		</ClayAlert>
		<ClayAlert displayType="success" variant="feedback">
			Data is saved
		</ClayAlert>
		<ClayAlert displayType="secondary" variant="feedback">
			Due to permission restrictions, this content cannot be displayed.
		</ClayAlert>
	</>
);

export const Toast = () => (
	<ClayAlert.ToastContainer>
		<ClayAlert
			actions={
				<ClayButton alert displayType="warning" small>
					Refresh
				</ClayButton>
			}
			displayType="warning"
			onClose={() => {}}
			title="Warning"
		>
			Data is temporarily unavailable
		</ClayAlert>
		<ClayAlert
			actions={
				<ClayButton alert displayType="danger" small>
					Retry
				</ClayButton>
			}
			displayType="danger"
			onClose={() => {}}
			title="Error"
			variant="inline"
		>
			Error loading data
		</ClayAlert>
		<ClayAlert displayType="info" onClose={() => {}}>
			News on the{' '}
			<a className="alert-link" href="#">
				blog
			</a>
		</ClayAlert>
		<ClayAlert displayType="success" onClose={() => {}} title="Success">
			Data is saved
		</ClayAlert>
		<ClayAlert displayType="success" onClose={() => {}} title="Success">
			Strong kopi-luwak half and half single origin single shot, half and
			half instant latte brewed latte. At, decaffeinated, blue mountain
			viennese barista, spoon carajillo shop viennese dark. And ristretto
			caffeine, plunger pot black, café au lait galão flavour foam strong.
			Macchiato roast, breve fair trade seasonal et cultivar.
		</ClayAlert>
		<ClayAlert displayType="secondary" onClose={() => {}}>
			Due to permission restrictions, this content cannot be displayed.
		</ClayAlert>
		<ClayAlert displayType="secondary" onClose={() => {}} title="Success">
			Due to permission restrictions, this content cannot be displayed.
		</ClayAlert>
	</ClayAlert.ToastContainer>
);

Default.args = {
	content: 'This is an alert!',
	displayType: 'info',
	title: 'Info',
	variant: undefined,
};
