/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAlert from '@clayui/alert';
import React, {useState} from 'react';

import Editor from './Editor';

const spritemap = '/images/icons/icons.svg';

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

export const Alert = () => {
	const scope = {ClayAlert, spritemap, useState};
	const code = AlertCode;

	return <Editor code={code} scope={scope} />;
};

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
	const scope = {ClayAlert, spritemap, useState};
	const code = AlertToastContainerCode;

	return <Editor code={code} scope={scope} />;
};
