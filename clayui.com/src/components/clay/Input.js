/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayForm, {ClayInput} from '@clayui/form';
import React from 'react';

import Editor from '../Editor';

const spritemap = '/images/icons/icons.svg';

const formInputGroupImports = `import ClayForm, {ClayInput} from '@clayui/form';
import React from 'react';`;

const formInputCode = `const Component = () => {
	return (
		<ClayForm.Group>
			<label htmlFor="basicInputText">Name</label>
			<ClayInput id="basicInputText" placeholder="Insert your name here" type="text" />
		</ClayForm.Group>
	);
}

render(<Component />)`;

const FormInput = () => {
	const scope = {
		ClayForm,
		ClayInput,
		spritemap,
	};

	return (
		<Editor
			code={formInputCode}
			imports={formInputGroupImports}
			scope={scope}
		/>
	);
};

const formInputTextAreaCode = `const Component = () => {
	return (
		<ClayForm.Group>
			<label htmlFor="basicInputText">Name</label>
			<ClayInput component="textarea" id="basicInputText" placeholder="Insert your name here" type="text" />
		</ClayForm.Group>
	);
}

render(<Component />)`;

const FormInputTextArea = () => {
	const scope = {
		ClayForm,
		ClayInput,
		spritemap,
	};

	return (
		<Editor
			code={formInputTextAreaCode}
			imports={formInputGroupImports}
			scope={scope}
		/>
	);
};

const formInputGroupSeparatedCode = `const Component = () => {
	return (
		<>
			<ClayForm.Group>
				<ClayInput.Group>
					<ClayInput.GroupItem shrink>
						<ClayInput.GroupText>
							{'@'}
						</ClayInput.GroupText>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem>
						<ClayInput placeholder="Username" type="text" />
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
			<ClayForm.Group>
				<ClayInput.Group>
					<ClayInput.GroupItem>
						<ClayInput placeholder="Email" type="text" />
					</ClayInput.GroupItem>
					<ClayInput.GroupItem shrink>
						<ClayInput.GroupText>
							{'@'}
						</ClayInput.GroupText>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem>
						<ClayInput placeholder="liferay" type="text" />
					</ClayInput.GroupItem>
					<ClayInput.GroupItem shrink>
						<ClayInput.GroupText>
							{'.com'}
						</ClayInput.GroupText>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
		</>
	);
}

render(<Component />)`;

const FormInputGroupSeparated = () => {
	const scope = {
		ClayForm,
		ClayInput,
		spritemap,
	};

	return (
		<Editor
			code={formInputGroupSeparatedCode}
			imports={formInputGroupImports}
			scope={scope}
		/>
	);
};

const formInputGroupConnectedCode = `const Component = () => {
	return (
		<>
			<ClayForm.Group>
				<ClayInput.Group>
					<ClayInput.GroupItem shrink prepend>
						<ClayInput.GroupText>
							{'@'}
						</ClayInput.GroupText>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem append>
						<ClayInput placeholder="Username" type="text" />
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
			<ClayForm.Group>
				<ClayInput.Group>
					<ClayInput.GroupItem prepend>
						<ClayInput placeholder="Email" type="text" />
					</ClayInput.GroupItem>
					<ClayInput.GroupItem shrink prepend>
						<ClayInput.GroupText>
							{'@'}
						</ClayInput.GroupText>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem prepend>
						<ClayInput placeholder="liferay" type="text" />
					</ClayInput.GroupItem>
					<ClayInput.GroupItem append shrink>
						<ClayInput.GroupText>
							{'.com'}
						</ClayInput.GroupText>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
		</>
	);
}

render(<Component />)`;

const FormInputGroupConnected = () => {
	const scope = {
		ClayForm,
		ClayInput,
		spritemap,
	};

	return (
		<Editor
			code={formInputGroupConnectedCode}
			imports={formInputGroupImports}
			scope={scope}
		/>
	);
};

const formInputGroupMixedImports = `import ClayForm, {ClayInput} from '@clayui/form';
import ClayButton from '@clayui/button';
import React from 'react';`;

const formInputGroupMixedCode = `const Component = () => {
	return (
		<ClayForm.Group>
			<ClayInput.Group>
				<ClayInput.GroupItem shrink>
					<ClayInput.GroupText>
						{'@'}
					</ClayInput.GroupText>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem prepend>
					<ClayInput placeholder="Username" type="text" />
				</ClayInput.GroupItem>
				<ClayInput.GroupItem append shrink>
					<ClayButton displayType="secondary" type="submit">Submit</ClayButton>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
	);
}

render(<Component />)`;

const FormInputGroupMixed = () => {
	const scope = {
		ClayButton,
		ClayForm,
		ClayInput,
		spritemap,
	};

	return (
		<Editor
			code={formInputGroupMixedCode}
			imports={formInputGroupMixedImports}
			scope={scope}
		/>
	);
};

export {
	FormInput,
	FormInputGroupConnected,
	FormInputGroupMixed,
	FormInputGroupSeparated,
	FormInputTextArea,
};
