/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayModal, {useModal} from '@clayui/modal';
import React, {useState} from 'react';

import Editor from './Editor';

const spritemap = '/images/icons/icons.svg';

const modalCode = `const Component = () => {
	const [visible, setVisible] = useState(false);
	const {observer, onClose} = useModal({
		onClose: () => setVisible(false),
	});

	return (
		<>
			{visible && (
				<ClayModal
					observer={observer}
					size="lg"
					spritemap={spritemap}
					status="info"
				>
					<ClayModal.Header>{'Title'}</ClayModal.Header>
					<ClayModal.Body>
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
				</ClayModal>
			)}
			<ClayButton displayType="primary" onClick={() => setVisible(true)}>
				{'Open modal'}
			</ClayButton>
		</>
	);
}

render(<Component />)`;

const Modal = () => {
	const scope = {
		ClayButton,
		ClayModal,
		spritemap,
		useModal,
		useState,
	};
	return <Editor code={modalCode} scope={scope} />;
};

export {Modal};
