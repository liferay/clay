/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAlert from '@clayui/alert';
import ClayButton from '@clayui/button';
import React from 'react';

import Editor from '../Editor';

const AlertCode = `const Component = () => {
	return (
		<>
			<ClayAlert displayType="info" spritemap={spritemap} title="Info">
				This is a default alert
			</ClayAlert>

			<ClayAlert displayType="warning" spritemap={spritemap} title="Warning" variant="stripe">
				This is a stripe alert
			</ClayAlert>
		</>
	);
}

render(<Component />);`;

const alertImportsCode = `import React from 'react';
import ClayAlert from '@clayui/alert';`;

export const Alert = () => {
	const scope = {ClayAlert};
	const code = AlertCode;

	return <Editor code={code} imports={alertImportsCode} scope={scope} />;
};

const AlertWithButtonCode = `const Component = () => {
	return (
		<ClayAlert
			displayType="info"
			spritemap={spritemap}
			title="With a Button"
		>
			{'This is an alert with a button!'}

			<ClayAlert.Footer>
				<ClayButton.Group>
					<ClayButton alert>{'View'}</ClayButton>
				</ClayButton.Group>
			</ClayAlert.Footer>
		</ClayAlert>
	);
}

render(<Component />);`;

const alertWithButtonImportsCode = `import React from 'react';
import ClayAlert from '@clayui/alert';
import ClayButton from '@clayui/button';`;

export const AlertWithButton = () => {
	const scope = {ClayAlert, ClayButton};
	const code = AlertWithButtonCode;

	return (
		<Editor
			code={code}
			imports={alertWithButtonImportsCode}
			scope={scope}
		/>
	);
};

const alertToastContainerImportsCode = `
import ClayAlert from '@clayui/alert';`;

const AlertToastContainerCode = `const Component = () => {
	const [toastItems, setToastItems] = useState([]);
	return (
		<>
			<div>
				<button
					onClick={() =>
						setToastItems([...toastItems, Math.random() * 100])
					}
				>
					{'Add Alert'}
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
					>{\`My value is \${value}\`}</ClayAlert>
				))}
			</ClayAlert.ToastContainer>
		</>
	);
}

render(<Component />);`;

export const AlertToastContainer = () => {
	const scope = {ClayAlert};
	const code = AlertToastContainerCode;

	return (
		<Editor
			code={code}
			imports={alertToastContainerImportsCode}
			scope={scope}
		/>
	);
};
