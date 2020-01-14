/* eslint-disable no-sparse-arrays */
/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayModal, {ClayModalProvider, Context, useModal} from '../src';
import {Size, Status} from '../src/types';

const MyApp: React.FunctionComponent<any> = () => {
	const [state, dispatch] = React.useContext(Context);

	return (
		<ClayButton
			displayType="primary"
			onClick={() =>
				dispatch({
					payload: {
						body: <h1>{'Hello world!'}</h1>,
						footer: [
							<></>,
							<></>,
							<ClayButton key={3} onClick={state.onClose}>
								{'Primary'}
							</ClayButton>,
						],
						header: 'Title',
						size: 'lg',
					},
					type: 1,
				})
			}
		>
			{'Open modal'}
		</ClayButton>
	);
};

const size = {
	'full-screen': 'full-screen',
	lg: 'lg',
	none: null,
	sm: 'sm',
};

const status = {
	danger: 'danger',
	info: 'info',
	none: null,
	success: 'success',
	warning: 'warning',
};

storiesOf('Components|ClayModal', module)
	.add('default', () => {
		const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
		const {observer, onClose} = useModal({
			onClose: () => setVisibleModal(false),
		});

		return (
			<>
				{visibleModal && (
					<ClayModal
						observer={observer}
						size={select('Size', size, 'lg') as Size}
						spritemap={spritemap}
						status={select('Status', status, null) as Status}
					>
						<ClayModal.Header>
							{text('Title', 'Title')}
						</ClayModal.Header>
						<ClayModal.Body url={text('Url', null)}>
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
				<ClayButton
					displayType="primary"
					onClick={() => setVisibleModal(true)}
				>
					{'Open modal'}
				</ClayButton>
			</>
		);
	})
	.add('w/ Provider', () => (
		<ClayModalProvider spritemap={spritemap}>
			<MyApp />
		</ClayModalProvider>
	));
