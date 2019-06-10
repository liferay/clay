/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import 'clay-css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
import ClayModal from '../src';
import React, {useState} from 'react';
import {select, text} from '@storybook/addon-knobs';
import {Size, Status} from '../src/types';
import {storiesOf} from '@storybook/react';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: (onClose: () => void) => React.ReactNode;
	size?: Size;
	status?: Status;
}

const ModalWithState: React.FunctionComponent<IProps> = ({
	children,
	size,
	status,
}) => {
	const [visible, setVisible] = useState<boolean>(false);

	return (
		<>
			{visible && (
				<ClayModal
					onClose={() => setVisible(false)}
					size={size}
					spritemap={spritemap}
					status={status}
				>
					{children}
				</ClayModal>
			)}
			<ClayButton displayType="primary" onClick={() => setVisible(true)}>
				{'Open modal'}
			</ClayButton>
		</>
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

storiesOf('ClayModal', module).add('default', () => (
	<ModalWithState
		size={select('Size', size, 'lg') as Size}
		status={select('Status', status, null) as Status}
	>
		{onClose => (
			<>
				<ClayModal.Header>{text('Title', 'Title')}</ClayModal.Header>
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
						<ClayButton onClick={onClose}>{'Primary'}</ClayButton>
					}
				/>
			</>
		)}
	</ModalWithState>
));
