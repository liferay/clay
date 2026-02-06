/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import {ClayInput} from '../src';
import ClayForm from '../src/Form';

export default {
	argTypes: {
		sizing: {
			control: {type: 'select'},
			options: ['lg', 'regular', 'sm'],
		},
	},
	title: 'Design System/Components/Input',
};
export function Default(args: any) {
	return (
		<div className="sheet">
			<ClayForm.Group>
				<label htmlFor="basicInputText">Name</label>

				<ClayInput
					disabled={args.disabled}
					id="basicInputText"
					placeholder="Insert your name here"
					readOnly={args.readOnly}
					sizing={args.sizing === 'regular' ? null : args.sizing}
					type="text"
				/>
			</ClayForm.Group>
		</div>
	);
}

Default.args = {
	disabled: false,
	readOnly: false,
	sizing: 'regular',
};
export function InputFeedback() {
	return (
		<div className="sheet">
			<ClayForm>
				<ClayForm.Group className="has-error">
					<label htmlFor="Feedback Input">
						Name
						<ClayForm.HelpText>(More Help Text)</ClayForm.HelpText>
					</label>

					<ClayForm.FeedbackGroup>
						<ClayForm.HelpText>Help Text</ClayForm.HelpText>
					</ClayForm.FeedbackGroup>

					<ClayInput
						aria-describedby="input-group-error"
						aria-invalid="true"
						id="Feedback Input"
						placeholder="Enter some text..."
						type="text"
					/>

					<ClayForm.FeedbackGroup>
						<ClayForm.FeedbackItem id="input-group-error">
							<ClayForm.FeedbackIndicator symbol="exclamation-full" />
							This is a description of the error!
						</ClayForm.FeedbackItem>
					</ClayForm.FeedbackGroup>
				</ClayForm.Group>
			</ClayForm>
		</div>
	);
}
export function Textarea(args: any) {
	return (
		<div className="sheet">
			<ClayForm.Group>
				<label htmlFor="basicInputText">Name</label>

				<ClayInput
					component="textarea"
					disabled={args.disabled}
					id="basicInputText"
					placeholder="Insert your name here"
					readOnly={args.readOnly}
					sizing={args.sizing}
					type="text"
				/>
			</ClayForm.Group>
		</div>
	);
}

Textarea.args = {
	disabled: false,
	readOnly: false,
	sizing: undefined,
};
