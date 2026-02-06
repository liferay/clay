/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClaySticker from '@clayui/sticker';
import React from 'react';

import {ClayInput} from '../src';
import ClayForm from '../src/Form';

export default {
	title: 'Design System/Components/InputGroup',
};
export function GroupSeparated() {
	return (
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
}
export function GroupConnected() {
	return (
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
}
export function GroupMixed() {
	return (
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
}
export function Spaces() {
	return (
		<div className="sheet">
			<ClayForm.Group>
				<label htmlFor="selectASpace">Select a Space</label>

				<ClayInput.Group>
					<ClayInput.GroupItem>
						<ClayInput
							aria-label="Select a space"
							className="form-control-select"
							id="selectASpace"
							insetBefore
							placeholder="Select a Space"
							type="text"
							value="Space Program"
						/>

						<ClayInput.GroupInsetItem before>
							<ClaySticker displayType="outline-2" size="sm">
								S
							</ClaySticker>
						</ClayInput.GroupInsetItem>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
		</div>
	);
}
