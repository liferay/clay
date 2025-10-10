/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {ClayInput} from '../src';
import ClayForm from '../src/Form';

export default {
	title: 'Design System/Components/InputGroup',
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
