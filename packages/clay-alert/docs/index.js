/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayAlert from '@clayui/alert';
import ClayButton from '@clayui/button';
import React from 'react';

const AlertCode = `const Component = () => {
	return (
		<>
			<ClayAlert displayType="info" spritemap={spritemap} title="Info">
				This is an info message.
			</ClayAlert>

			<ClayAlert displayType="secondary" spritemap={spritemap} title="Secondary">
				This is a secondary message.
			</ClayAlert>

			<ClayAlert displayType="success" spritemap={spritemap} title="Success">
				This is a success message.
			</ClayAlert>

			<ClayAlert displayType="warning" spritemap={spritemap} title="Warning">
				This is a warning message.
			</ClayAlert>

			<ClayAlert displayType="danger" spritemap={spritemap} title="Danger">
				This is a danger message.
			</ClayAlert>
		</>
	);
}

render(<Component />);`;

const alertImportsCode = `import React from 'react';
import ClayAlert from '@clayui/alert';`;

const alertJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const AlertJSPCode = `<clay:alert
	message="This is an info message."
	displayType="info"
	title="Info"
/>`;

export const Alert = () => {
	const scope = {ClayAlert};

	const codeSnippets = [
		{
			imports: alertImportsCode,
			name: 'React',
			value: AlertCode,
		},
		{
			disabled: true,
			imports: alertJSPImportsCode,
			name: 'JSP',
			value: AlertJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const AlertVariantsCode = `const Component = () => {
	return (
		<>
			<ClayAlert displayType="info" spritemap={spritemap} title="Info" variant="stripe">
				This is a stripe variant.
			</ClayAlert>

			<div className="c-mt-3">
				<ClayAlert displayType="success" spritemap={spritemap} title="This is an inline variant." variant="inline" />
			</div>

			<div className="c-mt-3">
				<ClayAlert displayType="danger" spritemap={spritemap} title="This is a feedback variant." variant="feedback" />
			</div>
		</>
	);
}

render(<Component />);`;

const alertVariantsImportsCode = `import React from 'react';
import ClayAlert from '@clayui/alert';`;

const alertVariantsJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const AlertVariantsJSPCode = `<clay:stripe
	message="This is a stripe variant."
	displayType="info"
	title="Info"
/>

<clay:alert
	displayType="success"
	title="This is an inline variant."
	variant="inline"
/>

<clay:alert
	displayType="danger"
	title="This is a feedback variant."
	variant="feedback"
/>`;

export const AlertVariants = () => {
	const scope = {ClayAlert};

	const codeSnippets = [
		{
			imports: alertVariantsImportsCode,
			name: 'React',
			value: AlertVariantsCode,
		},
		{
			imports: alertVariantsJSPImportsCode,
			name: 'JSP',
			value: AlertVariantsJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const AlertIconCode = `const Component = () => {
	return (
		<>
			<ClayAlert displayType="info" spritemap={spritemap} symbol="thumbs-up-full" title="Info" variant="stripe">
				This is a stripe variant.
			</ClayAlert>
		</>
	);
}

render(<Component />);`;

const alertIconImportsCode = `import React from 'react';
import ClayAlert from '@clayui/alert';`;

export const AlertIcon = () => {
	const scope = {ClayAlert};

	const codeSnippets = [
		{
			imports: alertIconImportsCode,
			name: 'React',
			value: AlertIconCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
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

const AlertInlineCode = `const Component = () => {
	return (
		<ClayAlert
			actions={
				<ClayButton.Group>
					<ClayButton alert>{'View'}</ClayButton>
				</ClayButton.Group>
			}
			displayType="info"
			spritemap={spritemap}
			title="With a Button"
			variant="inline"
		>
			{'This is an alert with a button!'}
		</ClayAlert>
	);
}

render(<Component />);`;

const alertInlineImportsCode = `import React from 'react';
import ClayAlert from '@clayui/alert';
import ClayButton from '@clayui/button';`;

export const InlineAlert = () => {
	const scope = {ClayAlert, ClayButton};
	const code = AlertInlineCode;

	return (
		<Editor code={code} imports={alertInlineImportsCode} scope={scope} />
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
