/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {ClayInput} from '../src';
import ClayForm from '../src/Form';

export default {
	argTypes: {
		sizing: {
			control: {type: 'select'},
			options: ['lg', 'sm'],
		},
	},
	title: 'Design System/Components/Input',
};

export const Default = (args: any) => (
	<div className="sheet">
		<ClayForm.Group>
			<label htmlFor="basicInputText">Name</label>
			<ClayInput
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

Default.args = {
	disabled: false,
	readOnly: false,
	sizing: undefined,
};

export const InputFeedback = () => (
	<div className="sheet">
		<ClayForm>
			<ClayForm.Group className="has-error">
				<label htmlFor="Feedback Input">Name</label>
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

export const Textarea = (args: any) => (
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

Textarea.args = {
	disabled: false,
	readOnly: false,
	sizing: undefined,
};

export const GroupSeparated = () => (
	<div className="sheet">
		<ClayForm.Group>
			<ClayInput.Group>
				<ClayInput.GroupItem shrink>
					<ClayInput.GroupText>@</ClayInput.GroupText>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem>
					<ClayInput
						aria-label="Username"
						placeholder="Username"
						type="text"
					/>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
		<ClayForm.Group>
			<ClayInput.Group>
				<ClayInput.GroupItem>
					<ClayInput
						aria-label="Email"
						placeholder="Email"
						type="text"
					/>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem shrink>
					<ClayInput.GroupText>@</ClayInput.GroupText>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem>
					<ClayInput
						aria-label="Email Host"
						placeholder="liferay"
						type="text"
					/>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem shrink>
					<ClayInput.GroupText>.com</ClayInput.GroupText>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
	</div>
);

export const GroupConnected = () => (
	<div className="sheet">
		<ClayForm.Group>
			<ClayInput.Group>
				<ClayInput.GroupItem prepend shrink>
					<ClayInput.GroupText>@</ClayInput.GroupText>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem append>
					<ClayInput
						aria-label="Username"
						placeholder="Username"
						type="text"
					/>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
		<ClayForm.Group>
			<ClayInput.Group>
				<ClayInput.GroupItem prepend>
					<ClayInput
						aria-label="Email"
						placeholder="Email"
						type="text"
					/>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem prepend shrink>
					<ClayInput.GroupText>@</ClayInput.GroupText>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem prepend>
					<ClayInput
						aria-label="Email Host"
						placeholder="liferay"
						type="text"
					/>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem append shrink>
					<ClayInput.GroupText>.com</ClayInput.GroupText>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
	</div>
);

export const GroupMixed = () => (
	<div className="sheet">
		<ClayForm.Group>
			<ClayInput.Group>
				<ClayInput.GroupItem shrink>
					<ClayInput.GroupText>@</ClayInput.GroupText>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem prepend>
					<ClayInput
						aria-label="Username"
						placeholder="Username"
						type="text"
					/>
				</ClayInput.GroupItem>
				<ClayInput.GroupItem append shrink>
					<button className="btn btn-secondary" type="submit">
						Submit
					</button>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
	</div>
);
