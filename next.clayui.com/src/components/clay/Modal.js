/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayModal from '@clayui/modal';
import Editor from './Editor';
import React, {useState} from 'react';

const spritemap = '/images/icons/icons.svg';

const modalCode = `const Component = () => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			{visible && (
				<ClayModal
					onClose={() => setVisible(false)}
					size="lg"
					spritemap={spritemap}
					status="info"
				>
					{onClose => (
						<>
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
						</>
					)}
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
		useState,
	};
	return <Editor code={modalCode} scope={scope} />;
};

export {Modal};
