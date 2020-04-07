/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayModal, {useModal} from '@clayui/modal';
import React from 'react';

import Editor from '../Editor';

const modalImportsCode = `import ClayButton from '@clayui/button';
import ClayModal, {useModal} from '@clayui/modal';
`;

const modalCode = `const Component = () => {
	const [visible, setVisible] = React.useState(false);
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

export const Modal = () => {
	const scope = {
		ClayButton,
		ClayModal,

		useModal,
	};

	return <Editor code={modalCode} imports={modalImportsCode} scope={scope} />;
};

const modalHeaderImportsCode = `import ClayIcon from '@clayui/icon';
import ClayButton from '@clayui/button';
import ClayModal, {useModal} from '@clayui/modal';
`;

const modalHeaderCode = `const Component = () => {
	return (
		<>
			<ClayModal.Header>
				{'Modal Title'}
			</ClayModal.Header>

			<br />

			<ClayModal.Header withTitle={false}>
				<ClayModal.ItemGroup>
					<ClayModal.Item>
						<ClayModal.TitleSection>
							<ClayModal.Title>
								<ClayModal.TitleIndicator>
									<ClayIcon
										spritemap={spritemap}
										symbol="info-circle"
									/>
								</ClayModal.TitleIndicator>
								{'Modal Title'}
							</ClayModal.Title>
						</ClayModal.TitleSection>
					</ClayModal.Item>
					<ClayModal.Item shrink>
						<ClayModal.SubtitleSection>
							<ClayModal.Subtitle>
								{'Modal Subtitle'}
							</ClayModal.Subtitle>
						</ClayModal.SubtitleSection>
					</ClayModal.Item>
				</ClayModal.ItemGroup>

				<ClayButton
					aria-label="close"
					className="close"
					displayType="unstyled"
					onClick={() => {}}
				>
					<ClayIcon
						spritemap={spritemap}
						symbol="times"
					/>
				</ClayButton>
			</ClayModal.Header>
		</>
	);
}

render(<Component />)`;

export const ClayModalHeaderExamples = () => {
	const scope = {
		ClayButton,
		ClayIcon,
		ClayModal,

		useModal,
	};

	return (
		<Editor
			code={modalHeaderCode}
			imports={modalHeaderImportsCode}
			scope={scope}
		/>
	);
};
